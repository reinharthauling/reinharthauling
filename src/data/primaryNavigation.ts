/**
 * Top-level primary navigation (desktop + mobile).
 * Services is rendered separately as a dropdown / accordion.
 */
export type PrimaryNavItem = {
  id: string;
  label: string;
  to: string;
  /** Home-section hash without # (e.g. reviews). */
  homeSectionId?: string;
};

export const PRIMARY_NAV_ITEMS: PrimaryNavItem[] = [
  { id: 'home', label: 'Home', to: '/' },
  { id: 'items-we-remove', label: 'Items We Remove', to: '/what-we-take' },
  { id: 'pricing', label: 'Pricing', to: '/pricing' },
  { id: 'projects', label: 'Projects', to: '/projects' },
  { id: 'reviews', label: 'Reviews', to: '/#reviews', homeSectionId: 'reviews' },
  { id: 'about', label: 'About', to: '/about' },
];

/** Paths that should highlight the Services control (dropdown / accordion). */
export const SERVICES_NAV_ACTIVE_PREFIXES = [
  '/residential-property-services',
  '/commercial-services',
  '/demolition-services',
  '/industries',
  '/junk-removal',
  '/property-cleanup',
  '/estate-cleanouts',
  '/garage-cleanouts',
  '/hot-tub-removal',
  '/yard-debris-cleanup',
  '/commercial-cleanouts',
  '/interior-demolition',
  '/construction-cleanup',
  '/retail-decommissioning',
  '/warehouse-cleanouts',
  '/hoarder-cleanouts',
  '/storage-unit-cleanouts',
  '/eviction-cleanouts',
  '/foreclosure-cleanouts',
  '/landlord-rental-cleanouts',
  '/move-out-cleanouts',
  '/property-preparation',
  '/storm-cleanup',
  '/furniture-removal',
  '/appliance-removal',
  '/piano-removal',
  '/office-load-outs',
  '/fence-removal',
  '/deck-removal',
  '/shed-demolition',
  '/cabinet-removal',
  '/flooring-removal',
  '/playset-removal',
  '/contractor-project-support',
  '/commercial-property-turnovers',
  '/commercial-interior-strip-outs',
  '/tenant-improvement-demolition',
  '/white-box-preparation',
  '/lease-surrender-preparation',
  '/retail-store-cleanouts',
  '/property-management-cleanouts',
  '/selective-demolition',
  '/kitchen-demolition',
  '/bathroom-demolition',
  '/ceiling-grid-removal',
  '/drywall-removal',
  '/property-cleanouts',
] as const;

export function isServicesNavActive(pathname: string, hash = ''): boolean {
  if (pathname === '/' && hash.replace(/^#/, '') === 'how-it-works') return true;
  return SERVICES_NAV_ACTIVE_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  );
}

export function isPrimaryNavItemActive(
  item: PrimaryNavItem,
  pathname: string,
  hash = '',
): boolean {
  const cleanHash = hash.replace(/^#/, '');

  if (item.id === 'home') {
    return pathname === '/' && cleanHash !== 'reviews' && cleanHash !== 'how-it-works';
  }

  if (item.homeSectionId) {
    return pathname === '/' && cleanHash === item.homeSectionId;
  }

  if (item.id === 'projects') {
    return pathname === '/projects' || pathname.startsWith('/projects/');
  }

  return pathname === item.to || pathname.startsWith(`${item.to}/`);
}
