"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const amenities = [
  {
    title: "Infinity Pool",
    description:
      "A 50-meter sky-edge infinity pool on the 45th floor, overlooking Jakarta's endless horizon.",
    image:
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=600&q=80",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="url(#grad1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <defs><linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#38BDF8" /><stop offset="100%" stopColor="#7C3AED" /></linearGradient></defs>
        <path d="M2 12c2-2 4-2 6 0s4 2 6 0 4-2 6 0" /><path d="M2 16c2-2 4-2 6 0s4 2 6 0 4-2 6 0" />
      </svg>
    ),
  },
  {
    title: "Zen Garden",
    description:
      "Curated Japanese-inspired sky gardens with meditation spaces and water features.",
    image:
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&q=80",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="url(#grad2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <defs><linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#38BDF8" /><stop offset="100%" stopColor="#7C3AED" /></linearGradient></defs>
        <path d="M12 22c4-4 8-7.5 8-12a8 8 0 1 0-16 0c0 4.5 4 8 8 12z" /><circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    title: "Sports Complex",
    description:
      "Indoor tennis court, squash, basketball court, and Olympic-grade facilities.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="url(#grad3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <defs><linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#38BDF8" /><stop offset="100%" stopColor="#7C3AED" /></linearGradient></defs>
        <circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" />
      </svg>
    ),
  },
  {
    title: "Private Dining",
    description:
      "Chef's table experience with a private dining room for intimate gatherings and celebrations.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="url(#grad4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <defs><linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#38BDF8" /><stop offset="100%" stopColor="#7C3AED" /></linearGradient></defs>
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" /><line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
  },
  {
    title: "Fitness Center",
    description:
      "State-of-the-art gym with Technogym equipment, yoga studio, and personal training suites.",
    image:
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&q=80",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="url(#grad5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <defs><linearGradient id="grad5" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#38BDF8" /><stop offset="100%" stopColor="#7C3AED" /></linearGradient></defs>
        <path d="M6.5 6.5 17.5 17.5" /><path d="M2.5 10.5l4-4" /><path d="M17.5 2.5l4 4" /><path d="M6.5 17.5l-4 4" /><path d="M13.5 21.5l4-4" />
      </svg>
    ),
  },
  {
    title: "Automated Parking",
    description:
      "Robotic valet parking system with 3-minute retrieval. 400 spaces across 5 basement levels.",
    image:
      "https://images.unsplash.com/photo-1573348722427-f1d6819fdf98?w=600&q=80",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="url(#grad6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <defs><linearGradient id="grad6" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#38BDF8" /><stop offset="100%" stopColor="#7C3AED" /></linearGradient></defs>
        <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9L18 10l-2.7-3.4A2 2 0 0 0 13.7 6H10.3a2 2 0 0 0-1.6.6L6 10l-2.5 1.1C2.7 11.3 2 12.1 2 13v3c0 .6.4 1 1 1h2" /><circle cx="7" cy="17" r="2" /><circle cx="17" cy="17" r="2" />
      </svg>
    ),
  },
];

export default function Amenities() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="amenities" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.02] to-transparent" />

      <div className="relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 px-4"
        >
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
        </motion.div>

        {/* Scrolling cards */}
        <div
          ref={ref}
          className="flex gap-6 overflow-x-auto horizontal-scroll px-4 sm:px-8 pb-4"
        >
          {amenities.map((amenity, index) => (
            <motion.div
              key={amenity.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex-shrink-0 w-[300px] sm:w-[340px] glass rounded-2xl overflow-hidden group hover:bg-white/[0.08] transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={amenity.image}
                  alt={amenity.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="340px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/30 to-transparent" />
                {/* Gradient icon */}
                <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl glass flex items-center justify-center">
                  {amenity.icon}
                </div>
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
            </motion.div>
          ))}
        </div>

        {/* Scroll hint */}
        <div className="flex justify-center mt-6 gap-1.5">
          {amenities.map((_, i) => (
            <div
              key={i}
              className={`w-1.5 h-1.5 rounded-full ${
                i === 0
                  ? "bg-gradient-to-r from-cyan-400 to-violet-500 w-6"
                  : "bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
