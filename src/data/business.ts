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

/**
 * Confirmed official profile URLs only.
 * Google Maps: canonical place URL resolved from maps.app.goo.gl/fW4f5CPsAJpLfPmG7
 * (share.google/7TwUAWQFVhFT6z7ja lands on Search with the same kgmid /g/11z164v10r — not used in schema).
 */
export const BUSINESS_GOOGLE_MAPS_URL =
  'https://www.google.com/maps/place/Reinhart+Hauling+%26+Cleanouts/@36.2301508,-86.9330853,10z/data=!3m1!4b1!4m6!3m5!1s0x24431289d5ad9585:0x6952fecee43c2730!8m2!3d36.2300489!4d-86.603451!16s%2Fg%2F11z164v10r';

export const BUSINESS_FACEBOOK_URL = 'https://www.facebook.com/reinharthaulingcleanouts/';

export const BUSINESS_YELP_URL =
  'https://www.yelp.com/biz/reinhart-hauling-and-cleanouts-goodlettsville';

export const BUSINESS_SAME_AS = [
  BUSINESS_GOOGLE_MAPS_URL,
  BUSINESS_FACEBOOK_URL,
  BUSINESS_YELP_URL,
] as const;

/** Schema.org priceRange — qualitative only (not a dollar minimum). */
export const BUSINESS_PRICE_RANGE = '$$';

/** Map of the business for LocalBusiness.hasMap. */
export const BUSINESS_HAS_MAP = BUSINESS_GOOGLE_MAPS_URL;

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
 * Priority markets for LocalBusiness / Service areaServed (schema entity clarity).
 * Do not expand this list for schema volume alone.
 */
export const PRIMARY_SERVICE_CITIES: ServiceCity[] = [
  { name: 'Goodlettsville' },
  { name: 'Hendersonville' },
  { name: 'Gallatin' },
  { name: 'Nashville' },
  { name: 'Mt. Juliet' },
];

export const PRIMARY_SERVICE_AREA_DISPLAY_NAMES = PRIMARY_SERVICE_CITIES.map((c) => c.name);

/**
 * Broader approved service communities (UI + FAQ prose).
 * Nashville-area communities are Places contained in Nashville — not separate offices.
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

/** Nearby / additional approved areas excluding the five priority markets. */
export const ADDITIONAL_SERVICE_AREA_DISPLAY_NAMES = SERVICE_AREA_DISPLAY_NAMES.filter(
  (name) => !PRIMARY_SERVICE_AREA_DISPLAY_NAMES.includes(name),
);

/**
 * @deprecated Alias of SERVICE_AREA_DISPLAY_NAMES (pending-review list resolved).
 * Prefer SERVICE_AREA_DISPLAY_NAMES or PRIMARY_SERVICE_AREA_DISPLAY_NAMES for new code.
 */
export const SERVICE_AREA_DISPLAY_NAMES_WITH_PENDING = SERVICE_AREA_DISPLAY_NAMES;

/** Incorporated city names only (for schema City nodes). */
export const INCORPORATED_CITY_NAMES = SERVICE_CITIES.filter((c) => !c.isPlace).map((c) => c.name);

export const SERVICE_AREAS_FAQ_ANSWER =
  'We primarily serve Goodlettsville, Hendersonville, Gallatin, Nashville, and Mt. Juliet, along with nearby Middle Tennessee communities including White House, Greenbrier, Ridgetop, Springfield, Belle Meade, Brentwood, Franklin, Lebanon, Portland, and Nashville-area communities such as East Nashville, Downtown Nashville, Old Hickory, Joelton, Madison, and Hermitage.';

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
    answer: SERVICE_AREAS_FAQ_ANSWER.replace(/^We primarily serve/, 'Reinhart primarily serves'),
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
