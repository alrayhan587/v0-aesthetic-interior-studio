'use client'

import { motion } from 'framer-motion'

export function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-[#0d3d3d]">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        {/* Section Tag */}
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-[#a57c00] text-sm uppercase tracking-widest font-medium mb-4"
        >
          Ready to Transform Your Space?
        </motion.p>

        {/* Main Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-white mb-6 text-balance"
        >
          Let's Design Your Perfect Home
        </motion.h2>

        {/* Subtext */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-white/75 font-light leading-relaxed mb-10 max-w-2xl mx-auto"
        >
          Whether you're starting from scratch or reimagining an existing space, our team is ready to bring your vision to life. Let's create a home that tells your story.
        </motion.p>

        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#a57c00] text-white px-8 py-3 rounded-full font-medium hover:bg-[#c99a00] transition-colors shadow-lg"
          >
            Book a Consultation
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-[#a57c00] text-[#a57c00] px-8 py-3 rounded-full font-medium hover:bg-[#a57c00] hover:text-white transition-colors"
          >
            View Our Portfolio
          </motion.button>
        </motion.div>

        {/* Contact Info */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12 pt-12 border-t border-white/20"
        >
          <p className="text-white/60 text-sm mb-4">Have questions? Get in touch</p>
          <div className="space-y-2">
            <motion.p 
              whileHover={{ color: '#a57c00' }}
              className="text-white font-medium cursor-pointer transition-colors"
            >
              hello@aestheticinterior.com
            </motion.p>
            <motion.p 
              whileHover={{ color: '#a57c00' }}
              className="text-white/70 cursor-pointer transition-colors"
            >
              +1 (555) 123-4567
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
