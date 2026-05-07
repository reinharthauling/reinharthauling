/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Routes, Route, Link } from 'react-router-dom';
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
  Clock,
  ShieldCheck,
  Zap,
  User
} from 'lucide-react';
import EstateCleanouts from './pages/EstateCleanouts.tsx';
import EvictionCleanouts from './pages/EvictionCleanouts.tsx';
import JunkRemovalGoodlettsville from './pages/JunkRemovalGoodlettsville.tsx';
import LandlordRentalCleanouts from './pages/LandlordRentalCleanouts.tsx';
import GarageCleanouts from './pages/GarageCleanouts.tsx';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import ScrollToTop from './ScrollToTop.tsx';

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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm py-3">
      <div className="max-w-7xl mx-auto px-4 md:px-6 min-h-[104px] flex items-center justify-between gap-8">
      <a href="/" className="flex items-center shrink-0 overflow-visible">
  <img
    src="/Reinhart-hauling-cleanouts-nashville.png"
    alt="Reinhart Hauling & Cleanouts Nashville"
    className="h-[72px] w-auto object-contain block"
  />
</a>
        
        <div className="hidden md:flex items-center gap-5">
          <a href="#process" className="text-sm font-medium hover:text-brand-orange transition-colors">How It Works</a>
          <a href="#services" className="text-sm font-medium hover:text-brand-orange transition-colors">Services</a>
          <a href="#reviews" className="text-sm font-medium hover:text-brand-orange transition-colors">Reviews</a>
          <a href="#about" className="text-sm font-medium hover:text-brand-orange transition-colors">About</a>
          <a 
            href="tel:6152000064" 
            className="bg-brand-navy text-white px-4 py-2 rounded-full text-sm font-medium shadow-xl shadow-brand-navy/20 hover:bg-brand-orange transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            <Phone size={16} />
            615-200-0064
          </a>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="hero" className="relative pt-26 pb-12 lg:pt-36 lg:pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-bold uppercase tracking-widest mb-4">
              LOCAL • FAST • SAME-DAY SERVICE
            </span>
            <h1 className="font-display text-5xl lg:text-7xl font-bold leading-[0.95] tracking-tighter text-brand-navy mb-2">
              Full Cleanouts &amp; Junk Removal in <span className="text-brand-orange">Nashville</span>
            </h1>
            <p className="text-lg lg:text-xl text-slate-600 leading-relaxed mb-4 max-w-2xl">
              Estate, eviction, rental, and full-property cleanouts handled with clear pricing, professional communication, and fast turnaround.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="sms:6152000064?body=Hi%20I%20need%20a%20junk%20removal%20quote"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-brand-navy text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl shadow-brand-navy/30 flex items-center justify-center gap-3 group"
              >
                <MessageSquare className="text-brand-orange" />
                Text Photos for Pricing
              </motion.a>
              <motion.a
                href="tel:6152000064"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white border-2 border-slate-200 text-brand-navy px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:border-brand-orange transition-colors"
              >
                <Phone />
                Call 615-200-0064
              </motion.a>
            </div>
            <div className="mt-3 max-w-2xl">
              <div className="rounded-2xl border border-slate-200 bg-white/90 px-4 py-2.5 flex items-start gap-2.5 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-brand-navy/10 text-brand-orange flex items-center justify-center shrink-0">
                  <MessageSquare size={16} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand-navy leading-snug">Fast response for property cleanouts</p>
                  <p className="text-sm text-slate-600 leading-snug">
                    Text photos or job details for pricing and availability.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="hidden lg:block">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/70 bg-white">
            <img
              src="/property-cleanout-nashville-after.png"
              alt="Property cleanout project in Nashville"
              className="w-full h-[420px] object-cover object-center"
            />
            <div className="absolute bottom-4 left-4 bg-white/95 text-brand-navy px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-sm">
              Recent Property Cleanout
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

const HeroSteps = () => {
  return (
    <section id="process" className="py-20 bg-slate-50/70">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange text-[11px] font-bold uppercase tracking-[0.18em] mb-4">
            HOW IT WORKS
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-navy mb-4">
            Simple Cleanout Process
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Send photos, get clear pricing, and we handle the heavy lifting.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="bg-white border border-slate-200 rounded-3xl p-7 shadow-sm flex flex-col h-full">
            <div className="flex items-center justify-between mb-4">
              <span className="text-base font-extrabold tracking-[0.2em] text-brand-orange">01</span>
              <MessageSquare className="text-brand-navy" size={24} />
            </div>
            <h3 className="font-display text-2xl font-bold text-brand-navy mb-3">Send Photos or Details</h3>
            <p className="text-slate-600 leading-relaxed">
              Text photos of the items, rooms, garage, or property that needs cleaned out.
            </p>
            <a
              href="sms:6152000064"
              className="mt-5 inline-flex items-center text-sm font-semibold text-brand-navy hover:text-brand-orange transition-colors"
            >
              Text Photos &#8594;
            </a>
          </div>
          <div className="bg-white border border-slate-200 rounded-3xl p-7 shadow-sm flex flex-col h-full">
            <div className="flex items-center justify-between mb-4">
              <span className="text-base font-extrabold tracking-[0.2em] text-brand-orange">02</span>
              <CheckCircle2 className="text-brand-navy" size={24} />
            </div>
            <h3 className="font-display text-2xl font-bold text-brand-navy mb-3">Get Clear Pricing</h3>
            <p className="text-slate-600 leading-relaxed">
              We review the scope, disposal needs, and access, then give you straightforward pricing.
            </p>
            <a
              href="sms:6152000064?body=Hi%20I%20need%20pricing%20for%20a%20cleanout"
              className="mt-5 inline-flex items-center text-sm font-semibold text-brand-navy hover:text-brand-orange transition-colors"
            >
              Get Pricing &#8594;
            </a>
          </div>
          <div className="bg-white border border-slate-200 rounded-3xl p-7 shadow-sm flex flex-col h-full">
            <div className="flex items-center justify-between mb-4">
              <span className="text-base font-extrabold tracking-[0.2em] text-brand-orange">03</span>
              <Truck className="text-brand-navy" size={24} />
            </div>
            <h3 className="font-display text-2xl font-bold text-brand-navy mb-3">We Handle The Cleanout</h3>
            <p className="text-slate-600 leading-relaxed">
              We load, haul, dispose, and sweep up when the job is done.
            </p>
            <a
              href="tel:6152000064"
              className="mt-5 inline-flex items-center text-sm font-semibold text-brand-navy hover:text-brand-orange transition-colors"
            >
              Call Now &#8594;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const ValueProps = () => {
  const props = [
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Fully Insured",
      desc: "Protection and peace of mind on every job."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Same-Day Availability",
      desc: "Fast scheduling for cleanouts, move-outs, and urgent property jobs."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Upfront Pricing",
      desc: "Clear pricing before work starts. No surprise fees."
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Property Cleanup Specialists",
      desc: "Focused on estate, eviction, and full-property cleanout jobs."
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Professional Coordination",
      desc: "Clear scheduling, updates, and coordination from start to finish."
    },
    {
      icon: <CheckCircle2 className="w-8 h-8" />,
      title: "Sweep-Up Included",
      desc: "We finish by cleaning up so the space is ready for next steps."
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

const Services = () => {
  const services = [
    { 
      icon: <Home />, 
      title: "Estate Cleanouts", 
      desc: "Full and partial cleanouts for homes, estates, and inherited properties." 
    },
    { 
      icon: <Trash2 />, 
      title: "Eviction Cleanouts", 
      desc: "Fast cleanout help for landlords, property managers, and rental turnovers." 
    },
    { 
      icon: <Warehouse />, 
      title: "Landlord & Rental Cleanouts", 
      desc: "Turnover cleanouts for move-outs, evictions, and re-rental preparation." 
    },
    { 
      icon: <Warehouse />, 
      title: "Garage Cleanouts", 
      desc: "Packed garage cleanouts with organized hauling and proper disposal." 
    },
    { 
      icon: <Warehouse />, 
      title: "Storage Unit Cleanouts", 
      desc: "Storage unit clear-outs for abandoned contents, overflow, and bulky debris." 
    },
    { 
      icon: <Truck />, 
      title: "Appliance & Furniture Removal", 
      desc: "Bulk item removal as part of full cleanouts and property preparation." 
    }
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-navy mb-6">What We Clean Out</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            From single items to full property cleanouts, we handle jobs of all sizes.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => {
            const card = (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col gap-6"
              >
                <div className="w-12 h-12 bg-brand-navy/5 rounded-xl flex items-center justify-center text-brand-orange">
                  {s.icon}
                </div>
                <div>
                  <h4 className="font-display text-xl font-bold text-brand-navy mb-2">{s.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            );

            if (s.title === "Estate Cleanouts") {
              return (
                <Link key={i} to="/estate-cleanouts" className="block">
                  {card}
                </Link>
              );
            }

            if (s.title === "Eviction Cleanouts") {
              return (
                <Link key={i} to="/eviction-cleanouts" className="block">
                  {card}
                </Link>
              );
            }

            if (s.title === "Landlord & Rental Cleanouts") {
              return (
                <Link key={i} to="/landlord-rental-cleanouts" className="block">
                  {card}
                </Link>
              );
            }

            if (s.title === "Garage Cleanouts") {
              return (
                <Link key={i} to="/garage-cleanouts" className="block">
                  {card}
                </Link>
              );
            }

            return card;
          })}
        </div>

        <section className="py-20 pt-14">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-brand-navy mb-4">
                Additional Services
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* General Junk Removal - linked */}
              <Link to="/junk-removal-goodlettsville" className="block">
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-slate-50 p-6 rounded-3xl shadow-lg shadow-slate-200/40 border border-slate-200/70 flex flex-col gap-5"
                >
                  <div className="w-10 h-10 bg-brand-navy/5 rounded-xl flex items-center justify-center text-brand-orange">
                    <Trash2 />
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-bold text-brand-navy mb-2">General Junk Removal</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      Household clutter, attic cleanouts, and general junk removal.
                    </p>
                  </div>
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
                  <h4 className="font-display text-lg font-bold text-brand-navy mb-2">Property Preparation</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Cleanup and haul-off services before listings, renovations, or property transitions.
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
                  <h4 className="font-display text-lg font-bold text-brand-navy mb-2">Light Demolition</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Small demo jobs like sheds, decks, and interior tear-outs before cleanout.
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
                  <h4 className="font-display text-lg font-bold text-brand-navy mb-2">Hot Tub Removal</h4>
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
                  <h4 className="font-display text-lg font-bold text-brand-navy mb-2">Yard Debris Removal</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Brush, branches, and outdoor debris cleared from your property.
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
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              Real Results. <br />
              <span className="text-brand-orange">Real Fast.</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              Professional property cleanouts completed quickly, safely, and thoroughly across Middle Tennessee.
            </p>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-orange/20 flex items-center justify-center text-brand-orange">
                  <CheckCircle2 size={20} />
                </div>
                <span className="font-medium">Property-friendly cleanup</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-orange/20 flex items-center justify-center text-brand-orange">
                  <CheckCircle2 size={20} />
                </div>
                <span className="font-medium">Responsible disposal</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-orange/20 flex items-center justify-center text-brand-orange">
                  <CheckCircle2 size={20} />
                </div>
                <span className="font-medium">Swept clean finish</span>
              </div>
            </div>
          </div>

          <div 
            ref={containerRef}
            className="relative h-[380px] lg:h-[440px] rounded-3xl overflow-hidden cursor-ew-resize shadow-2xl"
            onMouseMove={handleMove}
            onTouchMove={handleMove}
          >
            {/* After Image */}
            <div className="absolute inset-0">
              <img 
                src="/property-cleanout-nashville-after.png" 
                alt="After" 
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
                src="/property-cleanout-nashville-before.png" 
                alt="Before" 
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
          <h2 className="font-display text-4xl font-bold text-brand-navy mb-4">What Our Neighbors Say</h2>
          <div className="flex justify-center gap-1 mb-4">
            {[1,2,3,4,5].map(i => <Star key={i} fill="#F27D26" color="#F27D26" />)}
          </div>
          <p className="text-slate-500">Latest customer reviews</p>
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
                Local Experts
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
                src="/Reinhart-hauling-cleanouts-nashville.png" 
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
              Responsive. <span className="text-brand-orange">Professional.</span> Straightforward.
            </h2>
            
            <div className="space-y-6 text-lg text-slate-600">
              <p>
                Reinhart Hauling &amp; Cleanouts was built to provide a more professional cleanout experience for
                property owners, landlords, families, and real estate professionals across Middle Tennessee.
              </p>
              <p>
                We focus on communication, straightforward pricing, and handling difficult cleanup jobs efficiently
                from start to finish.
              </p>
              <p className="text-base text-slate-500">
                From garage cleanouts and rental turnovers to full property cleanups, our goal is simple: show up on
                time, do the work the right way, and make the process easier for the customer.
              </p>

              <div className="flex flex-wrap gap-x-6 gap-y-3 pt-2 text-sm font-semibold text-brand-navy">
                <div className="inline-flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-brand-orange" />
                  Responsive Communication
                </div>
                <div className="inline-flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-brand-orange" />
                  Property-Focused Cleanouts
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
            Need a Property Cleaned Out?
          </h2>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
            Text photos or job details and we’ll help you figure out the next step.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a 
              href="sms:6152000064?body=Hi%20I%20need%20a%20junk%20removal%20quote" 
              className="bg-brand-navy text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl shadow-brand-navy/30 flex items-center justify-center gap-3 hover:bg-brand-orange transition-all hover:scale-105"
            >
              <MessageSquare className="text-brand-orange" />
              Text Photos for Pricing
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
    <footer className="bg-slate-50 py-7 md:py-8 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
          <div className="flex items-center gap-3">
            <img
              src="/Reinhart-hauling-cleanouts-nashville.png"
              alt="Reinhart Hauling & Cleanouts Nashville"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </div>
          
          <div className="text-slate-400 text-sm font-medium">
            © {new Date().getFullYear()} Reinhart Hauling &amp; Cleanouts. All rights reserved.
          </div>
          
          <div className="flex gap-5 text-sm">
            <Link to="/privacy-policy" className="text-slate-400 hover:text-brand-orange transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-slate-400 hover:text-brand-orange transition-colors">Terms of Service</Link>
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
          className="fixed bottom-0 left-0 right-0 z-[60] p-3 md:px-5 md:pt-4 md:pb-7 pointer-events-none"
        >
          <div className="max-w-4xl mx-auto pointer-events-auto">
            <div className="bg-brand-navy/95 backdrop-blur-md border border-white/10 rounded-3xl md:rounded-full p-2 md:py-2 md:px-5 shadow-[0_14px_34px_rgba(0,0,0,0.24)] flex flex-col md:flex-row items-center justify-between gap-3 px-5">
              <div className="flex items-center gap-4">
                <div className="hidden sm:flex w-10 h-10 bg-brand-orange rounded-full items-center justify-center text-white shrink-0">
                  <Phone size={20} />
                </div>
                <div className="text-center md:text-left">
                  <div className="text-[10px] md:text-xs font-bold text-brand-orange uppercase tracking-widest leading-none mb-1">Direct Line</div>
                  <a href="tel:6152000064" className="text-lg md:text-xl font-bold text-white hover:text-brand-orange transition-colors">
                    615-200-0064
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 w-full md:w-auto">
                <a 
                  href="sms:6152000064"
                  className="flex-1 md:flex-none bg-white text-brand-navy px-5 py-3 rounded-2xl md:rounded-full font-bold text-sm flex items-center justify-center gap-2 hover:bg-brand-orange hover:text-white transition-all active:scale-95 group"
                >
                  <MessageSquare size={18} className="text-brand-orange group-hover:text-white transition-colors" />
                  <span className="whitespace-nowrap">Text Photos</span>
                </a>
                <a 
                  href="tel:6152000064"
                  className="flex-1 md:flex-none bg-brand-orange text-white px-5 py-3 rounded-2xl md:rounded-full font-bold text-sm flex items-center justify-center gap-2 hover:bg-brand-orange-light transition-all active:scale-95 shadow-lg shadow-brand-orange/20"
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
      className="min-h-screen selection:bg-brand-orange selection:text-white pb-[calc(128px+env(safe-area-inset-bottom))] md:pb-[calc(148px+env(safe-area-inset-bottom))]"
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

const HomePage = () => {
  useEffect(() => {
    document.title = 'Full Cleanouts & Junk Removal in Nashville | Reinhart Hauling & Cleanouts';

    const metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    const content =
      'Fast junk removal in Nashville. Furniture, cleanouts, and same-day service. Text photos for a fast quote.';

    if (metaDescription) {
      metaDescription.content = content;
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = content;
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <SiteLayout>
      <Hero />
      <ValueProps />
      <HeroSteps />
      <Services />
      <BeforeAfterSlider />
      <Testimonials />
      <MeetTheOwner />
      <CTA />
    </SiteLayout>
  );
};

export default function App() {
  return (
    <>
    <Helmet>
  <title>Full Cleanouts & Junk Removal in Nashville | Reinhart Hauling & Cleanouts</title>
  <meta
    name="description"
    content="Fast junk removal in Nashville. Furniture, cleanouts, and same-day service. Text photos for a fast quote."
  />
</Helmet>
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
