import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import {
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  Hammer,
  MessageSquare,
  Phone,
  ShieldCheck,
  Star,
  Truck,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import PageCTAs from '../components/PageCTAs.tsx';
import ServiceBottomCTA from '../components/ServiceBottomCTA.tsx';
import { getCommercialRelatedServices } from '../data/commercialNavigation.ts';
import { SITE_URL } from '../data/business.ts';
import { buildFAQPageSchema, buildServiceSchema } from '../utils/schema.ts';

const CANONICAL_PATH = '/contractor-project-support';
const OG_IMAGE = `${SITE_URL}/og/reinhart-cleanouts-og-v2.jpg?v=3`;

const PAGE_TITLE = 'Contractor Project Support | Commercial Construction Support | Middle Tennessee';
const META_DESCRIPTION =
  'Commercial project support including interior strip-outs, tenant improvement demolition, debris removal, property turnovers, and construction cleanup throughout Middle Tennessee.';

const HERO_IMAGE =
  '/images/projects/2026%20Projects/2026-06_Commercial-Office-Cleanout_Nashville/01_Before/cubicle-office-before-01.jpeg';


const WHO_WE_WORK_WITH = [
  'General Contractors',
  'Commercial Property Managers',
  'Tenant Improvement Contractors',
  'Retail Construction Companies',
  'Commercial Real Estate Firms',
  'Facility Managers',
  'Restoration Contractors',
  'Business Owners',
];

const PROJECT_SUPPORT_SERVICES: { title: string; to: string; description: string }[] = [
  {
    title: 'Commercial Interior Strip-Outs',
    to: '/commercial-interior-strip-outs',
    description: 'Selective tear-out and fixture removal before commercial renovation and TI work.',
  },
  {
    title: 'Tenant Improvement Demolition',
    to: '/tenant-improvement-demolition',
    description: 'Prior build-out removal that prepares suites for new tenant improvements.',
  },
  {
    title: 'Commercial Property Turnovers',
    to: '/commercial-property-turnovers',
    description: 'Clearing and transition support between commercial tenants and project phases.',
  },
  {
    title: 'Retail Decommissioning',
    to: '/retail-decommissioning',
    description: 'Fixture, inventory, and store contents removal during retail closures and remodels.',
  },
  {
    title: 'Office Load-Outs',
    to: '/office-load-outs',
    description: 'Office furniture, cubicles, and contents removed during decommissioning.',
  },
  {
    title: 'Construction Debris Removal',
    to: '/construction-cleanup',
    description: 'Jobsite debris, packaging, and leftover materials cleared from active projects.',
  },
  {
    title: 'White Box Preparation',
    to: '/white-box-preparation',
    description: 'Clearing tenant-specific build-out so spaces present cleanly for marketing or renovation.',
  },
  {
    title: 'Lease Surrender Preparation',
    to: '/lease-surrender-preparation',
    description: 'Load-out support aligned with lease-end deadlines and surrender requirements.',
  },
  {
    title: 'Selective Demolition',
    to: '/selective-demolition',
    description: 'Targeted removal of scheduled materials while protecting the rest of the property.',
  },
  {
    title: 'Material Hauling',
    to: '/construction-cleanup',
    description: 'Organized loading and haul-away of construction and renovation materials.',
  },
  {
    title: 'Dumpster Overflow Removal',
    to: '/construction-cleanup',
    description: 'Supplemental debris removal when dumpsters fill faster than the project schedule allows.',
  },
  {
    title: 'Final Project Cleanup',
    to: '/construction-cleanup',
    description: 'Last-phase cleanup so spaces are ready for inspection, turnover, or occupancy.',
  },
];

const TYPICAL_PROJECTS = [
  'Office renovations',
  'Retail stores',
  'Medical offices',
  'Restaurants',
  'Warehouses',
  'Industrial offices',
  'Commercial suites',
  'Shopping centers',
  'Banks',
  'Corporate offices',
  'Schools',
  'Hospital renovations',
];

const SUPPORT_PROCESS = [
  {
    number: '01',
    icon: ClipboardCheck,
    title: 'Walkthrough',
    description: 'Review the site, access, scope boundaries, and project timeline with your team.',
  },
  {
    number: '02',
    icon: MessageSquare,
    title: 'Scope Review',
    description: 'Confirm what is being removed, what stays protected, and how debris will be handled.',
  },
  {
    number: '03',
    icon: Hammer,
    title: 'Safe Removal',
    description: 'Controlled tear-out, strip-out, and load-out executed with property protection in mind.',
  },
  {
    number: '04',
    icon: Truck,
    title: 'Debris Hauling',
    description: 'Organized loading, hauling, and disposal so the jobsite stays clear for other trades.',
  },
  {
    number: '05',
    icon: MessageSquare,
    title: 'Daily Communication',
    description: 'Clear updates on progress, schedule changes, and handoff expectations.',
  },
  {
    number: '06',
    icon: CheckCircle2,
    title: 'Project Ready For Next Trade',
    description: 'The area is left prepared for framing, MEP, finishes, turnover, or occupancy.',
  },
];

const WHY_CONTRACTORS = [
  { title: 'Responsive communication', description: 'Direct updates when schedules shift and scopes evolve on active jobs.' },
  { title: 'Licensed & insured', description: 'Commercial project support backed by proper insurance and accountable execution.' },
  { title: 'Professional jobsite conduct', description: 'Crews that respect active construction environments and client expectations.' },
  { title: 'Reliable scheduling', description: 'Dependable mobilization aligned with contractor timelines and turnover deadlines.' },
  { title: 'Property protection', description: 'Defined scope boundaries so unaffected areas and finishes remain protected.' },
  { title: 'Clean jobsites', description: 'Organized staging and daily cleanup that keeps projects moving for other trades.' },
  { title: 'Commercial focused', description: 'Experience supporting office, retail, warehouse, and managed commercial properties.' },
  { title: 'Safety minded', description: 'Controlled removal practices suited to occupied buildings and active renovation work.' },
  { title: 'Locally owned', description: 'Middle Tennessee commercial support with regional project experience.' },
];

const relatedServices = getCommercialRelatedServices(CANONICAL_PATH);

const FAQS = [
  {
    question: 'What types of contractors do you support?',
    answer:
      'We regularly support general contractors, tenant improvement contractors, retail construction companies, restoration contractors, and commercial property teams throughout Middle Tennessee.',
  },
  {
    question: 'Do you perform structural or building demolition?',
    answer:
      'No. Reinhart provides selective interior strip-outs, tenant improvement demolition, debris removal, and project cleanup—not structural building demolition.',
  },
  {
    question: 'Can you support active renovation schedules?',
    answer:
      'Yes. We coordinate scope, access, and timing so tear-out, haul-away, and cleanup support the contractor schedule—not delay it.',
  },
  {
    question: 'What commercial project types do you handle?',
    answer:
      'Office renovations, retail remodels, medical offices, restaurants, warehouses, commercial suites, shopping centers, and property turnover projects are common scopes.',
  },
  {
    question: 'How do we start a project support request?',
    answer:
      'Text project photos, call to discuss scope, or request a walkthrough for larger commercial renovation and TI projects.',
  },
];

export default function ContractorProjectSupport() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const canonicalUrl = `${SITE_URL}${CANONICAL_PATH}`;

  const serviceSchema = buildServiceSchema({
    name: 'Contractor Project Support Services',
    description: META_DESCRIPTION,
    url: canonicalUrl,
    serviceType: 'Commercial Construction Project Support',
  });

  const faqSchema = buildFAQPageSchema(FAQS);

  return (
    <>
      <Helmet>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={META_DESCRIPTION} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={META_DESCRIPTION} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_TITLE} />
        <meta name="twitter:description" content={META_DESCRIPTION} />
        <meta name="twitter:image" content={OG_IMAGE} />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <section className="relative scroll-mt-32 overflow-hidden pt-32 pb-16 lg:pt-48 lg:pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="max-w-3xl">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <span className="mb-6 inline-block rounded-full bg-brand-orange/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-orange">
                  COMMERCIAL CONSTRUCTION SUPPORT
                </span>
                <h1 className="mb-6 font-display text-[2.75rem] font-bold leading-[0.95] tracking-tighter text-brand-navy lg:text-[4.5rem]">
                  Contractor Project Support Services
                </h1>
                <p className="mb-4 font-display text-2xl font-bold leading-tight text-brand-navy lg:text-3xl">
                  Helping General Contractors Keep Commercial Projects Moving
                </p>
                <p className="mb-6 max-w-2xl text-lg leading-relaxed text-slate-600 lg:text-xl">
                  Reinhart provides dependable labor and project support for commercial renovations, tenant
                  improvements, retail remodels, office renovations, property turnovers, selective demolition, debris
                  removal, and project cleanup throughout Middle Tennessee.
                </p>

                <PageCTAs layout="hero" />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative h-[300px] overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-900 shadow-2xl shadow-slate-900/10 ring-1 ring-slate-900/5 sm:h-[380px] lg:h-[480px]"
            >
              <img
                src={HERO_IMAGE}
                alt="Commercial construction project support in Middle Tennessee"
                className="h-full w-full object-cover object-center"
                width={1600}
                height={1200}
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="scroll-mt-32 bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-3xl">
            <h2 className="mb-4 font-display text-4xl font-bold text-brand-navy lg:text-5xl">Who We Work With</h2>
            <p className="text-lg leading-relaxed text-slate-600">
              Reinhart supports commercial construction teams and property professionals who need dependable project
              execution—not generic hauling.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {WHO_WE_WORK_WITH.map((customer, index) => (
              <motion.div
                key={customer}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className="rounded-2xl border border-slate-200 bg-slate-50/80 px-5 py-4 text-center text-sm font-semibold text-brand-navy shadow-sm"
              >
                {customer}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="scroll-mt-32 bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-3xl">
            <h2 className="mb-4 font-display text-4xl font-bold text-brand-navy lg:text-5xl">Project Support Services</h2>
            <p className="text-lg leading-relaxed text-slate-600">
              Integrated commercial support services that help contractors, property managers, and ownership teams keep
              renovation and turnover projects on schedule.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PROJECT_SUPPORT_SERVICES.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
              >
                <Link
                  to={service.to}
                  className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-colors hover:border-brand-orange"
                >
                  <h3 className="mb-3 font-display text-xl font-bold text-brand-navy">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{service.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="scroll-mt-32 bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-3xl">
            <h2 className="mb-4 font-display text-4xl font-bold text-brand-navy lg:text-5xl">Typical Projects</h2>
            <p className="text-lg leading-relaxed text-slate-600">
              Commercial renovation, tenant improvement, and property transition projects where dependable support keeps
              schedules moving.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {TYPICAL_PROJECTS.map((project, index) => (
              <motion.div
                key={project}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className="rounded-2xl border border-slate-200 bg-slate-50/80 px-5 py-4 text-center text-sm font-semibold text-brand-navy shadow-sm"
              >
                {project}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="scroll-mt-32 bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center">
            <h2 className="mb-4 font-display text-4xl font-bold text-brand-navy lg:text-5xl">
              How We Support Your Project
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-600">
              A clear workflow built around scope, safety, communication, and handoff to the next trade.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {SUPPORT_PROCESS.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-base font-extrabold tracking-[0.2em] text-brand-orange">{step.number}</span>
                    <Icon className="text-brand-navy" size={24} />
                  </div>
                  <h3 className="mb-3 font-display text-xl font-bold text-brand-navy">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="scroll-mt-32 bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-3xl">
            <h2 className="mb-4 font-display text-4xl font-bold text-brand-navy lg:text-5xl">
              Why Contractors Choose Reinhart
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              General contractors and commercial project teams choose Reinhart when communication, schedule reliability,
              and professional execution matter on active jobs.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_CONTRACTORS.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                className="rounded-3xl border border-slate-200 bg-slate-50/80 p-7"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-navy/5 text-brand-orange">
                  {index % 3 === 0 ? (
                    <ShieldCheck size={18} />
                  ) : index % 3 === 1 ? (
                    <MessageSquare size={18} />
                  ) : (
                    <Star size={18} />
                  )}
                </div>
                <h3 className="mb-2 font-display text-xl font-bold capitalize text-brand-navy">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="scroll-mt-32 bg-slate-50 py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-display text-4xl font-bold text-brand-navy">Frequently Asked Questions</h2>
            <p className="leading-relaxed text-slate-600">Common questions about commercial contractor project support.</p>
          </div>
          <div className="space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={faq.question} className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  >
                    <span className="font-semibold text-brand-navy">{faq.question}</span>
                    <ChevronDown
                      size={18}
                      className={`shrink-0 text-brand-orange transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {isOpen && (
                    <div className="border-t border-slate-100 px-5 pb-4 pt-1 text-sm leading-relaxed text-slate-600">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="scroll-mt-32 bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <h2 className="mb-4 font-display text-4xl font-bold text-brand-navy">Related Services</h2>
            <p className="mx-auto max-w-2xl leading-relaxed text-slate-600">
              Explore related commercial and demolition services that support the same renovation and turnover timelines.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {relatedServices.map((service) => (
              <Link
                key={service.to}
                to={service.to}
                className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-brand-navy transition-colors hover:border-brand-orange hover:text-brand-orange"
              >
                {service.label}
              </Link>
            ))}
            <Link
              to="/commercial-services"
              className="rounded-full border border-brand-orange/30 bg-brand-orange/5 px-4 py-2 text-sm font-semibold text-brand-orange transition-colors hover:bg-brand-orange/10"
            >
              View All Commercial Services
            </Link>
          </div>
        </div>
      </section>

      <ServiceBottomCTA variant="light" showContactExtras />
    </>
  );
}
