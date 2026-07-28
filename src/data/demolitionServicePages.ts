export type DemolitionProjectType = {
  title: string;
  description: string;
};

export type DemolitionFaq = {
  question: string;
  answer: string;
};

export type DemolitionServicePageConfig = {
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
  idealProjects: DemolitionProjectType[];
  whoWeWorkWith?: string[];
  faqs: DemolitionFaq[];
  smsBody?: string;
};

export const PRIORITY_RELATED_DEMO = [
  { label: 'Selective Demolition', to: '/selective-demolition' },
  { label: 'Kitchen Demolition', to: '/kitchen-demolition' },
  { label: 'Bathroom Demolition', to: '/bathroom-demolition' },
  { label: 'Flooring Removal', to: '/flooring-removal' },
  { label: 'Cabinet Removal', to: '/cabinet-removal' },
  { label: 'Ceiling Grid Removal', to: '/ceiling-grid-removal' },
  { label: 'Drywall Removal', to: '/drywall-removal' },
  { label: 'Fence Removal', to: '/fence-removal' },
  { label: 'Deck Removal', to: '/deck-removal' },
  { label: 'Shed Demolition', to: '/shed-demolition' },
] as const;

export function getRelatedDemolitionServices(currentPath: string) {
  return PRIORITY_RELATED_DEMO.filter((service) => service.to !== currentPath);
}

const DEMO_BASE = '/images/projects/2026%20Projects/2026-06_Interior-Demo-Portland';
const INVESTOR_BASE = '/images/projects/2026%20Projects/2026-06_Investor-Property-Cleanup_Gallatin';

const HERO_KITCHEN = `${DEMO_BASE}/04_Hero/hero-kitchen-before-02.jpeg`;
const HERO_INSULATION = `${DEMO_BASE}/04_Hero/hero-insulation-during-01.jpeg`;
const HERO_FENCE = `${INVESTOR_BASE}/01_Before/fence-demo-before-01.jpeg`;

const DEFAULT_IDEAL_PROJECTS: DemolitionProjectType[] = [
  { title: 'Office Remodels', description: 'Selective tear-out before tenant improvement and office renovation work.' },
  { title: 'Retail Remodels', description: 'Removing finishes and fixtures to prepare retail spaces for redevelopment.' },
  { title: 'Medical Offices', description: 'Controlled demo support for clinical and professional suite renovations.' },
  { title: 'Restaurants', description: 'Kitchen, dining, and back-of-house tear-out before restaurant remodels.' },
  { title: 'Warehouses', description: 'Interior finish and partition removal in industrial and warehouse spaces.' },
  { title: 'Commercial Suites', description: 'Suite-level selective demolition aligned with contractor schedules.' },
  {
    title: 'Residential Remodels',
    description: 'Room, kitchen, and bathroom tear-outs that prepare homes for the next trade.',
  },
];

const DEFAULT_WHO_WE_WORK_WITH = [
  'General Contractors',
  'Property Managers',
  'Commercial Property Owners',
  'Business Owners',
  'Real Estate Investors',
  'Homeowners',
];

const BASE_FAQS: DemolitionFaq[] = [
  {
    question: 'Do you perform structural or building demolition?',
    answer:
      'No. Reinhart focuses on selective interior demolition and renovation prep—not full structural demolition or building wrecking.',
  },
  {
    question: 'What affects demolition pricing?',
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
    question: 'Do you haul away demolition debris?',
    answer:
      'Yes. Loading, hauling, and disposal can be included as part of selective demolition project scope.',
  },
];

function faqs(...items: DemolitionFaq[]): DemolitionFaq[] {
  return [...items, ...BASE_FAQS.slice(0, Math.max(0, 8 - items.length))];
}

export const DEMOLITION_SERVICE_PAGES: DemolitionServicePageConfig[] = [
  {
    canonicalPath: '/interior-demolition',
    pageTitle: 'Interior Demolition in Middle Tennessee | Reinhart Hauling & Cleanouts',
    metaDescription:
      'Selective interior demolition in Middle Tennessee. Cabinets, flooring, drywall, and finishes removed for renovation—not structural demolition. Call 615-200-0064.',
    heroEyebrow: 'SELECTIVE DEMOLITION',
    heroHeadline: 'Interior Demolition in Middle Tennessee',
    heroIntro:
      'Reinhart Hauling & Cleanouts provides selective interior demolition across Middle Tennessee from Goodlettsville. We remove cabinets, flooring, drywall, ceiling materials, and fixtures to prepare homes and commercial spaces for renovation—not structural building demolition. We are insured, and you receive a clear quote before work begins.',
    heroImage: HERO_INSULATION,
    heroImageAlt: 'Selective interior demolition removing finishes for renovation in Middle Tennessee',
    servicesIncluded: [
      'Selective interior tear-out and finish removal',
      'Drywall, flooring, and ceiling finish removal',
      'Cabinet, fixture, and built-in removal',
      'Non-load-bearing partition removal where appropriate',
      'Debris staging, loading, and haul-away',
    ],
    idealProjects: DEFAULT_IDEAL_PROJECTS,
    faqs: faqs(
      {
        question: 'What is selective interior demolition?',
        answer:
          'Selective interior demolition removes specific finishes, fixtures, and interior materials while protecting the overall structure—preparing the space for renovation or tenant improvement.',
      },
      {
        question: 'Do you work with contractors and property managers?',
        answer:
          'Yes. We regularly support general contractors, property managers, investors, and ownership teams during active renovation schedules.',
      },
    ),
  },
  {
    canonicalPath: '/tenant-improvement-demolition',
    pageTitle: 'Tenant Improvement (TI) Demolition in Middle Tennessee | Reinhart',
    metaDescription:
      'Tenant improvement demolition in Middle Tennessee. Selective tear-out before office, retail, and commercial renovations for contractors and owners. Call 615-200-0064.',
    ogTitle: 'Tenant Improvement (TI) Demolition | Middle Tennessee',
    heroEyebrow: 'SELECTIVE DEMOLITION',
    heroHeadline: 'Tenant Improvement (TI) Demolition',
    heroIntro:
      'Reinhart Hauling & Cleanouts assists contractors and property owners with tenant improvement demolition across Middle Tennessee. From Goodlettsville, we remove prior build-out, fixtures, flooring, drywall, and debris so spaces are ready for the next trade—not structural demolition. We are insured, and pricing is confirmed before work begins.',
    heroImage: HERO_KITCHEN,
    heroImageAlt: 'Tenant improvement demolition preparing a commercial suite for renovation',
    servicesIncluded: [
      'Prior tenant build-out and finish removal',
      'Cabinet, counter, and fixture removal',
      'Flooring, drywall, and ceiling system tear-out',
      'Store fixture and office furniture removal',
      'Non-load-bearing partition removal',
      'Debris hauling and renovation prep cleanup',
      'Spaces prepared for the next trade sequence',
    ],
    idealProjects: [
      { title: 'Office Renovations', description: 'Clearing prior tenant improvements before new office build-out.' },
      { title: 'Retail Renovations', description: 'Sales floor and backroom tear-out before retail redevelopment.' },
      { title: 'Restaurant Remodels', description: 'Kitchen, dining, and service area demo before restaurant TI.' },
      { title: 'Medical Offices', description: 'Suite-level selective demo for clinical and professional renovations.' },
      { title: 'Professional Offices', description: 'Removing finishes and partitions for updated office layouts.' },
      { title: 'Commercial Suites', description: 'Suite-by-suite TI demo aligned with contractor mobilization.' },
      { title: 'Banks & Financial Spaces', description: 'Fixture and finish removal before branch or office renovation.' },
      {
        title: 'Industrial Office Areas',
        description: 'Selective tear-out in warehouse offices and industrial support spaces.',
      },
    ],
    faqs: faqs(
      {
        question: 'What is tenant improvement demolition?',
        answer:
          'TI demolition is the selective tear-out of prior tenant finishes, fixtures, and build-out elements so a space can be renovated for a new tenant or updated layout.',
      },
      {
        question: 'What materials do you remove during TI demo?',
        answer:
          'Common scope includes cabinets, flooring, drywall, ceiling systems, fixtures, store fixtures, office furniture, and non-load-bearing partitions—followed by debris haul-away.',
      },
      {
        question: 'Do you prepare spaces for the next trade?',
        answer:
          'Yes. Our goal is to leave the space cleared and ready for framing, MEP rough-in, drywall, flooring, and finish work—not to perform structural demolition.',
      },
      {
        question: 'Can TI demo be coordinated with an active contractor schedule?',
        answer:
          'Yes. We confirm scope, access, staging, and timing upfront so demolition supports—not delays—the renovation sequence.',
      },
    ),
  },
  {
    canonicalPath: '/selective-demolition',
    pageTitle: 'Selective Demolition in Middle Tennessee | Reinhart Hauling & Cleanouts',
    metaDescription:
      'Selective demolition in Middle Tennessee. Remove only scheduled materials while protecting the rest of the property for renovation. Call 615-200-0064.',
    ogTitle: 'Selective Demolition | Middle Tennessee',
    heroEyebrow: 'SELECTIVE DEMOLITION',
    heroHeadline: 'Selective Demolition in Middle Tennessee',
    heroIntro:
      'Reinhart Hauling & Cleanouts provides selective demolition across Middle Tennessee from Goodlettsville. We remove only scheduled materials—cabinets, flooring, drywall, ceiling grid, doors, fencing, deck material, and related debris—while protecting the rest of the property. We are insured, and larger demo scopes are normally quoted after a walkthrough.',
    heroImage: HERO_INSULATION,
    heroImageAlt: 'Selective demolition project preparing a space for renovation in Middle Tennessee',
    servicesIncluded: [
      'Targeted removal of scheduled finishes and fixtures',
      'Protection of areas outside the demo scope',
      'Room, suite, and trade-specific tear-out',
      'Debris staging, loading, and haul-away',
      'Renovation prep aligned with contractor plans',
    ],
    idealProjects: [
      { title: 'One Room Demo', description: 'Focused tear-out within a single room or defined area.' },
      { title: 'One Tenant Suite', description: 'Suite-level selective demo before TI or re-leasing.' },
      { title: 'Kitchen Remodel Prep', description: 'Removing cabinets, counters, flooring, and fixtures before kitchen renovation.' },
      { title: 'Bathroom Remodel Prep', description: 'Vanities, tile, fixtures, and finishes removed before bath remodel.' },
      { title: 'Office Remodel', description: 'Partitions, ceilings, and finishes removed for updated office layouts.' },
      { title: 'Retail Remodel', description: 'Selective demo of sales floor and backroom build-out.' },
      { title: 'Restaurant Remodel', description: 'Kitchen and dining tear-out before restaurant renovation.' },
      { title: 'Medical Office Remodel', description: 'Controlled demo in clinical suites and professional spaces.' },
    ],
    faqs: faqs(
      {
        question: 'What is selective demolition?',
        answer:
          'Selective demolition removes specific materials, finishes, or fixtures scheduled for replacement while leaving the overall structure intact and protecting unaffected areas.',
      },
      {
        question: 'How is selective demolition different from structural demolition?',
        answer:
          'Structural demolition involves bringing down load-bearing elements or entire buildings. Reinhart performs selective interior and exterior tear-out that supports renovation—not building wrecking.',
      },
      {
        question: 'Can selective demo cover just one room or suite?',
        answer:
          'Yes. Many projects are limited to a defined room, suite, kitchen, bathroom, or tenant area with clear scope boundaries.',
      },
    ),
  },
  {
    canonicalPath: '/kitchen-demolition',
    pageTitle: 'Kitchen Demolition in Middle Tennessee | Reinhart Hauling & Cleanouts',
    metaDescription:
      'Selective kitchen demolition in Middle Tennessee. Cabinets, counters, flooring, and fixtures removed for renovation prep—not structural demo. Call 615-200-0064.',
    heroEyebrow: 'SELECTIVE DEMOLITION',
    heroHeadline: 'Kitchen Demolition in Middle Tennessee',
    heroIntro:
      'Reinhart Hauling & Cleanouts provides selective kitchen demolition across Middle Tennessee from Goodlettsville. We remove cabinets, counters, flooring, and fixtures to prepare kitchens for renovation—not structural building demolition. Access, appliance disassembly, material weight, and disposal needs affect scope. Utility disconnection can be coordinated where applicable; we do not perform plumbing or electrical work. We are insured, and you receive clear pricing before work begins.',
    heroImage: HERO_KITCHEN,
    heroImageAlt:
      'Selective kitchen demolition removing cabinets and finishes for renovation prep in Middle Tennessee',
    servicesIncluded: [
      'Cabinet and counter removal',
      'Appliance disconnect coordination where applicable',
      'Flooring and backsplash tear-out',
      'Fixture and sink removal',
      'Debris loading and haul-away',
    ],
    idealProjects: [
      { title: 'Residential Kitchen Remodels', description: 'Full kitchen tear-out before cabinet and appliance installation.' },
      { title: 'Rental Property Kitchen Updates', description: 'Opening outdated kitchens for investor renovation work.' },
      { title: 'Restaurant Kitchen Prep', description: 'Selective kitchen demo before commercial food service remodels.' },
      { title: 'Office Break Room Updates', description: 'Small commercial kitchen and break area tear-out.' },
    ],
    faqs: faqs(
      {
        question: 'Do you remove cabinets and countertops?',
        answer: 'Yes. Cabinet, counter, and related kitchen fixture removal is core kitchen demolition scope.',
      },
      {
        question: 'Is kitchen demolition structural demolition?',
        answer:
          'No. We remove finishes, fixtures, and non-structural kitchen elements to prepare for renovation—not load-bearing structure or building wrecking.',
      },
      {
        question: 'Do you handle plumbing or electrical work in the kitchen?',
        answer:
          'No. We do not perform plumbing or electrical work. Utility disconnection can be coordinated with the appropriate trade where applicable before tear-out.',
      },
      {
        question: 'What affects kitchen demolition scope?',
        answer:
          'Access to the kitchen, appliance and cabinet disassembly, material weight, equipment needs, and disposal volume all influence labor and project scope.',
      },
    ),
  },
  {
    canonicalPath: '/bathroom-demolition',
    pageTitle: 'Bathroom Demolition in Middle Tennessee | Reinhart Hauling & Cleanouts',
    metaDescription:
      'Selective bathroom demolition in Middle Tennessee. Vanities, tile, fixtures, and finishes removed for renovation prep—not structural demo. Call 615-200-0064.',
    heroEyebrow: 'SELECTIVE DEMOLITION',
    heroHeadline: 'Bathroom Demolition in Middle Tennessee',
    heroIntro:
      'Reinhart Hauling & Cleanouts provides selective bathroom demolition across Middle Tennessee from Goodlettsville. We clear vanities, tile, fixtures, and finishes so bathrooms are ready for renovation—not structural building demolition. Tight access, fixture disassembly, material weight, and disposal needs affect scope. Utility disconnection can be coordinated where applicable; we do not perform plumbing or electrical work. We are insured, and pricing is confirmed before work begins.',
    heroImage: HERO_KITCHEN,
    heroImageAlt:
      'Selective bathroom demolition clearing vanities and finishes for renovation prep in Middle Tennessee',
    servicesIncluded: [
      'Vanity, mirror, and fixture removal',
      'Tile, tub, and shower surround tear-out',
      'Flooring and drywall removal where scheduled',
      'Debris staging and haul-away',
      'Space prepared for the next trade',
    ],
    idealProjects: [
      { title: 'Residential Bath Remodels', description: 'Full bathroom tear-out before updated layouts and finishes.' },
      { title: 'Multi-Unit Bath Updates', description: 'Scheduled bathroom demo across rental or managed units.' },
      { title: 'Medical & Professional Suites', description: 'Restroom demo in commercial suite renovations.' },
      { title: 'Hospitality & Retail Restrooms', description: 'Selective demo before commercial restroom upgrades.' },
    ],
    faqs: faqs(
      {
        question: 'Do you remove tile and tubs?',
        answer: 'Yes. Tile, tub, shower, vanity, and related bathroom materials can be included in tear-out scope.',
      },
      {
        question: 'Do you perform plumbing or electrical work in bathrooms?',
        answer:
          'No. We do not perform plumbing or electrical work. Utility disconnection can be coordinated with the appropriate trade where applicable before selective tear-out.',
      },
      {
        question: 'What affects bathroom demolition scope?',
        answer:
          'Tight room access, fixture and surround disassembly, tile and material weight, equipment needs, and disposal volume all influence bathroom demo scope.',
      },
      {
        question: 'Will the bathroom be ready for the next renovation trade?',
        answer:
          'Our goal is selective demo and debris removal that clears scheduled materials so plumbers, tile installers, and finish trades can begin their phase of work.',
      },
    ),
  },
  {
    canonicalPath: '/flooring-removal',
    pageTitle: 'Flooring Removal in Middle Tennessee | Reinhart Hauling & Cleanouts',
    metaDescription:
      'Selective flooring removal in Middle Tennessee. Carpet, laminate, vinyl, and tile stripped for renovation prep—not structural demolition. Call 615-200-0064.',
    heroEyebrow: 'SELECTIVE DEMOLITION',
    heroHeadline: 'Flooring Removal in Middle Tennessee',
    heroIntro:
      'Reinhart Hauling & Cleanouts provides selective flooring removal across Middle Tennessee from Goodlettsville. We strip carpet, laminate, vinyl, tile, and related coverings so spaces are ready for new install—not structural building demolition. Access, adhesive and underlayment disassembly, material weight, and disposal volume affect scope. We are insured, and you receive clear pricing before work begins.',
    heroImage: HERO_INSULATION,
    heroImageAlt:
      'Selective flooring removal stripping carpet and finishes for renovation prep in Middle Tennessee',
    servicesIncluded: [
      'Carpet, pad, and tack strip removal',
      'Laminate, vinyl, and LVP tear-out',
      'Tile and adhesive removal where scheduled',
      'Debris loading and haul-away',
      'Subfloor left ready for the next trade',
    ],
    idealProjects: [
      { title: 'Office Floor Replacement', description: 'Removing prior tenant flooring before new commercial install.' },
      { title: 'Retail Floor Updates', description: 'Sales floor flooring tear-out before redevelopment.' },
      { title: 'Residential Remodels', description: 'Whole-home or room-by-room flooring removal.' },
      { title: 'Warehouse & Suite Floors', description: 'Industrial and suite flooring tear-out before renovation.' },
    ],
    faqs: faqs(
      {
        question: 'What types of flooring do you remove?',
        answer:
          'Carpet, laminate, vinyl, LVP, tile, and many glued or floating floor systems within selective demolition scope.',
      },
      {
        question: 'What affects flooring removal scope?',
        answer:
          'Room and building access, adhesive or underlayment difficulty, square footage, material weight, equipment needs, and disposal volume all affect flooring removal scope.',
      },
      {
        question: 'Is flooring removal structural demolition?',
        answer:
          'No. We remove scheduled floor coverings and related materials for renovation prep—not load-bearing structure or building wrecking.',
      },
    ),
  },
  {
    canonicalPath: '/cabinet-removal',
    pageTitle: 'Cabinet Removal in Middle Tennessee | Reinhart Hauling & Cleanouts',
    metaDescription:
      'Selective cabinet removal in Middle Tennessee. Kitchen, bath, office, and built-in casework removed for renovation prep—not structural demo. Call 615-200-0064.',
    heroEyebrow: 'SELECTIVE DEMOLITION',
    heroHeadline: 'Cabinet Removal in Middle Tennessee',
    heroIntro:
      'Reinhart Hauling & Cleanouts provides selective cabinet removal across Middle Tennessee from Goodlettsville. We clear kitchen, bathroom, office, and built-in casework so layouts can be updated during renovation—not structural building demolition. Access, casework disassembly, countertop weight, and disposal needs affect scope. We are insured, and pricing is confirmed before work begins.',
    heroImage: HERO_KITCHEN,
    heroImageAlt:
      'Selective cabinet removal clearing kitchen casework for renovation prep in Middle Tennessee',
    servicesIncluded: [
      'Kitchen and bathroom cabinet removal',
      'Office and built-in casework removal',
      'Countertop separation where scheduled',
      'Hardware and fixture clearing',
      'Debris loading and haul-away',
    ],
    idealProjects: [
      { title: 'Kitchen Renovations', description: 'Removing outdated cabinets before new layout and install.' },
      { title: 'Office TI Projects', description: 'Built-in and storage casework removal during office remodels.' },
      { title: 'Retail & Restaurant Build-Out', description: 'Service counter and casework tear-out before redevelopment.' },
      { title: 'Medical & Professional Suites', description: 'Built-in removal in suite renovation projects.' },
    ],
    faqs: faqs(
      {
        question: 'Do you remove upper and lower cabinets?',
        answer: 'Yes. Upper, lower, and built-in cabinet removal can be included based on project scope.',
      },
      {
        question: 'What affects cabinet removal scope?',
        answer:
          'Access to the work area, how cabinets and counters are fastened, material weight, equipment needs, and disposal volume all influence cabinet removal scope.',
      },
      {
        question: 'Is cabinet removal structural demolition?',
        answer:
          'No. We remove scheduled casework and related finishes for renovation prep—not load-bearing structure or building wrecking.',
      },
    ),
  },
  {
    canonicalPath: '/ceiling-grid-removal',
    pageTitle: 'Ceiling Grid Removal in Middle Tennessee | Reinhart Hauling & Cleanouts',
    metaDescription:
      'Selective ceiling grid and tile removal in Middle Tennessee. Drop ceilings torn out for renovation and TI prep—not structural demo. Call 615-200-0064.',
    heroEyebrow: 'SELECTIVE DEMOLITION',
    heroHeadline: 'Ceiling Grid & Ceiling Tile Removal',
    heroIntro:
      'Reinhart Hauling & Cleanouts provides selective ceiling grid and tile removal across Middle Tennessee from Goodlettsville. We tear out drop ceilings so commercial and office interiors are ready for renovation—not structural building demolition. Building access, grid disassembly, material weight, and disposal needs affect scope. Fixture or electrical work must be handled by the appropriate trade when required. We are insured, and you receive clear pricing before work begins.',
    heroImage: HERO_INSULATION,
    heroImageAlt:
      'Selective ceiling grid and tile removal preparing a commercial interior for renovation in Middle Tennessee',
    servicesIncluded: [
      'Drop ceiling grid and tile removal',
      'Acoustic tile and grid component tear-out',
      'Coordination around fixtures handled by others when required',
      'Debris staging and haul-away',
      'Ceiling area prepared for the next trade',
    ],
    idealProjects: [
      { title: 'Office TI Renovations', description: 'Removing prior drop ceilings before updated office build-out.' },
      { title: 'Retail Suite Remodels', description: 'Ceiling system tear-out before retail redevelopment.' },
      { title: 'Medical & Professional Offices', description: 'Controlled ceiling demo in occupied building schedules.' },
      { title: 'Warehouse Office Areas', description: 'Ceiling grid removal in industrial support spaces.' },
    ],
    faqs: faqs(
      {
        question: 'Do you remove drop ceiling grids and tiles?',
        answer: 'Yes. Grid, tile, and related ceiling components can be removed as part of selective demolition scope.',
      },
      {
        question: 'What affects ceiling grid removal scope?',
        answer:
          'Suite and building access, grid and tile quantity, fixture coordination, material weight, equipment needs, and disposal volume all affect ceiling removal scope.',
      },
      {
        question: 'Can ceiling removal be part of a TI project?',
        answer:
          'Yes. Ceiling tear-out is commonly coordinated with tenant improvement and commercial renovation schedules.',
      },
    ),
  },
  {
    canonicalPath: '/drywall-removal',
    pageTitle: 'Drywall Removal in Middle Tennessee | Reinhart Hauling & Cleanouts',
    metaDescription:
      'Selective drywall removal in Middle Tennessee. Wall and ceiling drywall torn out for renovation prep—not structural demolition. Call 615-200-0064.',
    heroEyebrow: 'SELECTIVE DEMOLITION',
    heroHeadline: 'Drywall Removal in Middle Tennessee',
    heroIntro:
      'Reinhart Hauling & Cleanouts provides selective drywall removal across Middle Tennessee from Goodlettsville. We open scheduled walls and ceilings for renovation and repair—not structural building demolition. Access, panel quantity, containment needs, material weight, and disposal volume affect scope. We are insured, and pricing is confirmed before work begins.',
    heroImage: HERO_INSULATION,
    heroImageAlt:
      'Selective drywall removal opening walls for renovation prep in Middle Tennessee',
    servicesIncluded: [
      'Selective wall and ceiling drywall removal',
      'Insulation exposure where scheduled',
      'Debris containment and haul-away',
      'Area prepared for framing, MEP, or new drywall',
      'Scope aligned with contractor plans',
    ],
    idealProjects: [
      { title: 'Office Layout Changes', description: 'Drywall removal for updated partitions and suite layouts.' },
      { title: 'Residential Remodels', description: 'Opening walls and ceilings for renovation and repair work.' },
      { title: 'Water & Restoration Prep', description: 'Controlled drywall tear-out before rebuild phases.' },
      { title: 'Commercial Suite Renovations', description: 'Wall and ceiling demo aligned with TI schedules.' },
    ],
    faqs: faqs(
      {
        question: 'Do you remove drywall only where scheduled?',
        answer:
          'Yes. Selective drywall removal follows defined scope boundaries so unaffected areas remain protected.',
      },
      {
        question: 'What affects drywall removal scope?',
        answer:
          'Access to the work area, wall and ceiling square footage, containment needs, material weight, equipment needs, and disposal volume all influence drywall removal scope.',
      },
      {
        question: 'Is drywall removal structural demolition?',
        answer:
          'No. We remove scheduled drywall for renovation prep—not load-bearing structure or building wrecking.',
      },
    ),
  },
  {
    canonicalPath: '/fence-removal',
    pageTitle: 'Fence Removal in Middle Tennessee | Reinhart Hauling & Cleanouts',
    metaDescription:
      'Selective fence removal in Middle Tennessee. Panels, posts, and debris cleared for exterior renovation prep—not structural building demo. Call 615-200-0064.',
    heroEyebrow: 'SELECTIVE DEMOLITION',
    heroHeadline: 'Fence Removal in Middle Tennessee',
    heroIntro:
      'Reinhart Hauling & Cleanouts provides selective fence removal across Middle Tennessee from Goodlettsville. We tear down panels, posts, and related debris so exterior updates can move forward—not structural building demolition. Yard access, post depth, fence length, material weight, and disposal needs affect scope. We are insured, and you receive clear pricing before work begins.',
    heroImage: HERO_FENCE,
    heroImageAlt:
      'Selective fence removal clearing panels and posts for exterior renovation prep in Middle Tennessee',
    servicesIncluded: [
      'Wood, vinyl, and chain-link fence removal',
      'Post and panel tear-down',
      'Gate and hardware removal',
      'Debris loading and haul-away',
      'Yard area left ready for the next phase',
    ],
    idealProjects: [
      { title: 'Investor Property Resets', description: 'Removing damaged or outdated fencing before resale or renovation.' },
      { title: 'Rental Property Updates', description: 'Fence removal before exterior improvements and landscaping.' },
      { title: 'Commercial Site Prep', description: 'Exterior fence clearing for site work and access changes.' },
      { title: 'Residential Exterior Remodels', description: 'Fence tear-down before new installation or yard work.' },
    ],
    whoWeWorkWith: ['General Contractors', 'Real Estate Investors', 'Property Managers', 'Homeowners', 'Landlords'],
    faqs: faqs(
      {
        question: 'Do you haul away fence debris?',
        answer: 'Yes. Fence panels, posts, and related debris can be loaded and hauled as part of project scope.',
      },
      {
        question: 'What affects fence removal scope?',
        answer:
          'Yard and truck access, fence length and material type, post depth, disassembly difficulty, material weight, and disposal volume all affect fence removal scope.',
      },
      {
        question: 'Is fence removal structural building demolition?',
        answer:
          'No. We remove fencing and related exterior materials for property prep—not buildings or load-bearing structures.',
      },
    ),
  },
  {
    canonicalPath: '/deck-removal',
    pageTitle: 'Deck Removal in Middle Tennessee | Reinhart Hauling & Cleanouts',
    metaDescription:
      'Selective deck removal in Middle Tennessee. Boards, railings, and framing removed for exterior renovation prep—not structural building demo. Call 615-200-0064.',
    heroEyebrow: 'SELECTIVE DEMOLITION',
    heroHeadline: 'Deck Removal in Middle Tennessee',
    heroIntro:
      'Reinhart Hauling & Cleanouts provides selective deck removal across Middle Tennessee from Goodlettsville. We take down boards, railings, framing, and related components for exterior renovation prep—not structural building demolition. Deck construction, site access, material weight, equipment needs, and disposal volume affect scope. We are insured, and pricing is confirmed before work begins.',
    heroImage: HERO_FENCE,
    heroImageAlt:
      'Selective deck removal clearing boards and framing for exterior renovation prep in Middle Tennessee',
    servicesIncluded: [
      'Deck board and railing removal',
      'Framing and post tear-down where scheduled',
      'Hardware and debris clearing',
      'Loading and haul-away',
      'Area prepared for rebuild or landscaping',
    ],
    idealProjects: [
      { title: 'Residential Deck Replacement', description: 'Removing failing decks before new exterior construction.' },
      { title: 'Rental & Investor Properties', description: 'Deck tear-down during property reset and renovation.' },
      { title: 'Commercial Exterior Updates', description: 'Selective exterior structure removal where applicable.' },
    ],
    whoWeWorkWith: ['General Contractors', 'Real Estate Investors', 'Homeowners', 'Property Managers', 'Landlords'],
    faqs: faqs(
      {
        question: 'Do you remove the full deck structure?',
        answer:
          'We remove deck components within agreed scope—typically boards, railings, framing, and posts—not building structural demolition.',
      },
      {
        question: 'What affects deck removal scope?',
        answer:
          'Deck size and construction, site and truck access, fastening methods, material weight, equipment needs, and disposal volume all influence deck removal scope.',
      },
      {
        question: 'Is deck removal structural building demolition?',
        answer:
          'No. We remove scheduled deck components for exterior renovation prep—not buildings or load-bearing house structure.',
      },
    ),
  },
  {
    canonicalPath: '/shed-demolition',
    pageTitle: 'Shed Demolition in Middle Tennessee | Reinhart Hauling & Cleanouts',
    metaDescription:
      'Selective shed demolition in Middle Tennessee. Small sheds and outbuildings removed for property prep—not large structural building demo. Call 615-200-0064.',
    heroEyebrow: 'SELECTIVE DEMOLITION',
    heroHeadline: 'Shed Demolition in Middle Tennessee',
    heroIntro:
      'Reinhart Hauling & Cleanouts provides selective shed demolition across Middle Tennessee from Goodlettsville. We take down small sheds and outdoor structures so properties can be reset for renovation or sale—not full building wrecking. Access, shed size, disassembly, material weight, and disposal needs affect scope. Large structural demolition requires licensed structural demolition contractors. We are insured, and you receive clear pricing before work begins.',
    heroImage: HERO_FENCE,
    heroImageAlt:
      'Selective shed demolition removing a small outdoor structure for property prep in Middle Tennessee',
    servicesIncluded: [
      'Small shed and outbuilding tear-down',
      'Contents clearing where applicable',
      'Debris loading and haul-away',
      'Site left ready for landscaping or new construction',
    ],
    idealProjects: [
      { title: 'Residential Yard Resets', description: 'Removing old sheds before landscaping or exterior work.' },
      { title: 'Investor Property Cleanup', description: 'Outbuilding removal during property preparation.' },
      { title: 'Rental Turnover Support', description: 'Clearing abandoned sheds and storage structures.' },
    ],
    whoWeWorkWith: ['General Contractors', 'Real Estate Investors', 'Homeowners', 'Property Managers', 'Landlords'],
    faqs: faqs(
      {
        question: 'Do you demolish large buildings or barns?',
        answer:
          'We focus on small sheds and outbuildings. Large structural demolition requires licensed structural demolition contractors.',
      },
      {
        question: 'What affects shed demolition scope?',
        answer:
          'Yard and truck access, shed size and construction, contents clearing, disassembly difficulty, material weight, equipment needs, and disposal volume all affect shed demolition scope.',
      },
      {
        question: 'Is shed demolition the same as structural building demolition?',
        answer:
          'No. Selective shed tear-down targets small outdoor structures for property prep. Large structural demolition requires licensed structural demolition contractors.',
      },
    ),
  },
];
