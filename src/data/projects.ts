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
    id: 'project-1',
    slug: 'interior-demo',
    title: 'Interior Demo Project',
    category: 'Demolition',
    city: 'Gallatin',
    serviceArea: 'Gallatin, TN',
    summary: 'Selective interior demolition to open up the property for inspection, repairs, and renovation planning.',
    overview:
      'This project involved removing interior materials so the property owner could better evaluate the condition of the structure and decide the best next step.',
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
    featuredImage: '/images/projects/interior-demo/featured.jpg',
    beforeImages: [
      '/images/projects/interior-demo/before-1.jpg',
      '/images/projects/interior-demo/before-2.jpg',
    ],
    duringImages: [
      '/images/projects/interior-demo/during-1.jpg',
      '/images/projects/interior-demo/during-2.jpg',
    ],
    afterImages: [
      '/images/projects/interior-demo/after-1.jpg',
      '/images/projects/interior-demo/after-2.jpg',
    ],
    tags: ['Interior Demo', 'Property Preparation', 'Investor Project'],
    seoTitle: 'Interior Demo Project in Gallatin, TN | Reinhart Hauling & Cleanouts',
    seoDescription:
      'Selective interior demolition and cleanup project in Gallatin, TN by Reinhart Hauling & Cleanouts.',
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
    slug: 'investor-property-cleanup',
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
    featuredImage: '/images/projects/investor-property-cleanup/featured.jpg',
    beforeImages: [
      '/images/projects/investor-property-cleanup/before-1.jpg',
      '/images/projects/investor-property-cleanup/before-2.jpg',
    ],
    duringImages: [
      '/images/projects/investor-property-cleanup/during-1.jpg',
      '/images/projects/investor-property-cleanup/during-2.jpg',
    ],
    afterImages: [
      '/images/projects/investor-property-cleanup/after-1.jpg',
      '/images/projects/investor-property-cleanup/after-2.jpg',
    ],
    tags: ['Investor Project', 'Property Cleanup', 'Debris Removal'],
    seoTitle: 'Investor Property Cleanup in Gallatin, TN | Reinhart Hauling & Cleanouts',
    seoDescription:
      'Investor property cleanup, debris removal, fence demo, and hauling project completed in Gallatin, TN.',
  },
];

export const getProjectBySlug = (slug: string | undefined) =>
  projects.find((project) => project.slug === slug);
