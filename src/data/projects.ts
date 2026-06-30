export const PROJECT_FILTERS = [
  'All',
  'Estate Cleanouts',
  'Investor Projects',
  'Commercial',
  'Demolition',
  'Property Cleanup',
  'Rental Turnovers',
  'Large Item Pickups',
] as const;

export type ProjectFilter = (typeof PROJECT_FILTERS)[number];
export type ProjectCategory = Exclude<ProjectFilter, 'All'>;

export type Project = {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  city: string;
  serviceArea: string;
  summary: string;
  overview: string;
  problem: string;
  solution: string;
  scope: string[];
  outcome: string;
  featuredImage: string;
  beforeImages: string[];
  duringImages: string[];
  afterImages: string[];
  tags: string[];
  seoTitle: string;
  seoDescription: string;
};

export const projects: Project[] = [
  {
    id: 'project-2026-04-hoarder-property-cleanup-joelton',
    slug: 'hoarder-property-cleanup',
    title: 'Hoarder Property Cleanup',
    category: 'Property Cleanup',
    city: 'Joelton',
    serviceArea: 'Joelton, TN',
    summary:
      'Three-day whole-property cleanup involving heavy debris removal, sorting, scrap recycling, and responsible disposal.',
    overview:
      'This Joelton project involved a whole-property cleanup where accumulated belongings, debris, appliances, and miscellaneous materials needed to be sorted, loaded, hauled, recycled when appropriate, and removed responsibly.',
    problem:
      'Years of accumulated items and debris had made portions of the property difficult to access and slowed the next phase for the owner.',
    solution:
      'Reinhart completed a multi-day cleanup with property assessment, sorting, heavy debris removal, multiple trailer loads, scrap recycling, responsible disposal, and final cleanup.',
    scope: [
      'Property assessment',
      'Sorting and separation',
      'Heavy debris removal',
      'Multiple trailer loads',
      'Scrap metal recycling',
      'Responsible disposal',
      'Final cleanup',
    ],
    outcome:
      'The property was cleared, access improved, recyclable scrap was separated, and the site was ready for its next phase.',
    featuredImage:
      '/images/projects/2026%20Projects/2026-04_Hoarder-Property-Cleanout_Joelton/04_Hero/hero-driveway-before-01.jpeg',
    beforeImages: [
      '/images/projects/2026%20Projects/2026-04_Hoarder-Property-Cleanout_Joelton/01_Before/front-yard-before-01.jpeg',
      '/images/projects/2026%20Projects/2026-04_Hoarder-Property-Cleanout_Joelton/01_Before/driveway-before-01.jpeg',
      '/images/projects/2026%20Projects/2026-04_Hoarder-Property-Cleanout_Joelton/01_Before/garage-before-01.jpeg',
    ],
    duringImages: [
      '/images/projects/2026%20Projects/2026-04_Hoarder-Property-Cleanout_Joelton/02_During/driveway-during-01.jpeg',
      '/images/projects/2026%20Projects/2026-04_Hoarder-Property-Cleanout_Joelton/02_During/front-yard-scrap-staged-01.jpeg',
      '/images/projects/2026%20Projects/2026-04_Hoarder-Property-Cleanout_Joelton/02_During/scrap-trailer-loaded-01.png',
    ],
    afterImages: [
      '/images/projects/2026%20Projects/2026-04_Hoarder-Property-Cleanout_Joelton/03_After/driveway-after-01.jpeg',
      '/images/projects/2026%20Projects/2026-04_Hoarder-Property-Cleanout_Joelton/03_After/front-yard-after-04.jpeg',
      '/images/projects/2026%20Projects/2026-04_Hoarder-Property-Cleanout_Joelton/03_After/garage-after-01.jpeg',
    ],
    tags: ['Hoarder Cleanup', 'Property Cleanup', 'Heavy Debris Removal'],
    seoTitle: 'Hoarder Property Cleanup in Joelton, TN | Reinhart Hauling & Cleanouts',
    seoDescription:
      'Real Joelton, TN hoarder property cleanup project by Reinhart Hauling & Cleanouts with heavy debris removal, sorting, scrap recycling, and responsible disposal.',
  },
  {
    id: 'featured-estate-cleanout',
    slug: 'estate-cleanout',
    title: 'Estate Cleanout',
    category: 'Estate Cleanouts',
    city: 'Hendersonville',
    serviceArea: 'Hendersonville, TN',
    summary: 'Estate sale removal and property cleanup support for a family transition in Hendersonville.',
    overview:
      'This estate cleanout helped remove remaining items and restore order so the property could continue moving through the transition process.',
    problem:
      'The property had leftover estate contents and items that needed to be removed before the next step could move forward.',
    solution:
      'Reinhart removed unwanted items, loaded and hauled materials, and left the space cleaner and easier to prepare for what came next.',
    scope: ['Estate cleanout', 'Item removal', 'Loading and hauling', 'Property cleanup'],
    outcome: 'The property was cleared of remaining items and better prepared for its next phase.',
    featuredImage: '/images/projects/estate-cleanouts/estate-cleanout-hendersonville-before.jpeg',
    beforeImages: ['/images/projects/estate-cleanouts/estate-cleanout-hendersonville-before.jpeg'],
    duringImages: [],
    afterImages: ['/images/projects/estate-cleanouts/estate-cleanout-hendersonville-after.jpeg'],
    tags: ['Estate Cleanout', 'Hendersonville', 'Property Cleanup'],
    seoTitle: 'Estate Cleanout in Hendersonville, TN | Reinhart Hauling & Cleanouts',
    seoDescription:
      'Estate cleanout and property cleanup project completed in Hendersonville, TN by Reinhart Hauling & Cleanouts.',
  },
  {
    id: 'featured-garage-cleanout',
    slug: 'garage-cleanout',
    title: 'Garage Cleanout',
    category: 'Property Cleanup',
    city: 'Nashville',
    serviceArea: 'Nashville, TN',
    summary: 'Garage cleanout support during an estate transition with loading, hauling, and responsible disposal.',
    overview:
      'This garage cleanout removed unwanted contents and opened up space so the property could continue moving forward.',
    problem:
      'The garage had accumulated items that were slowing cleanup and limiting access to usable space.',
    solution:
      'Reinhart loaded, hauled, and disposed of unwanted garage contents while keeping the work area organized.',
    scope: ['Garage cleanout', 'Heavy item loading', 'Hauling', 'Responsible disposal', 'Property preparation'],
    outcome: 'The garage was cleared and the property was better prepared for the next step.',
    featuredImage: '/images/projects/garage-cleanouts/garage-cleanout-nashville-before.jpg',
    beforeImages: ['/images/projects/garage-cleanouts/garage-cleanout-nashville-before.jpg'],
    duringImages: [],
    afterImages: ['/images/projects/garage-cleanouts/garage-cleanout-nashville-after.jpg'],
    tags: ['Garage Cleanout', 'Nashville', 'Estate Transition'],
    seoTitle: 'Garage Cleanout in Nashville, TN | Reinhart Hauling & Cleanouts',
    seoDescription:
      'Garage cleanout and hauling project completed in Nashville, TN by Reinhart Hauling & Cleanouts.',
  },
  {
    id: 'featured-commercial-office-cleanout',
    slug: 'commercial-cleanout-downtown-nashville',
    title: 'Commercial Cleanout',
    category: 'Commercial',
    city: 'Downtown Nashville',
    serviceArea: 'Downtown Nashville, TN',
    summary: 'Commercial office cleanout involving cubicles, office furniture, filing cabinets, and load-out support.',
    overview:
      'This commercial office cleanout helped clear unwanted furniture and office contents so the business space could be reset.',
    problem:
      'The office had cubicles, furniture, filing cabinets, and leftover contents that needed to be removed before the space could be reused.',
    solution:
      'Reinhart removed office furniture and commercial contents, handled loading and hauling, and helped prepare the space for its next use.',
    scope: ['Office cleanout', 'Cubicle removal', 'Office furniture removal', 'Filing cabinet removal', 'Commercial load-out'],
    outcome: 'The office contents were removed and the space was better prepared for turnover or renovation.',
    featuredImage:
      '/images/projects/2026%20Projects/2026-06_Commercial-Office-Cleanout_Nashville/01_Before/cubicle-office-before-01.jpeg',
    beforeImages: [
      '/images/projects/2026%20Projects/2026-06_Commercial-Office-Cleanout_Nashville/01_Before/cubicle-office-before-01.jpeg',
      '/images/projects/2026%20Projects/2026-06_Commercial-Office-Cleanout_Nashville/01_Before/file-cabinets-office-before-01.png',
    ],
    duringImages: [],
    afterImages: [
      '/images/projects/2026%20Projects/2026-06_Commercial-Office-Cleanout_Nashville/01_Before/open-office-before-01.jpeg',
    ],
    tags: ['Commercial Cleanout', 'Office Furniture', 'Downtown Nashville'],
    seoTitle: 'Commercial Cleanout in Downtown Nashville | Reinhart Hauling & Cleanouts',
    seoDescription:
      'Commercial office cleanout project in Downtown Nashville with office furniture, cubicles, and filing cabinet removal.',
  },
  {
    id: 'project-1',
    slug: 'interior-demo-portland',
    title: 'Interior Demo',
    category: 'Demolition',
    city: 'Portland',
    serviceArea: 'Portland, TN',
    summary: 'Selective interior demolition to open up rooms for inspection, repairs, and renovation planning.',
    overview:
      'This project involved removing selected interior materials so the property owner could better evaluate the condition of the space and prepare for renovation work.',
    problem:
      'The property had interior materials blocking visibility into the framing, flooring, and repair needs.',
    solution:
      'Reinhart removed selected interior materials, loaded debris, kept the work area organized, and helped move the property into the next phase of evaluation.',
    scope: [
      'Interior demo',
      'Debris removal',
      'Loading and hauling',
      'Work area cleanup',
      'Property preparation',
    ],
    outcome:
      "The owner had a clearer view of the property's condition and could move forward with repair and renovation decisions.",
    featuredImage:
      '/images/projects/2026%20Projects/2026-06_Interior-Demo-Portland/04_Hero/hero-kitchen-before-02.jpeg',
    beforeImages: [
      '/images/projects/2026%20Projects/2026-06_Interior-Demo-Portland/01_Before/kitchen-before-02.jpeg',
      '/images/projects/2026%20Projects/2026-06_Interior-Demo-Portland/01_Before/master-bedroom-before-01.jpeg',
    ],
    duringImages: [
      '/images/projects/2026%20Projects/2026-06_Interior-Demo-Portland/02_During/kitchen-during-01.jpeg',
      '/images/projects/2026%20Projects/2026-06_Interior-Demo-Portland/02_During/master-bedroom-during-01.jpeg',
    ],
    afterImages: [
      '/images/projects/2026%20Projects/2026-06_Interior-Demo-Portland/03_After/kitchen-after-01.jpeg',
      '/images/projects/2026%20Projects/2026-06_Interior-Demo-Portland/03_After/master-bedroom-after-01.jpeg',
    ],
    tags: ['Interior Demo', 'Property Preparation', 'Renovation Prep'],
    seoTitle: 'Interior Demo in Portland, TN | Reinhart Hauling & Cleanouts',
    seoDescription:
      'Selective interior demolition and cleanup project in Portland, TN by Reinhart Hauling & Cleanouts.',
  },
  {
    id: 'project-2',
    slug: 'project-refresh',
    title: 'Property Refresh & Cleanup',
    category: 'Property Cleanup',
    city: 'Middle Tennessee',
    serviceArea: 'Middle Tennessee',
    summary:
      'A property cleanup project focused on removing debris, restoring order, and helping the space feel ready for its next use.',
    overview:
      'This project helped reset the property by removing unwanted items, cleaning up problem areas, and creating a more orderly space.',
    problem:
      'The property needed cleanup and organization before it could be used, shown, repaired, or prepared for its next step.',
    solution:
      'Reinhart removed unwanted materials, organized the work area, hauled debris, and left the property cleaner and more usable.',
    scope: [
      'Property cleanup',
      'Debris removal',
      'Heavy item removal',
      'Loading and hauling',
      'Final cleanup',
    ],
    outcome: 'The property felt more orderly, usable, and ready for the next phase.',
    featuredImage: '/images/projects/project-refresh/featured.jpg',
    beforeImages: [
      '/images/projects/project-refresh/before-1.jpg',
      '/images/projects/project-refresh/before-2.jpg',
    ],
    duringImages: ['/images/projects/project-refresh/during-1.jpg'],
    afterImages: [
      '/images/projects/project-refresh/after-1.jpg',
      '/images/projects/project-refresh/after-2.jpg',
    ],
    tags: ['Property Cleanup', 'Cleanout', 'Project Refresh'],
    seoTitle: 'Property Cleanup Project in Middle Tennessee | Reinhart Hauling & Cleanouts',
    seoDescription:
      'Property cleanup and project refresh completed by Reinhart Hauling & Cleanouts in Middle Tennessee.',
  },
  {
    id: 'project-3',
    slug: 'fence-demo',
    title: 'Fence Demo & Cleanup',
    category: 'Demolition',
    city: 'Gallatin',
    serviceArea: 'Gallatin, TN',
    summary: 'Fence removal and cleanup to clear the property and prepare the area for the next step.',
    overview: 'This project included removing unwanted fencing and clearing related debris from the property.',
    problem: 'Old fencing and debris were creating an obstacle on the property and needed to be removed.',
    solution:
      'Reinhart removed the fencing, loaded the debris, hauled it off, and cleaned the area so the property could move forward.',
    scope: ['Fence removal', 'Light demolition', 'Debris loading', 'Hauling', 'Site cleanup'],
    outcome: 'The fence and related debris were removed, leaving the area cleaner and easier to access.',
    featuredImage: '/images/projects/fence-demo/featured.jpg',
    beforeImages: [
      '/images/projects/fence-demo/before-1.jpg',
      '/images/projects/fence-demo/before-2.jpg',
    ],
    duringImages: ['/images/projects/fence-demo/during-1.jpg'],
    afterImages: [
      '/images/projects/fence-demo/after-1.jpg',
      '/images/projects/fence-demo/after-2.jpg',
    ],
    tags: ['Fence Demo', 'Demolition', 'Property Cleanup'],
    seoTitle: 'Fence Demo & Cleanup in Gallatin, TN | Reinhart Hauling & Cleanouts',
    seoDescription: 'Fence removal, hauling, and property cleanup project completed in Gallatin, TN.',
  },
  {
    id: 'project-4',
    slug: 'dumpster-cleanup',
    title: 'Dumpster Overflow Cleanup',
    category: 'Property Cleanup',
    city: 'Gallatin',
    serviceArea: 'Gallatin, TN',
    summary:
      'Cleaning up overflow debris around a dumpster so the project could stay organized and continue moving.',
    overview:
      'This cleanup helped restore order around a full dumpster and remove debris that was blocking the work area.',
    problem: 'The dumpster area had become messy, overloaded, and difficult to work around.',
    solution:
      'Reinhart sorted, loaded, hauled, and cleaned up the surrounding debris so the property owner could continue the project with less friction.',
    scope: [
      'Dumpster area cleanup',
      'Overflow debris removal',
      'Heavy item removal',
      'Loading and hauling',
      'Work area reset',
    ],
    outcome: 'The site was cleaner, safer, and better prepared for the next phase of work.',
    featuredImage: '/images/projects/dumpster-cleanup/featured.jpg',
    beforeImages: [
      '/images/projects/dumpster-cleanup/before-1.jpg',
      '/images/projects/dumpster-cleanup/before-2.jpg',
    ],
    duringImages: ['/images/projects/dumpster-cleanup/during-1.jpg'],
    afterImages: [
      '/images/projects/dumpster-cleanup/after-1.jpg',
      '/images/projects/dumpster-cleanup/after-2.jpg',
    ],
    tags: ['Dumpster Cleanup', 'Property Cleanup', 'Investor Project'],
    seoTitle: 'Dumpster Overflow Cleanup in Gallatin, TN | Reinhart Hauling & Cleanouts',
    seoDescription: 'Dumpster overflow cleanup and property debris removal completed in Gallatin, TN.',
  },
  {
    id: 'project-5',
    slug: 'large-item-pickups',
    title: 'Large Item Pickup Projects',
    category: 'Large Item Pickups',
    city: 'Middle Tennessee',
    serviceArea: 'Middle Tennessee',
    summary: 'Removing bulky items, appliances, furniture, and heavy materials that property owners needed gone.',
    overview:
      'These projects involved removing large unwanted items from homes, rentals, garages, and properties throughout the area.',
    problem: 'Large items were too heavy, awkward, or inconvenient for the property owner to remove alone.',
    solution:
      'Reinhart loaded, hauled, and disposed of the items so the customer did not have to handle the heavy lifting.',
    scope: [
      'Large item pickup',
      'Appliance removal',
      'Furniture removal',
      'Heavy item loading',
      'Hauling and disposal',
    ],
    outcome: 'The items were removed quickly and the space was cleared for the customer.',
    featuredImage: '/images/projects/large-item-pickups/featured.jpg',
    beforeImages: [
      '/images/projects/large-item-pickups/before-1.jpg',
      '/images/projects/large-item-pickups/before-2.jpg',
    ],
    duringImages: ['/images/projects/large-item-pickups/during-1.jpg'],
    afterImages: [
      '/images/projects/large-item-pickups/after-1.jpg',
      '/images/projects/large-item-pickups/after-2.jpg',
    ],
    tags: ['Large Item Pickup', 'Appliance Removal', 'Furniture Removal'],
    seoTitle: 'Large Item Pickup Projects in Middle Tennessee | Reinhart Hauling & Cleanouts',
    seoDescription:
      'Large item pickup, furniture removal, and appliance hauling completed by Reinhart Hauling & Cleanouts.',
  },
  {
    id: 'project-6',
    slug: 'investor-property-cleanup-gallatin',
    title: 'Investor Property Cleanup',
    category: 'Investor Projects',
    city: 'Gallatin',
    serviceArea: 'Gallatin, TN',
    summary:
      'Helping a real estate investor remove obstacles, clear debris, and move the property toward repair and resale.',
    overview:
      'This project supported an investor-owned property that needed multiple cleanup and removal tasks completed before the next phase of work.',
    problem:
      'The property had several cleanup obstacles, including debris, unwanted materials, old fencing, bulky items, and areas that needed to be cleared.',
    solution:
      'Reinhart completed multiple removal and cleanup tasks, helped restore order to the site, and gave the investor a cleaner property to continue working from.',
    scope: [
      'Investor property cleanup',
      'Fence demo',
      'Bulky item removal',
      'Debris hauling',
      'Site cleanup',
      'Property preparation',
    ],
    outcome:
      'The investor had a cleaner, more manageable property and could continue moving the project forward.',
    featuredImage:
      '/images/projects/2026%20Projects/2026-06_Investor-Property-Cleanup_Gallatin/04_Hero/hero-general-property-before-02.jpeg',
    beforeImages: [
      '/images/projects/2026%20Projects/2026-06_Investor-Property-Cleanup_Gallatin/01_Before/general-property-before-01.jpeg',
      '/images/projects/2026%20Projects/2026-06_Investor-Property-Cleanup_Gallatin/01_Before/dumpster-access-blocked-01.jpeg',
    ],
    duringImages: [
      '/images/projects/2026%20Projects/2026-06_Investor-Property-Cleanup_Gallatin/02_During/trailer-full-load-during-01.jpeg',
      '/images/projects/2026%20Projects/2026-06_Investor-Property-Cleanup_Gallatin/02_During/transfer-station-unloading-01.jpeg',
    ],
    afterImages: [
      '/images/projects/2026%20Projects/2026-06_Investor-Property-Cleanup_Gallatin/03_After/general-property-after-01.jpeg',
      '/images/projects/2026%20Projects/2026-06_Investor-Property-Cleanup_Gallatin/03_After/dumpster-access-cleared-01.jpeg',
    ],
    tags: ['Investor Project', 'Property Cleanup', 'Debris Removal'],
    seoTitle: 'Investor Property Cleanup in Gallatin, TN | Reinhart Hauling & Cleanouts',
    seoDescription:
      'Investor property cleanup, debris removal, fence demo, and hauling project completed in Gallatin, TN.',
  },
];

export const getProjectBySlug = (slug: string | undefined) =>
  projects.find((project) => project.slug === slug);
