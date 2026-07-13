import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, MapPin } from 'lucide-react';
import ServiceBottomCTA from '../components/ServiceBottomCTA.tsx';
import { motion } from 'motion/react';

const PROJECT_BASE = '/images/projects/2026%20Projects/2026-06_Commercial-Office-Cleanout_Nashville';

const projectImage = (folder: string, file: string) => `${PROJECT_BASE}/${folder}/${file}`;

const heroImage = projectImage('01_Before', 'cubicle-office-before-01.jpeg');

const projectDetails = [
  ['Location', 'Downtown Nashville'],
  ['Client', 'Commercial Office'],
  ['Project Type', 'Office Load-Out'],
  ['Services', 'Furniture removal, cubicle disassembly, office cleanout, commercial hauling'],
  ['Building Access', 'Elevator access'],
  ['Materials', 'Cubicles, office furniture, desks, shelving, miscellaneous office contents'],
];

const scopeItems = [
  'Cubicle disassembly',
  'Office furniture removal',
  'Desk removal',
  'Shelving removal',
  'Elevator load-out',
  'Commercial hauling',
  'Trailer loading',
  'Responsible disposal',
];

const capabilities = [
  'Office furniture removal',
  'Cubicle systems',
  'Commercial cleanouts',
  'Tenant move-outs',
  'Office renovations',
  'Property transitions',
  'Multi-floor load-outs',
  'Elevator logistics',
  'Trailer and truck loading',
  'Responsible disposal',
];

const galleryPhotos = [
  ['Office furniture before removal', projectImage('01_Before', 'executive-office-before-01.jpeg')],
  ['Cubicle systems', projectImage('01_Before', 'cubicle-office-before-01.jpeg')],
  ['Furniture disassembly', projectImage('01_Before', 'desk-station-before-01.jpeg')],
  ['Elevator transport planning', projectImage('01_Before', 'open-office-before-01.jpeg')],
  ['Commercial staging', projectImage('01_Before', 'cubicle-office-before-02.jpeg')],
  ['Office equipment', projectImage('01_Before', 'file-cabinets-office-before-01.png')],
  ['Load-out process', projectImage('01_Before', 'file-cabinets-office-before-02.jpeg')],
];

const relatedServices = [
  { label: 'Commercial Cleanouts', to: '/commercial-cleanouts' },
  { label: 'Property Cleanouts', to: '/property-cleanouts' },
  { label: 'Interior Demolition', to: '/interior-demolition' },
];

export default function CommercialCleanoutDowntownNashville() {
  return (
    <>
      <Helmet>
        <title>Commercial Office Load-Out in Downtown Nashville | Reinhart Hauling &amp; Cleanouts</title>
        <meta
          name="description"
          content="Documented commercial office load-out in Downtown Nashville with cubicle disassembly, office furniture removal, elevator logistics, and commercial hauling."
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
                  Commercial Projects
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-slate-600">
                  <MapPin size={14} className="text-brand-orange" />
                  Downtown Nashville
                </span>
              </div>
              <h1 className="mb-6 font-display text-5xl font-bold leading-[0.95] tracking-tighter text-brand-navy lg:text-7xl">
                Commercial Office Load-Out
              </h1>
              <p className="text-xl leading-relaxed text-slate-600">
                This downtown Nashville office project involved dismantling office furniture, removing cubicles, loading
                materials through elevators, and preparing everything for transport. Commercial load-outs require
                planning, coordination, and efficient movement through occupied buildings.
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
                  alt="Commercial office cubicles before load-out in Downtown Nashville"
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
                <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                  <h2 className="mb-4 font-display text-3xl font-bold text-brand-navy">Project Overview</h2>
                  <p className="text-lg leading-relaxed text-slate-600">
                    This project involved removing office furniture, cubicles, desks, shelving, and miscellaneous office
                    equipment from a commercial office suite. Materials were disassembled, staged, loaded through the
                    building elevators, and prepared for transport.
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                  <h2 className="mb-4 font-display text-3xl font-bold text-brand-navy">
                    Commercial Load-Out Services
                  </h2>
                  <p className="mb-6 text-lg leading-relaxed text-slate-600">
                    Reinhart can assist offices, businesses, landlords, and commercial property owners with organized
                    load-outs where access, staging, elevator movement, and hauling need to be coordinated.
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {capabilities.map((item) => (
                      <div key={item} className="flex items-start gap-3 rounded-2xl bg-slate-50 px-4 py-3">
                        <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-brand-orange" />
                        <span className="font-semibold text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <aside className="lg:col-span-5">
              <div className="sticky top-36 space-y-6">
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
                  <h2 className="mb-6 font-display text-3xl font-bold text-brand-navy">Project Details</h2>
                  <div className="space-y-4">
                    {projectDetails.map(([label, value]) => (
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

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14">
            <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-brand-orange">
              Commercial Project Gallery
            </span>
            <h2 className="font-display text-4xl font-bold text-brand-navy lg:text-5xl">Office load-out documentation</h2>
            <p className="mt-4 max-w-3xl text-slate-600">
              Real photos from the commercial office suite showing furniture, cubicle systems, filing cabinets, and
              staging needs involved in the load-out process.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {galleryPhotos.map(([caption, src]) => (
              <figure
                key={src}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/60"
              >
                <img src={src} alt={caption} className="h-72 w-full object-cover" loading="lazy" decoding="async" />
                <figcaption className="px-5 py-4 text-sm font-semibold text-brand-navy">{caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 md:p-10">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="mb-4 font-display text-3xl font-bold text-brand-navy lg:text-4xl">Related Services</h2>
                <p className="leading-relaxed text-slate-600">
                  Commercial load-outs often connect with office cleanouts, tenant turnovers, property preparation, and
                  light demolition support.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {relatedServices.map((service) => (
                  <Link
                    key={service.label}
                    to={service.to}
                    className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-5 py-4 font-semibold text-brand-navy transition-colors hover:border-brand-orange hover:text-brand-orange"
                  >
                    {service.label}
                    <ArrowRight size={16} className="text-brand-orange" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceBottomCTA variant="dark" />
    </>
  );
}
