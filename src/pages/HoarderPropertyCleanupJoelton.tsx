import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import PageCTAs from '../components/PageCTAs.tsx';
import ServiceBottomCTA from '../components/ServiceBottomCTA.tsx';
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ClipboardCheck,
  Home,
  MapPin,
  Recycle,
  ShieldCheck,
  Sparkles,
  Truck,
  User,
} from 'lucide-react';

const PROJECT_BASE = '/images/projects/2026%20Projects/2026-04_Hoarder-Property-Cleanout_Joelton';

const projectImage = (folder: string, file: string) => `${PROJECT_BASE}/${folder}/${file}`;

const heroImage = projectImage('04_Hero', 'hero-driveway-before-01.jpeg');

const quickFacts = [
  { label: 'Location', value: 'Joelton, Tennessee', icon: MapPin },
  { label: 'Client', value: 'Residential Property Owner', icon: User },
  { label: 'Project Duration', value: '3 Days', icon: CalendarDays },
  { label: 'Project Type', value: 'Whole Property Cleanup', icon: Home },
  { label: 'Deadline', value: 'Property Closing', icon: ClipboardCheck },
  { label: 'Material Removed', value: 'Multiple Dumpster Loads + Multiple Trailer Loads', icon: Truck },
] as const;

const services = [
  'Hoarder Cleanup',
  'Property Cleanup',
  'Heavy Debris Removal',
  'Scrap Recycling',
  'Responsible Disposal',
];

const scopeItems = [
  { title: 'Property Assessment', icon: ClipboardCheck },
  { title: 'Sorting & Separation', icon: ShieldCheck },
  { title: 'Heavy Debris Removal', icon: Truck },
  { title: 'Multiple Dumpster Loads', icon: Truck },
  { title: 'Multiple Trailer Loads', icon: Truck },
  { title: 'Scrap Metal Recycling', icon: Recycle },
  { title: 'Responsible Disposal', icon: CheckCircle2 },
  { title: 'Final Property Cleanup', icon: Sparkles },
] as const;

const projectStats = [
  '3 Days',
  '20+ Project Photos',
  '2 Walkthrough Videos',
  'Multiple Dumpster Loads',
  'Multiple Trailer Loads',
  'Real Residential Project',
];

const transformations = [
  {
    title: 'Driveway Access Restored',
    src: projectImage('06_Comparisons', 'before-after-comparison-driveway-01.png'),
    alt: 'Before and after driveway cleanup transformation in Joelton Tennessee',
  },
  {
    title: 'Front Yard Cleared',
    src: projectImage('06_Comparisons', 'before-after-comparison-front-yard-01.png'),
    alt: 'Before and after front yard property cleanup transformation in Joelton Tennessee',
  },
  {
    title: 'Garage Cleanup Progress',
    src: projectImage('06_Comparisons', 'before-after-comparison-garage-01.png'),
    alt: 'Before and after garage cleanup transformation in Joelton Tennessee',
  },
  {
    title: 'Garage Space Opened Up',
    src: projectImage('06_Comparisons', 'before-after-comparison-garage-02.png'),
    alt: 'Second before and after garage cleanup transformation in Joelton Tennessee',
  },
] as const;

const galleryGroups = [
  {
    title: 'Before',
    description: 'Accumulated belongings, debris, appliances, and miscellaneous materials before cleanup began.',
    images: [
      ['Front yard before cleanup', projectImage('01_Before', 'front-yard-before-01.jpeg')],
      ['Driveway before cleanup', projectImage('01_Before', 'driveway-before-01.jpeg')],
      ['Garage before cleanup', projectImage('01_Before', 'garage-before-01.jpeg')],
      ['Front porch before cleanup', projectImage('01_Before', 'front-porch-before-01.jpeg')],
      ['Shed before cleanup', projectImage('01_Before', 'shed-before-01.jpeg')],
      ['Garage materials before cleanup', projectImage('01_Before', 'garage-before-07.jpeg')],
    ],
  },
  {
    title: 'During',
    description: 'Sorting, staging, trailer loading, dumpster use, and scrap separation during the three-day project.',
    images: [
      ['Driveway cleanup in progress', projectImage('02_During', 'driveway-during-01.jpeg')],
      ['Front yard cleanup in progress', projectImage('02_During', 'front-yard-during-01.jpeg')],
      ['Scrap staged for recycling', projectImage('02_During', 'front-yard-scrap-staged-01.jpeg')],
      ['Partial dumpster load', projectImage('02_During', 'dumpster-partial-load-01.jpeg')],
      ['Scrap trailer loaded', projectImage('02_During', 'scrap-trailer-loaded-01.png')],
      ['Final load staging', projectImage('02_During', 'yard-debris-staged-final-load-01.jpeg')],
    ],
  },
  {
    title: 'After',
    description: 'Cleared areas after debris removal, sorting, scrap recycling, and final cleanup.',
    images: [
      ['Driveway after cleanup', projectImage('03_After', 'driveway-after-01.jpeg')],
      ['Front yard after cleanup', projectImage('03_After', 'front-yard-after-04.jpeg')],
      ['Garage after cleanup', projectImage('03_After', 'garage-after-01.jpeg')],
      ['Front porch after cleanup', projectImage('03_After', 'front-porch-after-01.jpeg')],
      ['Shed after cleanup', projectImage('03_After', 'shed-after-01.jpeg')],
      ['Full dumpster after load out', projectImage('03_After', 'dumpster-full-01.jpeg')],
    ],
  },
] as const;

const projectResults = [
  'Property cleared before closing',
  'Deadline successfully met',
  'Multiple dumpster loads removed',
  'Multiple trailer loads hauled',
  'Scrap metal recycled',
  'Property prepared for sale',
];

const relatedServices = [
  {
    title: 'Property Cleanups',
    text: 'Whole-property clearing for difficult residential, rental, inherited, and investment properties.',
    to: '/property-cleanouts',
  },
  {
    title: 'Estate Cleanouts',
    text: 'Organized support for families and estate representatives managing property transitions.',
    to: '/estate-cleanouts',
  },
  {
    title: 'Garage Cleanouts',
    text: 'Garage, storage, and outbuilding cleanup for packed spaces and heavy debris.',
    to: '/garage-cleanouts',
  },
  {
    title: 'Interior Demo',
    text: 'Selective tear-outs, drywall removal, debris loading, and cleanup for renovation prep.',
    to: '/interior-demolition',
  },
  {
    title: 'Commercial Cleanouts',
    text: 'Professional cleanout support for offices, retail spaces, warehouses, and business properties.',
    to: '/commercial-cleanouts',
  },
];

const videos = [
  {
    title: 'Final Property Walkthrough',
    src: projectImage('05_Video', 'final-property-walkthrough-01.MOV'),
  },
  {
    title: 'Final Garage Walkthrough',
    src: projectImage('05_Video', 'final-garage-walkthrough-01.MOV'),
  },
];

const CTAButtons = () => <PageCTAs layout="hero" />;

export default function HoarderPropertyCleanupJoelton() {
  return (
    <>
      <Helmet>
        <title>Hoarder Property Cleanup in Joelton, TN | Reinhart Hauling &amp; Cleanouts</title>
        <meta
          name="description"
          content="Real Joelton, TN hoarder property cleanup project by Reinhart Hauling & Cleanouts involving heavy debris removal, sorting, scrap recycling, and responsible disposal."
        />
      </Helmet>

      <section className="relative overflow-hidden bg-brand-navy text-white">
        <div className="relative min-h-[760px] pt-36 lg:pt-48">
          <img
            src={heroImage}
            alt="Completed hoarder property cleanup project in Joelton Tennessee"
            className="absolute inset-0 h-full w-full object-cover"
            width={1800}
            height={1200}
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/78 to-brand-navy/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent" />

          <div className="relative mx-auto max-w-7xl px-6 pb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <span className="mb-6 inline-block rounded-full bg-brand-orange px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white shadow-lg shadow-brand-orange/20">
                REAL PROJECT
              </span>
              <h1 className="mb-7 font-display text-5xl font-bold leading-[0.95] tracking-tighter lg:text-7xl">
                Hoarder Property Cleanup | Joelton, TN
              </h1>
              <p className="mb-8 max-w-3xl text-xl leading-relaxed text-slate-200 lg:text-2xl">
                Emergency three-day whole-property cleanout completed under a hard property closing deadline. Years of
                accumulated belongings, heavy debris, appliances, scrap metal, and household contents were removed using
                multiple dumpsters, multiple trailer loads, and on-site scrap recycling to prepare the property for sale.
              </p>

              <CTAButtons />

              <div className="mt-7 flex flex-wrap gap-3 text-sm font-bold text-white">
                {['Real project', 'Real photos', 'No stock images'].map((item) => (
                  <span key={item} className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
                    <CheckCircle2 size={16} className="text-brand-orange" />
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {quickFacts.map((fact) => {
              const Icon = fact.icon;

              return (
                <div key={fact.label} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-xl shadow-slate-200/50">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-navy/5 text-brand-orange">
                    <Icon size={20} />
                  </div>
                  <p className="mb-1 text-xs font-bold uppercase tracking-widest text-slate-400">{fact.label}</p>
                  <p className="font-display text-xl font-bold text-brand-navy">{fact.value}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-7">
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-brand-orange">Services</p>
            <div className="flex flex-wrap gap-3">
              {services.map((service) => (
                <span key={service} className="rounded-full bg-white px-4 py-2 text-sm font-bold text-brand-navy shadow-sm">
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-brand-orange">
              The Challenge
            </span>
            <h2 className="font-display text-4xl font-bold leading-tight text-brand-navy lg:text-5xl">
              Restoring access and order to a difficult property.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-slate-600 lg:col-span-7">
            <p>
              The property had recently been sold, and the owner contacted Reinhart only three days before possession was
              due. Years of accumulated belongings, heavy debris, scrap metal, appliances, furniture, and household
              contents had to be removed before closing. Large portions of the driveway, garage, yard, and storage areas
              had become difficult to access because of the volume of material.
            </p>
            <p>
              With very little time available, the project required careful planning, multiple dumpster exchanges,
              multiple trailer loads, organized scrap recycling, and continuous hauling over three days to deliver the
              property on schedule.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14">
            <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-brand-orange">
              Scope of Work
            </span>
            <h2 className="font-display text-4xl font-bold text-brand-navy lg:text-5xl">What the project required</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {scopeItems.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -6 }}
                  className="rounded-3xl border border-slate-100 bg-white p-7 shadow-xl shadow-slate-200/50"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-navy/5 text-brand-orange">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-brand-navy">{item.title}</h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-brand-navy py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
            {projectStats.map((stat) => (
              <div key={stat} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-center">
                <p className="text-sm font-bold text-white">{stat}</p>
              </div>
            ))}
          </div>

          <div className="mb-14 max-w-3xl">
            <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-brand-orange">
              Before &amp; After
            </span>
            <h2 className="mb-5 font-display text-4xl font-bold lg:text-5xl">Real transformations from the project</h2>
            <p className="text-lg leading-relaxed text-slate-300">
              These comparison images show how specific areas changed after sorting, loading, hauling, recycling, and
              cleanup.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {transformations.map((item) => (
              <article key={item.title} className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl shadow-black/20">
                <img src={item.src} alt={item.alt} className="h-auto w-full object-cover" loading="lazy" decoding="async" />
                <div className="p-6">
                  <h3 className="font-display text-2xl font-bold">{item.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14">
            <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-brand-orange">
              Project Gallery
            </span>
            <h2 className="font-display text-4xl font-bold text-brand-navy lg:text-5xl">Before, during, and after</h2>
          </div>

          <div className="space-y-16">
            {galleryGroups.map((group) => (
              <section key={group.title}>
                <div className="mb-8 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
                  <div>
                    <h3 className="font-display text-3xl font-bold text-brand-navy">{group.title}</h3>
                    <p className="mt-2 max-w-3xl text-slate-600">{group.description}</p>
                  </div>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {group.images.map(([caption, src]) => (
                    <figure key={src} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/60">
                      <img src={src} alt={caption} className="h-72 w-full object-cover" loading="lazy" decoding="async" />
                      <figcaption className="px-5 py-4 text-sm font-semibold text-brand-navy">{caption}</figcaption>
                    </figure>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14">
            <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-brand-orange">
              Project Results
            </span>
            <h2 className="font-display text-4xl font-bold text-brand-navy lg:text-5xl">What changed after cleanup</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projectResults.map((result) => (
              <div key={result} className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
                <CheckCircle2 className="mb-5 text-brand-orange" size={24} />
                <h3 className="font-display text-xl font-bold text-brand-navy">{result}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {videos.length > 0 && (
        <section className="bg-slate-50 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-14">
              <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-brand-orange">
                Project Video
              </span>
              <h2 className="font-display text-4xl font-bold text-brand-navy lg:text-5xl">Walkthrough clips</h2>
            </div>
            <div className="grid gap-8 lg:grid-cols-2">
              {videos.map((video) => (
                <article key={video.src} className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-4 shadow-xl shadow-slate-200/60">
                  <video className="aspect-video w-full rounded-2xl bg-slate-900 object-cover" controls preload="metadata">
                    <source src={video.src} />
                    Your browser does not support the video tag.
                  </video>
                  <h3 className="px-2 pt-4 font-display text-xl font-bold text-brand-navy">{video.title}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14">
            <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-brand-orange">
              Related Services
            </span>
            <h2 className="font-display text-4xl font-bold text-brand-navy lg:text-5xl">Similar project support</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {relatedServices.map((service) => (
              <Link
                key={service.title}
                to={service.to}
                className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/50 transition-all hover:-translate-y-1 hover:border-brand-orange/40 hover:shadow-xl"
              >
                <h3 className="mb-3 font-display text-xl font-bold text-brand-navy group-hover:text-brand-orange">
                  {service.title}
                </h3>
                <p className="mb-5 flex-1 text-sm leading-relaxed text-slate-600">{service.text}</p>
                <span className="inline-flex items-center gap-2 text-sm font-bold text-brand-navy group-hover:text-brand-orange">
                  Learn More
                  <ArrowRight size={15} className="text-brand-orange" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ServiceBottomCTA variant="dark" />
    </>
  );
}
