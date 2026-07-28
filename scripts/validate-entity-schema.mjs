/**
 * Validate authoritative LocalBusiness entity in prerendered HTML.
 * Ensures one #business entity, stable NAP, priority areaServed, and sameAs.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const EXPECTED = {
  id: 'https://www.reinharthauling.com/#business',
  name: 'Reinhart Hauling & Cleanouts',
  phone: '+1-615-200-0064',
  email: 'office@reinharthauling.com',
  cities: ['Goodlettsville', 'Hendersonville', 'Gallatin', 'Nashville', 'Mt. Juliet'],
  sameAs: [
    'https://www.google.com/maps/place/Reinhart+Hauling+%26+Cleanouts/@36.2301508,-86.9330853,10z/data=!3m1!4b1!4m6!3m5!1s0x24431289d5ad9585:0x6952fecee43c2730!8m2!3d36.2300489!4d-86.603451!16s%2Fg%2F11z164v10r',
    'https://www.facebook.com/reinharthaulingcleanouts/',
    'https://www.yelp.com/biz/reinhart-hauling-and-cleanouts-goodlettsville',
  ],
  priceRange: '$$',
  hasMap:
    'https://www.google.com/maps/place/Reinhart+Hauling+%26+Cleanouts/@36.2301508,-86.9330853,10z/data=!3m1!4b1!4m6!3m5!1s0x24431289d5ad9585:0x6952fecee43c2730!8m2!3d36.2300489!4d-86.603451!16s%2Fg%2F11z164v10r',
};

const ROUTES = [
  '/',
  '/pricing',
  '/property-cleanup',
  '/property-cleanup-gallatin',
  '/about',
];

function distPath(route) {
  if (route === '/') return path.join(ROOT, 'dist', 'index.html');
  return path.join(ROOT, 'dist', ...route.replace(/^\//, '').split('/'), 'index.html');
}

function extractLocalBusiness(html) {
  const scripts = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi)];
  const businesses = [];
  for (const m of scripts) {
    let data;
    try {
      data = JSON.parse(m[1]);
    } catch {
      continue;
    }
    const nodes = Array.isArray(data) ? data : [data];
    for (const node of nodes) {
      if (!node || typeof node !== 'object') continue;
      const type = node['@type'];
      const types = Array.isArray(type) ? type : [type];
      if (types.includes('LocalBusiness') || types.includes('HomeAndConstructionBusiness')) {
        businesses.push(node);
      }
    }
  }
  return businesses;
}

function main() {
  const errors = [];

  for (const route of ROUTES) {
    const file = distPath(route);
    if (!fs.existsSync(file)) {
      errors.push(`${route}: missing ${file}`);
      continue;
    }
    const html = fs.readFileSync(file, 'utf8');
    const businesses = extractLocalBusiness(html);
    const full = businesses.filter((b) => b['@id'] === EXPECTED.id && b.name && b.telephone);
    const refs = businesses.filter((b) => b['@id'] === EXPECTED.id && !b.telephone && !b.name);

    if (full.length !== 1) {
      errors.push(`${route}: expected exactly 1 full LocalBusiness @ ${EXPECTED.id}, found ${full.length}`);
      continue;
    }

    const entity = full[0];
    if (entity.name !== EXPECTED.name) errors.push(`${route}: name mismatch ${entity.name}`);
    if (entity.telephone !== EXPECTED.phone) errors.push(`${route}: phone mismatch ${entity.telephone}`);
    if (entity.email !== EXPECTED.email) errors.push(`${route}: email mismatch ${entity.email}`);
    if (entity.address?.streetAddress) errors.push(`${route}: unexpected streetAddress`);

    const areaNames = (entity.areaServed || [])
      .map((a) => a.name)
      .filter(Boolean);
    for (const city of EXPECTED.cities) {
      if (!areaNames.includes(city)) errors.push(`${route}: missing areaServed city ${city}`);
    }
    // Schema volume check: primary cities + Middle Tennessee only (approx)
    const cityOnly = (entity.areaServed || []).filter((a) => a['@type'] === 'City');
    if (cityOnly.length > 8) {
      errors.push(`${route}: areaServed City count too high (${cityOnly.length})`);
    }

    const sameAs = entity.sameAs || [];
    if (sameAs.length !== EXPECTED.sameAs.length) {
      errors.push(`${route}: sameAs length ${sameAs.length}, expected ${EXPECTED.sameAs.length}`);
    }
    for (const url of EXPECTED.sameAs) {
      if (!sameAs.includes(url)) errors.push(`${route}: missing sameAs ${url}`);
    }
    for (const url of sameAs) {
      if (!EXPECTED.sameAs.includes(url)) errors.push(`${route}: unexpected sameAs ${url}`);
    }
    if (entity.priceRange !== EXPECTED.priceRange) {
      errors.push(`${route}: priceRange expected ${EXPECTED.priceRange}, got ${entity.priceRange}`);
    }
    if (entity.hasMap !== EXPECTED.hasMap) {
      errors.push(`${route}: hasMap mismatch`);
    }

    // Conflicting full entities with different @id
    const otherFull = businesses.filter(
      (b) => b.telephone && b.name && b['@id'] && b['@id'] !== EXPECTED.id,
    );
    if (otherFull.length) {
      errors.push(`${route}: extra LocalBusiness entities ${otherFull.map((b) => b['@id']).join(', ')}`);
    }

    // Provider refs OK
    void refs;
  }

  if (errors.length) {
    console.error('Entity schema validation failed:');
    for (const e of errors) console.error(`  - ${e}`);
    process.exit(1);
  }

  console.log(`Entity schema validation passed for ${ROUTES.length} routes.`);
}

main();
