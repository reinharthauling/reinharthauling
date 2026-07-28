import React, { useCallback, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import EstimateRequestButton from '../components/EstimateRequestButton.tsx';
import ServiceBottomCTA from '../components/ServiceBottomCTA.tsx';
import PageMeta from '../components/PageMeta.tsx';
import { scrollToSection, scrollToSectionWhenReady } from '../utils/scrollToSection.ts';
import {
  buildBreadcrumbListSchema,
  buildFAQPageSchema,
  compactJsonLd,
} from '../utils/schema.ts';
import { motion } from 'motion/react';
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronDown,
  Clock,
  Home,
  ShieldCheck,
  Star,
  Truck,
} from 'lucide-react';

type ItemGroup = {
  title: string;
  items: string[];
};

type TakeSection = {
  id: string;
  title: string;
  intro: React.ReactNode;
  groups: ItemGroup[];
};

const PAGE_TITLE = 'Items We Remove | Reinhart Hauling & Cleanouts';
const PAGE_DESCRIPTION =
  'What Reinhart Hauling & Cleanouts removes: household items, property cleanout contents, commercial fixtures, demolition debris, and bulky items. See what needs prior review.';

const quickCategories = [
  ['Household', 'household'],
  ['Property Cleanouts', 'property-cleanout-items'],
  ['Commercial', 'commercial-items'],
  ['Demolition & Bulky Items', 'demolition-bulky'],
  ['Prior Approval', 'prior-approval'],
  ['Not Accepted', 'not-accepted'],
  ['Furniture', 'household'],
  ['Appliances', 'household'],
  ['Office Furniture', 'commercial-items'],
  ['Construction Debris', 'demolition-bulky'],
  ['Hot Tubs', 'demolition-bulky'],
  ['Estate Contents', 'property-cleanout-items'],
] as const;

const takeSections: TakeSection[] = [
  {
    id: 'household',
    title: 'Household',
    intro: (
      <>
        Common household contents removed during room clearings, garage cleanouts, and full{' '}
        <Link to="/property-cleanouts" className="font-bold text-brand-orange hover:text-brand-navy">
          property cleanouts
        </Link>
        .
      </>
    ),
    groups: [
      {
        title: 'Furniture',
        items: [
          'Sofas and sectionals',
          'Recliners and chairs',
          'Tables and desks',
          'Dressers and nightstands',
          'Beds and bed frames',
          'Bookshelves and cabinets',
          'Outdoor and patio furniture',
        ],
      },
      {
        title: 'Mattresses and Box Springs',
        items: ['Twin, full, queen, and king mattresses', 'Box springs', 'Memory foam mattresses', 'Adjustable bases', 'Bed frames'],
      },
      {
        title: 'Appliances',
        items: [
          'Washers and dryers',
          'Ranges, ovens, and microwaves',
          'Dishwashers',
          'Water heaters',
          'Small appliances',
          'Window and portable AC units',
        ],
      },
      {
        title: 'Electronics',
        items: [
          'TVs and stereo equipment',
          'Computers and monitors',
          'Printers and office electronics',
          'Gaming systems',
          'Speakers and projectors',
        ],
      },
      {
        title: 'Household Clutter',
        items: [
          'Boxes and storage totes',
          'Clothing and shoes',
          'Holiday decorations',
          'General household clutter',
          'Closet contents',
        ],
      },
      {
        title: 'Garage Contents',
        items: [
          'Tools and toolboxes',
          'Shelving and workbenches',
          'Lawn equipment',
          'Scrap metal and car parts',
          'General garage clutter',
        ],
      },
      {
        title: 'Attic Contents',
        items: ['Stored boxes and totes', 'Seasonal items', 'Old furniture and debris', 'Insulation debris when scheduled'],
      },
    ],
  },
  {
    id: 'property-cleanout-items',
    title: 'Property Cleanouts',
    intro: (
      <>
        Contents commonly cleared during{' '}
        <Link to="/property-cleanouts" className="font-bold text-brand-orange hover:text-brand-navy">
          property cleanouts
        </Link>
        ,{' '}
        <Link to="/estate-cleanouts" className="font-bold text-brand-orange hover:text-brand-navy">
          estate cleanouts
        </Link>
        ,{' '}
        <Link to="/hoarder-cleanouts" className="font-bold text-brand-orange hover:text-brand-navy">
          hoarder cleanouts
        </Link>
        , and broader{' '}
        <Link to="/property-cleanup" className="font-bold text-brand-orange hover:text-brand-navy">
          property cleanup
        </Link>{' '}
        projects.
      </>
    ),
    groups: [
      {
        title: 'Estate Contents',
        items: ['Full-home contents', 'Furniture and belongings', 'Garage and outbuilding contents', 'Donation and disposal materials'],
      },
      {
        title: 'Hoarded Material',
        items: ['Heavy accumulation', 'Room-by-room contents', 'Mixed household debris', 'Garage and overflow areas'],
      },
      {
        title: 'Rental and Eviction Debris',
        items: ['Left-behind furniture', 'Trash and bagged waste', 'Abandoned belongings', 'Unit turnover debris'],
      },
      {
        title: 'Foreclosure Contents',
        items: ['Abandoned contents', 'Bulky items and appliances', 'Interior debris', 'Exterior clutter'],
      },
      {
        title: 'Investor-Property Contents',
        items: ['Vacant-property contents', 'Renovation prep debris', 'Mixed cleanout materials', 'Exterior reset debris'],
      },
      {
        title: 'Storage-Unit Contents',
        items: ['Furniture and boxes', 'Appliances and mattresses', 'Office and household clutter', 'Mixed unit debris'],
      },
      {
        title: 'Yard and Exterior Debris',
        items: ['Brush and limbs', 'Storm debris', 'Outdoor clutter', 'Patio and fence-line debris'],
      },
    ],
  },
  {
    id: 'commercial-items',
    title: 'Commercial',
    intro: (
      <>
        Commercial contents removed during{' '}
        <Link to="/commercial-cleanouts" className="font-bold text-brand-orange hover:text-brand-navy">
          commercial cleanouts
        </Link>
        ,{' '}
        <Link to="/office-load-outs" className="font-bold text-brand-orange hover:text-brand-navy">
          office load-outs
        </Link>
        , retail decommissioning, and warehouse transitions.
      </>
    ),
    groups: [
      {
        title: 'Office Furniture & Cubicles',
        items: ['Desks and chairs', 'Conference tables', 'Reception furniture', 'Cubicles and workstations', 'Partitions'],
      },
      {
        title: 'File Cabinets & Office Contents',
        items: ['File cabinets', 'Office electronics', 'Copiers and printers', 'Waiting-room furniture'],
      },
      {
        title: 'Retail Fixtures & Displays',
        items: ['Retail fixtures', 'Displays', 'Shelving', 'Store fixtures', 'Sales-floor contents'],
      },
      {
        title: 'Warehouse Contents',
        items: ['Racking', 'Pallets', 'Shelving systems', 'Equipment', 'Inventory and packaging', 'Warehouse debris'],
      },
      {
        title: 'Tenant-Turnover Debris',
        items: ['Abandoned tenant contents', 'Fixture leftovers', 'Office and retail debris', 'Suite clear-out materials'],
      },
    ],
  },
  {
    id: 'demolition-bulky',
    title: 'Demolition and Bulky Items',
    intro: (
      <>
        Selective demolition debris and oversized items—including{' '}
        <Link to="/hot-tub-removal" className="font-bold text-brand-orange hover:text-brand-navy">
          hot tub removal
        </Link>
        ,{' '}
        <Link to="/shed-demolition" className="font-bold text-brand-orange hover:text-brand-navy">
          shed demolition
        </Link>
        , and{' '}
        <Link to="/construction-cleanup" className="font-bold text-brand-orange hover:text-brand-navy">
          construction cleanup
        </Link>
        . Scope depends on access, weight, disassembly, and disposal requirements.
      </>
    ),
    groups: [
      {
        title: 'Hot Tubs & Small Sheds',
        items: ['Hot tubs and spas', 'Small sheds', 'Outdoor storage structures', 'Related debris after tear-down'],
      },
      {
        title: 'Cabinets, Flooring & Drywall',
        items: ['Cabinets and vanities', 'Countertops', 'Carpet, laminate, vinyl, and tile', 'Drywall and plaster', 'Insulation when scheduled'],
      },
      {
        title: 'Doors, Windows & Ceilings',
        items: ['Doors and frames', 'Windows and glass', 'Ceiling grid', 'Ceiling tile', 'Trim and baseboards'],
      },
      {
        title: 'Deck Material & Fencing',
        items: ['Deck boards and railings', 'Deck framing within scope', 'Fence panels and posts', 'Related exterior debris'],
      },
      {
        title: 'Construction Debris',
        items: [
          'Renovation debris',
          'Jobsite packaging',
          'Wood and framing leftovers',
          'Selective interior demo debris',
          'General construction haul-away',
        ],
      },
    ],
  },
];

const sectionIds = new Set([...takeSections.map((section) => section.id), 'prior-approval', 'not-accepted', 'faqs']);

const priorApprovalItems = [
  'Tires',
  'Refrigerators',
  'Freezers',
  'Air-conditioning equipment',
  'Televisions and e-waste',
  'Extremely heavy equipment',
  'Concrete',
  'Dirt',
  'Brick',
  'Shingles',
  'Dense construction debris',
  'Paint',
  'Propane tanks',
];

const notAcceptedItems = [
  'Hazardous chemicals',
  'Fuel',
  'Explosives',
  'Medical waste',
  'Biohazards',
  'Asbestos-containing material',
  'Unknown drums',
  'Unknown liquids',
  'Legally restricted waste',
];

const whyReinhart = [
  ['Locally Owned', Home],
  ['Professional Service', BriefcaseBusiness],
  ['Fully Insured', ShieldCheck],
  ['Fast Scheduling', Clock],
  ['Transparent Pricing', CheckCircle2],
  ['No Heavy Lifting Required', Truck],
  ['Respectful Crews', Star],
  ['Property Left Clean', CheckCircle2],
] as const;

const reviews = [
  {
    name: 'Rachel Huber',
    location: 'Middle Tennessee',
    text: "The service we got from Reinhart Cleanout was amazing! He was prompt and left our space immaculate! Such a huge help and peace of mind while cleaning out my mom's house. I highly recommend!",
    label: 'Verified Google Review',
  },
  {
    name: 'Bruce Shamp',
    location: 'Middle Tennessee',
    text: 'Fantastic fast courteous professional really cares about his clients helping in every way to get the job done quickly. Highly recommend him for all your needs. He did a fantastic job — always polite, caring, and professional.',
    label: 'Verified Google Review',
  },
  {
    name: 'David Abbondanza',
    location: 'Middle Tennessee',
    text: 'We hired Reinhart to remove drywall from an entire house. The workmanship, attention to detail is outstanding and pricing is more than fair. Jeremiah, the owner is a great communicator, courteous and punctual. I highly recommend their services for any hauling, interior demo and general clean-up.',
    label: 'Verified Google Review',
  },
];

const faqs = [
  {
    question: 'What items does Reinhart Hauling & Cleanouts remove?',
    answer:
      'We remove household furniture, mattresses, appliances, electronics, garage and attic contents, estate and rental cleanout debris, office furniture, retail fixtures, warehouse contents, hot tubs, small sheds, cabinets, flooring, drywall, deck and fence material, and construction debris when the material is safe to handle and within agreed scope.',
  },
  {
    question: 'What items require prior approval?',
    answer:
      'Acceptance may depend on weight, quantity, equipment needs, landfill requirements, and local regulations for items such as tires, refrigerators, freezers, air-conditioning equipment, televisions and e-waste, extremely heavy equipment, concrete, dirt, brick, shingles, dense construction debris, paint, and propane tanks. Tell us what you have and provide photos when helpful. Depending on the material, quantity, weight, access, and disposal requirements, we may need additional details or an on-site review before confirming acceptance.',
  },
  {
    question: 'What items are not accepted?',
    answer:
      'Hazardous chemicals, fuel, explosives, medical waste, biohazards, asbestos-containing material, unknown drums, unknown liquids, and legally restricted waste require prior review and are not routinely accepted. Special arrangement does not mean acceptance is available or guaranteed.',
  },
  {
    question: 'Can you remove heavy or oversized items?',
    answer:
      'Yes, when access, weight, disassembly, equipment, and disposal requirements can be confirmed. Tell us what you have and provide photos when helpful. Larger or unusually heavy items often need additional details or an on-site review before we confirm scope and pricing.',
  },
  {
    question: 'Can you remove office furniture and retail fixtures?',
    answer:
      'Yes. Office furniture, cubicles, file cabinets, retail fixtures, displays, and shelving are common commercial cleanout and office load-out items.',
  },
  {
    question: 'Can you remove warehouse contents?',
    answer:
      'Yes. Warehouse contents such as racking, pallets, shelving, equipment, packaging, and abandoned inventory can be removed when access and disposal requirements are confirmed.',
  },
  {
    question: 'Can you remove construction debris?',
    answer:
      'Yes. Construction and renovation debris can be hauled as part of construction cleanup or selective demolition support when disposal requirements are confirmed.',
  },
  {
    question: 'Can you remove hot tubs and small structures?',
    answer:
      'Yes. Hot tubs and small sheds are common bulky-item scopes. Access, weight, disassembly, and utility disconnection coordination affect pricing and scheduling. We do not perform electrical or plumbing work.',
  },
  {
    question: 'How should customers prepare?',
    answer:
      'Tell us what you have and provide photos when helpful. Note access and parking, set aside items that should stay, and confirm any utility disconnection needs with the appropriate trade when required. Depending on the material, quantity, weight, access, and disposal requirements, we may need additional details or an on-site review before confirming acceptance. Clear pathways help the crew work efficiently.',
  },
  {
    question: 'How is pricing determined?',
    answer:
      'Pricing is based on the amount and type of material, labor required, access, weight, disassembly, equipment needs, and disposal costs. Smaller pickups may be estimated from photos. Larger cleanouts and demolition projects are normally quoted after an on-site walkthrough. Customers receive the price before work begins.',
  },
];

export default function WhatWeTake() {
  const { hash } = useLocation();
  const [openSection, setOpenSection] = useState<string>('household');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const scrollToAccordion = useCallback((sectionId: string) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        scrollToSection(sectionId);
      });
    });
  }, []);

  const handleCategoryClick = useCallback(
    (sectionId: string, event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      if (takeSections.some((section) => section.id === sectionId)) {
        setOpenSection(sectionId);
      }
      scrollToAccordion(sectionId);
      window.history.pushState(null, '', `#${sectionId}`);
    },
    [scrollToAccordion],
  );

  useEffect(() => {
    const sectionId = (hash || window.location.hash).replace(/^#/, '');
    if (!sectionId || !sectionIds.has(sectionId)) return;

    if (takeSections.some((section) => section.id === sectionId)) {
      setOpenSection(sectionId);
    }
    return scrollToSectionWhenReady(sectionId);
  }, [hash]);

  useEffect(() => {
    const handlePopState = () => {
      const sectionId = window.location.hash.replace(/^#/, '');
      if (sectionId && sectionIds.has(sectionId)) {
        if (takeSections.some((section) => section.id === sectionId)) {
          setOpenSection(sectionId);
        }
        scrollToSectionWhenReady(sectionId);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <>
      <PageMeta
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
        path="/what-we-take"
        jsonLd={compactJsonLd([
          buildBreadcrumbListSchema([
            { label: 'Home', to: '/' },
            { label: 'Items We Remove', to: '/what-we-take' },
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
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.02)_1px,transparent_1px)] bg-[size:12px_12px] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_18%,#000_40%,transparent_100%)]"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(242,125,38,0.08),transparent_32%),radial-gradient(circle_at_82%_16%,rgba(15,23,42,0.05),transparent_28%)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <nav className="mb-8 flex items-center gap-2 text-sm font-semibold text-slate-500" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-brand-orange">
              Home
            </Link>
            <span>/</span>
            <span className="text-brand-navy">Items We Remove</span>
          </nav>

          <div className="max-w-5xl">
            <span className="mb-6 inline-block rounded-full bg-brand-orange/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-orange">
              Item Removal Guide
            </span>
            <h1 className="mb-7 font-display text-5xl font-bold leading-[0.95] tracking-tighter text-brand-navy lg:text-7xl">
              Items We Remove
            </h1>
            <div className="max-w-4xl space-y-5 text-lg leading-relaxed text-slate-600 lg:text-xl">
              <p>
                Reinhart Hauling &amp; Cleanouts removes household furniture, appliances, garage and estate contents,
                office furniture, retail fixtures, warehouse materials, hot tubs, small sheds, and construction debris as
                part of property cleanouts, commercial cleanouts, and selective demolition support. Some items need prior
                review. Hazardous and legally restricted materials may not be accepted.
              </p>
              <p className="text-base lg:text-lg">
                Related services:{' '}
                <Link to="/property-cleanouts" className="font-bold text-brand-orange hover:text-brand-navy">
                  Property Cleanouts
                </Link>
                ,{' '}
                <Link to="/property-cleanup" className="font-bold text-brand-orange hover:text-brand-navy">
                  Property Cleanup
                </Link>
                ,{' '}
                <Link to="/commercial-cleanouts" className="font-bold text-brand-orange hover:text-brand-navy">
                  Commercial Cleanouts
                </Link>
                ,{' '}
                <Link to="/estate-cleanouts" className="font-bold text-brand-orange hover:text-brand-navy">
                  Estate Cleanouts
                </Link>
                ,{' '}
                <Link to="/hoarder-cleanouts" className="font-bold text-brand-orange hover:text-brand-navy">
                  Hoarder Cleanouts
                </Link>
                ,{' '}
                <Link to="/construction-cleanup" className="font-bold text-brand-orange hover:text-brand-navy">
                  Construction Debris Removal
                </Link>
                ,{' '}
                <Link to="/hot-tub-removal" className="font-bold text-brand-orange hover:text-brand-navy">
                  Hot Tub Removal
                </Link>
                ,{' '}
                <Link to="/shed-demolition" className="font-bold text-brand-orange hover:text-brand-navy">
                  Shed Demolition
                </Link>
                , and{' '}
                <Link to="/office-load-outs" className="font-bold text-brand-orange hover:text-brand-navy">
                  Office Furniture Removal
                </Link>
                . Use the estimate button below to request pricing.
              </p>
            </div>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <EstimateRequestButton />
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/#services"
                  className="inline-flex items-center justify-center gap-3 rounded-2xl border-2 border-slate-200 bg-white px-8 py-4 text-lg font-bold text-brand-navy transition-colors hover:border-brand-orange"
                >
                  View Services
                  <ArrowRight size={18} />
                </Link>
              </motion.div>
            </div>

            <div className="mt-7 flex flex-wrap gap-3 text-sm font-bold text-brand-navy">
              {['Fully Insured', 'Clear Quote Before Work', 'Fast Scheduling', 'We Do All The Heavy Lifting'].map(
                (item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm"
                  >
                    <CheckCircle2 size={16} className="text-brand-orange" />
                    {item}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="quick-categories" className="scroll-mt-32 bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-3xl">
            <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-brand-orange">
              Quick Categories
            </span>
            <h2 className="mb-4 font-display text-4xl font-bold text-brand-navy lg:text-5xl">
              What items does Reinhart Hauling &amp; Cleanouts remove?
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              Jump to a category below. If you do not see your exact item, tell us what you have and provide photos when
              helpful. Depending on the material, quantity, weight, access, and disposal requirements, we may need
              additional details or an on-site review before confirming acceptance.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {quickCategories.map(([label, id], index) => (
              <motion.a
                key={`${label}-${id}`}
                href={`#${id}`}
                onClick={(event) => handleCategoryClick(id, event)}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.02 }}
                whileHover={{ y: -5 }}
                className="group rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-lg shadow-slate-200/40 transition-colors hover:border-brand-orange/40 hover:bg-white"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-navy/5 text-brand-orange">
                  <Truck size={18} />
                </div>
                <h3 className="font-display text-lg font-bold text-brand-navy group-hover:text-brand-orange">{label}</h3>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-brand-orange">
              Direct Answer
            </span>
            <h2 className="font-display text-4xl font-bold leading-tight text-brand-navy lg:text-5xl">
              Can you remove heavy, commercial, or demolition materials?
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-slate-600 lg:col-span-7">
            <p>
              Yes—when access, weight, equipment, and disposal requirements can be confirmed. That includes oversized
              household items, office furniture and retail fixtures, warehouse contents, construction debris, hot tubs,
              and small structures.
            </p>
            <p>
              Tell us what you have and provide photos when helpful. Depending on the material, quantity, weight,
              access, and disposal requirements, we may need additional details or an on-site review before confirming
              acceptance. Items are sorted for disposal, recycling, scrap recovery, or donation when practical and
              appropriate.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-3xl">
            <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-brand-orange">
              Detailed Removal List
            </span>
            <h2 className="mb-4 font-display text-4xl font-bold text-brand-navy lg:text-5xl">
              Accepted-item categories
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              Organized by household, property cleanouts, commercial, and demolition or bulky items. One section opens at
              a time for easier scanning.
            </p>
          </div>

          <div className="space-y-4">
            {takeSections.map((section) => {
              const isOpen = openSection === section.id;

              return (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-32 rounded-3xl border border-slate-200 bg-white shadow-sm"
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left md:px-8"
                    onClick={() => setOpenSection(isOpen ? '' : section.id)}
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-2xl font-bold text-brand-navy">{section.title}</span>
                    <ChevronDown
                      size={22}
                      className={`shrink-0 text-brand-orange transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {isOpen && (
                    <div className="border-t border-slate-100 px-6 pb-8 pt-2 md:px-8">
                      <div className="mb-8 max-w-4xl text-base leading-relaxed text-slate-600">{section.intro}</div>
                      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {section.groups.map((group) => (
                          <div key={group.title} className="rounded-2xl bg-slate-50 p-5">
                            <h3 className="mb-4 font-display text-xl font-bold text-brand-navy">{group.title}</h3>
                            <ul className="grid gap-2" role="list">
                              {group.items.map((item) => (
                                <li key={item} className="flex items-start gap-2 text-sm font-medium text-slate-600">
                                  <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-brand-orange" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </section>
              );
            })}
          </div>
        </div>
      </section>

      <section id="prior-approval" className="scroll-mt-32 bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-3xl">
            <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-brand-orange">
              Prior Approval
            </span>
            <h2 className="mb-4 font-display text-4xl font-bold text-brand-navy lg:text-5xl">
              What items require prior approval?
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              These materials are handled case by case. Acceptance may depend on weight, quantity, equipment needs,
              landfill requirements, and local regulations. Tell us what you have and provide photos when helpful.
              Depending on the material, quantity, weight, access, and disposal requirements, we may need additional
              details or an on-site review before confirming acceptance.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {priorApprovalItems.map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="font-bold text-brand-navy">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="not-accepted" className="scroll-mt-32 bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-3xl">
            <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-brand-orange">
              Restricted Materials
            </span>
            <h2 className="mb-4 font-display text-4xl font-bold text-brand-navy lg:text-5xl">
              What items are not accepted?
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              Hazardous chemicals, fuel, biohazards, asbestos-containing material, explosives, medical waste, unknown
              drums, unknown liquids, and legally restricted waste are not routinely accepted. They require prior review
              and may be declined. Special arrangement does not mean acceptance is available or guaranteed.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {notAcceptedItems.map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
                <p className="font-bold text-brand-navy">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 max-w-3xl">
            <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-brand-orange">
              Why Reinhart
            </span>
            <h2 className="mb-4 font-display text-4xl font-bold text-brand-navy lg:text-5xl">
              Why Choose Reinhart Hauling &amp; Cleanouts?
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              Reliable removal support for homeowners, landlords, investors, businesses, and property managers—backed by
              clear pricing before work begins.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyReinhart.map(([label, Icon]) => (
              <motion.div
                key={label}
                whileHover={{ y: -6 }}
                className="rounded-3xl border border-slate-100 bg-white p-7 shadow-xl shadow-slate-200/50"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-navy/5 text-brand-orange">
                  <Icon size={20} />
                </div>
                <h3 className="font-display text-xl font-bold text-brand-navy">{label}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-display text-4xl font-bold text-brand-navy">Trusted to Keep Projects Moving</h2>
            <div className="mb-4 flex justify-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} fill="#F27D26" color="#F27D26" />
              ))}
            </div>
            <p className="text-slate-500">
              Feedback from homeowners, investors, property managers, and businesses we&apos;ve helped.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {reviews.map((review, index) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex h-full flex-col rounded-3xl border p-8 shadow-lg ${
                  index === 0
                    ? 'border-brand-orange/50 bg-white shadow-xl shadow-brand-orange/10'
                    : 'border-slate-100 bg-white'
                }`}
              >
                {index === 0 && (
                  <div className="mb-4 inline-flex items-center rounded-full bg-brand-orange/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-brand-orange">
                    Google Review
                  </div>
                )}
                <div className="mb-4 flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={16} fill="#F27D26" color="#F27D26" />
                  ))}
                </div>
                <p className="mb-6 flex-1 italic leading-relaxed text-slate-600">&quot;{review.text}&quot;</p>
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-orange/10 font-bold text-brand-orange">
                    {review.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-brand-navy">{review.name}</div>
                    <div className="text-xs font-medium text-slate-400">{review.label}</div>
                    <div className="text-xs font-medium text-slate-400">{review.location}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="faqs" className="scroll-mt-32 bg-slate-50 py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-display text-4xl font-bold text-brand-navy">Frequently Asked Questions</h2>
            <p className="leading-relaxed text-slate-600">
              Direct answers about what we remove, what needs review, and how pricing works.
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
