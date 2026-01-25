'use client'

import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-30 bg-[url('/background/realBackground6.jpg')]"
      />
      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 py-32 md:py-40 flex flex-col items-center justify-center text-center">
        {/* Accent line */}
        <div className="mb-8 flex items-center justify-center gap-3">
          <div className="h-px w-8" style={{ backgroundColor: '#a57c00' }}></div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#a57c00] text-sm uppercase tracking-widest font-medium mb-4"
            style={{ color: '#0d3d3d' }}
          >
            Residential Interior Design
          </motion.p>
          <div className="h-px w-8" style={{ backgroundColor: '#a57c00' }}></div>
        </div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-7xl font-serif font-light leading-tight mb-6"
          style={{ color: '#0d3d3d' }}
        >
          Designed for Living
          <br className="hidden sm:block" />
          <span style={{ color: '#a57c00' }}>Crafted for Comfort.</span>
        </motion.h1>

        {/* Sub-text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl max-w-2xl leading-relaxed font-light"
          style={{ color: '#0d3d3d' }}
        >
         We design refined residential interiors that balance beauty, function, and everyday living.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 rounded-2xl"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 font-medium text-sm uppercase rounded-2xl tracking-wider transition-all hover:opacity-80"
            style={{
              backgroundColor: '#a57c00',
              color: '#f9f7f4'
            }}
          >
            Explore Our Work
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
