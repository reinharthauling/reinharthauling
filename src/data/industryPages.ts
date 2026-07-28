export type IndustryProject = {
  title: string;
  description: string;
};

export type IndustryServiceLink = {
  label: string;
  to: string;
  description: string;
};

export type IndustryFaq = {
  question: string;
  answer: string;
};

export type IndustryPageConfig = {
  canonicalPath: string;
  pageTitle: string;
  metaDescription: string;
  ogTitle?: string;
  heroHeadline: string;
  heroIntro: string;
  heroImage?: string;
  heroImageAlt?: string;
  overview: string;
  propertyTypes: string[];
  typicalProjects: IndustryProject[];
  commonServices: IndustryServiceLink[];
  relatedServices: { label: string; to: string }[];
  faqs: IndustryFaq[];
};

const HERO_IMAGE =
  '/images/projects/2026%20Projects/2026-06_Commercial-Office-Cleanout_Nashville/01_Before/cubicle-office-before-01.jpeg';

const BASE_FAQS: IndustryFaq[] = [
  {
    question: 'What areas do you serve?',
    answer:
      'We serve Goodlettsville, Hendersonville, Gallatin, White House, Greenbrier, Ridgetop, Springfield, Nashville (including East Nashville, Downtown Nashville, Old Hickory, Joelton, Madison, and Hermitage), Belle Meade, Brentwood, Franklin, Mt. Juliet, Lebanon, Portland, and surrounding Middle Tennessee communities.',
  },
  {
    question: 'Can we start with photos instead of a walkthrough?',
    answer:
      'Yes. Photos are often the fastest way to begin—especially for straightforward scopes. We will tell you if a walkthrough is needed.',
  },
  {
    question: 'Do you work on active commercial schedules?',
    answer:
      'Yes. We confirm scope, access, and timing upfront so property work supports renovation, turnover, and contractor timelines.',
  },
];

function faqs(...items: IndustryFaq[]): IndustryFaq[] {
  return [...items, ...BASE_FAQS.slice(0, Math.max(0, 8 - items.length))];
}

function svc(label: string, to: string, description: string): IndustryServiceLink {
  return { label, to, description };
}

export const INDUSTRY_PAGES: IndustryPageConfig[] = [
  {
    canonicalPath: '/commercial-property-managers',
    pageTitle: 'Commercial Property Managers | Industries We Serve | Reinhart Hauling & Cleanouts',
    metaDescription:
      'Commercial property manager support in Middle Tennessee—lease turnovers, vacant suites, tenant move-outs, and property preparation with professional execution.',
    heroHeadline: 'Commercial Property Managers',
    heroIntro:
      'Reinhart supports commercial property managers with organized turnover, cleanout, and property preparation work—so vacant suites move toward re-leasing, renovation, or the next project phase.',
    heroImage: HERO_IMAGE,
    heroImageAlt: 'Commercial property turnover project in Middle Tennessee',
    overview:
      'Property managers need dependable partners when suites turn over, tenants leave contents behind, or timelines tighten before marketing and re-occupancy. Reinhart provides commercial cleanout and preparation support with clear scope, responsive communication, and professional execution.',
    propertyTypes: ['Office buildings', 'Retail centers', 'Mixed-use properties', 'Managed commercial portfolios', 'Single-tenant suites', 'Multi-tenant complexes'],
    typicalProjects: [
      { title: 'Lease Turnovers', description: 'Clearing suites after tenant departure so turnover work can begin.' },
      { title: 'Vacant Suites', description: 'Removing abandoned contents and debris from unoccupied commercial space.' },
      { title: 'Tenant Move-Outs', description: 'Load-out support aligned with lease-end deadlines and access windows.' },
      { title: 'Office Cleanouts', description: 'Furniture, fixtures, and office contents removed during decommissioning.' },
      { title: 'Retail Cleanouts', description: 'Store contents and backroom materials cleared during transitions.' },
      { title: 'Property Preparation', description: 'Organized clearing so spaces present cleanly for marketing or renovation.' },
    ],
    commonServices: [
      svc('Commercial Property Turnovers', '/commercial-property-turnovers', 'Turnover support between commercial tenants and project phases.'),
      svc('Property Management Cleanouts', '/property-management-cleanouts', 'Recurring cleanout support across managed commercial properties.'),
      svc('Lease Surrender Preparation', '/lease-surrender-preparation', 'Load-out aligned with lease-end and surrender requirements.'),
      svc('Office Load-Outs', '/office-load-outs', 'Office furniture and contents removed during suite transitions.'),
      svc('Commercial Cleanouts', '/commercial-cleanouts', 'Full commercial cleanouts for offices, suites, and facilities.'),
      svc('Contractor Project Support', '/contractor-project-support', 'Dependable labor support when manager timelines are tight.'),
    ],
    relatedServices: [
      { label: 'Commercial Property Turnovers', to: '/commercial-property-turnovers' },
      { label: 'Property Management Cleanouts', to: '/property-management-cleanouts' },
      { label: 'Lease Surrender Preparation', to: '/lease-surrender-preparation' },
      { label: 'Office Load-Outs', to: '/office-load-outs' },
      { label: 'Commercial Cleanouts', to: '/commercial-cleanouts' },
      { label: 'Contractor Project Support', to: '/contractor-project-support' },
    ],
    faqs: faqs(
      {
        question: 'Can you support multi-suite turnovers?',
        answer: 'Yes. We coordinate scope and scheduling across portfolios when access, volume, and timing are defined upfront.',
      },
      {
        question: 'Do you communicate with property management teams during active projects?',
        answer: 'Yes. Clear updates on scope, schedule, and handoff expectations are standard on commercial property work.',
      },
    ),
  },
  {
    canonicalPath: '/general-contractors',
    pageTitle: 'General Contractors | Industries We Serve | Reinhart Hauling & Cleanouts',
    metaDescription:
      'General contractor support in Middle Tennessee—interior strip-outs, tenant improvement demo, construction cleanup, and project support that keeps jobs moving.',
    heroHeadline: 'General Contractors',
    heroIntro:
      'Reinhart partners with general contractors who need dependable tear-out, haul-away, and cleanup support—so renovation schedules stay on track and trades can mobilize on time.',
    heroImage: HERO_IMAGE,
    heroImageAlt: 'Commercial construction support project in Middle Tennessee',
    overview:
      'Contractors call Reinhart when selective demolition, strip-outs, debris removal, and project cleanup need to happen on schedule—with professional communication and organized execution on active jobsites.',
    propertyTypes: ['Office TI projects', 'Retail build-outs', 'Medical suites', 'Restaurant renovations', 'Warehouse improvements', 'Commercial remodels'],
    typicalProjects: [
      { title: 'Interior Strip-Outs', description: 'Selective tear-out before framing, MEP, and finish work begins.' },
      { title: 'Tenant Improvement Demo', description: 'Prior build-out removal aligned with contractor mobilization.' },
      { title: 'Construction Cleanup', description: 'Jobsite debris, packaging, and leftover materials cleared between phases.' },
      { title: 'Material Hauling', description: 'Organized loading and haul-away during active renovation work.' },
      { title: 'Selective Demolition', description: 'Targeted removal of scheduled materials while protecting the rest of the space.' },
      { title: 'Project Support', description: 'Extra labor and haul-away when the schedule cannot slip.' },
    ],
    commonServices: [
      svc('Contractor Project Support', '/contractor-project-support', 'Dependable labor and haul-away for active commercial projects.'),
      svc('Commercial Interior Strip-Outs', '/commercial-interior-strip-outs', 'Selective interior tear-out before renovation and TI work.'),
      svc('Tenant Improvement (TI) Demo', '/tenant-improvement-demolition', 'Prior tenant build-out removal before new construction.'),
      svc('Construction Cleanup', '/construction-cleanup', 'Debris and material removal during and after construction phases.'),
      svc('Selective Demolition', '/selective-demolition', 'Controlled tear-out aligned with contractor scope and schedule.'),
      svc('Commercial Cleanouts', '/commercial-cleanouts', 'Contents and debris clearing on commercial renovation projects.'),
    ],
    relatedServices: [
      { label: 'Contractor Project Support', to: '/contractor-project-support' },
      { label: 'Commercial Interior Strip-Outs', to: '/commercial-interior-strip-outs' },
      { label: 'Tenant Improvement (TI) Demo', to: '/tenant-improvement-demolition' },
      { label: 'Construction Cleanup', to: '/construction-cleanup' },
      { label: 'Selective Demolition', to: '/selective-demolition' },
      { label: 'Commercial Cleanouts', to: '/commercial-cleanouts' },
    ],
    faqs: faqs(
      {
        question: 'Can Reinhart coordinate with an active jobsite schedule?',
        answer: 'Yes. Scope, access, staging, and timing are confirmed upfront so our work supports the contractor sequence.',
      },
      {
        question: 'Do you perform structural demolition?',
        answer: 'No. We focus on selective interior tear-out, strip-outs, cleanup, and haul-away—not structural building demolition.',
      },
    ),
  },
  {
    canonicalPath: '/commercial-real-estate',
    pageTitle: 'Commercial Real Estate | Industries We Serve | Reinhart Hauling & Cleanouts',
    metaDescription:
      'Commercial real estate support in Middle Tennessee—property transitions, lease surrender, white box preparation, and vacant property cleanup.',
    heroHeadline: 'Commercial Real Estate',
    heroIntro:
      'Reinhart helps ownership groups, brokers, and asset managers prepare commercial properties for transition—lease surrender, redevelopment, marketing, and the next occupancy phase.',
    heroImage: HERO_IMAGE,
    heroImageAlt: 'Commercial real estate property transition in Middle Tennessee',
    overview:
      'Commercial real estate transitions often depend on how quickly a property can be cleared, presented, and repositioned. Reinhart provides organized cleanout and preparation support with professional communication and dependable scheduling.',
    propertyTypes: ['Office assets', 'Retail properties', 'Industrial buildings', 'Mixed-use assets', 'Vacant commercial space', 'Repositioned properties'],
    typicalProjects: [
      { title: 'Property Transitions', description: 'Clearing contents and debris when assets change hands or strategy.' },
      { title: 'Lease Surrender', description: 'Load-out support aligned with lease-end and surrender expectations.' },
      { title: 'White Box Preparation', description: 'Removing tenant-specific build-out for marketing or redevelopment.' },
      { title: 'Vacant Property Cleanup', description: 'Abandoned contents and clutter removed from unoccupied assets.' },
      { title: 'Marketing Preparation', description: 'Spaces opened up for photography, showings, and broker access.' },
    ],
    commonServices: [
      svc('White Box Preparation', '/white-box-preparation', 'Clear tenant build-out for marketing or redevelopment.'),
      svc('Lease Surrender Preparation', '/lease-surrender-preparation', 'Load-out aligned with lease-end requirements.'),
      svc('Commercial Property Turnovers', '/commercial-property-turnovers', 'Transition support between tenants and project phases.'),
      svc('Commercial Cleanouts', '/commercial-cleanouts', 'Full commercial cleanouts for vacant or transitioning assets.'),
      svc('Retail Decommissioning', '/retail-decommissioning', 'Store fixture and contents removal during asset transitions.'),
    ],
    relatedServices: [
      { label: 'White Box Preparation', to: '/white-box-preparation' },
      { label: 'Lease Surrender Preparation', to: '/lease-surrender-preparation' },
      { label: 'Commercial Property Turnovers', to: '/commercial-property-turnovers' },
      { label: 'Commercial Cleanouts', to: '/commercial-cleanouts' },
      { label: 'Retail Decommissioning', to: '/retail-decommissioning' },
    ],
    faqs: faqs({
      question: 'Can work be scheduled around brokerage and showing timelines?',
      answer: 'Yes. We confirm scope and timing upfront when marketing, inspection, or redevelopment deadlines apply.',
    }),
  },
  {
    canonicalPath: '/retail',
    pageTitle: 'Retail | Industries We Serve | Reinhart Hauling & Cleanouts',
    metaDescription:
      'Retail property support in Middle Tennessee—store closures, retail decommissioning, fixture removal, and white box preparation for commercial transitions.',
    heroHeadline: 'Retail',
    heroIntro:
      'Reinhart supports retail closures, remodels, and repositioning with organized decommissioning, strip-out, and property preparation—so spaces can be surrendered, re-leased, or redeveloped on schedule.',
    heroImage: HERO_IMAGE,
    heroImageAlt: 'Retail decommissioning project in Middle Tennessee',
    overview:
      'Retail transitions require fast, organized execution—fixtures, inventory, signage, and backroom contents must be cleared without disrupting mall access, lease deadlines, or redevelopment schedules.',
    propertyTypes: ['Strip centers', 'Mall inline stores', 'Standalone retail', 'Franchise locations', 'Pop-up spaces', 'Backroom and stock areas'],
    typicalProjects: [
      { title: 'Store Closures', description: 'Full decommissioning when a retail location closes or relocates.' },
      { title: 'Retail Decommissioning', description: 'Fixtures, displays, and inventory removed during closure.' },
      { title: 'Fixture Removal', description: 'Shelving, casework, and sales floor build-out tear-out.' },
      { title: 'Signage Removal', description: 'Storefront and interior signage cleared as part of surrender scope.' },
      { title: 'Display Removal', description: 'Sales floor displays and specialty fixtures hauled away.' },
      { title: 'White Box Preparation', description: 'Space cleared for marketing, TI, or the next tenant.' },
    ],
    commonServices: [
      svc('Retail Decommissioning', '/retail-decommissioning', 'Fixture and contents removal during store closures.'),
      svc('Commercial Interior Strip-Outs', '/commercial-interior-strip-outs', 'Selective tear-out before retail redevelopment.'),
      svc('Tenant Improvement (TI) Demo', '/tenant-improvement-demolition', 'Prior build-out removal before new retail construction.'),
      svc('Commercial Property Turnovers', '/commercial-property-turnovers', 'Transition support between retail tenants.'),
      svc('White Box Preparation', '/white-box-preparation', 'Clear tenant build-out for marketing or re-leasing.'),
      svc('Retail Store Cleanouts', '/retail-store-cleanouts', 'Sales floor and backroom contents cleared efficiently.'),
    ],
    relatedServices: [
      { label: 'Retail Decommissioning', to: '/retail-decommissioning' },
      { label: 'Commercial Interior Strip-Outs', to: '/commercial-interior-strip-outs' },
      { label: 'Tenant Improvement (TI) Demo', to: '/tenant-improvement-demolition' },
      { label: 'Commercial Property Turnovers', to: '/commercial-property-turnovers' },
      { label: 'White Box Preparation', to: '/white-box-preparation' },
    ],
    faqs: faqs({
      question: 'Can you work within tight store closure deadlines?',
      answer: 'Yes. Retail closures often run on fixed schedules—we confirm scope, access, and timing before mobilizing.',
    }),
  },
  {
    canonicalPath: '/office',
    pageTitle: 'Office | Industries We Serve | Reinhart Hauling & Cleanouts',
    metaDescription:
      'Office property support in Middle Tennessee—office load-outs, interior strip-outs, tenant improvement demo, and suite turnover for commercial buildings.',
    heroHeadline: 'Office',
    heroIntro:
      'Reinhart supports office decommissioning, tenant improvements, and suite turnovers with organized load-out, strip-out, and property preparation—helping buildings move toward renovation or new occupancy.',
    heroImage: HERO_IMAGE,
    heroImageAlt: 'Office load-out project in Middle Tennessee',
    overview:
      'Office transitions involve cubicles, furniture, files, ceiling systems, and tenant-specific build-out. Reinhart provides commercial execution with clear scope, property protection, and schedule discipline.',
    propertyTypes: ['Class A office towers', 'Suburban office parks', 'Medical office buildings', 'Professional suites', 'Corporate campuses', 'Shared office space'],
    typicalProjects: [
      { title: 'Office Decommissioning', description: 'Full suite clearing when tenants vacate or downsize.' },
      { title: 'Cubicle & Furniture Removal', description: 'Workstations, desks, and office contents hauled away.' },
      { title: 'TI Strip-Outs', description: 'Prior tenant improvements removed before new build-out.' },
      { title: 'Suite Turnovers', description: 'Transition support between office tenants.' },
      { title: 'Renovation Prep', description: 'Selective tear-out before office remodel work begins.' },
    ],
    commonServices: [
      svc('Office Load-Outs', '/office-load-outs', 'Office furniture and contents removed during decommissioning.'),
      svc('Commercial Interior Strip-Outs', '/commercial-interior-strip-outs', 'Selective tear-out before office TI and renovation.'),
      svc('Tenant Improvement (TI) Demo', '/tenant-improvement-demolition', 'Prior build-out removal before new office construction.'),
      svc('Commercial Property Turnovers', '/commercial-property-turnovers', 'Suite transition support between tenants.'),
      svc('White Box Preparation', '/white-box-preparation', 'Clear tenant build-out for marketing or redevelopment.'),
      svc('Commercial Cleanouts', '/commercial-cleanouts', 'Full office cleanouts for businesses and property teams.'),
    ],
    relatedServices: [
      { label: 'Office Load-Outs', to: '/office-load-outs' },
      { label: 'Commercial Interior Strip-Outs', to: '/commercial-interior-strip-outs' },
      { label: 'Tenant Improvement (TI) Demo', to: '/tenant-improvement-demolition' },
      { label: 'Commercial Property Turnovers', to: '/commercial-property-turnovers' },
      { label: 'White Box Preparation', to: '/white-box-preparation' },
    ],
    faqs: faqs({
      question: 'Do you remove cubicles and filing systems?',
      answer: 'Yes. Office furniture, cubicles, files, and related contents are common office load-out scope.',
    }),
  },
  {
    canonicalPath: '/warehouse-industrial',
    pageTitle: 'Warehouse & Industrial | Industries We Serve | Reinhart Hauling & Cleanouts',
    metaDescription:
      'Warehouse and industrial property support in Middle Tennessee—warehouse cleanouts, equipment removal, racking removal, and debris hauling.',
    heroHeadline: 'Warehouse & Industrial',
    heroIntro:
      'Reinhart supports warehouse and industrial properties with bulk cleanouts, equipment and racking removal, office demo, and debris hauling—helping facilities reset for the next operational or renovation phase.',
    heroImage: HERO_IMAGE,
    heroImageAlt: 'Warehouse cleanout project in Middle Tennessee',
    overview:
      'Industrial properties often involve heavy volume, limited access, and tight transition windows. Reinhart provides organized warehouse and industrial support with crews prepared for bulk contents and debris.',
    propertyTypes: ['Distribution centers', 'Manufacturing facilities', 'Flex industrial space', 'Warehouse offices', 'Cold storage facilities', 'Industrial yards'],
    typicalProjects: [
      { title: 'Warehouse Cleanouts', description: 'Bulk contents, pallets, and abandoned materials cleared.' },
      { title: 'Equipment Removal', description: 'Industrial equipment and machinery hauled away when scheduled.' },
      { title: 'Racking Removal', description: 'Pallet racking and storage systems removed during transitions.' },
      { title: 'Office Demo', description: 'Warehouse office areas cleared during facility changes.' },
      { title: 'Debris Hauling', description: 'Construction and operational debris removed from industrial sites.' },
    ],
    commonServices: [
      svc('Warehouse Cleanouts', '/warehouse-cleanouts', 'Bulk contents, racking, and materials cleared from warehouses.'),
      svc('Construction Cleanup', '/construction-cleanup', 'Jobsite and renovation debris removed from industrial projects.'),
      svc('Commercial Interior Strip-Outs', '/commercial-interior-strip-outs', 'Office and support area tear-out within industrial facilities.'),
      svc('Contractor Project Support', '/contractor-project-support', 'Dependable labor for industrial renovation schedules.'),
      svc('Commercial Cleanouts', '/commercial-cleanouts', 'Facility-wide clearing during transitions and decommissioning.'),
    ],
    relatedServices: [
      { label: 'Warehouse Cleanouts', to: '/warehouse-cleanouts' },
      { label: 'Construction Cleanup', to: '/construction-cleanup' },
      { label: 'Commercial Interior Strip-Outs', to: '/commercial-interior-strip-outs' },
      { label: 'Contractor Project Support', to: '/contractor-project-support' },
      { label: 'Commercial Cleanouts', to: '/commercial-cleanouts' },
    ],
    faqs: faqs({
      question: 'Can you handle large-volume warehouse scopes?',
      answer: 'Yes. Volume, access, dock doors, and staging are reviewed upfront so labor and equipment match the project.',
    }),
  },
  {
    canonicalPath: '/healthcare',
    pageTitle: 'Healthcare | Industries We Serve | Reinhart Hauling & Cleanouts',
    metaDescription:
      'Healthcare facility support in Middle Tennessee—medical office renovations, clinic remodels, fixture removal, and property preparation with professional execution.',
    heroHeadline: 'Healthcare',
    heroIntro:
      'Reinhart supports medical office and clinic transitions with organized fixture removal, selective tear-out, and property preparation—helping healthcare spaces move toward renovation and the next occupancy phase.',
    heroImage: HERO_IMAGE,
    heroImageAlt: 'Medical office renovation prep in Middle Tennessee',
    overview:
      'Healthcare renovations require controlled execution, clear communication, and respect for active building environments. Reinhart provides commercial strip-out and preparation support aligned with contractor and ownership schedules.',
    propertyTypes: ['Medical office buildings', 'Outpatient clinics', 'Dental suites', 'Urgent care locations', 'Specialty practices', 'Administrative medical space'],
    typicalProjects: [
      { title: 'Medical Office Renovations', description: 'Prior build-out removed before clinical renovation work.' },
      { title: 'Clinic Remodels', description: 'Fixture and finish tear-out before updated layouts and finishes.' },
      { title: 'Fixture Removal', description: 'Casework, reception build-out, and specialty fixtures cleared.' },
      { title: 'Interior Demolition', description: 'Selective tear-out aligned with renovation scope—not structural demo.' },
      { title: 'Property Preparation', description: 'Spaces cleared for inspection, marketing, or new tenant work.' },
    ],
    commonServices: [
      svc('Commercial Interior Strip-Outs', '/commercial-interior-strip-outs', 'Selective tear-out before medical office renovation.'),
      svc('Tenant Improvement (TI) Demo', '/tenant-improvement-demolition', 'Prior tenant build-out removal in clinical suites.'),
      svc('Construction Cleanup', '/construction-cleanup', 'Renovation debris cleared during active medical office projects.'),
      svc('White Box Preparation', '/white-box-preparation', 'Suite clearing for marketing or new clinical build-out.'),
      svc('Contractor Project Support', '/contractor-project-support', 'Dependable support when renovation schedules are fixed.'),
    ],
    relatedServices: [
      { label: 'Commercial Interior Strip-Outs', to: '/commercial-interior-strip-outs' },
      { label: 'Tenant Improvement (TI) Demo', to: '/tenant-improvement-demolition' },
      { label: 'Construction Cleanup', to: '/construction-cleanup' },
      { label: 'White Box Preparation', to: '/white-box-preparation' },
      { label: 'Contractor Project Support', to: '/contractor-project-support' },
    ],
    faqs: faqs({
      question: 'Can work be coordinated in occupied medical buildings?',
      answer: 'Yes. Access, scope boundaries, and schedule coordination are confirmed upfront for occupied or partially active facilities.',
    }),
  },
  {
    canonicalPath: '/education',
    pageTitle: 'Education | Industries We Serve | Reinhart Hauling & Cleanouts',
    metaDescription:
      'Education facility support in Middle Tennessee—school and campus cleanouts, renovation prep, and property transitions for educational properties.',
    heroHeadline: 'Education',
    heroIntro:
      'Reinhart supports schools, campuses, and educational facilities with organized cleanouts, renovation prep, and debris removal—helping properties move toward renovation, reuse, or the next project phase.',
    heroImage: HERO_IMAGE,
    heroImageAlt: 'Education facility property project in Middle Tennessee',
    overview:
      'Educational properties face seasonal deadlines, renovation windows, and facility transitions that require dependable execution. Reinhart provides commercial cleanout and preparation support with clear communication and organized haul-away.',
    propertyTypes: ['K-12 schools', 'University buildings', 'Administrative facilities', 'Athletic support spaces', 'Modular classrooms', 'Campus retail and food service'],
    typicalProjects: [
      { title: 'Facility Cleanouts', description: 'Contents and debris cleared during building transitions.' },
      { title: 'Renovation Prep', description: 'Spaces opened up before summer or break-window construction.' },
      { title: 'Furniture Removal', description: 'Classroom and office furniture hauled during facility updates.' },
      { title: 'Construction Cleanup', description: 'Renovation debris removed between project phases.' },
    ],
    commonServices: [
      svc('Commercial Cleanouts', '/commercial-cleanouts', 'Facility-wide clearing during transitions and renovations.'),
      svc('Construction Cleanup', '/construction-cleanup', 'Jobsite debris removal during campus renovation work.'),
      svc('Property Management Cleanouts', '/property-management-cleanouts', 'Support for managed educational and institutional properties.'),
      svc('Commercial Property Turnovers', '/commercial-property-turnovers', 'Transition support between facility uses and tenants.'),
      svc('Contractor Project Support', '/contractor-project-support', 'Extra labor when renovation windows are limited.'),
    ],
    relatedServices: [
      { label: 'Commercial Cleanouts', to: '/commercial-cleanouts' },
      { label: 'Construction Cleanup', to: '/construction-cleanup' },
      { label: 'Property Management Cleanouts', to: '/property-management-cleanouts' },
      { label: 'Commercial Property Turnovers', to: '/commercial-property-turnovers' },
      { label: 'Contractor Project Support', to: '/contractor-project-support' },
    ],
    faqs: faqs({
      question: 'Can projects be scheduled around school breaks?',
      answer: 'Yes. We confirm access and timing upfront to align with break windows and active construction schedules.',
    }),
  },
  {
    canonicalPath: '/hospitality',
    pageTitle: 'Hospitality | Industries We Serve | Reinhart Hauling & Cleanouts',
    metaDescription:
      'Hospitality property support in Middle Tennessee—hotel turnovers, renovation prep, FF&E removal, and commercial cleanout for hospitality assets.',
    heroHeadline: 'Hospitality',
    heroIntro:
      'Reinhart supports hospitality properties through turnovers, renovations, and repositioning—with organized cleanout, fixture removal, and property preparation that respects tight operational timelines.',
    heroImage: HERO_IMAGE,
    heroImageAlt: 'Hospitality property transition project in Middle Tennessee',
    overview:
      'Hotels and hospitality assets require fast, professional execution when rooms, floors, or entire properties transition. Reinhart provides commercial support with clear scope and dependable scheduling.',
    propertyTypes: ['Hotels', 'Extended-stay properties', 'Event venues', 'Restaurant spaces', 'Resort support facilities', 'Hospitality retail'],
    typicalProjects: [
      { title: 'Property Turnovers', description: 'Contents and build-out cleared during ownership or brand transitions.' },
      { title: 'Renovation Prep', description: 'Guest room and public area tear-out before renovation work.' },
      { title: 'FF&E Removal', description: 'Furniture, fixtures, and equipment hauled during property updates.' },
      { title: 'Back-of-House Clearing', description: 'Storage, kitchen, and support areas cleared during transitions.' },
    ],
    commonServices: [
      svc('Commercial Property Turnovers', '/commercial-property-turnovers', 'Transition support for hospitality property changes.'),
      svc('Commercial Cleanouts', '/commercial-cleanouts', 'Full-property clearing during renovation or repositioning.'),
      svc('Construction Cleanup', '/construction-cleanup', 'Renovation debris removed during hospitality remodels.'),
      svc('White Box Preparation', '/white-box-preparation', 'Spaces cleared for marketing or redevelopment.'),
      svc('Lease Surrender Preparation', '/lease-surrender-preparation', 'Load-out aligned with lease-end requirements.'),
    ],
    relatedServices: [
      { label: 'Commercial Property Turnovers', to: '/commercial-property-turnovers' },
      { label: 'Commercial Cleanouts', to: '/commercial-cleanouts' },
      { label: 'Construction Cleanup', to: '/construction-cleanup' },
      { label: 'White Box Preparation', to: '/white-box-preparation' },
      { label: 'Lease Surrender Preparation', to: '/lease-surrender-preparation' },
    ],
    faqs: faqs({
      question: 'Can hospitality work happen on compressed timelines?',
      answer: 'Yes. We confirm scope, access, and schedule requirements upfront when turnover deadlines are tight.',
    }),
  },
  {
    canonicalPath: '/multifamily',
    pageTitle: 'Multifamily | Industries We Serve | Reinhart Hauling & Cleanouts',
    metaDescription:
      'Multifamily property support in Middle Tennessee—unit turnovers, move-out cleanouts, property preparation, and portfolio cleanout coordination.',
    heroHeadline: 'Multifamily',
    heroIntro:
      'Reinhart supports multifamily owners and managers with unit turnovers, move-out clearing, and property preparation—helping communities move toward re-leasing, renovation, and stable occupancy.',
    heroImage: HERO_IMAGE,
    heroImageAlt: 'Multifamily property turnover project in Middle Tennessee',
    overview:
      'Multifamily operations depend on fast unit turns and dependable vendors. Reinhart provides organized cleanout support for apartments, townhomes, and managed communities throughout Middle Tennessee.',
    propertyTypes: ['Apartment communities', 'Townhome portfolios', 'Student housing', 'Senior living transitions', 'Mixed-income properties', 'Garden-style communities'],
    typicalProjects: [
      { title: 'Unit Turnovers', description: 'Left-behind contents cleared so make-ready work can begin.' },
      { title: 'Move-Out Cleanouts', description: 'Furniture and debris removed after tenant departure.' },
      { title: 'Eviction Clearing', description: 'Fast unit clearing when possession is regained.' },
      { title: 'Common Area Cleanouts', description: 'Clubhouse, storage, and amenity space clearing.' },
      { title: 'Renovation Prep', description: 'Unit or building clearing before interior renovation work.' },
    ],
    commonServices: [
      svc('Property Management Cleanouts', '/property-management-cleanouts', 'Recurring cleanout support across managed units.'),
      svc('Commercial Property Turnovers', '/commercial-property-turnovers', 'Transition support for multifamily property phases.'),
      svc('Move-Out Cleanouts', '/move-out-cleanouts', 'Unit clearing after tenant move-out.'),
      svc('Eviction Cleanouts', '/eviction-cleanouts', 'Fast clearing when units must return to turnover workflow.'),
      svc('Property Preparation', '/property-preparation', 'Organized clearing before sale, renovation, or occupancy.'),
    ],
    relatedServices: [
      { label: 'Property Management Cleanouts', to: '/property-management-cleanouts' },
      { label: 'Commercial Property Turnovers', to: '/commercial-property-turnovers' },
      { label: 'Move-Out Cleanouts', to: '/move-out-cleanouts' },
      { label: 'Eviction Cleanouts', to: '/eviction-cleanouts' },
      { label: 'Property Preparation', to: '/property-preparation' },
    ],
    faqs: faqs({
      question: 'Can you support portfolio-wide turnover schedules?',
      answer: 'Yes. Multi-unit work can be coordinated when scope, access, and timing are defined across the portfolio.',
    }),
  },
  {
    canonicalPath: '/religious-facilities',
    pageTitle: 'Religious Facilities | Industries We Serve | Reinhart Hauling & Cleanouts',
    metaDescription:
      'Religious facility support in Middle Tennessee—church cleanouts, renovation prep, property transitions, and respectful commercial property preparation.',
    heroHeadline: 'Religious Facilities',
    heroIntro:
      'Reinhart supports churches and religious facilities with respectful, organized cleanout and property preparation—helping campuses move toward renovation, consolidation, or the next chapter of use.',
    heroImage: HERO_IMAGE,
    heroImageAlt: 'Religious facility property project in Middle Tennessee',
    overview:
      'Religious facilities often face transitions involving accumulated contents, building changes, and renovation timelines. Reinhart provides professional execution with clear communication and organized haul-away.',
    propertyTypes: ['Church campuses', 'Worship centers', 'Parish halls', 'Religious schools', 'Fellowship buildings', 'Administrative facilities'],
    typicalProjects: [
      { title: 'Facility Cleanouts', description: 'Contents and debris cleared during building transitions.' },
      { title: 'Renovation Prep', description: 'Spaces opened up before construction and remodel work.' },
      { title: 'Building Consolidation', description: 'Clearing facilities during campus or ministry changes.' },
      { title: 'Construction Cleanup', description: 'Renovation debris removed during improvement projects.' },
    ],
    commonServices: [
      svc('Commercial Cleanouts', '/commercial-cleanouts', 'Facility-wide clearing during transitions.'),
      svc('Construction Cleanup', '/construction-cleanup', 'Renovation debris haul-away during improvement projects.'),
      svc('Property Preparation', '/property-preparation', 'Organized clearing before sale, renovation, or reuse.'),
      svc('Commercial Property Turnovers', '/commercial-property-turnovers', 'Transition support between facility uses.'),
      svc('Contractor Project Support', '/contractor-project-support', 'Dependable support during active renovation schedules.'),
    ],
    relatedServices: [
      { label: 'Commercial Cleanouts', to: '/commercial-cleanouts' },
      { label: 'Construction Cleanup', to: '/construction-cleanup' },
      { label: 'Property Preparation', to: '/property-preparation' },
      { label: 'Commercial Property Turnovers', to: '/commercial-property-turnovers' },
    ],
    faqs: faqs({
      question: 'Do you handle large campus cleanout scopes?',
      answer: 'Yes. Multi-building scopes are reviewed upfront for volume, access, labor, and disposal planning.',
    }),
  },
  {
    canonicalPath: '/financial-institutions',
    pageTitle: 'Financial Institutions | Industries We Serve | Reinhart Hauling & Cleanouts',
    metaDescription:
      'Financial institution property support in Middle Tennessee—branch decommissioning, office transitions, white box preparation, and commercial cleanouts.',
    heroHeadline: 'Financial Institutions',
    heroIntro:
      'Reinhart supports banks and financial institutions through branch closures, office transitions, and renovation prep—with organized load-out, strip-out, and white box preparation.',
    heroImage: HERO_IMAGE,
    heroImageAlt: 'Financial institution office transition in Middle Tennessee',
    overview:
      'Financial branch and office transitions require professional execution, schedule discipline, and clear communication. Reinhart helps institutions prepare properties for surrender, marketing, or redevelopment.',
    propertyTypes: ['Bank branches', 'Financial offices', 'Drive-through locations', 'Corporate banking space', 'Loan production offices', 'Administrative facilities'],
    typicalProjects: [
      { title: 'Branch Decommissioning', description: 'Fixtures, furniture, and contents removed during branch closure.' },
      { title: 'Office Transitions', description: 'Suite clearing during relocation or consolidation.' },
      { title: 'White Box Preparation', description: 'Tenant build-out removed for marketing or re-leasing.' },
      { title: 'Renovation Prep', description: 'Selective tear-out before branch or office remodel work.' },
    ],
    commonServices: [
      svc('Office Load-Outs', '/office-load-outs', 'Office furniture and contents removed during decommissioning.'),
      svc('White Box Preparation', '/white-box-preparation', 'Clear tenant build-out for marketing or redevelopment.'),
      svc('Commercial Interior Strip-Outs', '/commercial-interior-strip-outs', 'Selective tear-out before branch renovation.'),
      svc('Lease Surrender Preparation', '/lease-surrender-preparation', 'Load-out aligned with lease-end requirements.'),
      svc('Commercial Property Turnovers', '/commercial-property-turnovers', 'Transition support between occupancy phases.'),
    ],
    relatedServices: [
      { label: 'Office Load-Outs', to: '/office-load-outs' },
      { label: 'White Box Preparation', to: '/white-box-preparation' },
      { label: 'Commercial Interior Strip-Outs', to: '/commercial-interior-strip-outs' },
      { label: 'Lease Surrender Preparation', to: '/lease-surrender-preparation' },
      { label: 'Commercial Property Turnovers', to: '/commercial-property-turnovers' },
    ],
    faqs: faqs({
      question: 'Can branch closures be completed on fixed deadlines?',
      answer: 'Yes. We confirm scope, access, and surrender timing upfront when branch closure schedules are fixed.',
    }),
  },
  {
    canonicalPath: '/restoration-contractors',
    pageTitle: 'Restoration Contractors | Industries We Serve | Reinhart Hauling & Cleanouts',
    metaDescription:
      'Restoration contractor support in Middle Tennessee—project support, debris removal, property preparation, and commercial cleanout during recovery projects.',
    heroHeadline: 'Restoration Contractors',
    heroIntro:
      'Reinhart partners with restoration contractors who need dependable debris removal, cleanout support, and haul-away—helping recovery projects move forward with professional execution.',
    heroImage: HERO_IMAGE,
    heroImageAlt: 'Restoration project support in Middle Tennessee',
    overview:
      'Restoration work often runs on urgent timelines with changing scope. Reinhart provides organized removal and cleanup support so contractors can focus on restoration execution.',
    propertyTypes: ['Commercial loss sites', 'Residential recovery projects', 'Multi-unit damage events', 'Institutional facilities', 'Retail recovery', 'Office damage restoration'],
    typicalProjects: [
      { title: 'Debris Removal', description: 'Damaged materials and contents hauled during active recovery.' },
      { title: 'Contents Clearing', description: 'Organized removal supporting pack-out and mitigation workflows.' },
      { title: 'Construction Cleanup', description: 'Rebuild-phase debris cleared between trades.' },
      { title: 'Property Preparation', description: 'Spaces opened up before repair and rebuild work continues.' },
    ],
    commonServices: [
      svc('Contractor Project Support', '/contractor-project-support', 'Dependable labor and haul-away during recovery schedules.'),
      svc('Construction Cleanup', '/construction-cleanup', 'Debris removal during rebuild and restoration phases.'),
      svc('Commercial Cleanouts', '/commercial-cleanouts', 'Contents and debris clearing on commercial loss sites.'),
      svc('Selective Demolition', '/selective-demolition', 'Controlled tear-out of damaged finishes and materials.'),
      svc('Property Preparation', '/property-preparation', 'Organized clearing before rebuild and occupancy.'),
    ],
    relatedServices: [
      { label: 'Contractor Project Support', to: '/contractor-project-support' },
      { label: 'Construction Cleanup', to: '/construction-cleanup' },
      { label: 'Commercial Cleanouts', to: '/commercial-cleanouts' },
      { label: 'Selective Demolition', to: '/selective-demolition' },
      { label: 'Property Preparation', to: '/property-preparation' },
    ],
    faqs: faqs({
      question: 'Can restoration support be mobilized quickly?',
      answer: 'Yes. We prioritize clear scope review and scheduling when recovery timelines require fast mobilization.',
    }),
  },
];

export function getIndustryByPath(path: string) {
  return INDUSTRY_PAGES.find((page) => page.canonicalPath === path);
}
