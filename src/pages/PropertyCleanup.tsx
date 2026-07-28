import React, { useState } from 'react';
import { SERVICE_AREA_DISPLAY_NAMES_WITH_PENDING } from '../data/business.ts';
import { buildFAQPageSchema, buildBreadcrumbListSchema, buildServiceSchema, buildWebPageSchema, compactJsonLd } from '../utils/schema.ts';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  HardHat,
  Home,
  KeyRound,
  MessageSquare,
  Package,
  ShieldCheck,
  Star,
  TrendingUp,
  Truck,
  Users,
  Warehouse,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import CleanoutProcess from '../components/CleanoutProcess.tsx';
import PageCTAs from '../components/PageCTAs.tsx';
import ServiceBottomCTA from '../components/ServiceBottomCTA.tsx';
import PageMeta from '../components/PageMeta.tsx';

const PROJECT_BASE = '/images/projects/2026%20Projects/2026-06_Investor-Property-Cleanup_Gallatin';

const projectImage = (folder: string, file: string) => `${PROJECT_BASE}/${folder}/${file}`;

const HERO_IMAGE = projectImage('04_Hero', 'hero-general-property-after-01%20copy.jpeg');

const COMMON_PROJECTS = [
  { icon: Home, title: 'Rental Property Cleanup' },
  { icon: KeyRound, title: 'Foreclosure Cleanup' },
  { icon: Users, title: 'Estate Property Cleanup' },
  { icon: TrendingUp, title: 'Investor Property Cleanup' },
  { icon: Truck, title: 'Move-Out Cleanup' },
  { icon: Warehouse, title: 'Garage Cleanup' },
  { icon: Package, title: 'Storage Unit Cleanup' },
  { icon: Building2, title: 'Commercial Property Cleanup' },
  { icon: HardHat, title: 'Construction Debris Cleanup' },
];

const WHO_WE_HELP = [
  { title: 'Homeowners', desc: 'Property cleanup when a home needs to be cleared, emptied, or reset for the next step.' },
  { title: 'Families', desc: 'Support during estate transitions, downsizing, and inherited property cleanup.' },
  { title: 'Landlords', desc: 'Rental property cleanup after move-outs, evictions, and difficult turnovers.' },
  { title: 'Property Managers', desc: 'Reliable cleanup support for units, turnovers, and problem properties.' },
  { title: 'Real Estate Investors', desc: 'Investment property cleanup, renovation prep, and debris removal between phases.' },
  { title: 'Realtors', desc: 'Listing prep, seller prep, and last-minute property cleanup before showings.' },
  { title: 'Contractors', desc: 'Jobsite debris removal, material haul-away, and cleanup support during projects.' },
  { title: 'Commercial Property Owners', desc: 'Commercial property cleanup for offices, warehouses, and facility transitions.' },
];

const ITEMS_REMOVED = [
  'Furniture',
  'Appliances',
  'Household Items',
  'Boxes',
  'Trash',
  'Construction Debris',
  'Yard Debris',
  'Sheds',
  'Deck Materials',
  'Cabinets',
  'Drywall',
  'Flooring',
  'Fencing',
  'Hot Tubs',
  'Office Furniture',
  'Warehouse Materials',
  'Storage Unit Contents',
  'General Property Debris',
];

const WHY_CHOOSE = [
  {
    title: 'Professional Communication',
    desc: 'Clear updates from first contact through completion so you always know where the project stands.',
  },
  {
    title: 'Transparent Pricing',
    desc: 'Upfront quotes based on scope, access, labor, and disposal—not vague estimates after the fact.',
  },
  {
    title: 'Real Project Experience',
    desc: 'Every photo on this site comes from actual Reinhart work across Middle Tennessee.',
  },
  {
    title: 'Prepared Equipment',
    desc: 'Trailers, tools, and crew capacity matched to the property—not a one-size-fits-all approach.',
  },
  {
    title: 'Fully Insured',
    desc: 'Professional property cleanup backed by proper insurance for residential and commercial work.',
  },
  {
    title: 'Respect For Your Property',
    desc: 'Organized execution that protects access points, neighbors, and the next phase of your project.',
  },
];

const PROCESS_STEPS = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Request an Estimate or Schedule a Walkthrough',
    description:
      'Submit project details for smaller property cleanup scopes. Larger or more involved properties benefit from a walkthrough for accurate planning.',
    cta: { label: 'Request an Estimate →', estimate: true },
  },
  {
    number: '02',
    icon: ClipboardCheck,
    title: 'Scope Review & Scheduling Plan',
    description:
      'We review property access, debris volume, labor needs, disposal requirements, and timing so expectations are clear before work begins.',
    cta: { href: 'tel:+16152000064', label: 'Call Now →' },
  },
  {
    number: '03',
    icon: Truck,
    title: 'Property Cleanup & Next-Phase Readiness',
    description:
      'Our crew clears the property, hauls debris, handles disposal, and leaves the space ready for renovation, sale, occupancy, or demolition prep.',
    cta: { href: 'tel:+16152000064', label: 'Call Now →' },
  },
];

const PROJECT_GALLERY = [
  {
    src: projectImage('01_Before', 'general-property-before-02.jpeg'),
    alt: 'Investment property before cleanup in Gallatin TN',
    caption: 'Property debris before cleanup began.',
  },
  {
    src: projectImage('03_After', 'general-property-after-01.jpeg'),
    alt: 'Investment property after cleanup in Gallatin TN',
    caption: 'Same area after property cleanup and debris removal.',
  },
  {
    src: projectImage('06_Comparisons', 'fence-demo-before-after-comparison-01.jpg'),
    alt: 'Fence demolition before and after comparison',
    caption: 'Fence demolition and exterior cleanup comparison.',
  },
  {
    src: projectImage('02_During', 'fence-demo-during-01.jpeg'),
    alt: 'Fence demolition in progress during property cleanup',
    caption: 'Fence demo and debris removal in progress.',
  },
  {
    src: projectImage('02_During', 'trailer-full-load-during-01.jpeg'),
    alt: 'Trailer loaded during investor property cleanup',
    caption: 'Bulky items and debris loaded for disposal.',
  },
  {
    src: projectImage('03_After', 'dumpster-access-cleared-01.jpeg'),
    alt: 'Dumpster access cleared after property cleanup',
    caption: 'Dumpster staging area cleared for continued work.',
  },
];

const FAQS = [
  {
    question: 'What is property cleanup?',
    answer:
      'Property cleanup is broader interior and exterior reset work for investors, landlords, abandoned properties, renovation preparation, property sales, and substantial debris cleanup—beyond contents removal alone.',
  },
  {
    question: 'How is property cleanup different from a property cleanout?',
    answer:
      'Property cleanouts focus on removing unwanted contents from homes, estates, rentals, and similar structures. Property cleanup covers broader property-reset scopes such as exterior debris, renovation materials, vacant or abandoned properties, and investor preparation. For contents-focused cleanouts, see our Property Cleanouts page.',
  },
  {
    question: 'What is included in property cleanup?',
    answer:
      'Property cleanup typically includes unwanted debris, bulky items, yard clutter, construction materials, and general property debris as part of a broader reset. Scope depends on the property—request an estimate or schedule a walkthrough and we will outline exactly what is included.',
  },
  {
    question: 'Do you clean entire properties?',
    answer:
      'Yes. We handle whole-property cleanup for rentals, estates, foreclosures, investor properties, and commercial spaces. We also take on focused scopes when only part of a property needs attention.',
  },
  {
    question: 'Can you remove construction debris?',
    answer:
      'Yes. Construction debris, renovation materials, fencing, deck materials, drywall, flooring, and related property debris removal are common parts of our property cleanup services.',
  },
  {
    question: 'Can you work with investors?',
    answer:
      'Yes. We regularly support real estate investors with investment property cleanup, renovation prep, foreclosure cleanouts, and debris removal between project phases.',
  },
  {
    question: 'Do you work with property managers?',
    answer:
      'Yes. Property managers use us for rental property cleanup, turnover support, eviction cleanouts, and recurring cleanup on problem units.',
  },
  {
    question: 'Can demolition be included?',
    answer:
      'Selective demolition—such as fence removal, shed demolition, or interior tear-out debris—can often be included when it supports the broader property cleanup or renovation prep scope.',
  },
  {
    question: 'How is pricing determined?',
    answer:
      'Pricing is based on volume, labor, access, item weight, disposal needs, and project complexity. Requesting an estimate with project details is the best way to receive upfront pricing.',
  },
  {
    question: 'Do I need to be present?',
    answer:
      'Not always. Many property cleanup projects can be completed with remote coordination as long as access, scope, and disposal expectations are confirmed in advance.',
  },
];

const SERVICE_AREAS = SERVICE_AREA_DISPLAY_NAMES_WITH_PENDING;

const RELATED_SERVICES = [
  { label: 'Estate Cleanouts', to: '/estate-cleanouts' },
  { label: 'Garage Cleanouts', to: '/garage-cleanouts' },
  { label: 'Commercial Cleanouts', to: '/commercial-cleanouts' },
  { label: 'Junk Removal', to: '/junk-removal' },
  { label: 'Interior Demolition', to: '/interior-demolition' },
  { label: 'Construction Cleanup', to: '/construction-cleanup' },
  { label: 'Foreclosure Cleanouts', to: '/foreclosure-cleanouts' },
  { label: 'Storage Unit Cleanouts', to: '/storage-unit-cleanouts' },
];

export default function PropertyCleanup() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <>
      <PageMeta
        title="Property Cleanup | Investor & Renovation Property Reset | Middle Tennessee"
        description="Property cleanup for investors, landlords, abandoned properties, renovation preparation, property sales, and substantial debris cleanup across Middle Tennessee. Call 615-200-0064."
        path="/property-cleanup"
        jsonLd={compactJsonLd([
          buildWebPageSchema({
            path: '/property-cleanup',
            name: 'Property Cleanup | Investor & Renovation Property Reset | Middle Tennessee',
            description:
              'Property cleanup for investors, landlords, abandoned properties, renovation preparation, property sales, and substantial debris cleanup across Middle Tennessee. Call 615-200-0064.',
            mainEntityId: 'https://www.reinharthauling.com/property-cleanup#service',
          }),
          buildServiceSchema({
            name: 'Property Cleanup',
            description:
              'Property cleanup for investors, landlords, abandoned properties, renovation preparation, property sales, and substantial debris cleanup across Middle Tennessee. Call 615-200-0064.',
            path: '/property-cleanup',
            serviceType: 'Property Cleanup',
          }),
          buildFAQPageSchema(FAQS),
          buildBreadcrumbListSchema([
            { label: 'Home', to: '/' },
            { label: 'Residential Services', to: '/residential-property-services' },
            { label: 'Property Cleanup' },
          ]),
        ])}
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
                  PROPERTY CLEANUP
                </span>
                <h1 className="font-display text-[3.4rem] lg:text-[5rem] font-bold leading-[0.95] tracking-tighter text-brand-navy mb-6">
                  Property Cleanup for Investors &amp; Property Resets
                </h1>
                <p className="text-xl lg:text-2xl text-slate-700 leading-relaxed mb-5 max-w-2xl font-medium">
                  Broader interior and exterior property reset work for sales, renovations, abandoned properties, and
                  substantial debris cleanup.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl">
                  Property cleanup helps investors, landlords, and property teams reset properties for renovation, sale,
                  or the next occupancy phase—including exterior debris, renovation materials, and difficult vacant
                  properties. Need whole-house contents removal from a home, estate, or rental? See our{' '}
                  <Link to="/property-cleanouts" className="text-brand-orange hover:text-brand-navy transition-colors">
                    property cleanouts
                  </Link>{' '}
                  service.
                </p>

                <PageCTAs layout="hero" className="mb-7" />

                <div className="flex flex-wrap gap-3 text-sm font-bold text-brand-navy">
                  {['Licensed & Insured', 'Upfront Pricing', 'Fast Scheduling', 'Real Project Photos'].map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm"
                    >
                      <CheckCircle2 size={16} className="text-brand-orange" />
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative h-[300px] sm:h-[380px] lg:h-[480px] rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/10 ring-1 ring-slate-900/5 border border-slate-200/80 bg-slate-900"
            >
              <img
                src={HERO_IMAGE}
                alt="Investment property after professional cleanup in Gallatin TN"
                className="h-full w-full object-cover object-center"
                width={1600}
                height={1200}
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="scroll-mt-32 py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-navy mb-6">
              Property Cleanup That Moves Projects Forward
            </h2>
            <div className="space-y-5 text-lg text-slate-600 leading-relaxed">
              <p>Every property is different.</p>
              <p>Some need years of accumulated belongings removed.</p>
              <p>Others need renovation debris cleared.</p>
              <p>Some need an estate cleaned out.</p>
              <p>Others simply need to be emptied and prepared for contractors or new occupants.</p>
              <p>
                Rather than offering one-size-fits-all hauling, we assess the property, develop an organized plan, and
                complete the work efficiently while leaving the space ready for its next phase. As a property cleanup
                company serving Middle Tennessee, we handle investor property cleanup, abandoned-property clearing,
                renovation preparation, exterior debris cleanup, and substantial property resets—with contents-focused
                cleanouts available through our property cleanouts service when that is the primary need.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="scroll-mt-32 py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <h2 className="font-display text-4xl font-bold text-brand-navy mb-4">Common Property Cleanup Projects</h2>
            <p className="text-slate-600 max-w-3xl leading-relaxed">
              Property cleanup services for the project types we handle most often across Middle Tennessee.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMMON_PROJECTS.map((project) => (
              <motion.div
                key={project.title}
                whileHover={{ y: -6 }}
                className="bg-white p-6 rounded-3xl shadow-lg shadow-slate-200/40 border border-slate-100 flex items-start gap-4"
              >
                <div className="w-11 h-11 bg-brand-navy/5 rounded-xl flex items-center justify-center text-brand-orange shrink-0">
                  <project.icon size={20} />
                </div>
                <h3 className="font-display text-lg font-bold text-brand-navy leading-snug pt-2">{project.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="scroll-mt-32 py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <h2 className="font-display text-4xl font-bold text-brand-navy mb-4">Who We Help</h2>
            <p className="text-slate-600 max-w-3xl leading-relaxed">
              Property cleanup support for homeowners, families, property professionals, and businesses across Middle
              Tennessee.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHO_WE_HELP.map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -6 }}
                className="bg-white p-6 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 flex h-full flex-col gap-4"
              >
                <div className="w-10 h-10 bg-brand-navy/5 rounded-xl flex items-center justify-center text-brand-orange">
                  <CheckCircle2 size={18} />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-lg font-bold text-brand-navy mb-2">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="scroll-mt-32 py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="font-display text-4xl font-bold text-brand-navy mb-4">What Can Be Removed</h2>
            <p className="text-slate-600 max-w-3xl leading-relaxed">
              Property debris removal and contents hauling for residential, rental, commercial, and investment properties.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ITEMS_REMOVED.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm"
              >
                <CheckCircle2 size={18} className="text-brand-orange shrink-0" />
                <span className="font-semibold text-brand-navy text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="scroll-mt-32 py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-navy mb-4">
              Recent Property Cleanup Project
            </h2>
            <p className="text-slate-600 max-w-3xl leading-relaxed">
              Documented investment property cleanup in Gallatin—fence demolition, debris removal, and property
              preparation for renovation.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
                <h3 className="font-display text-2xl font-bold text-brand-navy mb-4">Project Summary</h3>
                <dl className="space-y-4 text-sm">
                  <div>
                    <dt className="font-bold text-brand-navy mb-1">Property</dt>
                    <dd className="text-slate-600">Investment property</dd>
                  </div>
                  <div>
                    <dt className="font-bold text-brand-navy mb-2">Scope included</dt>
                    <dd className="text-slate-600">
                      <ul className="space-y-1.5" role="list">
                        {[
                          'Fence demolition',
                          'Construction debris',
                          'Bulky items',
                          'Old doors',
                          'Sand filter removal',
                          'General property cleanup',
                          'Dumpster staging',
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <CheckCircle2 size={14} className="mt-0.5 text-brand-orange shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                  <div>
                    <dt className="font-bold text-brand-navy mb-1">Outcome</dt>
                    <dd className="text-slate-600">Property cleared and ready for renovation.</dd>
                  </div>
                </dl>
              </div>

              <Link
                to="/projects/investor-property-cleanup-gallatin"
                className="inline-flex items-center gap-2 font-bold text-brand-navy hover:text-brand-orange transition-colors"
              >
                View Full Project
                <ArrowRight size={18} className="text-brand-orange" />
              </Link>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 aspect-[4/3]">
                  <img
                    src={projectImage('01_Before', 'general-property-before-01.jpeg')}
                    alt="Investment property before cleanup"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 left-2 bg-brand-orange text-white px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                    Before
                  </div>
                </div>
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 aspect-[4/3]">
                  <img
                    src={projectImage('03_After', 'general-property-after-01.jpeg')}
                    alt="Investment property after cleanup"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 right-2 bg-white text-brand-navy px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                    After
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {PROJECT_GALLERY.slice(2).map((photo) => (
                  <div key={photo.src} className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-100">
                    <div className="aspect-[4/3]">
                      <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover" />
                    </div>
                    <p className="px-4 py-3 text-xs text-slate-500 leading-relaxed bg-white">{photo.caption}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="scroll-mt-32 py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <h2 className="font-display text-4xl font-bold text-brand-navy mb-4">Why Choose Reinhart</h2>
            <p className="text-slate-600 max-w-3xl leading-relaxed">
              A property cleanout company focused on organized execution, clear communication, and property preparation
              that keeps projects moving.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {WHY_CHOOSE.map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -6 }}
                className="bg-white p-7 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col gap-4"
              >
                <div className="w-11 h-11 bg-brand-navy/5 rounded-xl flex items-center justify-center text-brand-orange">
                  {item.title === 'Fully Insured' ? (
                    <ShieldCheck size={20} />
                  ) : item.title === 'Real Project Experience' ? (
                    <Star size={20} />
                  ) : (
                    <CheckCircle2 size={20} />
                  )}
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
        id="how-we-work"
        title="How Our Property Cleanup Process Works"
        subtitle="Photos work well for smaller scopes. Walkthroughs help on larger properties so quoting, labor, and disposal planning stay accurate."
        className="scroll-mt-32 py-24 bg-white"
        steps={PROCESS_STEPS}
        showEyebrow={false}
      />

      <section className="scroll-mt-32 py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold text-brand-navy mb-4">Property Cleanup FAQs</h2>
            <p className="text-slate-600 leading-relaxed">
              Straight answers about property cleanup services, scope, and scheduling.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((item, index) => {
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

      <section className="scroll-mt-32 py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="font-display text-4xl font-bold text-brand-navy mb-4">Areas We Serve</h2>
            <p className="text-slate-600 max-w-3xl leading-relaxed">
              Property cleanup services throughout Middle Tennessee, including the communities below and nearby areas.
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
        </div>
      </section>

      <section className="scroll-mt-32 py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10">
            <h2 className="font-display text-3xl font-bold text-brand-navy mb-3">Related Services</h2>
            <p className="text-slate-500 max-w-3xl">
              Additional property cleanup and cleanout services that often support the same project.
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

      <ServiceBottomCTA variant="dark" />
    </>
  );
}
