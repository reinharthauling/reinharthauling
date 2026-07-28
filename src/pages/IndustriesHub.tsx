import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ServiceBottomCTA from '../components/ServiceBottomCTA.tsx';
import PageCTAs from '../components/PageCTAs.tsx';
import PageMeta from '../components/PageMeta.tsx';
import Breadcrumbs, { buildBreadcrumbSchema } from '../components/Breadcrumbs.tsx';
import { INDUSTRIES_NAV_LINKS, INDUSTRIES_HUB_PATH } from '../data/industriesNavigation.ts';
import { SITE_URL } from '../data/business.ts';
import { buildProviderRef } from '../utils/schema.ts';

const PAGE_TITLE = 'Industries We Serve | Reinhart Hauling & Cleanouts';
const META_DESCRIPTION =
  'Reinhart partners with businesses, property owners, and contractors across Middle Tennessee for commercial cleanouts, property turnovers, interior strip-outs, tenant improvement demo, and construction support.';

const HERO_IMAGE =
  '/images/projects/2026%20Projects/2026-06_Commercial-Office-Cleanout_Nashville/01_Before/cubicle-office-before-01.jpeg';


export default function IndustriesHub() {
  const breadcrumbItems = [{ label: 'Home', to: '/' }, { label: 'Industries We Serve' }];

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Industries We Serve',
    description: META_DESCRIPTION,
    url: `${SITE_URL}${INDUSTRIES_HUB_PATH}`,
    provider: buildProviderRef(),
  };

  return (
    <>
      <PageMeta
        title={PAGE_TITLE}
        description={META_DESCRIPTION}
        path={INDUSTRIES_HUB_PATH}
        jsonLd={[collectionSchema, buildBreadcrumbSchema(breadcrumbItems)]}
      />

      <section className="relative scroll-mt-32 overflow-hidden pt-32 pb-16 lg:pt-48 lg:pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <Breadcrumbs items={breadcrumbItems} />
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="max-w-3xl">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <span className="mb-6 inline-block rounded-full bg-brand-orange/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-orange">
                  INDUSTRIES WE SERVE
                </span>
                <h1 className="mb-6 font-display text-[2.75rem] font-bold leading-[0.95] tracking-tighter text-brand-navy lg:text-[4.5rem]">
                  Industries We Serve
                </h1>
                <p className="mb-4 font-display text-2xl font-bold leading-tight text-brand-navy lg:text-3xl">
                  Helping Businesses, Property Owners, and Contractors Prepare Properties for Their Next Phase
                </p>
                <p className="mb-6 max-w-2xl text-lg leading-relaxed text-slate-600 lg:text-xl">
                  Reinhart partners with professionals across Middle Tennessee to provide commercial cleanouts, property
                  turnovers, interior strip-outs, tenant improvement demolition, property preparation, and construction
                  support—with professional execution, clear communication, and dependable scheduling.
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
                alt="Commercial property services across Middle Tennessee industries"
                className="h-full w-full object-cover object-center"
                width={1600}
                height={1200}
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="scroll-mt-32 bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-3xl">
            <h2 className="mb-4 font-display text-4xl font-bold text-brand-navy lg:text-5xl">Who We Partner With</h2>
            <p className="text-lg leading-relaxed text-slate-600">
              Select an industry to see typical projects, common commercial services, and how Reinhart helps properties
              move toward renovation, turnover, and the next occupancy phase.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES_NAV_LINKS.map((industry, index) => (
              <motion.div
                key={industry.to}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
              >
                <Link
                  to={industry.to}
                  className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all hover:border-brand-orange hover:shadow-md"
                >
                  <h3 className="mb-3 font-display text-xl font-bold text-brand-navy group-hover:text-brand-orange transition-colors">
                    {industry.label}
                  </h3>
                  <p className="mb-5 flex-1 text-sm leading-relaxed text-slate-600">{industry.description}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy group-hover:text-brand-orange transition-colors">
                    View Industry
                    <ArrowRight size={16} className="text-brand-orange" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ServiceBottomCTA variant="light" sectionClassName="scroll-mt-32 bg-white py-24" showContactExtras />
    </>
  );
}
