import React, { useState } from 'react';
import { SERVICE_AREA_DISPLAY_NAMES_WITH_PENDING, SERVICE_AREAS_FAQ_ANSWER } from '../data/business.ts';
import { buildFAQPageSchema } from '../utils/schema.ts';
import { motion } from 'motion/react';
import { CheckCircle2, ChevronDown, ClipboardCheck, MessageSquare, Phone, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageCTAs from '../components/PageCTAs.tsx';
import { getCommercialRelatedServices } from '../data/commercialNavigation.ts';
import CleanoutProcess from '../components/CleanoutProcess.tsx';
import { projectImages } from '../data/projectImages';
import PageMeta from '../components/PageMeta.tsx';

const COMMERCIAL_SERVICES = [
  {
    title: 'Office Cleanouts',
    desc: 'Remove cubicles, workstations, desks, chairs, conference tables, filing cabinets, storage room contents, and general office clutter. Disassembly available when needed.',
  },
  {
    title: 'Office Furniture Removal',
    desc: 'Haul away unwanted desks, chairs, workstations, lobby furniture, filing cabinets, shelving, breakroom items, and office systems.',
  },
  {
    title: 'Retail Space Cleanouts',
    desc: 'Clear out retail fixtures, displays, shelving, backroom contents, boxes, and leftover items from store closures or remodels.',
  },
  {
    title: 'Warehouse Cleanouts',
    desc: 'Remove pallets, shelving, inventory, packaging materials, equipment, and unwanted warehouse debris.',
  },
  {
    title: 'Commercial Property Cleanouts',
    desc: 'Help property managers, landlords, and owners clear abandoned items, tenant leftovers, and debris from commercial spaces.',
  },
  {
    title: 'Office Relocation & Commercial Load Outs',
    desc: 'Support for office moves, downsizing, commercial load outs, furniture removal, office disassembly, and leftover items during relocation projects.',
  },
];

const COMMERCIAL_PROJECT_PHOTOS = [
  {
    src: projectImages.commercialCleanouts.downtownNashville.cubicles,
    alt: 'Commercial office cubicle removal Nashville TN',
    caption: 'Cubicle removal and office furniture cleanout project.',
  },
  {
    src: projectImages.commercialCleanouts.downtownNashville.executiveFurniture,
    alt: 'Executive office furniture removal Nashville TN',
    caption: 'Executive office furniture removal and office cleanout services.',
  },
  {
    src: projectImages.commercialCleanouts.downtownNashville.fileCabinets,
    alt: 'Filing cabinet removal Nashville TN',
    caption: 'Filing cabinet and office equipment removal project.',
  },
];

const ITEMS_REMOVED = [
  'Desks',
  'Office chairs',
  'Cubicles',
  'Filing cabinets',
  'Conference tables',
  'Shelving',
  'Retail fixtures',
  'Warehouse items',
  'Pallets',
  'Storage room contents',
  'Electronics',
  'Breakroom items',
  'Boxes and packaging',
  'General commercial junk',
];

const WHY_BUSINESSES_CHOOSE = [
  {
    title: 'Reliable Scheduling',
    desc: 'We show up when scheduled and communicate clearly from quote to completion.',
  },
  {
    title: 'Fully Insured',
    desc: 'Professional service for commercial properties, business owners, landlords, and property managers.',
  },
  {
    title: 'Fast Turnaround',
    desc: 'Many commercial cleanouts can be completed same-day or next-day depending on scope and availability.',
  },
  {
    title: 'Responsible Disposal',
    desc: 'When possible, usable items are donated, recyclable materials are recycled, and debris is disposed of properly.',
  },
];

const COMMERCIAL_PROCESS_STEPS = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Request an Estimate',
    description: 'Share project details or call to describe the scope so we can understand volume and timing.',
    cta: { label: 'Request an Estimate →', estimate: true },
  },
  {
    number: '02',
    icon: ClipboardCheck,
    title: 'Get A Clear Quote',
    description: 'We provide straightforward pricing based on volume, labor, access, and disposal needs.',
    cta: { href: 'tel:+16152000064', label: 'Call Now →' },
  },
  {
    number: '03',
    icon: Truck,
    title: 'We Handle The Cleanout',
    description: 'Our crew loads, hauls, sorts, donates, recycles, and disposes of the unwanted items.',
    cta: { href: 'tel:+16152000064', label: 'Call Now →' },
  },
];

const COMMERCIAL_FAQS = [
  {
    question: 'Do you provide commercial cleanouts in Nashville?',
    answer:
      'Yes. We provide commercial cleanout services for offices, retail spaces, warehouses, storage areas, and commercial properties throughout Nashville and Middle Tennessee.',
  },
  {
    question: 'Can you remove office furniture and cubicles?',
    answer:
      'Yes. We remove desks, chairs, cubicles, filing cabinets, conference tables, shelving, and other office furniture.',
  },
  {
    question: 'Do you disassemble cubicles and office furniture?',
    answer:
      'Yes. We can disassemble cubicles, workstations, desks, conference tables, shelving systems, and other office furniture as part of a commercial cleanout or office load out project.',
  },
  {
    question: 'Do you remove filing cabinets and office equipment?',
    answer:
      'Yes. We remove filing cabinets, desks, workstations, office furniture, shelving, conference tables, electronics, and other commercial office contents as part of office cleanouts and commercial load outs.',
  },
  {
    question: 'Do you work with property managers and landlords?',
    answer:
      'Yes. We work with property managers, landlords, business owners, real estate professionals, and commercial tenants.',
  },
  {
    question: 'Can you clean out a business after hours?',
    answer:
      'Depending on scheduling and project scope, after-hours or flexible scheduling may be available for commercial cleanouts.',
  },
  {
    question: 'Do you donate or recycle usable items?',
    answer:
      'When possible, usable items are donated and recyclable materials are recycled. Items that cannot be reused are disposed of properly.',
  },
  {
    question: 'How much does a commercial cleanout cost?',
    answer:
      'Pricing depends on the amount of material, labor required, access, item weight, and disposal needs. Requesting an estimate with project details is the best way to receive upfront pricing.',
  },
  {
    question: 'What areas do you serve?',
    answer: SERVICE_AREAS_FAQ_ANSWER,
  },
];

const SERVICE_AREAS = SERVICE_AREA_DISPLAY_NAMES_WITH_PENDING;

const RELATED_SERVICES = getCommercialRelatedServices('/commercial-cleanouts');

export default function CommercialCleanouts() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <>
      <PageMeta
        title={`Commercial Cleanouts Nashville TN | Reinhart Hauling & Cleanouts`}
        description={`Commercial cleanout services in Nashville and Middle Tennessee. We remove office furniture, cubicles, shelving, retail fixtures, warehouse items, storage room contents, and unwanted commercial debris.`}
        path={`/commercial-cleanouts`}
        jsonLd={buildFAQPageSchema(COMMERCIAL_FAQS)}
      />

      <section className="relative scroll-mt-32 pt-32 pb-16 lg:pt-48 lg:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-4 py-1.5 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-bold uppercase tracking-widest mb-6">
                  COMMERCIAL CLEANOUTS
                </span>
                <h1 className="font-display text-[3.4rem] lg:text-[5rem] font-bold leading-[0.95] tracking-tighter text-brand-navy mb-8">
                  Commercial Cleanouts in Nashville, TN
                </h1>
                <p className="text-lg lg:text-xl text-slate-600 leading-relaxed mb-6 max-w-2xl">
                  Fast, professional commercial cleanout services for offices, warehouses, retail spaces, storage
                  areas, and commercial properties across Nashville and Middle Tennessee. We handle office furniture
                  removal, cubicle removal, office disassembly, commercial load outs, and general business cleanout
                  projects.
                </p>

                <PageCTAs layout="hero" />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative h-[300px] sm:h-[380px] lg:h-[480px] rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/10 ring-1 ring-slate-900/5 border border-slate-200/80 bg-slate-900"
            >
              <img
                src={projectImages.commercialCleanouts.downtownNashville.cubicles}
                alt="Commercial office cubicle removal Nashville TN"
                className="h-full w-full object-cover object-[42%_50%] sm:object-[45%_50%] lg:object-center"
                width={1600}
                height={1200}
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="scroll-mt-32 py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-navy mb-6">
              Commercial Cleanout Services for Business Spaces
            </h2>
            <p className="text-slate-600 max-w-3xl leading-relaxed">
              Reinhart Hauling &amp; Cleanouts helps business owners, property managers, landlords, real estate
              professionals, and commercial tenants clear unwanted items quickly and professionally. Whether you are
              clearing out an office, preparing a commercial space for a new tenant, removing old furniture, or
              cleaning out storage areas, we handle loading, hauling, donation, recycling, disposal, and commercial
              load outs.
            </p>
            <ul className="mt-6 grid sm:grid-cols-3 gap-3 max-w-3xl" role="list">
              {[
                'Office Furniture Removal',
                'Cubicle & Workstation Removal',
                'Commercial Load Outs & Tenant Turnovers',
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-sm font-semibold text-brand-navy"
                >
                  <CheckCircle2 size={16} className="text-brand-orange shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="scroll-mt-32 py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-navy mb-6">
              Recent Commercial Office Project
            </h2>
            <p className="text-slate-600 max-w-3xl leading-relaxed mb-4">
              These photos are from a recent commercial office project involving cubicles, workstations, executive
              office furniture, filing cabinets, and general office contents. Projects like these often require
              careful planning, loading, hauling, office furniture removal, cubicle removal, and occasional
              disassembly before the space can be prepared for its next use.
            </p>
            <p className="text-slate-600 max-w-3xl leading-relaxed">
              We work with business owners, property managers, landlords, office tenants, and commercial property
              teams throughout Nashville and Middle Tennessee.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {COMMERCIAL_PROJECT_PHOTOS.map((photo) => (
              <div
                key={photo.caption}
                className="bg-white p-5 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 flex h-full flex-col gap-4"
              >
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 aspect-[4/3]">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="h-full w-full object-cover object-center"
                    loading="lazy"
                  />
                </div>
                <p className="text-sm font-semibold text-brand-navy leading-relaxed">{photo.caption}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-slate-600 max-w-3xl leading-relaxed">
            Projects may include cubicle removal, workstation disassembly, filing cabinet removal, office furniture
            removal, storage room cleanouts, and complete commercial load outs.
          </p>
        </div>
      </section>

      <section className="scroll-mt-32 py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <h2 className="font-display text-4xl font-bold text-brand-navy mb-4">
              Commercial Cleanout Services We Provide
            </h2>
            <p className="text-slate-600 max-w-3xl leading-relaxed">
              Cleanout support for offices, retail spaces, warehouses, and commercial properties that need unwanted
              items removed without confusion.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {COMMERCIAL_SERVICES.map((service) => (
              <motion.div
                key={service.title}
                whileHover={{ y: -8 }}
                className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 flex h-full flex-col gap-5"
              >
                <div className="w-10 h-10 bg-brand-navy/5 rounded-xl flex items-center justify-center text-brand-orange">
                  <CheckCircle2 size={18} />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-bold text-brand-navy mb-2">{service.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="scroll-mt-32 py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="font-display text-4xl font-bold text-brand-navy mb-4">What We Remove</h2>
            <p className="text-slate-600 max-w-3xl leading-relaxed">
              Common office, retail, warehouse, and business cleanout items we can load and haul away.
            </p>
          </div>

          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4" role="list">
            {ITEMS_REMOVED.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3.5 text-center text-sm font-semibold text-brand-navy"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="scroll-mt-32 py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <h2 className="font-display text-4xl font-bold text-brand-navy mb-4">
              Why Businesses Choose Reinhart Hauling
            </h2>
            <p className="text-slate-600 max-w-3xl leading-relaxed">
              Commercial work needs clear communication, reliable scheduling, and proper handling from start to
              finish.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {WHY_BUSINESSES_CHOOSE.map((item) => (
              <div
                key={item.title}
                className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-7 md:p-8 shadow-sm"
              >
                <div className="mb-5 w-12 h-12 bg-brand-navy/5 rounded-xl flex items-center justify-center text-brand-orange">
                  <CheckCircle2 size={22} />
                </div>
                <h3 className="font-display text-xl font-bold text-brand-navy mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed flex-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CleanoutProcess
        title="How Our Commercial Cleanout Process Works"
        subtitle="A straightforward workflow for offices, retail spaces, warehouses, storage rooms, and commercial properties."
        className="scroll-mt-32 py-24 bg-white"
        steps={COMMERCIAL_PROCESS_STEPS}
      />

      <section className="scroll-mt-32 py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="font-display text-4xl font-bold text-brand-navy mb-4">
              Serving Nashville and Middle Tennessee Businesses
            </h2>
            <p className="text-slate-600 max-w-3xl leading-relaxed">
              We provide commercial cleanout services throughout Nashville and surrounding Middle Tennessee
              communities, including Goodlettsville, Hendersonville, Gallatin, Springfield, White House, Greenbrier,
              Portland, East Nashville, and nearby areas.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
            {SERVICE_AREAS.map((area) => (
              <div
                key={area}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-center text-sm font-semibold text-brand-navy shadow-sm"
              >
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="scroll-mt-32 py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold text-brand-navy mb-4">Commercial Cleanout FAQs</h2>
            <p className="text-slate-600 leading-relaxed">
              Practical answers for offices, retailers, warehouses, property managers, and commercial tenants.
            </p>
          </div>

          <div className="space-y-3">
            {COMMERCIAL_FAQS.map((item, index) => {
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

      <section className="scroll-mt-32 py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10">
            <h2 className="font-display text-3xl font-bold text-brand-navy mb-3">Related Services</h2>
            <p className="text-slate-500 max-w-3xl">
              Additional cleanout services for property transitions, storage areas, evictions, estates, and garages.
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
    </>
  );
}
