import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, ClipboardCheck, Hammer, MapPin } from 'lucide-react';
import ServiceBottomCTA from '../components/ServiceBottomCTA.tsx';
import { motion } from 'motion/react';

const PROJECT_BASE = '/images/projects/2026%20Projects/2026-06_Interior-Demo-Portland';

const projectImage = (folder: string, file: string) => `${PROJECT_BASE}/${folder}/${file}`;

const heroImage = projectImage('04_Hero', 'hero-insulation-during-01.jpeg');

const projectFacts = [
  ['Location', 'Portland'],
  ['Client', 'Real Estate Investor'],
  ['Project Type', 'Interior Demo'],
  ['Original Scope', 'Drywall removal'],
  ['Expanded Scope', 'Floors, ceiling material, insulation, debris removal'],
  ['PPE', 'Required due to insulation and demo dust'],
  ['Materials Removed', 'Drywall, flooring, ceiling material, blown-in insulation, trim, interior debris'],
  ['Purpose', 'Help investor evaluate renovation vs. larger demo decision'],
];

const scopeItems = [
  'Interior demolition',
  'Drywall removal',
  'Flooring removal',
  'Ceiling material removal',
  'Insulation cleanup',
  'Demo debris removal',
  'PPE-controlled work',
  'Property evaluation support',
];

const photoGroups = [
  {
    title: 'Before',
    description: 'Rooms, wall surfaces, floors, and ceiling areas before interior materials were opened up.',
    photos: [
      ['Original interior finishes before demolition', projectImage('01_Before', 'kitchen-before-02.jpeg')],
      ['Drywall and flooring before removal', projectImage('01_Before', 'master-bedroom-before-01.jpeg')],
      ['Bathroom finishes before removal', projectImage('01_Before', 'bathroom-before-01.jpeg')],
      ['Living area before interior work began', projectImage('01_Before', 'living-room-before-01.jpeg')],
    ],
  },
  {
    title: 'During',
    description: 'Drywall removal, flooring removal, ceiling material removal, insulation exposure, and debris loading.',
    photos: [
      ['Heavy blown-in insulation', projectImage('02_During', 'insulation-during-01.jpeg')],
      ['Flooring removal', projectImage('02_During', 'kitchen-during-01.jpeg')],
      ['Drywall demolition', projectImage('02_During', 'master-bedroom-during-01.jpeg')],
      ['Interior debris removal', projectImage('02_During', 'dumpster-partial-load-01.jpeg')],
    ],
  },
  {
    title: 'Cleaned-Up',
    description: 'Cleared rooms, removed debris, and opened-up areas ready for investor inspection and next decisions.',
    photos: [
      ['Interior opened for inspection', projectImage('03_After', 'kitchen-after-01.jpeg')],
      ['Structural framing exposed', projectImage('03_After', 'master-bedroom-after-01.jpeg')],
      ['Property ready for evaluation', projectImage('03_After', 'bathroom-after-01.jpeg')],
      ['Demo debris removed from the house', projectImage('03_After', 'full-dumpster-01.jpeg')],
    ],
  },
];

export default function InteriorDemoPortland() {
  return (
    <>
      <Helmet>
        <title>Interior Demo in Portland, TN | Reinhart Hauling &amp; Cleanouts</title>
        <meta
          name="description"
          content="Documented interior demolition project in Portland, TN for a real estate investor evaluating renovation versus a larger demo decision."
        />
      </Helmet>

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
                  Interior Demo
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-slate-600">
                  <MapPin size={14} className="text-brand-orange" />
                  Portland
                </span>
              </div>
              <h1 className="mb-6 font-display text-5xl font-bold leading-[0.95] tracking-tighter text-brand-navy lg:text-7xl">
                Interior Demo – Portland
              </h1>
              <p className="text-xl leading-relaxed text-slate-600">
                Interior demolition completed for a real estate investor evaluating whether to continue renovating the
                property or move toward a full demolition. What began as drywall removal expanded to flooring, ceiling
                demolition, insulation removal, and debris cleanup.
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
                  alt="Interior demo insulation and ceiling removal project in Portland Tennessee"
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
                    "This project was performed to expose the home's structure so the investor could accurately evaluate its condition before making additional investment decisions. As demolition progressed, additional work was requested after hidden conditions were uncovered.",
                  ],
                  [
                    'Solution',
                    'Reinhart safely completed interior demolition as the scope expanded throughout the project. Drywall, flooring, ceiling material, blown-in insulation, trim, and debris were removed while using appropriate PPE for insulation and demolition dust.',
                  ],
                  [
                    'Outcome',
                    'The investor finished with a property that could be properly inspected and evaluated. Interior finishes, debris, and insulation were removed so structural conditions were visible and the next decision could be made with confidence.',
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
