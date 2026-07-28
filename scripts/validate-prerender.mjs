/**
 * Validate prerendered HTML for every sitemap route.
 * Fails the build if essentials are missing.
 */
import fs from 'node:fs';
import { getPrerenderRoutes, distHtmlPathForRoute } from './prerender-routes.mjs';

const REQUIRED_JSONLD_HINT = /application\/ld\+json/i;

const HOME_DESCRIPTION =
  'Goodlettsville-based property and commercial cleanouts across Middle Tennessee. Estate, rental, and selective demolition support. Insured. Call 615-200-0064.';

function extractAll(html, regex) {
  return [...html.matchAll(regex)].map((m) => m[1].trim());
}

function extractTag(html, regex) {
  const m = html.match(regex);
  return m ? m[1].trim() : '';
}

function validateFile(route, filePath) {
  const errors = [];

  if (!fs.existsSync(filePath)) {
    return [`missing file: ${filePath}`];
  }

  const html = fs.readFileSync(filePath, 'utf8');

  const titles = extractAll(html, /<title[^>]*>([^<]*)<\/title>/gi);
  if (titles.length !== 1) {
    errors.push(`expected exactly 1 <title>, found ${titles.length}`);
  }
  const title = titles[titles.length - 1] || '';
  if (!title || title.length < 8) {
    errors.push('missing or short <title>');
  }
  if (route !== '/' && /^Reinhart Hauling(?: &amp;|&) Cleanouts$/i.test(title)) {
    errors.push(`shell/default title on deep route: ${title}`);
  }

  const descriptions = [
    ...extractAll(html, /<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/gi),
    ...extractAll(html, /<meta[^>]+content=["']([^"']*)["'][^>]+name=["']description["']/gi),
  ];
  // Deduplicate identical extractions from dual regex
  const uniqueDescs = [...new Set(descriptions)];
  if (uniqueDescs.length !== 1) {
    errors.push(`expected exactly 1 meta description, found ${uniqueDescs.length}`);
  }
  const description = uniqueDescs[0] || '';
  if (!description || description.length < 20) {
    errors.push('missing or short meta description');
  }
  if (route !== '/' && description === HOME_DESCRIPTION) {
    errors.push('homepage meta description on deep route');
  }

  const canonicals = [
    ...extractAll(html, /<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']*)["']/gi),
    ...extractAll(html, /<link[^>]+href=["']([^"']*)["'][^>]+rel=["']canonical["']/gi),
  ];
  const uniqueCanon = [...new Set(canonicals)];
  if (uniqueCanon.length !== 1) {
    errors.push(`expected exactly 1 canonical, found ${uniqueCanon.length}`);
  }
  const canonical = uniqueCanon[0] || '';
  if (!canonical) {
    errors.push('missing canonical');
  } else {
    const expected =
      route === '/'
        ? 'https://www.reinharthauling.com'
        : `https://www.reinharthauling.com${route}`;
    const normalized = canonical.replace(/\/$/, '');
    const expectedNorm = expected.replace(/\/$/, '');
    if (normalized !== expectedNorm) {
      errors.push(`canonical mismatch: got ${canonical}`);
    }
  }

  if (!/<h1[\s>]/i.test(html)) {
    errors.push('missing H1');
  }

  if (!html.includes('id="root"') || /id=["']root["'][^>]*>\s*<\/div>/i.test(html)) {
    errors.push('#root is empty or missing meaningful content');
  }

  const textish = html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  if (textish.length < 400) {
    errors.push('insufficient visible body text');
  }

  const internalLinks = (html.match(/href=["']\/[^"']*["']/g) || []).length;
  if (internalLinks < 1) {
    errors.push('no crawlable internal links (href="/…")');
  }

  if (!REQUIRED_JSONLD_HINT.test(html)) {
    errors.push('no JSON-LD (application/ld+json) found');
  }

  return errors;
}

function main() {
  const routes = getPrerenderRoutes();
  console.log(`Validating ${routes.length} prerendered routes…`);

  let failed = 0;
  for (const route of routes) {
    const filePath = distHtmlPathForRoute(route);
    const errors = validateFile(route, filePath);
    if (errors.length) {
      failed += 1;
      console.error(`✗ ${route}`);
      for (const e of errors) console.error(`    - ${e}`);
    } else {
      console.log(`✓ ${route}`);
    }
  }

  if (failed) {
    console.error(`\nValidation failed for ${failed} route(s).`);
    process.exit(1);
  }

  console.log(`\nAll ${routes.length} routes passed prerender validation.`);
}

main();
