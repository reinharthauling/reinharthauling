import { RESIDENTIAL_NAV_CATEGORIES, RESIDENTIAL_HUB_LINK } from './residentialNavigation.ts';

export type ServiceNavLink = {
  label: string;
  to: string;
};

export type ServiceNavCategory = {
  title: string;
  services: ServiceNavLink[];
};

export type ServiceNavColumn = {
  id: string;
  title: string;
  hubLink: string;
  viewAllLabel: string;
  /** Flat list for divisions without subcategories. */
  services?: ServiceNavLink[];
  /** Grouped lists for residential Property Services and Removal Services. */
  categories?: ServiceNavCategory[];
};

export const SERVICES_NAV_COLUMNS: ServiceNavColumn[] = [
  {
    id: 'residential',
    title: 'Residential Services',
    hubLink: RESIDENTIAL_HUB_LINK,
    viewAllLabel: 'View All Residential Services',
    categories: RESIDENTIAL_NAV_CATEGORIES.map(({ title, services }) => ({ title, services })),
  },
  {
    id: 'commercial',
    title: 'Commercial Services',
    hubLink: '/commercial-services',
    viewAllLabel: 'View All Commercial Services',
    services: [
      { label: 'Contractor Project Support', to: '/contractor-project-support' },
      { label: 'Commercial Property Turnovers', to: '/commercial-property-turnovers' },
      { label: 'Retail Decommissioning', to: '/retail-decommissioning' },
      { label: 'Commercial Interior Strip-Outs', to: '/commercial-interior-strip-outs' },
      { label: 'Lease Surrender Preparation', to: '/lease-surrender-preparation' },
      { label: 'White Box Preparation', to: '/white-box-preparation' },
      { label: 'Office Load-Outs', to: '/office-load-outs' },
      { label: 'Retail Store Cleanouts', to: '/retail-store-cleanouts' },
      { label: 'Warehouse Cleanouts', to: '/warehouse-cleanouts' },
      { label: 'Property Management Cleanouts', to: '/property-management-cleanouts' },
      { label: 'Commercial Cleanouts', to: '/commercial-cleanouts' },
      { label: 'Construction Cleanup', to: '/construction-cleanup' },
    ],
  },
  {
    id: 'demolition',
    title: 'Demolition Services',
    hubLink: '/demolition-services',
    viewAllLabel: 'View All Demolition Services',
    services: [
      { label: 'Interior Demolition', to: '/interior-demolition' },
      { label: 'Tenant Improvement (TI) Demolition', to: '/tenant-improvement-demolition' },
      { label: 'Selective Demolition', to: '/selective-demolition' },
      { label: 'Kitchen Demolition', to: '/kitchen-demolition' },
      { label: 'Bathroom Demolition', to: '/bathroom-demolition' },
      { label: 'Commercial Interior Strip-Outs', to: '/commercial-interior-strip-outs' },
      { label: 'Flooring Removal', to: '/flooring-removal' },
      { label: 'Cabinet Removal', to: '/cabinet-removal' },
      { label: 'Ceiling Grid & Ceiling Tile Removal', to: '/ceiling-grid-removal' },
      { label: 'Drywall Removal', to: '/drywall-removal' },
      { label: 'Fence Removal', to: '/fence-removal' },
      { label: 'Deck Removal', to: '/deck-removal' },
      { label: 'Shed Demolition', to: '/shed-demolition' },
    ],
  },
];
