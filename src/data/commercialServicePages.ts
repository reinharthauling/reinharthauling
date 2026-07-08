import { projectImages } from './projectImages.ts';

export type CommercialServicePageConfig = {
  canonicalPath: string;
  pageTitle: string;
  metaDescription: string;
  heroEyebrow: string;
  heroHeadline: string;
  heroIntro: string;
  heroImage?: string;
  heroImageAlt?: string;
  servicesIncludedTitle?: string;
  servicesIncluded: string[];
  idealCustomersTitle?: string;
  idealCustomers: string[];
  processTitle?: string;
  processSubtitle?: string;
  smsBody?: string;
  relatedServices?: { label: string; to: string }[];
};

const COMMERCIAL_HERO =
  '/images/projects/2026%20Projects/2026-06_Commercial-Office-Cleanout_Nashville/01_Before/cubicle-office-before-01.jpeg';

export const COMMERCIAL_SERVICE_PAGES: CommercialServicePageConfig[] = [
  {
    canonicalPath: '/commercial-property-turnovers',
    pageTitle: 'Commercial Property Turnovers | Reinhart Hauling & Cleanouts',
    metaDescription:
      'Commercial property turnover cleanouts in Middle Tennessee. Reinhart helps property managers and owners clear units and prepare spaces between tenants.',
    heroEyebrow: 'COMMERCIAL SERVICES',
    heroHeadline: 'Commercial Property Turnovers',
    heroIntro:
      'When a commercial unit changes hands, Reinhart helps property managers, landlords, and ownership teams clear leftover contents, debris, and tenant improvements so the space can move toward re-leasing, renovation, or sale.',
    heroImage: COMMERCIAL_HERO,
    heroImageAlt: 'Commercial property turnover cleanout in Nashville',
    servicesIncluded: [
      'Removal of abandoned tenant contents and business clutter',
      'Office furniture, fixtures, and storage area clearing',
      'Debris haul-away and responsible disposal coordination',
      'Scope planning for access, timing, and turnover deadlines',
      'Support for multi-unit or portfolio turnover schedules',
    ],
    idealCustomers: [
      'Property managers handling commercial unit transitions',
      'Commercial landlords preparing spaces for new tenants',
      'Real estate investors between occupancy phases',
      'Commercial brokers coordinating pre-marketing cleanup',
    ],
    relatedServices: [
      { label: 'Lease Surrender Preparation', to: '/lease-surrender-preparation' },
      { label: 'Property Management Cleanouts', to: '/property-management-cleanouts' },
      { label: 'Commercial Cleanouts', to: '/commercial-cleanouts' },
    ],
  },
  {
    canonicalPath: '/retail-decommissioning',
    pageTitle: 'Retail Decommissioning | Reinhart Hauling & Cleanouts',
    metaDescription:
      'Retail store decommissioning and fixture removal in Middle Tennessee. Clear displays, backroom inventory, and store contents for lease surrender or redevelopment.',
    heroEyebrow: 'COMMERCIAL SERVICES',
    heroHeadline: 'Retail Decommissioning',
    heroIntro:
      'Store closures and retail transitions often leave fixtures, inventory, and backroom contents behind. Reinhart provides organized decommissioning support so retail spaces can be surrendered, re-leased, or prepared for the next use.',
    heroImage: projectImages.commercialCleanouts.downtownNashville.executiveFurniture,
    heroImageAlt: 'Retail and commercial space decommissioning project',
    servicesIncluded: [
      'Retail fixture, shelving, and display removal',
      'Backroom inventory and packaging material haul-away',
      'General store contents and commercial debris removal',
      'Coordinated loading for malls, strip centers, and standalone retail',
      'Debris removal supporting lease surrender timelines',
    ],
    idealCustomers: [
      'Retail operators closing or relocating stores',
      'Property managers handling retail tenant transitions',
      'Commercial real estate professionals preparing listings',
      'Contractors supporting retail renovation or reset projects',
    ],
    relatedServices: [
      { label: 'Retail Store Cleanouts', to: '/retail-store-cleanouts' },
      { label: 'Lease Surrender Preparation', to: '/lease-surrender-preparation' },
      { label: 'White Box Preparation', to: '/white-box-preparation' },
    ],
  },
  {
    canonicalPath: '/lease-surrender-preparation',
    pageTitle: 'Lease Surrender Preparation | Reinhart Hauling & Cleanouts',
    metaDescription:
      'Lease surrender preparation and commercial load-out services in Middle Tennessee for tenants, property managers, and commercial landlords.',
    heroEyebrow: 'COMMERCIAL SERVICES',
    heroHeadline: 'Lease Surrender Preparation',
    heroIntro:
      'Lease-end deadlines require more than a basic pickup. Reinhart helps tenants, property managers, and ownership teams remove contents, fixtures, and debris so commercial spaces meet surrender expectations and move to the next phase.',
    heroImage: COMMERCIAL_HERO,
    heroImageAlt: 'Commercial lease surrender preparation project',
    servicesIncluded: [
      'Tenant contents and business equipment removal',
      'Fixture, furniture, and built-in item haul-away',
      'Debris clearing from offices, retail, and warehouse spaces',
      'Scope review aligned with lease surrender requirements',
      'Load-out support for tight move-out schedules',
    ],
    idealCustomers: [
      'Commercial tenants meeting lease-end obligations',
      'Property managers coordinating tenant move-outs',
      'Landlords reclaiming abandoned commercial units',
      'Commercial real estate professionals supporting transitions',
    ],
    relatedServices: [
      { label: 'Commercial Property Turnovers', to: '/commercial-property-turnovers' },
      { label: 'Office Load-Outs', to: '/office-load-outs' },
      { label: 'White Box Preparation', to: '/white-box-preparation' },
    ],
  },
  {
    canonicalPath: '/white-box-preparation',
    pageTitle: 'White Box Preparation | Reinhart Hauling & Cleanouts',
    metaDescription:
      'White box and commercial space preparation in Middle Tennessee. Clear fixtures and contents so offices and retail spaces are ready for marketing or new build-out.',
    heroEyebrow: 'COMMERCIAL SERVICES',
    heroHeadline: 'White Box Preparation',
    heroIntro:
      'White box preparation means removing tenant-specific contents and finishes so a commercial space presents cleanly for marketing, re-leasing, or a new build-out. Reinhart supports that transition with organized removal and debris haul-away.',
    heroImage: projectImages.commercialCleanouts.downtownNashville.cubicles,
    heroImageAlt: 'White box commercial space preparation',
    servicesIncluded: [
      'Removal of tenant fixtures, furniture, and specialty build-outs',
      'Clearing of leftover contents blocking a neutral presentation',
      'Debris haul-away from selective tear-out or cleanout work',
      'Coordination with property managers and listing timelines',
      'Support before photography, showings, or renovation planning',
    ],
    idealCustomers: [
      'Property managers preparing units for re-leasing',
      'Commercial landlords marketing vacant space',
      'Investors repositioning commercial assets',
      'Contractors needing pre-construction clearing support',
    ],
    relatedServices: [
      { label: 'Lease Surrender Preparation', to: '/lease-surrender-preparation' },
      { label: 'Retail Decommissioning', to: '/retail-decommissioning' },
      { label: 'Construction Cleanup', to: '/construction-cleanup' },
    ],
  },
  {
    canonicalPath: '/retail-store-cleanouts',
    pageTitle: 'Retail Store Cleanouts | Reinhart Hauling & Cleanouts',
    metaDescription:
      'Retail store cleanouts in Middle Tennessee. Remove fixtures, displays, backroom contents, and store debris for closures, remodels, and tenant transitions.',
    heroEyebrow: 'COMMERCIAL SERVICES',
    heroHeadline: 'Retail Store Cleanouts',
    heroIntro:
      'Retail spaces accumulate fixtures, displays, inventory, and backroom materials fast—especially during closures or remodels. Reinhart clears store contents and debris so the property can move toward surrender, renovation, or a new tenant.',
    heroImage: projectImages.commercialCleanouts.downtownNashville.fileCabinets,
    heroImageAlt: 'Retail store cleanout project in Middle Tennessee',
    servicesIncluded: [
      'Sales floor fixture and display removal',
      'Backroom inventory, shelving, and storage clearing',
      'Packaging, pallets, and general retail debris haul-away',
      'Store closure and turnover load-out support',
      'Coordinated access for shopping centers and standalone retail',
    ],
    idealCustomers: [
      'Retail operators closing or downsizing locations',
      'Property managers handling store tenant transitions',
      'Franchise groups managing multi-site closures',
      'Contractors supporting retail remodel prep',
    ],
    relatedServices: [
      { label: 'Retail Decommissioning', to: '/retail-decommissioning' },
      { label: 'Commercial Cleanouts', to: '/commercial-cleanouts' },
      { label: 'Lease Surrender Preparation', to: '/lease-surrender-preparation' },
    ],
  },
  {
    canonicalPath: '/office-load-outs',
    pageTitle: 'Office Load-Outs | Reinhart Hauling & Cleanouts',
    metaDescription:
      'Office load-outs and decommissioning in Middle Tennessee. Cubicles, furniture, files, and office contents removed for relocations, closures, and tenant transitions.',
    heroEyebrow: 'COMMERCIAL SERVICES',
    heroHeadline: 'Office Load-Outs',
    heroIntro:
      'Office closures, relocations, and downsizing projects need organized load-out support—not rushed junk pickups. Reinhart removes cubicles, furniture, files, and office contents so spaces can be surrendered, re-leased, or renovated.',
    heroImage: projectImages.commercialCleanouts.downtownNashville.cubicles,
    heroImageAlt: 'Office load-out and cubicle removal in Nashville',
    servicesIncluded: [
      'Cubicle, workstation, and office furniture removal',
      'Conference room, filing, and storage contents clearing',
      'Breakroom equipment and general office debris haul-away',
      'Disassembly support when required for access or removal',
      'Commercial load-outs aligned with move-out deadlines',
    ],
    idealCustomers: [
      'Businesses relocating or closing offices',
      'Property managers handling office tenant transitions',
      'Commercial landlords preparing space for new occupancy',
      'Corporate facilities teams managing decommissioning',
    ],
    smsBody: 'sms:6152000064?body=Hi%2C%20I%20need%20help%20with%20an%20office%20load-out.',
    relatedServices: [
      { label: 'Commercial Cleanouts', to: '/commercial-cleanouts' },
      { label: 'Lease Surrender Preparation', to: '/lease-surrender-preparation' },
      { label: 'Commercial Property Turnovers', to: '/commercial-property-turnovers' },
    ],
  },
  {
    canonicalPath: '/warehouse-cleanouts',
    pageTitle: 'Warehouse Cleanouts | Reinhart Hauling & Cleanouts',
    metaDescription:
      'Warehouse cleanouts in Middle Tennessee. Remove inventory, racking, pallets, equipment, and abandoned materials from warehouse and industrial spaces.',
    heroEyebrow: 'COMMERCIAL SERVICES',
    heroHeadline: 'Warehouse Cleanouts',
    heroIntro:
      'Warehouse and industrial spaces often hold abandoned inventory, racking, pallets, and leftover materials that block turnover or renovation. Reinhart provides organized cleanout support for facility resets and property transitions.',
    heroImage: COMMERCIAL_HERO,
    heroImageAlt: 'Warehouse cleanout and industrial debris removal',
    servicesIncluded: [
      'Bulk inventory, packaging, and pallet removal',
      'Racking, shelving, and storage system clearing',
      'Abandoned equipment and warehouse debris haul-away',
      'Scope planning for dock access, staging, and volume',
      'Support for facility transitions and lease turnovers',
    ],
    idealCustomers: [
      'Warehouse operators clearing obsolete inventory',
      'Property managers handling industrial tenant transitions',
      'Investors repositioning warehouse assets',
      'Contractors preparing industrial spaces for renovation',
    ],
    relatedServices: [
      { label: 'Commercial Cleanouts', to: '/commercial-cleanouts' },
      { label: 'Construction Cleanup', to: '/construction-cleanup' },
      { label: 'Commercial Property Turnovers', to: '/commercial-property-turnovers' },
    ],
  },
  {
    canonicalPath: '/property-management-cleanouts',
    pageTitle: 'Property Management Cleanouts | Reinhart Hauling & Cleanouts',
    metaDescription:
      'Property management cleanout support in Middle Tennessee for commercial turnovers, abandoned units, and recurring cleanup needs.',
    heroEyebrow: 'COMMERCIAL SERVICES',
    heroHeadline: 'Property Management Cleanouts',
    heroIntro:
      'Property managers need dependable partners when units are abandoned, tenants leave contents behind, or recurring cleanup support is required. Reinhart helps management teams clear commercial spaces and keep portfolios moving.',
    heroImage: projectImages.commercialCleanouts.downtownNashville.executiveFurniture,
    heroImageAlt: 'Property management commercial cleanout project',
    servicesIncluded: [
      'Commercial unit turnover and abandoned contents removal',
      'Office, retail, and warehouse cleanout support',
      'Recurring cleanup for problem units or portfolio needs',
      'Clear scope, scheduling, and communication for managed properties',
      'Debris haul-away supporting re-leasing and inspection timelines',
    ],
    idealCustomers: [
      'Commercial property management companies',
      'Portfolio managers overseeing mixed-use assets',
      'Regional managers handling difficult turnovers',
      'Ownership groups coordinating vendor support across properties',
    ],
    relatedServices: [
      { label: 'Commercial Property Turnovers', to: '/commercial-property-turnovers' },
      { label: 'Lease Surrender Preparation', to: '/lease-surrender-preparation' },
      { label: 'Commercial Cleanouts', to: '/commercial-cleanouts' },
    ],
  },
  {
    canonicalPath: '/construction-cleanup',
    pageTitle: 'Construction Cleanup | Reinhart Hauling & Cleanouts',
    metaDescription:
      'Construction cleanup and jobsite debris removal in Middle Tennessee for contractors, property owners, and commercial renovation projects.',
    heroEyebrow: 'COMMERCIAL SERVICES',
    heroHeadline: 'Construction Cleanup',
    heroIntro:
      'Active renovation and construction projects generate debris, packaging, and leftover materials that slow the next trade. Reinhart provides practical cleanup and haul-away support so jobsites stay organized and projects keep moving.',
    heroImage: COMMERCIAL_HERO,
    heroImageAlt: 'Construction cleanup and debris removal on commercial project',
    servicesIncluded: [
      'Jobsite debris, packaging, and material haul-away',
      'Renovation cleanup during or between project phases',
      'Bulk removal from commercial interiors and exterior areas',
      'Coordination with contractor schedules and access requirements',
      'Support for property managers and owners during active work',
    ],
    idealCustomers: [
      'General contractors and trade partners',
      'Commercial renovation and TI contractors',
      'Property managers overseeing active improvement projects',
      'Investors managing commercial rehab timelines',
    ],
    relatedServices: [
      { label: 'White Box Preparation', to: '/white-box-preparation' },
      { label: 'Warehouse Cleanouts', to: '/warehouse-cleanouts' },
      { label: 'Demolition Services', to: '/demolition-services' },
    ],
  },
];

export const COMMERCIAL_SERVICE_PATHS = COMMERCIAL_SERVICE_PAGES.map((page) => page.canonicalPath);
