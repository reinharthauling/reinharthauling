/**
 * Build-time prerender: crawl sitemap routes against the Vite SPA shell,
 * capture fully rendered HTML (Helmet head + #root body), write to dist.
 *
 * Browser strategy:
 * - Vercel / CI Linux without system Chrome libs → puppeteer-core + @sparticuz/chromium
 * - Local macOS/dev → Playwright Chromium
 */
import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { getPrerenderRoutes, distHtmlPathForRoute } from './prerender-routes.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const PORT = Number(process.env.PRERENDER_PORT || 4179);
const ORIGIN = `http://127.0.0.1:${PORT}`;
const USER_AGENT =
  'Mozilla/5.0 (compatible; ReinhartHaulingPrerender/1.0; +https://www.reinharthauling.com)';

const useSparticuz =
  process.env.PRERENDER_ENGINE === 'sparticuz' ||
  Boolean(process.env.VERCEL) ||
  Boolean(process.env.AWS_LAMBDA_FUNCTION_NAME);

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.map': 'application/json',
  '.xml': 'application/xml',
  '.txt': 'text/plain; charset=utf-8',
};

function contentType(filePath) {
  return MIME[path.extname(filePath).toLowerCase()] || 'application/octet-stream';
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Serve dist assets; always return the original SPA shell for HTML navigations
 * so React Router can render each route during capture.
 */
function createSpaShellServer(shellHtml) {
  return http.createServer((req, res) => {
    try {
      const url = new URL(req.url || '/', ORIGIN);
      let pathname = decodeURIComponent(url.pathname);

      if (pathname.endsWith('/') && pathname !== '/') {
        pathname = pathname.slice(0, -1);
      }

      const candidate = path.normalize(path.join(DIST, pathname === '/' ? '' : pathname));
      if (!candidate.startsWith(DIST)) {
        res.writeHead(403).end('Forbidden');
        return;
      }

      if (pathname !== '/' && fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
        res.writeHead(200, { 'Content-Type': contentType(candidate) });
        fs.createReadStream(candidate).pipe(res);
        return;
      }

      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(shellHtml);
    } catch (err) {
      res.writeHead(500).end(String(err));
    }
  });
}

function expectedCanonicalPath(route) {
  return route === '/' ? 'https://www.reinharthauling.com/' : `https://www.reinharthauling.com${route}`;
}

/** Unified page helpers for Playwright vs Puppeteer API differences. */
function wrapPage(page, engine) {
  return {
    async goto(url) {
      if (engine === 'puppeteer') {
        await page.goto(url, { waitUntil: 'networkidle0', timeout: 90_000 });
      } else {
        await page.goto(url, { waitUntil: 'networkidle', timeout: 90_000 });
      }
    },
    waitForSelector(selector, options) {
      return page.waitForSelector(selector, options);
    },
    waitForFunction(fn, arg, options = {}) {
      if (engine === 'puppeteer') {
        return page.waitForFunction(fn, options, arg);
      }
      return page.waitForFunction(fn, arg, options);
    },
    evaluate(fn, arg) {
      return arg === undefined ? page.evaluate(fn) : page.evaluate(fn, arg);
    },
    content() {
      return page.content();
    },
    on(event, handler) {
      page.on(event, handler);
    },
  };
}

async function launchBrowser() {
  if (useSparticuz) {
    console.log('Prerender browser: Playwright + @sparticuz/chromium (Vercel-compatible)');
    const sparticuz = (await import('@sparticuz/chromium')).default;
    const { chromium: pwChromium } = await import('playwright-core');

    // Property setter (not a function) — disables WebGL / swiftshader extract
    sparticuz.setGraphicsMode = false;

    const browser = await pwChromium.launch({
      args: sparticuz.args,
      executablePath: await sparticuz.executablePath(),
      headless: true,
    });
    const context = await browser.newContext({
      viewport: { width: 1280, height: 720 },
      userAgent: USER_AGENT,
    });
    const page = await context.newPage();
    return {
      browser,
      page: wrapPage(page, 'playwright'),
      engine: 'playwright',
      closeExtra: () => context.close(),
    };
  }

  console.log('Prerender browser: Playwright Chromium');
  const { chromium } = await import('playwright');
  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 720 },
    userAgent: USER_AGENT,
  });
  const page = await context.newPage();
  return {
    browser,
    page: wrapPage(page, 'playwright'),
    engine: 'playwright',
    closeExtra: () => context.close(),
  };
}

async function captureRoute(page, route) {
  const url = `${ORIGIN}${route === '/' ? '/' : route}`;
  const expectedCanonical = expectedCanonicalPath(route);

  await page.goto(url);

  await page.waitForSelector('#root h1', { timeout: 45_000 });

  await page.waitForFunction(
    (canonical) => {
      const link = document.querySelector('link[rel="canonical"]');
      if (!link) return false;
      const href = (link.getAttribute('href') || '').replace(/\/$/, '') || '/';
      const expected = canonical.replace(/\/$/, '') || '/';
      if (canonical.endsWith('reinharthauling.com/')) {
        return href === 'https://www.reinharthauling.com' || href === 'https://www.reinharthauling.com/';
      }
      return href === expected || href === `${expected}/`;
    },
    expectedCanonical,
    { timeout: 45_000 },
  );

  await page.waitForFunction(() => {
    const root = document.getElementById('root');
    return Boolean(root && root.innerHTML.trim().length > 200);
  });

  await page.waitForFunction(() => {
    const og = document.querySelector('meta[property="og:title"]');
    const titleEl = document.querySelector('title');
    if (!og || !titleEl) return false;
    const ogTitle = og.getAttribute('content') || '';
    if (ogTitle && titleEl.textContent !== ogTitle) {
      titleEl.textContent = ogTitle;
      document.title = ogTitle;
    }
    return Boolean(ogTitle) && document.title === ogTitle;
  });

  await sleep(250);

  await page.evaluate(() => {
    window.scrollTo(0, 0);
    document.querySelectorAll('[data-prerender-strip]').forEach((el) => el.remove());
  });
  await sleep(100);

  const html = await page.content();

  if (!html.includes('<h1') && !html.includes('<h1 ')) {
    throw new Error(`No H1 in captured HTML for ${route}`);
  }
  if (!/#root[\s\S]{200,}<\/div>\s*<\/body>/i.test(html) && !html.includes('id="root"')) {
    throw new Error(`#root missing or empty for ${route}`);
  }

  return html;
}

function ensureDir(filePath) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

function dedupeHead(html) {
  let out = html;

  const titles = [...out.matchAll(/<title[^>]*>[\s\S]*?<\/title>/gi)];
  if (titles.length > 1) {
    for (const t of titles.slice(0, -1)) {
      out = out.replace(t[0], '');
    }
  }

  const dropAllButLast = (regex) => {
    const matches = [...out.matchAll(regex)];
    if (matches.length <= 1) return;
    for (const m of matches.slice(0, -1)) {
      out = out.replace(m[0], '');
    }
  };

  dropAllButLast(/<meta[^>]+name=["']description["'][^>]*>/gi);
  dropAllButLast(/<link[^>]+rel=["']canonical["'][^>]*>/gi);
  dropAllButLast(/<meta[^>]+property=["']og:title["'][^>]*>/gi);
  dropAllButLast(/<meta[^>]+property=["']og:description["'][^>]*>/gi);
  dropAllButLast(/<meta[^>]+property=["']og:url["'][^>]*>/gi);
  dropAllButLast(/<meta[^>]+name=["']twitter:title["'][^>]*>/gi);
  dropAllButLast(/<meta[^>]+name=["']twitter:description["'][^>]*>/gi);

  const ogTitle =
    out.match(/<meta[^>]+property=["']og:title["'][^>]+content=["']([^"']+)["'][^>]*>/i)?.[1] ||
    out.match(/<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:title["'][^>]*>/i)?.[1];
  if (ogTitle) {
    if (/<title(?:\s[^>]*)?>[\s\S]*?<\/title>/i.test(out)) {
      out = out.replace(/<title(?:\s[^>]*)?>[\s\S]*?<\/title>/i, `<title>${ogTitle}</title>`);
    } else {
      out = out.replace(/<\/head>/i, `<title>${ogTitle}</title></head>`);
    }
  }

  return out;
}

async function main() {
  if (!fs.existsSync(DIST)) {
    console.error('dist/ not found. Run vite build first.');
    process.exit(1);
  }

  const shellPath = path.join(DIST, 'index.html');
  const shellHtml = fs.readFileSync(shellPath, 'utf8');
  const routes = getPrerenderRoutes();

  console.log(`Prerendering ${routes.length} routes from sitemap…`);

  const server = createSpaShellServer(shellHtml);
  await new Promise((resolve, reject) => {
    server.once('error', reject);
    server.listen(PORT, '127.0.0.1', resolve);
  });

  const { browser, page, closeExtra } = await launchBrowser();

  const captures = new Map();
  const failures = [];

  try {
    page.on('pageerror', (err) => {
      console.warn(`  [pageerror] ${err.message}`);
    });

    for (const route of routes) {
      process.stdout.write(`  → ${route} … `);
      try {
        const html = await captureRoute(page, route);
        captures.set(route, html);
        console.log('ok');
      } catch (err) {
        console.log('FAIL');
        failures.push({ route, error: err instanceof Error ? err.message : String(err) });
      }
    }

    if (closeExtra) await closeExtra();
  } finally {
    await browser.close();
    await new Promise((resolve) => server.close(resolve));
  }

  if (failures.length) {
    console.error('\nPrerender failures:');
    for (const f of failures) {
      console.error(`  ${f.route}: ${f.error}`);
    }
    process.exit(1);
  }

  for (const [route, html] of captures) {
    let finalHtml = dedupeHead(html);

    if (!/application\/ld\+json/i.test(finalHtml) || !/#business/.test(finalHtml)) {
      const lb = shellHtml.match(
        /<script type="application\/ld\+json">[\s\S]*?"@id":\s*"https:\/\/www\.reinharthauling\.com\/#business"[\s\S]*?<\/script>/i,
      );
      if (lb) {
        finalHtml = finalHtml.replace(/<\/head>/i, `${lb[0]}\n</head>`);
      }
    }

    const outPath = distHtmlPathForRoute(route);
    ensureDir(outPath);
    fs.writeFileSync(outPath, finalHtml, 'utf8');
  }

  console.log(`\nWrote ${captures.size} prerendered HTML files under dist/`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
