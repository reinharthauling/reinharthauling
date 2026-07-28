import React from 'react';
import { SERVICE_AREA_DISPLAY_NAMES_WITH_PENDING } from '../data/business.ts';
import { motion } from 'motion/react';
import {
  Calendar,
  CheckCircle2,
  HandHeart,
  MapPin,
  MessageSquare,
  ShieldCheck,
  Truck,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import PageCTAs from '../components/PageCTAs.tsx';
import CleanoutProcess from '../components/CleanoutProcess.tsx';
import OptionalServiceImage from '../components/OptionalServiceImage.tsx';
import EstateFaq from '../components/EstateFaq.tsx';
import PageMeta from '../components/PageMeta.tsx';
import ServiceBottomCTA from '../components/ServiceBottomCTA.tsx';
import {
  buildBreadcrumbListSchema,
  buildServiceSchema,
  buildWebPageSchema,
  compactJsonLd,
} from '../utils/schema.ts';

const ESTATE_PROCESS_STEPS = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Request an Estimate',
    description:
      'Share project details and property information so we can understand the scope—rooms involved, garage or storage areas, and any family items that need to stay.',
    cta: { label: 'Request an Estimate →', estimate: true },
  },
  {
    number: '02',
    icon: CheckCircle2,
    title: 'Photos or On-Site Walkthrough',
    description:
      'Smaller jobs can often be reviewed from photos. Larger estate or full-property cleanouts usually benefit from an on-site walkthrough so volume, access, labor, and disposal needs are assessed properly.',
    cta: { href: 'tel:+16152000064', label: 'Call Now →' },
  },
  {
    number: '03',
    icon: Calendar,
    title: 'Clear Quote & Schedule',
    description:
      'You receive clear pricing before work begins. We confirm the date, coordinate access, and align on what stays, what goes, and how the day will run.',
    cta: { href: 'tel:+16152000064', label: 'Call to Schedule \u2192' },
  },
  {
    number: '04',
    icon: Truck,
    title: 'Clear, Haul, and Final Sweep',
    description:
      'Our crew works through the property with organized execution—clearing rooms, hauling debris, handling disposal, and finishing with a final sweep-through before we close out the job.',
    cta: { href: 'tel:+16152000064', label: 'Call Now \u2192' },
  },
];

const WHY_CHOOSE_CARDS = [
  {
    icon: HandHeart,
    title: 'Respectful Estate Support',
    desc: 'Calm communication during inherited-home and family transitions—we work at a steady pace and respect what matters to you.',
  },
  {
    icon: ShieldCheck,
    title: 'Clear Scope & Pricing',
    desc: 'You know what is included before we start. No vague estimates or surprise line items once work is underway.',
  },
  {
    icon: CheckCircle2,
    title: 'Walkthroughs for Larger Jobs',
    desc: 'Full-home and estate cleanouts get an on-site look when needed—so volume, access, and disposal are assessed properly upfront.',
  },
  {
    icon: Truck,
    title: 'Reliable Follow-Through',
    desc: 'From scheduled arrival through hauling, disposal, and final sweep-through—we stay organized and keep you updated as the job progresses.',
  },
];

const SERVICE_AREAS = SERVICE_AREA_DISPLAY_NAMES_WITH_PENDING;

const RELATED_SERVICES = [
  { label: 'Property Cleanouts', to: '/property-cleanouts' },
  { label: 'Property Cleanup', to: '/property-cleanup' },
  { label: 'Hoarder Cleanouts', to: '/hoarder-cleanouts' },
  { label: 'Eviction Cleanouts', to: '/eviction-cleanouts' },
  { label: 'Landlord & Rental Cleanouts', to: '/landlord-rental-cleanouts' },
  { label: 'Foreclosure Cleanouts', to: '/foreclosure-cleanouts' },
  { label: 'Items We Remove', to: '/what-we-take' },
  { label: 'Projects', to: '/projects' },
];

const PAGE_TITLE = 'Estate Cleanouts in Middle Tennessee | Inherited Homes | Reinhart';
const META_DESCRIPTION =
  'Insured estate cleanouts in Middle Tennessee from Goodlettsville. Clear inherited homes and family transition properties with pricing confirmed before work begins. Call 615-200-0064.';

export default function EstateCleanouts() {
  const serviceTiles = [
    {
      title: 'Full Property Cleanouts',
      desc: 'Complete estate cleanouts for entire homes, including all rooms, garages, and storage areas.',
      imageSrc: undefined as string | undefined,
      imageAlt: undefined as string | undefined,
    },
    {
      title: 'Inherited Home Cleanouts',
      desc: 'We help families clear inherited properties quickly and respectfully.',
      imageSrc: undefined,
      imageAlt: undefined,
    },
    {
      title: 'House Cleanouts After Death',
      desc: 'Compassionate, discreet cleanout services during difficult times.',
      imageSrc: undefined,
      imageAlt: undefined,
    },
    {
      title: 'Downsizing & Moving Cleanouts',
      desc: 'Remove excess belongings before a move or transition.',
      imageSrc: undefined,
      imageAlt: undefined,
    },
    {
      title: 'Garage, Basement & Storage Cleanouts',
      desc: 'Clear out packed storage areas and long-term clutter.',
      imageSrc: undefined,
      imageAlt: undefined,
    },
    {
      title: 'Furniture & Bulk Item Removal',
      desc: 'Removal of couches, beds, appliances, and large household items.',
      imageSrc: undefined,
      imageAlt: undefined,
    },
  ];

  return (
    <>
      <PageMeta
        title={PAGE_TITLE}
        description={META_DESCRIPTION}
        path={`/estate-cleanouts`}
        jsonLd={compactJsonLd([
          buildWebPageSchema({
            path: '/estate-cleanouts',
            name: PAGE_TITLE,
            description: META_DESCRIPTION,
            mainEntityId: 'https://www.reinharthauling.com/estate-cleanouts#service',
          }),
          buildServiceSchema({
            name: 'Estate Cleanouts',
            description: META_DESCRIPTION,
            path: '/estate-cleanouts',
            serviceType: 'Estate Cleanouts',
          }),
          buildBreadcrumbListSchema([
            { label: 'Home', to: '/' },
            { label: 'Residential Services', to: '/residential-property-services' },
            { label: 'Estate Cleanouts' },
          ]),
        ])}
      />

      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-bold uppercase tracking-widest mb-6">
                FULL PROPERTY CLEANOUTS
              </span>
              <h1 className="font-display text-5xl lg:text-7xl font-bold leading-[0.95] tracking-tighter text-brand-navy mb-8">
                Estate Cleanouts in <br />
                <span className="text-brand-orange">Middle Tennessee</span>
              </h1>
              <p className="text-lg lg:text-xl text-slate-600 leading-relaxed mb-6 max-w-2xl">
                Reinhart Hauling &amp; Cleanouts provides insured estate cleanouts from Goodlettsville across Middle
                Tennessee. We clear inherited homes and family transition properties—furniture, belongings, garage
                contents, and household debris—so you can focus on what matters. Smaller jobs may be estimated from
                photos; larger estates are usually quoted after a walkthrough, with clear pricing before work begins.
              </p>

              <p className="text-lg lg:text-xl text-slate-600 leading-relaxed mb-6 max-w-2xl">
                We also offer{' '}
                <Link
                  to="/eviction-cleanouts"
                  className="text-brand-orange hover:text-brand-orange transition-colors"
                >
                  eviction cleanouts
                </Link>{' '}
                and{' '}
                <Link
                  to="/landlord-rental-cleanouts"
                  className="text-brand-orange hover:text-brand-orange transition-colors"
                >
                  rental property cleanouts
                </Link>{' '}
                for landlords and property managers.
              </p>

              <PageCTAs layout="hero" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-navy mb-6">
              Estate Cleanout Services We Handle
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceTiles.map((tile) => (
              <motion.div
                key={tile.title}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col gap-5 h-full"
              >
                <OptionalServiceImage src={tile.imageSrc} alt={tile.imageAlt} />
                <div className="w-12 h-12 bg-brand-navy/5 rounded-xl flex items-center justify-center text-brand-orange">
                  <CheckCircle2 />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-bold text-brand-navy mb-2">{tile.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{tile.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-navy mb-4">
              Why Choose Reinhart Hauling &amp; Cleanouts for Estate Cleanouts?
            </h2>
            <p className="text-slate-600 max-w-2xl text-lg leading-relaxed">
              Estate work takes more than hauling—it takes clear communication, realistic planning, and steady
              execution when the property and timeline matter.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {WHY_CHOOSE_CARDS.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-7 md:p-8 shadow-sm"
                >
                  <div className="mb-5 w-12 h-12 bg-brand-navy/5 rounded-xl flex items-center justify-center text-brand-orange">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-brand-navy mb-3">{card.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed flex-1">{card.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CleanoutProcess
        title="How Our Estate Cleanout Service Works"
        subtitle="Smaller jobs can often start from photos. Larger estate and full-property cleanouts usually benefit from a walkthrough so scope, access, and pricing are clear before we schedule."
        className="py-24 bg-white"
        steps={ESTATE_PROCESS_STEPS}
      />

      <EstateFaq />

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-brand-orange/10 rounded-xl flex items-center justify-center text-brand-orange">
                <MapPin size={20} />
              </div>
              <h2 className="font-display text-4xl font-bold text-brand-navy">Areas We Serve</h2>
            </div>
            <p className="text-slate-600 max-w-3xl leading-relaxed">
              Estate and property cleanouts across Middle Tennessee—including the communities below and nearby
              areas. Not sure if you&apos;re in range? Reach out and we&apos;ll let you know quickly.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {SERVICE_AREAS.map((area) => (
              <div
                key={area}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-center text-sm font-semibold text-brand-navy shadow-sm"
              >
                {area}
              </div>
            ))}
          </div>
          <p className="mt-8 text-slate-500 text-sm md:text-base leading-relaxed max-w-3xl">
            We also help clients in nearby Middle Tennessee communities depending on scheduling and project scope.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10">
            <h2 className="font-display text-3xl font-bold text-brand-navy mb-3">Related Services</h2>
            <p className="text-slate-500">Other cleanout services that often pair with estate work.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {RELATED_SERVICES.map((service) => (
              <Link
                key={service.to}
                to={service.to}
                className="px-6 py-4 rounded-2xl border border-slate-200 bg-white text-brand-navy font-bold text-sm hover:border-brand-orange transition-colors text-center"
              >
                {service.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ServiceBottomCTA variant="light" showContactExtras />
    </>
  );
}
