"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Smart Home AI",
    description:
      "Centralized AI system learns your preferences -- lighting, temperature, music, and security adapt to your lifestyle automatically.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z" />
        <path d="M9 14v2" /><path d="M15 14v2" />
      </svg>
    ),
  },
  {
    title: "Parametric Facade",
    description:
      "Dynamic aluminum facade panels respond to sun position, reducing heat gain by 40% while creating a living exterior.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
  },
  {
    title: "Triple-Pane Glass",
    description:
      "German-engineered triple-glazed windows with Low-E coating for superior insulation and noise reduction to 25dB.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
  },
  {
    title: "EV Charging Hub",
    description:
      "120 Tesla-compatible supercharging stations across all basement levels with smart queue management.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    title: "Water Recycling",
    description:
      "Closed-loop greywater system recycles 80% of water usage. Rainwater harvesting irrigates all sky gardens.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c4-4 8-7.5 8-12a8 8 0 1 0-16 0c0 4.5 4 8 8 12z" />
      </svg>
    ),
  },
  {
    title: "Biometric Access",
    description:
      "Face recognition, fingerprint, and iris scanning at every access point. Real-time security AI monitors 200+ cameras.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

export default function Technology() {
  return (
    <section id="technology" className="relative py-24 sm:py-32 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.02] to-transparent" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
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
        </motion.div>

        {/* Feature Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl bg-[#0F172A] border border-white/5 p-6 sm:p-8 hover:border-cyan-400/30 transition-all duration-300"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-cyan-400/10 flex items-center justify-center mb-5 group-hover:bg-cyan-400/15 transition-colors">
                  {feature.icon}
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
