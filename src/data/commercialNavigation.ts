export type CommercialNavLink = {
  label: string;
  to: string;
};

/** Commercial mega menu order — mirrors the commercial project lifecycle. */
export const COMMERCIAL_NAV_LINKS: CommercialNavLink[] = [
  { label: 'Contractor Project Support', to: '/contractor-project-support' },
  { label: 'Commercial Property Turnovers', to: '/commercial-property-turnovers' },
  { label: 'Commercial Interior Strip-Outs', to: '/commercial-interior-strip-outs' },
  { label: 'Tenant Improvement (TI) Demo', to: '/tenant-improvement-demolition' },
  { label: 'Retail Decommissioning', to: '/retail-decommissioning' },
  { label: 'White Box Preparation', to: '/white-box-preparation' },
  { label: 'Lease Surrender Preparation', to: '/lease-surrender-preparation' },
  { label: 'Office Load-Outs', to: '/office-load-outs' },
  { label: 'Retail Store Cleanouts', to: '/retail-store-cleanouts' },
  { label: 'Property Management Cleanouts', to: '/property-management-cleanouts' },
  { label: 'Warehouse Cleanouts', to: '/warehouse-cleanouts' },
  { label: 'Construction Cleanup', to: '/construction-cleanup' },
  { label: 'Commercial Cleanouts', to: '/commercial-cleanouts' },
];

/** Backbone internal links shown on every commercial service page. */
export const COMMERCIAL_RELATED_BACKBONE: CommercialNavLink[] = [
  { label: 'Contractor Project Support', to: '/contractor-project-support' },
  { label: 'Commercial Property Turnovers', to: '/commercial-property-turnovers' },
  { label: 'Commercial Interior Strip-Outs', to: '/commercial-interior-strip-outs' },
  { label: 'Tenant Improvement (TI) Demo', to: '/tenant-improvement-demolition' },
  { label: 'Retail Decommissioning', to: '/retail-decommissioning' },
  { label: 'White Box Preparation', to: '/white-box-preparation' },
  { label: 'Lease Surrender Preparation', to: '/lease-surrender-preparation' },
  { label: 'Construction Cleanup', to: '/construction-cleanup' },
  { label: 'Commercial Cleanouts', to: '/commercial-cleanouts' },
];

export function getCommercialRelatedServices(currentPath: string) {
  return COMMERCIAL_RELATED_BACKBONE.filter((service) => service.to !== currentPath);
}

/** Demolition mega menu — selective demolition only; strip-outs live under Commercial Services. */
export const DEMOLITION_NAV_LINKS: CommercialNavLink[] = [
  { label: 'Interior Demolition', to: '/interior-demolition' },
  { label: 'Tenant Improvement (TI) Demo', to: '/tenant-improvement-demolition' },
  { label: 'Selective Demolition', to: '/selective-demolition' },
  { label: 'Kitchen Demolition', to: '/kitchen-demolition' },
  { label: 'Bathroom Demolition', to: '/bathroom-demolition' },
  { label: 'Flooring Removal', to: '/flooring-removal' },
  { label: 'Cabinet Removal', to: '/cabinet-removal' },
  { label: 'Ceiling Grid & Ceiling Tile Removal', to: '/ceiling-grid-removal' },
  { label: 'Drywall Removal', to: '/drywall-removal' },
  { label: 'Fence Removal', to: '/fence-removal' },
  { label: 'Deck Removal', to: '/deck-removal' },
  { label: 'Shed Demolition', to: '/shed-demolition' },
];
