"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const budgetRanges = [
  "IDR 5B - 10B",
  "IDR 10B - 20B",
  "IDR 20B - 35B",
  "IDR 35B - 50B+",
];

const floorZones = [
  "Garden Units (Floor 3-14)",
  "Executive Units (Floor 15-29)",
  "Premium Suites (Floor 30-49)",
  "Sky Penthouses (Floor 50-58)",
];

export default function Register() {
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
    <section id="register" className="relative py-24 sm:py-32 px-4 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] via-violet-600/[0.05] to-[#0F172A]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-cyan-500/10 to-violet-600/10 blur-[100px]" />
      </div>

      <div className="relative max-w-2xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
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
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass-strong rounded-3xl p-6 sm:p-10"
        >
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
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
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
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
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
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  placeholder="+62 xxx xxxx xxxx"
                  className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-[#475569] focus:outline-none focus:border-cyan-400/50 focus:bg-white/[0.05] transition-all"
                />
              </div>

              {/* Budget & Floor - 2 col */}
              <div className="grid sm:grid-cols-2 gap-5">
                {/* Budget */}
                <div>
                  <label className="block text-sm text-[#94A3B8] mb-2 font-medium">
                    Budget Range
                  </label>
                  <select
                    required
                    value={formData.budget}
                    onChange={(e) =>
                      setFormData({ ...formData, budget: e.target.value })
                    }
                    className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white focus:outline-none focus:border-cyan-400/50 focus:bg-white/[0.05] transition-all appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="bg-[#1E293B]">
                      Select range
                    </option>
                    {budgetRanges.map((range) => (
                      <option
                        key={range}
                        value={range}
                        className="bg-[#1E293B]"
                      >
                        {range}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Floor Zone */}
                <div>
                  <label className="block text-sm text-[#94A3B8] mb-2 font-medium">
                    Preferred Floor Zone
                  </label>
                  <select
                    required
                    value={formData.zone}
                    onChange={(e) =>
                      setFormData({ ...formData, zone: e.target.value })
                    }
                    className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white focus:outline-none focus:border-cyan-400/50 focus:bg-white/[0.05] transition-all appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="bg-[#1E293B]">
                      Select zone
                    </option>
                    {floorZones.map((zone) => (
                      <option
                        key={zone}
                        value={zone}
                        className="bg-[#1E293B]"
                      >
                        {zone}
                      </option>
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
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-400 to-violet-600 flex items-center justify-center mx-auto mb-6">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
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
            </motion.div>
          )}
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-center gap-8 mt-8 text-[#475569] text-xs"
        >
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
        </motion.div>
      </div>
    </section>
  );
}
