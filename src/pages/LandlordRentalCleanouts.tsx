import React, { useState } from 'react';
import { SERVICE_AREA_DISPLAY_NAMES_WITH_PENDING, SERVICE_AREAS_FAQ_ANSWER } from '../data/business.ts';
import { buildFAQPageSchema, buildBreadcrumbListSchema, buildServiceSchema, buildWebPageSchema, compactJsonLd } from '../utils/schema.ts';
import { motion } from 'motion/react';
import { CheckCircle2, ChevronDown, ClipboardCheck, MessageSquare, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageCTAs from '../components/PageCTAs.tsx';
import CleanoutProcess from '../components/CleanoutProcess.tsx';
import PageMeta from '../components/PageMeta.tsx';
import ServiceBottomCTA from '../components/ServiceBottomCTA.tsx';

const WHO_WE_HELP = [
  {
    title: 'Landlords',
    desc: 'Dependable move-out and turnover support so vacant units can move into repairs, cleaning, and re-listing without dragging.',
  },
  {
    title: 'Property Managers',
    desc: 'Responsive scheduling and clear updates when multiple units need to turn over on tight timelines.',
  },
  {
    title: 'Rental Portfolios',
    desc: 'Consistent cleanout execution across properties with scope and communication that stays predictable job to job.',
  },
  {
    title: 'Investors',
    desc: 'Practical property reset support for acquisitions, flips, and rental repositioning when speed and clarity matter.',
  },
  {
    title: 'Realtors Preparing Listings',
    desc: 'Help clearing leftover contents and debris so showings and listing prep are not held up by what the last tenant left behind.',
  },
  {
    title: 'Maintenance & Turnover Teams',
    desc: 'Coordinated cleanout timing so maintenance, cleaners, and contractors can step in without overlap or confusion.',
  },
];

const INCLUDED_SERVICES = [
  {
    title: 'Rental Turnovers',
    desc: 'Full-unit clearing after move-outs so the property can move into the next phase of turnover work.',
  },
  {
    title: 'Move-Out Cleanouts',
    desc: 'Furniture, trash, and abandoned belongings removed when tenants leave contents behind.',
  },
  {
    title: 'Apartment Cleanouts',
    desc: 'Structured cleanout support for apartments and multi-family units across Middle Tennessee.',
  },
  {
    title: 'Furniture & Trash Removal',
    desc: 'Beds, couches, bagged waste, and mixed debris handled with an organized load-out process.',
  },
  {
    title: 'Garage & Storage Area Cleanouts',
    desc: 'Garages, storage rooms, and overflow spaces cleared as part of the same turnover scope.',
  },
  {
    title: 'Appliance Removal',
    desc: 'Old or abandoned appliances removed so maintenance and listing prep can proceed.',
  },
  {
    title: 'Interior Sweep-Outs',
    desc: 'Final pass for loose debris and remaining items before cleaning crews or the next tenant.',
  },
  {
    title: 'Property Reset Support',
    desc: 'Broader reset work when a unit or home needs to be cleared and made ready for the next step.',
  },
];

const RENTAL_PROCESS_STEPS = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Request an Estimate',
    description:
      'Share unit details, access notes, and timing so we understand the rental turnover scope and can respond clearly.',
    cta: { label: 'Request an Estimate →', estimate: true },
  },
  {
    number: '02',
    icon: ClipboardCheck,
    title: 'Photos or Walkthrough & Clear Quote',
    description:
      'Smaller turnovers can often be quoted from photos. Larger turnovers and multi-unit projects usually get a walkthrough—then you receive clear pricing before work begins.',
    cta: { href: 'tel:+16152000064', label: 'Call Now →' },
  },
  {
    number: '03',
    icon: Truck,
    title: 'Clear-Out & Turnover Readiness',
    description:
      'Our crew arrives on schedule, clears the property, hauls debris, and leaves the space ready for maintenance, cleaning, or the next tenant.',
    cta: { href: 'tel:+16152000064', label: 'Call Now \u2192' },
  },
];

const RENTAL_FAQS = [
  {
    question: 'What rental cleanout services do you provide for landlords?',
    answer:
      'We handle move-out cleanouts, apartment turnovers, and rental property resets—clearing furniture, trash, and left-behind belongings so vacant units can move toward cleaning, repairs, or the next tenant. For post-eviction clearing as the primary need, see our eviction cleanouts page.',
  },
  {
    question: 'How quickly can you schedule rental cleanouts?',
    answer:
      'We work around turnover timelines and can often schedule quickly depending on scope and availability. Request an estimate and we can usually confirm next steps and timing right away.',
  },
  {
    question: 'Do you work with property managers and landlords?',
    answer:
      'Yes. We regularly support property managers, landlords, and leasing teams who need dependable communication and steady execution on vacant units.',
  },
  {
    question: 'Can you clean out garages and storage areas?',
    answer:
      'Yes. Garage and storage-area clearing is common on rental turnovers, and we can include it in the same scope when needed.',
  },
  {
    question: 'Do you remove abandoned furniture and trash?',
    answer:
      'Yes. We remove abandoned furniture, bagged trash, loose debris, and mixed leftover contents from rentals, apartments, and single-family homes.',
  },
  {
    question: 'How is pricing determined?',
    answer:
      'Pricing is based on the amount and type of material, labor required, access, weight, disassembly, equipment needs, and disposal costs. Smaller pickups may be estimated from photos. Larger cleanouts and demolition projects are normally quoted after an on-site walkthrough. Customers receive the price before work begins.',
  },
  {
    question: 'Are there materials that require prior review?',
    answer:
      'Hazardous chemicals, fuel, biohazards, asbestos-containing material, explosives, medical waste, unknown liquids, and legally restricted waste require prior review and may not be accepted.',
  },
  {
    question: 'Do you offer walkthroughs before larger jobs?',
    answer:
      'Absolutely. Larger turnovers and multi-unit projects often benefit from a walkthrough so we can assess volume, access, labor, and timing before scheduling.',
  },
  {
    question: 'Can you work around maintenance or contractors onsite?',
    answer:
      'Yes. We can coordinate timing with maintenance crews, cleaners, and contractors so the handoff stays organized and the unit keeps moving forward.',
  },
  {
    question: 'What areas do you service?',
    answer: SERVICE_AREAS_FAQ_ANSWER,
  },
];

const SERVICE_AREAS = SERVICE_AREA_DISPLAY_NAMES_WITH_PENDING;

const RELATED_SERVICES = [
  { label: 'Eviction Cleanouts', to: '/eviction-cleanouts' },
  { label: 'Property Cleanouts', to: '/property-cleanouts' },
  { label: 'Property Cleanup', to: '/property-cleanup' },
  { label: 'Estate Cleanouts', to: '/estate-cleanouts' },
  { label: 'Foreclosure Cleanouts', to: '/foreclosure-cleanouts' },
  { label: 'Hoarder Cleanouts', to: '/hoarder-cleanouts' },
  { label: 'Commercial Cleanouts', to: '/commercial-cleanouts' },
  { label: 'Items We Remove', to: '/what-we-take' },
  { label: 'Projects', to: '/projects' },
];

const PAGE_TITLE = 'Landlord & Rental Cleanouts in Middle Tennessee | Reinhart';
const META_DESCRIPTION =
  'Insured landlord and rental cleanouts in Middle Tennessee from Goodlettsville. Move-out and turnover clearing for vacant units with pricing before work begins. Call 615-200-0064.';

export default function LandlordRentalCleanouts() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <>
      <PageMeta
        title={PAGE_TITLE}
        description={META_DESCRIPTION}
        path={`/landlord-rental-cleanouts`}
        jsonLd={compactJsonLd([
          buildWebPageSchema({
            path: '/landlord-rental-cleanouts',
            name: PAGE_TITLE,
            description: META_DESCRIPTION,
            mainEntityId: 'https://www.reinharthauling.com/landlord-rental-cleanouts#service',
          }),
          buildServiceSchema({
            name: 'Landlord & Rental Cleanouts',
            description: META_DESCRIPTION,
            path: '/landlord-rental-cleanouts',
            serviceType: 'Landlord & Rental Cleanouts',
          }),
          buildFAQPageSchema(RENTAL_FAQS),
          buildBreadcrumbListSchema([
            { label: 'Home', to: '/' },
            { label: 'Residential Services', to: '/residential-property-services' },
            { label: 'Landlord & Rental Cleanouts' },
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
                RENTAL TURNOVER SUPPORT
              </span>
              <h1 className="font-display text-5xl lg:text-7xl font-bold leading-[0.95] tracking-tighter text-brand-navy mb-8">
                Landlord &amp; Rental Cleanouts in <br />
                <span className="text-brand-orange">Middle Tennessee</span>
              </h1>
              <p className="text-lg lg:text-xl text-slate-600 leading-relaxed mb-6 max-w-2xl">
                Reinhart Hauling &amp; Cleanouts provides insured landlord and rental cleanouts from Goodlettsville
                across Middle Tennessee. We handle move-out cleanouts, apartment turnovers, and property resets—clearing
                furniture, trash, and left-behind belongings so vacant units can move toward cleaning, repairs, or the
                next tenant. Smaller jobs may be estimated from photos; larger turnovers are usually quoted after a
                walkthrough, with pricing confirmed before work begins.
              </p>

              <p className="text-lg lg:text-xl text-slate-600 leading-relaxed mb-6 max-w-2xl">
                Need post-eviction clearing as the primary focus? See{' '}
                <Link
                  to="/eviction-cleanouts"
                  className="text-brand-orange hover:text-brand-orange transition-colors"
                >
                  eviction cleanouts
                </Link>
                . Related services also include{' '}
                <Link to="/estate-cleanouts" className="text-brand-orange hover:text-brand-orange transition-colors">
                  estate cleanouts
                </Link>
                ,{' '}
                <Link to="/garage-cleanouts" className="text-brand-orange hover:text-brand-orange transition-colors">
                  garage cleanouts
                </Link>
                , and{' '}
                <Link to="/property-cleanouts" className="text-brand-orange hover:text-brand-orange transition-colors">
                  property cleanouts
                </Link>
                .
              </p>

              <PageCTAs layout="hero" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-navy mb-6">Who We Help</h2>
            <p className="text-slate-600 max-w-2xl text-lg leading-relaxed">
              Built for owners and teams who need responsive turnover support and clear communication on every job.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {WHO_WE_HELP.map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -8 }}
                className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 flex h-full flex-col gap-5"
              >
                <div className="w-10 h-10 bg-brand-navy/5 rounded-xl flex items-center justify-center text-brand-orange">
                  <CheckCircle2 size={18} />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-bold text-brand-navy mb-2">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <h2 className="font-display text-4xl font-bold text-brand-navy mb-4">Services Included</h2>
            <p className="text-slate-600 max-w-3xl leading-relaxed">
              Rental cleanout services designed to keep turnovers moving toward readiness—without confusion on scope
              or timing.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {INCLUDED_SERVICES.map((service) => (
              <div
                key={service.title}
                className="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm flex h-full flex-col"
              >
                <h3 className="font-display text-xl font-bold text-brand-navy mb-2">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed flex-1">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="font-display text-4xl font-bold text-brand-navy mb-4">How We Work</h2>
            <p className="text-slate-600 max-w-3xl leading-relaxed">
              A straightforward workflow for rental turnovers and property resets—estimate, photos or walkthrough,
              clear quote, then clear-out—including walkthroughs when larger scope or multi-unit work requires extra
              planning.
            </p>
          </div>
        </div>

        <CleanoutProcess
          title="How Our Rental Cleanout Process Works"
          subtitle="Smaller turnovers often start from photos. Larger jobs and multi-unit projects can be scoped through walkthroughs so pricing and planning stay accurate."
          className="pt-0 pb-0 bg-white"
          steps={RENTAL_PROCESS_STEPS}
        />
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold text-brand-navy mb-4">Landlord &amp; Rental Cleanout FAQs</h2>
            <p className="text-slate-600 leading-relaxed">
              Practical answers for landlords, property managers, and turnover teams.
            </p>
          </div>

          <div className="space-y-3">
            {RENTAL_FAQS.map((item, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={item.question}
                  className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden"
                >
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

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="font-display text-4xl font-bold text-brand-navy mb-4">Areas We Serve</h2>
            <p className="text-slate-600 max-w-3xl leading-relaxed">
              Landlord and rental cleanouts across Nashville, Goodlettsville, Hendersonville, Gallatin, Springfield,
              White House, Joelton, Greenbrier, and surrounding Middle Tennessee communities.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
            {SERVICE_AREAS.map((area) => (
              <div
                key={area}
                className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3.5 text-center text-sm font-semibold text-brand-navy"
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

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10">
            <h2 className="font-display text-3xl font-bold text-brand-navy mb-3">Related Services</h2>
            <p className="text-slate-500 max-w-3xl">
              Related cleanout services for evictions, estates, full-property transitions, and commercial turnovers.
            </p>
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
