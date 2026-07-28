import { projectImages } from './projectImages.ts';

import { getCommercialRelatedServices } from './commercialNavigation.ts';

export type CommercialProjectType = {
  title: string;
  description: string;
};

export type CommercialFaq = {
  question: string;
  answer: string;
};

export type CommercialServicePageConfig = {
  canonicalPath: string;
  pageTitle: string;
  metaDescription: string;
  ogTitle?: string;
  heroEyebrow: string;
  heroHeadline: string;
  heroIntro: string;
  heroImage?: string;
  heroImageAlt?: string;
  servicesIncluded: string[];
  typicalProjects: CommercialProjectType[];
  idealCustomers?: string[];
  faqs: CommercialFaq[];
  smsBody?: string;
};

export function getRelatedCommercialServices(currentPath: string) {
  return getCommercialRelatedServices(currentPath);
}

const COMMERCIAL_HERO =
  '/images/projects/2026%20Projects/2026-06_Commercial-Office-Cleanout_Nashville/01_Before/cubicle-office-before-01.jpeg';
const DEMO_HERO =
  '/images/projects/2026%20Projects/2026-06_Interior-Demo-Portland/04_Hero/hero-kitchen-before-02.jpeg';

const BASE_FAQS: CommercialFaq[] = [
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
  {
    question: 'Do you work with property managers and contractors?',
    answer:
      'Yes. We regularly support property managers, general contractors, commercial real estate professionals, and ownership teams.',
  },
];

function faqs(...items: CommercialFaq[]): CommercialFaq[] {
  return [...items, ...BASE_FAQS.slice(0, Math.max(0, 8 - items.length))];
}

export const COMMERCIAL_SERVICE_PAGES: CommercialServicePageConfig[] = [
  {
    canonicalPath: '/commercial-property-turnovers',
    pageTitle: 'Commercial Property Turnovers in Middle Tennessee | Reinhart Hauling',
    metaDescription:
      'Commercial property turnovers in Middle Tennessee for offices, retail, and managed units. Clear leftover contents between tenants, renovation, or sale. Call 615-200-0064.',
    heroEyebrow: 'COMMERCIAL SERVICES',
    heroHeadline: 'Commercial Property Turnovers in Middle Tennessee',
    heroIntro:
      'Reinhart Hauling & Cleanouts supports commercial property turnovers across Middle Tennessee from Goodlettsville. We clear leftover tenant contents, office furniture, retail fixtures, and debris so property managers and owners can re-lease, renovate, or sell. We are insured, and you receive a clear quote before work begins.',
    heroImage: COMMERCIAL_HERO,
    heroImageAlt: 'Commercial property turnover cleanout clearing leftover tenant contents in Nashville',
    servicesIncluded: [
      'Abandoned tenant contents and fixture removal',
      'Office furniture, cubicles, and file cabinet haul-away',
      'Retail fixture, display, and shelving removal',
      'Warehouse and storage-area turnover clearing',
      'Debris haul-away aligned with turnover deadlines',
    ],
    typicalProjects: [
      { title: 'Tenant Move-Out Load-Outs', description: 'Clearing contents left behind after commercial tenant departure.' },
      { title: 'Pre-Leasing Preparation', description: 'Removing clutter and debris before marketing or showing space.' },
      { title: 'Portfolio Turnover Support', description: 'Coordinated clearing across multiple commercial units.' },
    ],
    faqs: faqs(
      {
        question: 'What is included in a commercial property turnover?',
        answer:
          'Typical turnover scope includes leftover furniture, fixtures, shelving, displays, trash, and mixed debris so the unit can move toward re-leasing, renovation, or sale. Exact inclusions are confirmed in the quote.',
      },
      {
        question: 'Can you handle multi-unit turnovers?',
        answer:
          'Yes. We support property managers and ownership groups with scheduled turnover work across portfolios when scope and timing are defined upfront.',
      },
    ),
  },
  {
    canonicalPath: '/retail-decommissioning',
    pageTitle: 'Retail Decommissioning in Middle Tennessee | Reinhart Hauling',
    metaDescription:
      'Retail decommissioning and fixture removal in Middle Tennessee for store closures and lease surrender. Displays, shelving, and inventory cleared. Call 615-200-0064.',
    heroEyebrow: 'COMMERCIAL SERVICES',
    heroHeadline: 'Retail Decommissioning in Middle Tennessee',
    heroIntro:
      'Reinhart Hauling & Cleanouts provides retail decommissioning across Middle Tennessee. From our Goodlettsville base, we remove fixtures, displays, shelving, inventory, and backroom contents so stores can be surrendered, re-leased, or prepared for redevelopment. We are insured, and pricing is confirmed before work begins.',
    heroImage: projectImages.commercialCleanouts.downtownNashville.executiveFurniture,
    heroImageAlt: 'Retail decommissioning with fixture and display removal in Middle Tennessee',
    servicesIncluded: [
      'Fixture, shelving, and display removal',
      'Backroom inventory and packaging haul-away',
      'Sales floor and storage area clearing',
      'Decommissioning aligned with lease timelines',
      'Coordinated access for malls and strip centers',
    ],
    typicalProjects: [
      { title: 'Store Closure Decommissioning', description: 'Full fixture and contents removal when a retail location closes.' },
      { title: 'Franchise Exit Support', description: 'Multi-site retail clearing coordinated across locations.' },
      { title: 'Pre-Redevelopment Clearing', description: 'Removing store build-out before renovation or repositioning.' },
    ],
    faqs: faqs(
      {
        question: 'Can you remove retail fixtures and office furniture?',
        answer:
          'Yes. Retail fixtures, displays, shelving, and related store furnishings are core decommissioning scope. Office furniture removal is available for mixed-use and commercial suites as well.',
      },
      {
        question: 'What does retail decommissioning include?',
        answer:
          'It typically includes removing fixtures, displays, inventory, backroom contents, and related debris so the space can meet surrender or redevelopment requirements.',
      },
      {
        question: 'Can you work within tight closure deadlines?',
        answer:
          'Yes. Retail closures often run on fixed schedules. We confirm scope, access, and timing before mobilizing.',
      },
    ),
  },
  {
    canonicalPath: '/commercial-interior-strip-outs',
    pageTitle: 'Commercial Interior Strip-Outs | Reinhart Hauling & Cleanouts',
    metaDescription:
      'Commercial interior strip-outs in Middle Tennessee. Selective tear-out, fixture removal, and debris haul-away for renovation, TI, and lease transitions.',
    ogTitle: 'Commercial Interior Strip-Outs | Middle Tennessee',
    heroEyebrow: 'COMMERCIAL SERVICES',
    heroHeadline: 'Commercial Interior Strip-Outs',
    heroIntro:
      'Commercial interior strip-outs open spaces for renovation, tenant improvement, and the next project phase. Reinhart provides selective tear-out, fixture removal, and debris haul-away with organized execution and clear communication.',
    heroImage: DEMO_HERO,
    heroImageAlt: 'Commercial interior strip-out project in Middle Tennessee',
    servicesIncluded: [
      'Selective interior tear-out and fixture removal',
      'Drywall, flooring, and ceiling finish removal',
      'Built-in cabinetry, counters, and specialty build-out clearing',
      'Debris staging, loading, and haul-away',
      'Renovation prep aligned with contractor schedules',
    ],
    typicalProjects: [
      { title: 'Office TI Strip-Outs', description: 'Removing prior tenant improvements before a new build-out.' },
      { title: 'Retail Interior Reset', description: 'Clearing sales floor and backroom build-out for redevelopment.' },
      { title: 'Renovation Prep Tear-Outs', description: 'Selective demolition support before major commercial renovation.' },
      { title: 'Lease Surrender Strip-Outs', description: 'Removing tenant-specific finishes to meet surrender requirements.' },
    ],
    faqs: faqs(
      {
        question: 'What is a commercial interior strip-out?',
        answer:
          'A strip-out removes interior finishes, fixtures, and build-out elements while leaving the overall structure intact—preparing the space for renovation or a new tenant.',
      },
      {
        question: 'Do you perform full structural demolition?',
        answer:
          'No. We focus on selective interior strip-outs and commercial tear-out support—not full building demolition.',
      },
      {
        question: 'Can strip-outs be coordinated with active renovation work?',
        answer:
          'Yes. We regularly support contractors, property managers, and ownership teams during active TI and renovation schedules.',
      },
      {
        question: 'Is debris haul-away included?',
        answer:
          'Yes. Loading, hauling, and disposal can be included as part of the strip-out project scope.',
      },
    ),
  },
  {
    canonicalPath: '/lease-surrender-preparation',
    pageTitle: 'Lease Surrender Preparation | Reinhart Hauling & Cleanouts',
    metaDescription:
      'Lease surrender preparation and commercial load-out services in Middle Tennessee for tenants, landlords, and property managers.',
    heroEyebrow: 'COMMERCIAL SERVICES',
    heroHeadline: 'Lease Surrender Preparation',
    heroIntro:
      'Lease-end deadlines require organized load-out support. Reinhart helps tenants, property managers, and ownership teams remove contents and debris so commercial spaces meet surrender expectations.',
    heroImage: COMMERCIAL_HERO,
    heroImageAlt: 'Commercial lease surrender preparation project',
    servicesIncluded: [
      'Tenant contents and equipment removal',
      'Fixture and furniture haul-away',
      'Debris clearing from surrendered units',
      'Scope review aligned with lease requirements',
      'Move-out deadline coordination',
    ],
    typicalProjects: [
      { title: 'Tenant Move-Out Load-Outs', description: 'Clearing business contents before lease-end inspection.' },
      { title: 'Landlord Reclamation Support', description: 'Removing abandoned contents after tenant departure.' },
      { title: 'Broker-Coordinated Surrenders', description: 'Supporting commercial transitions with defined timelines.' },
    ],
    faqs: faqs(
      {
        question: 'Who typically hires for lease surrender preparation?',
        answer:
          'Tenants, property managers, landlords, and commercial real estate professionals preparing a space for handback or re-leasing.',
      },
      {
        question: 'Can you help meet a fixed surrender date?',
        answer:
          'Yes. We confirm scope and schedule upfront so load-out work aligns with lease-end requirements.',
      },
    ),
  },
  {
    canonicalPath: '/white-box-preparation',
    pageTitle: 'White Box Preparation | Reinhart Hauling & Cleanouts',
    metaDescription:
      'White box preparation for commercial spaces in Middle Tennessee. Clear tenant build-out so properties are ready for marketing or new occupancy.',
    heroEyebrow: 'COMMERCIAL SERVICES',
    heroHeadline: 'White Box Preparation',
    heroIntro:
      'White box preparation removes tenant-specific contents and finishes so a commercial space presents neutrally for marketing, re-leasing, or a new build-out.',
    heroImage: projectImages.commercialCleanouts.downtownNashville.cubicles,
    heroImageAlt: 'White box commercial space preparation',
    servicesIncluded: [
      'Tenant fixture and furniture removal',
      'Selective finish and build-out clearing',
      'Debris haul-away from prep work',
      'Coordination with listing and showing timelines',
      'Support before photography or broker marketing',
    ],
    typicalProjects: [
      { title: 'Pre-Marketing Reset', description: 'Clearing space before broker photos and showings.' },
      { title: 'Landlord White Box Delivery', description: 'Preparing units to a neutral condition for new tenants.' },
      { title: 'Investor Repositioning', description: 'Clearing prior build-out before renovation planning.' },
    ],
    faqs: faqs(
      {
        question: 'What does white box mean?',
        answer:
          'White box generally refers to a commercial space cleared of tenant-specific build-out so it presents as a neutral shell for the next use.',
      },
      {
        question: 'Is white box the same as a full renovation?',
        answer:
          'No. White box preparation focuses on clearing and presenting the space—not completing a new tenant build-out.',
      },
    ),
  },
  {
    canonicalPath: '/office-load-outs',
    pageTitle: 'Office Load-Outs in Middle Tennessee | Reinhart Hauling & Cleanouts',
    metaDescription:
      'Office load-outs in Middle Tennessee. Cubicles, office furniture, file cabinets, and contents removed for closures and tenant transitions. Call 615-200-0064.',
    heroEyebrow: 'COMMERCIAL SERVICES',
    heroHeadline: 'Office Load-Outs in Middle Tennessee',
    heroIntro:
      'Reinhart Hauling & Cleanouts handles office load-outs across Middle Tennessee from Goodlettsville. We remove cubicles, office furniture, file cabinets, and office contents so suites can be surrendered, re-leased, or renovated. We are insured, and you receive clear pricing before work begins.',
    heroImage: projectImages.commercialCleanouts.downtownNashville.cubicles,
    heroImageAlt: 'Office load-out with cubicle and furniture removal in Middle Tennessee',
    servicesIncluded: [
      'Cubicle and workstation removal',
      'Office furniture and filing contents clearing',
      'Conference and breakroom equipment haul-away',
      'Disassembly when required for access',
      'Load-outs aligned with move-out schedules',
    ],
    typicalProjects: [
      { title: 'Office Closures', description: 'Full decommissioning when a business exits a space.' },
      { title: 'Downsizing Load-Outs', description: 'Removing excess furniture during footprint reduction.' },
      { title: 'Tenant Transition Clearing', description: 'Preparing office suites between occupancy phases.' },
    ],
    faqs: faqs(
      {
        question: 'Can you remove retail fixtures and office furniture?',
        answer:
          'Yes. Cubicles, desks, chairs, file cabinets, and related office furniture are core office load-out scope. Retail fixture removal is available on related commercial projects.',
      },
      {
        question: 'Do you remove cubicles and workstations?',
        answer: 'Yes. Cubicle disassembly and removal can be included when needed for access and loading.',
      },
      {
        question: 'Can office load-outs happen after hours?',
        answer: 'Depending on scope and availability, flexible scheduling may be available for office transitions.',
      },
    ),
  },
  {
    canonicalPath: '/retail-store-cleanouts',
    pageTitle: 'Retail Store Cleanouts | Reinhart Hauling & Cleanouts',
    metaDescription:
      'Retail store cleanouts in Middle Tennessee. Fixtures, displays, and store contents removed for closures, remodels, and tenant transitions.',
    heroEyebrow: 'COMMERCIAL SERVICES',
    heroHeadline: 'Retail Store Cleanouts',
    heroIntro:
      'Retail spaces accumulate fixtures, inventory, and backroom materials quickly. Reinhart clears store contents so properties can move toward surrender, renovation, or a new tenant.',
    heroImage: projectImages.commercialCleanouts.downtownNashville.fileCabinets,
    heroImageAlt: 'Retail store cleanout project',
    servicesIncluded: [
      'Sales floor fixture and display removal',
      'Backroom inventory and storage clearing',
      'Packaging and pallet haul-away',
      'Store closure and turnover support',
      'Shopping center and standalone retail access coordination',
    ],
    typicalProjects: [
      { title: 'Store Closure Cleanouts', description: 'Clearing a retail location after business exit.' },
      { title: 'Remodel Prep Clearing', description: 'Removing fixtures before interior renovation.' },
      { title: 'Abandoned Store Recovery', description: 'Clearing contents left by prior tenants.' },
    ],
    faqs: faqs(
      {
        question: 'What is the difference between retail cleanout and decommissioning?',
        answer:
          'Cleanouts focus on clearing contents and debris. Decommissioning often includes a broader store shutdown scope—both can overlap depending on project needs.',
      },
    ),
  },
  {
    canonicalPath: '/warehouse-cleanouts',
    pageTitle: 'Warehouse Cleanouts in Middle Tennessee | Reinhart Hauling & Cleanouts',
    metaDescription:
      'Warehouse cleanouts in Middle Tennessee. Pallets, racking, inventory, equipment, and industrial debris removed for facility transitions. Call 615-200-0064.',
    heroEyebrow: 'COMMERCIAL SERVICES',
    heroHeadline: 'Warehouse Cleanouts in Middle Tennessee',
    heroIntro:
      'Reinhart Hauling & Cleanouts provides warehouse cleanouts across Middle Tennessee. From Goodlettsville, we clear pallets, racking, abandoned inventory, packaging, and equipment so facilities can turn over, renovate, or reset. We are insured, and larger warehouse volumes are normally quoted after photos or an on-site walkthrough.',
    heroImage: COMMERCIAL_HERO,
    heroImageAlt: 'Warehouse cleanout removing pallets and industrial contents in Middle Tennessee',
    servicesIncluded: [
      'Bulk inventory and pallet removal',
      'Racking and shelving clearing',
      'Abandoned equipment and packaging haul-away',
      'Dock access and staging coordination',
      'Industrial turnover and transition support',
    ],
    typicalProjects: [
      { title: 'Facility Reset Cleanouts', description: 'Clearing obsolete inventory and storage systems.' },
      { title: 'Tenant Transition Support', description: 'Preparing warehouse space for new occupancy.' },
      { title: 'Industrial Debris Removal', description: 'Haul-away during renovation or repositioning.' },
    ],
    faqs: faqs(
      {
        question: 'Do you handle warehouse cleanouts?',
        answer:
          'Yes. Warehouse and industrial cleanouts are a core commercial service, including pallets, racking, packaging, and abandoned materials when access and disposal requirements are confirmed.',
      },
      {
        question: 'Can you handle large warehouse volumes?',
        answer:
          'Yes. We review access, staging, volume, and disposal requirements before quoting warehouse cleanout work. Larger volumes are normally quoted after an on-site walkthrough.',
      },
    ),
  },
  {
    canonicalPath: '/property-management-cleanouts',
    pageTitle: 'Property Management Cleanouts in Middle Tennessee | Reinhart Hauling',
    metaDescription:
      'Property management cleanouts in Middle Tennessee for commercial turnovers, abandoned units, and portfolio support. Dependable vendor response. Call 615-200-0064.',
    heroEyebrow: 'COMMERCIAL SERVICES',
    heroHeadline: 'Property Management Cleanouts in Middle Tennessee',
    heroIntro:
      'Reinhart Hauling & Cleanouts supports property managers across Middle Tennessee with commercial cleanouts, abandoned-unit clearing, and turnover work. From Goodlettsville, we help management teams clear offices, retail suites, and problem spaces with clear communication and insured service. Pricing is confirmed before work begins.',
    heroImage: projectImages.commercialCleanouts.downtownNashville.executiveFurniture,
    heroImageAlt: 'Property management commercial cleanout for abandoned unit turnover',
    servicesIncluded: [
      'Commercial unit turnover clearing',
      'Abandoned contents and debris removal',
      'Office furniture and fixture haul-away',
      'Recurring cleanup for problem units',
      'Portfolio coordination and scheduling',
    ],
    typicalProjects: [
      { title: 'Abandoned Unit Recovery', description: 'Clearing units left in poor condition after tenant departure.' },
      { title: 'Recurring Portfolio Support', description: 'Ongoing vendor support for managed commercial assets.' },
      { title: 'Turnover Acceleration', description: 'Fast clearing to reduce vacancy downtime.' },
    ],
    faqs: faqs(
      {
        question: 'Do you work with landlords and property managers?',
        answer:
          'Yes. Property managers and commercial landlords use us for turnovers, abandoned contents, and recurring portfolio cleanout needs across Middle Tennessee.',
      },
      {
        question: 'Do you work as an ongoing vendor for property managers?',
        answer:
          'Yes. We support property managers with one-time turnovers and recurring cleanup needs across commercial portfolios.',
      },
    ),
  },
  {
    canonicalPath: '/commercial-cleanouts',
    pageTitle: 'Commercial Cleanouts in Middle Tennessee | Reinhart Hauling & Cleanouts',
    metaDescription:
      'Commercial cleanouts in Middle Tennessee for offices, retail, warehouses, and managed properties. Insured load-out and debris removal. Call 615-200-0064.',
    heroEyebrow: 'COMMERCIAL SERVICES',
    heroHeadline: 'Commercial Cleanouts in Middle Tennessee',
    heroIntro:
      'Reinhart Hauling & Cleanouts provides commercial cleanouts across Middle Tennessee from Goodlettsville. We clear offices, retail spaces, warehouses, and managed commercial properties—removing furniture, fixtures, pallets, and debris so businesses and property owners can move to the next phase. We are insured, and you receive a clear quote before work begins.',
    heroImage: projectImages.commercialCleanouts.downtownNashville.cubicles,
    heroImageAlt: 'Commercial cleanout project removing office contents in Nashville',
    servicesIncluded: [
      'Office, retail, and warehouse contents removal',
      'Office furniture, cubicles, and file cabinet haul-away',
      'Retail fixtures, displays, and shelving removal',
      'Pallets, packaging, and commercial debris loading',
      'Support for property and business transitions',
    ],
    typicalProjects: [
      { title: 'Business Exit Cleanouts', description: 'Clearing commercial space when operations close or relocate.' },
      { title: 'Tenant Leftover Removal', description: 'Recovering units with abandoned business contents.' },
      { title: 'Facility Transition Support', description: 'General commercial clearing before the next phase.' },
    ],
    faqs: faqs(
      {
        question: 'What types of commercial spaces do you clean out?',
        answer:
          'Offices, retail spaces, warehouses, storage areas, and other commercial properties throughout Middle Tennessee. Scope is confirmed before work begins.',
      },
      {
        question: 'Can you remove retail fixtures and office furniture?',
        answer:
          'Yes. Office furniture, cubicles, file cabinets, retail fixtures, displays, and shelving are common commercial cleanout items.',
      },
      {
        question: 'Are you insured for commercial work?',
        answer: 'Yes. We provide insured commercial cleanout and selective demolition support services.',
      },
    ),
  },
  {
    canonicalPath: '/construction-cleanup',
    pageTitle: 'Construction Cleanup & Debris Removal in Middle Tennessee | Reinhart',
    metaDescription:
      'Construction cleanup and construction debris removal in Middle Tennessee for contractors and renovations. Jobsite debris hauled after a clear quote. Call 615-200-0064.',
    heroEyebrow: 'COMMERCIAL SERVICES',
    heroHeadline: 'Construction Cleanup & Debris Removal',
    heroIntro:
      'Reinhart Hauling & Cleanouts provides construction cleanup and construction debris removal across Middle Tennessee. From Goodlettsville, we haul renovation debris, packaging, leftover materials, and jobsite clutter so contractors and property owners can keep projects moving. We are insured, and pricing is confirmed before work begins.',
    heroImage: COMMERCIAL_HERO,
    heroImageAlt: 'Construction cleanup and debris removal on a commercial renovation jobsite',
    servicesIncluded: [
      'Jobsite debris and packaging haul-away',
      'Renovation cleanup between project phases',
      'Cabinets, flooring, drywall, and finish debris removal when scheduled',
      'Bulk material removal from commercial and residential interiors',
      'Coordination with contractor schedules',
    ],
    typicalProjects: [
      { title: 'TI Renovation Cleanup', description: 'Debris removal during tenant improvement projects.' },
      { title: 'Trade Handoff Clearing', description: 'Cleaning between construction phases.' },
      { title: 'Final Phase Debris Removal', description: 'Supporting punch-list and closeout timelines.' },
    ],
    faqs: faqs(
      {
        question: 'Can you haul construction debris?',
        answer:
          'Yes. Construction debris, renovation materials, packaging, and leftover jobsite materials are common cleanup scopes when disposal requirements are confirmed upfront.',
      },
      {
        question: 'Do you work directly with contractors?',
        answer:
          'Yes. We regularly support general contractors and trade partners with jobsite cleanup and debris haul-away.',
      },
      {
        question: 'Can cleanup be scheduled around active construction?',
        answer: 'Yes. We coordinate access and timing with the project schedule when scope is confirmed upfront.',
      },
    ),
  },
];

export const COMMERCIAL_SERVICE_PATHS = COMMERCIAL_SERVICE_PAGES.map((page) => page.canonicalPath);
