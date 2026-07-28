import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ShieldCheck,
  Star,
  type LucideIcon,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import CleanoutProcess from './CleanoutProcess.tsx';
import PageCTAs from './PageCTAs.tsx';
import ServiceBottomCTA from './ServiceBottomCTA.tsx';
import PageMeta from './PageMeta.tsx';
import {
  buildBreadcrumbListSchema,
  buildFAQPageSchema,
  buildWebPageSchema,
  compactJsonLd,
} from '../utils/schema.ts';

export type HubService = {
  icon: LucideIcon;
  title: string;
  description: string;
  to: string;
  cta?: 'View Service' | 'Learn More';
};

export type HubFeaturedProject = {
  title: string;
  meta: string;
  beforeSrc: string;
  afterSrc: string;
  href: string;
};

export type HubProcessStep = {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
  cta?: { href?: string; label: string; estimate?: boolean };
};

export type HubConfig = {
  canonicalPath: string;
  pageTitle: string;
  metaTitle: string;
  metaDescription: string;
  heroEyebrow: string;
  heroHeadline: string;
  heroSubheadline: string;
  heroCopy: string;
  heroImage?: string;
  heroImageAlt?: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  positioningTitle: string;
  positioningParagraphs: string[];
  whoTitle: string;
  whoSubtitle?: string;
  whoWeHelp: { title: string; description: string }[];
  projectsTitle: string;
  projectsSubtitle?: string;
  commonProjects: { icon: LucideIcon; title: string; description: string }[];
  servicesTitle: string;
  servicesSubtitle?: string;
  services?: HubService[];
  serviceCategories?: { title: string; subtitle?: string; services: HubService[] }[];
  processTitle: string;
  processSubtitle?: string;
  processSteps: HubProcessStep[];
  featuredTitle: string;
  featuredSubtitle?: string;
  featuredProjects: HubFeaturedProject[];
  trustTitle: string;
  trustSubtitle?: string;
  trustPoints: { title: string; description: string }[];
  trustHighlight?: string;
  serviceAreas: string[];
  areasNote?: string;
  relatedTitle?: string;
  relatedServices: { label: string; to: string }[];
  relatedHubs?: { label: string; to: string }[];
  faqs: { question: string; answer: string }[];
};

const HubServiceCard = ({ service, index }: { service: HubService; index: number }) => {
  const ctaLabel = service.cta ?? 'View Service';

  return (
    <Link to={service.to} className="group block h-full">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.04 }}
        whileHover={{ y: -10 }}
        className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col gap-5 h-full transition-all duration-300 group-hover:border-brand-orange/35 group-hover:shadow-brand-orange/10"
      >
        <div className="w-12 h-12 bg-brand-navy/5 rounded-xl flex items-center justify-center text-brand-orange group-hover:bg-brand-orange/10 transition-colors">
          <service.icon size={22} />
        </div>
        <div className="flex flex-col flex-1 gap-2">
          <h3 className="font-display text-xl font-bold text-brand-navy">{service.title}</h3>
          <p className="text-slate-500 text-sm leading-relaxed">{service.description}</p>
        </div>
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy group-hover:text-brand-orange transition-colors pt-1 border-t border-slate-100">
          {ctaLabel}
          <ArrowRight size={16} className="text-brand-orange transition-transform group-hover:translate-x-0.5" />
        </span>
      </motion.div>
    </Link>
  );
};

export default function ServiceHubPage({ config }: { config: HubConfig }) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const faqSchema = buildFAQPageSchema(config.faqs);
  const hubLabel =
    config.canonicalPath === '/commercial-services'
      ? 'Commercial Services'
      : config.canonicalPath === '/demolition-services'
        ? 'Demolition Services'
        : 'Residential Services';
  const webPageSchema = buildWebPageSchema({
    path: config.canonicalPath,
    name: config.pageTitle,
    description: config.metaDescription,
    type: 'CollectionPage',
  });
  const breadcrumbSchema = buildBreadcrumbListSchema([
    { label: 'Home', to: '/' },
    { label: hubLabel },
  ]);

  return (
    <>
      <PageMeta
        title={config.pageTitle}
        description={config.metaDescription}
        path={config.canonicalPath}
        ogTitle={config.metaTitle}
        jsonLd={compactJsonLd([webPageSchema, faqSchema, breadcrumbSchema])}
      />

      {/* Hero */}
      <section className="relative scroll-mt-32 overflow-hidden pt-32 pb-16 lg:pt-48 lg:pb-24">
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.055)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_18%,#000_50%,transparent_100%)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className={`grid items-center gap-12 ${config.heroImage ? 'lg:grid-cols-2' : ''}`}>
            <div className="max-w-3xl">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <span className="mb-6 inline-block rounded-full bg-brand-orange/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-orange">
                  {config.heroEyebrow}
                </span>
                <h1 className="mb-6 font-display text-[3.4rem] font-bold leading-[0.95] tracking-tighter text-brand-navy lg:text-[5rem]">
                  {config.heroHeadline}
                </h1>
                <p className="mb-5 max-w-2xl text-xl font-medium leading-relaxed text-slate-700 lg:text-2xl">
                  {config.heroSubheadline}
                </p>
                <p className="mb-8 max-w-2xl text-lg leading-relaxed text-slate-600">{config.heroCopy}</p>
                <div className="mb-7">
                  <PageCTAs layout="hero" />
                </div>
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

      {/* Positioning */}
      <section className="scroll-mt-32 bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <h2 className="font-display text-4xl font-bold leading-tight text-brand-navy lg:text-5xl">
                {config.positioningTitle}
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-relaxed text-slate-600 lg:col-span-7">
              {config.positioningParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who this division is for */}
      <section className="scroll-mt-32 bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 max-w-3xl">
            <h2 className="mb-4 font-display text-4xl font-bold text-brand-navy">{config.whoTitle}</h2>
            {config.whoSubtitle && <p className="text-lg leading-relaxed text-slate-600">{config.whoSubtitle}</p>}
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {config.whoWeHelp.map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -6 }}
                className="flex h-full flex-col gap-4 rounded-3xl border border-slate-100 bg-white p-6 shadow-xl shadow-slate-200/50"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-navy/5 text-brand-orange">
                  <CheckCircle2 size={18} />
                </div>
                <div className="flex-1">
                  <h3 className="mb-2 font-display text-lg font-bold text-brand-navy">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-500">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project types */}
      <section className="scroll-mt-32 bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 max-w-3xl">
            <h2 className="mb-4 font-display text-4xl font-bold text-brand-navy">{config.projectsTitle}</h2>
            {config.projectsSubtitle && <p className="text-lg leading-relaxed text-slate-600">{config.projectsSubtitle}</p>}
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {config.commonProjects.map((project) => (
              <motion.div
                key={project.title}
                whileHover={{ y: -6 }}
                className="flex items-start gap-4 rounded-3xl border border-slate-100 bg-slate-50/80 p-6 shadow-lg shadow-slate-200/30"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-navy/5 text-brand-orange">
                  <project.icon size={20} />
                </div>
                <div>
                  <h3 className="mb-2 font-display text-lg font-bold leading-snug text-brand-navy">{project.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-500">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service cards */}
      <section className="scroll-mt-32 bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 max-w-3xl">
            <h2 className="mb-4 font-display text-4xl font-bold text-brand-navy lg:text-5xl">{config.servicesTitle}</h2>
            {config.servicesSubtitle && <p className="text-lg leading-relaxed text-slate-600">{config.servicesSubtitle}</p>}
          </div>
          {config.serviceCategories ? (
            <div className="space-y-16">
              {config.serviceCategories.map((category) => (
                <div key={category.title}>
                  <div className="mb-8 max-w-3xl">
                    <h3 className="mb-2 font-display text-2xl font-bold text-brand-navy lg:text-3xl">{category.title}</h3>
                    {category.subtitle && <p className="text-base leading-relaxed text-slate-600">{category.subtitle}</p>}
                  </div>
                  <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {category.services.map((service, index) => (
                      <HubServiceCard key={service.to} service={service} index={index} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {(config.services ?? []).map((service, index) => (
                <HubServiceCard key={service.to} service={service} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Process */}
      <CleanoutProcess
        id="division-process"
        title={config.processTitle}
        subtitle={config.processSubtitle}
        className="scroll-mt-32 bg-white py-24"
        steps={config.processSteps}
        showEyebrow={false}
      />

      {/* Recent projects */}
      <section className="scroll-mt-32 bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-3xl">
              <h2 className="mb-4 font-display text-4xl font-bold text-brand-navy lg:text-5xl">{config.featuredTitle}</h2>
              {config.featuredSubtitle && <p className="text-lg leading-relaxed text-slate-600">{config.featuredSubtitle}</p>}
            </div>
            <Link
              to="/projects"
              className="inline-flex shrink-0 items-center gap-2 font-bold text-brand-navy transition-colors hover:text-brand-orange"
            >
              View All Projects
              <ArrowRight size={18} className="text-brand-orange" />
            </Link>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            {config.featuredProjects.map((project) => (
              <Link key={project.href} to={project.href} className="group block h-full">
                <motion.div
                  whileHover={{ y: -6 }}
                  className="flex h-full flex-col gap-6 rounded-3xl border border-slate-100 bg-white p-8 shadow-xl shadow-slate-200/50 transition-all duration-300 group-hover:border-brand-orange/35"
                >
                  <div>
                    <h3 className="mb-1 font-display text-xl font-bold text-brand-navy transition-colors group-hover:text-brand-orange">
                      {project.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-500">{project.meta}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
                      <img
                        src={project.beforeSrc}
                        alt={`${project.title} before`}
                        className="h-full w-full object-cover"
                        width={800}
                        height={600}
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute bottom-2 left-2 rounded-full bg-brand-orange px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                        Before
                      </div>
                    </div>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
                      <img
                        src={project.afterSrc}
                        alt={`${project.title} after`}
                        className="h-full w-full object-cover"
                        width={800}
                        height={600}
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute bottom-2 right-2 rounded-full bg-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-brand-navy">
                        After
                      </div>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy transition-colors group-hover:text-brand-orange">
                    View Project
                    <ArrowRight size={16} className="text-brand-orange" />
                  </span>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="scroll-mt-32 bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 max-w-3xl">
            <h2 className="mb-4 font-display text-4xl font-bold text-brand-navy">{config.trustTitle}</h2>
            {config.trustSubtitle && <p className="text-lg leading-relaxed text-slate-600">{config.trustSubtitle}</p>}
          </div>
          {config.trustHighlight && (
            <div className="mb-10 rounded-3xl border border-brand-orange/20 bg-brand-orange/5 p-8 md:p-10">
              <div className="mb-4 flex gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={18} fill="#F27D26" color="#F27D26" />
                ))}
              </div>
              <p className="max-w-3xl text-lg italic leading-relaxed text-slate-700">&ldquo;{config.trustHighlight}&rdquo;</p>
            </div>
          )}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {config.trustPoints.map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -6 }}
                className="flex flex-col gap-4 rounded-3xl border border-slate-100 bg-white p-7 shadow-xl shadow-slate-200/50"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-navy/5 text-brand-orange">
                  {item.title.includes('Insured') ? <ShieldCheck size={20} /> : <CheckCircle2 size={20} />}
                </div>
                <div>
                  <h3 className="mb-2 font-display text-xl font-bold text-brand-navy">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-500">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="scroll-mt-32 bg-slate-50 py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-display text-4xl font-bold text-brand-navy">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {config.faqs.map((item, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={item.question} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  >
                    <span className="font-display text-base font-bold leading-snug text-brand-navy md:text-lg">{item.question}</span>
                    <ChevronDown
                      size={20}
                      className={`shrink-0 text-brand-orange transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-0">
                      <p className="text-sm leading-relaxed text-slate-600 md:text-base">{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Areas served */}
      <section className="scroll-mt-32 bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-3xl">
            <h2 className="mb-4 font-display text-4xl font-bold text-brand-navy">Areas We Serve</h2>
            <p className="text-lg leading-relaxed text-slate-600">
              {config.areasNote ??
                'Reinhart serves homeowners, property professionals, and businesses throughout Middle Tennessee.'}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4">
            {config.serviceAreas.map((area) => (
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

      {/* Related child services + other divisions */}
      <section className="scroll-mt-32 bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10">
            <h2 className="mb-3 font-display text-3xl font-bold text-brand-navy">{config.relatedTitle ?? 'Explore Services'}</h2>
          </div>
          <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {config.relatedServices.map((service) => (
              <Link
                key={service.to}
                to={service.to}
                className="rounded-2xl border border-slate-200 bg-white px-6 py-4 text-center text-sm font-bold text-brand-navy transition-colors hover:border-brand-orange"
              >
                {service.label}
              </Link>
            ))}
          </div>
          {config.relatedHubs && config.relatedHubs.length > 0 && (
            <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
              <p className="mb-4 text-sm font-bold uppercase tracking-widest text-brand-orange">Other Reinhart Divisions</p>
              <div className="flex flex-col gap-3 sm:flex-row">
                {config.relatedHubs.map((hub) => (
                  <Link
                    key={hub.to}
                    to={hub.to}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 px-5 py-3 text-sm font-bold text-brand-navy transition-colors hover:border-brand-orange hover:text-brand-orange"
                  >
                    {hub.label}
                    <ArrowRight size={16} className="text-brand-orange" />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <ServiceBottomCTA variant="dark" />
    </>
  );
}
