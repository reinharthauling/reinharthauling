import ServiceHubPage from '../components/ServiceHubPage.tsx';
import type { HubConfig } from '../components/ServiceHubPage.tsx';
import {
  Archive,
  Bath,
  Box,
  Building2,
  ClipboardCheck,
  Hammer,
  Layers,
  MessageSquare,
  PanelTop,
  SquareStack,
  Trees,
  Truck,
  UtensilsCrossed,
} from 'lucide-react';

const DEMO_BASE = '/images/projects/2026%20Projects/2026-06_Interior-Demo-Portland';
const INVESTOR_BASE = '/images/projects/2026%20Projects/2026-06_Investor-Property-Cleanup_Gallatin';

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

const demolitionHubConfig: HubConfig = {
  canonicalPath: '/demolition-services',
  pageTitle: 'Demolition Services | Reinhart Hauling & Cleanouts',
  metaTitle: 'Demolition Services | Reinhart Hauling & Cleanouts',
  metaDescription:
    'Selective demolition, interior demolition, kitchen and bathroom tear-outs, flooring removal, fence removal, deck removal, shed demolition, and debris haul-away in Middle Tennessee.',
  heroEyebrow: 'SELECTIVE DEMOLITION',
  heroHeadline: 'Selective Demolition Services',
  heroSubheadline:
    'Interior demolition, tenant improvement demo, and renovation prep—not structural building demolition.',
  heroCopy:
    'Reinhart prepares commercial and residential spaces for renovation, tenant improvement, and the next project phase. We perform selective interior demolition, TI tear-out, and debris removal—supporting contractors, property managers, and owners without performing structural or building demolition.',
  heroImage: `${DEMO_BASE}/04_Hero/hero-insulation-during-01.jpeg`,
  heroImageAlt: 'Interior demolition and tear-out project in Portland TN',
  primaryCta: {
    label: 'Request Demo Quote',
    href: 'sms:6152000064?body=Hi%2C%20I%20need%20a%20quote%20for%20demolition%20services',
  },
  secondaryCta: {
    label: 'Text Project Photos',
    href: 'sms:6152000064?body=Hi%2C%20I%27d%20like%20to%20text%20photos%20for%20a%20demolition%20project',
  },
  positioningTitle: 'Selective Demolition for Property Preparation',
  positioningParagraphs: [
    'Demolition at Reinhart means controlled, selective tear-out that opens spaces for renovation—not bringing down buildings. We help contractors and property teams remove finishes, fixtures, ceilings, flooring, and interior build-out so the next trade can begin.',
    'That includes tenant improvement demolition, kitchen and bathroom tear-outs, ceiling grid removal, and exterior features like fences, decks, and small sheds. For commercial strip-outs and lease transitions, our Commercial Services division handles larger commercial property preparation.',
    'We are clear about scope: this division supports selective interior and exterior demolition for renovation prep. Full structural demolition and building wrecking require licensed structural demolition contractors.',
  ],
  whoTitle: 'Who This Division Is For',
  whoSubtitle:
    'Clients who need materials removed, spaces opened up, and debris hauled—not a wrecking ball.',
  whoWeHelp: [
    {
      title: 'Homeowners',
      description:
        'Kitchen, bathroom, and room tear-outs before remodels, plus fence, deck, and shed removal.',
    },
    {
      title: 'Real Estate Investors',
      description:
        'Renovation prep, selective interior demo, and exterior structure removal between project phases.',
    },
    {
      title: 'Contractors',
      description:
        'Tear-out support, debris haul-away, and jobsite cleanup when trades need space to work.',
    },
    {
      title: 'Landlords',
      description:
        'Interior demo and debris removal before unit renovations or major repairs.',
    },
    {
      title: 'Commercial Businesses',
      description:
        'Selective interior tear-outs and debris removal in offices and commercial spaces.',
    },
    {
      title: 'Restoration Companies',
      description:
        'Controlled tear-out debris and contents removal support during recovery projects.',
    },
  ],
  projectsTitle: 'Demolition Work We Handle',
  projectsSubtitle:
    'Selective tear-out and removal projects that open properties up for renovation and repair.',
  commonProjects: [
    {
      icon: UtensilsCrossed,
      title: 'Kitchen Tear-Outs',
      description:
        'Cabinets, counters, flooring, and fixtures removed so kitchen renovations can begin cleanly.',
    },
    {
      icon: Bath,
      title: 'Bathroom Tear-Outs',
      description:
        'Vanities, tile, fixtures, and drywall removed during bathroom remodel prep.',
    },
    {
      icon: SquareStack,
      title: 'Drywall & Insulation Removal',
      description:
        'Interior wall tear-out and debris haul-away for repairs, inspections, and remodels.',
    },
    {
      icon: Layers,
      title: 'Flooring Removal',
      description:
        'Carpet, laminate, vinyl, and tile stripped and hauled before new flooring installation.',
    },
    {
      icon: PanelTop,
      title: 'Fence & Deck Removal',
      description:
        'Old fencing, deck boards, framing, and related debris cleared from the property.',
    },
    {
      icon: Box,
      title: 'Shed & Outbuilding Demo',
      description:
        'Small sheds and outdoor structures taken down and hauled for yard or property reset.',
    },
  ],
  servicesTitle: 'Selective Demolition Services',
  servicesSubtitle:
    'Each service below is selective demolition and renovation prep—not full structural or building demolition.',
  services: [
    {
      icon: Hammer,
      title: 'Interior Demolition',
      description: 'Selective interior tear-out for renovation, tenant improvement, and property preparation.',
      to: '/interior-demolition',
      cta: 'Learn More',
    },
    {
      icon: Building2,
      title: 'Tenant Improvement (TI) Demolition',
      description: 'Prior build-out removal before office, retail, and commercial tenant improvement work.',
      to: '/tenant-improvement-demolition',
      cta: 'Learn More',
    },
    {
      icon: Hammer,
      title: 'Selective Demolition',
      description: 'Targeted removal of scheduled materials while protecting the rest of the property.',
      to: '/selective-demolition',
    },
    {
      icon: UtensilsCrossed,
      title: 'Kitchen Demolition',
      description: 'Cabinets, counters, flooring, fixtures, and kitchen materials removed.',
      to: '/kitchen-demolition',
    },
    {
      icon: Bath,
      title: 'Bathroom Demolition',
      description: 'Vanities, tile, flooring, fixtures, drywall, and bathroom materials removed.',
      to: '/bathroom-demolition',
    },
    {
      icon: Hammer,
      title: 'Commercial Interior Strip-Outs',
      description: 'Commercial strip-out support for TI, lease transitions, and renovation prep.',
      to: '/commercial-interior-strip-outs',
    },
    {
      icon: Layers,
      title: 'Flooring Removal',
      description: 'Carpet, laminate, vinyl, tile, and other flooring removed and hauled away.',
      to: '/flooring-removal',
    },
    {
      icon: Archive,
      title: 'Cabinet Removal',
      description: 'Kitchen, bathroom, office, and built-in cabinets removed cleanly.',
      to: '/cabinet-removal',
    },
    {
      icon: PanelTop,
      title: 'Ceiling Grid & Ceiling Tile Removal',
      description: 'Drop ceiling grids and tiles removed for renovation and TI projects.',
      to: '/ceiling-grid-removal',
    },
    {
      icon: SquareStack,
      title: 'Drywall Removal',
      description: 'Drywall tear-out and debris removal for repairs, remodels, and restoration prep.',
      to: '/drywall-removal',
    },
    {
      icon: PanelTop,
      title: 'Fence Removal',
      description: 'Old fencing, posts, panels, and related debris removed from the property.',
      to: '/fence-removal',
    },
    {
      icon: Trees,
      title: 'Deck Removal',
      description: 'Deck boards, framing, railings, and demolition debris removed.',
      to: '/deck-removal',
    },
    {
      icon: Box,
      title: 'Shed Demolition',
      description: 'Small sheds and outdoor structures taken down and hauled away.',
      to: '/shed-demolition',
    },
  ],
  processTitle: 'How Demolition Projects Work',
  processSubtitle:
    'Scope clarity matters on demo work—we confirm what is being removed, what stays, and how debris will be handled.',
  processSteps: [
    {
      number: '01',
      icon: MessageSquare,
      title: 'Send Photos or Schedule a Walkthrough',
      description:
        'Share photos of the tear-out area or walk the space so we can understand materials, access, debris volume, and renovation goals.',
      cta: { href: 'sms:6152000064?body=Hi%2C%20I%20need%20demolition%20help', label: 'Text Photos →' },
    },
    {
      number: '02',
      icon: ClipboardCheck,
      title: 'Confirm Scope, Access & Safety',
      description:
        'We review what stays, what goes, parking, entry points, debris staging, and timing before tear-out begins.',
      cta: { href: 'sms:6152000064?body=Hi%2C%20I%27d%20like%20a%20demo%20quote', label: 'Get Pricing →' },
    },
    {
      number: '03',
      icon: Truck,
      title: 'Tear-Out, Loading & Haul-Away',
      description:
        'Our crew completes the selective demolition, loads debris, hauls it away, and leaves the area ready for the next trade.',
      cta: { href: 'tel:6152000064', label: 'Call Now →' },
    },
  ],
  featuredTitle: 'Recent Demolition Projects',
  featuredSubtitle: 'Documented selective demolition and debris removal from Middle Tennessee properties.',
  featuredProjects: [
    {
      title: 'Interior Demo – Portland',
      meta: 'Selective interior demo • Renovation prep',
      beforeSrc: `${DEMO_BASE}/04_Hero/hero-kitchen-before-02.jpeg`,
      afterSrc: `${DEMO_BASE}/04_Hero/hero-kitchen-after-01.jpeg`,
      href: '/projects/interior-demo-portland',
    },
    {
      title: 'Investor Property Cleanup – Gallatin',
      meta: 'Fence demolition • Exterior debris removal',
      beforeSrc: `${INVESTOR_BASE}/01_Before/fence-demo-before-01.jpeg`,
      afterSrc: `${INVESTOR_BASE}/03_After/fence-demo-after-03.jpeg`,
      href: '/projects/investor-property-cleanup-gallatin',
    },
  ],
  trustTitle: 'Why Choose Reinhart for Demolition',
  trustSubtitle:
    'Clients choose us when they need practical tear-out support with organized debris removal—not uncontrolled demo.',
  trustPoints: [
    {
      title: 'Scope-First Approach',
      description: 'We confirm what is being removed and what stays before tear-out work begins.',
    },
    {
      title: 'Transparent Pricing',
      description: 'Upfront quotes based on materials, access, labor, and disposal requirements.',
    },
    {
      title: 'Renovation-Ready Results',
      description: 'Spaces left clearer and ready for contractors, inspections, or the next project phase.',
    },
    {
      title: 'Debris Haul-Away Included',
      description: 'Tear-out, loading, hauling, and disposal handled as part of the project scope.',
    },
    {
      title: 'Fully Insured',
      description: 'Professional demo and debris removal backed by proper insurance.',
    },
    {
      title: 'Honest About Limits',
      description: 'We focus on selective demolition—not full structural or house demolition.',
    },
  ],
  serviceAreas: MIDDLE_TN_AREAS,
  areasNote:
    'Selective demolition and debris removal throughout Middle Tennessee for residential and commercial renovation prep projects.',
  relatedTitle: 'Related Demolition & Property Services',
  relatedServices: [
    { label: 'Tenant Improvement (TI) Demolition', to: '/tenant-improvement-demolition' },
    { label: 'Selective Demolition', to: '/selective-demolition' },
    { label: 'Commercial Interior Strip-Outs', to: '/commercial-interior-strip-outs' },
    { label: 'Construction Cleanup', to: '/construction-cleanup' },
  ],
  relatedHubs: [
    { label: 'Residential & Property Services', to: '/residential-property-services' },
    { label: 'Commercial Services', to: '/commercial-services' },
  ],
  faqs: [
    {
      question: 'Do you perform full house demolition?',
      answer:
        'No. We focus on selective demolition, tear-outs, and debris haul-away—not full structural demolition or large wrecking projects.',
    },
    {
      question: 'What is selective demolition?',
      answer:
        'Selective demolition means removing specific materials or finishes—drywall, cabinets, flooring, fences, decks, sheds—while leaving the overall structure intact for renovation or repair.',
    },
    {
      question: 'Do you haul away demolition debris?',
      answer:
        'Yes. Tear-out, loading, hauling, and disposal can be included as part of the demolition project scope.',
    },
    {
      question: 'Can you remove kitchens and bathrooms?',
      answer:
        'Yes. Kitchen and bathroom demolition—including cabinets, fixtures, tile, flooring, and related materials—is common renovation prep work for our division.',
    },
    {
      question: 'Do you work with contractors and investors?',
      answer:
        'Yes. We regularly support contractors, investors, landlords, and property owners who need tear-out and debris removal to keep projects moving.',
    },
    {
      question: 'How is demo pricing determined?',
      answer:
        'Pricing depends on materials, access, labor, debris volume, and disposal needs. Texting photos is the fastest way to receive an upfront quote.',
    },
  ],
  bottomCta: {
    headline: 'Need Selective Demolition Support?',
    copy: 'Text project photos for a demo quote or call to discuss tear-out scope, debris removal, and timing.',
    primary: {
      label: 'Request Demo Quote',
      href: 'sms:6152000064?body=Hi%2C%20I%20need%20a%20quote%20for%20demolition%20services',
    },
    secondary: { label: 'Call Now', href: 'tel:6152000064' },
  },
};

export default function DemolitionServices() {
  return <ServiceHubPage config={demolitionHubConfig} />;
}
