/**
 * Sync the authoritative LocalBusiness JSON-LD in index.html from buildLocalBusinessSchema().
 * Keeps static shell entity identical to src/data/business.ts + schema.ts.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildLocalBusinessSchema } from '../src/utils/schema.ts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const INDEX_HTML = path.join(ROOT, 'index.html');

const MARKER_START = '<!-- LOCALBUSINESS_JSONLD_START -->';
const MARKER_END = '<!-- LOCALBUSINESS_JSONLD_END -->';

function main() {
  const html = fs.readFileSync(INDEX_HTML, 'utf8');
  const schema = buildLocalBusinessSchema();
  const json = JSON.stringify(schema, null, 2);

  const block = `${MARKER_START}
    <script type="application/ld+json">
${json}
    </script>
    ${MARKER_END}`;

  let next: string;
  if (html.includes(MARKER_START) && html.includes(MARKER_END)) {
    const start = html.indexOf(MARKER_START);
    const end = html.indexOf(MARKER_END) + MARKER_END.length;
    next = `${html.slice(0, start)}${block}${html.slice(end)}`;
  } else {
    // Replace first LocalBusiness ld+json script (legacy shell)
    const replaced = html.replace(
      /<script type="application\/ld\+json">[\s\S]*?"@id":\s*"https:\/\/www\.reinharthauling\.com\/#business"[\s\S]*?<\/script>/i,
      block,
    );
    if (replaced === html) {
      console.error('Could not find LocalBusiness JSON-LD block in index.html to sync.');
      process.exit(1);
    }
    next = replaced;
  }

  fs.writeFileSync(INDEX_HTML, next, 'utf8');
  console.log('Synced LocalBusiness JSON-LD into index.html from buildLocalBusinessSchema().');
}

main();
