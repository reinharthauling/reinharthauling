/** Central NAP, hours, geo, and entity facts for SEO/AEO/schema.
 * Do not expose a private street address. Do not add unverified geo coordinates.
 */

export const SITE_URL = 'https://www.reinharthauling.com';

export const BUSINESS = {
  name: 'Reinhart Hauling & Cleanouts',
  url: SITE_URL,
  phoneDisplay: '615-200-0064',
  phoneTel: 'tel:+16152000064',
  /** Schema.org telephone format */
  phoneSchema: '+1-615-200-0064',
  email: 'office@reinharthauling.com',
  priceRange: '$$',
  description:
    'Property cleanouts, commercial cleanouts, estate and rental turnovers, and selective demolition support throughout Middle Tennessee. Based in Goodlettsville and serving as a mobile, insured service-area business.',
  owner: {
    name: 'Jeremiah Reinhart',
    givenName: 'Jeremiah',
    familyName: 'Reinhart',
    jobTitle: 'Owner & Founder',
  },
  /** Locality only — no street address (mobile service-area business). */
  address: {
    addressLocality: 'Goodlettsville',
    addressRegion: 'TN',
    addressCountry: 'US',
  },
  isInsured: true,
  logo: `${SITE_URL}/branding/Reinhart-hauling-cleanouts-nashville.png`,
  image: `${SITE_URL}/og/reinhart-hauling-cleanouts-social-preview.jpg?v=2`,
} as const;

/** Preferred default Open Graph / social preview image (absolute URL). */
export const DEFAULT_OG_IMAGE = BUSINESS.image;

/** Mon–Fri and Saturday only in schema. Sunday is Closed (no OpeningHoursSpecification entry). */
export const OPENING_HOURS = [
  {
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'] as const,
    opens: '07:00',
    closes: '20:00',
  },
  {
    dayOfWeek: 'Saturday' as const,
    opens: '08:00',
    closes: '18:00',
  },
];

/** Visible display copy for business hours (footer, contact, etc.). */
export const BUSINESS_HOURS_DISPLAY = {
  title: 'Business Hours',
  weekdayLabel: 'Mon–Fri',
  weekdayHours: '7:00 AM–8:00 PM',
  saturdayLabel: 'Saturday',
  saturdayHours: '8:00 AM–6:00 PM',
  sundayLabel: 'Sunday',
  sundayHours: 'Closed',
} as const;

export type ServiceCity = {
  name: string;
  /**
   * When true, emit as Place (neighborhood / community), not City.
   * Used for Nashville-area communities — not separate office locations.
   */
  isPlace?: boolean;
  containedInCity?: string;
};

/**
 * Approved service areas (owner-approved list).
 * Primary markets are listed first as City entries.
 * Nashville-area communities (East Nashville, Downtown Nashville, Old Hickory, Joelton,
 * Madison, Hermitage) are Places contained in Nashville — not separate business locations.
 * Do not create dedicated Madison/Hermitage landing pages without owner approval.
 */
export const SERVICE_CITIES: ServiceCity[] = [
  { name: 'Goodlettsville' },
  { name: 'Hendersonville' },
  { name: 'Gallatin' },
  { name: 'White House' },
  { name: 'Greenbrier' },
  { name: 'Ridgetop' },
  { name: 'Springfield' },
  { name: 'Nashville' },
  { name: 'Belle Meade' },
  { name: 'Brentwood' },
  { name: 'Franklin' },
  { name: 'Mt. Juliet' },
  { name: 'Lebanon' },
  { name: 'Portland' },
  { name: 'East Nashville', isPlace: true, containedInCity: 'Nashville' },
  { name: 'Downtown Nashville', isPlace: true, containedInCity: 'Nashville' },
  { name: 'Old Hickory', isPlace: true, containedInCity: 'Nashville' },
  { name: 'Joelton', isPlace: true, containedInCity: 'Nashville' },
  { name: 'Madison', isPlace: true, containedInCity: 'Nashville' },
  { name: 'Hermitage', isPlace: true, containedInCity: 'Nashville' },
];

/** Display names for UI grids (approved areas in listed order). */
export const SERVICE_AREA_DISPLAY_NAMES = SERVICE_CITIES.map((c) => c.name);

/**
 * @deprecated Alias of SERVICE_AREA_DISPLAY_NAMES (pending-review list resolved).
 * Prefer SERVICE_AREA_DISPLAY_NAMES for new code.
 */
export const SERVICE_AREA_DISPLAY_NAMES_WITH_PENDING = SERVICE_AREA_DISPLAY_NAMES;

/** Incorporated city names only (for schema City nodes). */
export const INCORPORATED_CITY_NAMES = SERVICE_CITIES.filter((c) => !c.isPlace).map((c) => c.name);

export const SERVICE_AREAS_FAQ_ANSWER =
  'We serve Goodlettsville, Hendersonville, Gallatin, White House, Greenbrier, Ridgetop, Springfield, Nashville (including East Nashville, Downtown Nashville, Old Hickory, Joelton, Madison, and Hermitage), Belle Meade, Brentwood, Franklin, Mt. Juliet, Lebanon, Portland, and surrounding Middle Tennessee communities.';

/** Primary services for offer catalog / schema emphasis. */
export const PRIMARY_SERVICES = [
  'Property Cleanouts',
  'Commercial Cleanouts',
  'Estate Cleanouts',
  'Hoarder Cleanouts',
  'Rental Property Cleanouts',
  'Eviction Cleanouts',
  'Foreclosure Cleanouts',
  'Commercial Property Turnovers',
  'Retail Decommissioning',
  'Retail Store Cleanouts',
  'Warehouse Cleanouts',
  'Office Load-Outs',
  'Property Management Cleanouts',
  'Interior Selective Demolition',
  'Commercial Interior Strip-Outs',
  'Tenant Improvement Demolition',
  'Construction Cleanup',
  'Construction Debris Removal',
] as const;

export const HOME_FAQS = [
  {
    question: 'What does Reinhart Hauling & Cleanouts do?',
    answer:
      'Reinhart Hauling & Cleanouts is a Middle Tennessee property cleanup, commercial cleanout, and selective demolition support company. We clear residential and commercial properties so sales, renovations, turnovers, and construction projects can move forward.',
  },
  {
    question: 'Who owns Reinhart Hauling & Cleanouts?',
    answer:
      'Jeremiah Reinhart owns and operates Reinhart Hauling & Cleanouts, based in Goodlettsville, Tennessee, serving Middle Tennessee as a mobile, insured service-area business.',
  },
  {
    question: 'What areas does Reinhart serve?',
    answer: SERVICE_AREAS_FAQ_ANSWER.replace(/^We serve/, 'Reinhart serves'),
  },
  {
    question: 'Is Reinhart Hauling insured?',
    answer:
      'Yes. Reinhart Hauling & Cleanouts is fully insured for residential and commercial property cleanup, cleanout, and selective demolition support work.',
  },
  {
    question: 'How do I request an estimate?',
    answer:
      'Request an estimate through the website form, call 615-200-0064, text, or email office@reinharthauling.com. Share the property location, scope of work, and timing so we can provide clear next steps and pricing.',
  },
  {
    question: 'What kinds of projects do you handle?',
    answer:
      'Typical projects include property cleanouts, estate cleanouts, hoarder cleanouts, eviction and rental turnovers, commercial cleanouts, office load-outs, warehouse cleanouts, retail decommissioning, construction debris removal, and selective interior demolition for renovations and tenant improvements.',
  },
];
