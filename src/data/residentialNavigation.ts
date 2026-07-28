import type { ServiceNavLink } from './servicesNavigation.ts';

export type ResidentialNavCategory = {
  id: 'property-services' | 'removal-services';
  title: string;
  services: ServiceNavLink[];
};

export const RESIDENTIAL_NAV_CATEGORIES: ResidentialNavCategory[] = [
  {
    id: 'property-services',
    title: 'Property Services',
    services: [
      { label: 'Property Cleanup', to: '/property-cleanup' },
      { label: 'Estate Cleanouts', to: '/estate-cleanouts' },
      { label: 'Hoarder Cleanouts', to: '/hoarder-cleanouts' },
      { label: 'Garage Cleanouts', to: '/garage-cleanouts' },
      { label: 'Storage Unit Cleanouts', to: '/storage-unit-cleanouts' },
      { label: 'Eviction Cleanouts', to: '/eviction-cleanouts' },
      { label: 'Foreclosure Cleanouts', to: '/foreclosure-cleanouts' },
      { label: 'Rental Property Cleanouts', to: '/landlord-rental-cleanouts' },
      { label: 'Move-Out Cleanouts', to: '/move-out-cleanouts' },
      { label: 'Property Preparation', to: '/property-preparation' },
      { label: 'Yard Debris Cleanup', to: '/yard-debris-cleanup' },
      { label: 'Storm Cleanup', to: '/storm-cleanup' },
    ],
  },
  {
    id: 'removal-services',
    title: 'Removal Services',
    services: [
      { label: 'Junk Removal', to: '/junk-removal' },
      { label: 'Furniture Removal', to: '/furniture-removal' },
      { label: 'Appliance Removal', to: '/appliance-removal' },
      { label: 'Hot Tub Removal', to: '/hot-tub-removal' },
      { label: 'Piano Removal', to: '/piano-removal' },
      { label: 'Office Furniture Removal', to: '/office-load-outs' },
      { label: 'Construction Debris Removal', to: '/construction-cleanup' },
      { label: 'Fence Removal', to: '/fence-removal' },
      { label: 'Deck Removal', to: '/deck-removal' },
      { label: 'Shed Demolition', to: '/shed-demolition' },
      { label: 'Cabinet Removal', to: '/cabinet-removal' },
      { label: 'Flooring Removal', to: '/flooring-removal' },
      { label: 'Playset Removal', to: '/playset-removal' },
    ],
  },
];

export const RESIDENTIAL_HUB_LINK = '/residential-property-services';
