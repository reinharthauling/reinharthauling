import React, { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import PageCTAs from '../components/PageCTAs.tsx';
import { ShieldCheck } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import { PROJECT_FILTERS, projects, type ProjectFilter } from '../data/projects';
import PageMeta from '../components/PageMeta.tsx';
import {
  buildBreadcrumbListSchema,
  buildWebPageSchema,
  compactJsonLd,
} from '../utils/schema.ts';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('All');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <>
      <PageMeta
        title={`Projects | Reinhart Hauling & Cleanouts`}
        description={`See real cleanout, property cleanup, demolition, and investor property projects completed by Reinhart Hauling & Cleanouts throughout Middle Tennessee.`}
        path={`/projects`}
        jsonLd={compactJsonLd([
          buildWebPageSchema({
            path: '/projects',
            name: 'Projects | Reinhart Hauling & Cleanouts',
            description:
              'See real cleanout, property cleanup, demolition, and investor property projects completed by Reinhart Hauling & Cleanouts throughout Middle Tennessee.',
            type: 'CollectionPage',
          }),
          buildBreadcrumbListSchema([{ label: 'Home', to: '/' }, { label: 'Projects' }]),
        ])}
      />

      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-28">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a0a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a0a_1px,transparent_1px)] bg-[size:42px_42px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(242,125,38,0.12),transparent_32%),radial-gradient(circle_at_82%_16%,rgba(15,23,42,0.08),transparent_28%)]" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <span className="mb-6 inline-block rounded-full bg-brand-orange/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-orange">
                REAL PROJECTS
              </span>
              <h1 className="mb-7 font-display text-5xl font-bold leading-[0.95] tracking-tighter text-brand-navy lg:text-7xl">
                Real Cleanout &amp; Property Cleanup Projects
              </h1>
              <p className="mb-8 max-w-3xl text-xl leading-relaxed text-slate-600">
                See how Reinhart helps homeowners, investors, landlords, businesses, and estate representatives move
                difficult property projects forward throughout Middle Tennessee.
              </p>

              <PageCTAs layout="hero" />

              <p className="mt-5 flex items-center gap-2 text-sm font-semibold text-slate-500">
                <ShieldCheck size={17} className="text-brand-orange" />
                Real local projects. Real photos. No stock images.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-5"
            >
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-200/70">
                <div className="rounded-2xl bg-brand-navy p-8 text-white">
                  <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-brand-orange">
                    Portfolio Standard
                  </p>
                  <h2 className="mb-4 font-display text-3xl font-bold leading-tight">
                    Photos, scope, and outcomes from real property work.
                  </h2>
                  <p className="leading-relaxed text-slate-300">
                    This page is built to grow as more completed Reinhart projects and real jobsite photos are added.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="scroll-mt-32 bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-brand-orange">
                Project Portfolio
              </span>
              <h2 className="font-display text-4xl font-bold text-brand-navy lg:text-5xl">Completed Project Work</h2>
            </div>
            <p className="max-w-2xl text-slate-600">
              Filter by project type to see examples of cleanouts, property cleanup, demolition, hauling, and preparation
              work across Middle Tennessee.
            </p>
          </div>

          <div className="mb-12 flex flex-wrap gap-3" aria-label="Project category filters">
            {PROJECT_FILTERS.map((filter) => {
              const isActive = activeFilter === filter;

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-full border px-5 py-2.5 text-sm font-bold transition-all ${
                    isActive
                      ? 'border-brand-orange bg-brand-orange text-white shadow-lg shadow-brand-orange/20'
                      : 'border-slate-200 bg-white text-brand-navy hover:border-brand-orange hover:text-brand-orange'
                  }`}
                  aria-pressed={isActive}
                >
                  {filter}
                </button>
              );
            })}
          </div>

          {filteredProjects.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {filteredProjects.map((project) => (
                <React.Fragment key={project.id}>
                  <ProjectCard project={project} />
                </React.Fragment>
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-10 text-center">
              <h3 className="mb-3 font-display text-2xl font-bold text-brand-navy">More projects coming soon</h3>
              <p className="mx-auto max-w-2xl text-slate-600">
                This category is ready for future Reinhart project photos and writeups as completed work is added.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
