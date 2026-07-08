export type IndustryNavLink = {
  label: string;
  to: string;
  description: string;
};

export const INDUSTRIES_HUB_PATH = '/industries';

export const INDUSTRIES_NAV_LINKS: IndustryNavLink[] = [
  {
    label: 'Commercial Property Managers',
    to: '/commercial-property-managers',
    description: 'Lease turnovers, vacant suites, and property preparation support.',
  },
  {
    label: 'General Contractors',
    to: '/general-contractors',
    description: 'Strip-outs, TI demo, cleanup, and dependable project support.',
  },
  {
    label: 'Commercial Real Estate',
    to: '/commercial-real-estate',
    description: 'Property transitions, white box prep, and lease surrender support.',
  },
  {
    label: 'Retail',
    to: '/retail',
    description: 'Store closures, decommissioning, and retail space preparation.',
  },
  {
    label: 'Office',
    to: '/office',
    description: 'Office load-outs, TI work, and suite turnover support.',
  },
  {
    label: 'Warehouse & Industrial',
    to: '/warehouse-industrial',
    description: 'Warehouse cleanouts, equipment removal, and industrial project support.',
  },
  {
    label: 'Healthcare',
    to: '/healthcare',
    description: 'Medical office renovations, clinic remodels, and fixture removal.',
  },
  {
    label: 'Education',
    to: '/education',
    description: 'School and campus cleanouts, renovation prep, and facility transitions.',
  },
  {
    label: 'Hospitality',
    to: '/hospitality',
    description: 'Hotel and hospitality turnover, renovation prep, and property reset.',
  },
  {
    label: 'Multifamily',
    to: '/multifamily',
    description: 'Unit turnovers, move-out support, and portfolio property preparation.',
  },
  {
    label: 'Religious Facilities',
    to: '/religious-facilities',
    description: 'Church and facility cleanouts, renovation prep, and property transitions.',
  },
  {
    label: 'Financial Institutions',
    to: '/financial-institutions',
    description: 'Branch decommissioning, office transitions, and white box preparation.',
  },
  {
    label: 'Restoration Contractors',
    to: '/restoration-contractors',
    description: 'Project support, debris removal, and property preparation during recovery.',
  },
];
