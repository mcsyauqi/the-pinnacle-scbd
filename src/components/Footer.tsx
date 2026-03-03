"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative py-16 px-4">
      {/* Glass divider */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
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
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
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
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4
              className="text-sm font-semibold uppercase tracking-wider mb-4 text-[#94A3B8]"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Explore
            </h4>
            <div className="space-y-3 text-sm">
              <a
                href="#overview"
                className="block text-[#64748B] hover:text-white transition-colors"
              >
                Overview
              </a>
              <a
                href="#units"
                className="block text-[#64748B] hover:text-white transition-colors"
              >
                Unit Explorer
              </a>
              <a
                href="#amenities"
                className="block text-[#64748B] hover:text-white transition-colors"
              >
                Amenities
              </a>
              <a
                href="#technology"
                className="block text-[#64748B] hover:text-white transition-colors"
              >
                Technology
              </a>
              <a
                href="#gallery"
                className="block text-[#64748B] hover:text-white transition-colors"
              >
                Gallery
              </a>
            </div>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4
              className="text-sm font-semibold uppercase tracking-wider mb-4 text-[#94A3B8]"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Legal
            </h4>
            <div className="space-y-3 text-sm">
              <a
                href="#"
                className="block text-[#64748B] hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="block text-[#64748B] hover:text-white transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="block text-[#64748B] hover:text-white transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#475569]">
              &copy; 2026 The Pinnacle SCBD. All rights reserved. A KG Global
              Development.
            </p>
            <div className="flex items-center gap-4">
              {/* Social icons */}
              {["Instagram", "LinkedIn", "WhatsApp"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-8 h-8 rounded-lg glass flex items-center justify-center text-[#64748B] hover:text-white hover:bg-white/10 transition-all"
                  aria-label={social}
                >
                  <span className="text-xs font-medium">
                    {social.charAt(0)}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
