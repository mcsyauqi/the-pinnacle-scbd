"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  {
    src: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    title: "Exterior Facade",
    subtitle: "Parametric glass design",
    span: "col-span-2 row-span-2",
    height: "h-[400px] sm:h-[500px]",
  },
  {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
    title: "Penthouse Living",
    subtitle: "Sky-level luxury",
    span: "col-span-1 row-span-1",
    height: "h-[240px]",
  },
  {
    src: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=600&q=80",
    title: "Infinity Pool",
    subtitle: "45th floor oasis",
    span: "col-span-1 row-span-1",
    height: "h-[240px]",
  },
  {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    title: "Grand Lobby",
    subtitle: "First impressions matter",
    span: "col-span-1 row-span-1",
    height: "h-[240px]",
  },
  {
    src: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80",
    title: "City Skyline",
    subtitle: "Panoramic Jakarta views",
    span: "col-span-2 row-span-1",
    height: "h-[240px]",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-24 sm:py-32 px-4">
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
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={image.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${
                index === 0 ? "sm:col-span-2 sm:row-span-2" : ""
              } ${index === 4 ? "sm:col-span-2" : ""}`}
            >
              <div
                className={`relative ${
                  index === 0
                    ? "h-[300px] sm:h-[500px]"
                    : "h-[240px] sm:h-[240px]"
                } w-full`}
              >
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes={
                    index === 0
                      ? "(max-width: 768px) 100vw, 66vw"
                      : "(max-width: 768px) 100vw, 33vw"
                  }
                />

                {/* Glass overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                {/* Content overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    <h3
                      className="text-lg font-bold text-white mb-1"
                      style={{ fontFamily: "var(--font-space-grotesk)" }}
                    >
                      {image.title}
                    </h3>
                    <p className="text-sm text-[#94A3B8]">{image.subtitle}</p>
                  </motion.div>
                </div>

                {/* Glass border on hover */}
                <div className="absolute inset-0 rounded-2xl border border-white/0 group-hover:border-white/10 transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
