import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageCTAs from '../components/PageCTAs.tsx';
import ServiceBottomCTA from '../components/ServiceBottomCTA.tsx';
import {
  buildBreadcrumbListSchema,
  buildFAQPageSchema,
  buildServiceSchema,
  buildWebPageSchema,
  compactJsonLd,
} from '../utils/schema.ts';
import PageMeta from '../components/PageMeta.tsx';
import { SERVICE_AREAS_FAQ_ANSWER } from '../data/business.ts';

const PAGE_TITLE = 'Junk Removal in Goodlettsville TN | Property Cleanout Support | Reinhart';
const PAGE_DESCRIPTION =
  'Insured junk removal in Goodlettsville as part of property cleanouts, rental turnovers, and bulky-item haul-away. Call 615-200-0064.';

const LOCAL_FAQS = [
  {
    question: 'What does junk removal in Goodlettsville include?',
    answer:
      'Junk removal here supports property cleanouts, household cleanup, landlord and rental cleanup, investor-property cleanup, bulky-item removal, and construction debris removal—furniture, appliances, garage contents, yard debris, and mixed household items within an agreed scope.',
  },
  {
    question: 'How is junk removal different from a full property cleanout?',
    answer:
      'Junk removal focuses on removing specific unwanted items or rooms. A full property cleanout clears unwanted contents across a home, estate, rental, or similar structure. For whole-property contents removal, see our Property Cleanouts page.',
  },
  {
    question: 'How is pricing determined?',
    answer:
      'Pricing is based on the amount and type of material, labor required, access, weight, disassembly, equipment needs, and disposal costs. Smaller pickups may be estimated from photos. Larger cleanouts and demolition projects are normally quoted after an on-site walkthrough. Customers receive the price before work begins.',
  },
  {
    question: 'Are there materials that require prior review?',
    answer:
      'Hazardous chemicals, fuel, biohazards, asbestos-containing material, explosives, medical waste, unknown liquids, and legally restricted waste require prior review and may not be accepted.',
  },
  {
    question: 'Is Reinhart based in Goodlettsville?',
    answer:
      'Yes. Reinhart Hauling & Cleanouts is based in Goodlettsville and serves as a mobile, insured service-area business throughout Middle Tennessee.',
  },
  {
    question: 'What areas do you serve?',
    answer: SERVICE_AREAS_FAQ_ANSWER,
  },
];

const RELATED_SERVICES = [
  { label: 'Property Cleanouts', to: '/property-cleanouts' },
  { label: 'Property Cleanup', to: '/property-cleanup' },
  { label: 'Garage Cleanouts', to: '/garage-cleanouts' },
  { label: 'Landlord & Rental Cleanouts', to: '/landlord-rental-cleanouts' },
  { label: 'Construction Cleanup', to: '/construction-cleanup' },
  { label: 'Items We Remove', to: '/what-we-take' },
];

export default function JunkRemovalGoodlettsville() {
  const reasons = ['Locally based in Goodlettsville', 'Clear quote before work', 'Insured service', 'Property cleanout support'];

  const serviceSchema = buildServiceSchema({
    name: 'Junk Removal in Goodlettsville, TN',
    description: PAGE_DESCRIPTION,
    path: '/junk-removal-goodlettsville',
    serviceType: 'Junk Removal',
  });
  const faqSchema = buildFAQPageSchema(LOCAL_FAQS);

  return (
    <>
      <PageMeta
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
        path="/junk-removal-goodlettsville"
        jsonLd={compactJsonLd([
          buildWebPageSchema({
            path: '/junk-removal-goodlettsville',
            name: PAGE_TITLE,
            description: PAGE_DESCRIPTION,
            mainEntityId: 'https://www.reinharthauling.com/junk-removal-goodlettsville#service',
          }),
          serviceSchema,
          faqSchema,
          buildBreadcrumbListSchema([
            { label: 'Home', to: '/' },
            { label: 'Junk Removal', to: '/junk-removal' },
            { label: 'Goodlettsville' },
          ]),
        ])}
      />
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-bold uppercase tracking-widest mb-6">
                GOODLETTSVILLE JUNK REMOVAL
              </span>
              <h1 className="font-display text-5xl lg:text-7xl font-bold leading-[0.95] tracking-tighter text-brand-navy mb-8">
                Junk Removal in Goodlettsville, TN
              </h1>
              <p className="text-lg lg:text-xl text-slate-600 leading-relaxed mb-6 max-w-2xl">
                Reinhart Hauling &amp; Cleanouts is based in Goodlettsville and provides insured junk removal as part of
                property cleanouts, household cleanup, landlord and rental cleanup, investor-property cleanup, bulky-item
                removal, and construction debris removal—not as a discount single-item pickup service.
              </p>
              <p className="text-base text-slate-600 leading-relaxed mb-8 max-w-2xl">
                For whole-property contents removal, see{' '}
                <Link to="/property-cleanouts" className="text-brand-orange hover:text-brand-navy transition-colors">
                  property cleanouts
                </Link>
                . For broader interior and exterior resets, see{' '}
                <Link to="/property-cleanup" className="text-brand-orange hover:text-brand-navy transition-colors">
                  property cleanup
                </Link>
                . Related:{' '}
                <Link to="/garage-cleanouts" className="text-brand-orange hover:text-brand-navy transition-colors">
                  garage cleanouts
                </Link>
                ,{' '}
                <Link
                  to="/landlord-rental-cleanouts"
                  className="text-brand-orange hover:text-brand-navy transition-colors"
                >
                  rental cleanouts
                </Link>
                , and{' '}
                <Link to="/construction-cleanup" className="text-brand-orange hover:text-brand-navy transition-colors">
                  construction cleanup
                </Link>
                .
              </p>

              <PageCTAs layout="hero" />
              <div className="mt-3 text-sm text-slate-500">
                <p className="text-slate-400">Call or text: 615-200-0064</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-navy mb-6">
              What Types of Junk Removal Jobs Do You Handle?
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Bulky-item and cleanout support that fits property projects across Goodlettsville and Middle Tennessee.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Furniture Removal',
                desc: 'Couches, chairs, tables, dressers, and other bulky household furniture.',
              },
              {
                title: 'Appliance Removal',
                desc: 'Washers, dryers, refrigerators, stoves, and unwanted appliances.',
              },
              {
                title: 'Garage Cleanouts',
                desc: 'Tools, storage clutter, boxes, shelving, and garage contents.',
              },
              {
                title: 'Yard Debris',
                desc: 'Brush, branches, bagged yard waste, and outdoor cleanup debris.',
              },
              {
                title: 'Mattress & Bulky Items',
                desc: 'Mattresses, box springs, bed frames, and other heavy household items.',
              },
              {
                title: 'Construction Debris Support',
                desc: 'Renovation leftovers and construction debris when haul-away is needed after project work.',
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col gap-6"
              >
                <div className="w-12 h-12 bg-brand-navy/5 rounded-xl flex items-center justify-center text-brand-orange">
                  <CheckCircle2 />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-brand-navy mb-2">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-brand-navy mb-4">Why Choose Reinhart Hauling &amp; Cleanouts</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Local cleanout support with clear communication and insured service—not bargain junk pickup positioning.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {reasons.map((reason) => (
              <motion.div
                key={reason}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-2xl bg-brand-orange/10 flex items-center justify-center text-brand-orange">
                  <CheckCircle2 />
                </div>
                <h3 className="font-display text-lg font-bold text-brand-navy">{reason}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-brand-navy mb-4">Areas We Serve</h2>
            <p className="text-slate-500 max-w-3xl mx-auto">
              Based in Goodlettsville and serving Middle Tennessee, including Hendersonville, Gallatin, White House,
              Springfield, Nashville-area communities, and nearby markets when the project fits.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-slate-100 relative text-left">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-orange/10 rounded-2xl flex items-center justify-center text-brand-orange shrink-0">
                  <MapPin />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-brand-navy mb-3">Goodlettsville &amp; Middle Tennessee</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Share the property address and scope. We confirm whether the location and project fit our service
                    area and scheduling.
                  </p>
                </div>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+16152000064"
                  className="bg-brand-navy text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl shadow-brand-navy/30 flex items-center justify-center gap-3 hover:bg-brand-orange transition-all hover:scale-105"
                >
                  <Phone />
                  Call or Text 615-200-0064
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-display text-4xl font-bold text-brand-navy">Frequently Asked Questions</h2>
            <p className="leading-relaxed text-slate-600">
              Direct answers about junk removal and property cleanout support in Goodlettsville.
            </p>
          </div>
          <div className="space-y-6">
            {LOCAL_FAQS.map((faq) => (
              <div key={faq.question}>
                <h3 className="mb-2 font-display text-xl font-bold text-brand-navy">{faq.question}</h3>
                <p className="leading-relaxed text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl font-bold text-brand-navy mb-4">Related Services</h2>
            <p className="text-slate-500">Junk removal often supports these property and commercial cleanout services.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {RELATED_SERVICES.map((service) => (
              <Link
                key={service.to}
                to={service.to}
                className="px-6 py-4 rounded-2xl border border-slate-200 bg-white text-brand-navy font-bold text-sm hover:border-brand-orange transition-colors text-center"
              >
                {service.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ServiceBottomCTA variant="light" showContactExtras />
    </>
  );
}
