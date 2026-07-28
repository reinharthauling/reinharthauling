/**
 * Install Playwright Chromium for local prerender builds.
 * Skipped on Vercel — those builds use @sparticuz/chromium instead.
 */
import { execSync } from 'node:child_process';

if (process.env.VERCEL || process.env.PRERENDER_ENGINE === 'sparticuz') {
  console.log('Skipping Playwright browser install (Vercel / sparticuz engine).');
  process.exit(0);
}

execSync('npx playwright install chromium', { stdio: 'inherit' });
