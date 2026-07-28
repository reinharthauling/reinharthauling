/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence, MotionConfig } from 'motion/react';
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
  Zap,
  ClipboardList,
  Camera,
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
import ContractorProjectSupport from './pages/ContractorProjectSupport.tsx';
import ResidentialServicePage from './components/ResidentialServicePage.tsx';
import { RESIDENTIAL_SERVICE_PAGES } from './data/residentialServicePages.ts';
import IndustriesHub from './pages/IndustriesHub.tsx';
import IndustryPage from './components/IndustryPage.tsx';
import { INDUSTRY_PAGES } from './data/industryPages.ts';
import DemolitionServices from './pages/DemolitionServices.tsx';
import About from './pages/About.tsx';
import Projects from './pages/Projects.tsx';
import ProjectDetail from './pages/ProjectDetail.tsx';
import HoarderPropertyCleanupJoelton from './pages/HoarderPropertyCleanupJoelton.tsx';
import InvestorPropertyCleanupGallatin from './pages/InvestorPropertyCleanupGallatin.tsx';
import InteriorDemoPortland from './pages/InteriorDemoPortland.tsx';
import CommercialCleanoutDowntownNashville from './pages/CommercialCleanoutDowntownNashville.tsx';
import WhatWeTake from './pages/WhatWeTake.tsx';
import Pricing from './pages/Pricing.tsx';
import PropertyCleanupGallatin from './pages/PropertyCleanupGallatin.tsx';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import ScrollToTop from './ScrollToTop.tsx';
import CleanoutProcess from './components/CleanoutProcess.tsx';
import PageMeta from './components/PageMeta.tsx';
import SeoRedirect from './components/SeoRedirect.tsx';
import { ServicesMegaMenuPanel, ServicesMobileAccordions } from './components/ServicesMegaMenu.tsx';
import ServiceAreaInquiryModal from './components/ServiceAreaInquiryModal.tsx';
import EmailContactMenu from './components/EmailContactMenu.tsx';
import { EstimateRequestProvider } from './context/EstimateRequestContext.tsx';
import PageCTAs from './components/PageCTAs.tsx';
import ServiceBottomCTA from './components/ServiceBottomCTA.tsx';
import { useEstimateRequest } from './context/EstimateRequestContext.tsx';
import DemolitionServicePage from './components/DemolitionServicePage.tsx';
import { DEMOLITION_SERVICE_PAGES } from './data/demolitionServicePages.ts';
import CommercialServicePage from './components/CommercialServicePage.tsx';
import { COMMERCIAL_SERVICE_PAGES } from './data/commercialServicePages.ts';
import { scrollToSection } from './utils/scrollToSection.ts';
import { projectImages } from './data/projectImages';
import {
  buildWebPageSchema,
  buildWebSiteSchema,
  compactJsonLd,
} from './utils/schema.ts';
import {
  BUSINESS,
  BUSINESS_FACEBOOK_URL,
  BUSINESS_GOOGLE_MAPS_URL,
  BUSINESS_HOURS_DISPLAY,
  ADDITIONAL_SERVICE_AREA_DISPLAY_NAMES,
  PRIMARY_SERVICE_AREA_DISPLAY_NAMES,
  SERVICE_AREA_DISPLAY_NAMES_WITH_PENDING,
} from './data/business.ts';

// --- Components ---

const AnimatedBackground = () => {
  // Deterministic, non-animated particles keep prerender HTML aligned with hydrateRoot.
  const particles = [...Array(20)].map((_, i) => {
    const x = ((i * 37) % 100);
    const y = ((i * 53) % 100);
    const opacity = 0.15 + ((i * 7) % 35) / 100;
    return { x: `${x}%`, y: `${y}%`, opacity };
  });

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Soft Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(242,125,38,0.05),_transparent_50%)]" />
      
      {/* Grid Shimmer */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      <div className="absolute inset-0">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-brand-orange/20"
            style={{
              left: particle.x,
              top: particle.y,
              opacity: particle.opacity,
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
            to="/industries"
            className="text-sm font-medium hover:text-brand-orange transition-colors"
          >
            Industries
          </Link>

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
            href="tel:+16152000064"
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
            <div className="max-h-[calc(100vh-88px)] overflow-y-auto overscroll-contain scrollbar-subtle">
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
                to="/industries"
                className="px-3 py-3 text-sm font-medium text-brand-navy hover:text-brand-orange transition-colors rounded-xl hover:bg-slate-50"
                onClick={closeMobileMenu}
              >
                Industries
              </Link>

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
                href="tel:+16152000064"
                className="mt-2 bg-brand-navy text-white px-4 py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 hover:bg-brand-orange transition-colors"
                onClick={closeMobileMenu}
              >
                <Phone size={16} />
                615-200-0064
              </a>
              </div>
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
              PROPERTY CLEANOUTS • COMMERCIAL • DEMOLITION
            </span>
            <h1 className="font-display text-5xl lg:text-6xl font-bold leading-[0.95] tracking-tighter text-brand-navy mb-3">
              <span className="text-brand-orange">Property Cleanouts,</span>
              <br />
              <span className="text-brand-orange">Commercial Cleanouts</span>
              <br />
              &amp; Junk Removal in Middle Tennessee
            </h1>
            <p className="text-lg lg:text-xl text-slate-600 leading-relaxed mb-6 max-w-2xl">
              Reinhart Hauling &amp; Cleanouts is a Goodlettsville-based, insured property and commercial cleanout
              company serving Middle Tennessee. We handle whole-property cleanouts, commercial cleanouts, estate and
              hoarder cleanouts, junk removal, and selective demolition and cleanup support for homes, rentals,
              offices, retail spaces, and warehouses.
            </p>

            <PageCTAs layout="hero" />

            <div className="mt-5 flex flex-col gap-0.5">
              <span className="text-sm font-semibold text-brand-navy">Need an on-site estimate?</span>
              <span className="inline-flex items-center gap-2 text-sm font-semibold">
                <a
                  href="tel:+16152000064"
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
        Homeowners · Estate Representatives · Landlords · Property Managers · Investors · Contractors · Commercial
        Property Owners
      </p>
      <p className="mt-3 text-xs text-slate-500 text-center lg:text-left">
        Fully Insured • Clear Quote Before Work Begins • Real Project Experience
      </p>
    </div>
  </section>
);

const HOME_PROCESS_STEPS = [
  {
    number: '01',
    icon: ClipboardList,
    title: 'Call, Text, or Request an Estimate',
    description:
      'Share the property address, project type, access notes, and timing so we understand the scope and can respond clearly.',
    cta: { label: 'Request an Estimate →', estimate: true },
  },
  {
    number: '02',
    icon: Camera,
    title: 'Photos or On-Site Walkthrough',
    description:
      'We review photos or schedule an on-site walkthrough to assess volume, access, disposal needs, and any selective demolition involved.',
  },
  {
    number: '03',
    icon: CheckCircle2,
    title: 'Clear Quote Before Work Begins',
    description:
      'You receive a clear quote covering labor, haul-away, and disposal before work starts—no guessing on price after the crew arrives.',
    cta: { href: 'tel:+16152000064', label: 'Call Now →' },
  },
  {
    number: '04',
    icon: Truck,
    title: 'Load, Remove & Handle Materials',
    description:
      'We load and remove the material. Items are sorted for disposal, recycling, scrap recovery, or donation when practical and appropriate.',
  },
];

const HeroSteps = () => (
  <CleanoutProcess
    id="how-it-works"
    title="How a Cleanout Works"
    subtitle="Call or request an estimate, review photos or walk the site, get a clear quote, then we load, remove, and properly handle the material."
    steps={HOME_PROCESS_STEPS}
  />
);

const ValueProps = () => {
  const props = [
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Responsive Communication",
      desc: "Clear communication from first contact through load-out—whether you call, text, or request an estimate."
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Clear Quote Before Work",
      desc: "We review photos or walk the site, then provide a clear quote before work begins."
    },
    {
      icon: <CheckCircle2 className="w-8 h-8" />,
      title: "Substantial Cleanout Projects",
      desc: "Property and commercial cleanouts, estate and hoarder jobs, turnovers, and selective demolition support."
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Real Project Photos",
      desc: "Every photo on this site is from an actual Reinhart project."
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Fully Insured",
      desc: "Yes—we are insured for residential and commercial cleanout and selective demolition support work."
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Middle Tennessee Coverage",
      desc: "Based in Goodlettsville and serving Nashville-area communities and surrounding Middle Tennessee markets."
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
                <p className="font-display text-xl font-bold text-brand-navy mb-2">{prop.title}</p>
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
    pill: 'Property Services',
    title: 'Property Cleanouts',
    description:
      'Whole-home and whole-property cleanouts for homeowners with substantial cleanup needs, estate representatives, landlords, investors, and multifamily turnovers—including estate, hoarder, rental, eviction, and foreclosure cleanouts.',
    hubLink: '/residential-property-services',
    hubCtaLabel: 'View All Residential Services',
    services: [
      { icon: <Home />, title: 'Property Cleanouts', desc: 'Substantial residential and investment property cleanouts—not single-item discount pickups.', to: '/property-cleanouts' },
      { icon: <Home />, title: 'Property Cleanup', desc: 'Whole-property cleanup for renovation, sale, occupancy, or next steps.', to: '/property-cleanup' },
      { icon: <Users />, title: 'Estate Cleanouts', desc: 'Respectful cleanouts after inheritance, downsizing, and family transitions.', to: '/estate-cleanouts' },
      { icon: <Warehouse />, title: 'Hoarder Cleanouts', desc: 'Large-scale cleanouts with structure, discretion, and steady progress.', to: '/hoarder-cleanouts' },
      { icon: <Home />, title: 'Rental Property Cleanouts', desc: 'Turnover cleanouts for rental homes, apartments, and problem properties.', to: '/landlord-rental-cleanouts' },
      { icon: <Trash2 />, title: 'Eviction Cleanouts', desc: 'Fast rental cleanouts to help owners regain control and prepare the unit.', to: '/eviction-cleanouts' },
      { icon: <KeyRound />, title: 'Foreclosure Cleanouts', desc: 'Cleanup after foreclosure, abandonment, or bank-owned transitions.', to: '/foreclosure-cleanouts' },
      { icon: <Warehouse />, title: 'Garage Cleanouts', desc: 'Clear accumulated items and restore usable garage space.', to: '/garage-cleanouts' },
      { icon: <Package />, title: 'Storage Unit Cleanouts', desc: 'Abandoned and overflow contents removed from storage units.', to: '/storage-unit-cleanouts' },
      { icon: <Truck />, title: 'Move-Out Cleanouts', desc: 'Left-behind contents cleared for turnover and re-listing.', to: '/move-out-cleanouts' },
      { icon: <TrendingUp />, title: 'Property Preparation', desc: 'Organized clearing that opens properties for sale, renovation, or occupancy.', to: '/property-preparation' },
      { icon: <Trees />, title: 'Yard Debris Cleanup', desc: 'Brush, exterior clutter, and outdoor materials cleared from the property.', to: '/yard-debris-cleanup' },
      { icon: <Zap />, title: 'Storm Cleanup', desc: 'Wind, tree, and exterior debris cleared after severe weather.', to: '/storm-cleanup' },
    ],
  },
  {
    id: 'residential-removal',
    pill: 'Removal Services',
    title: 'Junk Removal & Targeted Haul-Away',
    description:
      'Junk removal and targeted haul-away for furniture, appliances, and debris—supporting larger property cleanouts when items need to come out cleanly.',
    hubLink: '/residential-property-services',
    hubCtaLabel: 'View All Residential Services',
    services: [
      { icon: <Trash2 />, title: 'Junk Removal', desc: 'Furniture, clutter, appliances, and unwanted household items removed as part of a full cleanout or targeted haul-away.', to: '/junk-removal' },
      { icon: <Home />, title: 'Furniture Removal', desc: 'Couches, beds, dressers, and bulky furniture haul-away.', to: '/furniture-removal' },
      { icon: <Package />, title: 'Appliance Removal', desc: 'Refrigerators, washers, dryers, and stoves removed and hauled away.', to: '/appliance-removal' },
      { icon: <Zap />, title: 'Hot Tub Removal', desc: 'Hot tubs removed from decks, patios, and tight access areas.', to: '/hot-tub-removal' },
      { icon: <Users />, title: 'Piano Removal', desc: 'Upright and console pianos evaluated for stairs and safe removal.', to: '/piano-removal' },
      { icon: <Briefcase />, title: 'Office Furniture Removal', desc: 'Office furniture removed during decommissioning and relocation.', to: '/office-load-outs' },
      { icon: <HardHat />, title: 'Construction Debris Removal', desc: 'Renovation debris, packaging, and leftover materials removed.', to: '/construction-cleanup' },
      { icon: <PanelTop />, title: 'Fence Removal', desc: 'Old fencing, posts, and panels removed from the property.', to: '/fence-removal' },
      { icon: <Trees />, title: 'Deck Removal', desc: 'Deck boards, framing, railings, and related debris removed.', to: '/deck-removal' },
      { icon: <Box />, title: 'Shed Demolition', desc: 'Small sheds and outdoor structures taken down and hauled away.', to: '/shed-demolition' },
      { icon: <Archive />, title: 'Cabinet Removal', desc: 'Kitchen, bathroom, and built-in cabinets removed cleanly.', to: '/cabinet-removal' },
      { icon: <Layers />, title: 'Flooring Removal', desc: 'Carpet, laminate, vinyl, tile, and other flooring removed.', to: '/flooring-removal' },
      { icon: <Hammer />, title: 'Playset Removal', desc: 'Backyard playsets and swing sets taken down and hauled away.', to: '/playset-removal' },
    ],
  },
  {
    id: 'commercial',
    pill: 'Commercial',
    title: 'Commercial Cleanouts',
    description:
      'Commercial cleanouts for retail, offices, warehouses, and commercial property owners—plus turnovers, retail decommissioning, office load-outs, and construction cleanup for property managers, GCs, and restoration teams.',
    hubLink: '/commercial-services',
    hubCtaLabel: 'View Commercial Services',
    services: [
      {
        icon: <Building2 />,
        title: 'Commercial Cleanouts',
        desc: 'Cleanouts for offices, businesses, facilities, and commercial property transitions.',
        to: '/commercial-cleanouts',
      },
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
        icon: <Store />,
        title: 'Retail Store Cleanouts',
        desc: 'Fixtures, displays, shelving, backroom contents, and store cleanout support.',
        to: '/retail-store-cleanouts',
      },
      {
        icon: <Briefcase />,
        title: 'Office Load-Outs',
        desc: 'Cubicles, furniture, files, and office contents removed during decommissioning.',
        to: '/office-load-outs',
      },
      {
        icon: <Warehouse />,
        title: 'Warehouse Cleanouts',
        desc: 'Bulk contents, racking, pallets, equipment, and abandoned materials cleared.',
        to: '/warehouse-cleanouts',
      },
      {
        icon: <HardHat />,
        title: 'Construction Cleanup',
        desc: 'Jobsite debris, renovation debris, packaging, and leftover materials removed.',
        to: '/construction-cleanup',
      },
      {
        icon: <HardHat />,
        title: 'Contractor Project Support',
        desc: 'Dependable labor and project support for commercial renovations, TI work, and property transitions.',
        to: '/contractor-project-support',
      },
      {
        icon: <Hammer />,
        title: 'Commercial Interior Strip-Outs',
        desc: 'Selective tear-out and fixture removal to prepare spaces for renovation or tenant improvement.',
        to: '/commercial-interior-strip-outs',
      },
      {
        icon: <Building2 />,
        title: 'Tenant Improvement (TI) Demo',
        desc: 'Prior build-out removal before office, retail, and commercial tenant improvement work.',
        to: '/tenant-improvement-demolition',
      },
      {
        icon: <Archive />,
        title: 'White Box Preparation',
        desc: 'Clear tenant-specific contents so spaces present cleanly for marketing or build-out.',
        to: '/white-box-preparation',
      },
      {
        icon: <KeyRound />,
        title: 'Lease Surrender Preparation',
        desc: 'Load-out support aligned with lease-end deadlines and surrender requirements.',
        to: '/lease-surrender-preparation',
      },
      {
        icon: <Building2 />,
        title: 'Property Management Cleanouts',
        desc: 'Recurring cleanout support for managers handling units, turnovers, and problem spaces.',
        to: '/property-management-cleanouts',
      },
    ],
  },
  {
    id: 'demolition',
    pill: 'Demolition Services',
    title: 'Selective Demolition & Construction Cleanup',
    description:
      'Selective demolition and construction cleanup that prepares homes, rentals, offices, and commercial spaces for renovation—interior tear-out and debris removal, not structural building demolition.',
    hubLink: '/demolition-services',
    hubCtaLabel: 'View Demolition Services',
    services: [
      {
        icon: <Layers />,
        title: 'Selective Demolition',
        desc: 'Targeted tear-out of scheduled materials while protecting the rest of the property.',
        to: '/selective-demolition',
      },
      {
        icon: <Hammer />,
        title: 'Interior Demolition',
        desc: 'Selective interior tear-out that prepares spaces for renovation—not structural demolition.',
        to: '/interior-demolition',
      },
      {
        icon: <HardHat />,
        title: 'Construction Cleanup',
        desc: 'Jobsite and renovation debris removed so the next phase of work can start clean.',
        to: '/construction-cleanup',
      },
      {
        icon: <Building2 />,
        title: 'Tenant Improvement (TI) Demo',
        desc: 'Selective demo before office, retail, and commercial tenant improvement work.',
        to: '/tenant-improvement-demolition',
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
        icon: <PanelTop />,
        title: 'Ceiling Grid Removal',
        desc: 'Drop ceiling grids and tiles removed for renovation and TI projects.',
        to: '/ceiling-grid-removal',
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
            Property Cleanouts, Commercial Cleanouts &amp; Selective Demolition
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Reinhart focuses on{' '}
            <Link to="/property-cleanouts" className="font-semibold text-brand-orange hover:text-brand-navy transition-colors">
              property cleanouts
            </Link>
            ,{' '}
            <Link to="/commercial-cleanouts" className="font-semibold text-brand-orange hover:text-brand-navy transition-colors">
              commercial cleanouts
            </Link>
            , estate and hoarder projects, rental turnovers, and{' '}
            <Link to="/selective-demolition" className="font-semibold text-brand-orange hover:text-brand-navy transition-colors">
              selective demolition
            </Link>{' '}
            support—with junk removal available when it fits the job. See{' '}
            <Link to="/what-we-take" className="font-semibold text-brand-orange hover:text-brand-navy transition-colors">
              items we remove
            </Link>{' '}
            or{' '}
            <Link to="/projects" className="font-semibold text-brand-orange hover:text-brand-navy transition-colors">
              recent projects
            </Link>
            .
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
      desc: 'Substantial property cleanouts, cluttered homes, garages, and cleanup before renovation or sale.',
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: 'Estate Representatives',
      desc: 'Estate and inherited-home cleanouts handled with clear communication and steady progress.',
    },
    {
      icon: <KeyRound className="w-5 h-5" />,
      title: 'Landlords & Multifamily',
      desc: 'Rental, eviction, and apartment turnovers so units return to rent-ready condition faster.',
    },
    {
      icon: <Building2 className="w-5 h-5" />,
      title: 'Property Managers',
      desc: 'Recurring cleanout support for problem units, abandoned contents, and portfolio turnovers.',
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: 'Real Estate Investors',
      desc: 'Foreclosure cleanouts, flip prep, investor property cleanup, and renovation support.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: 'Restoration Companies',
      desc: 'Contents removal, tear-out debris, and jobsite cleanup alongside recovery work.',
    },
    {
      icon: <HardHat className="w-5 h-5" />,
      title: 'General Contractors',
      desc: 'Construction cleanup, selective demo support, and material removal for active jobsites.',
    },
    {
      icon: <Briefcase className="w-5 h-5" />,
      title: 'Retail, Offices & Warehouses',
      desc: 'Commercial cleanouts, office furniture, retail fixtures, and warehouse clear-outs for property owners.',
    },
  ];

  return (
    <section id="who-we-work-with" className="scroll-mt-32 bg-slate-50/60 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-brand-navy mb-4">Who We Work With</h2>
          <p className="text-slate-600 text-base lg:text-lg leading-relaxed">
            Yes—we work with landlords and property managers, as well as homeowners, estate representatives, investors,
            apartment operators, general contractors, restoration companies, and commercial property owners who need
            spaces cleared or prepared for what comes next.
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
            Real{' '}
            <Link to="/projects" className="font-semibold text-brand-orange hover:text-brand-navy transition-colors">
              projects
            </Link>{' '}
            for homeowners, investors, landlords, estate representatives, and commercial clients across Middle
            Tennessee. Read{' '}
            <Link to="/#reviews" className="font-semibold text-brand-orange hover:text-brand-navy transition-colors">
              reviews
            </Link>{' '}
            from completed work.
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
  const areas = SERVICE_AREA_DISPLAY_NAMES_WITH_PENDING;

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

const PRIMARY_SERVICE_AREAS = PRIMARY_SERVICE_AREA_DISPLAY_NAMES;
const NEARBY_SERVICE_AREAS = ADDITIONAL_SERVICE_AREA_DISPLAY_NAMES;

const REGIONAL_PROJECT_COVERAGE = [
  'Clarksville',
  'Dickson',
  'La Vergne',
  'Ashland City',
  'Pleasant View',
  'Columbia',
  'Spring Hill',
  'Cookeville',
  'Bowling Green',
  'Middle Tennessee',
];

const areaCardClassName =
  'rounded-xl border border-slate-200 bg-slate-50/80 px-3 py-2 text-center text-sm font-semibold text-brand-navy';

const linkClassName =
  'font-bold text-brand-orange transition-colors hover:text-brand-navy focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/30 focus-visible:ring-offset-2 rounded-sm';

const AreasWeServe = () => {
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const { openEstimateRequest } = useEstimateRequest();

  return (
    <>
      <section
        id="service-areas"
        className="py-16 md:py-20 bg-white border-t border-slate-100"
        aria-labelledby="areas-we-serve-heading"
      >
      <div className="max-w-7xl mx-auto px-6">
        <h2 id="areas-we-serve-heading" className="font-display text-4xl lg:text-5xl font-bold text-brand-navy mb-4">
          Areas We Serve Across Middle Tennessee
        </h2>
        <p className="text-slate-600 max-w-3xl text-base md:text-lg leading-relaxed mb-5 md:mb-6">
          Based in Goodlettsville, Reinhart Hauling &amp; Cleanouts is a mobile, insured service-area business focused on
          Goodlettsville, Hendersonville, Gallatin, Nashville, and Mt. Juliet—plus nearby Middle Tennessee communities
          when the project fits.
        </p>
        <p className="text-slate-600 max-w-3xl text-base md:text-lg leading-relaxed mb-5 md:mb-6">
          We complete property cleanouts, commercial cleanouts, rental turnovers, and selective demolition support
          throughout these markets. For larger commercial, retail decommissioning, warehouse, or contractor projects, we
          can mobilize farther when the scope makes sense.
        </p>
        <p className="text-slate-600 max-w-3xl text-base md:text-lg leading-relaxed mb-8 md:mb-9">
          Same-day or short-notice service may be available depending on scheduling, location, project size, and disposal
          requirements. Call{' '}
          <a href="tel:+16152000064" className={linkClassName}>
            615-200-0064
          </a>{' '}
          or{' '}
          <button type="button" onClick={openEstimateRequest} className={linkClassName}>
            request an estimate
          </button>{' '}
          with the property address and scope.
        </p>

        <div className="space-y-7 md:space-y-8">
          <div>
            <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-brand-orange">Primary Service Area</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-2.5" role="list">
              {PRIMARY_SERVICE_AREAS.map((area) => (
                <li key={area} className={areaCardClassName}>
                  {area}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-500">
              Nearby Communities
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-2.5" role="list">
              {NEARBY_SERVICE_AREAS.map((area) => (
                <li key={area} className={areaCardClassName}>
                  {area}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-400">
              Regional Project Coverage
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-2.5" role="list">
              {REGIONAL_PROJECT_COVERAGE.map((area) => (
                <li key={area} className={areaCardClassName}>
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-7 md:mt-8 text-slate-500 text-sm md:text-base leading-relaxed max-w-3xl">
          Not sure if we serve your area?{' '}
          <a href="tel:+16152000064" className={linkClassName}>
            Call us
          </a>{' '}
          or{' '}
          <button type="button" onClick={() => setInquiryOpen(true)} className={linkClassName}>
            Email us
          </button>{' '}
          with the property address and project details.
        </p>
      </div>
    </section>

      <ServiceAreaInquiryModal isOpen={inquiryOpen} onClose={() => setInquiryOpen(false)} />
    </>
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
                Reinhart Hauling &amp; Cleanouts is a Goodlettsville-based cleanout company. We handle{' '}
                <Link to="/property-cleanouts" className="font-semibold text-brand-orange hover:text-brand-navy transition-colors">
                  property cleanouts
                </Link>
                ,{' '}
                <Link to="/property-cleanup" className="font-semibold text-brand-orange hover:text-brand-navy transition-colors">
                  property cleanup
                </Link>
                ,{' '}
                <Link to="/commercial-cleanouts" className="font-semibold text-brand-orange hover:text-brand-navy transition-colors">
                  commercial cleanouts
                </Link>
                ,{' '}
                <Link to="/estate-cleanouts" className="font-semibold text-brand-orange hover:text-brand-navy transition-colors">
                  estate cleanouts
                </Link>
                ,{' '}
                <Link to="/hoarder-cleanouts" className="font-semibold text-brand-orange hover:text-brand-navy transition-colors">
                  hoarder cleanouts
                </Link>
                ,{' '}
                <Link to="/landlord-rental-cleanouts" className="font-semibold text-brand-orange hover:text-brand-navy transition-colors">
                  rental
                </Link>
                {' '}and{' '}
                <Link to="/eviction-cleanouts" className="font-semibold text-brand-orange hover:text-brand-navy transition-colors">
                  eviction cleanouts
                </Link>
                , and selective demolition support—not discount single-item pickups.
              </p>
              <p>
                We clean out homes, rentals, apartments, offices, retail spaces, and warehouses. That includes{' '}
                <Link to="/commercial-property-turnovers" className="font-semibold text-brand-orange hover:text-brand-navy transition-colors">
                  commercial property turnovers
                </Link>
                ,{' '}
                <Link to="/retail-decommissioning" className="font-semibold text-brand-orange hover:text-brand-navy transition-colors">
                  retail decommissioning
                </Link>
                ,{' '}
                <Link to="/warehouse-cleanouts" className="font-semibold text-brand-orange hover:text-brand-navy transition-colors">
                  warehouse cleanouts
                </Link>
                , office furniture and retail fixture removal,{' '}
                <Link to="/interior-demolition" className="font-semibold text-brand-orange hover:text-brand-navy transition-colors">
                  interior demolition
                </Link>
                , and{' '}
                <Link to="/construction-cleanup" className="font-semibold text-brand-orange hover:text-brand-navy transition-colors">
                  construction cleanup
                </Link>
                . See{' '}
                <Link to="/what-we-take" className="font-semibold text-brand-orange hover:text-brand-navy transition-colors">
                  items we remove
                </Link>
                .
              </p>
              <p>
                The estimate process is straightforward: call, text, or request an estimate; we review photos or schedule
                a walkthrough; you receive a clear quote before work begins; then we load, remove, and handle the
                material. Items are sorted for disposal, recycling, scrap recovery, or donation when practical and
                appropriate. We are insured. Same-day or short-notice service may be available depending on scheduling,
                location, project size, and disposal requirements.
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

const Footer = () => {
  const footerServices = [
    { label: 'Property Cleanouts', to: '/property-cleanouts' },
    { label: 'Estate Cleanouts', to: '/estate-cleanouts' },
    { label: 'Commercial Property Turnovers', to: '/commercial-property-turnovers' },
    { label: 'Commercial Cleanouts', to: '/commercial-cleanouts' },
    { label: 'Contractor Project Support', to: '/contractor-project-support' },
    { label: 'Retail Decommissioning', to: '/retail-decommissioning' },
    { label: 'Interior Demolition', to: '/interior-demolition' },
    { label: 'Tenant Improvement Demo', to: '/tenant-improvement-demolition' },
    { label: 'Construction Cleanup', to: '/construction-cleanup' },
  ];

  const footerAreas = [
    'Goodlettsville',
    'Hendersonville',
    'Nashville',
    'East Nashville',
    'Downtown Nashville',
    'Gallatin',
    'Mt. Juliet',
    'Brentwood',
    'Franklin',
    'White House',
    'Springfield',
    'Lebanon',
  ];

  const socialLinks = [
    {
      label: 'Google Reviews',
      href: BUSINESS_GOOGLE_MAPS_URL,
      icon: 'G',
    },
    { label: 'Facebook', href: BUSINESS_FACEBOOK_URL, icon: 'f' },
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
            <h2 className="font-display text-xl font-bold mb-3">{BUSINESS.name}</h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Helping homeowners, investors, property managers, contractors, and businesses move property projects
              forward throughout Middle Tennessee.
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
              <Link
                to="/industries"
                className="block pt-2 text-sm font-semibold text-brand-orange hover:text-brand-orange-light transition-colors"
              >
                Industries We Serve
              </Link>
            </nav>
          </div>

          <div className="order-4 lg:order-3">
            <h3 className="font-display text-lg font-bold mb-4">Areas Served</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-4">
              {footerAreas.map((area) =>
                area === 'Gallatin' ? (
                  <Link
                    key={area}
                    to="/property-cleanup-gallatin"
                    className="text-sm text-slate-300 hover:text-brand-orange transition-colors"
                  >
                    {area}
                  </Link>
                ) : (
                  <span key={area} className="text-sm text-slate-300">
                    {area}
                  </span>
                ),
              )}
            </div>
            <Link to="/#service-areas" className="inline-flex text-sm font-bold text-brand-orange hover:text-brand-orange-light transition-colors">
              View Full Service Area
            </Link>
          </div>

          <div className="order-3 lg:order-4">
            <h3 className="font-display text-lg font-bold mb-4">Contact</h3>
            <div className="space-y-4 text-sm text-slate-300">
              <p>
                Call or text{' '}
                <a href={BUSINESS.phoneTel} className="font-semibold text-white hover:text-brand-orange transition-colors">
                  {BUSINESS.phoneDisplay}
                </a>
              </p>
              <p>
                Email{' '}
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="font-semibold text-white hover:text-brand-orange transition-colors"
                >
                  {BUSINESS.email}
                </a>
              </p>
              <p>
                <span className="block text-white font-semibold">{BUSINESS_HOURS_DISPLAY.title}</span>
                {BUSINESS_HOURS_DISPLAY.weekdayLabel}
                <br />
                {BUSINESS_HOURS_DISPLAY.weekdayHours}
                <br />
                {BUSINESS_HOURS_DISPLAY.saturdayLabel}
                <br />
                {BUSINESS_HOURS_DISPLAY.saturdayHours}
                <br />
                {BUSINESS_HOURS_DISPLAY.sundayLabel}
                <br />
                {BUSINESS_HOURS_DISPLAY.sundayHours}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-white/10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300">
          {['Fully Insured', 'Locally Owned', 'Fast Response', 'Free Estimates'].map((item) => (
            <span key={item} className="inline-flex items-center gap-2">
              <CheckCircle2 size={16} className="text-brand-orange" />
              {item}
            </span>
          ))}
        </div>

        <div className="mt-6 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <div suppressHydrationWarning>
            © {new Date().getFullYear()} Reinhart Hauling & Cleanouts. All rights reserved.
          </div>
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
  const { openEstimateRequest } = useEstimateRequest();

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
          data-prerender-strip
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
                  <a href="tel:+16152000064" className="text-lg md:text-lg font-bold text-white hover:text-brand-orange transition-colors">
                    615-200-0064
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 w-full md:w-auto">
                <button
                  type="button"
                  onClick={openEstimateRequest}
                  className="flex-1 md:flex-none bg-white text-brand-navy px-5 py-3 md:py-2 rounded-2xl md:rounded-full font-bold text-sm flex items-center justify-center gap-2 hover:bg-brand-orange hover:text-white transition-all active:scale-95"
                >
                  Request an Estimate
                </button>
                <a 
                  href="tel:+16152000064"
                  className="flex-1 md:flex-none bg-brand-orange text-white px-5 py-3 md:py-2 rounded-2xl md:rounded-full font-bold text-sm flex items-center justify-center gap-2 hover:bg-brand-orange-light transition-all active:scale-95 shadow-lg shadow-brand-orange/20"
                >
                  <Phone size={18} />
                  <span className="whitespace-nowrap">Call Now</span>
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
    <EstimateRequestProvider>
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
    </EstimateRequestProvider>
  );
};

const HOME_TITLE =
  'Reinhart Hauling & Cleanouts | Property Cleanouts, Commercial Cleanouts & Junk Removal in Middle Tennessee';
const HOME_DESCRIPTION =
  'Goodlettsville-based property and commercial cleanouts across Middle Tennessee. Estate, rental, and selective demolition support. Insured. Call 615-200-0064.';

const HomePage = () => {
  return (
    <>
      <PageMeta
        title={HOME_TITLE}
        description={HOME_DESCRIPTION}
        path="/"
        jsonLd={compactJsonLd([
          buildWebSiteSchema(),
          buildWebPageSchema({
            path: '/',
            name: HOME_TITLE,
            description: HOME_DESCRIPTION,
          }),
        ])}
      />
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
      <ServiceBottomCTA variant="home" />
    </SiteLayout>
    </>
  );
};

export default function App() {
  // Keep Motion static while the prerender bot captures HTML so snapshots are stable.
  const isPrerenderBot =
    typeof navigator !== 'undefined' && /ReinhartHaulingPrerender/i.test(navigator.userAgent);

  const [motionReady, setMotionReady] = useState(!isPrerenderBot);

  useEffect(() => {
    if (isPrerenderBot) return;
    setMotionReady(true);
  }, [isPrerenderBot]);

  return (
    <MotionConfig isStatic={!motionReady}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<SeoRedirect to="/#services" canonicalPath="/" />} />
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
        <Route path="/demolition" element={<SeoRedirect to="/demolition-services" />} />
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
        <Route path="/landlordrentalcleanouts" element={<SeoRedirect to="/landlord-rental-cleanouts" />} />
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
        <Route
          path="/property-cleanup-gallatin"
          element={
            <SiteLayout>
              <PropertyCleanupGallatin />
            </SiteLayout>
          }
        />
        <Route
          path="/contractor-project-support"
          element={
            <SiteLayout>
              <ContractorProjectSupport />
            </SiteLayout>
          }
        />
        <Route
          path="/industries"
          element={
            <SiteLayout>
              <IndustriesHub />
            </SiteLayout>
          }
        />
        {INDUSTRY_PAGES.map((config) => (
          <Route
            key={config.canonicalPath}
            path={config.canonicalPath}
            element={
              <SiteLayout>
                <IndustryPage config={config} />
              </SiteLayout>
            }
          />
        ))}
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
        {DEMOLITION_SERVICE_PAGES.map((config) => (
          <Route
            key={config.canonicalPath}
            path={config.canonicalPath}
            element={
              <SiteLayout>
                <DemolitionServicePage config={config} />
              </SiteLayout>
            }
          />
        ))}
        {RESIDENTIAL_SERVICE_PAGES.map((config) => (
          <Route
            key={config.canonicalPath}
            path={config.canonicalPath}
            element={
              <SiteLayout>
                <ResidentialServicePage config={config} />
              </SiteLayout>
            }
          />
        ))}
        <Route path="/rental-property-cleanouts" element={<SeoRedirect to="/landlord-rental-cleanouts" />} />
        <Route path="/office-cleanouts" element={<SeoRedirect to="/office-load-outs" />} />
        <Route path="/office-furniture-removal" element={<SeoRedirect to="/office-load-outs" />} />
        <Route path="/commercial-junk-removal" element={<SeoRedirect to="/commercial-cleanouts" />} />
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
          element={<SeoRedirect to="/projects/hoarder-property-cleanup-joelton" />}
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
          path="/pricing"
          element={
            <SiteLayout>
              <Pricing />
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
    </MotionConfig>
  );
}
