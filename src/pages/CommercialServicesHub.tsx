import ServiceHubPage from '../components/ServiceHubPage.tsx';
import type { HubConfig } from '../components/ServiceHubPage.tsx';
import {
  Archive,
  Briefcase,
  Building2,
  ClipboardCheck,
  HardHat,
  KeyRound,
  MessageSquare,
  Store,
  Truck,
  Warehouse,
} from 'lucide-react';
import { projectImages } from '../data/projectImages';

const COMMERCIAL_BASE = '/images/projects/2026%20Projects/2026-06_Commercial-Office-Cleanout_Nashville';

const MIDDLE_TN_AREAS = [
  'Goodlettsville',
  'Hendersonville',
  'Gallatin',
  'White House',
  'Springfield',
  'Greenbrier',
  'Madison',
  'Old Hickory',
  'Hermitage',
  'Donelson',
  'Nashville',
];

const commercialHubConfig: HubConfig = {
  canonicalPath: '/commercial-services',
  pageTitle: 'Commercial Services | Reinhart Hauling & Cleanouts',
  metaTitle: 'Commercial Cleanouts & Property Services | Reinhart Hauling & Cleanouts',
  metaDescription:
    'Commercial cleanouts, office cleanouts, office furniture removal, warehouse cleanouts, retail cleanouts, property management cleanouts, and construction cleanup in Middle Tennessee.',
  heroEyebrow: 'COMMERCIAL DIVISION',
  heroHeadline: 'Commercial Services',
  heroSubheadline:
    'Commercial cleanouts, load-outs, and debris removal for businesses, offices, warehouses, property managers, and contractors.',
  heroCopy:
    'When an office closes, a warehouse needs to be reset, or a commercial property is transitioning between tenants, Reinhart provides organized commercial load-out support—with clear scope, responsive scheduling, and crews prepared for furniture, fixtures, and bulk debris.',
  heroImage: `${COMMERCIAL_BASE}/01_Before/cubicle-office-before-01.jpeg`,
  heroImageAlt: 'Commercial office cleanout in downtown Nashville',
  primaryCta: {
    label: 'Request Commercial Quote',
    href: 'sms:6152000064?body=Hi%2C%20I%20need%20a%20commercial%20cleanout%20quote',
  },
  secondaryCta: {
    label: 'Text Project Photos',
    href: 'sms:6152000064?body=Hi%2C%20I%27d%20like%20to%20text%20photos%20for%20a%20commercial%20project',
  },
  positioningTitle: 'Commercial Property Support That Keeps Timelines Moving',
  positioningParagraphs: [
    'Commercial work at Reinhart centers on organized cleanouts and load-outs—not random junk pickups. Businesses, property managers, and contractors call us when a space needs to be cleared efficiently so lease turnover, relocation, renovation, or decommissioning can continue.',
    'That may mean removing cubicles and office furniture from a downtown office, clearing warehouse racking and abandoned inventory, or hauling construction debris from an active jobsite. Each project starts with a scope review: what needs to go, how it will be accessed, and what timeline the client is working against.',
    'We understand that commercial clients are often coordinating multiple vendors. Clear communication, realistic scheduling, and dependable execution matter as much as the physical removal itself.',
  ],
  whoTitle: 'Who This Division Is For',
  whoSubtitle:
    'Business and property professionals who need commercial spaces cleared without disrupting the rest of the project.',
  whoWeHelp: [
    {
      title: 'Property Managers',
      description:
        'Commercial unit cleanouts, tenant transitions, and recurring cleanup support for managed properties.',
    },
    {
      title: 'Office Managers',
      description:
        'Office decommissioning, furniture removal, and relocation support when businesses downsize or move.',
    },
    {
      title: 'Contractors',
      description:
        'Construction cleanup, jobsite debris removal, and material haul-away during renovation projects.',
    },
    {
      title: 'Retail Operators',
      description:
        'Store closures, fixture removal, and backroom clearing so spaces can return to market faster.',
    },
    {
      title: 'Warehouse Operators',
      description:
        'Bulk contents, racking, pallets, and abandoned materials cleared from warehouse and industrial spaces.',
    },
    {
      title: 'Commercial Property Owners',
      description:
        'Facility transitions, tenant cleanouts, and property preparation between occupancy phases.',
    },
  ],
  projectsTitle: 'Commercial Projects We Handle Regularly',
  projectsSubtitle:
    'Typical commercial load-out and cleanup situations across offices, retail, warehouses, and managed properties.',
  commonProjects: [
    {
      icon: Briefcase,
      title: 'Office Decommissioning',
      description:
        'Cubicles, workstations, conference furniture, files, and general office contents removed during closures or relocations.',
    },
    {
      icon: Store,
      title: 'Retail Store Cleanouts',
      description:
        'Fixtures, displays, shelving, and backroom inventory cleared when stores close or remodel.',
    },
    {
      icon: Warehouse,
      title: 'Warehouse & Industrial Reset',
      description:
        'Racking, pallets, equipment, packaging, and abandoned materials removed from warehouse spaces.',
    },
    {
      icon: Building2,
      title: 'Property Management Turnovers',
      description:
        'Commercial unit cleanouts and recurring support for managers handling difficult or abandoned spaces.',
    },
    {
      icon: HardHat,
      title: 'Construction & Renovation Cleanup',
      description:
        'Jobsite debris, packaging, leftover materials, and renovation waste removed during active projects.',
    },
    {
      icon: Truck,
      title: 'Commercial Load-Outs',
      description:
        'Bulk contents removed during business relocations, downsizing, or facility transitions.',
    },
  ],
  servicesTitle: 'Commercial Cleanout & Removal Services',
  servicesSubtitle:
    'Defined commercial services for offices, warehouses, retail spaces, and managed properties.',
  services: [
    {
      icon: Building2,
      title: 'Commercial Property Turnovers',
      description: 'Turnover cleanouts that help commercial units move from one tenant phase to the next.',
      to: '/commercial-property-turnovers',
    },
    {
      icon: Store,
      title: 'Retail Decommissioning',
      description: 'Fixture, inventory, and store contents removed during retail closures and transitions.',
      to: '/retail-decommissioning',
    },
    {
      icon: KeyRound,
      title: 'Lease Surrender Preparation',
      description: 'Load-out support aligned with lease-end deadlines and surrender expectations.',
      to: '/lease-surrender-preparation',
    },
    {
      icon: Archive,
      title: 'White Box Preparation',
      description: 'Clear tenant-specific contents so spaces present cleanly for marketing or build-out.',
      to: '/white-box-preparation',
    },
    {
      icon: Store,
      title: 'Retail Store Cleanouts',
      description: 'Fixtures, displays, shelving, backroom contents, and store cleanout support.',
      to: '/retail-store-cleanouts',
    },
    {
      icon: Briefcase,
      title: 'Office Load-Outs',
      description: 'Cubicles, furniture, files, and office contents removed during decommissioning.',
      to: '/office-load-outs',
    },
    {
      icon: Warehouse,
      title: 'Warehouse Cleanouts',
      description: 'Bulk contents, racking, pallets, equipment, and abandoned materials cleared.',
      to: '/warehouse-cleanouts',
    },
    {
      icon: Building2,
      title: 'Property Management Cleanouts',
      description: 'Recurring cleanout support for managers handling units, turnovers, and problem spaces.',
      to: '/property-management-cleanouts',
    },
    {
      icon: Building2,
      title: 'Commercial Cleanouts',
      description: 'Full commercial cleanouts for offices, businesses, facilities, and property transitions.',
      to: '/commercial-cleanouts',
    },
    {
      icon: HardHat,
      title: 'Construction Cleanup',
      description: 'Jobsite debris, renovation debris, packaging, and leftover materials removed.',
      to: '/construction-cleanup',
    },
  ],
  processTitle: 'How Commercial Projects Work',
  processSubtitle:
    'Commercial scopes move faster when photos, access details, and timeline expectations are clear upfront.',
  processSteps: [
    {
      number: '01',
      icon: MessageSquare,
      title: 'Send Photos or Describe the Project',
      description:
        'Text photos of the space, call to describe the scope, or share floor plans and access notes so we can understand volume and timing.',
      cta: { href: 'sms:6152000064?body=Hi%2C%20I%20need%20a%20commercial%20cleanout%20quote', label: 'Text Photos →' },
    },
    {
      number: '02',
      icon: ClipboardCheck,
      title: 'Confirm Scope, Access & Quote',
      description:
        'We review labor, parking, elevators, disassembly needs, disposal requirements, and scheduling before work begins.',
      cta: { href: 'sms:6152000064?body=Hi%2C%20I%20need%20commercial%20pricing', label: 'Get Pricing →' },
    },
    {
      number: '03',
      icon: Truck,
      title: 'Execute the Commercial Load-Out',
      description:
        'Our crew loads, hauls, sorts, and disposes of unwanted contents—keeping the client informed throughout the project.',
      cta: { href: 'tel:6152000064', label: 'Call Now →' },
    },
  ],
  featuredTitle: 'Recent Commercial Projects',
  featuredSubtitle: 'Documented commercial cleanout and load-out work from Middle Tennessee businesses.',
  featuredProjects: [
    {
      title: 'Commercial Cleanout – Downtown Nashville',
      meta: 'Office furniture • Cubicles • Commercial load-out',
      beforeSrc: `${COMMERCIAL_BASE}/01_Before/cubicle-office-before-01.jpeg`,
      afterSrc: `${COMMERCIAL_BASE}/01_Before/open-office-before-01.jpeg`,
      href: '/projects/commercial-cleanout-downtown-nashville',
    },
    {
      title: 'Office Furniture Removal – Nashville',
      meta: 'Executive furniture • Filing systems • Office contents',
      beforeSrc: projectImages.commercialCleanouts.downtownNashville.executiveFurniture,
      afterSrc: projectImages.commercialCleanouts.downtownNashville.fileCabinets,
      href: '/commercial-cleanouts',
    },
  ],
  trustTitle: 'Why Commercial Clients Choose Reinhart',
  trustSubtitle:
    'Businesses and property professionals choose us when reliability, scope clarity, and schedule discipline matter.',
  trustHighlight:
    'We hired Reinhart to remove drywall from an entire house. The workmanship, attention to detail is outstanding and pricing is more than fair. Jeremiah is a great communicator, courteous and punctual.',
  trustPoints: [
    {
      title: 'Reliable Scheduling',
      description: 'We show up when scheduled and communicate clearly from quote through completion.',
    },
    {
      title: 'Transparent Pricing',
      description: 'Upfront quotes based on volume, labor, access, and disposal—not surprises on site.',
    },
    {
      title: 'Commercial Experience',
      description: 'Documented office, warehouse, and facility cleanout work across Middle Tennessee.',
    },
    {
      title: 'Prepared Crews & Equipment',
      description: 'Capacity for cubicles, warehouse contents, retail fixtures, and bulk debris.',
    },
    {
      title: 'Fully Insured',
      description: 'Licensed and insured service for commercial properties and business clients.',
    },
    {
      title: 'Organized Load-Outs',
      description: 'Structured execution that respects facilities, access points, and project timelines.',
    },
  ],
  serviceAreas: MIDDLE_TN_AREAS,
  areasNote:
    'Commercial cleanouts and load-outs throughout Middle Tennessee for offices, warehouses, retail spaces, churches, schools, and managed properties.',
  relatedTitle: 'Individual Commercial Services',
  relatedServices: [
    { label: 'Office Load-Outs', to: '/office-load-outs' },
    { label: 'Lease Surrender Preparation', to: '/lease-surrender-preparation' },
    { label: 'Property Management Cleanouts', to: '/property-management-cleanouts' },
    { label: 'Construction Cleanup', to: '/construction-cleanup' },
  ],
  relatedHubs: [
    { label: 'Residential & Property Services', to: '/residential-property-services' },
    { label: 'Demolition Services', to: '/demolition-services' },
  ],
  faqs: [
    {
      question: 'Do you provide commercial cleanouts in Nashville?',
      answer:
        'Yes. We provide commercial cleanout services for offices, retail spaces, warehouses, storage areas, churches, schools, and commercial properties throughout Nashville and Middle Tennessee.',
    },
    {
      question: 'Can you remove cubicles and office furniture?',
      answer:
        'Yes. We remove and haul cubicles, desks, chairs, conference tables, filing cabinets, shelving, and other office furniture. Disassembly can be included when needed.',
    },
    {
      question: 'Do you work with property managers and contractors?',
      answer:
        'Yes. We regularly coordinate with property managers, contractors, office managers, and commercial property owners on cleanout and debris removal projects.',
    },
    {
      question: 'Can you handle warehouse cleanouts?',
      answer:
        'Yes. We clear racking, pallets, inventory, packaging materials, equipment, and general warehouse debris.',
    },
    {
      question: 'Is after-hours scheduling available?',
      answer:
        'Depending on scope and calendar availability, flexible or after-hours scheduling may be available for commercial projects.',
    },
    {
      question: 'How is commercial pricing determined?',
      answer:
        'Pricing depends on volume, labor, access, disassembly needs, item weight, and disposal requirements. Texting photos is usually the fastest way to receive an estimate.',
    },
  ],
  bottomCta: {
    headline: 'Need Commercial Cleanout Support?',
    copy: 'From office load-outs to warehouse cleanup, Reinhart helps businesses and property professionals clear spaces and move projects forward.',
    primary: {
      label: 'Request Commercial Quote',
      href: 'sms:6152000064?body=Hi%2C%20I%20need%20a%20commercial%20cleanout%20quote',
    },
    secondary: { label: 'Call Now', href: 'tel:6152000064' },
  },
};

export default function CommercialServicesHub() {
  return <ServiceHubPage config={commercialHubConfig} />;
}
