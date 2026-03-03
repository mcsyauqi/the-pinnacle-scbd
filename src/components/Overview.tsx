"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  {
    number: "58",
    label: "Floors",
    description: "Rising above the Jakarta skyline",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2" ry="2" /><line x1="12" y1="6" x2="12" y2="6.01" /><line x1="12" y1="10" x2="12" y2="10.01" /><line x1="12" y1="14" x2="12" y2="14.01" /><line x1="12" y1="18" x2="12" y2="18.01" />
      </svg>
    ),
  },
  {
    number: "180",
    label: "Units",
    description: "Exclusive residences designed for distinction",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    number: "4",
    label: "Sky Gardens",
    description: "Elevated green sanctuaries in the clouds",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c4-4 8-7.5 8-12a8 8 0 1 0-16 0c0 4.5 4 8 8 12z" /><circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    number: "LEED",
    label: "Platinum",
    description: "Highest standard in sustainable design",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 3h12l4 6-10 13L2 9Z" /><path d="M11 3 8 9l4 13 4-13-3-6" /><path d="M2 9h20" />
      </svg>
    ),
  },
];

function AnimatedCounter({ target, isInView }: { target: string; isInView: boolean }) {
  const isNumber = !isNaN(Number(target));

  if (!isNumber) {
    return (
      <motion.span
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="font-mono-numbers"
      >
        {target}
      </motion.span>
    );
  }

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      className="font-mono-numbers"
    >
      {target}
    </motion.span>
  );
}

export default function Overview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="overview" className="relative py-24 sm:py-32 px-4">
      {/* Subtle gradient bg */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.02] to-transparent" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
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
          </motion.div>

          {/* Right: Stats Grid */}
          <div ref={ref} className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="glass rounded-2xl p-6 hover:bg-white/[0.08] transition-all duration-300 group cursor-default"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400/20 to-violet-500/20 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-3xl sm:text-4xl font-bold mb-1 gradient-text">
                  <AnimatedCounter target={stat.number} isInView={isInView} />
                </div>
                <div className="text-white font-semibold text-lg mb-2">{stat.label}</div>
                <p className="text-sm text-[#64748B]">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
