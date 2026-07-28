import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  MapPin,
} from 'lucide-react';
import PageCTAs from '../components/PageCTAs.tsx';
import ServiceBottomCTA from '../components/ServiceBottomCTA.tsx';
import PageMeta from '../components/PageMeta.tsx';
import {
  buildBreadcrumbListSchema,
  buildFAQPageSchema,
  buildServiceSchema,
  buildWebPageSchema,
  compactJsonLd,
} from '../utils/schema.ts';

const PAGE_PATH = '/property-cleanup-gallatin';
const PAGE_TITLE = 'Property Cleanup in Gallatin, TN | Reinhart Hauling';
const PAGE_DESCRIPTION =
  'Insured property cleanup in Gallatin, TN for investors, landlords, and homeowners. Clear debris and prepare properties for renovation or sale. Call 615-200-0064.';

const PROJECT_BASE = '/images/projects/2026%20Projects/2026-06_Investor-Property-Cleanup_Gallatin';
const projectImage = (folder: string, file: string) => `${PROJECT_BASE}/${folder}/${file}`;

const HERO_IMAGE = projectImage('04_Hero', 'hero-general-property-after-01%20copy.jpeg');

const GALLERY = [
  {
    src: projectImage('01_Before', 'general-property-before-01.jpeg'),
    alt: 'Exterior area before property cleanup in Gallatin, Tennessee',
    caption: 'Before — exterior debris around the property',
    label: 'Before' as const,
  },
  {
    src: projectImage('03_After', 'general-property-after-01.jpeg'),
    alt: 'Property after debris removal in Gallatin, Tennessee',
    caption: 'After — cleared exterior ready for the next phase',
    label: 'After' as const,
  },
  {
    src: projectImage('01_Before', 'fence-demo-before-01.jpeg'),
    alt: 'Old fencing before removal during Gallatin property cleanup',
    caption: 'Before — fencing staged for removal',
    label: 'Before' as const,
  },
  {
    src: projectImage('03_After', 'fence-demo-after-03.jpeg'),
    alt: 'Fence line after demolition during Gallatin property cleanup',
    caption: 'After — fence line cleared',
    label: 'After' as const,
  },
  {
    src: projectImage('02_During', 'trailer-full-load-during-01.jpeg'),
    alt: 'Trailer loaded during property cleanup work in Gallatin, TN',
    caption: 'During — materials loaded for haul-away',
    label: 'During' as const,
  },
  {
    src: projectImage('03_After', 'dumpster-access-cleared-01.jpeg'),
    alt: 'Dumpster access cleared after property cleanup in Gallatin, Tennessee',
    caption: 'After — access area opened up',
    label: 'After' as const,
  },
  {
    src: projectImage('03_After', 'bulky-items-after-01.jpeg'),
    alt: 'Bulky materials removed after Gallatin property cleanup',
    caption: 'After — bulky items removed',
    label: 'After' as const,
  },
  {
    src: '/images/projects/garage-cleanouts/garage-cleanout-gallatin-before.jpeg',
    alt: 'Garage before cleanout work in Gallatin, TN',
    caption: 'Before — garage contents before cleanout',
    label: 'Before' as const,
  },
  {
    src: '/images/projects/garage-cleanouts/garage-cleanout-gallatin-after.jpeg',
    alt: 'Garage after cleanout work in Gallatin, TN',
    caption: 'After — garage cleared',
    label: 'After' as const,
  },
  {
    src: projectImage('06_Comparisons', 'general-property-before-after-comparison-01.jpg'),
    alt: 'Before and after comparison of property cleanup in Gallatin, Tennessee',
    caption: 'Before / after comparison — general property area',
    label: null,
  },
];

const SITUATIONS = [
  'Preparing an investment property for renovation',
  'Clearing a property before listing or sale',
  'Rental or landlord turnover cleanup',
  'Removing unwanted materials left around a property',
  'Clearing garages or exterior areas',
  'Preparing a property for contractors or additional work',
  'Dealing with accumulated debris or bulky unwanted items',
];

const PROPERTY_TYPES = [
  'Single-family homes',
  'Investment properties',
  'Rental properties',
  'Garages',
  'Exterior property areas',
  'Vacant or renovation-stage residential properties',
];

const RELATED_SERVICES = [
  { label: 'Property Cleanup', to: '/property-cleanup' },
  { label: 'Property Cleanouts', to: '/property-cleanouts' },
  { label: 'Garage Cleanouts', to: '/garage-cleanouts' },
  { label: 'Junk Removal', to: '/junk-removal' },
];

const PRICING_FACTORS = [
  'Volume of material',
  'Weight',
  'Labor required',
  'Property access',
  'Item type',
  'Disassembly needs',
  'Number of loads',
  'Disposal requirements',
];

const ITEMS_REMOVED = [
  'Furniture and household items',
  'Garage clutter',
  'Exterior debris',
  'Bagged materials',
  'Bulky unwanted items',
  'Fencing and related debris when scheduled',
  'Construction or renovation debris when accepted',
  'Miscellaneous unwanted contents',
];

const PROJECT_SCOPE = [
  'Investor property cleanup',
  'Exterior debris removal',
  'Fence demolition',
  'Construction debris removal',
  'Bulky item removal',
  'Property preparation',
];

const faqs = [
  {
    question: 'Do you provide property cleanup in Gallatin?',
    answer:
      'Yes. Reinhart Hauling & Cleanouts provides insured property cleanup services in Gallatin, Tennessee. We are based in Goodlettsville and serve Gallatin as part of our Middle Tennessee service area.',
  },
  {
    question: 'What types of properties do you clean up?',
    answer:
      'We help with single-family homes, investment properties, rental properties, garages, exterior areas, and vacant or renovation-stage residential properties when the scope fits our cleanup and haul-away work.',
  },
  {
    question: 'Can you help prepare an investment property for renovation or sale?',
    answer:
      'Yes. Investor property cleanup is a common need. Our documented Gallatin investor project included exterior debris removal, fence demolition, bulky item cleanup, and property preparation so the owner could continue the next phase of work.',
  },
  {
    question: 'How are property-cleanup estimates determined?',
    answer:
      'Pricing is based on the amount and type of material, labor required, access, weight, disassembly, equipment needs, and disposal costs. Smaller pickups may be estimated from photos when enough detail is available. Larger cleanups are normally quoted after an on-site walkthrough. Customers receive the price before work begins.',
  },
  {
    question: 'Can photos be used to begin the estimate process?',
    answer:
      'Tell us what you have and provide photos when helpful. Photos may help start the review, but they do not guarantee a quote. After we learn about the project, we determine whether photos or a free on-site estimate is the best fit. Larger or more complex cleanups may require a walkthrough.',
  },
  {
    question: 'What items can you remove?',
    answer:
      'Common cleanup materials include furniture, household items, garage clutter, exterior debris, bagged materials, bulky items, and other unwanted contents when they are safe to handle and within agreed scope. See Items We Remove for a fuller guide.',
  },
  {
    question: 'Are there materials you cannot take?',
    answer:
      'Hazardous chemicals, fuel, biohazards, asbestos-containing material, explosives, medical waste, unknown liquids, and legally restricted waste require prior review and may not be accepted. Other materials may need prior approval. Disclose special materials during the estimate process.',
  },
  {
    question: 'Do you handle garages and exterior areas as part of a cleanup?',
    answer:
      'Yes. Garages and exterior areas are often included in property cleanup scopes when access and materials are confirmed. That can include garage clutter, outdoor debris, fencing within agreed scope, and bulky items around the property.',
  },
];

export default function PropertyCleanupGallatin() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const serviceSchema = buildServiceSchema({
    name: 'Property Cleanup in Gallatin, TN',
    description: PAGE_DESCRIPTION,
    path: PAGE_PATH,
    serviceType: 'Property Cleanup',
  });

  return (
    <>
      <PageMeta
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
        path={PAGE_PATH}
        ogImage={HERO_IMAGE}
        jsonLd={compactJsonLd([
          buildWebPageSchema({
            path: PAGE_PATH,
            name: PAGE_TITLE,
            description: PAGE_DESCRIPTION,
            mainEntityId: `https://www.reinharthauling.com${PAGE_PATH}#service`,
          }),
          serviceSchema,
          buildBreadcrumbListSchema([
            { label: 'Home', to: '/' },
            { label: 'Property Cleanup', to: '/property-cleanup' },
            { label: 'Property Cleanup in Gallatin', to: PAGE_PATH },
          ]),
          buildFAQPageSchema(faqs),
        ])}
      />

      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white pt-32 pb-20 lg:pt-48 lg:pb-28">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(15,23,42,0.04),transparent_55%)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm font-semibold text-slate-500" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-brand-orange">
              Home
            </Link>
            <span>/</span>
            <Link to="/property-cleanup" className="hover:text-brand-orange">
              Property Cleanup
            </Link>
            <span>/</span>
            <span className="text-brand-navy">Property Cleanup in Gallatin</span>
          </nav>

          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-brand-orange/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-orange">
                <MapPin size={14} />
                Gallatin Property Cleanup
              </span>
              <h1 className="mb-7 font-display text-5xl font-bold leading-[0.95] tracking-tighter text-brand-navy lg:text-6xl">
                Property Cleanup in Gallatin, TN
              </h1>
              <p className="mb-8 max-w-xl text-lg leading-relaxed text-slate-600 lg:text-xl">
                Reinhart Hauling &amp; Cleanouts provides insured property cleanup in Gallatin for investors, landlords,
                homeowners, and property owners dealing with unwanted materials, debris, or cleanup needs. Based in
                Goodlettsville, we serve Gallatin as a mobile service-area business—not from a Gallatin office.
              </p>
              <PageCTAs layout="hero" />
              <p className="mt-4 text-sm text-slate-500">Call or text 615-200-0064</p>
            </div>

            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-2xl shadow-slate-200/70">
                <img
                  src={HERO_IMAGE}
                  alt="Property after cleanup work completed in Gallatin, Tennessee"
                  className="h-[300px] w-full object-cover sm:h-[420px]"
                  width={1600}
                  height={1200}
                  fetchPriority="high"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-brand-orange">
              Local Service Overview
            </span>
            <h2 className="font-display text-4xl font-bold leading-tight text-brand-navy lg:text-5xl">
              What does property cleanup look like here?
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-slate-600 lg:col-span-7">
            <p>
              Property cleanup in Gallatin means clearing unwanted materials, debris, and bulky items so a home or
              investment property can move toward renovation, sale, rental, or the next contractor phase. Work may
              include exterior clearing, garage support, and haul-away of debris that is slowing progress.
            </p>
            <p>
              Our documented{' '}
              <Link
                to="/projects/investor-property-cleanup-gallatin"
                className="font-bold text-brand-orange hover:text-brand-navy"
              >
                investor property cleanup in Gallatin
              </Link>{' '}
              included exterior debris removal, fence demolition, bulky item cleanup, construction debris haul-away, and
              property preparation after complaints about trash around the home. That project is local proof—not a
              generic service description.
            </p>
            <p>
              For whole-property contents removal, see{' '}
              <Link to="/property-cleanouts" className="font-bold text-brand-orange hover:text-brand-navy">
                property cleanouts
              </Link>
              . For the broader service across Middle Tennessee, see{' '}
              <Link to="/property-cleanup" className="font-bold text-brand-orange hover:text-brand-navy">
                property cleanup
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-3xl">
            <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-brand-orange">
              Customer Situations
            </span>
            <h2 className="mb-4 font-display text-4xl font-bold text-brand-navy lg:text-5xl">
              When do people call for property cleanup?
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              Common situations that fit cleanup and haul-away support—consistent with the services and Gallatin work we
              document on this site.
            </p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2" role="list">
            {SITUATIONS.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 text-base font-medium text-slate-700 shadow-sm"
              >
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-orange" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-3xl">
            <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-brand-orange">
              Property Types
            </span>
            <h2 className="mb-4 font-display text-4xl font-bold text-brand-navy lg:text-5xl">
              What property types do you clean up?
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              Residential and investment-focused cleanup scopes supported by our documented Gallatin work and related
              services.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PROPERTY_TYPES.map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 font-bold text-brand-navy">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-3xl">
            <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-brand-orange">
              Real Gallatin Project Proof
            </span>
            <h2 className="mb-4 font-display text-4xl font-bold text-brand-navy lg:text-5xl">
              Investor property cleanup in Gallatin
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              A documented project for a real estate investor: exterior debris removal, fence demo, bulky item cleanup,
              and property preparation so work could continue.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-12">
            <div className="space-y-6 lg:col-span-5">
              <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                <h3 className="mb-4 font-display text-2xl font-bold text-brand-navy">Project summary</h3>
                <dl className="space-y-4 text-sm">
                  <div>
                    <dt className="mb-1 font-bold text-brand-navy">Location</dt>
                    <dd className="text-slate-600">Gallatin, TN</dd>
                  </div>
                  <div>
                    <dt className="mb-1 font-bold text-brand-navy">Client type</dt>
                    <dd className="text-slate-600">Real estate investor</dd>
                  </div>
                  <div>
                    <dt className="mb-2 font-bold text-brand-navy">Verified scope</dt>
                    <dd>
                      <ul className="space-y-1.5" role="list">
                        {PROJECT_SCOPE.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-slate-600">
                            <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-brand-orange" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                  <div>
                    <dt className="mb-1 font-bold text-brand-navy">Outcome</dt>
                    <dd className="text-slate-600">
                      Exterior areas cleaned up, access improved, and the property better positioned for continued
                      investor work.
                    </dd>
                  </div>
                </dl>
              </div>
              <Link
                to="/projects/investor-property-cleanup-gallatin"
                className="inline-flex items-center gap-2 font-bold text-brand-navy transition-colors hover:text-brand-orange"
              >
                View the full Gallatin project case study
                <ArrowRight size={18} className="text-brand-orange" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4 lg:col-span-7">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
                <img
                  src={projectImage('01_Before', 'general-property-before-01.jpeg')}
                  alt="Exterior area before property cleanup in Gallatin, Tennessee"
                  className="h-full w-full object-cover"
                  width={800}
                  height={600}
                  loading="lazy"
                  decoding="async"
                />
                <span className="absolute bottom-2 left-2 rounded-full bg-brand-orange px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                  Before
                </span>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
                <img
                  src={projectImage('03_After', 'general-property-after-01.jpeg')}
                  alt="Property after debris removal in Gallatin, Tennessee"
                  className="h-full w-full object-cover"
                  width={800}
                  height={600}
                  loading="lazy"
                  decoding="async"
                />
                <span className="absolute bottom-2 right-2 rounded-full bg-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-brand-navy">
                  After
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-3xl">
            <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-brand-orange">
              Photo Gallery
            </span>
            <h2 className="mb-4 font-display text-4xl font-bold text-brand-navy lg:text-5xl">
              Gallatin cleanup photography
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              A curated set from verified Gallatin work. See the{' '}
              <Link
                to="/projects/investor-property-cleanup-gallatin"
                className="font-bold text-brand-orange hover:text-brand-navy"
              >
                full project gallery
              </Link>{' '}
              and{' '}
              <Link to="/projects" className="font-bold text-brand-orange hover:text-brand-navy">
                all projects
              </Link>{' '}
              for more.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {GALLERY.map((photo) => (
              <figure
                key={photo.src}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
              >
                <div className="relative aspect-[4/3] bg-slate-100">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="h-full w-full object-cover"
                    width={800}
                    height={600}
                    loading="lazy"
                    decoding="async"
                  />
                  {photo.label && (
                    <span
                      className={`absolute bottom-2 left-2 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest ${
                        photo.label === 'Before'
                          ? 'bg-brand-orange text-white'
                          : photo.label === 'During'
                            ? 'bg-brand-navy text-white'
                            : 'bg-white text-brand-navy'
                      }`}
                    >
                      {photo.label}
                    </span>
                  )}
                </div>
                <figcaption className="px-4 py-3 text-xs font-semibold leading-relaxed text-slate-600">
                  {photo.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 max-w-3xl">
            <h2 className="mb-4 font-display text-4xl font-bold text-brand-navy">Related services</h2>
            <p className="text-lg leading-relaxed text-slate-600">
              Supporting services that often appear during property cleanup—without competing with the primary topic.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {RELATED_SERVICES.map((service) => (
              <Link
                key={service.to}
                to={service.to}
                className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-5 py-4 font-bold text-brand-navy shadow-sm transition-colors hover:border-brand-orange/40"
              >
                <span>{service.label}</span>
                <ArrowRight size={16} className="text-brand-orange transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-brand-orange">
              Estimates &amp; Pricing
            </span>
            <h2 className="font-display text-4xl font-bold leading-tight text-brand-navy lg:text-5xl">
              How do estimates and pricing work?
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-slate-600 lg:col-span-7">
            <p>
              Contact us by phone, text, or the estimate form. Tell us what you have and provide photos when helpful.
              After we learn about the project, we determine whether photos or a free on-site estimate is the best fit.
              Larger cleanups often benefit from a walkthrough so access, labor, and disposal planning stay accurate.
            </p>
            <p>
              You receive a clear, no-obligation quote before work begins. We do not promise instant estimates, photo-only
              pricing for every job, or same-day availability.
            </p>
            <p className="font-semibold text-brand-navy">Factors that affect pricing include:</p>
            <ul className="grid gap-2 sm:grid-cols-2" role="list">
              {PRICING_FACTORS.map((item) => (
                <li key={item} className="flex items-start gap-2 text-base text-slate-700">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-brand-orange" />
                  {item}
                </li>
              ))}
            </ul>
            <p>
              For a fuller explanation, see{' '}
              <Link to="/pricing" className="font-bold text-brand-orange hover:text-brand-navy">
                how pricing works
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 font-display text-3xl font-bold text-brand-navy lg:text-4xl">
              Commonly removed items
            </h2>
            <p className="mb-6 leading-relaxed text-slate-600">
              Short list consistent with{' '}
              <Link to="/what-we-take" className="font-bold text-brand-orange hover:text-brand-navy">
                Items We Remove
              </Link>
              . Acceptance depends on scope, safety, and disposal requirements.
            </p>
            <ul className="space-y-2" role="list">
              {ITEMS_REMOVED.map((item) => (
                <li key={item} className="flex items-start gap-2 text-slate-700">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-brand-orange" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-4 font-display text-3xl font-bold text-brand-navy lg:text-4xl">
              Restricted materials
            </h2>
            <p className="mb-6 leading-relaxed text-slate-600">
              Some materials cannot be accepted, may need advance approval, or require special handling. Disclose them
              during the estimate process. Hazardous chemicals, fuel, biohazards, asbestos-containing material,
              explosives, medical waste, unknown liquids, and legally restricted waste require prior review and may not
              be accepted.
            </p>
            <Link
              to="/what-we-take#not-accepted"
              className="inline-flex items-center gap-2 font-bold text-brand-navy transition-colors hover:text-brand-orange"
            >
              Read restricted-material guidance
              <ArrowRight size={18} className="text-brand-orange" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 md:p-10">
            <h2 className="mb-3 font-display text-3xl font-bold text-brand-navy">Reviews &amp; trust</h2>
            <p className="mb-6 max-w-3xl leading-relaxed text-slate-600">
              Reinhart Hauling &amp; Cleanouts is insured and owned by Jeremiah Reinhart. Read verified customer feedback
              on our homepage reviews—we do not invent Gallatin-specific testimonials on this page.
            </p>
            <Link
              to="/#reviews"
              className="inline-flex items-center gap-2 font-bold text-brand-navy transition-colors hover:text-brand-orange"
            >
              View reviews
              <ArrowRight size={18} className="text-brand-orange" />
            </Link>
          </div>
        </div>
      </section>

      <section id="faqs" className="scroll-mt-32 bg-slate-50 py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-display text-4xl font-bold text-brand-navy">Property cleanup FAQs</h2>
            <p className="leading-relaxed text-slate-600">
              Direct answers about cleanup work, estimates, and what we can remove.
            </p>
          </div>
          <div className="space-y-3">
            {faqs.map((item, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={item.question} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  >
                    <span className="font-display text-base font-bold leading-snug text-brand-navy md:text-lg">
                      {item.question}
                    </span>
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

      <ServiceBottomCTA variant="dark" />
    </>
  );
}
