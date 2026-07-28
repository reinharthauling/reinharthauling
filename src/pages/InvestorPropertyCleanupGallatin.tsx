import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, ClipboardCheck, MapPin, Truck } from 'lucide-react';
import ServiceBottomCTA from '../components/ServiceBottomCTA.tsx';
import { motion } from 'motion/react';
import PageMeta from '../components/PageMeta.tsx';

const PROJECT_BASE = '/images/projects/2026%20Projects/2026-06_Investor-Property-Cleanup_Gallatin';

const projectImage = (folder: string, file: string) => `${PROJECT_BASE}/${folder}/${file}`;

const heroImage = projectImage('04_Hero', 'hero-general-property-after-01%20copy.jpeg');

const projectFacts = [
  ['Location', 'Gallatin'],
  ['Client', 'Real Estate Investor'],
  ['Duration', '4 hours on site'],
  ['Scope', 'Cleanup, fence demo, bulky item removal, disposal'],
  ['Materials Removed', 'Fencing, construction debris, doors, bulky items, pool filter, general property debris'],
  ['Disposal', 'Trailer load + transfer station'],
  ['Purpose', 'Address exterior debris concerns and prepare the property for continued investor work'],
];

const scopeItems = [
  'Investor property cleanup',
  'Fence demolition',
  'Construction debris removal',
  'Bulky item removal',
  'Property preparation',
  'Transfer station disposal',
];

const photoGroups = [
  {
    title: 'Before',
    description: 'Trash, fencing, bulky items, and exterior debris were creating complaints and slowing down the project.',
    photos: [
      ['General property debris before cleanup', projectImage('01_Before', 'general-property-before-01.jpeg')],
      ['Old fencing before demolition', projectImage('01_Before', 'fence-demo-before-01.jpeg')],
      ['Bulky items staged for removal', projectImage('01_Before', 'bulky-items-before-02.jpg')],
      ['Blocked dumpster access before cleanup', projectImage('01_Before', 'dumpster-access-blocked-01.jpeg')],
    ],
  },
  {
    title: 'During',
    description: 'Fence sections, bulky materials, and debris were removed, loaded, and hauled for disposal.',
    photos: [
      ['Fence demo in progress', projectImage('02_During', 'fence-demo-during-01.jpeg')],
      ['Trailer load during cleanup', projectImage('02_During', 'trailer-full-load-during-01.jpeg')],
      ['Transfer station run', projectImage('02_During', 'transfer-station-unloading-01.jpeg')],
      ['Partial trailer load staged for disposal', projectImage('02_During', 'trailer-partial-load-01.jpeg')],
    ],
  },
  {
    title: 'After',
    description: 'Exterior areas were cleaned up, access improved, and the property looked more controlled for the next phase.',
    photos: [
      ['General property area after cleanup', projectImage('03_After', 'general-property-after-01.jpeg')],
      ['Fence line after demolition', projectImage('03_After', 'fence-demo-after-03.jpeg')],
      ['Dumpster access cleared', projectImage('03_After', 'dumpster-access-cleared-01.jpeg')],
      ['Bulky materials removed', projectImage('03_After', 'bulky-items-after-01.jpeg')],
    ],
  },
];

export default function InvestorPropertyCleanupGallatin() {
  return (
    <>
      <PageMeta
        title={`Investor Property Cleanup in Gallatin, TN | Reinhart Hauling & Cleanouts`}
        description={`Documented investor property cleanup in Gallatin, TN including debris removal, fence demolition, bulky item cleanup, and transfer station disposal.`}
        path={`/projects/investor-property-cleanup-gallatin`}
        ogImage={heroImage}
      />

      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-28">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a0a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a0a_1px,transparent_1px)] bg-[size:42px_42px]" />
        <div className="relative mx-auto max-w-7xl px-6">
          <Link
            to="/projects"
            className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-slate-500 transition-colors hover:text-brand-orange"
          >
            <ArrowLeft size={17} />
            Back to Projects
          </Link>

          <div className="grid items-center gap-12 lg:grid-cols-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6"
            >
              <div className="mb-5 flex flex-wrap gap-3">
                <span className="rounded-full bg-brand-orange px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white">
                  Investor Projects
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-slate-600">
                  <MapPin size={14} className="text-brand-orange" />
                  Gallatin
                </span>
              </div>
              <h1 className="mb-6 font-display text-5xl font-bold leading-[0.95] tracking-tighter text-brand-navy lg:text-7xl">
                Investor Property Cleanup
              </h1>
              <p className="text-xl leading-relaxed text-slate-600">
                Assisted a local real estate investor with exterior debris removal, fence demo, bulky item cleanup, and
                property preparation after complaints were raised about trash around the home.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-6"
            >
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-2xl shadow-slate-200/70">
                <img
                  src={heroImage}
                  alt="Investor property cleanup completed in Gallatin Tennessee"
                  className="h-[320px] w-full object-cover sm:h-[420px]"
                  width={1600}
                  height={1200}
                  fetchPriority="high"
                  decoding="async"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="scroll-mt-32 bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="space-y-8">
                {[
                  [
                    'Project Overview',
                    'This investor-owned property needed exterior cleanup before the project could move forward. Trash, old fencing, bulky materials, and scattered debris around the home were creating pressure for the owner and slowing down progress.',
                  ],
                  [
                    'Problem',
                    'The investor was receiving complaints about the trash and debris around the property. Old fencing, loose materials, doors, and exterior debris needed to be removed quickly so the property looked more controlled and easier for contractors to access.',
                  ],
                  [
                    'Solution',
                    'Reinhart cleared the assigned areas, removed sections of fencing, hauled bulky materials, loaded debris, and completed a transfer station run. The cleanup helped bring the exterior back under control without slowing down the investor’s project.',
                  ],
                  [
                    'Outcome',
                    'The property was cleaner, more manageable, and better positioned for the next contractor. Exterior debris was removed, access areas were improved, and the investor could continue moving the project forward.',
                  ],
                ].map(([title, content]) => (
                  <div key={title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                    <h2 className="mb-4 font-display text-3xl font-bold text-brand-navy">{title}</h2>
                    <p className="text-lg leading-relaxed text-slate-600">{content}</p>
                  </div>
                ))}
              </div>
            </div>

            <aside className="lg:col-span-5">
              <div className="sticky top-36 space-y-6">
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
                  <h2 className="mb-6 font-display text-3xl font-bold text-brand-navy">Project Details</h2>
                  <div className="space-y-4">
                    {projectFacts.map(([label, value]) => (
                      <div key={label} className="border-b border-slate-200 pb-4 last:border-b-0 last:pb-0">
                        <p className="mb-1 text-xs font-bold uppercase tracking-widest text-slate-400">{label}</p>
                        <p className="font-semibold leading-relaxed text-brand-navy">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
                  <h2 className="mb-6 font-display text-3xl font-bold text-brand-navy">Scope of Work</h2>
                  <div className="space-y-4">
                    {scopeItems.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <CheckCircle2 size={19} className="mt-0.5 shrink-0 text-brand-orange" />
                        <span className="font-semibold text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-12">
        <div className="mx-auto max-w-7xl px-6">
          {photoGroups.map((group) => (
            <section key={group.title} className="scroll-mt-32 py-12">
              <div className="mb-6 flex items-end justify-between gap-6">
                <div>
                  <h2 className="font-display text-3xl font-bold text-brand-navy">{group.title}</h2>
                  <p className="mt-2 max-w-3xl text-slate-600">{group.description}</p>
                </div>
                <div className="hidden h-px flex-1 bg-slate-200 sm:block" />
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {group.photos.map(([caption, src]) => (
                  <figure
                    key={src}
                    className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/60"
                  >
                    <img src={src} alt={caption} className="h-80 w-full object-cover" loading="lazy" decoding="async" />
                    <figcaption className="px-5 py-4 text-sm font-semibold text-brand-navy">{caption}</figcaption>
                  </figure>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <ServiceBottomCTA variant="dark" />
    </>
  );
}
