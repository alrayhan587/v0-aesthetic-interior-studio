"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight } from "lucide-react"

const services = [
  {
    id: 1,
    title: "Office Interiors",
    description: "Productive workspaces designed for collaboration, focus, and brand expression.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Retail Spaces",
    description: "Customer-focused environments that enhance brand identity and drive engagement.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Hospitality Design",
    description: "Hotels, restaurants, and lounges crafted for memorable guest experiences.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Co-Working Hubs",
    description: "Flexible, inspiring spaces designed for modern work culture and networking.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Corporate Fit-Outs",
    description: "End-to-end interior solutions for new builds and complete office renovations.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Space Planning",
    description: "Strategic layouts optimized for workflow, compliance, and spatial efficiency.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
]

export function ServicesSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section className="py-24 lg:py-32 bg-[#f9f7f4]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm uppercase tracking-[0.2em] text-[#a57c00] font-medium">
            What We Do
          </span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl text-[#0d3d3d] font-light">
            Commercial Interior{" "}
            <span className="italic text-[#a57c00]">Services</span>
          </h2>
          <p className="mt-6 text-[#0d3d3d]/60 max-w-2xl mx-auto text-lg leading-relaxed">
            Comprehensive design solutions tailored for businesses that value aesthetics, efficiency, and brand identity.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#0d3d3d]/10">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-[#f9f7f4] group"
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="p-8 lg:p-10 h-full flex flex-col transition-all duration-500 group-hover:bg-[#0d3d3d]">
                {/* Number */}
                <span className="text-xs tracking-[0.2em] text-[#a57c00] mb-6 transition-colors duration-500">
                  0{service.id}
                </span>

                {/* Icon */}
                <div className="mb-6 text-[#0d3d3d] group-hover:text-[#a57c00] transition-colors duration-500">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl lg:text-2xl text-[#0d3d3d] group-hover:text-white mb-4 transition-colors duration-500">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[#0d3d3d]/60 group-hover:text-white/70 text-sm leading-relaxed mb-6 flex-grow transition-colors duration-500">
                  {service.description}
                </p>

                {/* Link */}
                <div className="flex items-center gap-2 text-[#a57c00] text-sm font-medium">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    Learn More
                  </span>
                  <ArrowRight className="w-4 h-4 -translate-x-4 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                </div>

                {/* Bottom Border Accent */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#a57c00] group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-[#0d3d3d]/60 mb-6">
            {"Looking for a custom solution?"}
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#0d3d3d] text-white rounded-full hover:bg-[#0d3d3d]/90 transition-colors font-medium text-sm uppercase tracking-wider"
          >
            Discuss Your Project
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
