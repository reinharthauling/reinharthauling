export type ServiceNavLink = {
  label: string;
  to: string;
};

export type ServiceNavColumn = {
  id: string;
  title: string;
  hubLink: string;
  viewAllLabel: string;
  /** Top-priority services shown in the mega menu (8–10 per division). Full lists live on hub pages. */
  services: ServiceNavLink[];
};

export const SERVICES_NAV_COLUMNS: ServiceNavColumn[] = [
  {
    id: 'residential',
    title: 'Residential & Property Services',
    hubLink: '/residential-property-services',
    viewAllLabel: 'View All Residential & Property Services',
    services: [
      { label: 'Property Cleanup', to: '/property-cleanup' },
      { label: 'Junk Removal', to: '/junk-removal' },
      { label: 'Estate Cleanouts', to: '/estate-cleanouts' },
      { label: 'Hoarder Cleanouts', to: '/hoarder-cleanouts' },
      { label: 'Garage Cleanouts', to: '/garage-cleanouts' },
      { label: 'Eviction Cleanouts', to: '/eviction-cleanouts' },
      { label: 'Foreclosure Cleanouts', to: '/foreclosure-cleanouts' },
      { label: 'Storage Unit Cleanouts', to: '/storage-unit-cleanouts' },
      { label: 'Hot Tub Removal', to: '/junk-removal' },
    ],
  },
  {
    id: 'commercial',
    title: 'Commercial Services',
    hubLink: '/commercial-services',
    viewAllLabel: 'View All Commercial Services',
    services: [
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
