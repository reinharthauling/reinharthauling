/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
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
  Zap,
  User,
  Building2,
  Music
} from 'lucide-react';
import EstateCleanouts from './pages/EstateCleanouts.tsx';
import EvictionCleanouts from './pages/EvictionCleanouts.tsx';
import JunkRemovalGoodlettsville from './pages/JunkRemovalGoodlettsville.tsx';
import LandlordRentalCleanouts from './pages/LandlordRentalCleanouts.tsx';
import GarageCleanouts from './pages/GarageCleanouts.tsx';
import PropertyCleanouts from './pages/PropertyCleanouts.tsx';
import CommercialCleanouts from './pages/CommercialCleanouts.tsx';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import ScrollToTop from './ScrollToTop.tsx';
import CleanoutProcess from './components/CleanoutProcess.tsx';
import { scrollToSection } from './utils/scrollToSection.ts';
import OptionalServiceImage from './components/OptionalServiceImage.tsx';

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

const SERVICE_NAV_LINKS = [
  { label: 'Estate Cleanouts', to: '/estate-cleanouts' },
  { label: 'Eviction Cleanouts', to: '/eviction-cleanouts' },
  { label: 'Landlord & Rental Cleanouts', to: '/landlord-rental-cleanouts' },
  { label: 'Garage Cleanouts', to: '/garage-cleanouts' },
  { label: 'Property Cleanouts', to: '/property-cleanouts' },
  { label: 'Commercial Cleanouts', to: '/commercial-cleanouts' },
] as const;

const Navbar = () => {
  const location = useLocation();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

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
              type="button"
              onClick={() => setServicesOpen((open) => !open)}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              className="flex items-center gap-1 text-sm font-medium hover:text-brand-orange transition-colors"
            >
              Services
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {servicesOpen && (
              <div className="absolute top-full left-0 pt-2 w-64">
                <div className="rounded-2xl border border-slate-100 bg-white py-2 shadow-xl shadow-slate-200/60 ring-1 ring-slate-900/5">
                  {SERVICE_NAV_LINKS.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="block px-4 py-2.5 text-sm font-medium text-brand-navy hover:bg-brand-orange/5 hover:text-brand-orange transition-colors"
                      onClick={() => setServicesOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
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
            to="/#about"
            className="text-sm font-medium hover:text-brand-orange transition-colors"
            onClick={(event) => navigateToHomeSection(event, 'about')}
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
                className="flex items-center justify-between px-3 py-3 text-sm font-medium text-brand-navy hover:text-brand-orange transition-colors rounded-xl hover:bg-slate-50"
                aria-expanded={mobileServicesOpen}
                onClick={() => setMobileServicesOpen((open) => !open)}
              >
                Services
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {mobileServicesOpen && (
                <div className="ml-2 mb-1 flex flex-col gap-0.5 border-l-2 border-brand-orange/20 pl-3">
                  {SERVICE_NAV_LINKS.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="px-3 py-2.5 text-sm text-slate-600 hover:text-brand-orange transition-colors rounded-lg hover:bg-slate-50"
                      onClick={closeMobileMenu}
                    >
                      {item.label}
                    </Link>
                  ))}
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
                to="/#about"
                className="px-3 py-3 text-sm font-medium text-brand-navy hover:text-brand-orange transition-colors rounded-xl hover:bg-slate-50"
                onClick={(event) => navigateToHomeSection(event, 'about')}
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
    <section id="hero" className="relative pt-28 pb-12 lg:pt-40 lg:pb-16 overflow-hidden">
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
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-brand-navy/[0.06] via-transparent to-transparent" aria-hidden />
            <div className="relative">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-bold tracking-wide mb-4">
              Middle Tennessee Cleanout Crew
            </span>
            <h1 className="font-display text-5xl lg:text-7xl font-bold leading-[0.95] tracking-tighter text-brand-navy mb-3">
              <span className="text-brand-orange">Estate, Property &amp; Commercial Cleanouts</span> Across Middle Tennessee
            </h1>
            <p className="text-lg lg:text-xl text-slate-600 leading-relaxed mb-6 max-w-2xl">
              We help families, landlords, property managers, businesses, and real estate professionals clear estates,
              rental properties, offices, storage units, and unwanted items quickly and professionally.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="sms:6152000064?body=Hi%2C%20I%27d%20like%20a%20fast%20quote%20for%20a%20cleanout"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-brand-navy text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl shadow-brand-navy/30 flex items-center justify-center gap-3 group"
              >
                <MessageSquare className="text-brand-orange" />
                Text Photos for a Fast Quote
              </motion.a>
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

const HeroSteps = () => <CleanoutProcess id="how-it-works" />;

const ValueProps = () => {
  const props = [
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Fully Insured",
      desc: "Coverage in place so work on-site is handled responsibly."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Fast Response Times",
      desc: "Responsive communication and scheduling when timing matters."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Upfront Pricing",
      desc: "Clear numbers before we start—no surprise line items."
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Heavy Transitions, Calm Process",
      desc: "Estate, eviction, and rental turnover support from one steady crew."
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Straightforward Coordination",
      desc: "You know who is coming, when, and what to expect on site."
    },
    {
      icon: <CheckCircle2 className="w-8 h-8" />,
      title: "Move-Out Ready Finish",
      desc: "We leave interiors broom-clean and ready for the next step."
    }
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {props.map((prop, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group bg-slate-50 border border-slate-200 rounded-3xl p-6 ${
                i < 3
                  ? 'shadow-md shadow-slate-200/55'
                  : 'shadow-sm shadow-slate-200/25'
              }`}
            >
              <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center text-brand-navy mb-4 group-hover:bg-brand-orange group-hover:text-white transition-all duration-300 shadow-sm">
                {prop.icon}
              </div>
              <h3 className="font-display text-xl text-brand-navy mb-2 font-bold">{prop.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{prop.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhoWeHelp = () => {
  const audiences = [
    {
      icon: <User className="w-6 h-6" />,
      title: 'Families in Estate Transitions',
      desc: 'Respectful support for downsizing, inherited homes, and emotionally heavy clear-outs.',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Realtors & Seller Prep',
      desc: 'Debris cleared and interiors market-ready so listings show their best.',
    },
    {
      icon: <Warehouse className="w-6 h-6" />,
      title: 'Property Managers & Portfolios',
      desc: 'Rental turnover support after move-outs, abandoned contents, or unit resets.',
    },
    {
      icon: <Trash2 className="w-6 h-6" />,
      title: 'Landlords After Evictions',
      desc: 'Fast turnaround when you need the unit cleared and ready for the next occupant.',
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: 'Overwhelming Situations at Home',
      desc: 'When a whole-home reset feels impossible, we bring professional cleanup support and a steady plan.',
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: 'Investors & Distressed Assets',
      desc: 'Load-out and sweep-through support for acquisitions, flips, and transitions—done on schedule.',
    },
  ];

  return (
    <section id="who-we-help" className="py-20 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-navy mb-6">Who We Help</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            From inherited homes to tight deadlines—we work alongside families, agents, and managers who need the job
            done without drama.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {audiences.map((item, i) => (
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
                {item.icon}
              </div>
              <div>
                <h4 className="font-display text-xl font-bold text-brand-navy mb-2">{item.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const primaryServices = [
    {
      icon: <Home />,
      title: 'Estate Cleanouts',
      desc: 'Sensitive full-home clear-outs for inherited homes, estate transitions, and family handoffs.',
      to: '/estate-cleanouts' as const,
      imageSrc: undefined as string | undefined,
      imageAlt: undefined as string | undefined,
    },
    {
      icon: <Trash2 />,
      title: 'Eviction Cleanouts',
      desc: 'Coordinated cleanout process after evictions so landlords and managers can reset units quickly.',
      to: '/eviction-cleanouts' as const,
      imageSrc: undefined,
      imageAlt: undefined,
    },
    {
      icon: <Warehouse />,
      title: 'Landlord & Rental Cleanouts',
      desc: 'Rental turnover support—move-out contents, abandoned items, and unit reset work.',
      to: '/landlord-rental-cleanouts' as const,
      imageSrc: undefined,
      imageAlt: undefined,
    },
    {
      icon: <Warehouse />,
      title: 'Garage Cleanouts',
      desc: 'Packed garages cleared with structured workflow when space has been neglected for years.',
      to: '/garage-cleanouts' as const,
      imageSrc: undefined,
      imageAlt: undefined,
    },
    {
      icon: <Home />,
      title: 'Property Cleanouts',
      desc: 'Whole-property cleanouts for difficult transitions, seller prep, and move-out-ready finishes.',
      to: '/property-cleanouts' as const,
      imageSrc: undefined,
      imageAlt: undefined,
    },
    {
      icon: <Building2 />,
      title: 'Commercial Cleanouts',
      desc: 'Office, retail, warehouse, and business cleanouts including cubicles, office furniture, file cabinets, fixtures, inventory, and leftover contents.',
      to: '/commercial-cleanouts' as const,
      imageSrc: undefined,
      imageAlt: undefined,
    },
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-navy mb-6">What We Take On</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Core cleanout lanes for property transitions, rental turnover, and organized full-home load-outs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {primaryServices.map((service, i) => (
            <Link key={service.to} to={service.to} className="group block h-full">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col gap-5 h-full transition-all duration-300 group-hover:border-brand-orange/35 group-hover:shadow-brand-orange/10"
              >
                <OptionalServiceImage src={service.imageSrc} alt={service.imageAlt} />
                <div className="w-12 h-12 bg-brand-navy/5 rounded-xl flex items-center justify-center text-brand-orange group-hover:bg-brand-orange/10 transition-colors">
                  {service.icon}
                </div>
                <div className="flex flex-col flex-1 gap-2">
                  <h3 className="font-display text-xl font-bold text-brand-navy">{service.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{service.desc}</p>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy group-hover:text-brand-orange transition-colors pt-1 border-t border-slate-100">
                  View Service
                  <ArrowRight size={16} className="text-brand-orange transition-transform group-hover:translate-x-0.5" />
                </span>
              </motion.div>
            </Link>
          ))}
        </div>

        <section className="py-20 pt-14">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-brand-navy mb-4">
                Additional Services
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-base">
                Supporting load-outs when the scope goes beyond a single room or core transition.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-slate-50 p-6 rounded-3xl shadow-lg shadow-slate-200/40 border border-slate-200/70 flex flex-col gap-5"
              >
                <div className="w-10 h-10 bg-brand-navy/5 rounded-xl flex items-center justify-center text-brand-orange">
                  <Warehouse />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-brand-navy mb-2">Storage Unit Cleanouts</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Storage units cleared for abandoned contents, overflow, and bulky debris.
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -10 }}
                className="bg-slate-50 p-6 rounded-3xl shadow-lg shadow-slate-200/40 border border-slate-200/70 flex flex-col gap-5"
              >
                <div className="w-10 h-10 bg-brand-navy/5 rounded-xl flex items-center justify-center text-brand-orange">
                  <Truck />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-brand-navy mb-2">Appliance &amp; Furniture Removal</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Heavy items removed as part of estate, turnover, and full-property cleanout work.
                  </p>
                </div>
              </motion.div>

              {/* Mixed household load-outs - linked */}
              <Link to="/junk-removal-goodlettsville" className="group block h-full">
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-slate-50 p-6 rounded-3xl shadow-lg shadow-slate-200/40 border border-slate-200/70 flex flex-col gap-5 h-full transition-colors group-hover:border-brand-orange/30"
                >
                  <div className="w-10 h-10 bg-brand-navy/5 rounded-xl flex items-center justify-center text-brand-orange">
                    <Trash2 />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-lg font-bold text-brand-navy mb-2">Mixed Household Load-Outs</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      Attics, basements, and mixed household debris when the scope goes beyond a single room.
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy group-hover:text-brand-orange transition-colors">
                    Learn More
                    <ArrowRight size={14} className="text-brand-orange" />
                  </span>
                </motion.div>
              </Link>

              {/* Property Preparation */}
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-slate-50 p-6 rounded-3xl shadow-lg shadow-slate-200/40 border border-slate-200/70 flex flex-col gap-5"
              >
                <div className="w-10 h-10 bg-brand-navy/5 rounded-xl flex items-center justify-center text-brand-orange">
                  <Warehouse />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-brand-navy mb-2">Listing &amp; Seller Prep</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Cleared and ready for photos, contractors, or the next occupant.
                  </p>
                </div>
              </motion.div>

              {/* Light Demolition */}
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-slate-50 p-6 rounded-3xl shadow-lg shadow-slate-200/40 border border-slate-200/70 flex flex-col gap-5"
              >
                <div className="w-10 h-10 bg-brand-navy/5 rounded-xl flex items-center justify-center text-brand-orange">
                  <Truck />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-brand-navy mb-2">Light Demolition</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Small demo—sheds, decks, and interior tear-outs before the load-out.
                  </p>
                </div>
              </motion.div>

              {/* Hot Tub Removal */}
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-slate-50 p-6 rounded-3xl shadow-lg shadow-slate-200/40 border border-slate-200/70 flex flex-col gap-5"
              >
                <div className="w-10 h-10 bg-brand-navy/5 rounded-xl flex items-center justify-center text-brand-orange">
                  <Zap />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-brand-navy mb-2">Hot Tub Removal</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Safe removal and disposal of old hot tubs and spa equipment.
                  </p>
                </div>
              </motion.div>

              {/* Yard Debris Removal */}
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-slate-50 p-6 rounded-3xl shadow-lg shadow-slate-200/40 border border-slate-200/70 flex flex-col gap-5"
              >
                <div className="w-10 h-10 bg-brand-navy/5 rounded-xl flex items-center justify-center text-brand-orange">
                  <Trash2 />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-brand-navy mb-2">Yard Debris Removal</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Brush, branches, and outdoor debris cleared from your yard or lot.
                  </p>
                </div>
              </motion.div>

              {/* Piano Removal */}
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-slate-50 p-6 rounded-3xl shadow-lg shadow-slate-200/40 border border-slate-200/70 flex flex-col gap-5"
              >
                <div className="w-10 h-10 bg-brand-navy/5 rounded-xl flex items-center justify-center text-brand-orange">
                  <Music />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-brand-navy mb-2">Piano Removal</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Removal of upright pianos, baby grands, and other heavy specialty items as part of scheduled
                    hauling and cleanout projects.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

/** Real project proof — files in /public/images/projects/ (served as /images/projects/…). */
const RecentCleanoutProjects = () => {
  const projects = [
    {
      title: 'Estate Cleanout – Hendersonville',
      meta: 'Estate sale removal • Transition support',
      beforeSrc: '/images/projects/estate-sale-item-removal-before.jpeg',
      afterSrc: '/images/projects/estate-sale-cleanup-after.jpeg',
      to: '/estate-cleanouts' as const,
    },
    {
      title: 'Hoarder Cleanout – Goodlettsville',
      meta: 'Heavy debris • Whole-home reset',
      beforeSrc: '/images/projects/property-cleanout-nashville-before.png',
      afterSrc: '/images/projects/property-cleanout-nashville-after.png',
      to: '/junk-removal-goodlettsville' as const,
    },
    {
      title: 'Garage Cleanout – Gallatin',
      meta: 'Packed garage • Load-out & disposal',
      beforeSrc: '/images/projects/garage-cleanout-hendersonville-before.jpeg',
      afterSrc: '/images/projects/garage-cleanout-hendersonville-after.jpeg',
      to: '/garage-cleanouts' as const,
    },
    {
      title: 'Rental Turnover – Springfield',
      meta: 'Exterior removal • Move-out reset',
      beforeSrc: '/images/projects/trampoline-removal-nashville.png',
      afterSrc: '/images/projects/trampoline-removal-nashville-after.png',
      to: '/landlord-rental-cleanouts' as const,
    },
  ];

  return (
    <section id="recent-projects" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-navy mb-6">Recent Jobs</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Garages, estates, rental turnovers, and difficult situations handled professionally—here in Middle Tennessee.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col gap-6"
            >
              <div>
                <h4 className="font-display text-xl font-bold text-brand-navy mb-1">{p.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{p.meta}</p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 aspect-[4/3]">
                  <img
                    src={p.beforeSrc}
                    alt={`${p.title} — before`}
                    className="w-full h-full object-cover object-center"
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
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-2 right-2 bg-white text-brand-navy px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm">
                    After
                  </div>
                </div>
              </div>

              <div className="pt-1 border-t border-slate-100">
                <Link
                  to={p.to}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy hover:text-brand-orange transition-colors"
                >
                  View project
                  <ArrowRight size={16} className="text-brand-orange" />
                </Link>
              </div>
            </motion.div>
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
              From Crowded to <br />
              <span className="text-brand-orange">Move-Out Ready</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              Slide to compare: a full-home interior cleared, swept, and ready for its next chapter—without the chaos on
              your end.
            </p>
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 shrink-0 rounded-full bg-brand-orange/20 flex items-center justify-center text-brand-orange">
                  <CheckCircle2 size={20} />
                </div>
                <span className="font-medium leading-snug pt-1.5">
                  Trusted by families, landlords &amp; local agents
                </span>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 shrink-0 rounded-full bg-brand-orange/20 flex items-center justify-center text-brand-orange">
                  <CheckCircle2 size={20} />
                </div>
                <span className="font-medium leading-snug pt-1.5">
                  Crews experienced with heavy, emotional, or time-pressed jobs
                </span>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 shrink-0 rounded-full bg-brand-orange/20 flex items-center justify-center text-brand-orange">
                  <CheckCircle2 size={20} />
                </div>
                <span className="font-medium leading-snug pt-1.5">
                  Quick turnaround without the chaos
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
                src="/images/projects/property-cleanout-nashville-after.png" 
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
                src="/images/projects/property-cleanout-nashville-before.png" 
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
      name: "Bruce Shamp",
      location: "Middle Tennessee",
      text: "Fantastic fast courteous professional really cares about his clients helping in every way to get the job done quickly. Highly recommend him for all your needs. He did a fantastic job — always polite, caring, and professional.",
      stars: 5,
      label: "Verified Google Review",
    },
    {
      name: "Amanda R.",
      location: "Hendersonville, TN",
      text: "Needed a garage cleaned out before listing the house. Communication was solid and they handled everything quickly.",
      stars: 5,
      label: "Verified Customer",
    },
    {
      name: "Jason B.",
      location: "Madison, TN",
      text: "Had furniture, junk, and leftover property debris removed. Showed up when they said they would and cleaned up after.",
      stars: 5,
      label: "Verified Customer",
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-brand-navy mb-4">What Neighbors Say</h2>
          <div className="flex justify-center gap-1 mb-4">
            {[1,2,3,4,5].map(i => <Star key={i} fill="#F27D26" color="#F27D26" />)}
          </div>
          <p className="text-slate-500">Feedback from homeowners, landlords, and agents across Middle Tennessee.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-8 rounded-3xl shadow-lg border ${
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
              <p className="text-slate-600 italic mb-6 leading-relaxed">"{r.text}"</p>
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
  'Nashville',
  'Hendersonville',
  'Madison',
  'Gallatin',
  'White House',
  'Springfield',
  'Joelton',
  'Greenbrier',
  'Portland',
  'Ridgetop',
  'Millersville',
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
          Areas We Serve
        </h2>
        <p className="text-slate-600 max-w-3xl text-base md:text-lg leading-relaxed mb-8 md:mb-10">
          Reinhart Hauling &amp; Cleanouts provides estate cleanouts, eviction cleanouts, garage cleanouts, rental
          turnover support, and property cleanout services across North Nashville and surrounding Middle Tennessee
          communities.
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
          Outside these areas? Reach out with photos or the property address and we&apos;ll let you know if we can
          help.
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
              Responsive. <span className="text-brand-orange">Steady.</span> Straightforward.
            </h2>
            
            <div className="space-y-6 text-lg text-slate-600">
              <p>
                Reinhart Hauling &amp; Cleanouts exists for neighbors who need a calmer way through heavy transitions—
                estates, evictions, inherited homes, and rental turnovers across Middle Tennessee.
              </p>
              <p>
                We focus on clear communication, upfront pricing, and crews that know how to work through difficult
                interiors without adding stress.
              </p>
              <p className="text-base text-slate-500">
                Whether it is a packed garage or a whole-home reset, we show up on time, execute the plan, and leave you
                with space that feels cleared and ready.
              </p>

              <div className="flex flex-wrap gap-x-6 gap-y-3 pt-2 text-sm font-semibold text-brand-navy">
                <div className="inline-flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-brand-orange" />
                  Responsive Communication
                </div>
                <div className="inline-flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-brand-orange" />
                  Estate &amp; Turnover Support
                </div>
                <div className="inline-flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-brand-orange" />
                  Straightforward Pricing
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
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="font-display text-5xl lg:text-7xl font-bold text-brand-navy mb-8 leading-tight">
            Need the Space Cleared—Soon?
          </h2>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
            Text photos for a fast, no-drama read on scope. We respond quickly and keep communication simple.
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
              Call 615-200-0064
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-50 py-8 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 space-y-5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src="/branding/Reinhart-hauling-cleanouts-nashville.png"
              alt="Reinhart Hauling & Cleanouts Nashville"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </div>
          <div className="text-slate-400 text-sm font-medium text-center">
            © {new Date().getFullYear()} Reinhart Hauling &amp; Cleanouts. All rights reserved.
          </div>
          <div className="flex gap-5 text-sm">
            <Link to="/privacy-policy" className="text-slate-400 hover:text-brand-orange transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-slate-400 hover:text-brand-orange transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
        <p className="text-center md:text-left text-sm text-slate-500 leading-relaxed max-w-2xl mx-auto md:mx-0">
          Estate, eviction, and rental turnover support across Middle Tennessee.{' '}
          <a
            href="tel:6152000064"
            className="font-semibold text-brand-navy hover:text-brand-orange transition-colors whitespace-nowrap"
          >
            Call 615-200-0064
          </a>
        </p>
      </div>
    </footer>
  );
};

const StickyActionFooter = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      const isDesktop = window.innerWidth >= 768;

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
      className="min-h-screen selection:bg-brand-orange selection:text-white pb-[calc(128px+env(safe-area-inset-bottom))] md:pb-[calc(120px+env(safe-area-inset-bottom))]"
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
      <ValueProps />
      <WhoWeHelp />
      <HeroSteps />
      <Services />
      <RecentCleanoutProjects />
      <BeforeAfterSlider />
      <Testimonials />
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
          path="/commercial-cleanouts"
          element={
            <SiteLayout>
              <CommercialCleanouts />
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
