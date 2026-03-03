"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface FloorZone {
  id: string;
  name: string;
  floors: string;
  color: string;
  glowColor: string;
  gradient: string;
  size: string;
  bedrooms: string;
  bathrooms: string;
  price: string;
  features: string[];
  image: string;
  height: number;
}

const zones: FloorZone[] = [
  {
    id: "sky",
    name: "Sky Penthouses",
    floors: "Floor 50-58",
    color: "#A78BFA",
    glowColor: "rgba(167, 139, 250, 0.4)",
    gradient: "from-violet-500 to-purple-600",
    size: "380 - 520 m\u00B2",
    bedrooms: "4 - 5 Bedrooms",
    bathrooms: "5 - 6 Bathrooms",
    price: "From IDR 45B",
    features: [
      "Private elevator access",
      "360\u00B0 panoramic terrace",
      "Infinity plunge pool",
      "Smart home AI system",
      "Wine cellar & cigar room",
      "Dedicated concierge",
    ],
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    height: 22,
  },
  {
    id: "premium",
    name: "Premium Suites",
    floors: "Floor 30-49",
    color: "#38BDF8",
    glowColor: "rgba(56, 189, 248, 0.4)",
    gradient: "from-cyan-400 to-blue-500",
    size: "180 - 280 m\u00B2",
    bedrooms: "3 - 4 Bedrooms",
    bathrooms: "3 - 4 Bathrooms",
    price: "From IDR 18B",
    features: [
      "Floor-to-ceiling windows",
      "Sky garden access",
      "Marble & oak finishes",
      "Integrated smart system",
      "Private lounge access",
      "Valet parking",
    ],
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    height: 35,
  },
  {
    id: "executive",
    name: "Executive Units",
    floors: "Floor 15-29",
    color: "#3B82F6",
    glowColor: "rgba(59, 130, 246, 0.4)",
    gradient: "from-blue-500 to-indigo-600",
    size: "120 - 180 m\u00B2",
    bedrooms: "2 - 3 Bedrooms",
    bathrooms: "2 - 3 Bathrooms",
    price: "From IDR 9B",
    features: [
      "Open-plan living area",
      "Premium appliances",
      "Gym & pool access",
      "Smart lock & intercom",
      "City view balcony",
      "Co-working space access",
    ],
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
    height: 28,
  },
  {
    id: "garden",
    name: "Garden Units",
    floors: "Floor 3-14",
    color: "#2DD4BF",
    glowColor: "rgba(45, 212, 191, 0.4)",
    gradient: "from-teal-400 to-emerald-500",
    size: "85 - 120 m\u00B2",
    bedrooms: "1 - 2 Bedrooms",
    bathrooms: "1 - 2 Bathrooms",
    price: "From IDR 5.5B",
    features: [
      "Garden terrace access",
      "Landscaped courtyard",
      "Pet-friendly zone",
      "Smart home basics",
      "Retail podium access",
      "EV charging station",
    ],
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
    height: 25,
  },
];

function TowerSilhouette({
  activeZone,
  setActiveZone,
}: {
  activeZone: string;
  setActiveZone: (id: string) => void;
}) {
  return (
    <div className="relative w-full max-w-[200px] mx-auto">
      {/* Tower structure */}
      <div className="relative flex flex-col gap-1">
        {/* Spire */}
        <div className="mx-auto w-1 h-8 bg-gradient-to-b from-cyan-400/60 to-transparent rounded-full" />
        <div className="mx-auto w-8 h-3 bg-white/10 rounded-t-lg" />

        {zones.map((zone) => {
          const isActive = activeZone === zone.id;
          return (
            <motion.button
              key={zone.id}
              onClick={() => setActiveZone(zone.id)}
              onMouseEnter={() => setActiveZone(zone.id)}
              className="relative w-full rounded-sm transition-all duration-300 cursor-pointer group"
              style={{
                height: `${zone.height * 2.2}px`,
                background: isActive
                  ? `linear-gradient(135deg, ${zone.color}33, ${zone.color}11)`
                  : "rgba(255,255,255,0.03)",
                border: isActive
                  ? `1px solid ${zone.color}66`
                  : "1px solid rgba(255,255,255,0.05)",
                boxShadow: isActive
                  ? `0 0 30px ${zone.glowColor}, inset 0 0 20px ${zone.color}11`
                  : "none",
              }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Floor lines */}
              <div className="absolute inset-0 flex flex-col justify-evenly px-2">
                {Array.from({ length: Math.floor(zone.height / 6) }).map(
                  (_, i) => (
                    <div
                      key={i}
                      className="w-full h-px"
                      style={{
                        background: isActive
                          ? `${zone.color}33`
                          : "rgba(255,255,255,0.03)",
                      }}
                    />
                  )
                )}
              </div>

              {/* Window dots */}
              <div className="absolute inset-0 flex flex-col justify-evenly py-1 px-4">
                {Array.from({ length: Math.floor(zone.height / 8) }).map(
                  (_, row) => (
                    <div key={row} className="flex justify-between">
                      {Array.from({ length: 5 }).map((_, col) => (
                        <div
                          key={col}
                          className="w-1 h-1 rounded-full"
                          style={{
                            background: isActive
                              ? `${zone.color}88`
                              : "rgba(255,255,255,0.08)",
                          }}
                        />
                      ))}
                    </div>
                  )
                )}
              </div>

              {/* Label */}
              <div
                className={`absolute -right-4 top-1/2 -translate-y-1/2 translate-x-full pl-4 transition-opacity duration-300 ${
                  isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}
              >
                <div className="flex items-center gap-2 whitespace-nowrap">
                  <div
                    className="w-6 h-px"
                    style={{ background: zone.color }}
                  />
                  <span
                    className="text-xs font-medium"
                    style={{ color: zone.color }}
                  >
                    {zone.floors}
                  </span>
                </div>
              </div>
            </motion.button>
          );
        })}

        {/* Base/Podium */}
        <div className="w-[110%] -ml-[5%] h-6 bg-white/5 rounded-b-lg border border-white/5" />
      </div>
    </div>
  );
}

function UnitDetail({ zone }: { zone: FloorZone }) {
  return (
    <motion.div
      key={zone.id}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.4 }}
      className="glass rounded-3xl overflow-hidden"
    >
      {/* Image */}
      <div className="relative h-52 sm:h-64 overflow-hidden">
        <Image
          src={zone.image}
          alt={zone.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent" />
        <div className="absolute bottom-4 left-6">
          <span
            className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${zone.gradient} text-white`}
          >
            {zone.floors}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8">
        <h3
          className="text-2xl sm:text-3xl font-bold mb-2"
          style={{ fontFamily: "var(--font-space-grotesk)", color: zone.color }}
        >
          {zone.name}
        </h3>

        {/* Specs */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {[
            { label: "Size", value: zone.size },
            { label: "Bedrooms", value: zone.bedrooms },
            { label: "Bathrooms", value: zone.bathrooms },
            { label: "Starting", value: zone.price },
          ].map((spec) => (
            <div
              key={spec.label}
              className="bg-white/[0.03] rounded-xl p-3 border border-white/5"
            >
              <p className="text-xs text-[#64748B] mb-1">{spec.label}</p>
              <p
                className="text-sm font-semibold text-white font-mono-numbers"
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {zone.features.map((feature) => (
            <div key={feature} className="flex items-center gap-2">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke={zone.color}
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
          className={`mt-6 block w-full text-center py-3 rounded-xl bg-gradient-to-r ${zone.gradient} text-white font-semibold hover:opacity-90 transition-opacity`}
        >
          Enquire About {zone.name}
        </a>
      </div>
    </motion.div>
  );
}

export default function UnitExplorer() {
  const [activeZone, setActiveZone] = useState("sky");
  const activeData = zones.find((z) => z.id === activeZone) || zones[0];

  return (
    <section id="units" className="relative py-24 sm:py-32 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/[0.02] to-transparent" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
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
        </motion.div>

        {/* Desktop: Tower + Detail */}
        <div className="hidden lg:grid lg:grid-cols-[280px_1fr] gap-12 items-start">
          {/* Tower */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="sticky top-32"
          >
            <TowerSilhouette
              activeZone={activeZone}
              setActiveZone={setActiveZone}
            />
            {/* Legend */}
            <div className="mt-8 space-y-2">
              {zones.map((zone) => (
                <button
                  key={zone.id}
                  onClick={() => setActiveZone(zone.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all text-left ${
                    activeZone === zone.id
                      ? "bg-white/5"
                      : "hover:bg-white/[0.02]"
                  }`}
                >
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{
                      background: zone.color,
                      boxShadow:
                        activeZone === zone.id
                          ? `0 0 10px ${zone.glowColor}`
                          : "none",
                    }}
                  />
                  <div>
                    <p
                      className="text-sm font-medium"
                      style={{
                        color:
                          activeZone === zone.id ? zone.color : "#94A3B8",
                      }}
                    >
                      {zone.name}
                    </p>
                    <p className="text-xs text-[#64748B]">{zone.floors}</p>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Detail Card */}
          <AnimatePresence mode="wait">
            <UnitDetail zone={activeData} />
          </AnimatePresence>
        </div>

        {/* Mobile: Tabs */}
        <div className="lg:hidden">
          {/* Tab buttons */}
          <div className="flex gap-2 overflow-x-auto pb-4 horizontal-scroll mb-6">
            {zones.map((zone) => (
              <button
                key={zone.id}
                onClick={() => setActiveZone(zone.id)}
                className={`flex-shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition-all whitespace-nowrap ${
                  activeZone === zone.id
                    ? "text-white"
                    : "glass text-[#94A3B8]"
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

          <AnimatePresence mode="wait">
            <UnitDetail zone={activeData} />
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
