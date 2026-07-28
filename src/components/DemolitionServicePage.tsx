import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  Hammer,
  MessageSquare,
  Phone,
  ShieldCheck,
  Truck,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import EmailContactMenu from './EmailContactMenu.tsx';
import PageCTAs from './PageCTAs.tsx';
import ServiceBottomCTA from './ServiceBottomCTA.tsx';
import PageMeta from './PageMeta.tsx';
import {
  getRelatedDemolitionServices,
  type DemolitionServicePageConfig,
} from '../data/demolitionServicePages.ts';
import { SITE_URL } from '../data/business.ts';
import {
  buildBreadcrumbListSchema,
  buildFAQPageSchema,
  buildServiceSchema,
  buildWebPageSchema,
  compactJsonLd,
} from '../utils/schema.ts';


const DEFAULT_WHO_WE_WORK_WITH = [
  'General Contractors',
  'Property Managers',
  'Commercial Property Owners',
  'Business Owners',
  'Real Estate Investors',
  'Homeowners',
];

const PROCESS_STEPS = [
  {
    number: '01',
    icon: ClipboardCheck,
    title: 'Walkthrough',
    description: 'Share photos or walk the space so we understand scope, access, materials, and renovation goals.',
  },
  {
    number: '02',
    icon: MessageSquare,
    title: 'Planning',
    description: 'We confirm what stays, what goes, debris staging, safety considerations, and project timing.',
  },
  {
    number: '03',
    icon: Hammer,
    title: 'Selective Removal',
    description: 'Our crew completes controlled tear-out of scheduled materials—not structural building demolition.',
  },
  {
    number: '04',
    icon: Truck,
    title: 'Debris Removal',
    description: 'Demo debris is loaded, hauled, and disposed of so the work area stays organized.',
  },
  {
    number: '05',
    icon: CheckCircle2,
    title: 'Ready For Next Trade',
    description: 'The space is prepared for framing, MEP, drywall, flooring, finishes, or the next project phase.',
  },
];

const SAFETY_POINTS = [
  {
    title: 'Dust Control',
    description: 'Controlled tear-out practices to limit dust migration in active buildings and occupied areas.',
  },
  {
    title: 'Property Protection',
    description: 'Scope boundaries defined upfront so areas outside the demo plan remain protected.',
  },
  {
    title: 'Clean Work Areas',
    description: 'Organized staging and clearing so contractors and property teams can keep moving.',
  },
  {
    title: 'Daily Cleanup',
    description: 'Work areas maintained during multi-day selective demolition projects.',
  },
  {
    title: 'Professional Communication',
    description: 'Clear updates on scope, schedule, and handoff expectations for every project.',
  },
  {
    title: 'Licensed & Insured',
    description: 'Selective demolition support backed by proper insurance and accountable execution.',
  },
];

type DemolitionServicePageProps = {
  config: DemolitionServicePageConfig;
};

export default function DemolitionServicePage({ config }: DemolitionServicePageProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const ogTitle = config.ogTitle ?? config.pageTitle;
  const relatedServices = getRelatedDemolitionServices(config.canonicalPath);
  const whoWeWorkWith = config.whoWeWorkWith ?? DEFAULT_WHO_WE_WORK_WITH;

  const serviceSchema = buildServiceSchema({
    name: config.heroHeadline,
    description: config.metaDescription,
    path: config.canonicalPath,
    serviceType: config.heroHeadline,
  });

  const faqSchema = buildFAQPageSchema(config.faqs);
  const breadcrumbSchema = buildBreadcrumbListSchema([
    { label: 'Home', to: '/' },
    { label: 'Demolition Services', to: '/demolition-services' },
    { label: config.heroHeadline },
  ]);
  const webPageSchema = buildWebPageSchema({
    path: config.canonicalPath,
    name: config.pageTitle,
    description: config.metaDescription,
    mainEntityId: `${SITE_URL}${config.canonicalPath}#service`,
  });

  return (
    <>
      <PageMeta
        title={config.pageTitle}
        description={config.metaDescription}
        path={config.canonicalPath}
        ogTitle={ogTitle}
        jsonLd={compactJsonLd([webPageSchema, serviceSchema, faqSchema, breadcrumbSchema])}
      />

      <section className="relative scroll-mt-32 overflow-hidden pt-32 pb-16 lg:pt-48 lg:pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="max-w-3xl">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <span className="mb-6 inline-block rounded-full bg-brand-orange/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-orange">
                  {config.heroEyebrow}
                </span>
                <h1 className="mb-8 font-display text-[2.75rem] font-bold leading-[0.95] tracking-tighter text-brand-navy lg:text-[4.5rem]">
                  {config.heroHeadline}
                </h1>
                <p className="mb-6 max-w-2xl text-lg leading-relaxed text-slate-600 lg:text-xl">{config.heroIntro}</p>

                <PageCTAs layout="hero" />
              </motion.div>
            </div>

            {config.heroImage && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative h-[300px] overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-900 shadow-2xl shadow-slate-900/10 ring-1 ring-slate-900/5 sm:h-[380px] lg:h-[480px]"
              >
                <img
                  src={config.heroImage}
                  alt={config.heroImageAlt ?? config.heroHeadline}
                  className="h-full w-full object-cover object-center"
                  width={1600}
                  height={1200}
                />
              </motion.div>
            )}
          </div>
        </div>
      </section>

      <section className="scroll-mt-32 bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 max-w-3xl">
            <h2 className="mb-4 font-display text-4xl font-bold text-brand-navy lg:text-5xl">
              What This Service Includes
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              Selective demolition support that prepares properties for renovation, tenant improvement, and the next
              project phase—not structural building demolition.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2" role="list">
            {config.servicesIncluded.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50/80 px-5 py-4 text-sm font-semibold text-brand-navy"
              >
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-orange" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="scroll-mt-32 bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-3xl">
            <h2 className="mb-4 font-display text-4xl font-bold text-brand-navy lg:text-5xl">Ideal Projects</h2>
            <p className="text-lg leading-relaxed text-slate-600">
              Common renovation and property preparation situations where selective demolition keeps projects moving
              forward.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {config.idealProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <h3 className="mb-3 font-display text-xl font-bold text-brand-navy">{project.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{project.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="scroll-mt-32 bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-3xl">
            <h2 className="mb-4 font-display text-4xl font-bold text-brand-navy lg:text-5xl">Who We Work With</h2>
            <p className="text-lg leading-relaxed text-slate-600">
              We support contractors, property teams, and owners who need selective demolition before renovation work
              begins.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whoWeWorkWith.map((customer, index) => (
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

      <section id="process" className="scroll-mt-32 bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center">
            <h2 className="mb-4 font-display text-4xl font-bold text-brand-navy lg:text-5xl">Our Process</h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-600">
              A clear selective demolition workflow built around scope, safety, execution, and handoff to the next
              trade.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {PROCESS_STEPS.map((step) => {
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
              Safety &amp; Property Protection
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              Selective demolition requires controlled execution, clear communication, and respect for the property
              surrounding the work area.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SAFETY_POINTS.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                className="rounded-3xl border border-slate-200 bg-slate-50/80 p-7"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-navy/5 text-brand-orange">
                  <ShieldCheck size={18} />
                </div>
                <h3 className="mb-2 font-display text-xl font-bold text-brand-navy">{item.title}</h3>
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
            <p className="leading-relaxed text-slate-600">Common questions about {config.heroHeadline.toLowerCase()}.</p>
          </div>
          <div className="space-y-3">
            {config.faqs.map((faq, index) => {
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
              Explore related demolition, commercial, and property preparation services that support the same renovation
              timelines.
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
              to="/demolition-services"
              className="rounded-full border border-brand-orange/30 bg-brand-orange/5 px-4 py-2 text-sm font-semibold text-brand-orange transition-colors hover:bg-brand-orange/10"
            >
              View All Demolition Services
            </Link>
          </div>
        </div>
      </section>

      <ServiceBottomCTA variant="light" showContactExtras />
    </>
  );
}
