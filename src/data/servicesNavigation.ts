import { RESIDENTIAL_NAV_CATEGORIES, RESIDENTIAL_HUB_LINK } from './residentialNavigation.ts';
import { COMMERCIAL_NAV_LINKS, DEMOLITION_NAV_LINKS } from './commercialNavigation.ts';

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

/** Links moved from the top bar into Services → Helpful Information. */
export const SERVICES_DROPDOWN_HELPFUL: ServiceNavLink[] = [
  { label: 'How It Works', to: '/#how-it-works' },
  { label: 'Who We Work With', to: '/industries' },
];

/**
 * Services mega menu / mobile accordion columns.
 * First three columns are the historical catalog (every original link preserved).
 * Helpful Information adds top-bar items moved into the dropdown.
 */
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
    services: COMMERCIAL_NAV_LINKS,
  },
  {
    id: 'demolition',
    title: 'Demolition Services',
    hubLink: '/demolition-services',
    viewAllLabel: 'View All Demolition Services',
    services: DEMOLITION_NAV_LINKS,
  },
  {
    id: 'helpful-information',
    title: 'Helpful Information',
    services: SERVICES_DROPDOWN_HELPFUL,
  },
];
