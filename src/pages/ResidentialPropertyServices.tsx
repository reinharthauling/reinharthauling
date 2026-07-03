import ServiceHubPage from '../components/ServiceHubPage.tsx';
import type { HubConfig } from '../components/ServiceHubPage.tsx';
import {
  ClipboardCheck,
  Home,
  KeyRound,
  MessageSquare,
  Package,
  Trash2,
  TrendingUp,
  Truck,
  Users,
  Warehouse,
  Zap,
} from 'lucide-react';
import { projectImages } from '../data/projectImages';

const INVESTOR_BASE = '/images/projects/2026%20Projects/2026-06_Investor-Property-Cleanup_Gallatin';
const HOARDER_BASE = '/images/projects/2026%20Projects/2026-04_Hoarder-Property-Cleanout_Joelton';

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

const residentialHubConfig: HubConfig = {
  canonicalPath: '/residential-property-services',
  pageTitle: 'Residential & Property Services | Reinhart Hauling & Cleanouts',
  metaTitle: 'Residential & Property Services | Reinhart Hauling & Cleanouts',
  metaDescription:
    'Residential property cleanouts, junk removal, estate cleanouts, rental turnovers, foreclosure cleanup, and property preparation throughout Middle Tennessee.',
  heroEyebrow: 'RESIDENTIAL & PROPERTY DIVISION',
  heroHeadline: 'Residential & Property Services',
  heroSubheadline:
    'Property cleanouts and debris removal for homeowners, families, landlords, investors, and property managers across Middle Tennessee.',
  heroCopy:
    'When a home, rental, garage, estate, or storage unit needs to be cleared, Reinhart handles the work with organized planning, upfront pricing, and steady execution—so the property can move toward sale, renovation, occupancy, or the next project phase.',
  heroImage: `${INVESTOR_BASE}/04_Hero/hero-general-property-after-01%20copy.jpeg`,
  heroImageAlt: 'Residential property cleanup completed in Gallatin TN',
  primaryCta: {
    label: 'Get a Quote',
    href: 'sms:6152000064?body=Hi%2C%20I%20need%20a%20quote%20for%20residential%20property%20services',
  },
  secondaryCta: {
    label: 'Text Photos',
    href: 'sms:6152000064?body=Hi%2C%20I%27d%20like%20to%20text%20photos%20for%20property%20services',
  },
  positioningTitle: 'A Property Cleanup Division Built for Real Projects',
  positioningParagraphs: [
    'Residential work at Reinhart is not a generic junk haul. It is organized property support—cleanouts, debris removal, and property preparation for people who need a space cleared with a plan, not a guess.',
    'Some properties need a garage emptied. Others need a full-home estate cleanout, a rental turned over after a difficult tenancy, or an investor property cleared before renovation. Each project gets a scope review, a realistic schedule, and a crew prepared for the volume and access involved.',
    'We work with homeowners clearing years of accumulation, families navigating inherited properties, landlords resetting units, and investors preparing flip or rental projects. The goal is always the same: remove what is in the way and leave the property ready for what comes next.',
  ],
  whoTitle: 'Who This Division Is For',
  whoSubtitle:
    'Residential and property clients who need dependable cleanout support—not a truck that shows up unprepared.',
  whoWeHelp: [
    {
      title: 'Homeowners',
      description:
        'Garage cleanouts, basement clearing, yard debris, hot tub removal, and whole-property cleanup when a home needs to be reset.',
    },
    {
      title: 'Families & Estates',
      description:
        'Respectful estate cleanouts, downsizing support, and inherited-home clearing when families need steady help through a difficult transition.',
    },
    {
      title: 'Landlords',
      description:
        'Eviction cleanouts, move-out clearing, and rental turnover support when units need to return to a workable condition quickly.',
    },
    {
      title: 'Property Managers',
      description:
        'Reliable cleanout coordination for units, turnovers, abandoned contents, and problem properties across a portfolio.',
    },
    {
      title: 'Real Estate Investors',
      description:
        'Investment property cleanup, foreclosure cleanouts, renovation prep, and debris removal between project phases.',
    },
    {
      title: 'Realtors',
      description:
        'Listing prep, seller prep, and last-minute property cleanups so showings and contractor access are not delayed.',
    },
  ],
  projectsTitle: 'Property Projects We Handle Regularly',
  projectsSubtitle:
    'Common residential and property situations where organized cleanout support makes the difference.',
  commonProjects: [
    {
      icon: Home,
      title: 'Rental Property Turnovers',
      description:
        'Left-behind furniture, trash, and personal items removed so maintenance, cleaning, and re-listing can move forward.',
    },
    {
      icon: Users,
      title: 'Estate & Inherited Home Cleanouts',
      description:
        'Room-by-room clearing with structure and communication during emotionally heavy property transitions.',
    },
    {
      icon: TrendingUp,
      title: 'Investor Property Cleanup',
      description:
        'Exterior and interior debris removal, bulky item haul-away, and property preparation before renovation or sale.',
    },
    {
      icon: KeyRound,
      title: 'Foreclosure & Abandoned Properties',
      description:
        'Properties cleared after foreclosure, abandonment, or extended vacancy so ownership teams can regain control.',
    },
    {
      icon: Warehouse,
      title: 'Garage & Storage Reset',
      description:
        'Packed garages, basements, sheds, and storage units cleared to restore usable space or complete a property scope.',
    },
    {
      icon: Truck,
      title: 'Move-Out & Pre-Sale Clearing',
      description:
        'Homes emptied and opened up for listing photos, contractor access, repairs, or the next occupant.',
    },
  ],
  servicesTitle: 'Residential & Property Services',
  servicesSubtitle:
    'Each service below is handled as part of a defined property project—not a rushed pickup without a plan.',
  services: [
    {
      icon: Trash2,
      title: 'Junk Removal',
      description: 'Furniture, clutter, appliances, and mixed household items removed with organized loading and disposal.',
      to: '/junk-removal',
    },
    {
      icon: Home,
      title: 'Property Cleanup',
      description: 'Whole-property cleanup for renovation, sale, occupancy, or the next phase of a property project.',
      to: '/property-cleanup',
    },
    {
      icon: Users,
      title: 'Estate Cleanouts',
      description: 'Respectful cleanouts after inheritance, downsizing, estate sales, or family transitions.',
      to: '/estate-cleanouts',
    },
    {
      icon: Warehouse,
      title: 'Hoarder Cleanouts',
      description: 'Large-scale cleanouts handled with structure, discretion, and steady daily progress.',
      to: '/hoarder-cleanouts',
    },
    {
      icon: Warehouse,
      title: 'Garage Cleanouts',
      description: 'Years of accumulated tools, bins, and clutter cleared to restore usable garage space.',
      to: '/garage-cleanouts',
    },
    {
      icon: Trash2,
      title: 'Eviction Cleanouts',
      description: 'Fast rental cleanouts to help owners regain control and prepare the unit for turnover.',
      to: '/eviction-cleanouts',
    },
    {
      icon: Home,
      title: 'Landlord & Rental Cleanouts',
      description: 'Turnover cleanouts for rental homes, apartments, and problem properties.',
      to: '/landlord-rental-cleanouts',
    },
    {
      icon: KeyRound,
      title: 'Foreclosure Cleanouts',
      description: 'Property cleanup after foreclosure, abandonment, or bank-owned transitions.',
      to: '/foreclosure-cleanouts',
    },
    {
      icon: Package,
      title: 'Storage Unit Cleanouts',
      description: 'Abandoned, overflow, or bulky contents removed from storage units.',
      to: '/storage-unit-cleanouts',
    },
    {
      icon: Truck,
      title: 'Yard Debris Removal',
      description: 'Brush, storm debris, exterior clutter, and outdoor materials cleared from the property.',
      to: '/junk-removal-goodlettsville',
    },
    {
      icon: Zap,
      title: 'Hot Tub Removal',
      description: 'Hot tubs disconnected, drained when needed, and removed from decks, patios, or tight access areas.',
      to: '/junk-removal',
    },
  ],
  processTitle: 'How Residential Property Projects Work',
  processSubtitle:
    'Photos work well for smaller scopes. Walkthroughs help on larger properties so labor, access, and disposal planning stay accurate.',
  processSteps: [
    {
      number: '01',
      icon: MessageSquare,
      title: 'Share Photos or Request a Walkthrough',
      description:
        'Text photos for smaller cleanouts, or schedule a walkthrough when the property is heavily involved, hard to access, or needs a closer volume assessment.',
      cta: { href: 'sms:6152000064?body=Hi%2C%20I%27d%20like%20to%20text%20photos%20for%20a%20property%20cleanout', label: 'Text Photos →' },
    },
    {
      number: '02',
      icon: ClipboardCheck,
      title: 'Review Scope, Access & Scheduling',
      description:
        'We confirm what stays, what goes, labor needs, disposal requirements, and timing so there are no surprises when the crew arrives.',
      cta: {
        href: 'sms:6152000064?body=Hi%2C%20I%27d%20like%20to%20schedule%20a%20walkthrough%20for%20property%20cleanup',
        label: 'Schedule Walkthrough →',
      },
    },
    {
      number: '03',
      icon: Truck,
      title: 'Clear the Property & Move the Project Forward',
      description:
        'Our crew clears the property, hauls debris, handles disposal, and leaves the space opened up for cleaning, repairs, listing, or occupancy.',
      cta: { href: 'tel:6152000064', label: 'Call Now →' },
    },
  ],
  featuredTitle: 'Recent Residential & Property Projects',
  featuredSubtitle: 'Documented Reinhart work from homes and properties across Middle Tennessee.',
  featuredProjects: [
    {
      title: 'Investor Property Cleanup – Gallatin',
      meta: 'Fence demo • Bulky items • Property prep',
      beforeSrc: `${INVESTOR_BASE}/01_Before/general-property-before-02.jpeg`,
      afterSrc: `${INVESTOR_BASE}/03_After/general-property-after-01.jpeg`,
      href: '/projects/investor-property-cleanup-gallatin',
    },
    {
      title: 'Hoarder Cleanout – Joelton',
      meta: 'Whole-home cleanout • Heavy debris • Hard deadline',
      beforeSrc: `${HOARDER_BASE}/04_Hero/hero-driveway-before-01.jpeg`,
      afterSrc: `${HOARDER_BASE}/04_Hero/hero-driveway-after-01.jpeg`,
      href: '/projects/hoarder-property-cleanup-joelton',
    },
    {
      title: 'Estate Property Cleanout – Hendersonville',
      meta: 'Inherited home • Room-by-room clearing',
      beforeSrc: projectImages.estateCleanouts.hendersonville.before,
      afterSrc: projectImages.estateCleanouts.hendersonville.after,
      href: '/estate-cleanouts',
    },
  ],
  trustTitle: 'Why Property Owners Choose Reinhart',
  trustSubtitle:
    'Residential clients choose us when communication, scope clarity, and execution matter as much as the haul itself.',
  trustHighlight:
    'The service we got from Reinhart Cleanout was amazing! He was prompt and left our space immaculate! Such a huge help and peace of mind while cleaning out my mom\'s house.',
  trustPoints: [
    {
      title: 'Professional Communication',
      description: 'Clear updates from first contact through completion—you know what is happening and when.',
    },
    {
      title: 'Transparent Pricing',
      description: 'Upfront quotes based on scope, access, labor, and disposal—not vague estimates after the work starts.',
    },
    {
      title: 'Real Project Experience',
      description: 'Every photo on this site comes from actual Reinhart property work—not stock imagery.',
    },
    {
      title: 'Prepared Equipment',
      description: 'Trailers, tools, and crew capacity matched to garages, estates, rentals, and full-property scopes.',
    },
    {
      title: 'Fully Insured',
      description: 'Professional residential cleanout work backed by proper insurance.',
    },
    {
      title: 'Respect For Your Property',
      description: 'Organized execution that protects access points, neighbors, and the next phase of your project.',
    },
  ],
  serviceAreas: MIDDLE_TN_AREAS,
  areasNote:
    'Residential property cleanouts and debris removal throughout Middle Tennessee, including the communities below and nearby areas depending on scope and scheduling.',
  relatedTitle: 'Individual Residential Services',
  relatedServices: [
    { label: 'Property Cleanup', to: '/property-cleanup' },
    { label: 'Estate Cleanouts', to: '/estate-cleanouts' },
    { label: 'Eviction Cleanouts', to: '/eviction-cleanouts' },
    { label: 'Garage Cleanouts', to: '/garage-cleanouts' },
  ],
  relatedHubs: [
    { label: 'Commercial Services', to: '/commercial-services' },
    { label: 'Demolition Services', to: '/demolition-services' },
  ],
  faqs: [
    {
      question: 'What types of residential property work do you handle?',
      answer:
        'We handle junk removal, property cleanup, estate cleanouts, hoarder cleanouts, garage cleanouts, eviction cleanouts, landlord and rental cleanouts, foreclosure cleanouts, storage unit cleanouts, yard debris removal, and hot tub removal throughout Middle Tennessee.',
    },
    {
      question: 'Can you clean out an entire home?',
      answer:
        'Yes. Full-home cleanouts are a core part of our residential division—whether the property is inherited, rented, foreclosed, or being prepared for sale or renovation.',
    },
    {
      question: 'Do I need to be present during the cleanout?',
      answer:
        'Not always. Many property projects can be completed with remote coordination as long as access, scope, and disposal expectations are confirmed in advance.',
    },
    {
      question: 'Can I start with photos instead of a walkthrough?',
      answer:
        'Yes. Smaller or more straightforward scopes often start from texted photos. Larger estates, hoarder situations, and heavily involved properties usually benefit from a walkthrough first.',
    },
    {
      question: 'Do you work with property managers and investors?',
      answer:
        'Yes. We regularly support property managers, landlords, investors, and realtors who need dependable turnover, foreclosure, and renovation-prep support.',
    },
    {
      question: 'How is pricing determined?',
      answer:
        'Pricing is based on volume, labor, access, item weight, disposal needs, and project complexity. Texting photos is usually the fastest way to receive an upfront quote.',
    },
  ],
  bottomCta: {
    headline: 'Need a Property Cleared?',
    copy: 'Whether you are preparing for sale, renovation, occupancy, or turnover, Reinhart is ready to help move your property project forward.',
    primary: {
      label: 'Get a Quote',
      href: 'sms:6152000064?body=Hi%2C%20I%20need%20a%20quote%20for%20residential%20property%20services',
    },
    secondary: { label: 'Call Now', href: 'tel:6152000064' },
  },
};

export default function ResidentialPropertyServices() {
  return <ServiceHubPage config={residentialHubConfig} />;
}
