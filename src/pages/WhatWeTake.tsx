import React, { useCallback, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom';
import EstimateRequestButton from '../components/EstimateRequestButton.tsx';
import ServiceBottomCTA from '../components/ServiceBottomCTA.tsx';
import { scrollToSection, scrollToSectionWhenReady } from '../utils/scrollToSection.ts';
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

const quickCategories = [
  ['Household Items', 'household-items'],
  ['Furniture', 'furniture'],
  ['Appliances', 'appliances'],
  ['Electronics', 'electronics'],
  ['Office Furniture', 'office-commercial'],
  ['Commercial Equipment', 'office-commercial'],
  ['Garage Items', 'garage-items'],
  ['Construction & Interior Demo', 'construction-demo'],
  ['Yard Debris', 'yard-outdoor'],
  ['Outdoor Items', 'yard-outdoor'],
  ['Pools', 'pools'],
  ['Hot Tubs', 'hot-tubs'],
  ['Mattresses', 'mattresses'],
  ['Exercise Equipment', 'exercise-equipment'],
  ['Recreation Equipment', 'recreation-equipment'],
  ['Storage Units', 'storage-unit-cleanouts'],
  ['Estate Cleanouts', 'estate-cleanouts'],
  ['Pianos', 'pianos'],
  ['Tires & Rubber', 'tires-rubber'],
] as const;

const takeSections: TakeSection[] = [
  {
    id: 'household-items',
    title: 'Household Items',
    intro:
      'We remove everyday household contents from single rooms, packed closets, garages, apartments, rental homes, estates, and full-property cleanouts.',
    groups: [
      {
        title: 'Living Room',
        items: [
          'Sectionals',
          'Sofas',
          'Loveseats',
          'Recliners',
          'Coffee tables',
          'End tables',
          'Entertainment centers',
          'TV stands',
          'Bookshelves',
          'Decor',
          'Pictures',
          'Mirrors',
          'Rugs',
          'Curtains',
          'Lamps',
        ],
      },
      {
        title: 'Dining Room',
        items: ['Dining tables', 'Dining chairs', 'China cabinets', 'Buffets'],
      },
      {
        title: 'Kitchen',
        items: ['Cabinets', 'Pantries', 'Kitchen tables', 'Bar stools'],
      },
      {
        title: 'Bedrooms',
        items: ['Dressers', 'Nightstands', 'Beds', 'Bed frames', 'Headboards', 'Footboards', 'Armoires'],
      },
      {
        title: 'Closets & General Contents',
        items: [
          'Boxes',
          'Storage totes',
          'Shoes',
          'Clothing',
          'Holiday decorations',
          'General household clutter',
        ],
      },
    ],
  },
  {
    id: 'furniture',
    title: 'Furniture',
    intro:
      'We remove single furniture pieces, full-room sets, and bulk furniture from homes, offices, restaurants, churches, schools, and commercial properties.',
    groups: [
      {
        title: 'Residential Furniture',
        items: ['Residential furniture', 'Outdoor furniture', 'Patio furniture', 'Bookcases', 'Cabinets', 'Shelving'],
      },
      {
        title: 'Commercial Furniture',
        items: [
          'Office furniture',
          'Restaurant furniture',
          'Hotel furniture',
          'Church furniture',
          'School furniture',
          'Waiting room furniture',
          'Reception furniture',
          'Conference tables',
          'Executive desks',
        ],
      },
      {
        title: 'Systems & Fixtures',
        items: ['Cubicles', 'Partitions', 'File cabinets', 'Display cases', 'Retail fixtures'],
      },
    ],
  },
  {
    id: 'appliances',
    title: 'Appliances',
    intro:
      'We remove heavy and awkward appliances from kitchens, laundry rooms, garages, basements, rentals, offices, and larger cleanout projects.',
    groups: [
      {
        title: 'Major Appliances',
        items: [
          'Refrigerators',
          'Freezers',
          'Mini fridges',
          'Dishwashers',
          'Ranges',
          'Wall ovens',
          'Microwaves',
          'Washers',
          'Dryers',
          'Water heaters',
          'Ice makers',
          'Trash compactors',
        ],
      },
      {
        title: 'Climate & Small Appliances',
        items: ['Window AC units', 'Portable AC units', 'Humidifiers', 'Dehumidifiers', 'Small appliances'],
      },
    ],
  },
  {
    id: 'electronics',
    title: 'Electronics',
    intro:
      'We remove home and office electronics during cleanouts, commercial load-outs, storage unit cleanouts, turnovers, and property prep.',
    groups: [
      {
        title: 'Home Electronics',
        items: [
          'TVs',
          'Flat screens',
          'DVD players',
          'Gaming systems',
          'Stereo equipment',
          'Speakers',
          'Projectors',
        ],
      },
      {
        title: 'Computer & Office Electronics',
        items: [
          'Monitors',
          'Desktop computers',
          'Laptops',
          'Servers',
          'Networking equipment',
          'Printers',
          'Scanners',
          'Copiers',
          'Office electronics',
        ],
      },
    ],
  },
  {
    id: 'office-commercial',
    title: 'Office & Commercial Items',
    intro: (
      <>
        We remove office furniture, commercial contents, and business equipment during cleanouts, move-outs, and load-outs.
        For larger projects, see our{' '}
        <Link to="/commercial-cleanouts" className="font-bold text-brand-orange hover:text-brand-navy">
          Commercial Cleanouts
        </Link>{' '}
        page.
      </>
    ),
    groups: [
      {
        title: 'Office Contents',
        items: [
          'Cubicles',
          'Office chairs',
          'Conference tables',
          'Reception furniture',
          'File cabinets',
          'Desks',
          'Waiting room furniture',
          'Medical office furniture',
          'Dental office furniture',
        ],
      },
      {
        title: 'Commercial Property Items',
        items: [
          'Warehouse shelving',
          'Retail displays',
          'Store fixtures',
          'Restaurant equipment',
          'Commercial kitchen equipment',
          'School furniture',
          'Church furniture',
          'Storage racking',
          'Inventory removal',
          'Office cleanouts',
          'Commercial cleanouts',
        ],
      },
    ],
  },
  {
    id: 'garage-items',
    title: 'Garage Items',
    intro: (
      <>
        We remove tools, metal, bins, old equipment, and accumulated garage contents as standalone jobs or part of larger{' '}
        <Link to="/garage-cleanouts" className="font-bold text-brand-orange hover:text-brand-navy">
          Garage Cleanouts
        </Link>
        .
      </>
    ),
    groups: [
      {
        title: 'Garage & Shop Contents',
        items: [
          'Toolboxes',
          'Workbench',
          'Shelving',
          'Cabinets',
          'Generators',
          'Pressure washers',
          'Push mowers',
          'Riding mowers',
          'Snow blowers',
          'Ladders',
          'Scrap metal',
          'Car parts',
          'Storage bins',
          'General garage clutter',
        ],
      },
    ],
  },
  {
    id: 'exercise-equipment',
    title: 'Exercise Equipment',
    intro:
      'We remove heavy fitness equipment from bonus rooms, garages, basements, home gyms, and commercial spaces.',
    groups: [
      {
        title: 'Fitness Equipment',
        items: [
          'Treadmills',
          'Ellipticals',
          'Exercise bikes',
          'Home gyms',
          'Weight benches',
          'Power racks',
          'Squat racks',
          'Barbells',
          'Weight plates',
          'Dumbbells',
          'Cable machines',
        ],
      },
    ],
  },
  {
    id: 'recreation-equipment',
    title: 'Recreation Equipment',
    intro:
      'We remove indoor and outdoor recreation equipment, including large items that may require disassembly or access planning.',
    groups: [
      {
        title: 'Indoor Recreation',
        items: ['Pool tables', 'Foosball', 'Ping pong', 'Air hockey', 'Arcade machines'],
      },
      {
        title: 'Outdoor Recreation',
        items: [
          'Basketball goals',
          'Playsets',
          'Swing sets',
          'Tree houses',
          'Trampolines',
          'Kayaks',
          'Paddleboards',
          'Camping equipment',
          'Fishing equipment',
        ],
      },
    ],
  },
  {
    id: 'yard-outdoor',
    title: 'Yard & Outdoor Items',
    intro: (
      <>
        We remove brush, storm debris, fencing, patio contents, small outdoor structures, and exterior clutter. For brush
        and exterior cleanup support, see our{' '}
        <Link to="/junk-removal-goodlettsville" className="font-bold text-brand-orange hover:text-brand-navy">
          Yard Debris Removal
        </Link>{' '}
        service information.
      </>
    ),
    groups: [
      {
        title: 'Yard Debris',
        items: [
          'Brush',
          'Tree limbs',
          'Shrubs',
          'Bushes',
          'Storm debris',
          'Leaves',
          'Firewood',
          'Landscape timbers',
          'Railroad ties',
        ],
      },
      {
        title: 'Outdoor Structures & Items',
        items: [
          'Fence panels',
          'Fence posts',
          'Pergolas',
          'Gazebos',
          'Planters',
          'Outdoor storage',
          'Patio items',
        ],
      },
    ],
  },
  {
    id: 'hot-tubs',
    title: 'Hot Tubs',
    intro:
      'We disconnect, drain, cut apart when needed, and remove hot tubs from almost any location.',
    groups: [
      {
        title: 'Hot Tub Locations',
        items: ['Decks', 'Patios', 'Screened porches', 'Basements', 'Backyards', 'Tight access areas'],
      },
    ],
  },
  {
    id: 'construction-demo',
    title: 'Construction & Interior Demolition Debris',
    intro: (
      <>
        We remove demolition debris after DIY projects, contractor work, remodels, insurance losses, rental turnovers,
        and commercial renovations. For selective tear-outs, visit{' '}
        <Link to="/interior-demolition" className="font-bold text-brand-orange hover:text-brand-navy">
          Interior Demolition
        </Link>
        .
      </>
    ),
    groups: [
      {
        title: 'Walls, Framing & Wood',
        items: [
          'Drywall',
          'Plaster',
          'Lath',
          'Studs',
          'Wood framing',
          'Barn wood',
          'Beams',
          'Plywood',
          'OSB',
          'Subfloor',
        ],
      },
      {
        title: 'Interior Finish Materials',
        items: [
          'Cabinets',
          'Countertops',
          'Vanities',
          'Windows',
          'Window frames',
          'Glass',
          'Doors',
          'Trim',
          'Baseboards',
          'Tile',
          'Hardwood flooring',
          'Laminate',
          'LVP',
          'Carpet',
          'Padding',
          'Drop ceilings',
          'Ceiling grid',
          'Insulation',
        ],
      },
      {
        title: 'Mechanical & Plumbing Debris',
        items: ['PVC', 'Copper pipe', 'PEX', 'Cast iron pipe', 'Ductwork'],
      },
      {
        title: 'Demo Project Types',
        items: [
          'Bathroom demolition',
          'Kitchen demolition',
          'Office demolition',
          'Retail fixtures',
          'General renovation debris',
        ],
      },
      {
        title: 'Exterior & Hard Materials',
        items: [
          'Brick',
          'Concrete (small amounts)',
          'Block',
          'Stone',
          'Deck lumber',
          'Fence materials',
          'Roofing',
          'Siding',
        ],
      },
    ],
  },
  {
    id: 'pools',
    title: 'Pools',
    intro:
      'We remove above-ground pools, related equipment, and pool debris when a yard needs to be cleaned up or reset.',
    groups: [
      {
        title: 'Pool Items',
        items: ['Above ground pools', 'Pool ladders', 'Pool pumps', 'Filters', 'Heaters', 'Pool deck removal', 'Pool debris'],
      },
    ],
  },
  {
    id: 'pianos',
    title: 'Pianos',
    intro:
      'We evaluate piano removal by type, weight, stairs, access, and whether disassembly or extra labor is needed.',
    groups: [
      {
        title: 'Piano Types',
        items: ['Upright', 'Console', 'Spinet', 'Digital', 'Player', 'Grand pianos by evaluation'],
      },
    ],
  },
  {
    id: 'mattresses',
    title: 'Mattresses',
    intro:
      'We remove mattresses, box springs, adjustable bases, and bed frames as single pickups or part of larger cleanouts.',
    groups: [
      {
        title: 'Sleep Items',
        items: ['Twin', 'Full', 'Queen', 'King', 'Memory foam', 'Adjustable bases', 'Box springs', 'Bed frames'],
      },
    ],
  },
  {
    id: 'tires-rubber',
    title: 'Tires & Rubber',
    intro:
      'Tires and rubber materials may require special disposal, so request an estimate first and we will confirm the scope.',
    groups: [
      {
        title: 'Tires & Rubber Materials',
        items: ['Passenger tires', 'Truck tires', 'Motorcycle tires', 'ATV tires', 'Rubber materials'],
      },
    ],
  },
  {
    id: 'storage-unit-cleanouts',
    title: 'Storage Unit Cleanouts',
    intro:
      'We clear entire abandoned storage units as long as the contents are safe to handle and allowed for disposal.',
    groups: [
      {
        title: 'Storage Unit Contents',
        items: [
          'Furniture',
          'Boxes',
          'Storage totes',
          'Appliances',
          'Mattresses',
          'Office contents',
          'Household clutter',
          'Mixed debris',
        ],
      },
    ],
  },
  {
    id: 'estate-cleanouts',
    title: 'Estate Cleanouts',
    intro: (
      <>
        We remove complete home contents, garage items, outbuilding contents, donation items, and disposal materials
        during estate cleanouts. Learn more about{' '}
        <Link to="/estate-cleanouts" className="font-bold text-brand-orange hover:text-brand-navy">
          Estate Cleanouts
        </Link>
        .
      </>
    ),
    groups: [
      {
        title: 'Estate Contents',
        items: [
          'Complete home contents',
          'Furniture',
          'Personal belongings',
          'Garage contents',
          'Outbuildings',
          'Donation sorting',
          'Responsible disposal',
        ],
      },
    ],
  },
];

const sectionIds = new Set(takeSections.map((section) => section.id));

const restrictedItems = [
  'Asbestos',
  'Liquid paint',
  'Oil',
  'Gasoline',
  'Hazardous chemicals',
  'Medical waste',
  'Biohazards',
  'Explosives',
  'Radioactive materials',
  'Large quantities of contaminated soil',
  'Large quantities of wet concrete',
  'Illegal materials',
];

const whyReinhart = [
  ['Locally Owned', Home],
  ['Professional Service', BriefcaseBusiness],
  ['Licensed & Insured', ShieldCheck],
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
    question: 'What types of items does Reinhart Hauling & Cleanouts remove?',
    answer:
      'We remove most non-hazardous household, furniture, appliance, office, garage, yard, construction, demolition, storage unit, estate, and commercial cleanout items throughout Middle Tennessee.',
  },
  {
    question: 'Do you remove items from commercial properties?',
    answer:
      'Yes. We remove office furniture, cubicles, shelving, retail fixtures, warehouse items, commercial contents, and business cleanout debris.',
  },
  {
    question: 'Do you remove construction and interior demolition debris?',
    answer:
      'Yes. We remove drywall, flooring, trim, cabinets, ceiling material, insulation, small amounts of concrete, renovation debris, and selective interior demolition debris.',
  },
  {
    question: 'What items do you not take?',
    answer:
      'We do not take hazardous materials such as asbestos, gasoline, oil, hazardous chemicals, biohazards, medical waste, explosives, radioactive materials, or illegal materials.',
  },
  {
    question: 'How do I know if you can remove my item?',
    answer:
      'Text us photos of the item or area. If it is non-hazardous and safe to handle, there is a very good chance we can remove it or point you in the right direction.',
  },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://www.reinharthauling.com/',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Items We Remove',
      item: 'https://www.reinharthauling.com/what-we-take',
    },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

export default function WhatWeTake() {
  const { hash } = useLocation();
  const [openSection, setOpenSection] = useState<string>('household-items');

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
      setOpenSection(sectionId);
      scrollToAccordion(sectionId);
      window.history.pushState(null, '', `#${sectionId}`);
    },
    [scrollToAccordion],
  );

  useEffect(() => {
    const sectionId = (hash || window.location.hash).replace(/^#/, '');
    if (!sectionId || !sectionIds.has(sectionId)) return;

    setOpenSection(sectionId);
    return scrollToSectionWhenReady(sectionId);
  }, [hash]);

  useEffect(() => {
    const handlePopState = () => {
      const sectionId = window.location.hash.replace(/^#/, '');
      if (sectionId && sectionIds.has(sectionId)) {
        setOpenSection(sectionId);
        scrollToSectionWhenReady(sectionId);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <>
      <Helmet>
        <title>Items We Remove | Junk Removal, Cleanouts &amp; Debris Removal in Middle Tennessee</title>
        <meta
          name="description"
          content="See what Reinhart Hauling & Cleanouts removes: furniture, appliances, office furniture, garage items, construction debris, yard debris, hot tubs, storage units, estate contents, and more across Middle Tennessee."
        />
        <link rel="canonical" href="https://www.reinharthauling.com/what-we-take" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

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
                From a single appliance to a full property cleanout, Reinhart Hauling &amp; Cleanouts removes almost
                every type of non-hazardous item across Middle Tennessee. We handle the lifting, loading, hauling,
                recycling, donation, and responsible disposal so you don&apos;t have to.
              </p>
            </div>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <EstimateRequestButton />
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-3 rounded-2xl border-2 border-slate-200 bg-white px-8 py-4 text-lg font-bold text-brand-navy transition-colors hover:border-brand-orange"
                >
                  View Services
                  <ArrowRight size={18} />
                </Link>
              </motion.div>
            </div>

            <div className="mt-7 flex flex-wrap gap-3 text-sm font-bold text-brand-navy">
              {['Licensed & Insured', 'Upfront Pricing', 'Fast Scheduling', 'We Do All The Heavy Lifting'].map((item) => (
                <span key={item} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">
                  <CheckCircle2 size={16} className="text-brand-orange" />
                  {item}
                </span>
              ))}
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
              Find the type of item you need removed
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              Tap any category to jump to a detailed list. If you do not see your exact item listed, request an estimate and we
              will quickly tell you whether it fits our removal scope.
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
              If It Is Non-Hazardous
            </span>
            <h2 className="font-display text-4xl font-bold leading-tight text-brand-navy lg:text-5xl">
              If It&apos;s Non-Hazardous, We Can Probably Remove It
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-slate-600 lg:col-span-7">
            <p>
              People often ask if we remove unusual, oversized, or hard-to-handle items. The answer is usually yes.
            </p>
            <p>
              We work with homeowners, landlords, investors, contractors, businesses, churches, schools, storage
              facilities, and property managers throughout Middle Tennessee.
            </p>
            <p>
              If you&apos;re unsure, simply text us a few photos and we&apos;ll let you know.
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
              Items and materials we commonly remove
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              These accordion sections are organized by common project type. Only one section opens at a time so the page
              stays easy to scan on mobile and desktop.
            </p>
          </div>

          <div className="space-y-4">
            {takeSections.map((section) => {
              const isOpen = openSection === section.id;

              return (
                <section key={section.id} id={section.id} className="scroll-mt-32 rounded-3xl border border-slate-200 bg-white shadow-sm">
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

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-3xl">
            <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-brand-orange">
              What We Do Not Take
            </span>
            <h2 className="mb-4 font-display text-4xl font-bold text-brand-navy lg:text-5xl">
              Almost everything except hazardous materials.
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              For safety and environmental reasons, we cannot remove certain hazardous materials. If you&apos;re unsure,
              simply text us a photo and we&apos;ll let you know.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {restrictedItems.map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="font-bold text-brand-navy">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 max-w-3xl">
            <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-brand-orange">
              Why Reinhart
            </span>
            <h2 className="mb-4 font-display text-4xl font-bold text-brand-navy lg:text-5xl">
              Why Choose Reinhart Hauling &amp; Cleanouts?
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              Reliable, professional removal services for homeowners, landlords, investors, businesses, and property
              managers across Middle Tennessee.
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

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-display text-4xl font-bold text-brand-navy">Trusted to Keep Projects Moving</h2>
            <div className="mb-4 flex justify-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} fill="#F27D26" color="#F27D26" />
              ))}
            </div>
            <p className="text-slate-500">
              Feedback from homeowners, investors, property managers, and businesses we&apos;ve helped across Middle
              Tennessee.
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

      <ServiceBottomCTA variant="dark" />
    </>
  );
}
