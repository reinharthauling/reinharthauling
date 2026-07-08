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
    services: COMMERCIAL_NAV_LINKS,
  },
  {
    id: 'demolition',
    title: 'Demolition Services',
    hubLink: '/demolition-services',
    viewAllLabel: 'View All Demolition Services',
    services: DEMOLITION_NAV_LINKS,
  },
];
