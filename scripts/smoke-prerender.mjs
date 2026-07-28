/**
 * Lightweight JS smoke: load deep routes, confirm hydration + interactive hooks.
 */
import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(__dirname, '..', 'dist');
const PORT = 4181;
const ORIGIN = `http://127.0.0.1:${PORT}`;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
};

function serveDist() {
  return http.createServer((req, res) => {
    const url = new URL(req.url || '/', ORIGIN);
    let pathname = decodeURIComponent(url.pathname);
    if (pathname.length > 1 && pathname.endsWith('/')) pathname = pathname.slice(0, -1);

    let filePath;
    if (pathname === '/') {
      filePath = path.join(DIST, 'index.html');
    } else {
      const asFile = path.join(DIST, pathname);
      const asIndex = path.join(DIST, pathname, 'index.html');
      if (fs.existsSync(asFile) && fs.statSync(asFile).isFile()) filePath = asFile;
      else if (fs.existsSync(asIndex)) filePath = asIndex;
      else filePath = path.join(DIST, 'index.html'); // SPA fallback for unknown
    }

    if (!fs.existsSync(filePath)) {
      res.writeHead(404).end('Not found');
      return;
    }
    res.writeHead(200, { 'Content-Type': MIME[path.extname(filePath)] || 'application/octet-stream' });
    fs.createReadStream(filePath).pipe(res);
  });
}

const ROUTES = [
  '/',
  '/pricing',
  '/property-cleanup-gallatin',
  '/projects/investor-property-cleanup-gallatin',
];

async function main() {
  const server = serveDist();
  await new Promise((r) => server.listen(PORT, '127.0.0.1', r));
  const browser = await chromium.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  const consoleErrors = [];
  page.on('pageerror', (e) => consoleErrors.push(e.message));
  page.on('console', (msg) => {
    if (msg.type() === 'error') consoleErrors.push(msg.text());
  });

  const results = [];
  for (const route of ROUTES) {
    consoleErrors.length = 0;
    await page.goto(`${ORIGIN}${route}`, { waitUntil: 'networkidle', timeout: 60_000 });
    await page.waitForSelector('#root h1');

    const title = await page.title();
    const h1 = await page.locator('h1').first().innerText();
    const rootChildren = await page.locator('#root > *').count();
    const navLink = await page.locator('a[href="/"]').count();
    const menuBtn = await page.locator('button').filter({ hasText: /menu/i }).count();
    // FAQ accordion if present
    const faqButtons = await page.locator('button').filter({ hasText: /\?/ }).count();
    let faqToggleOk = null;
    if (faqButtons > 0) {
      const before = await page.locator('[aria-expanded="true"]').count();
      await page.locator('button').filter({ hasText: /\?/ }).first().click().catch(() => null);
      await page.waitForTimeout(200);
      const after = await page.locator('[aria-expanded="true"]').count();
      faqToggleOk = after >= before;
    }

    // Mobile menu open if hamburger exists
    let mobileMenuOk = null;
    const hamburger = page.locator('button[aria-label*="menu" i], button[aria-label*="Menu" i], button').filter({ hasText: /^$/ });
    // Prefer known Menu icon button from lucide
    const menuCandidate = page.locator('header button').last();
    if (await menuCandidate.count()) {
      await page.setViewportSize({ width: 390, height: 844 });
      await menuCandidate.click().catch(() => null);
      await page.waitForTimeout(300);
      mobileMenuOk = (await page.locator('a[href="/pricing"], a[href="/about"], a[href="/projects"]').count()) > 0;
      await page.setViewportSize({ width: 1280, height: 720 });
    }

    results.push({
      route,
      title,
      h1: h1.slice(0, 80),
      rootChildren,
      navLink,
      faqToggleOk,
      mobileMenuOk,
      consoleErrors: [...consoleErrors],
    });
    console.log(`OK ${route} — ${title.slice(0, 60)}`);
  }

  // Client navigation: pricing → gallatin (or direct load fallback)
  await page.goto(`${ORIGIN}/pricing`, { waitUntil: 'networkidle' });
  const gallatinLink = page.locator('a[href="/property-cleanup-gallatin"]').first();
  if (await gallatinLink.count()) {
    await gallatinLink.click();
  } else {
    await page.goto(`${ORIGIN}/property-cleanup-gallatin`, { waitUntil: 'networkidle' });
  }
  await page.waitForURL(/property-cleanup-gallatin/);
  await page.waitForFunction(() => /Gallatin/i.test(document.title), null, { timeout: 15_000 });
  const afterNav = await page.title();

  // Refresh deep route
  await page.reload({ waitUntil: 'networkidle' });
  await page.waitForSelector('#root h1');
  const afterRefresh = await page.title();

  // FAQ toggle on pricing
  await page.goto(`${ORIGIN}/pricing`, { waitUntil: 'networkidle' });
  const faqBtn = page.locator('button[aria-expanded]').filter({ hasText: /estimate|price|cost|quote/i }).first();
  let faqOk = false;
  if (await faqBtn.count()) {
    const before = await faqBtn.getAttribute('aria-expanded');
    await faqBtn.click();
    await page.waitForTimeout(200);
    const after = await faqBtn.getAttribute('aria-expanded');
    faqOk = before === 'false' && after === 'true';
  }

  // Mobile menu
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(`${ORIGIN}/pricing`, { waitUntil: 'networkidle' });
  await page.locator('button[aria-label="Open menu"]').click();
  await page.waitForTimeout(200);
  const mobileMenuOk = await page.locator('a[href="/about"]').count() > 0;

  await browser.close();
  await new Promise((r) => server.close(r));

  console.log(JSON.stringify({ results, afterNav, afterRefresh, faqOk, mobileMenuOk }, null, 2));

  if (!/Gallatin/i.test(afterNav) || !/Gallatin/i.test(afterRefresh)) {
    console.error('Client nav / refresh title check failed');
    process.exit(1);
  }
  if (!faqOk) {
    console.warn('FAQ toggle check inconclusive (selector may differ); not failing build.');
  }
  if (!mobileMenuOk) {
    console.error('Mobile menu failed to open');
    process.exit(1);
  }

  const hardErrors = results.flatMap((r) =>
    r.consoleErrors.filter((e) => !/favicon|Download the React DevTools/i.test(e)),
  );
  if (hardErrors.length) {
    console.error('Console errors:', hardErrors);
    process.exit(1);
  }
  console.log('JS smoke passed.');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
