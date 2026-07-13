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
  { label: 'Commercial Interior Strip-Outs', to: '/commercial-interior-strip-outs' },
  { label: 'Commercial Property Turnovers', to: '/commercial-property-turnovers' },
  { label: 'Construction Cleanup', to: '/construction-cleanup' },
  { label: 'White Box Preparation', to: '/white-box-preparation' },
  { label: 'Lease Surrender Preparation', to: '/lease-surrender-preparation' },
  { label: 'Flooring Removal', to: '/flooring-removal' },
  { label: 'Cabinet Removal', to: '/cabinet-removal' },
  { label: 'Drywall Removal', to: '/drywall-removal' },
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
    question: 'What areas do you serve?',
    answer:
      'We serve Nashville, Goodlettsville, Hendersonville, Gallatin, Madison, Springfield, White House, and surrounding Middle Tennessee communities.',
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
    pageTitle: 'Interior Demolition | Reinhart Hauling & Cleanouts',
    metaDescription:
      'Selective interior demolition in Middle Tennessee. Reinhart prepares commercial and residential spaces for renovation—not structural building demolition.',
    heroEyebrow: 'SELECTIVE DEMOLITION',
    heroHeadline: 'Interior Demolition',
    heroIntro:
      'Interior demolition at Reinhart means controlled, selective tear-out that opens spaces for renovation, tenant improvement, and the next project phase—without structural building demolition.',
    heroImage: HERO_INSULATION,
    heroImageAlt: 'Selective interior demolition project in Middle Tennessee',
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
    pageTitle: 'Tenant Improvement (TI) Demolition | Reinhart Hauling & Cleanouts',
    metaDescription:
      'Tenant improvement demolition in Middle Tennessee. Reinhart assists contractors and property owners with selective tear-out before office, retail, and commercial renovations.',
    ogTitle: 'Tenant Improvement (TI) Demolition | Middle Tennessee',
    heroEyebrow: 'SELECTIVE DEMOLITION',
    heroHeadline: 'Tenant Improvement (TI) Demolition',
    heroIntro:
      'Reinhart assists contractors and property owners with the selective demolition required before tenant improvements and commercial renovations. We remove prior build-out, haul debris, and prepare spaces for framing, electrical, plumbing, drywall, flooring, and finishes—not structural demolition.',
    heroImage: HERO_KITCHEN,
    heroImageAlt: 'Tenant improvement demolition project in Middle Tennessee',
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
    pageTitle: 'Selective Demolition | Reinhart Hauling & Cleanouts',
    metaDescription:
      'Selective demolition in Middle Tennessee. Reinhart removes only scheduled materials while protecting the rest of the property—preparing spaces for renovation and tenant transitions.',
    ogTitle: 'Selective Demolition | Middle Tennessee',
    heroEyebrow: 'SELECTIVE DEMOLITION',
    heroHeadline: 'Selective Demolition',
    heroIntro:
      'Selective demolition removes only the materials scheduled for replacement while protecting the remainder of the property. Reinhart supports room-level, suite-level, and trade-specific tear-outs that prepare spaces for renovation—not heavy structural demolition.',
    heroImage: HERO_INSULATION,
    heroImageAlt: 'Selective demolition project preparing a space for renovation',
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
    pageTitle: 'Kitchen Demolition | Reinhart Hauling & Cleanouts',
    metaDescription:
      'Kitchen demolition and tear-out in Middle Tennessee. Cabinets, counters, flooring, and fixtures removed to prepare kitchens for renovation.',
    heroEyebrow: 'SELECTIVE DEMOLITION',
    heroHeadline: 'Kitchen Demolition',
    heroIntro:
      'Kitchen demolition removes cabinets, counters, flooring, fixtures, and related finishes so renovation can begin cleanly. Reinhart provides selective kitchen tear-out and debris haul-away for residential and commercial remodels.',
    heroImage: HERO_KITCHEN,
    heroImageAlt: 'Kitchen demolition before renovation in Middle Tennessee',
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
          'No. We remove finishes, fixtures, and non-structural kitchen elements to prepare for renovation—not load-bearing structure.',
      },
    ),
  },
  {
    canonicalPath: '/bathroom-demolition',
    pageTitle: 'Bathroom Demolition | Reinhart Hauling & Cleanouts',
    metaDescription:
      'Bathroom demolition and tear-out in Middle Tennessee. Vanities, tile, fixtures, and finishes removed to prepare bathrooms for renovation.',
    heroEyebrow: 'SELECTIVE DEMOLITION',
    heroHeadline: 'Bathroom Demolition',
    heroIntro:
      'Bathroom demolition clears vanities, tile, fixtures, flooring, and related finishes so plumbing, tile, and finish trades can begin. Reinhart provides selective bathroom tear-out with organized debris removal.',
    heroImage: HERO_KITCHEN,
    heroImageAlt: 'Bathroom demolition and renovation prep in Middle Tennessee',
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
        question: 'Will the space be ready for plumbers and tile installers?',
        answer:
          'Yes. Our goal is selective demo and debris removal that leaves the bathroom ready for the next renovation phase.',
      },
    ),
  },
  {
    canonicalPath: '/flooring-removal',
    pageTitle: 'Flooring Removal | Reinhart Hauling & Cleanouts',
    metaDescription:
      'Flooring removal in Middle Tennessee. Carpet, laminate, vinyl, tile, and other flooring stripped and hauled before new installation.',
    heroEyebrow: 'SELECTIVE DEMOLITION',
    heroHeadline: 'Flooring Removal',
    heroIntro:
      'Flooring removal strips carpet, laminate, vinyl, tile, and other floor coverings so subfloor prep and new installation can begin. Reinhart handles selective flooring tear-out and debris haul-away for renovation projects.',
    heroImage: HERO_INSULATION,
    heroImageAlt: 'Flooring removal during a renovation project',
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
        answer: 'Carpet, laminate, vinyl, LVP, tile, and many glued or floating floor systems within selective demo scope.',
      },
    ),
  },
  {
    canonicalPath: '/cabinet-removal',
    pageTitle: 'Cabinet Removal | Reinhart Hauling & Cleanouts',
    metaDescription:
      'Cabinet removal in Middle Tennessee. Kitchen, bathroom, office, and built-in cabinets removed cleanly for renovation and tenant improvement projects.',
    heroEyebrow: 'SELECTIVE DEMOLITION',
    heroHeadline: 'Cabinet Removal',
    heroIntro:
      'Cabinet removal clears kitchen, bathroom, office, and built-in casework so layouts can be updated during renovation. Reinhart provides selective cabinet tear-out with debris haul-away—not structural demolition.',
    heroImage: HERO_KITCHEN,
    heroImageAlt: 'Cabinet removal during a kitchen renovation',
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
    ),
  },
  {
    canonicalPath: '/ceiling-grid-removal',
    pageTitle: 'Ceiling Grid & Ceiling Tile Removal | Reinhart Hauling & Cleanouts',
    metaDescription:
      'Ceiling grid and ceiling tile removal in Middle Tennessee. Selective tear-out of drop ceilings and tiles for renovation, TI, and commercial remodel projects.',
    heroEyebrow: 'SELECTIVE DEMOLITION',
    heroHeadline: 'Ceiling Grid & Ceiling Tile Removal',
    heroIntro:
      'Ceiling grid and tile removal opens plenum space and prepares commercial and office interiors for updated ceilings, MEP work, and renovation. Reinhart provides selective ceiling system tear-out with debris haul-away.',
    heroImage: HERO_INSULATION,
    heroImageAlt: 'Ceiling grid and tile removal during commercial renovation prep',
    servicesIncluded: [
      'Drop ceiling grid and tile removal',
      'Acoustic tile and grid component tear-out',
      'Light fixture coordination where applicable',
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
        question: 'Can ceiling removal be part of a TI project?',
        answer:
          'Yes. Ceiling tear-out is commonly coordinated with tenant improvement and commercial renovation schedules.',
      },
    ),
  },
  {
    canonicalPath: '/drywall-removal',
    pageTitle: 'Drywall Removal | Reinhart Hauling & Cleanouts',
    metaDescription:
      'Drywall removal in Middle Tennessee. Selective drywall tear-out and debris haul-away for renovation, repair, and tenant improvement projects.',
    heroEyebrow: 'SELECTIVE DEMOLITION',
    heroHeadline: 'Drywall Removal',
    heroIntro:
      'Drywall removal opens walls and ceilings for inspection, MEP work, and renovation. Reinhart provides selective drywall tear-out with organized debris removal—not structural demolition.',
    heroImage: HERO_INSULATION,
    heroImageAlt: 'Drywall removal during interior renovation prep',
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
    ),
  },
  {
    canonicalPath: '/fence-removal',
    pageTitle: 'Fence Removal | Reinhart Hauling & Cleanouts',
    metaDescription:
      'Fence removal in Middle Tennessee. Old fencing, posts, panels, and related debris removed to prepare properties for renovation and exterior updates.',
    heroEyebrow: 'SELECTIVE DEMOLITION',
    heroHeadline: 'Fence Removal',
    heroIntro:
      'Fence removal clears old panels, posts, and related debris so exterior renovation, landscaping, or property preparation can move forward. Reinhart handles selective fence tear-down and haul-away—not structural building demolition.',
    heroImage: HERO_FENCE,
    heroImageAlt: 'Fence removal project in Middle Tennessee',
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
    ),
  },
  {
    canonicalPath: '/deck-removal',
    pageTitle: 'Deck Removal | Reinhart Hauling & Cleanouts',
    metaDescription:
      'Deck removal in Middle Tennessee. Deck boards, framing, railings, and demolition debris removed to prepare properties for exterior renovation.',
    heroEyebrow: 'SELECTIVE DEMOLITION',
    heroHeadline: 'Deck Removal',
    heroIntro:
      'Deck removal takes down boards, framing, railings, and related components so exterior renovation or property preparation can continue. Reinhart provides selective deck tear-down and debris haul-away.',
    heroImage: HERO_FENCE,
    heroImageAlt: 'Deck removal and exterior tear-down project',
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
    ),
  },
  {
    canonicalPath: '/shed-demolition',
    pageTitle: 'Shed Demolition | Reinhart Hauling & Cleanouts',
    metaDescription:
      'Shed demolition in Middle Tennessee. Small sheds and outdoor structures taken down and hauled for property preparation and exterior resets.',
    heroEyebrow: 'SELECTIVE DEMOLITION',
    heroHeadline: 'Shed Demolition',
    heroIntro:
      'Shed demolition removes small outdoor structures and related debris so yards and properties can be reset for renovation, sale, or the next project phase. Reinhart handles selective outbuilding tear-down—not full building demolition.',
    heroImage: HERO_FENCE,
    heroImageAlt: 'Shed demolition and outdoor structure removal',
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
    ),
  },
];
