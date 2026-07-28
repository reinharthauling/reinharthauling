import { projectImages } from './projectImages.ts';
import { SERVICE_AREAS_FAQ_ANSWER } from './business.ts';

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
      SERVICE_AREAS_FAQ_ANSWER,
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
  { label: 'Garage Cleanouts', to: '/garage-cleanouts' },
  { label: 'Storage Unit Cleanouts', to: '/storage-unit-cleanouts' },
  { label: 'Move-Out Cleanouts', to: '/move-out-cleanouts' },
  { label: 'Items We Remove', to: '/what-we-take' },
];

const REMOVAL_RELATED = [
  { label: 'Property Cleanouts', to: '/property-cleanouts' },
  { label: 'Furniture Removal', to: '/furniture-removal' },
  { label: 'Appliance Removal', to: '/appliance-removal' },
  { label: 'Hot Tub Removal', to: '/hot-tub-removal' },
  { label: 'Piano Removal', to: '/piano-removal' },
  { label: 'Construction Cleanup', to: '/construction-cleanup' },
  { label: 'Items We Remove', to: '/what-we-take' },
  { label: 'Projects', to: '/projects' },
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
    pageTitle: 'Storage Unit Cleanouts in Middle Tennessee | Reinhart Hauling & Cleanouts',
    metaDescription:
      'Insured storage unit cleanouts in Middle Tennessee for abandoned and overflow units. Organized loading and disposal from Goodlettsville. Call 615-200-0064.',
    heroEyebrow: 'PROPERTY SERVICES',
    heroHeadline: 'Storage Unit Cleanouts in Middle Tennessee',
    heroIntro:
      'Reinhart Hauling & Cleanouts clears abandoned, overflow, and bulky storage units across Middle Tennessee from our Goodlettsville base. We remove furniture, boxed goods, appliances, and mixed debris so units can be reset, auctioned, or returned to usable condition. This is structured cleanout support—not a casual junk pickup. We are insured, and pricing is confirmed before work begins.',
    heroImage: HERO_PROPERTY,
    heroImageAlt: 'Abandoned storage unit contents cleared during a Middle Tennessee cleanout',
    servicesIncluded: [
      'Full or partial storage unit contents removal',
      'Furniture, appliances, and bulky item haul-away',
      'Boxed goods, clutter, and mixed debris clearing',
      'Facility access and gate coordination when required',
      'Disposal, recycling, or scrap sorting where practical',
      'Unit left cleared for reset, auction, or turnover',
    ],
    idealCustomers: ['Homeowners', 'Property Managers', 'Real Estate Investors', 'Facility Managers', 'Landlords', 'Families'],
    faqs: faqs(
      {
        question: 'Do you clear abandoned or overflow storage units?',
        answer:
          'Yes. Abandoned, auction-related, and overflow storage units are common scopes. We clear leftover furniture, boxes, and bulky contents so the unit can be reset or returned.',
      },
      {
        question: 'Can you clean out multiple storage units?',
        answer:
          'Yes. Multi-unit clearing can be scheduled when scope, facility access, and timing are confirmed upfront.',
      },
      {
        question: 'What affects storage unit cleanout scope?',
        answer:
          'Volume, item types, unit size, aisle and gate access, loading distance, and disposal needs all affect scope and pricing. Photos help when a walkthrough is not practical.',
      },
    ),
  },
  {
    canonicalPath: '/move-out-cleanouts',
    category: 'property-services',
    pageTitle: 'Move-Out Cleanouts in Middle Tennessee | Reinhart Hauling & Cleanouts',
    metaDescription:
      'Insured move-out cleanouts in Middle Tennessee for landlords and rentals. Left-behind furniture and contents cleared for turnover. Call 615-200-0064.',
    heroEyebrow: 'PROPERTY SERVICES',
    heroHeadline: 'Move-Out Cleanouts in Middle Tennessee',
    heroIntro:
      'Reinhart Hauling & Cleanouts supports landlords, property managers, and homeowners across Middle Tennessee when tenants or owners leave contents behind. From Goodlettsville, we clear furniture, trash, appliances, and mixed debris so cleaning, repairs, and re-listing can move forward. This is rental and property turnover support—not eviction cleanouts. We are insured, with clear pricing before work begins.',
    heroImage: HERO_PROPERTY,
    heroImageAlt: 'Left-behind furniture and contents cleared after a Middle Tennessee rental move-out',
    servicesIncluded: [
      'Left-behind furniture and household contents removal',
      'Bagged trash, boxes, and mixed debris haul-away',
      'Appliance removal where applicable',
      'Garage, closet, and storage area clearing',
      'Apartment, home, and rental unit turnover support',
      'Property prepared for cleaning, repairs, or re-listing',
    ],
    idealCustomers: ['Landlords', 'Property Managers', 'Homeowners', 'Real Estate Investors', 'Realtors', 'Turnover Teams'],
    faqs: faqs(
      {
        question: 'Is a move-out cleanout the same as an eviction cleanout?',
        answer:
          'No. Move-out cleanouts support landlords and rentals when tenants or owners leave contents behind during a normal turnover. Eviction and court-ordered clearouts are a separate service with different timing and coordination needs.',
      },
      {
        question: 'Who typically requests move-out cleanouts?',
        answer:
          'Landlords, property managers, investors, and homeowners commonly request move-out cleanouts to clear left-behind furniture, trash, and debris before cleaning or re-listing.',
      },
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
    pageTitle: 'Yard Debris Cleanup in Middle Tennessee | Reinhart Hauling & Cleanouts',
    metaDescription:
      'Insured yard debris cleanup in Middle Tennessee. Brush, limbs, exterior clutter, and outdoor materials cleared from properties. Call 615-200-0064.',
    heroEyebrow: 'PROPERTY SERVICES',
    heroHeadline: 'Yard Debris Cleanup in Middle Tennessee',
    heroIntro:
      'Reinhart Hauling & Cleanouts provides exterior property cleanup support across Middle Tennessee from our Goodlettsville base. We clear brush, limbs, yard waste, outdoor clutter, and bulk exterior materials so properties can move toward landscaping, sale, or occupancy. This is organized yard and property cleanup—not a casual debris run. We are insured, and pricing is confirmed before work begins.',
    heroImage: HERO_YARD,
    heroImageAlt: 'Brush, limbs, and exterior yard debris cleared from a Middle Tennessee property',
    servicesIncluded: [
      'Brush, limbs, and yard waste removal',
      'Exterior clutter and outdoor bulk item haul-away',
      'Fence line, edge, and driveway area clearing',
      'Leaf piles, bagged yard waste, and mixed outdoor debris',
      'Support for listing, landscaping, or property reset',
      'Responsible loading and disposal',
    ],
    idealCustomers: ['Homeowners', 'Landlords', 'Real Estate Investors', 'Property Managers', 'Contractors', 'Realtors'],
    faqs: faqs(
      {
        question: 'What yard materials can you remove?',
        answer:
          'Common scopes include brush, limbs, bagged yard waste, outdoor clutter, fence-line debris, and other non-hazardous exterior materials. Large tree work and stump grinding are outside our service.',
      },
      {
        question: 'Is yard debris cleanup part of a larger property cleanout?',
        answer:
          'Often yes. Yard debris cleanup frequently supports property cleanouts, turnovers, and listing prep when exterior clutter needs to be cleared along with interior contents.',
      },
    ),
  },
  {
    canonicalPath: '/storm-cleanup',
    category: 'property-services',
    pageTitle: 'Storm Cleanup in Middle Tennessee | Reinhart Hauling & Cleanouts',
    metaDescription:
      'Insured storm cleanup in Middle Tennessee. Wind, tree, and exterior debris cleared so property recovery and repairs can begin. Call 615-200-0064.',
    heroEyebrow: 'PROPERTY SERVICES',
    heroHeadline: 'Storm Cleanup in Middle Tennessee',
    heroIntro:
      'Reinhart Hauling & Cleanouts helps homeowners and property professionals across Middle Tennessee clear wind, tree, and exterior debris after severe weather. From Goodlettsville, we provide organized storm debris removal so driveways, yards, and access areas can reopen for repairs and recovery. We are insured, and scope is confirmed before work begins.',
    heroImage: HERO_YARD,
    heroImageAlt: 'Wind and tree storm debris cleared from a Middle Tennessee residential property',
    servicesIncluded: [
      'Wind and fallen limb debris removal',
      'Exterior storm clutter and damaged material haul-away',
      'Yard, driveway, and access path clearing',
      'Bulky storm debris loading and disposal',
      'Property opened up for repairs and recovery work',
    ],
    idealCustomers: ['Homeowners', 'Landlords', 'Property Managers', 'Real Estate Investors', 'Insurance Restoration Teams', 'Contractors'],
    faqs: faqs(
      {
        question: 'What does storm cleanup include?',
        answer:
          'Storm cleanup focuses on exterior debris—fallen limbs, wind scatter, damaged outdoor materials, and driveway or yard clearing—so property access and repair work can move forward. Structural repairs and tree climbing or felling are not included.',
      },
      {
        question: 'Can storm cleanup be scheduled quickly after weather events?',
        answer:
          'We prioritize storm cleanup requests when scheduling allows and confirm scope and access before mobilizing.',
      },
      {
        question: 'Is storm cleanup the same as yard debris cleanup?',
        answer:
          'They overlap, but storm cleanup is typically post-weather recovery focused on wind and storm debris. Yard debris cleanup covers broader exterior brush, clutter, and outdoor material clearing year-round.',
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
    pageTitle: 'Furniture Removal in Middle Tennessee | Reinhart Hauling & Cleanouts',
    metaDescription:
      'Insured furniture removal in Middle Tennessee for property cleanouts and turnovers. Couches, beds, and bulky items cleared. Call 615-200-0064.',
    heroEyebrow: 'REMOVAL SERVICES',
    heroHeadline: 'Furniture Removal in Middle Tennessee',
    heroIntro:
      'Reinhart Hauling & Cleanouts removes couches, beds, dressers, tables, and other bulky furniture as part of property cleanouts and turnovers across Middle Tennessee. From Goodlettsville, we support landlords, investors, estates, and homeowners clearing rooms—not discount single-item junk pickup. Stairs and tight access are reviewed upfront. We are insured, with clear pricing before work begins.',
    heroImage: HERO_PROPERTY,
    heroImageAlt: 'Bulky furniture removed during a Middle Tennessee property cleanout and turnover',
    servicesIncluded: [
      'Couches, sectionals, and living room furniture removal',
      'Beds, mattresses, and bedroom furniture haul-away',
      'Dining, office, and desk furniture clearing',
      'Estate, rental, and investor property furniture cleanouts',
      'Stairs and tight-access removal when applicable',
      'Responsible loading and disposal',
    ],
    idealCustomers: DEFAULT_REMOVAL_CUSTOMERS,
    faqs: faqs(
      {
        question: 'Is furniture removal only for single-item pickups?',
        answer:
          'No. Furniture removal is typically part of property cleanouts, rental turnovers, estates, and room clearing—not positioned as a discount single-item junk run. Scope is based on volume, access, and labor.',
      },
      {
        question: 'Do you remove furniture from upstairs rooms?',
        answer:
          'Yes. Stairs and tight access are common on furniture removal projects and are reviewed during quoting.',
      },
      {
        question: 'Can furniture removal be combined with a full cleanout?',
        answer:
          'Yes. Furniture is often cleared together with appliances, clutter, and other contents during property cleanouts and turnovers.',
      },
    ),
  },
  {
    canonicalPath: '/appliance-removal',
    category: 'removal-services',
    pageTitle: 'Appliance Removal in Middle Tennessee | Reinhart Hauling & Cleanouts',
    metaDescription:
      'Insured appliance removal in Middle Tennessee for cleanouts and turnovers. Refrigerators, washers, dryers, and stoves cleared. Call 615-200-0064.',
    heroEyebrow: 'REMOVAL SERVICES',
    heroHeadline: 'Appliance Removal in Middle Tennessee',
    heroIntro:
      'Reinhart Hauling & Cleanouts removes refrigerators, washers, dryers, stoves, and other unwanted appliances as part of property cleanouts and rental turnovers across Middle Tennessee. From our Goodlettsville base, we handle heavy items with organized haul-away for landlords, investors, and homeowners—not discount appliance pickup alone. We are insured, and pricing is confirmed before work begins.',
    heroImage: HERO_PROPERTY,
    heroImageAlt: 'Kitchen and laundry appliances removed during a Middle Tennessee property turnover',
    servicesIncluded: [
      'Refrigerator, freezer, and kitchen appliance removal',
      'Washer, dryer, and laundry appliance haul-away',
      'Stoves, ovens, dishwashers, and similar units',
      'Garage and basement appliance clearing',
      'Rental turnover and cleanout appliance removal',
      'Responsible loading and disposal',
    ],
    idealCustomers: DEFAULT_REMOVAL_CUSTOMERS,
    faqs: faqs(
      {
        question: 'Is appliance removal part of a larger cleanout?',
        answer:
          'Often yes. Appliance removal commonly supports property cleanouts, rental turnovers, and estate clearing rather than standing alone as a discount pickup.',
      },
      {
        question: 'Do appliances need to be disconnected before removal?',
        answer:
          'Appliances should be disconnected from utilities when possible. We can review access and prep requirements during quoting. We do not perform electrical or plumbing work.',
      },
      {
        question: 'What appliance types do you commonly remove?',
        answer:
          'Refrigerators, freezers, washers, dryers, stoves, ovens, dishwashers, and similar household appliances are common. Condition, weight, and access affect scope.',
      },
    ),
  },
  {
    canonicalPath: '/hot-tub-removal',
    category: 'removal-services',
    pageTitle: 'Hot Tub Removal in Middle Tennessee | Reinhart Hauling & Cleanouts',
    metaDescription:
      'Insured hot tub removal in Middle Tennessee. Access, disassembly, and haul-away planned for decks, patios, and yards. Call 615-200-0064.',
    heroEyebrow: 'REMOVAL SERVICES',
    heroHeadline: 'Hot Tub Removal in Middle Tennessee',
    heroIntro:
      'Reinhart Hauling & Cleanouts removes unwanted hot tubs and spas from decks, patios, and backyards across Middle Tennessee. From Goodlettsville, we evaluate access, weight, deck construction, and disassembly needs before haul-away—supporting property resets and cleanouts, not casual junk runs. We are insured, and scope is confirmed before work begins. Electrical and plumbing disconnection must be coordinated separately.',
    heroImage: HERO_YARD,
    heroImageAlt: 'Hot tub being removed from a deck during a Middle Tennessee property cleanup',
    servicesIncluded: [
      'Hot tub and spa removal planning by access and weight',
      'Drain and disassembly coordination when required',
      'Deck, patio, and backyard access removal',
      'Sectioning and haul-away for tight or elevated setups',
      'Electrical disconnection coordination (customer or licensed electrician)',
      'Area left ready for repair, landscaping, or reuse',
    ],
    idealCustomers: ['Homeowners', 'Landlords', 'Real Estate Investors', 'Property Managers', 'Realtors', 'Contractors'],
    faqs: faqs(
      {
        question: 'What factors affect hot tub removal scope?',
        answer:
          'Access path, weight, whether the tub sits on a deck or patio, deck construction and railing constraints, and whether disassembly or sectioning is required all affect labor and pricing. Photos and an on-site review help plan accurately.',
      },
      {
        question: 'Do you disconnect electrical or plumbing for hot tub removal?',
        answer:
          'No. We coordinate timing around electrical and plumbing disconnection, but we do not perform electrical, plumbing, or structural work and make no guarantees related to those trades. A licensed electrician or plumber should complete utility disconnection before removal when required.',
      },
      {
        question: 'Can you remove hot tubs from decks and tight backyards?',
        answer:
          'Yes. Deck construction, gate width, slope, and yard access are reviewed during quoting. Some tubs must be drained, sectioned, or partially disassembled to clear the space safely.',
      },
    ),
  },
  {
    canonicalPath: '/piano-removal',
    category: 'removal-services',
    pageTitle: 'Piano Removal in Middle Tennessee | Reinhart Hauling & Cleanouts',
    metaDescription:
      'Insured piano removal in Middle Tennessee. Stairs, weight, and access reviewed for upright and console pianos. Call 615-200-0064.',
    heroEyebrow: 'REMOVAL SERVICES',
    heroHeadline: 'Piano Removal in Middle Tennessee',
    heroIntro:
      'Reinhart Hauling & Cleanouts evaluates piano removal across Middle Tennessee with careful attention to weight, stairs, and access. From Goodlettsville, we commonly handle upright and console pianos during estate and property cleanouts. Grand pianos may require specialized movers depending on the situation. We are insured, and scope is confirmed before work begins.',
    heroImage: HERO_PROPERTY,
    heroImageAlt: 'Upright piano removed from a Middle Tennessee home during an estate cleanout',
    servicesIncluded: [
      'Upright and console piano removal by evaluation',
      'Stairs, doorway, and tight-access planning',
      'Estate, home, and cleanout piano haul-away',
      'Weight and path assessment before confirming scope',
      'Clear communication when specialized movers are needed',
      'Responsible loading and disposal coordination',
    ],
    idealCustomers: ['Homeowners', 'Families', 'Estate Representatives', 'Realtors', 'Property Managers', 'Landlords'],
    faqs: faqs(
      {
        question: 'Do stairs and access affect piano removal?',
        answer:
          'Yes. Stairs, doorway width, turns, flooring, and overall access path significantly affect labor, equipment needs, and whether a piano can be removed within our scope. Weight and piano type are reviewed together with access.',
      },
      {
        question: 'Do you remove all piano types?',
        answer:
          'We evaluate piano type, weight, stairs, and access before confirming scope. Upright and console pianos are commonly within range. Grand pianos may require specialized movers depending on size, location, and access.',
      },
      {
        question: 'Is piano removal part of an estate or property cleanout?',
        answer:
          'Often yes. Pianos are frequently cleared during estate cleanouts and whole-property projects when families or ownership teams are emptying a home.',
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
