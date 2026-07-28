import { projectImages } from './projectImages.ts';

export type ResidentialFaq = {
  question: string;
  answer: string;
};

export type ResidentialServicePageConfig = {
  canonicalPath: string;
  category: 'property-services' | 'removal-services';
  pageTitle: string;
  metaDescription: string;
  ogTitle?: string;
  heroEyebrow: string;
  heroHeadline: string;
  heroIntro: string;
  heroImage?: string;
  heroImageAlt?: string;
  servicesIncluded: string[];
  idealCustomers: string[];
  faqs: ResidentialFaq[];
  smsBody?: string;
};

const INVESTOR_BASE = '/images/projects/2026%20Projects/2026-06_Investor-Property-Cleanup_Gallatin';
const HOARDER_BASE = '/images/projects/2026%20Projects/2026-04_Hoarder-Property-Cleanout_Joelton';

const HERO_PROPERTY = `${INVESTOR_BASE}/04_Hero/hero-general-property-after-01%20copy.jpeg`;
const HERO_HOARDER = `${HOARDER_BASE}/04_Hero/hero-driveway-before-01.jpeg`;
const HERO_YARD = projectImages.yardDebris.trampolineRemovalNashville.before;

const DEFAULT_PROPERTY_CUSTOMERS = [
  'Homeowners',
  'Families',
  'Landlords',
  'Property Managers',
  'Real Estate Investors',
  'Realtors',
];

const DEFAULT_REMOVAL_CUSTOMERS = [
  'Homeowners',
  'Landlords',
  'Real Estate Investors',
  'Property Managers',
  'Contractors',
  'Business Owners',
];

const BASE_FAQS: ResidentialFaq[] = [
  {
    question: 'How is pricing determined?',
    answer:
      'Pricing is based on the amount and type of material, labor required, access, weight, disassembly, equipment needs, and disposal costs. Smaller pickups may be estimated from photos. Larger cleanouts and demolition projects are normally quoted after an on-site walkthrough. Customers receive the price before work begins.',
  },
  {
    question: 'Are there materials that require prior review?',
    answer:
      'Hazardous chemicals, fuel, biohazards, asbestos-containing material, explosives, medical waste, unknown liquids, and legally restricted waste require prior review and may not be accepted.',
  },
  {
    question: 'What areas do you serve?',
    answer:
      'We serve Goodlettsville, Hendersonville, Gallatin, White House, Greenbrier, Ridgetop, Springfield, Nashville (including East Nashville, Downtown Nashville, Old Hickory, Joelton, Madison, and Hermitage), Belle Meade, Brentwood, Franklin, Mt. Juliet, Lebanon, Portland, and surrounding Middle Tennessee communities.',
  },
  {
    question: 'How do I request an estimate?',
    answer:
      'Submit project details through our estimate request form, call us at 615-200-0064, text, or email. We review scope, access, and timing, then provide clear pricing and next steps.',
  },
];

function faqs(...items: ResidentialFaq[]): ResidentialFaq[] {
  return [...items, ...BASE_FAQS.slice(0, Math.max(0, 8 - items.length))];
}

const PROPERTY_RELATED = [
  { label: 'Property Cleanouts', to: '/property-cleanouts' },
  { label: 'Property Cleanup', to: '/property-cleanup' },
  { label: 'Estate Cleanouts', to: '/estate-cleanouts' },
  { label: 'Hoarder Cleanouts', to: '/hoarder-cleanouts' },
  { label: 'Eviction Cleanouts', to: '/eviction-cleanouts' },
  { label: 'Foreclosure Cleanouts', to: '/foreclosure-cleanouts' },
  { label: 'Rental Property Cleanouts', to: '/landlord-rental-cleanouts' },
  { label: 'Items We Remove', to: '/what-we-take' },
];

const REMOVAL_RELATED = [
  { label: 'Junk Removal', to: '/junk-removal' },
  { label: 'Furniture Removal', to: '/furniture-removal' },
  { label: 'Appliance Removal', to: '/appliance-removal' },
  { label: 'Hot Tub Removal', to: '/hot-tub-removal' },
  { label: 'Construction Debris Removal', to: '/construction-cleanup' },
  { label: 'Fence Removal', to: '/fence-removal' },
];

export function getRelatedResidentialServices(
  currentPath: string,
  category: ResidentialServicePageConfig['category'],
) {
  const pool = category === 'property-services' ? PROPERTY_RELATED : REMOVAL_RELATED;
  return pool.filter((service) => service.to !== currentPath);
}

export const RESIDENTIAL_SERVICE_PAGES: ResidentialServicePageConfig[] = [
  {
    canonicalPath: '/hoarder-cleanouts',
    category: 'property-services',
    pageTitle: 'Hoarder Cleanouts in Middle Tennessee | Reinhart Hauling & Cleanouts',
    metaDescription:
      'Insured hoarder cleanouts in Middle Tennessee from Goodlettsville. Structured, discreet whole-property clearing for families, landlords, and property professionals. Call 615-200-0064.',
    heroEyebrow: 'PROPERTY SERVICES',
    heroHeadline: 'Hoarder Cleanouts in Middle Tennessee',
    heroIntro:
      'Reinhart Hauling & Cleanouts handles heavily cluttered and hoarded properties across Middle Tennessee from our Goodlettsville base. We clear rooms with structure and discretion—furniture, household clutter, garage contents, and heavy debris—so families and property professionals can move toward cleaning, repairs, or sale. We are insured, and you receive clear pricing before work begins.',
    heroImage: HERO_HOARDER,
    heroImageAlt: 'Heavily cluttered hoarder property cleanout before clearing in Middle Tennessee',
    servicesIncluded: [
      'Whole-home and room-by-room clearing',
      'Furniture, appliances, mattresses, and household clutter removal',
      'Garage, basement, and overflow area clearing',
      'Sorting for disposal, recycling, scrap, or donation when practical',
      'Property left ready for cleaning, repairs, or sale',
    ],
    idealCustomers: ['Families', 'Homeowners', 'Estate Representatives', 'Property Managers', 'Real Estate Investors', 'Landlords'],
    faqs: faqs(
      {
        question: 'Do you handle heavily cluttered or hoarded properties?',
        answer:
          'Yes. Hoarder and heavily cluttered cleanouts are a core service. We plan for volume, access, labor, and disposal so the project progresses steadily without rushing families or property teams.',
      },
      {
        question: 'Do hoarder cleanouts require a walkthrough first?',
        answer:
          'Often yes. Heavily involved properties usually benefit from photos plus an on-site walkthrough so volume, access, labor, and disposal planning stay accurate before quoting.',
      },
      {
        question: 'Can work be completed on a deadline?',
        answer:
          'Yes. When sale, occupancy, or legal timelines apply, we confirm scope and scheduling upfront so the project can move at the required pace.',
      },
    ),
  },
  {
    canonicalPath: '/foreclosure-cleanouts',
    category: 'property-services',
    pageTitle: 'Foreclosure Cleanouts in Middle Tennessee | Reinhart Hauling & Cleanouts',
    metaDescription:
      'Foreclosure and bank-owned property cleanouts in Middle Tennessee for investors, lenders, and property managers. Clear abandoned contents before renovation or listing. Call 615-200-0064.',
    heroEyebrow: 'PROPERTY SERVICES',
    heroHeadline: 'Foreclosure Cleanouts in Middle Tennessee',
    heroIntro:
      'Reinhart Hauling & Cleanouts clears foreclosure and bank-owned properties across Middle Tennessee. From our Goodlettsville base, we remove abandoned furniture, appliances, household debris, and exterior clutter so investors, lenders, and property managers can move toward renovation, listing, or occupancy. We are insured, and pricing is confirmed before work begins.',
    heroImage: HERO_PROPERTY,
    heroImageAlt: 'Foreclosure property cleanout and abandoned contents removal in Middle Tennessee',
    servicesIncluded: [
      'Abandoned contents and debris removal',
      'Furniture, appliances, and bulky item haul-away',
      'Interior and exterior property clearing',
      'Scope planning for vacant and distressed properties',
      'Property prepared for renovation, listing, or occupancy',
    ],
    idealCustomers: ['Real Estate Investors', 'Property Managers', 'Landlords', 'Lenders', 'Realtors', 'Ownership Teams'],
    faqs: faqs(
      {
        question: 'Can you clean up abandoned or investor properties?',
        answer:
          'Yes. Foreclosure, REO, and abandoned investor properties are common scopes. We clear leftover contents and debris so ownership teams can proceed with repairs, renovation, or marketing.',
      },
      {
        question: 'Do you work with investors and property managers on foreclosure properties?',
        answer:
          'Yes. We regularly support investors, property managers, and ownership teams clearing foreclosure and abandoned properties throughout Middle Tennessee.',
      },
    ),
  },
  {
    canonicalPath: '/storage-unit-cleanouts',
    category: 'property-services',
    pageTitle: 'Storage Unit Cleanouts | Reinhart Hauling & Cleanouts',
    metaDescription:
      'Storage unit cleanouts in Middle Tennessee. Abandoned, overflow, and bulky contents removed from storage units with organized loading and disposal.',
    heroEyebrow: 'PROPERTY SERVICES',
    heroHeadline: 'Storage Unit Cleanouts',
    heroIntro:
      'Storage unit cleanouts clear abandoned, overflow, or bulky contents so units can be reset, auctioned, or returned to usable condition. Reinhart handles loading, haul-away, and disposal with upfront scope review.',
    heroImage: HERO_PROPERTY,
    heroImageAlt: 'Storage unit cleanout project in Middle Tennessee',
    servicesIncluded: [
      'Full storage unit contents removal',
      'Bulky item and boxed goods haul-away',
      'Facility access coordination when required',
      'Responsible disposal and recycling where applicable',
      'Unit left cleared for the next step',
    ],
    idealCustomers: ['Homeowners', 'Property Managers', 'Real Estate Investors', 'Facility Managers', 'Landlords', 'Families'],
    faqs: faqs(
      {
        question: 'Can you clean out multiple storage units?',
        answer: 'Yes. Multi-unit clearing can be scheduled when scope, access, and timing are confirmed upfront.',
      },
    ),
  },
  {
    canonicalPath: '/move-out-cleanouts',
    category: 'property-services',
    pageTitle: 'Move-Out Cleanouts | Reinhart Hauling & Cleanouts',
    metaDescription:
      'Move-out cleanouts in Middle Tennessee for rentals, homes, and apartments. Left-behind furniture, trash, and contents cleared for turnover and re-listing.',
    heroEyebrow: 'PROPERTY SERVICES',
    heroHeadline: 'Move-Out Cleanouts',
    heroIntro:
      'Move-out cleanouts help rentals and homes transition quickly when tenants or owners leave contents behind. Reinhart clears furniture, trash, and mixed debris so cleaning, repairs, and re-listing can move forward.',
    heroImage: HERO_PROPERTY,
    heroImageAlt: 'Move-out cleanout for a rental property',
    servicesIncluded: [
      'Left-behind furniture and contents removal',
      'Bagged trash and boxed item haul-away',
      'Appliance removal where applicable',
      'Garage and storage area clearing',
      'Unit or home prepared for turnover work',
    ],
    idealCustomers: ['Landlords', 'Property Managers', 'Homeowners', 'Real Estate Investors', 'Realtors', 'Turnover Teams'],
    faqs: faqs(
      {
        question: 'How fast can a move-out cleanout be scheduled?',
        answer:
          'Many turnover cleanouts can be quoted from photos and scheduled quickly when access and scope are clear.',
      },
    ),
  },
  {
    canonicalPath: '/property-preparation',
    category: 'property-services',
    pageTitle: 'Property Preparation | Reinhart Hauling & Cleanouts',
    metaDescription:
      'Property preparation services in Middle Tennessee for sale, renovation, occupancy, and turnover. Organized clearing that helps properties move to the next phase.',
    heroEyebrow: 'PROPERTY SERVICES',
    heroHeadline: 'Property Preparation',
    heroIntro:
      'Property preparation clears homes and rentals so they can move toward sale, renovation, occupancy, or listing. Reinhart provides organized clearing—not generic hauling without a plan.',
    heroImage: HERO_PROPERTY,
    heroImageAlt: 'Property preparation project in Middle Tennessee',
    servicesIncluded: [
      'Whole-property or partial-scope clearing',
      'Interior debris and contents removal',
      'Exterior clutter and yard material haul-away',
      'Renovation and listing prep support',
      'Property opened up for contractors and showings',
    ],
    idealCustomers: DEFAULT_PROPERTY_CUSTOMERS,
    faqs: faqs(
      {
        question: 'What is property preparation?',
        answer:
          'Property preparation is organized clearing that opens a home or rental for sale, renovation, occupancy, or the next project phase.',
      },
    ),
  },
  {
    canonicalPath: '/yard-debris-cleanup',
    category: 'property-services',
    pageTitle: 'Yard Debris Cleanup | Reinhart Hauling & Cleanouts',
    metaDescription:
      'Yard debris cleanup in Middle Tennessee. Brush, storm debris, exterior clutter, and outdoor materials cleared from residential properties.',
    heroEyebrow: 'PROPERTY SERVICES',
    heroHeadline: 'Yard Debris Cleanup',
    heroIntro:
      'Yard debris cleanup clears brush, storm debris, exterior clutter, and outdoor materials so properties can be reset for landscaping, sale, or occupancy. Reinhart handles loading and haul-away with organized execution.',
    heroImage: HERO_YARD,
    heroImageAlt: 'Yard debris cleanup project in Middle Tennessee',
    servicesIncluded: [
      'Brush, limbs, and yard waste removal',
      'Exterior clutter and bulk item haul-away',
      'Storm and wind debris clearing',
      'Fence line and property edge cleanup',
      'Yard left ready for landscaping or listing',
    ],
    idealCustomers: ['Homeowners', 'Landlords', 'Real Estate Investors', 'Property Managers', 'Contractors', 'Realtors'],
    faqs: faqs(
      {
        question: 'Do you remove storm debris from yards?',
        answer: 'Yes. Storm and wind debris clearing is a common yard cleanup scope throughout Middle Tennessee.',
      },
    ),
  },
  {
    canonicalPath: '/storm-cleanup',
    category: 'property-services',
    pageTitle: 'Storm Cleanup | Reinhart Hauling & Cleanouts',
    metaDescription:
      'Storm cleanup and debris removal in Middle Tennessee for residential properties. Wind, tree, and exterior debris cleared after storms.',
    heroEyebrow: 'PROPERTY SERVICES',
    heroHeadline: 'Storm Cleanup',
    heroIntro:
      'Storm cleanup helps homeowners and property owners clear wind, tree, and exterior debris after severe weather. Reinhart provides organized debris removal so properties can return to normal use and repair work can begin.',
    heroImage: HERO_YARD,
    heroImageAlt: 'Storm debris cleanup at a residential property',
    servicesIncluded: [
      'Wind and tree debris removal',
      'Exterior clutter and damaged material haul-away',
      'Yard and driveway clearing',
      'Bulky storm debris loading and disposal',
      'Property opened up for repairs and recovery',
    ],
    idealCustomers: ['Homeowners', 'Landlords', 'Property Managers', 'Real Estate Investors', 'Insurance Restoration Teams', 'Contractors'],
    faqs: faqs(
      {
        question: 'Can storm cleanup be scheduled quickly after weather events?',
        answer:
          'We prioritize storm cleanup requests when scheduling allows and confirm scope and access before mobilizing.',
      },
    ),
  },
  {
    canonicalPath: '/junk-removal',
    category: 'removal-services',
    pageTitle: 'Junk Removal | Reinhart Hauling & Cleanouts',
    metaDescription:
      'Junk removal in Middle Tennessee for furniture, clutter, appliances, and unwanted household items. Request an estimate with project details.',
    heroEyebrow: 'REMOVAL SERVICES',
    heroHeadline: 'Junk Removal',
    heroIntro:
      'Junk removal clears unwanted furniture, clutter, appliances, and mixed household items with organized loading and disposal. Reinhart serves homeowners, landlords, and property professionals throughout Middle Tennessee.',
    heroImage: HERO_PROPERTY,
    heroImageAlt: 'Junk removal project in Middle Tennessee',
    servicesIncluded: [
      'Furniture and household clutter removal',
      'Appliance and bulky item haul-away',
      'Garage, basement, and attic clearing support',
      'Mixed junk loading and responsible disposal',
      'Same-day and scheduled removal options when available',
    ],
    idealCustomers: DEFAULT_REMOVAL_CUSTOMERS,
    faqs: faqs(
      {
        question: 'What items can you remove?',
        answer:
          'Most non-hazardous household junk—including furniture, appliances, boxes, and general clutter—can be removed. See our Items We Remove page for details.',
      },
    ),
  },
  {
    canonicalPath: '/furniture-removal',
    category: 'removal-services',
    pageTitle: 'Furniture Removal | Reinhart Hauling & Cleanouts',
    metaDescription:
      'Furniture removal in Middle Tennessee. Couches, beds, dressers, office furniture, and bulky items removed from homes, rentals, and estates.',
    heroEyebrow: 'REMOVAL SERVICES',
    heroHeadline: 'Furniture Removal',
    heroIntro:
      'Furniture removal clears couches, beds, dressers, tables, and other bulky items from homes, rentals, estates, and offices. Reinhart handles tight access, stairs, and responsible haul-away.',
    heroImage: HERO_PROPERTY,
    heroImageAlt: 'Furniture removal from a residential property',
    servicesIncluded: [
      'Couches, beds, and bedroom furniture removal',
      'Dining, office, and living room furniture haul-away',
      'Estate and rental furniture clearing',
      'Stairs and tight-access removal when applicable',
      'Responsible loading and disposal',
    ],
    idealCustomers: DEFAULT_REMOVAL_CUSTOMERS,
    faqs: faqs(
      {
        question: 'Do you remove furniture from upstairs rooms?',
        answer: 'Yes. Stairs and tight access are common on furniture removal projects and are reviewed during quoting.',
      },
    ),
  },
  {
    canonicalPath: '/appliance-removal',
    category: 'removal-services',
    pageTitle: 'Appliance Removal | Reinhart Hauling & Cleanouts',
    metaDescription:
      'Appliance removal in Middle Tennessee. Refrigerators, washers, dryers, stoves, and unwanted appliances removed from homes and rentals.',
    heroEyebrow: 'REMOVAL SERVICES',
    heroHeadline: 'Appliance Removal',
    heroIntro:
      'Appliance removal clears refrigerators, washers, dryers, stoves, and other unwanted appliances from kitchens, laundry rooms, garages, and rentals. Reinhart handles heavy items with organized haul-away.',
    heroImage: HERO_PROPERTY,
    heroImageAlt: 'Appliance removal from a residential property',
    servicesIncluded: [
      'Kitchen appliance removal',
      'Laundry appliance haul-away',
      'Garage and basement appliance clearing',
      'Rental turnover appliance removal',
      'Responsible loading and disposal',
    ],
    idealCustomers: DEFAULT_REMOVAL_CUSTOMERS,
    faqs: faqs(
      {
        question: 'Do appliances need to be disconnected before removal?',
        answer:
          'Appliances should be disconnected from utilities when possible. We can review access and prep requirements during quoting.',
      },
    ),
  },
  {
    canonicalPath: '/hot-tub-removal',
    category: 'removal-services',
    pageTitle: 'Hot Tub Removal | Reinhart Hauling & Cleanouts',
    metaDescription:
      'Hot tub removal in Middle Tennessee. Hot tubs disconnected, drained when needed, and removed from decks, patios, and tight access areas.',
    heroEyebrow: 'REMOVAL SERVICES',
    heroHeadline: 'Hot Tub Removal',
    heroIntro:
      'Hot tub removal clears unwanted spas from decks, patios, and backyards—including tight access situations. Reinhart evaluates access, disassembly needs, and haul-away requirements upfront.',
    heroImage: HERO_YARD,
    heroImageAlt: 'Hot tub removal project in Middle Tennessee',
    servicesIncluded: [
      'Hot tub disconnection coordination where applicable',
      'Drain and removal planning',
      'Deck, patio, and backyard access removal',
      'Sectioning and haul-away when required',
      'Area left ready for repair or reuse',
    ],
    idealCustomers: ['Homeowners', 'Landlords', 'Real Estate Investors', 'Property Managers', 'Realtors', 'Contractors'],
    faqs: faqs(
      {
        question: 'Can you remove hot tubs from decks and tight backyards?',
        answer:
          'Yes. Access, disassembly, and sectioning needs are reviewed during quoting so removal can be planned accurately.',
      },
    ),
  },
  {
    canonicalPath: '/piano-removal',
    category: 'removal-services',
    pageTitle: 'Piano Removal | Reinhart Hauling & Cleanouts',
    metaDescription:
      'Piano removal in Middle Tennessee. Upright and console pianos evaluated for stairs, access, and safe removal from homes and estates.',
    heroEyebrow: 'REMOVAL SERVICES',
    heroHeadline: 'Piano Removal',
    heroIntro:
      'Piano removal requires careful planning for weight, stairs, and access. Reinhart evaluates upright and console pianos upfront and provides organized removal and haul-away when scope allows.',
    heroImage: HERO_PROPERTY,
    heroImageAlt: 'Piano removal from a residential property',
    servicesIncluded: [
      'Upright and console piano removal by evaluation',
      'Stairs and tight-access planning',
      'Estate and home piano haul-away',
      'Responsible loading and disposal coordination',
      'Clear communication on scope before work begins',
    ],
    idealCustomers: ['Homeowners', 'Families', 'Estate Representatives', 'Realtors', 'Property Managers', 'Landlords'],
    faqs: faqs(
      {
        question: 'Do you remove all piano types?',
        answer:
          'We evaluate piano type, weight, stairs, and access before confirming scope. Grand pianos may require specialized movers depending on the situation.',
      },
    ),
  },
  {
    canonicalPath: '/playset-removal',
    category: 'removal-services',
    pageTitle: 'Playset Removal | Reinhart Hauling & Cleanouts',
    metaDescription:
      'Playset removal in Middle Tennessee. Backyard playsets, swing sets, and outdoor play equipment taken down and hauled away.',
    heroEyebrow: 'REMOVAL SERVICES',
    heroHeadline: 'Playset Removal',
    heroIntro:
      'Playset removal clears backyard swing sets, play structures, and outdoor equipment so yards can be reset for landscaping, sale, or new use. Reinhart handles disassembly, loading, and haul-away.',
    heroImage: HERO_YARD,
    heroImageAlt: 'Playset removal from a residential backyard',
    servicesIncluded: [
      'Swing set and play structure disassembly',
      'Backyard play equipment removal',
      'Metal, wood, and plastic component haul-away',
      'Yard cleanup after structure removal',
      'Area left ready for landscaping or reuse',
    ],
    idealCustomers: DEFAULT_REMOVAL_CUSTOMERS,
    faqs: faqs(
      {
        question: 'Do you disassemble playsets on site?',
        answer: 'Yes. Disassembly, loading, and haul-away can be included based on structure type and access.',
      },
    ),
  },
];
