import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Calendar,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  MessageSquare,
  Phone,
  Truck,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import EmailContactMenu from './EmailContactMenu.tsx';
import PageCTAs from './PageCTAs.tsx';
import ServiceBottomCTA from './ServiceBottomCTA.tsx';
import PageMeta from './PageMeta.tsx';
import {
  getRelatedResidentialServices,
  type ResidentialServicePageConfig,
} from '../data/residentialServicePages.ts';
import { SITE_URL } from '../data/business.ts';
import {
  buildBreadcrumbListSchema,
  buildFAQPageSchema,
  buildServiceSchema,
  buildWebPageSchema,
  compactJsonLd,
} from '../utils/schema.ts';


const PROCESS_STEPS = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Request an Estimate or Schedule a Walkthrough',
    description:
      'Share project details for an estimate, or schedule a walkthrough when volume, access, or project complexity requires it.',
  },
  {
    number: '02',
    icon: ClipboardCheck,
    title: 'Review Scope & Quote',
    description:
      'We confirm what stays, what goes, labor needs, disposal requirements, and timing before work begins.',
  },
  {
    number: '03',
    icon: Truck,
    title: 'Removal & Haul-Away',
    description: 'Our crew completes the removal, loading, and haul-away with organized execution on site.',
  },
  {
    number: '04',
    icon: CheckCircle2,
    title: 'Ready For the Next Step',
    description:
      'The property or project area is left cleared and ready for cleaning, repairs, listing, occupancy, or renovation.',
  },
];

type ResidentialServicePageProps = {
  config: ResidentialServicePageConfig;
};

export default function ResidentialServicePage({ config }: ResidentialServicePageProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const ogTitle = config.ogTitle ?? config.pageTitle;
  const relatedServices = getRelatedResidentialServices(config.canonicalPath, config.category);

  const serviceSchema = buildServiceSchema({
    name: config.heroHeadline,
    description: config.metaDescription,
    path: config.canonicalPath,
    serviceType: config.heroHeadline,
  });

  const faqSchema = buildFAQPageSchema(config.faqs);
  const hubPath =
    config.category === 'removal-services'
      ? '/residential-property-services'
      : '/residential-property-services';
  const hubLabel = 'Residential Services';
  const breadcrumbSchema = buildBreadcrumbListSchema([
    { label: 'Home', to: '/' },
    { label: hubLabel, to: hubPath },
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
              Organized property support designed to help homes, rentals, and investment properties move toward sale,
              renovation, occupancy, or the next project phase.
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
            <h2 className="mb-4 font-display text-4xl font-bold text-brand-navy lg:text-5xl">Ideal Customers</h2>
            <p className="text-lg leading-relaxed text-slate-600">
              We support homeowners, families, landlords, and property professionals who need dependable execution—not a
              rushed pickup without a plan.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {config.idealCustomers.map((customer, index) => (
              <motion.div
                key={customer}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-center text-sm font-semibold text-brand-navy shadow-sm"
              >
                {customer}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="scroll-mt-32 bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center">
            <h2 className="mb-4 font-display text-4xl font-bold text-brand-navy lg:text-5xl">How It Works</h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-600">
              A clear property workflow built around scope, communication, execution, and handoff.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="flex h-full flex-col rounded-3xl border border-slate-200 bg-slate-50/80 p-7 shadow-sm"
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
              Explore related property and removal services that often support the same timelines and project goals.
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
              to="/residential-property-services"
              className="rounded-full border border-brand-orange/30 bg-brand-orange/5 px-4 py-2 text-sm font-semibold text-brand-orange transition-colors hover:bg-brand-orange/10"
            >
              View All Residential Services
            </Link>
          </div>
        </div>
      </section>

      <ServiceBottomCTA variant="light" showContactExtras />
    </>
  );
}
