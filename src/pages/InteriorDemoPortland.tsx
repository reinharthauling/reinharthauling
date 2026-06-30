import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, ClipboardCheck, Hammer, MapPin, MessageSquare, Phone } from 'lucide-react';
import { motion } from 'motion/react';

const PROJECT_BASE = '/images/projects/2026%20Projects/2026-06_Interior-Demo-Portland';

const projectImage = (folder: string, file: string) => `${PROJECT_BASE}/${folder}/${file}`;

const heroImage = projectImage('04_Hero', 'hero-insulation-during-01.jpeg');

const heroStats = ['Portland', 'Investor Project', 'Expanded Scope', 'PPE Required', 'Drywall, Floors & Ceiling'];

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
      ['Drywall removal began as original scope', projectImage('01_Before', 'kitchen-before-02.jpeg')],
      ['Room before interior demo work', projectImage('01_Before', 'master-bedroom-before-01.jpeg')],
      ['Bathroom before removal work', projectImage('01_Before', 'bathroom-before-01.jpeg')],
      ['Interior opened for evaluation planning', projectImage('01_Before', 'living-room-before-01.jpeg')],
    ],
  },
  {
    title: 'During',
    description: 'Drywall removal, flooring removal, ceiling material removal, insulation exposure, and debris loading.',
    photos: [
      ['Ceiling removal exposed heavy insulation', projectImage('02_During', 'insulation-during-01.jpeg')],
      ['Flooring added after work began', projectImage('02_During', 'kitchen-during-01.jpeg')],
      ['Interior demo debris staged for removal', projectImage('02_During', 'master-bedroom-during-01.jpeg')],
      ['PPE required for insulation and demo dust', projectImage('02_During', 'dumpster-partial-load-01.jpeg')],
    ],
  },
  {
    title: 'Cleaned-Up',
    description: 'Cleared rooms, removed debris, and opened-up areas ready for investor inspection and next decisions.',
    photos: [
      ['Debris removed for clearer investor evaluation', projectImage('03_After', 'kitchen-after-01.jpeg')],
      ['Interior opened up for next decision', projectImage('03_After', 'master-bedroom-after-01.jpeg')],
      ['Bathroom area cleared after demo', projectImage('03_After', 'bathroom-after-01.jpeg')],
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
                Interior demolition for a real estate investor evaluating whether to continue renovation or move toward
                a larger demo decision. The project began with drywall removal and expanded into flooring, ceiling
                material, insulation, and debris cleanup.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-3">
                {heroStats.map((stat) => (
                  <div
                    key={stat}
                    className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-brand-navy shadow-sm"
                  >
                    {stat}
                  </div>
                ))}
              </div>
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
                    'This investor-owned property needed interior demo completed so the investor could evaluate whether the house was suitable for continued renovation or whether a larger demo decision made more sense. Reinhart was brought in for drywall removal, then the scope expanded as more areas needed to be opened up and cleared.',
                  ],
                  [
                    'Problem',
                    'The original scope was drywall removal, but the project expanded once work began. Flooring and ceiling material also needed to come out, and the ceiling contained heavy blown-in insulation. The work required PPE, careful debris handling, and a full cleanup so the investor could clearly assess the property.',
                  ],
                  [
                    'Solution',
                    'Reinhart removed drywall, flooring, ceiling material, insulation, and interior demo debris. The work area was cleared, debris was hauled out, and the property was left easier to inspect for the investor’s next decision.',
                  ],
                  [
                    'Outcome',
                    'The investor gained a clearer view of the condition of the house and could make a better decision about continued investment versus a larger demo path. The interior debris, insulation, and demo materials were removed so the next phase could move forward.',
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
                  <h2 className="mb-6 font-display text-3xl font-bold text-brand-navy">Project Facts</h2>
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

      <section data-hide-sticky-cta className="bg-brand-navy py-20 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="mb-5 font-display text-4xl font-bold lg:text-5xl">
            Need interior demo before the next decision?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-slate-300">
            Text photos for a fast quote on drywall removal, flooring removal, ceiling demo, insulation cleanup, and
            debris hauling.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="sms:6152000064?body=Hi%2C%20I%27d%20like%20a%20fast%20quote%20for%20interior%20demo"
              className="inline-flex items-center justify-center gap-3 rounded-2xl bg-brand-orange px-8 py-4 text-lg font-bold text-white shadow-2xl shadow-brand-orange/25"
            >
              <MessageSquare />
              Text Photos for a Fast Quote
            </a>
            <a
              href="tel:6152000064"
              className="inline-flex items-center justify-center gap-3 rounded-2xl border-2 border-white/20 bg-white px-8 py-4 text-lg font-bold text-brand-navy transition-colors hover:border-brand-orange"
            >
              <Phone />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
