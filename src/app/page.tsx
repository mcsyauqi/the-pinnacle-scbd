'use client';

import { useState, useEffect } from 'react';

/* ─── Data ─── */

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Residences', href: '#residences' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Location', href: '#location' },
  { label: 'Contact', href: '#contact' },
];

const stats = [
  { value: '55', label: 'Floors' },
  { value: '220', label: 'Residences' },
  { value: '2027', label: 'Completion' },
  { value: 'LEED', label: 'Platinum' },
];

const unitTypes = [
  {
    name: 'Sky Penthouse',
    size: '350 sqm',
    beds: '4 Bedrooms',
    price: 'IDR 45B',
    description:
      'The ultimate expression of vertical living. A private rooftop terrace, infinity plunge pool, and 360-degree panoramic views define this crown-jewel residence above the clouds.',
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
  },
  {
    name: 'Premium Suite',
    size: '180 sqm',
    beds: '3 Bedrooms',
    price: 'IDR 18B',
    description:
      'Floor-to-ceiling windows frame Jakarta&apos;s ever-evolving skyline. Italian marble finishes and integrated smart controls create a sanctuary of modern sophistication.',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
  },
  {
    name: 'Executive Residence',
    size: '120 sqm',
    beds: '2 Bedrooms',
    price: 'IDR 9.5B',
    description:
      'Intelligent design meets urban elegance. Every square meter is optimized for comfort and functionality, with full access to world-class amenities.',
    image:
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80',
  },
];

const amenities = [
  {
    name: 'Infinity Sky Pool',
    description: '50-meter heated infinity pool on the 48th floor with panoramic city views.',
    icon: '\u2248',
  },
  {
    name: 'Wellness & Spa',
    description: 'World-class spa with hydrotherapy circuit, sauna, steam room, and private suites.',
    icon: '\u2662',
  },
  {
    name: 'Sky Lounge & Bar',
    description: 'Exclusive residents-only lounge on the 55th floor with curated cocktail program.',
    icon: '\u25C7',
  },
  {
    name: 'Smart Fitness Center',
    description: 'AI-powered gym with Technogym equipment, personal training pods, and recovery zone.',
    icon: '\u2606',
  },
  {
    name: 'Private Cinema',
    description: 'Dolby Atmos screening room with luxury recliners for private entertainment.',
    icon: '\u25B6',
  },
  {
    name: 'Botanical Garden',
    description: 'Curated sky gardens spanning three levels with tropical flora and meditation spaces.',
    icon: '\u2740',
  },
];

const landmarks = [
  { name: 'SCBD Financial District', distance: 'Direct Access' },
  { name: 'Pacific Place Mall', distance: '3 min walk' },
  { name: 'MRT Istora Station', distance: '5 min walk' },
  { name: 'Foreign Embassies', distance: '5-10 min drive' },
  { name: 'Senayan Golf Course', distance: '8 min drive' },
  { name: 'Soekarno-Hatta Airport', distance: '35 min drive' },
];

/* ─── Component ─── */

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <main className="bg-[#0B0F19] min-h-screen">

      {/* ══════════════════════════════════════════════════════════════════
          1. FIXED NAVIGATION
      ══════════════════════════════════════════════════════════════════ */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0B0F19]/90 backdrop-blur-xl border-b border-[#22D3EE]/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <a
              href="#"
              className="font-[family-name:var(--font-space-grotesk)] text-[#F8FAFC] text-lg font-bold tracking-[0.2em] uppercase"
            >
              THE PINNACLE
            </a>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-[family-name:var(--font-inter)] text-[#94A3B8] hover:text-[#22D3EE] text-xs tracking-[0.15em] uppercase transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <a
              href="#contact"
              className="hidden md:inline-block px-6 py-2.5 border border-[#22D3EE]/50 text-[#22D3EE] font-[family-name:var(--font-inter)] text-xs tracking-[0.15em] uppercase rounded-full hover:bg-[#22D3EE]/10 transition-all duration-300"
            >
              Book Tour
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-[1px] bg-[#22D3EE] transition-all duration-300 ${
                  mobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''
                }`}
              />
              <span
                className={`block w-6 h-[1px] bg-[#22D3EE] transition-all duration-300 ${
                  mobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block w-6 h-[1px] bg-[#22D3EE] transition-all duration-300 ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0B0F19]/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-[family-name:var(--font-space-grotesk)] text-[#F8FAFC] text-2xl tracking-[0.2em] uppercase hover:text-[#22D3EE] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4 px-8 py-3 border border-[#22D3EE]/50 text-[#22D3EE] font-[family-name:var(--font-inter)] text-sm tracking-[0.15em] uppercase rounded-full"
          >
            Book Tour
          </a>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════════════
          2. HERO
      ══════════════════════════════════════════════════════════════════ */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1800&q=80"
            alt="The Pinnacle SCBD luxury tower exterior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0B0F19]/80" />
        </div>

        {/* Gradient Orbs (CSS only) */}
        <div
          className="absolute top-20 right-20 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(34,211,238,0.25) 0%, transparent 70%)',
            filter: 'blur(80px)',
            animation: 'float 12s ease-in-out infinite',
          }}
        />
        <div
          className="absolute bottom-20 left-20 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(139,92,246,0.25) 0%, transparent 70%)',
            filter: 'blur(80px)',
            animation: 'float-reverse 15s ease-in-out infinite',
          }}
        />

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          {/* Tagline */}
          <p className="font-[family-name:var(--font-inter)] text-[#22D3EE] text-sm tracking-[0.3em] uppercase mb-6">
            Jakarta&apos;s Most Prestigious Address
          </p>

          {/* Main Title */}
          <h1 className="font-[family-name:var(--font-space-grotesk)] text-[#F8FAFC] text-5xl md:text-7xl lg:text-8xl font-bold tracking-[0.15em] uppercase mb-2">
            THE PINNACLE
          </h1>
          <p className="font-[family-name:var(--font-space-grotesk)] text-[#F8FAFC] text-sm md:text-base tracking-[0.5em] uppercase mb-8 font-light">
            SCBD JAKARTA
          </p>

          {/* Gradient Line */}
          <div className="w-20 h-[2px] bg-gradient-to-r from-[#22D3EE] to-[#8B5CF6] mb-8 rounded-full" />

          {/* Subtitle */}
          <p className="font-[family-name:var(--font-inter)] text-[#94A3B8] text-base md:text-lg max-w-2xl mb-12 leading-relaxed">
            Where visionary architecture meets unparalleled luxury. Rise above the ordinary in Jakarta&apos;s most coveted skyline address.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="#residences"
              className="px-8 py-3.5 bg-gradient-to-r from-[#22D3EE] to-[#8B5CF6] text-white font-[family-name:var(--font-inter)] text-xs tracking-[0.2em] uppercase rounded-full hover:opacity-90 transition-all duration-300"
            >
              Explore Residences
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 border border-white/20 text-[#F8FAFC] font-[family-name:var(--font-inter)] text-xs tracking-[0.2em] uppercase rounded-full bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all duration-300"
            >
              Schedule a Visit
            </a>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto w-full">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-5 text-center"
              >
                <span className="font-[family-name:var(--font-space-grotesk)] text-[#22D3EE] text-2xl lg:text-3xl font-bold block mb-1">
                  {stat.value}
                </span>
                <span className="font-[family-name:var(--font-inter)] text-[#94A3B8] text-[10px] tracking-[0.2em] uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3">
          <span className="font-[family-name:var(--font-inter)] text-[#94A3B8] text-[10px] tracking-[0.3em] uppercase">
            Scroll
          </span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-[#22D3EE] to-transparent" />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          3. ABOUT
      ══════════════════════════════════════════════════════════════════ */}
      <section id="about" className="py-24 lg:py-32 bg-[#0B0F19]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Glass Card wrapping two columns */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              {/* Left: Text */}
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-8 h-[2px] bg-gradient-to-r from-[#22D3EE] to-[#8B5CF6] rounded-full" />
                  <span className="font-[family-name:var(--font-inter)] text-[#22D3EE] text-[10px] tracking-[0.3em] uppercase">
                    About
                  </span>
                </div>

                <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl lg:text-5xl text-[#F8FAFC] leading-[1.2] mb-8 font-bold">
                  Redefining
                  <br />
                  <span className="bg-gradient-to-r from-[#22D3EE] to-[#8B5CF6] bg-clip-text text-transparent">Jakarta&apos;s Skyline</span>
                </h2>

                <p className="font-[family-name:var(--font-inter)] text-[#94A3B8] text-sm md:text-base leading-relaxed mb-6">
                  The Pinnacle SCBD stands as a testament to architectural
                  excellence, rising 55 floors above Jakarta&apos;s most
                  prestigious business district. Designed by world-renowned
                  architects, every detail has been meticulously crafted to
                  deliver an unrivaled living experience.
                </p>

                <p className="font-[family-name:var(--font-inter)] text-[#94A3B8] text-sm leading-relaxed mb-10">
                  With only 220 exclusive residences, The Pinnacle offers a rare
                  blend of privacy and prestige. Floor-to-ceiling windows frame
                  breathtaking panoramas of the city, while LEED Platinum
                  certification ensures sustainable luxury for generations.
                </p>

                {/* Spec Badges */}
                <div className="flex flex-wrap gap-3">
                  <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl px-5 py-3">
                    <span className="font-[family-name:var(--font-inter)] text-[#22D3EE] text-sm font-semibold">40,000 m&sup2;</span>
                    <span className="font-[family-name:var(--font-inter)] text-[#94A3B8] text-sm ml-2">Total Area</span>
                  </div>
                  <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl px-5 py-3">
                    <span className="font-[family-name:var(--font-inter)] text-[#22D3EE] text-sm font-semibold">3.8m</span>
                    <span className="font-[family-name:var(--font-inter)] text-[#94A3B8] text-sm ml-2">Ceiling Height</span>
                  </div>
                  <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl px-5 py-3">
                    <span className="font-[family-name:var(--font-inter)] text-[#8B5CF6] text-sm font-semibold">Grade A</span>
                    <span className="font-[family-name:var(--font-inter)] text-[#94A3B8] text-sm ml-2">Materials</span>
                  </div>
                </div>
              </div>

              {/* Right: Image with decorative corners */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80"
                    alt="The Pinnacle SCBD modern luxury interior"
                    className="w-full h-auto aspect-[4/5] object-cover"
                  />
                </div>
                {/* Decorative corner accents */}
                <div className="absolute -top-3 -right-3 w-16 h-16 border-t-2 border-r-2 border-[#22D3EE]/30 rounded-tr-2xl" />
                <div className="absolute -bottom-3 -left-3 w-16 h-16 border-b-2 border-l-2 border-[#8B5CF6]/30 rounded-bl-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          4. RESIDENCES (UNITS)
      ══════════════════════════════════════════════════════════════════ */}
      <section id="residences" className="py-24 lg:py-32 bg-[#0B0F19]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#22D3EE]" />
              <span className="font-[family-name:var(--font-inter)] text-[#22D3EE] text-[10px] tracking-[0.3em] uppercase">
                Residences
              </span>
              <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#22D3EE]" />
            </div>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl lg:text-5xl text-[#F8FAFC] leading-[1.2] font-bold">
              Choose Your <span className="bg-gradient-to-r from-[#22D3EE] to-[#8B5CF6] bg-clip-text text-transparent">Elevation</span>
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {unitTypes.map((unit) => (
              <div
                key={unit.name}
                className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-[#22D3EE]/30 transition-all duration-500 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={unit.image}
                    alt={unit.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19]/80 to-transparent" />
                  <div className="absolute bottom-4 left-6">
                    <span className="font-[family-name:var(--font-space-grotesk)] text-[#F8FAFC] text-xl font-bold">
                      {unit.name}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex gap-4 mb-4">
                    <span className="font-[family-name:var(--font-inter)] text-[#22D3EE] text-xs tracking-[0.1em]">
                      {unit.size}
                    </span>
                    <span className="font-[family-name:var(--font-inter)] text-[#22D3EE] text-xs tracking-[0.1em]">
                      {unit.beds}
                    </span>
                  </div>
                  <p className="font-[family-name:var(--font-inter)] text-[#94A3B8] text-sm leading-relaxed mb-6">
                    {unit.description}
                  </p>
                  <div className="flex items-center justify-between pt-5 border-t border-white/10">
                    <div>
                      <span className="font-[family-name:var(--font-inter)] text-[#94A3B8] text-[10px] tracking-[0.15em] uppercase block">Starting from</span>
                      <span className="font-[family-name:var(--font-space-grotesk)] text-[#22D3EE] text-lg font-bold">{unit.price}</span>
                    </div>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 font-[family-name:var(--font-inter)] text-[#22D3EE] text-xs tracking-[0.15em] uppercase border border-[#22D3EE]/40 px-5 py-2 rounded-full hover:bg-[#22D3EE]/10 transition-all duration-300"
                    >
                      Explore
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          5. AMENITIES
      ══════════════════════════════════════════════════════════════════ */}
      <section id="amenities" className="py-24 lg:py-32 bg-[#0B0F19]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#22D3EE]" />
              <span className="font-[family-name:var(--font-inter)] text-[#22D3EE] text-[10px] tracking-[0.3em] uppercase">
                World-Class Living
              </span>
              <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#22D3EE]" />
            </div>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl lg:text-5xl text-[#F8FAFC] leading-[1.2] font-bold">
              Elevated <span className="bg-gradient-to-r from-[#22D3EE] to-[#8B5CF6] bg-clip-text text-transparent">Amenities</span>
            </h2>
          </div>

          {/* 2x3 Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((amenity) => (
              <div
                key={amenity.name}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-[#22D3EE]/30 transition-all duration-500 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="w-12 h-12 border border-[#22D3EE]/40 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-[#22D3EE] text-xl">{amenity.icon}</span>
                </div>

                {/* Name */}
                <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg text-[#F8FAFC] mb-3 font-semibold">
                  {amenity.name}
                </h3>

                {/* Description */}
                <p className="font-[family-name:var(--font-inter)] text-[#94A3B8] text-sm leading-relaxed">
                  {amenity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          6. LOCATION
      ══════════════════════════════════════════════════════════════════ */}
      <section id="location" className="py-24 lg:py-32 bg-[#0D1120]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left: Text */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-[2px] bg-gradient-to-r from-[#22D3EE] to-[#8B5CF6] rounded-full" />
                <span className="font-[family-name:var(--font-inter)] text-[#22D3EE] text-[10px] tracking-[0.3em] uppercase">
                  Location
                </span>
              </div>

              <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl lg:text-5xl text-[#F8FAFC] leading-[1.2] mb-8 font-bold">
                The Heart of
                <br />
                <span className="bg-gradient-to-r from-[#22D3EE] to-[#8B5CF6] bg-clip-text text-transparent">Jakarta&apos;s Elite</span>
              </h2>

              <p className="font-[family-name:var(--font-inter)] text-[#94A3B8] text-sm leading-relaxed mb-10">
                Strategically positioned in SCBD, Jakarta&apos;s premier financial
                and lifestyle district. Everything you need is within reach &mdash;
                from world-class dining and shopping to seamless connectivity via
                MRT and major expressways.
              </p>

              {/* Landmarks List */}
              <div className="space-y-0">
                {landmarks.map((item, i) => (
                  <div
                    key={item.name}
                    className={`flex items-center justify-between py-4 ${
                      i < landmarks.length - 1 ? 'border-b border-white/10' : ''
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#22D3EE]" />
                      <span className="font-[family-name:var(--font-inter)] text-[#F8FAFC]/70 text-sm">{item.name}</span>
                    </div>
                    <span className="font-[family-name:var(--font-inter)] text-[#22D3EE] text-sm font-medium">{item.distance}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
                  alt="Jakarta SCBD skyline at dusk"
                  className="w-full h-auto aspect-[4/5] object-cover"
                />
                <div className="absolute inset-0 bg-[#22D3EE]/5 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1120] via-transparent to-transparent" />
                {/* Location Badge */}
                <div className="absolute bottom-6 left-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl px-5 py-3">
                  <p className="font-[family-name:var(--font-inter)] text-[#94A3B8] text-[10px] tracking-[0.15em] uppercase">Address</p>
                  <p className="font-[family-name:var(--font-inter)] text-[#F8FAFC] text-sm font-medium mt-1">Jl. Jend. Sudirman, SCBD Lot 15</p>
                  <p className="font-[family-name:var(--font-inter)] text-[#94A3B8] text-sm">Jakarta Selatan 12190</p>
                </div>
              </div>
              {/* Decorative corner accents */}
              <div className="absolute -top-3 -right-3 w-16 h-16 border-t-2 border-r-2 border-[#22D3EE]/30 rounded-tr-2xl" />
              <div className="absolute -bottom-3 -left-3 w-16 h-16 border-b-2 border-l-2 border-[#8B5CF6]/30 rounded-bl-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          7. CONTACT
      ══════════════════════════════════════════════════════════════════ */}
      <section id="contact" className="py-24 lg:py-32 bg-[#0B0F19]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#22D3EE]" />
              <span className="font-[family-name:var(--font-inter)] text-[#22D3EE] text-[10px] tracking-[0.3em] uppercase">
                Get in Touch
              </span>
              <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#22D3EE]" />
            </div>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl lg:text-5xl text-[#F8FAFC] leading-[1.2] mb-4 font-bold">
              Begin Your <span className="bg-gradient-to-r from-[#22D3EE] to-[#8B5CF6] bg-clip-text text-transparent">Ascent</span>
            </h2>
            <p className="font-[family-name:var(--font-inter)] text-[#94A3B8] text-sm max-w-lg mx-auto">
              Schedule a private viewing or request a detailed brochure. Our team is ready to guide you.
            </p>
          </div>

          {/* Two Columns: Info + Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left: Contact Info */}
            <div className="flex flex-col justify-center">
              <div className="space-y-8">
                {/* Address */}
                <div>
                  <h3 className="font-[family-name:var(--font-inter)] text-[#22D3EE] text-[10px] tracking-[0.3em] uppercase mb-3">
                    Sales Gallery
                  </h3>
                  <p className="font-[family-name:var(--font-inter)] text-[#F8FAFC] text-sm leading-relaxed">
                    SCBD Lot 15, Jl. Jend. Sudirman
                    <br />
                    Jakarta Selatan 12190
                    <br />
                    Indonesia
                  </p>
                </div>

                {/* Phone */}
                <div>
                  <h3 className="font-[family-name:var(--font-inter)] text-[#22D3EE] text-[10px] tracking-[0.3em] uppercase mb-3">
                    Phone
                  </h3>
                  <p className="font-[family-name:var(--font-inter)] text-[#F8FAFC] text-sm">
                    +62 812 2222 7920
                  </p>
                </div>

                {/* Email */}
                <div>
                  <h3 className="font-[family-name:var(--font-inter)] text-[#22D3EE] text-[10px] tracking-[0.3em] uppercase mb-3">
                    Email
                  </h3>
                  <p className="font-[family-name:var(--font-inter)] text-[#F8FAFC] text-sm">
                    inquiry@thepinnacle-scbd.com
                  </p>
                </div>

                {/* Hours */}
                <div>
                  <h3 className="font-[family-name:var(--font-inter)] text-[#22D3EE] text-[10px] tracking-[0.3em] uppercase mb-3">
                    Viewing Hours
                  </h3>
                  <p className="font-[family-name:var(--font-inter)] text-[#F8FAFC] text-sm">
                    Monday &ndash; Saturday: 09:00 &ndash; 18:00
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div>
              {!formSubmitted ? (
                <form
                  onSubmit={handleFormSubmit}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-10"
                >
                  {/* Name */}
                  <div className="mb-6">
                    <label className="font-[family-name:var(--font-inter)] text-[#94A3B8] text-[10px] tracking-[0.2em] uppercase block mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your full name"
                      className="w-full bg-white/5 border border-white/10 rounded-xl text-[#F8FAFC] font-[family-name:var(--font-inter)] text-sm px-4 py-3 outline-none transition-all focus:border-[#22D3EE] focus:shadow-[0_0_0_3px_rgba(34,211,238,0.15)] placeholder:text-[#94A3B8]/40"
                    />
                  </div>

                  {/* Email */}
                  <div className="mb-6">
                    <label className="font-[family-name:var(--font-inter)] text-[#94A3B8] text-[10px] tracking-[0.2em] uppercase block mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="your@email.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl text-[#F8FAFC] font-[family-name:var(--font-inter)] text-sm px-4 py-3 outline-none transition-all focus:border-[#22D3EE] focus:shadow-[0_0_0_3px_rgba(34,211,238,0.15)] placeholder:text-[#94A3B8]/40"
                    />
                  </div>

                  {/* Phone */}
                  <div className="mb-6">
                    <label className="font-[family-name:var(--font-inter)] text-[#94A3B8] text-[10px] tracking-[0.2em] uppercase block mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+62 812 3456 7890"
                      className="w-full bg-white/5 border border-white/10 rounded-xl text-[#F8FAFC] font-[family-name:var(--font-inter)] text-sm px-4 py-3 outline-none transition-all focus:border-[#22D3EE] focus:shadow-[0_0_0_3px_rgba(34,211,238,0.15)] placeholder:text-[#94A3B8]/40"
                    />
                  </div>

                  {/* Message */}
                  <div className="mb-10">
                    <label className="font-[family-name:var(--font-inter)] text-[#94A3B8] text-[10px] tracking-[0.2em] uppercase block mb-2">
                      Message
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your ideal residence..."
                      className="w-full bg-white/5 border border-white/10 rounded-xl text-[#F8FAFC] font-[family-name:var(--font-inter)] text-sm px-4 py-3 outline-none transition-all focus:border-[#22D3EE] focus:shadow-[0_0_0_3px_rgba(34,211,238,0.15)] resize-none placeholder:text-[#94A3B8]/40"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-[#22D3EE] to-[#8B5CF6] text-white font-[family-name:var(--font-inter)] text-xs tracking-[0.2em] uppercase rounded-xl hover:opacity-90 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]"
                  >
                    Send Inquiry
                  </button>

                  <p className="font-[family-name:var(--font-inter)] text-[#94A3B8]/40 text-[10px] mt-4 text-center">
                    We respect your privacy. Your information will never be
                    shared.
                  </p>
                </form>
              ) : (
                <div className="bg-white/5 backdrop-blur-xl border border-[#22D3EE]/30 rounded-2xl p-8 md:p-10 flex flex-col items-center justify-center min-h-[460px] text-center">
                  <div className="w-12 h-12 border border-[#22D3EE] rounded-xl flex items-center justify-center mb-8">
                    <span className="text-[#22D3EE] text-lg">
                      &#10003;
                    </span>
                  </div>
                  <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl text-[#F8FAFC] mb-4 font-bold">
                    Thank You
                  </h3>
                  <p className="font-[family-name:var(--font-inter)] text-[#94A3B8] text-sm max-w-sm leading-relaxed">
                    Your inquiry has been received. Our team will contact you
                    within 24 hours to arrange your private viewing.
                  </p>
                  <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#22D3EE] to-transparent mt-8 rounded-full" />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          8. FOOTER
      ══════════════════════════════════════════════════════════════════ */}
      <footer className="bg-[#080B14] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Column 1: Brand */}
            <div>
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-[#F8FAFC] text-lg font-bold tracking-[0.15em] uppercase mb-4">
                The Pinnacle
              </h3>
              <p className="font-[family-name:var(--font-inter)] text-[#22D3EE] text-sm mb-4">
                Elevated Living. Elevated Thinking.
              </p>
              <p className="font-[family-name:var(--font-inter)] text-[#94A3B8]/60 text-xs leading-relaxed">
                Jakarta&apos;s most prestigious residential tower offering 220
                exclusive residences in the heart of SCBD.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="font-[family-name:var(--font-inter)] text-[#22D3EE] text-[10px] tracking-[0.3em] uppercase mb-6">
                Quick Links
              </h3>
              <div className="space-y-3">
                {['About', 'Residences', 'Amenities', 'Location', 'Contact', 'Privacy Policy'].map(
                  (link) => (
                    <a
                      key={link}
                      href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block font-[family-name:var(--font-inter)] text-[#94A3B8]/60 text-xs hover:text-[#22D3EE] transition-colors duration-300"
                    >
                      {link}
                    </a>
                  )
                )}
              </div>
            </div>

            {/* Column 3: Contact */}
            <div>
              <h3 className="font-[family-name:var(--font-inter)] text-[#22D3EE] text-[10px] tracking-[0.3em] uppercase mb-6">
                Sales Gallery
              </h3>
              <div className="space-y-3">
                <p className="font-[family-name:var(--font-inter)] text-[#94A3B8]/60 text-xs">
                  SCBD Lot 15, Jl. Jend. Sudirman
                </p>
                <p className="font-[family-name:var(--font-inter)] text-[#94A3B8]/60 text-xs">
                  Jakarta Selatan 12190
                </p>
                <p className="font-[family-name:var(--font-inter)] text-[#94A3B8]/60 text-xs">
                  +62 812 2222 7920
                </p>
                <p className="font-[family-name:var(--font-inter)] text-[#94A3B8]/60 text-xs">
                  inquiry@thepinnacle-scbd.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="font-[family-name:var(--font-inter)] text-[#94A3B8]/40 text-[10px] tracking-[0.1em]">
                &copy; 2026 The Pinnacle SCBD. All rights reserved.
              </p>
              <p className="font-[family-name:var(--font-inter)] text-[#94A3B8]/40 text-[10px] tracking-[0.1em]">
                Made with &#9829; by{' '}
                <a
                  href="https://creativism.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#22D3EE]/50 hover:text-[#22D3EE] transition-colors"
                >
                  Creativism
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
