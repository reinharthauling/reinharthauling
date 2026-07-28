/** Central NAP, hours, geo, and entity facts for SEO/AEO/schema.
 * Do not expose a private street address. Do not add unverified geo coordinates.
 */

export const SITE_URL = 'https://www.reinharthauling.com';

export const BUSINESS = {
  name: 'Reinhart Hauling & Cleanouts',
  url: SITE_URL,
  phoneDisplay: '615-200-0064',
  phoneTel: 'tel:6152000064',
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
  /** When true, emit as Place (neighborhood/area), not City. */
  isNeighborhood?: boolean;
  containedInCity?: string;
};

/**
 * Primary service areas. East Nashville and Downtown Nashville are areas within
 * Nashville — not separate incorporated cities in structured data.
 */
export const SERVICE_CITIES: ServiceCity[] = [
  { name: 'Goodlettsville' },
  { name: 'Hendersonville' },
  { name: 'Gallatin' },
  { name: 'White House' },
  { name: 'Greenbrier' },
  { name: 'Ridgetop' },
  { name: 'Springfield' },
  { name: 'Joelton' },
  { name: 'Nashville' },
  { name: 'East Nashville', isNeighborhood: true, containedInCity: 'Nashville' },
  { name: 'Downtown Nashville', isNeighborhood: true, containedInCity: 'Nashville' },
  { name: 'Old Hickory' },
  { name: 'Belle Meade' },
  { name: 'Brentwood' },
  { name: 'Franklin' },
  { name: 'Mt. Juliet' },
  { name: 'Lebanon' },
  { name: 'Portland' },
];

export const CITY_NAMES_FOR_COPY = SERVICE_CITIES.filter((c) => !c.isNeighborhood).map((c) => c.name);

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
    answer:
      'Reinhart serves Goodlettsville, Hendersonville, Gallatin, White House, Greenbrier, Ridgetop, Springfield, Joelton, Nashville (including East Nashville and Downtown Nashville), Old Hickory, Belle Meade, Brentwood, Franklin, Mt. Juliet, Lebanon, Portland, and surrounding Middle Tennessee communities.',
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
