"use client";

import { useState, useEffect } from "react";

/* ───────────────────────────────────────────
   DATA
   ─────────────────────────────────────────── */

const navLinks = [
  { label: "Overview", href: "#overview" },
  { label: "Units", href: "#units" },
  { label: "Amenities", href: "#amenities" },
  { label: "Technology", href: "#technology" },
  { label: "Gallery", href: "#gallery" },
];

const stats = [
  { number: "58", label: "Floors", description: "Rising above the Jakarta skyline" },
  { number: "180", label: "Units", description: "Exclusive residences designed for distinction" },
  { number: "4", label: "Sky Gardens", description: "Elevated green sanctuaries in the clouds" },
  { number: "LEED", label: "Platinum", description: "Highest standard in sustainable design" },
];

interface UnitZone {
  id: string;
  name: string;
  floors: string;
  color: string;
  gradient: string;
  size: string;
  bedrooms: string;
  price: string;
  features: string[];
  image: string;
}

const zones: UnitZone[] = [
  {
    id: "sky",
    name: "Sky Penthouses",
    floors: "Floor 50-58",
    color: "#A78BFA",
    gradient: "from-violet-500 to-purple-600",
    size: "280 - 450 m\u00B2",
    bedrooms: "3 - 4 Bedrooms",
    price: "From Rp 35B",
    features: [
      "Private elevator access",
      "360\u00B0 panoramic terrace",
      "Infinity plunge pool",
      "Smart home AI system",
      "Wine cellar & cigar room",
      "Dedicated concierge",
    ],
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  },
  {
    id: "premium",
    name: "Premium Suites",
    floors: "Floor 30-49",
    color: "#38BDF8",
    gradient: "from-cyan-400 to-blue-500",
    size: "180 - 280 m\u00B2",
    bedrooms: "2 - 3 Bedrooms",
    price: "From Rp 15B",
    features: [
      "Floor-to-ceiling windows",
      "Sky garden access",
      "Marble & oak finishes",
      "Integrated smart system",
      "Private lounge access",
      "Valet parking",
    ],
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
  },
  {
    id: "executive",
    name: "Executive Units",
    floors: "Floor 15-29",
    color: "#3B82F6",
    gradient: "from-blue-500 to-indigo-600",
    size: "120 - 180 m\u00B2",
    bedrooms: "2 Bedrooms",
    price: "From Rp 8B",
    features: [
      "Open-plan living area",
      "Premium appliances",
      "Gym & pool access",
      "Smart lock & intercom",
      "City view balcony",
      "Co-working space access",
    ],
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
  },
  {
    id: "garden",
    name: "Garden Units",
    floors: "Floor 3-14",
    color: "#2DD4BF",
    gradient: "from-teal-400 to-emerald-500",
    size: "80 - 120 m\u00B2",
    bedrooms: "1 - 2 Bedrooms",
    price: "From Rp 5B",
    features: [
      "Garden terrace access",
      "Landscaped courtyard",
      "Pet-friendly zone",
      "Smart home basics",
      "Retail podium access",
      "EV charging station",
    ],
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80",
  },
];

const amenities = [
  {
    title: "Infinity Pool",
    description: "A 50-meter sky-edge infinity pool on the 45th floor, overlooking Jakarta's endless horizon.",
    image: "https://images.unsplash.com/photo-1572331165267-854da2b021b1?w=800&q=80",
  },
  {
    title: "Zen Garden",
    description: "Curated Japanese-inspired sky gardens with meditation spaces and water features.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
  },
  {
    title: "Sports Complex",
    description: "Indoor tennis court, squash, basketball court, and Olympic-grade facilities.",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80",
  },
  {
    title: "Private Dining",
    description: "Chef's table experience with a private dining room for intimate gatherings and celebrations.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  },
  {
    title: "Fitness Center",
    description: "State-of-the-art gym with Technogym equipment, yoga studio, and personal training suites.",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
  },
  {
    title: "Automated Parking",
    description: "Robotic valet parking system with 3-minute retrieval. 400 spaces across 5 basement levels.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80",
  },
];

const techFeatures = [
  {
    title: "Smart Home AI",
    description: "Centralized AI system learns your preferences -- lighting, temperature, music, and security adapt to your lifestyle automatically.",
  },
  {
    title: "Parametric Facade",
    description: "Dynamic aluminum facade panels respond to sun position, reducing heat gain by 40% while creating a living exterior.",
  },
  {
    title: "Triple-Pane Glass",
    description: "German-engineered triple-glazed windows with Low-E coating for superior insulation and noise reduction to 25dB.",
  },
  {
    title: "EV Charging Hub",
    description: "120 Tesla-compatible supercharging stations across all basement levels with smart queue management.",
  },
  {
    title: "Water Recycling",
    description: "Closed-loop greywater system recycles 80% of water usage. Rainwater harvesting irrigates all sky gardens.",
  },
  {
    title: "Biometric Access",
    description: "Face recognition, fingerprint, and iris scanning at every access point. Real-time security AI monitors 200+ cameras.",
  },
];

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80",
    title: "Exterior Facade",
    subtitle: "Parametric glass design",
  },
  {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    title: "Penthouse Living",
    subtitle: "Sky-level luxury",
  },
  {
    src: "https://images.unsplash.com/photo-1572331165267-854da2b021b1?w=800&q=80",
    title: "Infinity Pool",
    subtitle: "45th floor oasis",
  },
  {
    src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    title: "Grand Lobby",
    subtitle: "First impressions matter",
  },
  {
    src: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80",
    title: "City Skyline",
    subtitle: "Panoramic Jakarta views",
  },
];

const budgetRanges = ["IDR 5B - 10B", "IDR 10B - 20B", "IDR 20B - 35B", "IDR 35B - 50B+"];
const floorZones = [
  "Garden Units (Floor 3-14)",
  "Executive Units (Floor 15-29)",
  "Premium Suites (Floor 30-49)",
  "Sky Penthouses (Floor 50-58)",
];

/* ───────────────────────────────────────────
   NAVBAR
   ─────────────────────────────────────────── */

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 rounded-2xl ${
        scrolled
          ? "glass-strong w-[95%] max-w-6xl py-3 px-6"
          : "glass w-[90%] max-w-5xl py-4 px-8"
      }`}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-600 flex items-center justify-center font-bold text-sm">
            P
          </div>
          <span
            className="text-lg font-semibold tracking-wider hidden sm:block"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            THE PINNACLE
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm text-[#94A3B8] hover:text-white transition-colors rounded-lg hover:bg-white/5"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#register"
          className="hidden md:block px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-400 to-violet-600 text-white text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Register Interest
        </a>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className="block w-6 h-0.5 bg-white transition-transform duration-300"
            style={mobileOpen ? { transform: "rotate(45deg) translateY(6px)" } : undefined}
          />
          <span
            className="block w-6 h-0.5 bg-white transition-opacity duration-300"
            style={mobileOpen ? { opacity: 0 } : undefined}
          />
          <span
            className="block w-6 h-0.5 bg-white transition-transform duration-300"
            style={mobileOpen ? { transform: "rotate(-45deg) translateY(-6px)" } : undefined}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{ maxHeight: mobileOpen ? "400px" : "0px", opacity: mobileOpen ? 1 : 0 }}
      >
        <div className="flex flex-col gap-1 pt-3 mt-3 border-t border-white/10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="px-4 py-3 text-sm text-[#94A3B8] hover:text-white transition-colors rounded-lg hover:bg-white/5"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#register"
            onClick={() => setMobileOpen(false)}
            className="mx-4 mt-2 mb-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-violet-600 text-white text-sm font-medium text-center"
          >
            Register Interest
          </a>
        </div>
      </div>
    </nav>
  );
}

/* ───────────────────────────────────────────
   HERO
   ─────────────────────────────────────────── */

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
          alt="The Pinnacle SCBD Tower"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0F172A]/80" />
      </div>

      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-30" />

      {/* Gradient orbs - CSS animation only */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[120px] animate-orb-1" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-violet-600/10 blur-[120px] animate-orb-2" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 glass rounded-full px-5 py-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-sm text-[#94A3B8] tracking-wider uppercase">
            SCBD, South Jakarta
          </span>
        </div>

        {/* Main heading */}
        <h1
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-none mb-6"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          <span className="gradient-text">THE</span>
          <br />
          <span className="gradient-text">PINNACLE</span>
        </h1>

        {/* Tagline */}
        <p className="text-xl sm:text-2xl text-[#94A3B8] font-light tracking-wide mb-4">
          Elevated Living. Elevated Thinking.
        </p>

        {/* Sub description */}
        <p className="text-base text-[#64748B] max-w-xl mx-auto mb-12">
          58 stories of uncompromising luxury in the heart of Jakarta&apos;s most
          prestigious business district
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#units"
            className="group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-violet-600 text-white font-semibold tracking-wide overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(56,189,248,0.3)]"
          >
            <span className="relative z-10">Explore Units</span>
          </a>
          <a
            href="#register"
            className="px-8 py-4 rounded-2xl glass text-white font-medium tracking-wide hover:bg-white/10 transition-all duration-300 gradient-border"
          >
            Join Waitlist
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 rounded-full border-2 border-[#64748B] flex items-start justify-center pt-2 animate-scroll-hint">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-scroll-dot" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   OVERVIEW
   ─────────────────────────────────────────── */

function Overview() {
  return (
    <section id="overview" className="relative py-20 lg:py-28 px-6 lg:px-12">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.02] to-transparent" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span className="text-xs text-[#94A3B8] tracking-widest uppercase">
                About the Project
              </span>
            </div>

            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Redefining
              <br />
              <span className="gradient-text">Urban Living</span>
            </h2>

            <p className="text-lg text-[#94A3B8] leading-relaxed mb-6">
              The Pinnacle SCBD stands as Jakarta&apos;s most ambitious residential
              project -- a 58-story architectural masterpiece that seamlessly
              blends parametric design, sustainable engineering, and
              intelligent living systems.
            </p>

            <p className="text-base text-[#64748B] leading-relaxed mb-8">
              Located in the heart of the Sudirman Central Business District,
              every residence offers panoramic views of Jakarta&apos;s evolving
              skyline, from the Menteng canopy to the Java Sea horizon. With
              only 180 exclusive units, privacy and prestige are not amenities
              -- they are foundations.
            </p>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400/20 to-cyan-400/5 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-white font-medium">SCBD, Jakarta</p>
                  <p className="text-xs text-[#64748B]">Prime Location</p>
                </div>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/20 to-violet-500/5 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-white font-medium">2027</p>
                  <p className="text-xs text-[#64748B]">Completion</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="glass rounded-2xl p-6 hover:bg-white/[0.08] transition-all duration-300 group cursor-default"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400/20 to-violet-500/20 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
                    <line x1="12" y1="6" x2="12" y2="6.01" />
                    <line x1="12" y1="10" x2="12" y2="10.01" />
                    <line x1="12" y1="14" x2="12" y2="14.01" />
                    <line x1="12" y1="18" x2="12" y2="18.01" />
                  </svg>
                </div>
                <div
                  className="text-3xl sm:text-4xl font-bold mb-1 gradient-text"
                  style={{ fontFamily: "var(--font-jetbrains)" }}
                >
                  {stat.number}
                </div>
                <div className="text-white font-semibold text-lg mb-2">{stat.label}</div>
                <p className="text-sm text-[#64748B]">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   UNIT EXPLORER (tabbed)
   ─────────────────────────────────────────── */

function UnitExplorer() {
  const [activeZone, setActiveZone] = useState("sky");
  const activeData = zones.find((z) => z.id === activeZone) || zones[0];

  return (
    <section id="units" className="relative py-20 lg:py-28 px-6 lg:px-12">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/[0.02] to-transparent" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
            <span className="text-xs text-[#94A3B8] tracking-widest uppercase">
              Unit Explorer
            </span>
          </div>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Find Your <span className="gradient-text">Elevation</span>
          </h2>
          <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
            Explore four distinct living tiers, each designed for a different
            definition of luxury
          </p>
        </div>

        {/* Tab buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {zones.map((zone) => (
            <button
              key={zone.id}
              onClick={() => setActiveZone(zone.id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                activeZone === zone.id ? "text-white" : "glass text-[#94A3B8] hover:text-white hover:bg-white/[0.06]"
              }`}
              style={
                activeZone === zone.id
                  ? {
                      background: `linear-gradient(135deg, ${zone.color}33, ${zone.color}11)`,
                      border: `1px solid ${zone.color}66`,
                      color: zone.color,
                    }
                  : undefined
              }
            >
              {zone.name}
            </button>
          ))}
        </div>

        {/* Active unit detail card */}
        <div className="glass rounded-3xl overflow-hidden max-w-4xl mx-auto transition-all duration-300">
          {/* Image */}
          <div className="relative h-56 sm:h-72 overflow-hidden">
            <img
              src={activeData.image}
              alt={activeData.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent" />
            <div className="absolute bottom-4 left-6">
              <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${activeData.gradient} text-white`}
              >
                {activeData.floors}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-10">
            <h3
              className="text-2xl sm:text-3xl font-bold mb-4"
              style={{ fontFamily: "var(--font-space-grotesk)", color: activeData.color }}
            >
              {activeData.name}
            </h3>

            {/* Specs */}
            <div className="grid grid-cols-3 gap-3 mb-8">
              {[
                { label: "Size", value: activeData.size },
                { label: "Bedrooms", value: activeData.bedrooms },
                { label: "Starting Price", value: activeData.price },
              ].map((spec) => (
                <div
                  key={spec.label}
                  className="bg-white/[0.03] rounded-xl p-4 border border-white/5"
                >
                  <p className="text-xs text-[#64748B] mb-1">{spec.label}</p>
                  <p
                    className="text-sm font-semibold text-white"
                    style={{ fontFamily: "var(--font-jetbrains)" }}
                  >
                    {spec.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Features */}
            <h4 className="text-sm font-semibold text-[#94A3B8] uppercase tracking-wider mb-3">
              Key Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
              {activeData.features.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={activeData.color}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-sm text-[#94A3B8]">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#register"
              className={`block w-full text-center py-3.5 rounded-xl bg-gradient-to-r ${activeData.gradient} text-white font-semibold hover:opacity-90 transition-opacity`}
            >
              Enquire About {activeData.name}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   AMENITIES
   ─────────────────────────────────────────── */

function Amenities() {
  return (
    <section id="amenities" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.02] to-transparent" />

      <div className="relative">
        {/* Header */}
        <div className="text-center mb-16 px-6 lg:px-12">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span className="text-xs text-[#94A3B8] tracking-widest uppercase">
              World-Class Amenities
            </span>
          </div>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Beyond <span className="gradient-text">Expectation</span>
          </h2>
          <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
            Every amenity has been designed not just for comfort, but to elevate
            the art of living
          </p>
        </div>

        {/* Grid of cards */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {amenities.map((amenity) => (
            <div
              key={amenity.title}
              className="glass rounded-2xl overflow-hidden group hover:bg-white/[0.08] transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={amenity.image}
                  alt={amenity.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {amenity.title}
                </h3>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  {amenity.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   TECHNOLOGY
   ─────────────────────────────────────────── */

function Technology() {
  return (
    <section id="technology" className="relative py-20 lg:py-28 px-6 lg:px-12">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.02] to-transparent" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span className="text-xs text-[#94A3B8] tracking-widest uppercase">
              Architecture & Technology
            </span>
          </div>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Built for the <span className="gradient-text">Future</span>
          </h2>
          <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
            Where cutting-edge engineering meets sustainable design -- every
            system in The Pinnacle is a testament to tomorrow&apos;s technology
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {techFeatures.map((feature) => (
            <div
              key={feature.title}
              className="group relative rounded-2xl bg-[#0F172A] border border-white/5 p-6 sm:p-8 hover:border-cyan-400/30 transition-all duration-300"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-cyan-400/10 flex items-center justify-center mb-5 group-hover:bg-cyan-400/15 transition-colors text-cyan-400">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                </div>

                <h3
                  className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {feature.title}
                </h3>

                <p className="text-sm text-[#64748B] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   GALLERY
   ─────────────────────────────────────────── */

function Gallery() {
  return (
    <section id="gallery" className="relative py-20 lg:py-28 px-6 lg:px-12">
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
            <span className="text-xs text-[#94A3B8] tracking-widest uppercase">
              Gallery
            </span>
          </div>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Visual <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
            A glimpse into the world of The Pinnacle
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={image.title}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${
                index === 0 ? "sm:col-span-2 sm:row-span-2" : ""
              } ${index === 4 ? "sm:col-span-2" : ""}`}
            >
              <div className={`relative ${index === 0 ? "h-[300px] sm:h-[500px]" : "h-[240px]"} w-full`}>
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Glass overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                {/* Content overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3
                    className="text-lg font-bold text-white mb-1"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    {image.title}
                  </h3>
                  <p className="text-sm text-[#94A3B8]">{image.subtitle}</p>
                </div>

                {/* Glass border on hover */}
                <div className="absolute inset-0 rounded-2xl border border-white/0 group-hover:border-white/10 transition-colors duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   REGISTER / CONTACT
   ─────────────────────────────────────────── */

function Register() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    zone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="register" className="relative py-20 lg:py-28 px-6 lg:px-12 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] via-violet-600/[0.05] to-[#0F172A]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-cyan-500/10 to-violet-600/10 blur-[100px]" />
      </div>

      <div className="relative max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs text-[#94A3B8] tracking-widest uppercase">
              Limited Availability
            </span>
          </div>
          <h2
            className="text-4xl sm:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Join the <span className="gradient-text">Exclusive Waitlist</span>
          </h2>
          <p className="text-lg text-[#64748B] max-w-lg mx-auto">
            Be among the first to secure your residence at The Pinnacle. Priority
            access and preferential pricing for early registrants.
          </p>
        </div>

        {/* Form */}
        <div className="glass-strong rounded-3xl p-6 sm:p-10">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-sm text-[#94A3B8] mb-2 font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-[#475569] focus:outline-none focus:border-cyan-400/50 focus:bg-white/[0.05] transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm text-[#94A3B8] mb-2 font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-[#475569] focus:outline-none focus:border-cyan-400/50 focus:bg-white/[0.05] transition-all"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm text-[#94A3B8] mb-2 font-medium">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+62 xxx xxxx xxxx"
                  className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-[#475569] focus:outline-none focus:border-cyan-400/50 focus:bg-white/[0.05] transition-all"
                />
              </div>

              {/* Budget & Floor - 2 col */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm text-[#94A3B8] mb-2 font-medium">
                    Budget Range
                  </label>
                  <select
                    required
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white focus:outline-none focus:border-cyan-400/50 focus:bg-white/[0.05] transition-all appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="bg-[#1E293B]">Select range</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range} className="bg-[#1E293B]">{range}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-[#94A3B8] mb-2 font-medium">
                    Preferred Floor Zone
                  </label>
                  <select
                    required
                    value={formData.zone}
                    onChange={(e) => setFormData({ ...formData, zone: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white focus:outline-none focus:border-cyan-400/50 focus:bg-white/[0.05] transition-all appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="bg-[#1E293B]">Select zone</option>
                    {floorZones.map((zone) => (
                      <option key={zone} value={zone} className="bg-[#1E293B]">{zone}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-violet-600 text-white font-semibold text-lg tracking-wide hover:opacity-90 transition-all hover:shadow-[0_0_40px_rgba(56,189,248,0.3)] mt-4"
              >
                Join Exclusive Waitlist
              </button>

              <p className="text-xs text-[#475569] text-center mt-4">
                By registering, you agree to our privacy policy. Your
                information is kept strictly confidential.
              </p>
            </form>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-400 to-violet-600 flex items-center justify-center mx-auto mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3
                className="text-2xl font-bold mb-3 gradient-text"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                Welcome to The Pinnacle
              </h3>
              <p className="text-[#94A3B8] max-w-md mx-auto">
                Thank you for your interest,{" "}
                <span className="text-white font-medium">{formData.name}</span>.
                Our exclusive sales team will contact you within 24 hours with
                priority access details.
              </p>
            </div>
          )}
        </div>

        {/* Trust indicators */}
        <div className="flex items-center justify-center gap-8 mt-8 text-[#475569] text-xs">
          <div className="flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <span>SSL Secured</span>
          </div>
          <div className="flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <span>Data Encrypted</span>
          </div>
          <div className="flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <span>GDPR Compliant</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   FOOTER
   ─────────────────────────────────────────── */

function Footer() {
  return (
    <footer className="relative py-16 px-6 lg:px-12">
      {/* Glass divider */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-600 flex items-center justify-center font-bold text-sm">
                P
              </div>
              <span
                className="text-lg font-semibold tracking-wider"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                THE PINNACLE
              </span>
            </div>
            <p className="text-sm text-[#64748B] leading-relaxed">
              Jakarta&apos;s most exclusive residential tower in the heart of
              SCBD. Elevated living for the extraordinary.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-sm font-semibold uppercase tracking-wider mb-4 text-[#94A3B8]"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Contact
            </h4>
            <div className="space-y-3 text-sm text-[#64748B]">
              <p>SCBD Lot 12, Jl. Jend. Sudirman</p>
              <p>South Jakarta 12190</p>
              <p className="text-cyan-400">+62 21 5555 8888</p>
              <p className="text-cyan-400">info@thepinnaclescbd.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-sm font-semibold uppercase tracking-wider mb-4 text-[#94A3B8]"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Explore
            </h4>
            <div className="space-y-3 text-sm">
              <a href="#overview" className="block text-[#64748B] hover:text-white transition-colors">Overview</a>
              <a href="#units" className="block text-[#64748B] hover:text-white transition-colors">Unit Explorer</a>
              <a href="#amenities" className="block text-[#64748B] hover:text-white transition-colors">Amenities</a>
              <a href="#technology" className="block text-[#64748B] hover:text-white transition-colors">Technology</a>
              <a href="#gallery" className="block text-[#64748B] hover:text-white transition-colors">Gallery</a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4
              className="text-sm font-semibold uppercase tracking-wider mb-4 text-[#94A3B8]"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Legal
            </h4>
            <div className="space-y-3 text-sm">
              <a href="#" className="block text-[#64748B] hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="block text-[#64748B] hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="block text-[#64748B] hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#475569]">
              &copy; 2026 The Pinnacle SCBD. All rights reserved. A KG Global Development.
            </p>
            <div className="flex items-center gap-4 text-xs text-[#475569]">
              <span>
                Made with{" "}
                <span className="text-red-400">&hearts;</span> by{" "}
                <a
                  href="https://creativism.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Creativism
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ───────────────────────────────────────────
   MAIN PAGE
   ─────────────────────────────────────────── */

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Overview />
      <UnitExplorer />
      <Amenities />
      <Technology />
      <Gallery />
      <Register />
      <Footer />
    </main>
  );
}
