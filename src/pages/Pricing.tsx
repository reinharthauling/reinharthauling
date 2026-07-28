import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  MessageSquare,
  Phone,
} from 'lucide-react';
import EstimateRequestButton from '../components/EstimateRequestButton.tsx';
import ServiceBottomCTA from '../components/ServiceBottomCTA.tsx';
import PageMeta from '../components/PageMeta.tsx';
import { useEstimateRequest } from '../context/EstimateRequestContext.tsx';
import {
  buildBreadcrumbListSchema,
  buildFAQPageSchema,
  buildWebPageSchema,
  compactJsonLd,
} from '../utils/schema.ts';

const PAGE_TITLE = 'Pricing & Free Estimates | Reinhart Hauling & Cleanouts';
const PAGE_DESCRIPTION =
  'How junk removal and property cleanout pricing works in Middle Tennessee. Free estimates for residential, commercial, estate, and demolition projects. Call 615-200-0064.';

const pricingFactors = [
  {
    title: 'Volume',
    desc: 'How much material needs to be removed from the property or space.',
  },
  {
    title: 'Weight',
    desc: 'Dense or heavy materials can change labor, equipment, and disposal costs.',
  },
  {
    title: 'Labor Required',
    desc: 'Crew size and time needed to clear, carry, load, and finish the space.',
  },
  {
    title: 'Property Access',
    desc: 'Driveways, gates, loading docks, parking limits, and how easily the truck can stage.',
  },
  {
    title: 'Distance from Truck',
    desc: 'Longer carry distances increase labor and scheduling needs.',
  },
  {
    title: 'Stairs & Elevators',
    desc: 'Multi-level access, elevator timing, and building rules affect the estimate.',
  },
  {
    title: 'Demolition Work',
    desc: 'Selective tear-out, disassembly, and debris handling add scope beyond simple haul-away.',
  },
  {
    title: 'Disposal Costs',
    desc: 'Landfill, transfer, and material-specific disposal fees are part of the quote.',
  },
  {
    title: 'Recycling Opportunities',
    desc: 'Scrap recovery, recycling, or donation may apply when practical and appropriate.',
  },
  {
    title: 'Project Complexity',
    desc: 'Mixed materials, sensitive contents, or phased work change planning and pricing.',
  },
  {
    title: 'Multiple Buildings',
    desc: 'Homes, sheds, garages, offices, or adjacent spaces may require coordinated loading.',
  },
  {
    title: 'Scheduling Needs',
    desc: 'Tight deadlines, after-hours access, and coordination with other trades can affect cost.',
  },
];

const estimateSteps = [
  {
    step: 'Step 1',
    title: 'Contact Us',
    desc: 'Call, text, or submit our estimate form. Tell us what you have and where the work is located.',
  },
  {
    step: 'Step 2',
    title: 'Review the Project',
    desc: 'After we learn more about your project, we determine whether photos or a free on-site estimate is the best fit.',
  },
  {
    step: 'Step 3',
    title: 'Receive a Clear Quote',
    desc: 'You receive a clear, no-obligation quote based on the confirmed scope of work.',
  },
  {
    step: 'Step 4',
    title: 'Schedule & Complete',
    desc: 'Schedule the project and we complete the work professionally—with pricing confirmed before work begins.',
  },
];

const onSiteBenefits = [
  'More accurate pricing',
  'Better project planning',
  'Access evaluation',
  'Equipment planning',
  'Disposal planning',
  'Opportunity to answer your questions on site',
];

const onSiteExamples = [
  { label: 'Estate cleanouts', to: '/estate-cleanouts' },
  { label: 'Hoarding situations', to: '/hoarder-cleanouts' },
  { label: 'Commercial projects', to: '/commercial-cleanouts' },
  { label: 'Warehouses', to: '/warehouse-cleanouts' },
  { label: 'Office cleanouts', to: '/office-load-outs' },
  { label: 'Retail decommissioning', to: '/retail-decommissioning' },
  { label: 'Interior demolition', to: '/interior-demolition' },
  { label: 'Large property cleanups', to: '/property-cleanup' },
];

const relatedLinks = [
  { label: 'Property Cleanouts', to: '/property-cleanouts' },
  { label: 'Property Cleanup', to: '/property-cleanup' },
  { label: 'Estate Cleanouts', to: '/estate-cleanouts' },
  { label: 'Hoarder Cleanouts', to: '/hoarder-cleanouts' },
  { label: 'Commercial Cleanouts', to: '/commercial-cleanouts' },
  { label: 'Warehouse Cleanouts', to: '/warehouse-cleanouts' },
  { label: 'Office Load-Outs', to: '/office-load-outs' },
  { label: 'Retail Decommissioning', to: '/retail-decommissioning' },
  { label: 'Landlord & Rental Cleanouts', to: '/landlord-rental-cleanouts' },
  { label: 'Eviction Cleanouts', to: '/eviction-cleanouts' },
  { label: 'Interior Demolition', to: '/interior-demolition' },
  { label: 'Construction Cleanup', to: '/construction-cleanup' },
  { label: 'Items We Remove', to: '/what-we-take' },
  { label: 'Projects', to: '/projects' },
  { label: 'Reviews', to: '/#reviews' },
];

const faqs = [
  {
    question: 'How is pricing determined?',
    answer:
      'Pricing is based on the amount and type of material, labor required, access, weight, disassembly, equipment needs, and disposal costs. After we learn about the project, we determine whether photos or a free on-site estimate is appropriate. Smaller pickups may be estimated from photos when enough detail is available. Larger cleanouts and demolition projects are normally quoted after an on-site walkthrough. Customers receive the price before work begins.',
  },
  {
    question: 'Can I receive an estimate from photos?',
    answer:
      'Tell us what you have and provide photos when helpful. Photos may help start the review, but they do not guarantee a quote and are not sufficient for every estimate. After we learn about the project, we determine the appropriate estimate method. Larger, commercial, estate, hoarding, demolition, or otherwise complex projects may require an on-site walkthrough.',
  },
  {
    question: 'When do you recommend an on-site estimate?',
    answer:
      'We recommend a free on-site walkthrough for larger or more complex jobs—such as estate cleanouts, hoarding situations, commercial projects, warehouses, office cleanouts, retail decommissioning, interior demolition, and large property cleanups—so pricing, access, equipment, and disposal planning are accurate. After learning about the project, we confirm whether photos or an on-site estimate is the better fit.',
  },
  {
    question: 'Are estimates free?',
    answer:
      'Yes. Estimates are free and no-obligation. Contact us by phone, text, or the estimate form to get started.',
  },
  {
    question: 'Are there additional disposal charges?',
    answer:
      'Disposal costs are part of how pricing is determined and are included in the quote when we confirm scope. Material type, weight, and landfill or transfer requirements can affect the total. You receive the price before work begins.',
  },
  {
    question: 'What materials require prior approval?',
    answer:
      'Acceptance may depend on weight, quantity, equipment needs, landfill requirements, and local regulations for items such as tires, refrigerators, freezers, air-conditioning equipment, televisions and e-waste, extremely heavy equipment, concrete, dirt, brick, shingles, dense construction debris, paint, and propane tanks. See Items We Remove for details.',
  },
  {
    question: 'Do you provide commercial estimates?',
    answer:
      'Yes. We provide estimates for commercial cleanouts, warehouse cleanouts, office load-outs, retail decommissioning, construction cleanup, and related commercial scopes across Middle Tennessee.',
  },
  {
    question: 'Do you provide written estimates?',
    answer:
      'Yes. Once scope is confirmed, you receive a clear quote before work begins so you know the price up front.',
  },
  {
    question: 'Can you quote large estate or hoarding projects?',
    answer:
      'Yes. Large estate and hoarding projects are normally quoted after a free on-site walkthrough so we can evaluate volume, access, labor, and disposal needs accurately.',
  },
  {
    question: 'How quickly can I schedule an estimate?',
    answer:
      'Timing depends on scheduling, location, project size, and access. Call or text 615-200-0064, or request an estimate online, and we will confirm the next available step. Same-day estimates are not guaranteed.',
  },
];

export default function Pricing() {
  const { openEstimateRequest } = useEstimateRequest();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <>
      <PageMeta
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
        path="/pricing"
        jsonLd={compactJsonLd([
          buildWebPageSchema({
            path: '/pricing',
            name: PAGE_TITLE,
            description: PAGE_DESCRIPTION,
          }),
          buildBreadcrumbListSchema([
            { label: 'Home', to: '/' },
            { label: 'Pricing', to: '/pricing' },
          ]),
          buildFAQPageSchema(faqs),
        ])}
      />

      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white pt-32 pb-20 lg:pt-48 lg:pb-28">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(15,23,42,0.04),transparent_55%)]"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.055)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_18%,#000_50%,transparent_100%)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <nav className="mb-8 flex items-center gap-2 text-sm font-semibold text-slate-500" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-brand-orange">
              Home
            </Link>
            <span>/</span>
            <span className="text-brand-navy">Pricing</span>
          </nav>

          <div className="max-w-5xl">
            <span className="mb-6 inline-block rounded-full bg-brand-orange/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-orange">
              Pricing &amp; Estimates
            </span>
            <h1 className="mb-7 font-display text-5xl font-bold leading-[0.95] tracking-tighter text-brand-navy lg:text-7xl">
              How Pricing Works
            </h1>
            <div className="max-w-4xl space-y-5 text-lg leading-relaxed text-slate-600 lg:text-xl">
              <p>
                Pricing for Reinhart Hauling &amp; Cleanouts is based on the actual scope of work—not one-size-fits-all
                rates. We specialize in{' '}
                <Link to="/property-cleanouts" className="font-bold text-brand-orange hover:text-brand-navy">
                  property cleanouts
                </Link>
                ,{' '}
                <Link to="/commercial-cleanouts" className="font-bold text-brand-orange hover:text-brand-navy">
                  commercial cleanouts
                </Link>
                ,{' '}
                <Link to="/estate-cleanouts" className="font-bold text-brand-orange hover:text-brand-navy">
                  estate cleanouts
                </Link>
                ,{' '}
                <Link to="/hoarder-cleanouts" className="font-bold text-brand-orange hover:text-brand-navy">
                  hoarder cleanouts
                </Link>
                ,{' '}
                <Link to="/landlord-rental-cleanouts" className="font-bold text-brand-orange hover:text-brand-navy">
                  landlord &amp; rental turnovers
                </Link>
                ,{' '}
                <Link to="/warehouse-cleanouts" className="font-bold text-brand-orange hover:text-brand-navy">
                  warehouse
                </Link>{' '}
                &amp;{' '}
                <Link to="/office-load-outs" className="font-bold text-brand-orange hover:text-brand-navy">
                  office cleanouts
                </Link>
                ,{' '}
                <Link to="/retail-decommissioning" className="font-bold text-brand-orange hover:text-brand-navy">
                  retail decommissioning
                </Link>
                ,{' '}
                <Link to="/interior-demolition" className="font-bold text-brand-orange hover:text-brand-navy">
                  interior demolition
                </Link>
                , and{' '}
                <Link to="/construction-cleanup" className="font-bold text-brand-orange hover:text-brand-navy">
                  construction cleanup
                </Link>{' '}
                across Middle Tennessee.
              </p>
              <p>
                Volume, weight, labor, access, disposal, and project complexity all affect the quote. Tell us what you
                have and provide photos when helpful—photos may help start the review, but they do not guarantee a
                quote. After we learn about the project, we determine whether photos or a free on-site estimate is the
                right fit. Larger, commercial, estate, hoarding, demolition, or otherwise complex projects may require
                an on-site walkthrough. Customers receive the price before work begins.
              </p>
            </div>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <EstimateRequestButton />
              <motion.a
                href="tel:+16152000064"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-3 rounded-2xl border-2 border-slate-200 bg-white px-8 py-4 text-lg font-bold text-brand-navy transition-colors hover:border-brand-orange"
              >
                <Phone size={18} />
                Call to Discuss Your Project
              </motion.a>
              <motion.a
                href="sms:+16152000064?body=Hi%20Reinhart%20-%20I%27d%20like%20to%20get%20started%20on%20an%20estimate.%20Here%20are%20project%20details%20and%20photos%20when%20helpful:"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-3 rounded-2xl border-2 border-slate-200 bg-white px-8 py-4 text-lg font-bold text-brand-navy transition-colors hover:border-brand-orange"
              >
                <MessageSquare size={18} />
                Text Us Photos to Get Started
              </motion.a>
            </div>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-500 lg:text-base">
              Texting photos helps us begin the review. It does not mean every project can be priced remotely—we
              confirm the appropriate estimate method after learning about your scope.
            </p>

            <div className="mt-7 flex flex-wrap gap-3 text-sm font-bold text-brand-navy">
              {['Free Estimates', 'Clear Quote Before Work', 'Fully Insured', 'No Obligation'].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm"
                >
                  <CheckCircle2 size={16} className="text-brand-orange" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-3xl">
            <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-brand-orange">
              What Affects Pricing
            </span>
            <h2 className="mb-4 font-display text-4xl font-bold text-brand-navy lg:text-5xl">
              What factors determine cleanout and junk removal pricing?
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              Every project is different. These factors help explain why quotes are based on real scope—not a fixed
              price chart.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {pricingFactors.map((factor, index) => (
              <motion.div
                key={factor.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.02 }}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
              >
                <h3 className="mb-2 font-display text-xl font-bold text-brand-navy">{factor.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{factor.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-3xl">
            <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-brand-orange">
              Estimate Process
            </span>
            <h2 className="mb-4 font-display text-4xl font-bold text-brand-navy lg:text-5xl">
              How do free estimates work?
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              After we learn about your project, Reinhart determines the appropriate estimate method. Photos may help
              start the review for smaller pickups when enough detail is available. Larger, commercial, estate,
              hoarding, demolition, or otherwise complex projects may require a free on-site walkthrough.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {estimateSteps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-lg shadow-slate-200/40"
              >
                <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-brand-orange">
                  {item.step}
                </span>
                <h3 className="mb-3 font-display text-2xl font-bold text-brand-navy">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <motion.button
              type="button"
              onClick={openEstimateRequest}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-3 rounded-2xl bg-brand-navy px-8 py-4 text-lg font-bold text-white shadow-2xl shadow-brand-navy/30 transition-all hover:bg-brand-orange"
            >
              <ClipboardList className="text-brand-orange" />
              Request a Free Estimate
            </motion.button>
            <motion.button
              type="button"
              onClick={openEstimateRequest}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-3 rounded-2xl border-2 border-slate-200 bg-white px-8 py-4 text-lg font-bold text-brand-navy transition-colors hover:border-brand-orange"
            >
              Schedule a Free On-Site Estimate
            </motion.button>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-brand-orange">
              On-Site Estimates
            </span>
            <h2 className="font-display text-4xl font-bold leading-tight text-brand-navy lg:text-5xl">
              Why on-site estimates matter for larger projects
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-slate-600 lg:col-span-7">
            <p>
              Larger projects often benefit from a free on-site walkthrough. Seeing the property helps us price
              accurately and plan the job so there are fewer surprises for you.
            </p>
            <p>
              Common examples include estate cleanouts, hoarding situations, commercial projects, warehouses, office
              cleanouts, retail decommissioning, interior demolition, and large property cleanups.
            </p>
            <ul className="grid gap-3 sm:grid-cols-2" role="list">
              {onSiteBenefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-2 text-base font-medium text-slate-700">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-orange" />
                  {benefit}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-x-4 gap-y-2 pt-2 text-base">
              {onSiteExamples.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="font-bold text-brand-orange hover:text-brand-navy"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <motion.button
              type="button"
              onClick={openEstimateRequest}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-3 rounded-2xl bg-brand-navy px-8 py-4 text-lg font-bold text-white shadow-2xl shadow-brand-navy/30 transition-all hover:bg-brand-orange"
            >
              <ClipboardList className="text-brand-orange" />
              Request a Property Walkthrough
            </motion.button>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-3xl">
            <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-brand-orange">
              Related Services
            </span>
            <h2 className="mb-4 font-display text-4xl font-bold text-brand-navy lg:text-5xl">
              Estimate pricing for the work you need
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              Explore common project types, see what we remove, or review past work before you request an estimate.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {relatedLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-5 py-4 font-bold text-brand-navy shadow-sm transition-colors hover:border-brand-orange/40"
              >
                <span>{link.label}</span>
                <ArrowRight size={16} className="text-brand-orange transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
            <button
              type="button"
              onClick={openEstimateRequest}
              className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-5 py-4 text-left font-bold text-brand-navy shadow-sm transition-colors hover:border-brand-orange/40"
            >
              <span>Contact / Estimate Request</span>
              <ArrowRight size={16} className="text-brand-orange transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

      <section id="faqs" className="scroll-mt-32 bg-white py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-display text-4xl font-bold text-brand-navy">Pricing FAQs</h2>
            <p className="leading-relaxed text-slate-600">
              Direct answers about estimates, on-site walkthroughs, and how cleanout pricing works.
            </p>
          </div>
          <div className="space-y-3">
            {faqs.map((item, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={item.question} className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm">
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
                      {item.question === 'What materials require prior approval?' && (
                        <p className="mt-3 text-sm md:text-base">
                          <Link to="/what-we-take" className="font-bold text-brand-orange hover:text-brand-navy">
                            View Items We Remove
                          </Link>
                        </p>
                      )}
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
