import React, { useState } from 'react';
import { SERVICE_AREA_DISPLAY_NAMES_WITH_PENDING, SERVICE_AREAS_FAQ_ANSWER } from '../data/business.ts';
import { buildFAQPageSchema, buildBreadcrumbListSchema, buildServiceSchema, buildWebPageSchema, compactJsonLd } from '../utils/schema.ts';
import { motion } from 'motion/react';
import { Calendar, CheckCircle2, ChevronDown, ClipboardCheck, MessageSquare, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageCTAs from '../components/PageCTAs.tsx';
import CleanoutProcess from '../components/CleanoutProcess.tsx';
import { projectImages } from '../data/projectImages';
import PageMeta from '../components/PageMeta.tsx';
import ServiceBottomCTA from '../components/ServiceBottomCTA.tsx';

const WHO_WE_HELP = [
  {
    title: 'Homeowners',
    desc: 'Support when a full property needs to be cleared—whether you are downsizing, relocating, or reclaiming space that has gotten out of hand.',
  },
  {
    title: 'Families Managing Inherited Properties',
    desc: 'Calm, organized help on inherited homes so families can move forward without carrying the entire load-out themselves.',
  },
  {
    title: 'Realtors',
    desc: 'Property clearing before listings and showings so agents are not stuck waiting on leftover contents and debris.',
  },
  {
    title: 'Landlords & Investors',
    desc: 'Full-property resets after difficult tenancies, acquisitions, or repositioning work when timing and clarity matter.',
  },
  {
    title: 'Property Managers',
    desc: 'Dependable coordination on larger cleanouts with clear scope, scheduling updates, and steady execution.',
  },
  {
    title: 'Sellers Preparing Homes for Market',
    desc: 'Whole-home clearing so sellers can focus on repairs, staging, and listing prep—not years of accumulation.',
  },
];

const CLEANOUT_TYPES = [
  {
    title: 'Full-Home Cleanouts',
    desc: 'Complete interior clearing across rooms, hallways, and living areas when the entire home needs to be emptied.',
  },
  {
    title: 'Estate Property Cleanouts',
    desc: 'Inherited and transition properties cleared with respect for family decisions on what stays and what goes.',
  },
  {
    title: 'Garage & Basement Cleanouts',
    desc: 'Packed lower levels and garages cleared as part of a broader property scope or standalone project.',
  },
  {
    title: 'Rental & Turnover Cleanouts',
    desc: 'Vacant rentals reset after move-outs so maintenance, cleaning, and re-listing can move forward.',
  },
  {
    title: 'Storage Building Cleanouts',
    desc: 'Storage units and outbuildings emptied when contents have piled up over years.',
  },
  {
    title: 'Shed & Outbuilding Cleanouts',
    desc: 'Detached structures cleared of tools, debris, and abandoned contents on residential properties.',
  },
  {
    title: 'Distressed Property Cleanouts',
    desc: 'Practical support on neglected or overwhelmed properties that need structure, planning, and steady follow-through.',
  },
  {
    title: 'Large Debris & Furniture Removal',
    desc: 'Couches, mattresses, appliances, and bulky debris removed as part of a coordinated property cleanout.',
  },
];

const COMMON_SITUATIONS = [
  {
    title: 'Homes overwhelmed with years of accumulation',
    desc: 'We work room by room with a clear plan—so the property opens up without chaos or guesswork on what happens next.',
  },
  {
    title: 'Preparing a property for sale',
    desc: 'Contents and debris cleared so repairs, staging, and listing prep are not held back by what is still inside.',
  },
  {
    title: 'Inherited homes',
    desc: 'Families get steady communication and organized execution during emotionally heavy transitions.',
  },
  {
    title: 'Move-out cleanouts',
    desc: 'Left-behind furniture, trash, and personal items removed when tenants or owners leave more than expected.',
  },
  {
    title: 'Abandoned contents',
    desc: 'Properties with mixed debris, furniture, and forgotten items cleared with defined scope before work starts.',
  },
  {
    title: 'Clearing before renovation or repairs',
    desc: 'Spaces opened up so contractors and maintenance teams can access what they need without navigating clutter.',
  },
  {
    title: 'Reclaiming garages and storage areas',
    desc: 'Garages, basements, and storage rooms cleared so usable space is actually usable again.',
  },
];

const PROPERTY_PROCESS_STEPS = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Call, Text, or Request an Estimate',
    description:
      'Share project details, property access notes, and timing so we understand the cleanout scope and can respond clearly.',
    cta: { label: 'Request an Estimate →', estimate: true },
  },
  {
    number: '02',
    icon: ClipboardCheck,
    title: 'Photos or On-Site Walkthrough',
    description:
      'We review photos or schedule a walkthrough, then provide a clear quote covering labor, haul-away, and disposal before work begins.',
    cta: { href: 'tel:+16152000064', label: 'Call or Text →' },
  },
  {
    number: '03',
    icon: Truck,
    title: 'Schedule & Remove Contents',
    description:
      'We schedule the work, load and remove the material, and sort items for disposal, recycling, scrap recovery, or donation when practical and appropriate.',
  },
  {
    number: '04',
    icon: CheckCircle2,
    title: 'Agreed Cleanout Scope Completed',
    description:
      'The property is left cleared to the agreed scope—ready for cleaning, repairs, listing, or occupancy.',
  },
];

const PROPERTY_PROJECTS = [
  {
    title: 'Full-Home Property Cleanout – Nashville Area',
    meta: 'Whole-home reset • Heavy accumulation',
    beforeSrc: projectImages.propertyCleanouts.nashville.before,
    afterSrc: projectImages.propertyCleanouts.nashville.after,
  },
  {
    title: 'Estate Property Cleanout – Hendersonville',
    meta: 'Inherited home • Room-by-room clearing',
    beforeSrc: projectImages.estateCleanouts.hendersonville.before,
    afterSrc: projectImages.estateCleanouts.hendersonville.after,
  },
  {
    title: 'Garage & Storage Cleanout – Hendersonville',
    meta: 'Packed garage • Property support scope',
    beforeSrc: projectImages.garageCleanouts.hendersonville.before,
    afterSrc: projectImages.garageCleanouts.hendersonville.after,
  },
];

const PROPERTY_FAQS = [
  {
    question: 'What is included in a property cleanout?',
    answer:
      'A property cleanout removes unwanted contents from a home, estate, rental, garage, hoarded property, or similar structure—furniture, appliances, mattresses, household clutter, garage contents, and estate leftovers—so the building can be cleaned, repaired, listed, or reoccupied.',
  },
  {
    question: 'How is a property cleanout different from property cleanup?',
    answer:
      'Property cleanouts focus on removing unwanted contents from inside structures. Property cleanup is broader reset work that may include exterior debris, renovation prep, abandoned-property clearing, and investor property preparation. See our Property Cleanup page for broader reset projects.',
  },
  {
    question: 'Can you clean out a property before closing?',
    answer:
      'Yes. Many sellers, buyers, and realtors request cleanouts before closing. Share the timeline early so we can confirm scope, access, and scheduling.',
  },
  {
    question: 'Do you handle heavily cluttered or hoarded properties?',
    answer:
      'Yes. Heavily cluttered and hoarder cleanouts are within our property cleanout work. Larger volumes are normally quoted after photos or an on-site walkthrough.',
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
    question: 'What areas do you service?',
    answer: SERVICE_AREAS_FAQ_ANSWER,
  },
  {
    question: 'Do you work with realtors or property managers?',
    answer:
      'Yes. We regularly coordinate with realtors, property managers, landlords, and family members when properties need to be cleared for listing, sale, or turnover.',
  },
];

const SERVICE_AREAS = SERVICE_AREA_DISPLAY_NAMES_WITH_PENDING;

const RELATED_SERVICES = [
  { label: 'Property Cleanup', to: '/property-cleanup' },
  { label: 'Estate Cleanouts', to: '/estate-cleanouts' },
  { label: 'Hoarder Cleanouts', to: '/hoarder-cleanouts' },
  { label: 'Eviction Cleanouts', to: '/eviction-cleanouts' },
  { label: 'Landlord & Rental Cleanouts', to: '/landlord-rental-cleanouts' },
  { label: 'Foreclosure Cleanouts', to: '/foreclosure-cleanouts' },
  { label: 'Items We Remove', to: '/what-we-take' },
  { label: 'Projects', to: '/projects' },
];

export default function PropertyCleanouts() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <>
      <PageMeta
        title="Property Cleanouts in Middle Tennessee | Contents Removal | Reinhart"
        description="Insured property cleanouts in Middle Tennessee from Goodlettsville. Remove unwanted contents from homes, estates, rentals, and hoarded properties. Call 615-200-0064."
        path="/property-cleanouts"
        jsonLd={compactJsonLd([
          buildWebPageSchema({
            path: '/property-cleanouts',
            name: 'Property Cleanouts in Middle Tennessee | Contents Removal | Reinhart',
            description:
              'Insured property cleanouts in Middle Tennessee from Goodlettsville. Remove unwanted contents from homes, estates, rentals, and hoarded properties. Call 615-200-0064.',
            mainEntityId: 'https://www.reinharthauling.com/property-cleanouts#service',
          }),
          buildServiceSchema({
            name: 'Property Cleanouts',
            description:
              'Insured property cleanouts in Middle Tennessee from Goodlettsville. Remove unwanted contents from homes, estates, rentals, and hoarded properties. Call 615-200-0064.',
            path: '/property-cleanouts',
            serviceType: 'Property Cleanouts',
          }),
          buildFAQPageSchema(PROPERTY_FAQS),
          buildBreadcrumbListSchema([
            { label: 'Home', to: '/' },
            { label: 'Residential Services', to: '/residential-property-services' },
            { label: 'Property Cleanouts' },
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
                PROPERTY CLEANOUTS
              </span>
              <h1 className="font-display text-5xl lg:text-7xl font-bold leading-[0.95] tracking-tighter text-brand-navy mb-8">
                Property Cleanouts in <br />
                <span className="text-brand-orange">Middle Tennessee</span>
              </h1>
              <p className="text-lg lg:text-xl text-slate-600 leading-relaxed mb-4 max-w-2xl">
                Reinhart Hauling &amp; Cleanouts provides insured property cleanouts from Goodlettsville across Middle
                Tennessee. We remove unwanted contents from homes, estates, rentals, garages, and hoarded
                properties—furniture, appliances, mattresses, household clutter, and estate leftovers—so the structure is
                ready for cleaning, repairs, listing, or occupancy.
              </p>

              <p className="text-lg lg:text-xl text-slate-600 leading-relaxed mb-6 max-w-2xl">
                Need a broader interior and exterior property reset for investors, abandoned properties, renovation prep,
                or substantial debris cleanup? See{' '}
                <Link to="/property-cleanup" className="text-brand-orange hover:text-brand-navy transition-colors">
                  property cleanup
                </Link>
                .
              </p>

              <p className="text-base text-slate-600 leading-relaxed mb-8 max-w-2xl">
                Related:{' '}
                <Link to="/estate-cleanouts" className="text-brand-orange hover:text-brand-navy transition-colors">
                  estate cleanouts
                </Link>
                ,{' '}
                <Link to="/hoarder-cleanouts" className="text-brand-orange hover:text-brand-navy transition-colors">
                  hoarder cleanouts
                </Link>
                ,{' '}
                <Link to="/eviction-cleanouts" className="text-brand-orange hover:text-brand-navy transition-colors">
                  eviction cleanouts
                </Link>
                ,{' '}
                <Link
                  to="/landlord-rental-cleanouts"
                  className="text-brand-orange hover:text-brand-navy transition-colors"
                >
                  rental cleanouts
                </Link>
                , and{' '}
                <Link to="/what-we-take" className="text-brand-orange hover:text-brand-navy transition-colors">
                  items we remove
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
              Property cleanout support for people and teams managing larger, more involved clearing work across
              Middle Tennessee.
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
            <h2 className="font-display text-4xl font-bold text-brand-navy mb-4">Types of Property Cleanouts</h2>
            <p className="text-slate-600 max-w-3xl leading-relaxed">
              Structured cleanout support for full homes, outbuildings, rentals, and properties that need more
              than a single-room clear.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {CLEANOUT_TYPES.map((type) => (
              <div
                key={type.title}
                className="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm flex h-full flex-col"
              >
                <h3 className="font-display text-xl font-bold text-brand-navy mb-2">{type.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed flex-1">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <h2 className="font-display text-4xl font-bold text-brand-navy mb-4">Common Situations We Help With</h2>
            <p className="text-slate-600 max-w-3xl leading-relaxed">
              Practical support when a property feels stuck—whether the challenge is volume, timing, or not knowing
              where to start.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMMON_SITUATIONS.map((situation) => (
              <div
                key={situation.title}
                className="rounded-3xl border border-slate-200 bg-slate-50/60 p-6 flex flex-col gap-2"
              >
                <h3 className="font-display text-lg font-bold text-brand-navy leading-snug">{situation.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{situation.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <CleanoutProcess
          title="How Our Property Cleanout Process Works"
          subtitle="Photos work well for smaller scopes. Walkthroughs help on larger properties so quoting, labor, and disposal planning stay accurate."
          className="pt-0 pb-0 bg-slate-50"
          steps={PROPERTY_PROCESS_STEPS}
          showEyebrow={false}
        />
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-navy mb-4">
              Recent Property Cleanout Projects
            </h2>
            <p className="text-slate-600 max-w-3xl leading-relaxed">
              Real before-and-after work from property cleanouts across Middle Tennessee.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {PROPERTY_PROJECTS.map((project) => (
              <motion.div
                key={project.title}
                whileHover={{ y: -6 }}
                className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col gap-6"
              >
                <div>
                  <h3 className="font-display text-xl font-bold text-brand-navy mb-1">{project.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{project.meta}</p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 aspect-[4/3]">
                    <img
                      src={project.beforeSrc}
                      alt={`${project.title} — before`}
                      className="w-full h-full object-cover object-center"
                      width={800}
                      height={600}
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute bottom-2 left-2 bg-brand-orange text-white px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm">
                      Before
                    </div>
                  </div>
                  <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 aspect-[4/3]">
                    <img
                      src={project.afterSrc}
                      alt={`${project.title} — after`}
                      className="w-full h-full object-cover object-center"
                      width={800}
                      height={600}
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute bottom-2 right-2 bg-white text-brand-navy px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm">
                      After
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold text-brand-navy mb-4">Property Cleanout FAQs</h2>
            <p className="text-slate-600 leading-relaxed">
              Straight answers about scope, scheduling, and how we handle larger property work.
            </p>
          </div>

          <div className="space-y-3">
            {PROPERTY_FAQS.map((item, index) => {
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
              Property cleanouts across Middle Tennessee, including Goodlettsville, Hendersonville, Gallatin, White
              House, Nashville and nearby communities, and surrounding service areas.
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
              Specialized cleanout lanes that often pair with full-property work.
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
