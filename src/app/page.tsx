'use client';

import { useState } from 'react';

/* ─────────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────────── */

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Units', href: '#units' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Location', href: '#location' },
  { label: 'Contact', href: '#contact' },
];

const heroStats = [
  { value: '55', label: 'Floors' },
  { value: '220', label: 'Units' },
  { value: '2027', label: 'Completion' },
  { value: 'LEED', label: 'Platinum' },
];

const unitTypes = [
  {
    name: 'Sky Penthouse',
    size: '350',
    beds: '4',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    features: ['Private rooftop terrace', 'Infinity plunge pool', '360° panoramic views', 'Smart home AI system', 'Wine cellar & cigar lounge'],
    price: 'IDR 45B',
  },
  {
    name: 'Premium Suite',
    size: '180',
    beds: '3',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    features: ['Floor-to-ceiling windows', 'Private elevator access', 'Italian marble finishes', 'Integrated smart controls', 'Dedicated parking bay'],
    price: 'IDR 18B',
  },
  {
    name: 'Executive Residence',
    size: '120',
    beds: '2',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    features: ['Open-plan living', 'Premium kitchen appliances', 'City skyline views', 'Home automation ready', 'Access to all amenities'],
    price: 'IDR 9.5B',
  },
];

const amenities = [
  { icon: '\u2726', name: 'Infinity Sky Pool', description: 'A 50-meter heated infinity pool on the 48th floor with panoramic views of Jakarta\'s skyline and beyond.' },
  { icon: '\u2661', name: 'Wellness & Spa', description: 'World-class spa facilities with hydrotherapy circuit, sauna, steam room, and private treatment suites.' },
  { icon: '\u2605', name: 'Sky Lounge & Bar', description: 'Exclusive residents-only lounge on the 55th floor with a curated beverage program and live entertainment.' },
  { icon: '\u2316', name: 'Smart Fitness Center', description: 'AI-powered gym with Technogym equipment, personal training pods, yoga studio, and recovery zone.' },
  { icon: '\u2756', name: 'Private Cinema', description: 'Dolby Atmos screening room with luxury recliners, perfect for private screenings and entertainment.' },
  { icon: '\u2740', name: 'Botanical Garden', description: 'Curated sky gardens spanning three levels with tropical flora, meditation spaces, and walking paths.' },
];

const landmarks = [
  { name: 'SCBD Financial District', distance: 'Direct Access' },
  { name: 'Pacific Place Mall', distance: '3 min walk' },
  { name: 'MRT Istora Station', distance: '5 min walk' },
  { name: 'Foreign Embassies', distance: '5-10 min drive' },
  { name: 'Senayan Golf Course', distance: '8 min drive' },
  { name: 'Soekarno-Hatta Airport', distance: '35 min drive' },
];

/* ─────────────────────────────────────────────────
   COMPONENT
   ───────────────────────────────────────────────── */

export default function PinnaclePage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    unit: '',
    message: '',
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const wa = `https://wa.me/6281222227920?text=${encodeURIComponent(
      `Hello, I'm interested in The Pinnacle SCBD.\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nUnit Interest: ${formData.unit}\nMessage: ${formData.message}`
    )}`;
    window.open(wa, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white">
      {/* ═══════════════════════════════════════════
          NAVIGATION
          ═══════════════════════════════════════════ */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/5 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="text-xl font-bold tracking-widest font-[family-name:var(--font-heading)]">
              <span className="gradient-text-cyan">THE PINNACLE</span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/70 hover:text-[#22D3EE] transition-colors duration-300 tracking-wide"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="ml-4 px-6 py-2.5 border border-[#22D3EE]/50 text-[#22D3EE] rounded-full text-sm font-medium hover:bg-[#22D3EE]/10 transition-all duration-300 btn-glow"
              >
                Book Tour
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2"
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-0.5 bg-[#22D3EE] transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-6 h-0.5 bg-[#22D3EE] transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-0.5 bg-[#22D3EE] transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileOpen && (
            <div className="md:hidden pb-6 border-t border-white/10 mt-2 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 text-white/70 hover:text-[#22D3EE] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="inline-block mt-4 px-6 py-2.5 border border-[#22D3EE]/50 text-[#22D3EE] rounded-full text-sm font-medium"
              >
                Book Tour
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* ═══════════════════════════════════════════
          HERO
          ═══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1800&q=80"
            alt="The Pinnacle SCBD"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0B0F19]/85" />
        </div>

        {/* Floating Orbs */}
        <div
          className="absolute top-20 right-20 w-[500px] h-[500px] rounded-full opacity-30 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(34,211,238,0.4) 0%, transparent 70%)',
            filter: 'blur(80px)',
            animation: 'float 12s ease-in-out infinite',
          }}
        />
        <div
          className="absolute bottom-20 left-20 w-[400px] h-[400px] rounded-full opacity-25 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(139,92,246,0.4) 0%, transparent 70%)',
            filter: 'blur(80px)',
            animation: 'float-reverse 15s ease-in-out infinite',
          }}
        />

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <p className="text-[#22D3EE] text-sm tracking-[0.3em] uppercase mb-6 font-medium">
            Jakarta&apos;s Most Prestigious Address
          </p>

          <h1 className="text-6xl sm:text-7xl lg:text-9xl font-bold mb-4 gradient-text-cyan font-[family-name:var(--font-heading)] leading-tight">
            THE PINNACLE
          </h1>

          <p className="text-2xl sm:text-3xl lg:text-4xl tracking-[0.4em] text-white/90 font-light mb-8 font-[family-name:var(--font-heading)]">
            SCBD JAKARTA
          </p>

          <p className="text-lg text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed">
            Where visionary architecture meets unparalleled luxury. Rise above the ordinary
            in Jakarta&apos;s most coveted skyline address.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <a
              href="#units"
              className="px-8 py-4 bg-gradient-to-r from-[#22D3EE] to-[#8B5CF6] text-white font-semibold rounded-full text-base hover:opacity-90 transition-opacity btn-glow"
            >
              Explore Residences
            </a>
            <a
              href="#contact"
              className="px-8 py-4 glass text-white font-semibold rounded-full text-base hover:bg-white/10 transition-all"
            >
              Schedule a Visit
            </a>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {heroStats.map((stat) => (
              <div key={stat.label} className="glass px-6 py-5 text-center">
                <div className="text-2xl lg:text-3xl font-bold text-[#22D3EE] font-[family-name:var(--font-heading)]">
                  {stat.value}
                </div>
                <div className="text-xs text-white/50 tracking-widest uppercase mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ animation: 'scroll-bounce 2s ease-in-out infinite' }}>
          <span className="text-xs text-white/30 tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-[#22D3EE]/50 to-transparent" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          ABOUT
          ═══════════════════════════════════════════ */}
      <section id="about" className="py-24 lg:py-32 bg-[#0B0F19]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="glass-strong p-8 lg:p-16 rounded-2xl">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Text */}
              <div>
                <span className="text-[#22D3EE] text-sm tracking-[0.3em] uppercase font-medium">
                  About
                </span>
                <h2 className="text-3xl lg:text-5xl font-bold mt-4 mb-6 font-[family-name:var(--font-heading)] leading-tight">
                  Redefining<br />Jakarta&apos;s Skyline
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-[#22D3EE] to-[#8B5CF6] rounded-full mb-8" />
                <p className="text-white/60 leading-relaxed mb-6">
                  The Pinnacle SCBD stands as a testament to architectural excellence, rising 55 floors above
                  Jakarta&apos;s most prestigious business district. Designed by world-renowned architects, every
                  detail has been meticulously crafted to deliver an unrivaled living experience.
                </p>
                <p className="text-white/60 leading-relaxed mb-8">
                  With only 220 exclusive residences, The Pinnacle offers a rare blend of privacy and prestige.
                  Floor-to-ceiling windows frame breathtaking panoramas of the city, while LEED Platinum
                  certification ensures sustainable luxury for generations to come.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="glass px-5 py-3 text-sm">
                    <span className="text-[#22D3EE] font-semibold">40,000 m&sup2;</span>
                    <span className="text-white/50 ml-2">Total Area</span>
                  </div>
                  <div className="glass px-5 py-3 text-sm">
                    <span className="text-[#22D3EE] font-semibold">3.8m</span>
                    <span className="text-white/50 ml-2">Ceiling Height</span>
                  </div>
                  <div className="glass px-5 py-3 text-sm">
                    <span className="text-[#8B5CF6] font-semibold">Grade A</span>
                    <span className="text-white/50 ml-2">Materials</span>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="relative">
                <div className="rounded-2xl overflow-hidden cyan-glow">
                  <img
                    src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80"
                    alt="The Pinnacle SCBD Interior"
                    className="w-full h-[400px] lg:h-[520px] object-cover"
                  />
                </div>
                {/* Decorative corner */}
                <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-[#22D3EE]/30 rounded-tr-2xl" />
                <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-[#8B5CF6]/30 rounded-bl-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="gradient-line mx-auto max-w-7xl" />

      {/* ═══════════════════════════════════════════
          UNIT TYPES
          ═══════════════════════════════════════════ */}
      <section id="units" className="py-24 lg:py-32 bg-[#0D1120]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-[#22D3EE] text-sm tracking-[0.3em] uppercase font-medium">
              Residences
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold mt-4 font-[family-name:var(--font-heading)]">
              Choose Your Elevation
            </h2>
            <p className="text-white/50 mt-4 max-w-xl mx-auto">
              Three meticulously designed residence types, each offering a distinct expression of luxury living above the clouds.
            </p>
          </div>

          {/* Unit Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {unitTypes.map((unit) => (
              <div
                key={unit.name}
                className="glass card-hover rounded-2xl overflow-hidden group"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={unit.image}
                    alt={unit.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] to-transparent" />
                  <div className="absolute bottom-4 left-6">
                    <h3 className="text-xl font-bold font-[family-name:var(--font-heading)]">{unit.name}</h3>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6">
                  <div className="flex gap-6 mb-5">
                    <span className="text-[#22D3EE] text-sm font-medium">{unit.size} m&sup2;</span>
                    <span className="text-[#22D3EE] text-sm font-medium">{unit.beds} Bedrooms</span>
                  </div>

                  <ul className="space-y-2.5 mb-6">
                    {unit.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-3 text-sm text-white/60">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE] mt-1.5 shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between pt-5 border-t border-white/10">
                    <div>
                      <span className="text-xs text-white/40 uppercase tracking-wider">Starting from</span>
                      <p className="text-lg font-bold text-[#22D3EE] font-[family-name:var(--font-heading)]">{unit.price}</p>
                    </div>
                    <a
                      href="#contact"
                      className="px-5 py-2 border border-[#22D3EE]/40 text-[#22D3EE] text-sm rounded-full hover:bg-[#22D3EE]/10 transition-all"
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

      {/* ═══════════════════════════════════════════
          AMENITIES
          ═══════════════════════════════════════════ */}
      <section id="amenities" className="py-24 lg:py-32 bg-[#0B0F19]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-[#22D3EE] text-sm tracking-[0.3em] uppercase font-medium">
              Amenities
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold mt-4 font-[family-name:var(--font-heading)]">
              Elevated Living
            </h2>
            <p className="text-white/50 mt-4 max-w-xl mx-auto">
              A curated collection of world-class amenities designed for residents who demand nothing but the exceptional.
            </p>
          </div>

          {/* Amenity Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {amenities.map((item) => (
              <div
                key={item.name}
                className="glass card-hover p-8 rounded-2xl group"
                style={{ borderBottom: '2px solid transparent' }}
                onMouseEnter={(e) => (e.currentTarget.style.borderBottomColor = '#22D3EE')}
                onMouseLeave={(e) => (e.currentTarget.style.borderBottomColor = 'transparent')}
              >
                <div className="text-4xl mb-5 opacity-80 group-hover:opacity-100 transition-opacity">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold mb-3 font-[family-name:var(--font-heading)]">
                  {item.name}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="gradient-line mx-auto max-w-7xl" />

      {/* ═══════════════════════════════════════════
          LOCATION
          ═══════════════════════════════════════════ */}
      <section id="location" className="py-24 lg:py-32 bg-[#0D1120]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text */}
            <div>
              <span className="text-[#22D3EE] text-sm tracking-[0.3em] uppercase font-medium">
                Location
              </span>
              <h2 className="text-3xl lg:text-5xl font-bold mt-4 mb-6 font-[family-name:var(--font-heading)] leading-tight">
                The Heart of<br />Jakarta&apos;s Elite
              </h2>
              <p className="text-white/50 mb-10 leading-relaxed">
                Strategically positioned in SCBD, Jakarta&apos;s premier financial and lifestyle district.
                Everything you need is within reach — from world-class dining and shopping
                to seamless connectivity via MRT and major expressways.
              </p>

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
                      <span className="text-white/70">{item.name}</span>
                    </div>
                    <span className="text-[#22D3EE] text-sm font-medium">{item.distance}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1555899434-94d1368aa7af?w=800&q=80"
                alt="Jakarta SCBD Skyline"
                className="w-full h-[400px] lg:h-[520px] object-cover"
              />
              <div className="absolute inset-0 bg-[#22D3EE]/10 mix-blend-overlay" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1120] via-transparent to-transparent" />
              {/* Location Badge */}
              <div className="absolute bottom-6 left-6 glass px-5 py-3">
                <p className="text-xs text-white/50 uppercase tracking-wider">Address</p>
                <p className="text-sm font-medium text-white mt-1">Jl. Jend. Sudirman, SCBD Lot 15</p>
                <p className="text-sm text-white/60">Jakarta Selatan 12190</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CONTACT
          ═══════════════════════════════════════════ */}
      <section id="contact" className="py-24 lg:py-32 bg-[#0B0F19]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-[#22D3EE] text-sm tracking-[0.3em] uppercase font-medium">
              Get in Touch
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold mt-4 font-[family-name:var(--font-heading)]">
              Begin Your Ascent
            </h2>
            <p className="text-white/50 mt-4 max-w-lg mx-auto">
              Schedule a private viewing or request a detailed brochure. Our team is ready to guide you.
            </p>
          </div>

          {/* Form Card */}
          <div className="glass-strong p-8 lg:p-12 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-white/50 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/50 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                    placeholder="you@email.com"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 transition-all"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-white/50 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleFormChange}
                    placeholder="+62 812 3456 7890"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/50 mb-2">Unit Interest</label>
                  <select
                    name="unit"
                    value={formData.unit}
                    onChange={handleFormChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white transition-all appearance-none cursor-pointer"
                    style={{ backgroundImage: 'none' }}
                  >
                    <option value="" className="bg-[#0B0F19]">Select a unit type</option>
                    <option value="Sky Penthouse" className="bg-[#0B0F19]">Sky Penthouse (350m&sup2;)</option>
                    <option value="Premium Suite" className="bg-[#0B0F19]">Premium Suite (180m&sup2;)</option>
                    <option value="Executive Residence" className="bg-[#0B0F19]">Executive Residence (120m&sup2;)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm text-white/50 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  rows={4}
                  placeholder="Tell us about your requirements..."
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 resize-none transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-[#22D3EE] to-[#8B5CF6] text-white font-semibold rounded-xl text-base hover:opacity-90 transition-opacity btn-glow"
              >
                Send Inquiry
              </button>
            </form>

            {/* Contact Info */}
            <div className="grid sm:grid-cols-3 gap-6 mt-10 pt-8 border-t border-white/10">
              <div className="text-center">
                <p className="text-xs text-white/40 uppercase tracking-wider mb-1">Phone</p>
                <a href="tel:+6281222227920" className="text-sm text-white/70 hover:text-[#22D3EE] transition-colors">
                  +62 812 2222 7920
                </a>
              </div>
              <div className="text-center">
                <p className="text-xs text-white/40 uppercase tracking-wider mb-1">Email</p>
                <a href="mailto:inquiry@thepinnacle-scbd.com" className="text-sm text-white/70 hover:text-[#22D3EE] transition-colors">
                  inquiry@thepinnacle-scbd.com
                </a>
              </div>
              <div className="text-center">
                <p className="text-xs text-white/40 uppercase tracking-wider mb-1">Gallery</p>
                <p className="text-sm text-white/70">SCBD, Jl. Jend. Sudirman</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FOOTER
          ═══════════════════════════════════════════ */}
      <footer className="bg-[#080B14] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Brand */}
            <div>
              <h3 className="text-xl font-bold gradient-text-cyan font-[family-name:var(--font-heading)] mb-4">
                THE PINNACLE
              </h3>
              <p className="text-sm text-white/40 leading-relaxed mb-6">
                Jakarta&apos;s most prestigious residential tower, redefining luxury living in the heart of SCBD.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-9 h-9 glass flex items-center justify-center rounded-full text-white/50 hover:text-[#22D3EE] transition-colors text-sm">in</a>
                <a href="#" className="w-9 h-9 glass flex items-center justify-center rounded-full text-white/50 hover:text-[#22D3EE] transition-colors text-sm">ig</a>
                <a href="#" className="w-9 h-9 glass flex items-center justify-center rounded-full text-white/50 hover:text-[#22D3EE] transition-colors text-sm">yt</a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white/60 mb-5">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-sm text-white/40 hover:text-[#22D3EE] transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white/60 mb-5">
                Sales Gallery
              </h4>
              <div className="space-y-3 text-sm text-white/40">
                <p>SCBD Lot 15, Jl. Jend. Sudirman</p>
                <p>Jakarta Selatan 12190</p>
                <p className="pt-2">
                  <a href="tel:+6281222227920" className="hover:text-[#22D3EE] transition-colors">
                    +62 812 2222 7920
                  </a>
                </p>
                <p>
                  <a href="mailto:inquiry@thepinnacle-scbd.com" className="hover:text-[#22D3EE] transition-colors">
                    inquiry@thepinnacle-scbd.com
                  </a>
                </p>
                <p className="pt-2">Mon - Sat: 09:00 - 18:00</p>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="gradient-line mt-12 mb-8" />
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/30">
              &copy; 2025 The Pinnacle SCBD. All rights reserved.
            </p>
            <p className="text-xs text-white/30">
              Made with &hearts; by{' '}
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
      </footer>
    </div>
  );
}
