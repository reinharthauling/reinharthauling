import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const SITEMAP_PATH = path.join(ROOT, 'public', 'sitemap.xml');
const DIST_SITEMAP_PATH = path.join(ROOT, 'dist', 'sitemap.xml');

/**
 * Parse site-local pathnames from sitemap.xml.
 * Prefers dist/sitemap.xml after build; falls back to public/.
 */
export function getPrerenderRoutes() {
  const sitemapFile = fs.existsSync(DIST_SITEMAP_PATH) ? DIST_SITEMAP_PATH : SITEMAP_PATH;
  const xml = fs.readFileSync(sitemapFile, 'utf8');
  const locs = [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/gi)].map((m) => m[1].trim());

  const routes = new Set();

  for (const loc of locs) {
    let url;
    try {
      url = new URL(loc);
    } catch {
      continue;
    }

    if (!url.hostname.includes('reinharthauling.com')) continue;

    let pathname = url.pathname || '/';
    if (pathname.length > 1 && pathname.endsWith('/')) {
      pathname = pathname.slice(0, -1);
    }

    // Exclude non-HTML / asset-looking paths
    if (/\.(xml|txt|json|jpg|jpeg|png|gif|webp|svg|ico|css|js|map|mp4|mov|pdf)$/i.test(pathname)) {
      continue;
    }

    routes.add(pathname || '/');
  }

  // Required minimum set (also expected in sitemap)
  for (const required of [
    '/',
    '/pricing',
    '/what-we-take',
    '/property-cleanup',
    '/property-cleanouts',
    '/garage-cleanouts',
    '/commercial-cleanouts',
    '/junk-removal',
    '/junk-removal-goodlettsville',
    '/property-cleanup-gallatin',
    '/projects',
    '/projects/investor-property-cleanup-gallatin',
  ]) {
    routes.add(required);
  }

  return [...routes].sort((a, b) => {
    if (a === '/') return -1;
    if (b === '/') return 1;
    return a.localeCompare(b);
  });
}

export function distHtmlPathForRoute(route) {
  if (route === '/') return path.join(ROOT, 'dist', 'index.html');
  const segments = route.replace(/^\//, '').split('/');
  return path.join(ROOT, 'dist', ...segments, 'index.html');
}
