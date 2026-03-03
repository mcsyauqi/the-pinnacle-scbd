"use client";

import { useState } from "react";

/* ───────────────────────────────────────────
   DATA
   ─────────────────────────────────────────── */

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Units", href: "#units" },
  { label: "Amenities", href: "#amenities" },
  { label: "Location", href: "#location" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const stats = [
  { number: "58", suffix: "", label: "Floors" },
  { number: "180", suffix: "+", label: "Exclusive Units" },
  { number: "4", suffix: "", label: "Sky Gardens" },
  { number: "24", suffix: "/7", label: "Concierge" },
];

const features = [
  {
    icon: "M3 21V5a2 2 0 012-2h6l2 2h6a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2z",
    title: "LEED Platinum Certified",
    description:
      "Highest standard in green building design, with advanced energy-efficient systems and sustainable materials throughout.",
  },
  {
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    title: "AI-Powered Smart Home",
    description:
      "Integrated smart home system with AI-driven climate control, lighting scenes, security, and voice-activated concierge.",
  },
  {
    icon: "M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 004.561 21h14.878a2 2 0 001.94-1.515L22 17",
    title: "Triple-Height Lobbies",
    description:
      "Dramatic entrance lobbies soaring 12 meters high, adorned with curated art installations and bespoke furnishings.",
  },
  {
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    title: "Seismic Zone IV Ready",
    description:
      "Engineered to the highest seismic safety standards with advanced base isolation and damping technology.",
  },
  {
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    title: "Wellness Ecosystem",
    description:
      "Dedicated wellness floors featuring meditation gardens, yoga studios, spa suites, and a state-of-the-art medical center.",
  },
  {
    icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064",
    title: "Biophilic Design",
    description:
      "Living walls, rooftop gardens, and integrated greenery throughout creating a sanctuary above the city skyline.",
  },
];

interface UnitType {
  name: string;
  floors: string;
  size: string;
  bedrooms: string;
  price: string;
  highlight: string;
  features: string[];
  accentColor: string;
  image: string;
}

const unitTypes: UnitType[] = [
  {
    name: "Sky Penthouses",
    floors: "Floor 50 - 58",
    size: "280 - 450 m\u00B2",
    bedrooms: "3 - 4 Bedrooms",
    price: "From Rp 35B",
    highlight: "The Crown Jewel",
    features: [
      "Private elevator access",
      "360\u00B0 panoramic terrace",
      "Infinity plunge pool",
      "Smart home AI system",
      "Wine cellar & cigar room",
      "Dedicated concierge",
    ],
    accentColor: "#A78BFA",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  },
  {
    name: "Premium Suites",
    floors: "Floor 30 - 49",
    size: "150 - 220 m\u00B2",
    bedrooms: "2 - 3 Bedrooms",
    price: "From Rp 18B",
    highlight: "Elevated Living",
    features: [
      "Floor-to-ceiling windows",
      "Private balcony garden",
      "Smart climate control",
      "Built-in entertainment system",
      "Marble & oak finishes",
      "Dedicated parking",
    ],
    accentColor: "#38BDF8",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
  },
  {
    name: "Executive Residences",
    floors: "Floor 10 - 29",
    size: "90 - 140 m\u00B2",
    bedrooms: "1 - 2 Bedrooms",
    price: "From Rp 8B",
    highlight: "Smart & Refined",
    features: [
      "Open-plan living design",
      "Integrated smart home hub",
      "Designer kitchen suite",
      "Rain shower bathroom",
      "Access to sky gardens",
      "Resident lounge privileges",
    ],
    accentColor: "#34D399",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
];

const amenities = [
  {
    name: "Infinity Sky Pool",
    description:
      "A stunning 25-meter infinity pool on the 55th floor with panoramic city views stretching to the horizon.",
    icon: "M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z",
  },
  {
    name: "Executive Fitness Center",
    description:
      "World-class gym spanning 800m\u00B2 with Technogym equipment, personal trainers, and recovery suites.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    name: "Sky Lounge & Bar",
    description:
      "Exclusive residents-only lounge on the 56th floor, perfect for entertaining with a private cocktail bar.",
    icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
  },
  {
    name: "Private Cinema",
    description:
      "A 32-seat private cinema with Dolby Atmos surround sound and 4K laser projection for film premieres.",
    icon: "M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z",
  },
  {
    name: "Meditation Garden",
    description:
      "Rooftop zen garden with water features, Japanese landscaping, and private meditation pods for mindful retreats.",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
  {
    name: "Co-Working Space",
    description:
      "Fully equipped co-working hub with private meeting rooms, video conferencing suites, and high-speed fiber.",
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
];

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
    alt: "Luxury penthouse interior",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
    alt: "Modern living space",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
    alt: "Premium suite view",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&q=80",
    alt: "Elegant bathroom",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80",
    alt: "Sky garden terrace",
    span: "col-span-1 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80",
    alt: "Designer kitchen",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80",
    alt: "Building exterior dusk",
    span: "col-span-1 row-span-1",
  },
];

/* ───────────────────────────────────────────
   ICON COMPONENT
   ─────────────────────────────────────────── */

function Icon({
  path,
  size = 24,
  className = "",
}: {
  path: string;
  size?: number;
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d={path} />
    </svg>
  );
}

/* ───────────────────────────────────────────
   SECTION HEADER
   ─────────────────────────────────────────── */

function SectionHeader({
  label,
  title,
  description,
  align = "center",
}: {
  label: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <div
      className={`mb-16 lg:mb-20 ${align === "center" ? "text-center" : "text-left"}`}
    >
      <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-cyan-400 mb-4">
        {label}
      </span>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] mb-6">
        <span className="gradient-text">{title}</span>
      </h2>
      {description && (
        <p
          className={`text-white/60 text-lg max-w-2xl leading-relaxed ${align === "center" ? "mx-auto" : ""}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

/* ───────────────────────────────────────────
   MAIN PAGE COMPONENT
   ─────────────────────────────────────────── */

export default function PinnaclePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeUnit, setActiveUnit] = useState(0);

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white overflow-x-hidden">
      {/* ═══════════════════════════════════════
          NAVIGATION
          ═══════════════════════════════════════ */}
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500">
        <div className="absolute inset-0 bg-[#0A0A0F]/80 backdrop-blur-xl border-b border-white/5" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center text-white font-bold text-sm transition-transform duration-300 group-hover:scale-110">
              TP
            </div>
            <div>
              <span className="text-lg font-bold font-[family-name:var(--font-space-grotesk)] tracking-tight">
                The Pinnacle
              </span>
              <span className="block text-[10px] tracking-[0.25em] text-white/40 uppercase">
                SCBD Jakarta
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/60 hover:text-cyan-400 transition-colors duration-300 tracking-wide"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-4 px-6 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 text-sm font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
            >
              Book Private Tour
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 text-white/80"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-20 left-0 right-0 bg-[#0A0A0F]/95 backdrop-blur-xl border-b border-white/5 transition-all duration-300 ${
            mobileMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/70 hover:text-cyan-400 transition-colors py-2 text-lg"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 text-center px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 font-semibold"
            >
              Book Private Tour
            </a>
          </div>
        </div>
      </nav>

      {/* ═══════════════════════════════════════
          HERO SECTION
          ═══════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0">
          {/* Base dark */}
          <div className="absolute inset-0 bg-[#0A0A0F]" />

          {/* Gradient orbs */}
          <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[120px] animate-orb-1" />
          <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] rounded-full bg-violet-500/10 blur-[120px] animate-orb-2" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-500/5 blur-[150px]" />

          {/* Dot grid overlay */}
          <div className="absolute inset-0 dot-grid opacity-30" />

          {/* Radial vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0A0A0F_70%)]" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center pt-32 pb-20">
          {/* Top badge */}
          <div className="inline-flex items-center gap-2 glass rounded-full px-5 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs tracking-[0.2em] uppercase text-white/70">
              Now accepting private viewings
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold font-[family-name:var(--font-space-grotesk)] leading-[0.9] tracking-tight mb-8">
            <span className="block text-white">THE</span>
            <span className="block gradient-text py-2">PINNACLE</span>
            <span className="block text-white/30 text-2xl sm:text-3xl md:text-4xl tracking-[0.3em] mt-4 font-light">
              S C B D
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl text-white/50 font-light max-w-xl mx-auto mb-12 leading-relaxed">
            Elevated Living.{" "}
            <span className="text-cyan-400">Elevated Thinking.</span>
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
            <a
              href="#contact"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 text-lg font-semibold hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-105 w-full sm:w-auto text-center"
            >
              Schedule Private Tour
            </a>
            <a
              href="#about"
              className="px-8 py-4 rounded-full glass text-lg font-medium text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 w-full sm:w-auto text-center"
            >
              Explore Residences
            </a>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="glass rounded-2xl p-6 text-center hover:bg-white/[0.08] transition-all duration-300">
                <div className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-jetbrains)] gradient-text mb-1">
                  {stat.number}
                  <span className="text-white/40">{stat.suffix}</span>
                </div>
                <div className="text-sm text-white/50 tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-scroll-hint">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
            <div className="w-1 h-3 rounded-full bg-cyan-400 animate-scroll-dot" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          ABOUT SECTION
          ═══════════════════════════════════════ */}
      <section id="about" className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeader
            label="About the Building"
            title="A New Standard of Luxury"
            description="Rising 58 stories above Jakarta's prestigious SCBD district, The Pinnacle redefines urban living with cutting-edge architecture, biophilic design, and world-class amenities."
          />

          {/* Features grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="glass rounded-2xl p-8 hover:bg-white/[0.08] transition-all duration-500 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon
                    path={feature.icon}
                    size={24}
                    className="text-cyan-400"
                  />
                </div>
                <h3 className="text-lg font-semibold font-[family-name:var(--font-space-grotesk)] mb-3 text-white">
                  {feature.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          UNITS SECTION
          ═══════════════════════════════════════ */}
      <section id="units" className="relative py-20 lg:py-32">
        {/* Subtle background accent */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.02] to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeader
            label="Residences"
            title="Choose Your Elevation"
            description="Three distinct collections, each offering a unique perspective of Jakarta's skyline and beyond."
          />

          {/* Unit type tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {unitTypes.map((unit, i) => (
              <button
                key={unit.name}
                onClick={() => setActiveUnit(i)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeUnit === i
                    ? "bg-gradient-to-r from-cyan-500 to-violet-500 text-white shadow-lg shadow-cyan-500/20"
                    : "glass text-white/60 hover:text-white hover:bg-white/10"
                }`}
              >
                {unit.name}
              </button>
            ))}
          </div>

          {/* Active unit display */}
          <div className="glass-strong rounded-3xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image */}
              <div className="relative h-64 sm:h-80 lg:h-full min-h-[400px]">
                <img
                  src={unitTypes[activeUnit].image}
                  alt={unitTypes[activeUnit].name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0A0A0F]/60 hidden lg:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F]/80 to-transparent lg:hidden" />

                {/* Badge */}
                <div className="absolute top-6 left-6">
                  <span
                    className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-white"
                    style={{
                      backgroundColor: unitTypes[activeUnit].accentColor + "30",
                      border: `1px solid ${unitTypes[activeUnit].accentColor}50`,
                    }}
                  >
                    {unitTypes[activeUnit].highlight}
                  </span>
                </div>
              </div>

              {/* Details */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-2 text-xs tracking-[0.2em] uppercase text-cyan-400">
                  {unitTypes[activeUnit].floors}
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold font-[family-name:var(--font-space-grotesk)] mb-6">
                  {unitTypes[activeUnit].name}
                </h3>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="glass rounded-xl p-4">
                    <div className="text-xs text-white/40 mb-1">Size</div>
                    <div className="text-lg font-semibold font-[family-name:var(--font-jetbrains)]">
                      {unitTypes[activeUnit].size}
                    </div>
                  </div>
                  <div className="glass rounded-xl p-4">
                    <div className="text-xs text-white/40 mb-1">Bedrooms</div>
                    <div className="text-lg font-semibold font-[family-name:var(--font-jetbrains)]">
                      {unitTypes[activeUnit].bedrooms}
                    </div>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {unitTypes[activeUnit].features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-white/70">
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{
                          backgroundColor: unitTypes[activeUnit].accentColor,
                        }}
                      />
                      <span className="text-sm">{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-xs text-white/40 mb-1">
                      Starting From
                    </div>
                    <div className="text-2xl font-bold gradient-text font-[family-name:var(--font-jetbrains)]">
                      {unitTypes[activeUnit].price}
                    </div>
                  </div>
                  <a
                    href="#contact"
                    className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 text-sm font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
                  >
                    Inquire Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          AMENITIES SECTION
          ═══════════════════════════════════════ */}
      <section id="amenities" className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeader
            label="World-Class Amenities"
            title="Beyond Expectation"
            description="Every amenity has been thoughtfully curated to elevate your daily rituals into extraordinary experiences."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {amenities.map((amenity, i) => (
              <div
                key={amenity.name}
                className={`glass rounded-2xl p-8 hover:bg-white/[0.08] transition-all duration-500 group ${
                  i === 0 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-violet-500/10 flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-cyan-500/10 transition-all duration-300">
                  <Icon
                    path={amenity.icon}
                    size={28}
                    className="text-cyan-400 group-hover:text-cyan-300 transition-colors"
                  />
                </div>
                <h3 className="text-xl font-semibold font-[family-name:var(--font-space-grotesk)] mb-3">
                  {amenity.name}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {amenity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          LOCATION SECTION
          ═══════════════════════════════════════ */}
      <section id="location" className="relative py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/[0.02] to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeader
            label="Prime Location"
            title="The Heart of Jakarta"
            description="Nestled in SCBD, Jakarta's most coveted address, where business prestige meets lifestyle excellence."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Map placeholder */}
            <div className="glass-strong rounded-3xl overflow-hidden h-[400px] lg:h-[500px] relative">
              <img
                src="https://images.unsplash.com/photo-1555899434-94d1368aa7af?w=800&q=80"
                alt="Jakarta SCBD aerial view"
                className="absolute inset-0 w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-[#0A0A0F]/40 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="glass rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="text-sm font-semibold text-cyan-400 tracking-wide">
                      THE PINNACLE SCBD
                    </span>
                  </div>
                  <p className="text-white/70 text-sm">
                    Jl. Jend. Sudirman, SCBD Lot 8
                    <br />
                    South Jakarta 12190, Indonesia
                  </p>
                </div>
              </div>
            </div>

            {/* Nearby landmarks */}
            <div className="space-y-4">
              {[
                {
                  distance: "2 min",
                  name: "Pacific Place Mall",
                  type: "Shopping & Lifestyle",
                },
                {
                  distance: "3 min",
                  name: "Equity Tower & District 8",
                  type: "Business Hub",
                },
                {
                  distance: "5 min",
                  name: "Senayan Golf Course",
                  type: "Recreation",
                },
                {
                  distance: "10 min",
                  name: "Soekarno-Hatta Intl Airport",
                  type: "Via Toll Road (Non-Peak)",
                },
                {
                  distance: "5 min",
                  name: "International Schools Cluster",
                  type: "Education",
                },
                {
                  distance: "3 min",
                  name: "Pondok Indah Hospital",
                  type: "Healthcare",
                },
              ].map((item) => (
                <div
                  key={item.name}
                  className="glass rounded-2xl p-5 flex items-center gap-5 hover:bg-white/[0.08] transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/10 to-violet-500/10 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <span className="text-sm font-bold font-[family-name:var(--font-jetbrains)] gradient-text">
                      {item.distance}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">
                      {item.name}
                    </div>
                    <div className="text-xs text-white/40">{item.type}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          GALLERY SECTION
          ═══════════════════════════════════════ */}
      <section id="gallery" className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeader
            label="Gallery"
            title="A Glimpse Inside"
            description="Experience the craftsmanship, materials, and attention to detail that define every space within The Pinnacle."
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] lg:auto-rows-[240px] gap-3">
            {galleryImages.map((img) => (
              <div
                key={img.alt}
                className={`${img.span} rounded-2xl overflow-hidden relative group cursor-pointer`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-sm text-white/90 font-medium">
                    {img.alt}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CONTACT / CTA SECTION
          ═══════════════════════════════════════ */}
      <section id="contact" className="relative py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.03] to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="glass-strong rounded-3xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left: CTA content */}
              <div className="p-10 lg:p-16 flex flex-col justify-center">
                <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-cyan-400 mb-4">
                  Exclusive Access
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] mb-6 leading-tight">
                  <span className="gradient-text">Begin Your</span>
                  <br />
                  <span className="text-white">Elevated Journey</span>
                </h2>
                <p className="text-white/50 text-lg mb-10 leading-relaxed max-w-lg">
                  Join an exclusive circle of discerning individuals.
                  Schedule a private tour and discover why The Pinnacle
                  is Jakarta&apos;s most anticipated address.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                      <Icon
                        path="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        size={20}
                        className="text-cyan-400"
                      />
                    </div>
                    <div>
                      <div className="text-xs text-white/40">Call Us</div>
                      <div className="text-white font-medium">
                        +62 21 5088 8888
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                      <Icon
                        path="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        size={20}
                        className="text-cyan-400"
                      />
                    </div>
                    <div>
                      <div className="text-xs text-white/40">Email</div>
                      <div className="text-white font-medium">
                        inquiry@thepinnacle-scbd.com
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                      <Icon
                        path="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        size={20}
                        className="text-cyan-400"
                      />
                    </div>
                    <div>
                      <div className="text-xs text-white/40">
                        Sales Gallery
                      </div>
                      <div className="text-white font-medium">
                        SCBD Lot 8, South Jakarta
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Form */}
              <div className="bg-white/[0.03] p-10 lg:p-16 border-t lg:border-t-0 lg:border-l border-white/5">
                <h3 className="text-xl font-semibold font-[family-name:var(--font-space-grotesk)] mb-8">
                  Request a Private Viewing
                </h3>
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-xs text-white/40 mb-2 tracking-wide uppercase">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/20 focus:outline-none focus:border-cyan-500/50 focus:bg-white/[0.08] transition-all duration-300"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs text-white/40 mb-2 tracking-wide uppercase">
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="email@example.com"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/20 focus:outline-none focus:border-cyan-500/50 focus:bg-white/[0.08] transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-white/40 mb-2 tracking-wide uppercase">
                        Phone
                      </label>
                      <input
                        type="tel"
                        placeholder="+62 812 xxx xxxx"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/20 focus:outline-none focus:border-cyan-500/50 focus:bg-white/[0.08] transition-all duration-300"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-white/40 mb-2 tracking-wide uppercase">
                      Interested In
                    </label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white/60 focus:outline-none focus:border-cyan-500/50 focus:bg-white/[0.08] transition-all duration-300 appearance-none">
                      <option value="" className="bg-[#0A0A0F]">
                        Select unit type
                      </option>
                      <option value="sky" className="bg-[#0A0A0F]">
                        Sky Penthouses (Floor 50-58)
                      </option>
                      <option value="premium" className="bg-[#0A0A0F]">
                        Premium Suites (Floor 30-49)
                      </option>
                      <option value="executive" className="bg-[#0A0A0F]">
                        Executive Residences (Floor 10-29)
                      </option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-white/40 mb-2 tracking-wide uppercase">
                      Message
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your preferences..."
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/20 focus:outline-none focus:border-cyan-500/50 focus:bg-white/[0.08] transition-all duration-300 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-semibold text-lg hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-[1.02]"
                  >
                    Submit Inquiry
                  </button>
                  <p className="text-xs text-white/30 text-center">
                    Your information is kept strictly confidential.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FOOTER
          ═══════════════════════════════════════ */}
      <footer className="border-t border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center text-white font-bold text-sm">
                  TP
                </div>
                <div>
                  <span className="text-lg font-bold font-[family-name:var(--font-space-grotesk)]">
                    The Pinnacle
                  </span>
                  <span className="block text-[10px] tracking-[0.25em] text-white/40 uppercase">
                    SCBD Jakarta
                  </span>
                </div>
              </div>
              <p className="text-sm text-white/40 leading-relaxed">
                Jakarta&apos;s most exclusive 58-story residential tower.
                Elevated living for those who demand the extraordinary.
              </p>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="text-sm font-semibold tracking-wide uppercase text-white/60 mb-4">
                Explore
              </h4>
              <div className="space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block text-sm text-white/40 hover:text-cyan-400 transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact summary */}
            <div>
              <h4 className="text-sm font-semibold tracking-wide uppercase text-white/60 mb-4">
                Contact
              </h4>
              <div className="space-y-3 text-sm text-white/40">
                <p>Jl. Jend. Sudirman, SCBD Lot 8</p>
                <p>South Jakarta 12190, Indonesia</p>
                <p className="text-cyan-400">+62 21 5088 8888</p>
                <p className="text-cyan-400">inquiry@thepinnacle-scbd.com</p>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-white/30">
              &copy; {new Date().getFullYear()} The Pinnacle SCBD. All rights
              reserved. This is a demo website for presentation purposes.
            </p>
            <p className="text-xs text-white/30">
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
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
