/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Routes, Route, Link, Navigate, useLocation } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { 
  Truck, 
  Trash2, 
  Home, 
  Warehouse, 
  CheckCircle2, 
  Phone, 
  MessageSquare, 
  MapPin, 
  Star, 
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Menu,
  X,
  Clock,
  ShieldCheck,
  Building2,
  User,
  Hammer,
  Bath,
  UtensilsCrossed,
  Layers,
  Archive,
  Store,
  Briefcase,
  HardHat,
  PanelTop,
  Trees,
  Box,
  KeyRound,
  Package,
  SquareStack,
  Users,
  TrendingUp,
} from 'lucide-react';
import EstateCleanouts from './pages/EstateCleanouts.tsx';
import EvictionCleanouts from './pages/EvictionCleanouts.tsx';
import JunkRemovalGoodlettsville from './pages/JunkRemovalGoodlettsville.tsx';
import LandlordRentalCleanouts from './pages/LandlordRentalCleanouts.tsx';
import GarageCleanouts from './pages/GarageCleanouts.tsx';
import PropertyCleanouts from './pages/PropertyCleanouts.tsx';
import PropertyCleanup from './pages/PropertyCleanup.tsx';
import ResidentialPropertyServices from './pages/ResidentialPropertyServices.tsx';
import CommercialServicesHub from './pages/CommercialServicesHub.tsx';
import DemolitionServices from './pages/DemolitionServices.tsx';
import About from './pages/About.tsx';
import Projects from './pages/Projects.tsx';
import ProjectDetail from './pages/ProjectDetail.tsx';
import InteriorDemolition from './pages/InteriorDemolition.tsx';
import HoarderPropertyCleanupJoelton from './pages/HoarderPropertyCleanupJoelton.tsx';
import InvestorPropertyCleanupGallatin from './pages/InvestorPropertyCleanupGallatin.tsx';
import InteriorDemoPortland from './pages/InteriorDemoPortland.tsx';
import CommercialCleanoutDowntownNashville from './pages/CommercialCleanoutDowntownNashville.tsx';
import WhatWeTake from './pages/WhatWeTake.tsx';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import ScrollToTop from './ScrollToTop.tsx';
import CleanoutProcess from './components/CleanoutProcess.tsx';
import { ServicesMegaMenuPanel, ServicesMobileAccordions } from './components/ServicesMegaMenu.tsx';
import EmailContactMenu from './components/EmailContactMenu.tsx';
import CommercialServicePage from './components/CommercialServicePage.tsx';
import { COMMERCIAL_SERVICE_PAGES } from './data/commercialServicePages.ts';
import { scrollToSection } from './utils/scrollToSection.ts';
import { projectImages } from './data/projectImages';

// --- Components ---

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Soft Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(242,125,38,0.05),_transparent_50%)]" />
      
      {/* Grid Shimmer */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      {/* Particle Drift (Simplified) */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-brand-orange/20"
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              opacity: Math.random() * 0.5
            }}
            animate={{ 
              y: [null, "-20%"],
              opacity: [null, 0]
            }}
            transition={{ 
              duration: Math.random() * 10 + 10, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          />
        ))}
      </div>
    </div>
  );
};

const Navbar = () => {
  const location = useLocation();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const servicesButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (!servicesOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setServicesOpen(false);
        servicesButtonRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [servicesOpen]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
  };

  const navigateToHomeSection = (event: React.MouseEvent, sectionId: string) => {
    const shouldDelayForMenu = mobileMenuOpen;
    if (shouldDelayForMenu) closeMobileMenu();

    if (location.pathname !== '/') return;

    event.preventDefault();
    const scroll = () => scrollToSection(sectionId);
    if (shouldDelayForMenu) {
      window.setTimeout(scroll, 220);
    } else {
      scroll();
    }
    window.history.pushState(null, '', `#${sectionId}`);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm py-3">
      <div className="max-w-7xl mx-auto px-4 md:px-6 min-h-[104px] flex items-center justify-between gap-8">
        <Link to="/" className="flex items-center shrink-0 overflow-visible">
          <img
            src="/branding/Reinhart-hauling-cleanouts-nashville.png"
            alt="Reinhart Hauling & Cleanouts Nashville"
            className="h-[72px] w-auto object-contain block"
          />
        </Link>

        <div className="hidden md:flex items-center gap-5">
          <Link
            to="/#how-it-works"
            className="text-sm font-medium hover:text-brand-orange transition-colors"
            onClick={(event) => navigateToHomeSection(event, 'how-it-works')}
          >
            How It Works
          </Link>

          <div
            ref={servicesRef}
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              ref={servicesButtonRef}
              type="button"
              id="services-menu-button"
              onClick={() => setServicesOpen((open) => !open)}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              aria-controls="services-mega-menu"
              className="flex items-center gap-1 text-sm font-medium hover:text-brand-orange transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/30 focus-visible:ring-offset-2 rounded-md"
            >
              Services
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                aria-hidden="true"
              />
            </button>

            {servicesOpen && (
              <ServicesMegaMenuPanel
                id="services-mega-menu"
                onNavigate={() => setServicesOpen(false)}
              />
            )}
          </div>

          <Link
            to="/#reviews"
            className="text-sm font-medium hover:text-brand-orange transition-colors"
            onClick={(event) => navigateToHomeSection(event, 'reviews')}
          >
            Reviews
          </Link>
          <Link
            to="/what-we-take"
            className="text-sm font-medium hover:text-brand-orange transition-colors"
          >
            Items We Remove
          </Link>
          <Link
            to="/projects"
            className="text-sm font-medium hover:text-brand-orange transition-colors"
          >
            Projects
          </Link>
          <Link
            to="/about"
            className="text-sm font-medium hover:text-brand-orange transition-colors"
          >
            About
          </Link>
          <a
            href="tel:6152000064"
            className="bg-brand-navy text-white px-4 py-2 rounded-full text-sm font-medium shadow-xl shadow-brand-navy/20 hover:bg-brand-orange transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            <Phone size={16} />
            615-200-0064
          </a>
        </div>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-xl border border-slate-200 text-brand-navy hover:border-brand-orange hover:text-brand-orange transition-colors"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden border-t border-slate-100 bg-white"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              <Link
                to="/#how-it-works"
                className="px-3 py-3 text-sm font-medium text-brand-navy hover:text-brand-orange transition-colors rounded-xl hover:bg-slate-50"
                onClick={(event) => navigateToHomeSection(event, 'how-it-works')}
              >
                How It Works
              </Link>

              <button
                type="button"
                className="flex items-center justify-between px-3 py-3 text-sm font-medium text-brand-navy hover:text-brand-orange transition-colors rounded-xl hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/30 focus-visible:ring-inset"
                aria-expanded={mobileServicesOpen}
                aria-controls="mobile-services-menu"
                onClick={() => setMobileServicesOpen((open) => !open)}
              >
                Services
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </button>

              {mobileServicesOpen && (
                <div id="mobile-services-menu" className="mb-1 px-1">
                  <ServicesMobileAccordions onNavigate={closeMobileMenu} />
                </div>
              )}

              <Link
                to="/#reviews"
                className="px-3 py-3 text-sm font-medium text-brand-navy hover:text-brand-orange transition-colors rounded-xl hover:bg-slate-50"
                onClick={(event) => navigateToHomeSection(event, 'reviews')}
              >
                Reviews
              </Link>
              <Link
                to="/what-we-take"
                className="px-3 py-3 text-sm font-medium text-brand-navy hover:text-brand-orange transition-colors rounded-xl hover:bg-slate-50"
                onClick={closeMobileMenu}
              >
                Items We Remove
              </Link>
              <Link
                to="/projects"
                className="px-3 py-3 text-sm font-medium text-brand-navy hover:text-brand-orange transition-colors rounded-xl hover:bg-slate-50"
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
              <Link
                to="/about"
                className="px-3 py-3 text-sm font-medium text-brand-navy hover:text-brand-orange transition-colors rounded-xl hover:bg-slate-50"
                onClick={closeMobileMenu}
              >
                About
              </Link>
              <a
                href="tel:6152000064"
                className="mt-2 bg-brand-navy text-white px-4 py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 hover:bg-brand-orange transition-colors"
                onClick={closeMobileMenu}
              >
                <Phone size={16} />
                615-200-0064
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

/** Served from /public/images/ — ?v bumps cache when the file is replaced in place. */
const HERO_FEATURE_IMAGE_SRC = '/images/truck-trailer.jpeg?v=1';
const HERO_FEATURE_IMAGE_ALT =
  'Reinhart Hauling and Cleanouts truck and trailer for property cleanouts in Middle Tennessee';

const Hero = () => {
  return (
    <section id="hero" className="relative pt-28 pb-8 lg:pt-36 lg:pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl border border-slate-200/80 bg-brand-navy/[0.04] p-6 lg:p-8 shadow-sm"
          >
            {/* Subtle readability layer — keeps contractor aesthetic without heavy blocks */}
            <div className="pointer-events-none absolute inset-0 z-0 rounded-3xl bg-gradient-to-b from-brand-navy/[0.06] via-transparent to-transparent" aria-hidden />
            <div className="relative z-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-bold tracking-wide mb-4">
              RESIDENTIAL • COMMERCIAL • DEMOLITION
            </span>
            <h1 className="font-display text-5xl lg:text-6xl font-bold leading-[0.95] tracking-tighter text-brand-navy mb-3">
              <span className="text-brand-orange">Professional Property</span>
              <br />
              <span className="text-brand-orange">Solutions</span>
              <br />
              Across Middle Tennessee
            </h1>
            <p className="text-lg lg:text-xl text-slate-600 leading-relaxed mb-6 max-w-2xl">
              From estate transitions and rental turnovers to commercial cleanouts and selective demolition,
              Reinhart helps prepare properties for sale, renovation, occupancy, and whatever comes next.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:items-start">
              <div className="flex flex-col items-stretch sm:items-start">
                <motion.a
                  href="sms:6152000064?body=Hi%2C%20I%27d%20like%20a%20fast%20quote%20for%20a%20cleanout"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-brand-navy text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl shadow-brand-navy/30 flex items-center justify-center gap-3 group"
                >
                  <MessageSquare className="text-brand-orange" />
                  Text Photos for a Fast Quote
                </motion.a>
                <p className="mt-2 text-xs leading-relaxed text-slate-500 max-w-[16rem] text-center sm:text-left">
                  Fastest option.
                  <br />
                  Most photo quotes are returned during business hours.
                </p>
              </div>
              <motion.a
                href="tel:6152000064"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white border-2 border-slate-200 text-brand-navy px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:border-brand-orange transition-colors"
              >
                <Phone />
                Call Now
              </motion.a>
            </div>

            <div className="mt-5 flex flex-col gap-0.5">
              <span className="text-sm font-semibold text-brand-navy">Need an on-site estimate?</span>
              <span className="inline-flex items-center gap-2 text-sm font-semibold">
                <a
                  href="tel:6152000064"
                  className="text-brand-orange transition-colors hover:text-brand-navy focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/30 focus-visible:ring-offset-2 rounded-md"
                >
                  Call Us
                </a>
                <span className="text-slate-300" aria-hidden="true">
                  •
                </span>
                <EmailContactMenu />
              </span>
            </div>
            </div>
          </motion.div>
        </div>
        <div className="mt-8 lg:mt-0">
          {/* HERO_MEDIA: replace HERO_FEATURE_IMAGE_SRC with project photo or before/after still — same aspect classes */}
          <div className="relative h-[280px] sm:h-[360px] lg:h-[460px] rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/10 ring-1 ring-slate-900/5 border border-slate-200/80 bg-slate-900">
            <img
              src={HERO_FEATURE_IMAGE_SRC}
              alt={HERO_FEATURE_IMAGE_ALT}
              width={1600}
              height={1200}
              fetchPriority="high"
              decoding="async"
              className="h-full w-full object-cover object-[42%_50%] sm:object-[45%_50%] lg:object-center"
            />
            <div className="absolute bottom-4 left-4 bg-white/95 text-brand-navy px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-sm">
              LOCAL CLEANOUT CREW
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

const HeroTrustStrip = () => (
  <section className="border-y border-slate-100 bg-white/90 py-5">
    <div className="max-w-7xl mx-auto px-6">
      <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-2.5 text-center lg:text-left">
        Trusted by
      </p>
      <p className="text-sm font-medium leading-relaxed text-slate-600 text-center lg:text-left">
        Homeowners · Real Estate Investors · Property Managers · Contractors · Commercial Businesses
      </p>
      <p className="mt-3 text-xs text-slate-500 text-center lg:text-left">
        Fully Insured • Transparent Pricing • Real Project Experience
      </p>
    </div>
  </section>
);

const HeroSteps = () => <CleanoutProcess id="how-it-works" />;

const ValueProps = () => {
  const props = [
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Responsive Communication",
      desc: "Clear, proactive communication from first contact through project completion."
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Clear Upfront Pricing",
      desc: "Honest recommendations and transparent pricing before work begins."
    },
    {
      icon: <CheckCircle2 className="w-8 h-8" />,
      title: "We Solve Difficult Problems",
      desc: "From inherited homes to commercial properties, we help move projects forward."
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Real Project Photos",
      desc: "Every photo on this site is from an actual Reinhart project."
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Fully Insured",
      desc: "Professional service backed by proper insurance for residential and commercial work."
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Trusted Across Middle Tennessee",
      desc: "Serving homeowners, investors, businesses, and property managers."
    }
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {props.map((prop, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col gap-6"
            >
              <div className="w-12 h-12 bg-brand-navy/5 rounded-xl flex items-center justify-center text-brand-orange shrink-0">
                {prop.icon}
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-brand-navy mb-2">{prop.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{prop.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

type ServiceTile = {
  icon: React.ReactNode;
  title: string;
  desc: string;
  to: string;
  cta?: 'View Service' | 'Learn More';
};

type ServiceCategory = {
  id: string;
  pill: string;
  title: string;
  description: string;
  hubLink: string;
  hubCtaLabel: string;
  services: ServiceTile[];
};

const serviceCategories: ServiceCategory[] = [
  {
    id: 'residential-property',
    pill: 'Residential & Property',
    title: 'Residential & Property Services',
    description:
      'Cleanouts and property cleanup for homeowners, families, landlords, investors, and real estate transitions.',
    hubLink: '/residential-property-services',
    hubCtaLabel: 'View Residential & Property Services',
    services: [
      {
        icon: <Trash2 />,
        title: 'Junk Removal',
        desc: 'General junk removal for furniture, clutter, appliances, and unwanted items.',
        to: '/junk-removal',
      },
      {
        icon: <Home />,
        title: 'Estate Cleanouts',
        desc: 'Respectful cleanouts after inheritance, downsizing, estate sales, or family transitions.',
        to: '/estate-cleanouts',
      },
      {
        icon: <Warehouse />,
        title: 'Hoarder Cleanouts',
        desc: 'Large-scale cleanouts handled with structure, discretion, and steady progress.',
        to: '/hoarder-cleanouts',
      },
      {
        icon: <Warehouse />,
        title: 'Garage Cleanouts',
        desc: 'Clear years of accumulated items and restore usable garage space.',
        to: '/garage-cleanouts',
      },
      {
        icon: <Trash2 />,
        title: 'Eviction Cleanouts',
        desc: 'Fast rental cleanouts to help owners regain control and prepare the unit.',
        to: '/eviction-cleanouts',
      },
      {
        icon: <Home />,
        title: 'Landlord & Rental Cleanouts',
        desc: 'Turnover cleanouts for rental homes, apartments, and problem properties.',
        to: '/landlord-rental-cleanouts',
      },
      {
        icon: <KeyRound />,
        title: 'Foreclosure Cleanouts',
        desc: 'Property cleanup after foreclosure, abandonment, or bank-owned transitions.',
        to: '/foreclosure-cleanouts',
      },
      {
        icon: <Package />,
        title: 'Storage Unit Cleanouts',
        desc: 'Removal of abandoned, overflow, or bulky contents from storage units.',
        to: '/storage-unit-cleanouts',
      },
      {
        icon: <Home />,
        title: 'Property Cleanup',
        desc: 'Whole-property cleanup for renovation, sale, occupancy, or next steps.',
        to: '/property-cleanouts',
      },
    ],
  },
  {
    id: 'commercial',
    pill: 'Commercial',
    title: 'Commercial Services',
    description:
      'Cleanout and removal support for offices, warehouses, businesses, property managers, and contractors.',
    hubLink: '/commercial-services',
    hubCtaLabel: 'View Commercial Services',
    services: [
      {
        icon: <Building2 />,
        title: 'Commercial Property Turnovers',
        desc: 'Turnover cleanouts for commercial units between tenants, renovation, or sale.',
        to: '/commercial-property-turnovers',
      },
      {
        icon: <Store />,
        title: 'Retail Decommissioning',
        desc: 'Fixture, inventory, and store contents removed during retail closures and transitions.',
        to: '/retail-decommissioning',
      },
      {
        icon: <Hammer />,
        title: 'Commercial Interior Strip-Outs',
        desc: 'Selective tear-out and fixture removal to prepare spaces for renovation or tenant improvement.',
        to: '/commercial-interior-strip-outs',
      },
      {
        icon: <KeyRound />,
        title: 'Lease Surrender Preparation',
        desc: 'Load-out support aligned with lease-end deadlines and surrender requirements.',
        to: '/lease-surrender-preparation',
      },
      {
        icon: <Archive />,
        title: 'White Box Preparation',
        desc: 'Clear tenant-specific contents so spaces present cleanly for marketing or build-out.',
        to: '/white-box-preparation',
      },
      {
        icon: <Briefcase />,
        title: 'Office Load-Outs',
        desc: 'Cubicles, furniture, files, and office contents removed during decommissioning.',
        to: '/office-load-outs',
      },
      {
        icon: <Store />,
        title: 'Retail Store Cleanouts',
        desc: 'Fixtures, displays, shelving, backroom contents, and store cleanout support.',
        to: '/retail-store-cleanouts',
      },
      {
        icon: <Warehouse />,
        title: 'Warehouse Cleanouts',
        desc: 'Bulk contents, racking, pallets, equipment, and abandoned materials cleared.',
        to: '/warehouse-cleanouts',
      },
      {
        icon: <Building2 />,
        title: 'Property Management Cleanouts',
        desc: 'Recurring cleanout support for managers handling units, turnovers, and problem spaces.',
        to: '/property-management-cleanouts',
      },
      {
        icon: <Building2 />,
        title: 'Commercial Cleanouts',
        desc: 'Cleanouts for offices, businesses, facilities, and commercial property transitions.',
        to: '/commercial-cleanouts',
      },
      {
        icon: <HardHat />,
        title: 'Construction Cleanup',
        desc: 'Jobsite debris, renovation debris, packaging, and leftover materials removed.',
        to: '/construction-cleanup',
      },
    ],
  },
  {
    id: 'demolition',
    pill: 'Demolition Services',
    title: 'Demolition Services',
    description:
      'Selective demolition and removal work that prepares homes, rentals, offices, and commercial spaces for renovation.',
    hubLink: '/demolition-services',
    hubCtaLabel: 'View Demolition Services',
    services: [
      {
        icon: <Hammer />,
        title: 'Interior Demolition',
        desc: 'Selective tear-outs for renovation, repair, and property preparation.',
        to: '/interior-demolition',
        cta: 'Learn More',
      },
      {
        icon: <UtensilsCrossed />,
        title: 'Kitchen Demolition',
        desc: 'Cabinets, counters, flooring, fixtures, and kitchen materials removed.',
        to: '/kitchen-demolition',
      },
      {
        icon: <Bath />,
        title: 'Bathroom Demolition',
        desc: 'Vanities, tile, flooring, fixtures, drywall, and bathroom materials removed.',
        to: '/bathroom-demolition',
      },
      {
        icon: <Layers />,
        title: 'Flooring Removal',
        desc: 'Carpet, laminate, vinyl, tile, and other flooring removed and hauled away.',
        to: '/flooring-removal',
      },
      {
        icon: <Archive />,
        title: 'Cabinet Removal',
        desc: 'Kitchen, bathroom, office, and built-in cabinets removed cleanly.',
        to: '/cabinet-removal',
      },
      {
        icon: <SquareStack />,
        title: 'Drywall Removal',
        desc: 'Drywall tear-out and debris removal for repairs, remodels, and restoration prep.',
        to: '/drywall-removal',
      },
      {
        icon: <PanelTop />,
        title: 'Fence Removal',
        desc: 'Old fencing, posts, panels, and related debris removed from the property.',
        to: '/fence-removal',
      },
      {
        icon: <Trees />,
        title: 'Deck Removal',
        desc: 'Deck boards, framing, railings, and demolition debris removed.',
        to: '/deck-removal',
      },
      {
        icon: <Box />,
        title: 'Shed Demolition',
        desc: 'Small sheds and outdoor structures taken down and hauled away.',
        to: '/shed-demolition',
      },
    ],
  },
];

const ServiceCard = ({ service, index }: { service: ServiceTile; index: number }) => {
  const ctaLabel = service.cta ?? 'View Service';

  return (
    <Link to={service.to} className="group block h-full">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.04 }}
        whileHover={{ y: -10 }}
        className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col gap-5 h-full transition-all duration-300 group-hover:border-brand-orange/35 group-hover:shadow-brand-orange/10"
      >
        <div className="w-12 h-12 bg-brand-navy/5 rounded-xl flex items-center justify-center text-brand-orange group-hover:bg-brand-orange/10 transition-colors">
          {service.icon}
        </div>
        <div className="flex flex-col flex-1 gap-2">
          <h3 className="font-display text-xl font-bold text-brand-navy">{service.title}</h3>
          <p className="text-slate-500 text-sm leading-relaxed">{service.desc}</p>
        </div>
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy group-hover:text-brand-orange transition-colors pt-1 border-t border-slate-100">
          {ctaLabel}
          <ArrowRight size={16} className="text-brand-orange transition-transform group-hover:translate-x-0.5" />
        </span>
      </motion.div>
    </Link>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-24 relative bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-navy mb-6">
            Services Built Around Property Projects
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto text-lg leading-relaxed">
            From estate cleanouts and rental turnovers to commercial load-outs and demolition prep, Reinhart helps
            clear the way for what comes next.
          </p>
        </div>

        <div className="space-y-24">
          {serviceCategories.map((category) => (
            <div key={category.id}>
              <div className="mb-10 max-w-3xl">
                <span className="mb-4 inline-block rounded-full bg-brand-orange/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-orange">
                  {category.pill}
                </span>
                <Link to={category.hubLink} className="group block">
                  <h3 className="font-display text-3xl lg:text-4xl font-bold text-brand-navy mb-4 group-hover:text-brand-orange transition-colors">
                    {category.title}
                  </h3>
                </Link>
                <p className="text-slate-600 text-lg leading-relaxed">{category.description}</p>
                <Link
                  to={category.hubLink}
                  className="mt-6 inline-flex items-center gap-2 rounded-2xl border-2 border-slate-200 bg-white px-6 py-3 text-sm font-bold text-brand-navy transition-colors hover:border-brand-orange hover:text-brand-orange"
                >
                  {category.hubCtaLabel}
                  <ArrowRight size={16} className="text-brand-orange" />
                </Link>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.services.map((service, index) => (
                  <ServiceCard key={service.to} service={service} index={index} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhoWeWorkWith = () => {
  const audiences = [
    {
      icon: <Home className="w-5 h-5" />,
      title: 'Homeowners',
      desc: 'Garage cleanouts, junk removal, yard debris, hot tubs, and property cleanup.',
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: 'Families & Estates',
      desc: 'Estate cleanouts, downsizing, inherited homes, and post-sale cleanout support.',
    },
    {
      icon: <KeyRound className="w-5 h-5" />,
      title: 'Realtors',
      desc: 'Listing prep, seller prep, estate properties, and last-minute property cleanups.',
    },
    {
      icon: <Building2 className="w-5 h-5" />,
      title: 'Property Managers',
      desc: 'Rental turnovers, eviction cleanouts, abandoned items, and recurring cleanup support.',
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: 'Real Estate Investors',
      desc: 'Flip properties, foreclosure cleanouts, renovation prep, and demo support.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: 'Restoration Companies',
      desc: 'Tear-out debris, contents removal, jobsite cleanup, and recovery project support.',
    },
    {
      icon: <HardHat className="w-5 h-5" />,
      title: 'Contractors',
      desc: 'Construction debris, demolition debris, material removal, and site cleanup.',
    },
    {
      icon: <Briefcase className="w-5 h-5" />,
      title: 'Commercial Businesses',
      desc: 'Office cleanouts, furniture removal, warehouse cleanup, and facility transitions.',
    },
  ];

  return (
    <section id="who-we-work-with" className="scroll-mt-32 bg-slate-50/60 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-brand-navy mb-4">Who We Work With</h2>
          <p className="text-slate-600 text-base lg:text-lg leading-relaxed">
            Reinhart supports homeowners, families, businesses, and property professionals who need spaces cleared,
            cleaned out, or prepared for what comes next.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              whileHover={{ y: -4 }}
              className="bg-white p-5 rounded-2xl shadow-lg shadow-slate-200/40 border border-slate-100 flex flex-col gap-3 h-full"
            >
              <div className="w-10 h-10 bg-brand-navy/5 rounded-xl flex items-center justify-center text-brand-orange shrink-0">
                {item.icon}
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-brand-navy mb-1.5">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/** Real project proof — files in /public/images/projects/ (served as /images/projects/…). */
const RecentCleanoutProjects = () => {
  const projects = [
    {
      title: 'Hoarder Cleanout – Joelton',
      meta: 'Heavy debris • Whole-home cleanout',
      slug: 'hoarder-cleanout-joelton',
      beforeSrc:
        '/images/projects/2026%20Projects/2026-04_Hoarder-Property-Cleanout_Joelton/04_Hero/hero-driveway-before-01.jpeg',
      afterSrc:
        '/images/projects/2026%20Projects/2026-04_Hoarder-Property-Cleanout_Joelton/04_Hero/hero-driveway-after-01.jpeg',
      href: '/projects/hoarder-property-cleanup-joelton' as const,
    },
    {
      title: 'Investor Property Cleanup – Gallatin',
      meta: 'Investor project • Debris removal • Property prep',
      slug: 'investor-property-cleanup-gallatin',
      beforeSrc:
        '/images/projects/2026%20Projects/2026-06_Investor-Property-Cleanup_Gallatin/04_Hero/hero-general-property-before-02.jpeg',
      afterSrc:
        '/images/projects/2026%20Projects/2026-06_Investor-Property-Cleanup_Gallatin/04_Hero/hero-general-property-after-01%20copy.jpeg',
      href: '/projects/investor-property-cleanup-gallatin' as const,
    },
    {
      title: 'Interior Demo – Portland',
      meta: 'Selective interior demo • Renovation prep',
      slug: 'interior-demo-portland',
      beforeSrc:
        '/images/projects/2026%20Projects/2026-06_Interior-Demo-Portland/04_Hero/hero-kitchen-before-02.jpeg',
      afterSrc:
        '/images/projects/2026%20Projects/2026-06_Interior-Demo-Portland/04_Hero/hero-kitchen-after-01.jpeg',
      href: '/projects/interior-demo-portland' as const,
    },
    {
      title: 'Commercial Cleanout – Downtown Nashville',
      meta: 'Office furniture • Cubicles • Commercial load-outs',
      slug: 'commercial-cleanout-downtown-nashville',
      beforeSrc:
        '/images/projects/2026%20Projects/2026-06_Commercial-Office-Cleanout_Nashville/01_Before/cubicle-office-before-01.jpeg',
      afterSrc:
        '/images/projects/2026%20Projects/2026-06_Commercial-Office-Cleanout_Nashville/01_Before/open-office-before-01.jpeg',
      href: '/projects/commercial-cleanout-downtown-nashville' as const,
    },
  ];

  return (
    <section id="recent-projects" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-navy mb-6">
            Featured Projects
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            A selection of real Reinhart projects completed for homeowners, investors, businesses, landlords, and estate
            representatives across Middle Tennessee.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <Link key={p.slug} to={p.href} className="block h-full">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -6 }}
                className="group bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col gap-6 h-full cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-slate-200/70"
              >
                <div>
                  <h4 className="font-display text-xl font-bold text-brand-navy mb-1">{p.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{p.meta}</p>
                </div>

                <div className="grid grid-cols-2 gap-3 flex-1">
                  <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 aspect-[4/3]">
                    <img
                      src={p.beforeSrc}
                      alt={`${p.title} — before`}
                      className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.04]"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute bottom-2 left-2 bg-brand-orange text-white px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm">
                      Before
                    </div>
                  </div>
                  <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 aspect-[4/3]">
                    <img
                      src={p.afterSrc}
                      alt={`${p.title} — after`}
                      className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.04]"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute bottom-2 right-2 bg-white text-brand-navy px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm">
                      After
                    </div>
                  </div>
                </div>

                <div className="pt-1 border-t border-slate-100">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy transition-colors duration-300 group-hover:text-brand-orange">
                  View Project
                  <ArrowRight size={16} className="text-brand-orange" />
                  </span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

const BeforeAfterSlider = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(Math.max(position, 0), 100));
  };

  return (
    <section className="py-24 bg-brand-navy text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 lg:items-center">
          <div className="lg:col-span-5">
            <h2 className="font-display text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              From Problem Property to <br />
              <span className="text-brand-orange">Progress</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              Every project starts with an obstacle.
              <br />
              <br />
              Our job is to remove it so the next phase can begin.
            </p>
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 shrink-0 rounded-full bg-brand-orange/20 flex items-center justify-center text-brand-orange">
                  <CheckCircle2 size={20} />
                </div>
                <span className="font-medium leading-snug pt-1.5">
                  Clear communication from start to finish
                </span>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 shrink-0 rounded-full bg-brand-orange/20 flex items-center justify-center text-brand-orange">
                  <CheckCircle2 size={20} />
                </div>
                <span className="font-medium leading-snug pt-1.5">
                  Organized execution on difficult projects
                </span>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 shrink-0 rounded-full bg-brand-orange/20 flex items-center justify-center text-brand-orange">
                  <CheckCircle2 size={20} />
                </div>
                <span className="font-medium leading-snug pt-1.5">
                  Preparing properties for what&apos;s next
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div
              ref={containerRef}
              className="relative w-full aspect-[4/3] sm:aspect-[5/3] lg:aspect-[2/1] mx-auto lg:mx-0 rounded-3xl overflow-hidden cursor-ew-resize shadow-[0_28px_55px_-12px_rgba(0,0,0,0.55)] ring-1 ring-white/15 select-none"
              onMouseMove={handleMove}
              onTouchMove={handleMove}
            >
            {/* After Image */}
            <div className="absolute inset-0">
              <img 
                src={projectImages.propertyCleanouts.nashville.after}
                alt="Interior after work—cleared and move-out ready" 
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-6 right-6 bg-white text-brand-navy px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-xl">After</div>
            </div>
            
            {/* Before Image */}
            <div 
              className="absolute inset-0"
              style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
            >
              <img 
                src={projectImages.propertyCleanouts.nashville.before}
                alt="Interior before work—cluttered rooms" 
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-6 left-6 bg-brand-orange text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-xl">Before</div>
            </div>

            {/* Slider Handle */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white z-20"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center text-brand-navy">
                <ChevronLeft size={16} />
                <ChevronRight size={16} />
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: "Rachel Huber",
      location: "Middle Tennessee",
      text: "The service we got from Reinhart Cleanout was amazing! He was prompt and left our space immaculate! Such a huge help and peace of mind while cleaning out my mom's house. I highly recommend!",
      stars: 5,
      label: "Verified Google Review",
    },
    {
      name: "Bruce Shamp",
      location: "Middle Tennessee",
      text: "Fantastic fast courteous professional really cares about his clients helping in every way to get the job done quickly. Highly recommend him for all your needs. He did a fantastic job — always polite, caring, and professional.",
      stars: 5,
      label: "Verified Google Review",
    },
    {
      name: "David Abbondanza",
      location: "Middle Tennessee",
      text: "We hired Reinhart to remove drywall from an entire house. The workmanship, attention to detail is outstanding and pricing is more than fair. Jeremiah, the owner is a great communicator, courteous and punctual. I highly recommend their services for any hauling, interior demo and general clean-up.",
      stars: 5,
      label: "Verified Google Review",
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-brand-navy mb-4">Trusted to Keep Projects Moving</h2>
          <div className="flex justify-center gap-1 mb-4">
            {[1,2,3,4,5].map(i => <Star key={i} fill="#F27D26" color="#F27D26" />)}
          </div>
          <p className="text-slate-500">
            Feedback from homeowners, investors, property managers, and businesses we&apos;ve helped across Middle
            Tennessee.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-8 rounded-3xl shadow-lg border h-full flex flex-col ${
                i === 0
                  ? 'bg-white border-brand-orange/50 shadow-xl shadow-brand-orange/10'
                  : 'bg-white border-slate-100'
              }`}
            >
              {i === 0 && (
                <div className="inline-flex items-center rounded-full bg-brand-orange/10 text-brand-orange text-[11px] font-bold uppercase tracking-widest px-3 py-1 mb-4">
                  Google Review
                </div>
              )}
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} size={16} fill="#F27D26" color="#F27D26" />
                ))}
              </div>
              <p className="text-slate-600 italic mb-6 leading-relaxed flex-1">"{r.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-brand-orange/10 rounded-full flex items-center justify-center text-brand-orange font-bold">
                  {r.name[0]}
                </div>
                <div>
                  <div className="font-bold text-brand-navy">{r.name}</div>
                  <div className="text-xs text-slate-400 font-medium">{r.label}</div>
                  <div className="text-xs text-slate-400 font-medium">{r.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceAreas = () => {
  const areas = [
    "Goodlettsville", "White House", "Springfield", "Hendersonville", 
    "Madison", "Gallatin", "Portland", "East Nashville", 
    "Greenbrier", "Ridgetop", "Old Hickory", "Downtown Nashville"
  ];

  return (
    <section id="areas" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-brand-navy rounded-[3rem] p-12 lg:p-20 relative overflow-hidden shadow-2xl">
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-8">Serving <br /><span className="text-brand-orange">Middle Tennessee</span></h2>
              <p className="text-slate-300 text-lg mb-10">
                We are locally owned and operated, serving our neighbors with pride across <b>Davidson, Robertson, and Sumner</b> counties.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {areas.map((area, i) => (
                  <div key={i} className="flex items-center gap-3 text-white/80">
                    <MapPin size={16} className="text-brand-orange" />
                    <span className="text-sm font-medium">{area}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative group">
              <div className="aspect-[4/3] bg-[#0a0f1a] rounded-[2rem] overflow-hidden border border-white/10 relative shadow-2xl">
                {/* Stylized Map SVG */}
                <svg 
                  viewBox="0 0 400 300" 
                  className="w-full h-full opacity-90 group-hover:opacity-100 transition-opacity duration-700"
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Grid / Watermarks (Subtle) */}
                  <g stroke="white" strokeOpacity="0.03" strokeWidth="0.5">
                    {Array.from({ length: 10 }).map((_, i) => (
                      <React.Fragment key={i}>
                        <line x1={i * 40} y1="0" x2={i * 40} y2="300" />
                        <line x1="0" y1={i * 30} x2="400" y2={i * 30} />
                      </React.Fragment>
                    ))}
                  </g>

                  {/* County Borders (Dashed Orange - Jagged like the image) */}
                  <g stroke="#F27D26" strokeWidth="1.5" strokeDasharray="4 3" strokeOpacity="0.5">
                    {/* Robertson / Sumner Border */}
                    <path d="M230 0 L225 40 L235 80 L230 130" />
                    {/* Robertson / Davidson Border */}
                    <path d="M0 135 L40 140 L80 130 L120 145 L160 135 L200 140 L230 130" />
                    {/* Sumner / Davidson Border */}
                    <path d="M230 130 L270 140 L310 135 L350 145 L400 130" />
                    {/* Cheatham / Robertson Border */}
                    <path d="M40 0 L35 40 L45 80 L40 135" />
                    {/* Cheatham / Davidson Border */}
                    <path d="M40 135 L50 180 L35 230 L45 300" />
                  </g>

                  {/* Secondary Roads (Very Subtle) */}
                  <g stroke="white" strokeOpacity="0.08" strokeWidth="0.5">
                    <path d="M100 0 Q 110 150, 90 300" />
                    <path d="M300 0 Q 290 150, 310 300" />
                    <path d="M0 100 Q 200 110, 400 90" />
                    <path d="M0 200 Q 200 190, 400 210" />
                  </g>

                  {/* Highways (Solid Orange - Following the image paths) */}
                  <g stroke="#F27D26" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    {/* I-65 North to South */}
                    <path d="M300 0 L280 40 L250 80 L235 110 L225 150 L210 180 L200 210 L205 250 L215 300" />
                    {/* I-24 Northwest to Southeast */}
                    <path d="M40 40 L80 80 L130 130 L170 170 L200 210 L240 240 L290 270 L340 300" />
                    {/* I-40 East to West */}
                    <path d="M0 220 L60 215 L130 210 L200 210 L270 215 L340 210 L400 215" />
                    {/* TN-386 (Vietnam Veterans) */}
                    <path d="M225 150 Q 260 160, 300 155 T 380 140" strokeWidth="1.5" />
                    {/* US-431 / US-41 paths */}
                    <path d="M150 0 L145 100 L160 210" strokeWidth="1" strokeOpacity="0.3" />
                  </g>

                  {/* Cities & Towns (Matching the image locations) */}
                  <g fill="white">
                    {/* Nashville */}
                    <circle cx="200" cy="210" r="4" />
                    <text x="200" y="230" textAnchor="middle" fontSize="14" fontWeight="900" className="font-sans tracking-tight">NASHVILLE</text>
                    
                    {/* Springfield */}
                    <circle cx="150" cy="60" r="2" fillOpacity="0.8" />
                    <text x="150" y="52" textAnchor="middle" fontSize="9" fontWeight="bold" fillOpacity="0.8" className="font-sans">Springfield</text>
                    
                    {/* White House */}
                    <circle cx="245" cy="85" r="2" fillOpacity="0.8" />
                    <text x="252" y="88" fontSize="8" fontWeight="bold" fillOpacity="0.8" className="font-sans">White House</text>

                    {/* Hendersonville */}
                    <circle cx="280" cy="165" r="2" fillOpacity="0.8" />
                    <text x="280" y="178" textAnchor="middle" fontSize="8" fontWeight="bold" fillOpacity="0.8" className="font-sans">Hendersonville</text>

                    {/* Gallatin */}
                    <circle cx="350" cy="145" r="2" fillOpacity="0.8" />
                    <text x="350" y="138" textAnchor="middle" fontSize="8" fontWeight="bold" fillOpacity="0.8" className="font-sans">Gallatin</text>

                    {/* Portland */}
                    <circle cx="320" cy="30" r="2" fillOpacity="0.6" />
                    <text x="320" y="25" textAnchor="middle" fontSize="7" fillOpacity="0.6" className="font-sans">Portland</text>

                    {/* Goodlettsville */}
                    <circle cx="225" cy="155" r="2" fillOpacity="0.8" />
                    <text x="215" y="150" textAnchor="end" fontSize="8" fontWeight="bold" fillOpacity="0.7" className="font-sans">Goodlettsville</text>

                    {/* Millersville */}
                    <circle cx="235" cy="130" r="1.5" fillOpacity="0.6" />
                    <text x="242" y="133" fontSize="7" fillOpacity="0.6" className="font-sans">Millersville</text>

                    {/* Greenbrier */}
                    <circle cx="185" cy="105" r="1.5" fillOpacity="0.6" />
                    <text x="185" y="100" textAnchor="middle" fontSize="7" fillOpacity="0.6" className="font-sans">Greenbrier</text>

                    {/* Pleasant View */}
                    <circle cx="90" cy="115" r="1.5" fillOpacity="0.6" />
                    <text x="90" y="110" textAnchor="middle" fontSize="7" fillOpacity="0.6" className="font-sans">Pleasant View</text>
                  </g>

                  {/* County Labels (Styled like the image) */}
                  <g fill="#F27D26" fillOpacity="0.6" fontSize="12" fontWeight="900" className="font-display tracking-[0.2em] italic">
                    <text x="150" y="85" textAnchor="middle">ROBERTSON</text>
                    <text x="330" y="95" textAnchor="middle">SUMNER</text>
                    <text x="200" y="270" textAnchor="middle">DAVIDSON</text>
                    <text x="60" y="230" textAnchor="middle" fontSize="10" fillOpacity="0.3">CHEATHAM</text>
                  </g>
                </svg>

                {/* The Fading Orange Circle Layer */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-full h-full bg-brand-orange/5 rounded-full blur-3xl animate-pulse" />
                  <div className="absolute">
                    <div className="relative">
                      <MapPin size={32} className="text-brand-orange relative z-10 drop-shadow-[0_0_8px_rgba(242,125,38,0.6)]" />
                      <div className="absolute inset-0 bg-brand-orange rounded-full blur-md animate-ping opacity-20" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Area Tags */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-white text-brand-navy px-4 py-2 rounded-xl text-xs font-bold shadow-2xl border border-slate-100 z-20"
              >
                Locally Based
              </motion.div>
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                className="absolute -bottom-4 -left-4 bg-brand-orange text-white px-4 py-2 rounded-xl text-xs font-bold shadow-2xl z-20"
              >
                Davidson • Robertson • Sumner
              </motion.div>
            </div>
          </div>
          
          {/* Background Texture */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.2),_transparent_70%)]" />
        </div>
      </div>
    </section>
  );
};

const HOME_SERVICE_AREAS = [
  'Goodlettsville',
  'Hendersonville',
  'Gallatin',
  'White House',
  'Portland',
  'Springfield',
  'Greenbrier',
  'Joelton',
  'Madison',
  'East Nashville',
  'North Nashville',
  'Downtown Nashville',
  'Belle Meade',
  'Brentwood',
  'Mt. Juliet',
  'Millersville',
  'Ridgetop',
];

const AreasWeServe = () => {
  return (
    <section
      id="service-areas"
      className="py-20 md:py-24 bg-white border-t border-slate-100"
      aria-labelledby="areas-we-serve-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 id="areas-we-serve-heading" className="font-display text-4xl lg:text-5xl font-bold text-brand-navy mb-4">
          Areas We Serve Across Middle Tennessee
        </h2>
        <p className="text-slate-600 max-w-3xl text-base md:text-lg leading-relaxed mb-8 md:mb-10">
          Reinhart Hauling &amp; Cleanouts proudly serves homeowners, investors, property managers, businesses,
          contractors, and commercial clients throughout Middle Tennessee.
          <br />
          <br />
          Most projects are completed within approximately 45 minutes of Goodlettsville, but we regularly travel
          farther for larger cleanouts, demolition projects, and commercial work.
        </p>

        <ul
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-3 md:gap-4 mb-8 md:mb-10"
          role="list"
        >
          {HOME_SERVICE_AREAS.map((area) => (
            <li
              key={area}
              className="rounded-2xl border border-slate-200 bg-slate-50/80 px-3 py-3 sm:px-4 sm:py-3.5 text-center text-sm font-semibold text-brand-navy"
            >
              {area}
            </li>
          ))}
        </ul>

        <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-2xl">
          If your property isn&apos;t listed, send us the address—we&apos;re happy to review the project.
        </p>
      </div>
    </section>
  );
};

const MeetTheOwner = () => {
  return (
    <section id="about" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white relative group">
              <img 
                src="/branding/Reinhart-hauling-cleanouts-nashville.png" 
                alt="Reinhart Hauling & Cleanouts truck branding in Middle Tennessee" 
                className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/45 via-brand-navy/10 to-transparent" />
              
              {/* Label Overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-3 rounded-2xl inline-flex">
                  <p className="text-white/90 text-xs font-bold uppercase tracking-[0.16em]">
                    LOCALLY OWNED • MIDDLE TENNESSEE
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand-orange/10 rounded-full blur-3xl" />
            <div className="absolute -top-6 -right-6 w-48 h-48 bg-brand-navy/5 rounded-full blur-3xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-orange/10 text-brand-orange font-bold text-sm mb-6">
              <User size={16} />
              LOCALLY OWNED &amp; OPERATED
            </div>
            
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-navy mb-8 leading-tight">
              Professional. <span className="text-brand-orange">Responsive.</span> Dependable.
            </h2>
            
            <div className="space-y-6 text-lg text-slate-600">
              <p>
                Reinhart Hauling &amp; Cleanouts exists to solve difficult property problems through clear
                communication, organized planning, and dependable execution.
              </p>
              <p>
                Whether we&apos;re preparing a home for sale, clearing an inherited property, supporting a renovation,
                or helping a business move a project forward, our focus stays the same: remove obstacles, create
                order, and keep the project moving.
              </p>
              <p className="text-base text-slate-500">
                Difficult jobs deserve thoughtful planning, honest communication, and work completed the right
                way—not shortcuts.
              </p>

              <div className="flex flex-wrap gap-x-6 gap-y-3 pt-2 text-sm font-semibold text-brand-navy">
                <div className="inline-flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-brand-orange" />
                  Clear Communication
                </div>
                <div className="inline-flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-brand-orange" />
                  Honest Recommendations
                </div>
                <div className="inline-flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-brand-orange" />
                  Dependable Execution
                </div>
                <div className="inline-flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-brand-orange" />
                  Property Preparation
                </div>
              </div>
              
              <div className="pt-6 border-t border-slate-200">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-navy flex items-center justify-center text-white font-bold text-xl">
                    JR
                  </div>
                  <div>
                    <p className="font-bold text-brand-navy text-xl">Jeremiah Reinhart</p>
                    <p className="text-slate-500 text-sm">Owner & Founder</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    jobType: 'Cleanout / Junk Removal',
    address: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        const errorData = await response.json();
        console.error('Failed to send request:', errorData.error);
        alert('There was an error sending your request. Please try again or call us directly.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error sending your request. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-brand-orange/20 text-center max-w-2xl mx-auto"
      >
        <div className="w-20 h-20 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="text-brand-orange w-10 h-10" />
        </div>
        <h3 className="text-3xl font-bold text-brand-navy mb-4">Request Received!</h3>
        <p className="text-slate-600 text-lg mb-8">Thanks for reaching out! Jeremiah or one of the team will get back to you shortly with your free quote.</p>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="bg-brand-navy text-white px-8 py-3 rounded-xl font-bold hover:bg-brand-orange transition-colors"
        >
          Send Another Request
        </button>
      </motion.div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto mt-20">
      <div className="text-center mb-10">
        <h3 className="text-3xl font-bold text-brand-navy mb-4">Request a Quote</h3>
        <p className="text-slate-600">Fill out the form below and we'll get back to you with a fair, upfront price.</p>
      </div>

      <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-slate-100 relative text-left">
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-brand-orange text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg whitespace-nowrap">
          Fast Response Guaranteed
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-brand-navy ml-1">Name *</label>
              <input
                required
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-brand-orange focus:bg-white outline-none transition-all text-brand-navy"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-brand-navy ml-1">Phone *</label>
              <input
                required
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(615) 555-0000"
                className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-brand-orange focus:bg-white outline-none transition-all text-brand-navy"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-brand-navy ml-1">Job Type</label>
            <div className="relative">
              <select
                name="jobType"
                value={formData.jobType}
                onChange={handleChange}
                className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-brand-orange focus:bg-white outline-none transition-all text-brand-navy appearance-none cursor-pointer"
              >
                <option>Cleanout / Junk Removal</option>
                <option>Estate Cleanout</option>
                <option>Eviction Cleanout</option>
                <option>Garage Cleanout</option>
                <option>Landlord / Rental Cleanout</option>
                <option>Appliance & Furniture Removal</option>
              </select>
              <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                <ChevronRight className="rotate-90" size={20} />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-brand-navy ml-1">Address / City *</label>
            <input
              required
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Nashville, TN"
              className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-brand-orange focus:bg-white outline-none transition-all text-brand-navy"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-brand-navy ml-1">Description of Junk *</label>
            <textarea
              required
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Old couch and garage boxes..."
              rows={4}
              className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-brand-orange focus:bg-white outline-none transition-all text-brand-navy resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-brand-navy text-white py-5 rounded-2xl font-bold text-xl shadow-xl shadow-brand-navy/20 hover:bg-brand-orange transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
          >
            {isSubmitting ? (
              <>
                <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                Processing...
              </>
            ) : (
              'SUBMIT REQUEST'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden" data-hide-sticky-cta>
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="font-display text-5xl lg:text-7xl font-bold text-brand-navy mb-8 leading-tight">
            Have a Property Problem?
          </h2>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
            Whether you&apos;re preparing a property for sale, managing an estate, coordinating a renovation, clearing
            a commercial facility, or facing a difficult cleanup, Reinhart removes obstacles so your project can move
            forward. Send photos for a straightforward assessment. We&apos;ll review the scope, explain your options,
            and recommend the best path forward.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a 
              href="sms:6152000064?body=Hi%2C%20I%20need%20help%20with%20an%20estate%20or%20rental%20turnover%20quote" 
              className="bg-brand-navy text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl shadow-brand-navy/30 flex items-center justify-center gap-3 hover:bg-brand-orange transition-all hover:scale-105"
            >
              <MessageSquare className="text-brand-orange" />
              Text Photos for a Fast Quote
            </a>
            <a 
              href="tel:6152000064" 
              className="bg-white border-2 border-slate-200 text-brand-navy px-10 py-5 rounded-2xl font-bold text-xl flex items-center justify-center gap-3 hover:border-brand-orange transition-all hover:scale-105"
            >
              <Phone />
              Call Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  const footerServices = [
    { label: 'Estate Cleanouts', to: '/estate-cleanouts' },
    { label: 'Property Cleanouts', to: '/property-cleanouts' },
    { label: 'Commercial Cleanouts', to: '/commercial-cleanouts' },
    { label: 'Garage Cleanouts', to: '/garage-cleanouts' },
    { label: 'Rental Turnovers', to: '/landlord-rental-cleanouts' },
    { label: 'Interior Demolition', to: '/interior-demolition' },
    { label: 'Yard Debris Removal', to: '/junk-removal-goodlettsville' },
  ];

  const footerAreas = [
    'Gallatin',
    'Goodlettsville',
    'Greenbrier',
    'Hendersonville',
    'Joelton',
    'Madison',
    'Nashville',
    'Springfield',
    'White House',
  ];

  const socialLinks = [
    {
      label: 'Google Reviews',
      href: 'https://maps.app.goo.gl/fW4f5CPsAJpLfPmG7',
      icon: 'G',
    },
    { label: 'Facebook', href: 'https://www.facebook.com/reinharthaulingcleanouts/', icon: 'f' },
  ];

  return (
    <footer className="bg-brand-navy text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-14 md:py-16">
        <div className="grid gap-12 lg:gap-14 md:grid-cols-2 lg:grid-cols-4">
          <div className="order-1">
            <img
              src="/branding/Reinhart-hauling-cleanouts-nashville.png"
              alt="Reinhart Hauling & Cleanouts Nashville"
              className="h-[68px] w-auto object-contain bg-white rounded-xl px-2 py-1 mb-5"
            />
            <h2 className="font-display text-xl font-bold mb-3">Reinhart Hauling &amp; Cleanouts</h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Helping homeowners, investors, landlords, estate representatives, and businesses move difficult property
              projects forward throughout Middle Tennessee.
            </p>
            <div className="flex gap-3 mt-6">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  className="group relative w-10 h-10 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-sm font-bold text-white hover:border-brand-orange hover:text-brand-orange transition-colors"
                >
                  {link.icon}
                  <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-brand-navy opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
                    {link.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="order-2">
            <h3 className="font-display text-lg font-bold mb-4">Services</h3>
            <nav className="space-y-2" aria-label="Footer services">
              {footerServices.map((service) => (
                <Link
                  key={service.label}
                  to={service.to}
                  className="block text-sm text-slate-300 hover:text-brand-orange transition-colors"
                >
                  {service.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="order-4 lg:order-3">
            <h3 className="font-display text-lg font-bold mb-4">Areas Served</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-4">
              {footerAreas.map((area) => (
                <span key={area} className="text-sm text-slate-300">
                  {area}
                </span>
              ))}
            </div>
            <Link to="/#service-areas" className="inline-flex text-sm font-bold text-brand-orange hover:text-brand-orange-light transition-colors">
              View Full Service Area
            </Link>
          </div>

          <div className="order-3 lg:order-4">
            <h3 className="font-display text-lg font-bold mb-4">Contact</h3>
            <div className="space-y-4 text-sm text-slate-300">
              <p>
                <span className="block text-white font-semibold">Phone</span>
                <a href="tel:6152000064" className="hover:text-brand-orange transition-colors">
                  615-200-0064
                </a>
              </p>
              <p>
                <span className="block text-white font-semibold">Text Photos</span>
                <a href="sms:6152000064" className="hover:text-brand-orange transition-colors">
                  Fastest way to get a quote
                </a>
              </p>
              <p>
                <span className="block text-white font-semibold">Business Hours</span>
                Mon–Sat
                <br />
                8:00 AM – 6:00 PM
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-white/10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300">
          {['Licensed & Insured', 'Locally Owned', 'Fast Response', 'Free Estimates'].map((item) => (
            <span key={item} className="inline-flex items-center gap-2">
              <CheckCircle2 size={16} className="text-brand-orange" />
              {item}
            </span>
          ))}
        </div>

        <div className="mt-6 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <div>© {new Date().getFullYear()} Reinhart Hauling &amp; Cleanouts. All rights reserved.</div>
          <div className="flex items-center gap-3">
            <Link to="/privacy-policy" className="hover:text-brand-orange transition-colors">
              Privacy Policy
            </Link>
            <span className="text-slate-600">•</span>
            <Link to="/terms-of-service" className="hover:text-brand-orange transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const StickyActionFooter = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      const isDesktop = window.innerWidth >= 768;
      const hideTargets = Array.from(document.querySelectorAll<HTMLElement>('[data-hide-sticky-cta], footer'));
      const shouldHideForContent = hideTargets.some((element) => {
        const rect = element.getBoundingClientRect();
        return rect.top < window.innerHeight - 80 && rect.bottom > 0;
      });

      if (shouldHideForContent) {
        setIsVisible(false);
        return;
      }

      if (!isDesktop) {
        // Keep mobile CTA visible for quick thumb access.
        setIsVisible(true);
        return;
      }

      const hero = document.getElementById('hero');
      const triggerPoint = hero ? hero.offsetTop + hero.offsetHeight - 120 : 420;
      setIsVisible(window.scrollY > triggerPoint);
    };

    const handleScroll = () => {
      updateVisibility();
    };

    updateVisibility();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', updateVisibility);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateVisibility);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.24, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-[60] p-3 md:px-5 md:pt-3 md:pb-4 pointer-events-none"
        >
          <div className="max-w-4xl mx-auto pointer-events-auto">
            <div className="bg-brand-navy/95 backdrop-blur-md border border-white/10 rounded-3xl md:rounded-full p-2 md:py-1.5 md:px-5 shadow-[0_14px_34px_rgba(0,0,0,0.24)] flex flex-col md:flex-row items-center justify-between gap-3 md:gap-2 px-5">
              <div className="flex items-center gap-4">
                <div className="hidden sm:flex w-10 h-10 md:w-9 md:h-9 bg-brand-orange rounded-full items-center justify-center text-white shrink-0">
                  <Phone size={18} />
                </div>
                <div className="text-center md:text-left">
                  <div className="text-[10px] md:text-[11px] font-bold text-brand-orange uppercase tracking-widest leading-none mb-1">Direct Line</div>
                  <a href="tel:6152000064" className="text-lg md:text-lg font-bold text-white hover:text-brand-orange transition-colors">
                    615-200-0064
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 w-full md:w-auto">
                <a 
                  href="sms:6152000064"
                  className="flex-1 md:flex-none bg-white text-brand-navy px-5 py-3 md:py-2 rounded-2xl md:rounded-full font-bold text-sm flex items-center justify-center gap-2 hover:bg-brand-orange hover:text-white transition-all active:scale-95 group"
                >
                  <MessageSquare size={18} className="text-brand-orange group-hover:text-white transition-colors" />
                  <span className="whitespace-nowrap">Text photos for quote</span>
                </a>
                <a 
                  href="tel:6152000064"
                  className="flex-1 md:flex-none bg-brand-orange text-white px-5 py-3 md:py-2 rounded-2xl md:rounded-full font-bold text-sm flex items-center justify-center gap-2 hover:bg-brand-orange-light transition-all active:scale-95 shadow-lg shadow-brand-orange/20"
                >
                  <Phone size={18} />
                  <span className="whitespace-nowrap">Call Us</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// --- Main App ---

const SiteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="min-h-screen selection:bg-brand-orange selection:text-white pb-[calc(152px+env(safe-area-inset-bottom))] md:pb-[calc(136px+env(safe-area-inset-bottom))]"
    >
      <AnimatedBackground />
      <Navbar />
      
      <main>
        {children}
      </main>
      
      <Footer />
      <StickyActionFooter />
    </div>
  );
};

const OG_IMAGE_HOME = 'https://www.reinharthauling.com/og/reinhart-cleanouts-og-v2.jpg?v=3';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Reinhart Hauling &amp; Cleanouts | Estate &amp; Turnover Support</title>
        <meta
          name="description"
          content="Estate transitions, eviction support, rental turnovers, inherited homes, and difficult interiors—cleared with responsive communication across Middle Tennessee."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.reinharthauling.com/" />
        <meta property="og:title" content="Reinhart Hauling &amp; Cleanouts | Estate &amp; Turnover Support" />
        <meta
          property="og:description"
          content="Estate transitions, eviction support, rental turnovers, inherited homes, and difficult interiors—cleared with responsive communication across Middle Tennessee."
        />
        <meta property="og:image" content={OG_IMAGE_HOME} />
        <meta property="og:image:secure_url" content={OG_IMAGE_HOME} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Reinhart Hauling &amp; Cleanouts" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Reinhart Hauling &amp; Cleanouts | Estate &amp; Turnover Support" />
        <meta
          name="twitter:description"
          content="Estate transitions, eviction support, rental turnovers, inherited homes, and difficult interiors—cleared with responsive communication across Middle Tennessee."
        />
        <meta name="twitter:image" content={OG_IMAGE_HOME} />
      </Helmet>
    <SiteLayout>
      <Hero />
      <HeroTrustStrip />
      <ValueProps />
      <RecentCleanoutProjects />
      <Testimonials />
      <Services />
      <WhoWeWorkWith />
      <HeroSteps />
      <BeforeAfterSlider />
      <AreasWeServe />
      <MeetTheOwner />
      <CTA />
    </SiteLayout>
    </>
  );
};

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<Navigate to="/#services" replace />} />
        <Route
          path="/residential-property-services"
          element={
            <SiteLayout>
              <ResidentialPropertyServices />
            </SiteLayout>
          }
        />
        <Route
          path="/commercial-services"
          element={
            <SiteLayout>
              <CommercialServicesHub />
            </SiteLayout>
          }
        />
        <Route
          path="/demolition-services"
          element={
            <SiteLayout>
              <DemolitionServices />
            </SiteLayout>
          }
        />
        <Route path="/demolition" element={<Navigate to="/demolition-services" replace />} />
        <Route
          path="/estate-cleanouts"
          element={
            <SiteLayout>
              <EstateCleanouts />
            </SiteLayout>
          }
        />
        <Route
          path="/eviction-cleanouts"
          element={
            <SiteLayout>
              <EvictionCleanouts />
            </SiteLayout>
          }
        />
        <Route
          path="/junk-removal-goodlettsville"
          element={
            <SiteLayout>
              <JunkRemovalGoodlettsville />
            </SiteLayout>
          }
        />
        <Route
          path="/landlord-rental-cleanouts"
          element={
            <SiteLayout>
              <LandlordRentalCleanouts />
            </SiteLayout>
          }
        />
        <Route
          path="/landlordrentalcleanouts"
          element={
            <SiteLayout>
              <LandlordRentalCleanouts />
            </SiteLayout>
          }
        />
        <Route
          path="/garage-cleanouts"
          element={
            <SiteLayout>
              <GarageCleanouts />
            </SiteLayout>
          }
        />
        <Route
          path="/property-cleanouts"
          element={
            <SiteLayout>
              <PropertyCleanouts />
            </SiteLayout>
          }
        />
        <Route
          path="/property-cleanup"
          element={
            <SiteLayout>
              <PropertyCleanup />
            </SiteLayout>
          }
        />
        {COMMERCIAL_SERVICE_PAGES.map((config) => (
          <Route
            key={config.canonicalPath}
            path={config.canonicalPath}
            element={
              <SiteLayout>
                <CommercialServicePage config={config} />
              </SiteLayout>
            }
          />
        ))}
        <Route path="/office-cleanouts" element={<Navigate to="/office-load-outs" replace />} />
        <Route path="/office-furniture-removal" element={<Navigate to="/office-load-outs" replace />} />
        <Route path="/commercial-junk-removal" element={<Navigate to="/commercial-cleanouts" replace />} />
        <Route
          path="/projects"
          element={
            <SiteLayout>
              <Projects />
            </SiteLayout>
          }
        />
        <Route
          path="/projects/hoarder-property-cleanup"
          element={
            <SiteLayout>
              <HoarderPropertyCleanupJoelton />
            </SiteLayout>
          }
        />
        <Route
          path="/projects/hoarder-property-cleanup-joelton"
          element={
            <SiteLayout>
              <HoarderPropertyCleanupJoelton />
            </SiteLayout>
          }
        />
        <Route
          path="/projects/investor-property-cleanup-gallatin"
          element={
            <SiteLayout>
              <InvestorPropertyCleanupGallatin />
            </SiteLayout>
          }
        />
        <Route
          path="/projects/interior-demo-portland"
          element={
            <SiteLayout>
              <InteriorDemoPortland />
            </SiteLayout>
          }
        />
        <Route
          path="/projects/commercial-cleanout-downtown-nashville"
          element={
            <SiteLayout>
              <CommercialCleanoutDowntownNashville />
            </SiteLayout>
          }
        />
        <Route
          path="/what-we-take"
          element={
            <SiteLayout>
              <WhatWeTake />
            </SiteLayout>
          }
        />
        <Route
          path="/projects/:slug"
          element={
            <SiteLayout>
              <ProjectDetail />
            </SiteLayout>
          }
        />
        <Route
          path="/interior-demolition"
          element={
            <SiteLayout>
              <InteriorDemolition />
            </SiteLayout>
          }
        />
        <Route
          path="/about"
          element={
            <SiteLayout>
              <About />
            </SiteLayout>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <SiteLayout>
              <PrivacyPolicy />
            </SiteLayout>
          }
        />
        <Route
          path="/terms-of-service"
          element={
            <SiteLayout>
              <TermsOfService />
            </SiteLayout>
          }
        />
      </Routes>
    </>
  );
}
