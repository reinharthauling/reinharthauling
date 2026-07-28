import { RESIDENTIAL_HUB_LINK } from './residentialNavigation.ts';

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
  /** Optional hub page for “view all” — omit for informational columns. */
  hubLink?: string;
  viewAllLabel?: string;
  /** Flat list for divisions without subcategories. */
  services?: ServiceNavLink[];
  /** Grouped lists for residential Property Services and Removal Services. */
  categories?: ServiceNavCategory[];
};

/** Curated Property & Residential links for the Services dropdown. */
export const SERVICES_DROPDOWN_RESIDENTIAL: ServiceNavLink[] = [
  { label: 'Junk Removal', to: '/junk-removal' },
  { label: 'Property Cleanup', to: '/property-cleanup' },
  { label: 'Estate Cleanouts', to: '/estate-cleanouts' },
  { label: 'Garage Cleanouts', to: '/garage-cleanouts' },
  { label: 'Hot Tub Removal', to: '/hot-tub-removal' },
  { label: 'Yard Debris Cleanup', to: '/yard-debris-cleanup' },
];

/** Curated Commercial & Project Services links for the Services dropdown. */
export const SERVICES_DROPDOWN_COMMERCIAL: ServiceNavLink[] = [
  { label: 'Commercial Cleanouts', to: '/commercial-cleanouts' },
  { label: 'Interior Demolition', to: '/interior-demolition' },
  { label: 'Construction Debris Removal', to: '/construction-cleanup' },
  { label: 'Retail Decommissioning', to: '/retail-decommissioning' },
  { label: 'Warehouse Cleanouts', to: '/warehouse-cleanouts' },
];

/** Supporting links under Services → Helpful Information. */
export const SERVICES_DROPDOWN_HELPFUL: ServiceNavLink[] = [
  { label: 'How It Works', to: '/#how-it-works' },
  { label: 'Who We Work With', to: '/industries' },
];

/**
 * Services mega menu / mobile accordion columns.
 * Curated for customer clarity; full catalogs remain on hub pages.
 */
export const SERVICES_NAV_COLUMNS: ServiceNavColumn[] = [
  {
    id: 'property-residential',
    title: 'Property & Residential',
    hubLink: RESIDENTIAL_HUB_LINK,
    viewAllLabel: 'View All Residential Services',
    services: SERVICES_DROPDOWN_RESIDENTIAL,
  },
  {
    id: 'commercial-project',
    title: 'Commercial & Project Services',
    hubLink: '/commercial-services',
    viewAllLabel: 'View All Commercial Services',
    services: SERVICES_DROPDOWN_COMMERCIAL,
  },
  {
    id: 'helpful-information',
    title: 'Helpful Information',
    services: SERVICES_DROPDOWN_HELPFUL,
  },
];
