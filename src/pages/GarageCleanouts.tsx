import React, { useState } from 'react';
import { SERVICE_AREA_DISPLAY_NAMES_WITH_PENDING, SERVICE_AREAS_FAQ_ANSWER } from '../data/business.ts';
import { motion } from 'motion/react';
import { CheckCircle2, ChevronDown, MessageSquare, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageCTAs from '../components/PageCTAs.tsx';
import CleanoutProcess from '../components/CleanoutProcess.tsx';
import ServiceBottomCTA from '../components/ServiceBottomCTA.tsx';
import { projectImages } from '../data/projectImages';
import PageMeta from '../components/PageMeta.tsx';
import {
  buildBreadcrumbListSchema,
  buildFAQPageSchema,
  buildServiceSchema,
  buildWebPageSchema,
  compactJsonLd,
} from '../utils/schema.ts';

const GARAGE_SHOWCASE = {
  beforeSrc: projectImages.garageCleanouts.gallatin.before,
  afterSrc: projectImages.garageCleanouts.gallatin.after,
};

const SERVICE_AREAS = SERVICE_AREA_DISPLAY_NAMES_WITH_PENDING;

const PAGE_TITLE = 'Garage Cleanouts in Middle Tennessee | Reinhart Hauling & Cleanouts';
const PAGE_DESCRIPTION =
  'Insured garage cleanouts in Middle Tennessee from Goodlettsville. Clear furniture, tools, bins, and clutter as part of property cleanouts. Call 615-200-0064.';

const GARAGE_PROCESS_STEPS = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Call, Text, or Request an Estimate',
    description:
      'Share photos or project details about the garage contents, access, and timing so we can understand the scope.',
    cta: { label: 'Request an Estimate →', estimate: true },
  },
  {
    number: '02',
    icon: CheckCircle2,
    title: 'Photos or Walkthrough & Clear Quote',
    description:
      'Smaller garage jobs may be estimated from photos. Packed or hard-access garages are often quoted after a walkthrough. You receive the price before work begins.',
    cta: { href: 'tel:+16152000064', label: 'Call or Text →' },
  },
  {
    number: '03',
    icon: Truck,
    title: 'Clear, Load & Handle Materials',
    description:
      'We remove the agreed contents, load and haul materials, and sort for disposal, recycling, scrap recovery, or donation when practical and appropriate.',
  },
];

const GARAGE_FAQS = [
  {
    question: 'What is included in a garage cleanout?',
    answer:
      'A garage cleanout typically includes furniture, storage bins, tools, shelving, boxed items, appliances, and general garage clutter. Scope is confirmed in the quote before work begins.',
  },
  {
    question: 'How is garage cleanout pricing determined?',
    answer:
      'Pricing is based on the amount and type of material, labor required, access, weight, disassembly, equipment needs, and disposal costs. Smaller pickups may be estimated from photos. Larger cleanouts and demolition projects are normally quoted after an on-site walkthrough. Customers receive the price before work begins.',
  },
  {
    question: 'Are there materials that require prior review?',
    answer:
      'Hazardous chemicals, fuel, biohazards, asbestos-containing material, explosives, medical waste, unknown liquids, and legally restricted waste require prior review and may not be accepted.',
  },
  {
    question: 'Can a garage cleanout be part of a larger property cleanout?',
    answer:
      'Yes. Garage clearing often supports property cleanouts, estate cleanouts, move-outs, and rental turnovers when the whole property needs to be prepared for the next step.',
  },
  {
    question: 'What areas do you serve?',
    answer: SERVICE_AREAS_FAQ_ANSWER,
  },
];

const RELATED_SERVICES = [
  { label: 'Property Cleanouts', to: '/property-cleanouts' },
  { label: 'Storage Unit Cleanouts', to: '/storage-unit-cleanouts' },
  { label: 'Move-Out Cleanouts', to: '/move-out-cleanouts' },
  { label: 'Estate Cleanouts', to: '/estate-cleanouts' },
  { label: 'Items We Remove', to: '/what-we-take' },
  { label: 'Projects', to: '/projects' },
];

export default function GarageCleanouts() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <>
      <PageMeta
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
        path="/garage-cleanouts"
        jsonLd={compactJsonLd([
          buildWebPageSchema({
            path: '/garage-cleanouts',
            name: PAGE_TITLE,
            description: PAGE_DESCRIPTION,
            mainEntityId: 'https://www.reinharthauling.com/garage-cleanouts#service',
          }),
          buildServiceSchema({
            name: 'Garage Cleanouts',
            description: PAGE_DESCRIPTION,
            path: '/garage-cleanouts',
            serviceType: 'Garage Cleanouts',
          }),
          buildFAQPageSchema(GARAGE_FAQS),
          buildBreadcrumbListSchema([
            { label: 'Home', to: '/' },
            { label: 'Residential Services', to: '/residential-property-services' },
            { label: 'Garage Cleanouts' },
          ]),
        ])}
      />
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl lg:max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-bold uppercase tracking-widest mb-6">
                GARAGE CLEANOUT SERVICE
              </span>
              <h1 className="font-display text-5xl md:text-6xl lg:text-[4.25rem] xl:text-7xl font-bold leading-[1.02] tracking-tighter text-brand-navy mb-8">
                Garage Cleanouts in <br />
                <span className="text-brand-orange">Middle Tennessee</span>
              </h1>
              <p className="text-lg lg:text-xl text-slate-600 leading-relaxed mb-4 max-w-2xl">
                Reinhart Hauling &amp; Cleanouts provides insured garage cleanouts from Goodlettsville across Middle
                Tennessee. We clear packed garages—furniture, tools, storage bins, appliances, and accumulated
                clutter—as part of property cleanouts, move-outs, and estate transitions so the space is usable again.
              </p>

              <p className="text-lg lg:text-xl text-slate-600 leading-relaxed mb-6 max-w-2xl">
                Need a full-home contents removal or broader property reset? See{' '}
                <Link to="/property-cleanouts" className="text-brand-orange hover:text-brand-navy transition-colors">
                  property cleanouts
                </Link>{' '}
                and{' '}
                <Link to="/property-cleanup" className="text-brand-orange hover:text-brand-navy transition-colors">
                  property cleanup
                </Link>
                .
              </p>

              <PageCTAs layout="hero" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10 md:mb-12 max-w-3xl">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-navy mb-4">
              Recent Garage Cleanout Project
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              Packed garage cleared, loaded out, and swept clean for the next phase of the property.
            </p>
            <p className="text-slate-600 leading-relaxed">
              This project involved a heavily packed garage with furniture, storage bins, debris, and years of
              accumulated contents. We coordinated the load-out, disposal, and final clean sweep to leave the space
              cleared and usable again.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 p-6 md:p-8 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              <div className="relative rounded-[1.75rem] overflow-hidden border border-slate-200 bg-slate-100 aspect-[4/3] lg:aspect-[5/4]">
                <img
                  src={GARAGE_SHOWCASE.beforeSrc}
                  alt="Garage cleanout in Gallatin TN before clearing packed furniture and storage"
                  className="w-full h-full object-cover object-center"
                  width={1000}
                  height={800}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-4 left-4 bg-brand-orange text-white px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest shadow-sm">
                  Before
                </div>
              </div>
              <div className="relative rounded-[1.75rem] overflow-hidden border border-slate-200 bg-slate-100 aspect-[4/3] lg:aspect-[5/4]">
                <img
                  src={GARAGE_SHOWCASE.afterSrc}
                  alt="Garage cleanout in Gallatin TN after contents removed and space swept clean"
                  className="w-full h-full object-cover object-center"
                  width={1000}
                  height={800}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-4 right-4 bg-white text-brand-navy px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest shadow-sm">
                  After
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 relative bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-navy mb-6">
              What Is Included in a Garage Cleanout?
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Common garage cleanout work that supports property cleanouts, turnovers, and estate transitions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Packed Garages',
                desc: 'Years of accumulation cleared—boxes, storage, and mixed clutter that has taken over the space.',
              },
              {
                title: 'Furniture & Bulky Items',
                desc: 'Unwanted furniture, shelving, mattresses, and bulky items removed as part of the cleanout.',
              },
              {
                title: 'Storage Bins & Boxes',
                desc: 'Bins, boxed goods, and stored items cleared so the garage can return to usable condition.',
              },
              {
                title: 'Tools & Yard Equipment',
                desc: 'Old tools, broken equipment, and unused outdoor gear hauled when included in scope.',
              },
              {
                title: 'Move-Out & Sale Prep',
                desc: 'Garage clearing during moves, estate transitions, and home sales.',
              },
              {
                title: 'Property Cleanout Support',
                desc: 'Garage scope that pairs with whole-property cleanouts, rental turnovers, and investor resets.',
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col gap-6"
              >
                <div className="w-12 h-12 bg-brand-navy/5 rounded-xl flex items-center justify-center text-brand-orange">
                  <CheckCircle2 />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-brand-navy mb-2">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CleanoutProcess
        title="How a Garage Cleanout Works"
        subtitle="Call or request an estimate, review photos or walk the garage, get a clear quote, then we clear, load, and handle the material."
        steps={GARAGE_PROCESS_STEPS}
        className="py-24 bg-white"
      />

      <section className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold text-brand-navy mb-4">Garage Cleanout FAQs</h2>
            <p className="text-slate-600 leading-relaxed">
              Straight answers about garage cleanouts across Middle Tennessee.
            </p>
          </div>
          <div className="space-y-3">
            {GARAGE_FAQS.map((item, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={item.question} className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  >
                    <span className="font-display text-base md:text-lg font-bold text-brand-navy leading-snug">
                      {item.question}
                    </span>
                    <ChevronDown
                      size={20}
                      className={`shrink-0 text-brand-orange transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-0">
                      <p className="text-slate-600 text-sm md:text-base leading-relaxed">{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10">
            <h2 className="font-display text-4xl font-bold text-brand-navy mb-4">Areas We Serve</h2>
            <p className="text-slate-600 max-w-3xl leading-relaxed">
              Garage cleanouts across Middle Tennessee—including the communities below and nearby areas.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {SERVICE_AREAS.map((area) => (
              <div
                key={area}
                className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3.5 text-center text-sm font-semibold text-brand-navy"
              >
                {area}
              </div>
            ))}
          </div>

          <p className="mt-6 md:mt-8 text-slate-500 text-sm md:text-base leading-relaxed max-w-3xl">
            We also help clients in nearby Middle Tennessee communities depending on scheduling and project scope.
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl font-bold text-brand-navy mb-4">Related Services</h2>
            <p className="text-slate-500">Garage cleanouts often pair with these property and cleanout services.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
