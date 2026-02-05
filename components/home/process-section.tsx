"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { MessageCircle, Palette, FileText, Wrench, Handshake, LucideIcon } from "lucide-react"
import { useRouter } from "next/navigation"


interface ProcessStep {
  number: string
  title: string
  description: string
  icon: LucideIcon
}

const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We begin by understanding your needs, space, budget, and design preferences through an in-depth discovery session.",
    icon: MessageCircle,
  },
  {
    number: "02",
    title: "Concept & Design",
    description:
      "Our designers create thoughtful layouts, curated material selections, and immersive 3D visualizations.",
    icon: Palette,
  },
  {
    number: "03",
    title: "Detailed Planning",
    description: "We prepare comprehensive drawings, accurate cost estimates, and realistic project timelines.",
    icon: FileText,
  },
  {
    number: "04",
    title: "Execution",
    description:
      "Our expert team manages every detail—from production and installation to rigorous quality control.",
    icon: Wrench,
  },
  {
    number: "05",
    title: "Handover",
    description: "Your beautifully finished space is delivered, ready for you to live, work, and thrive in.",
    icon: Handshake,
  },
]

function TimelineStep({ step, index, isLast }: { step: ProcessStep; index: number; isLast: boolean }) {
  const stepRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(stepRef, { once: false, margin: "-100px" })
  
  const isEven = index % 2 === 0

  return (
    <div ref={stepRef} className="relative">
      {/* Mobile Layout */}
      <div className="lg:hidden flex gap-6">
        {/* Timeline Line & Node */}
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative z-10 w-16 h-16 rounded-full bg-white border-2 border-[#a57c00] flex items-center justify-center shadow-lg"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="text-[#a57c00]"
            >
              <step.icon className="w-6 h-6" strokeWidth={1.5} />
            </motion.div>
          </motion.div>
          {!isLast && (
            <motion.div
              initial={{ height: 0 }}
              animate={isInView ? { height: "100%" } : { height: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-0.5 bg-gradient-to-b from-[#a57c00] to-[#a57c00]/20 flex-1 min-h-[80px]"
            />
          )}
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex-1 pb-12"
        >
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#0d3d3d]/5 hover:shadow-lg hover:border-[#a57c00]/20 transition-all duration-300">
            <span className="text-[#a57c00] font-serif text-4xl opacity-20">{step.number}</span>
            <h3 className="text-xl font-serif text-[#0d3d3d] mt-2 mb-3">{step.title}</h3>
            <p className="text-[#0d3d3d]/60 leading-relaxed text-sm">{step.description}</p>
          </div>
        </motion.div>
      </div>

      {/* Desktop Layout - Alternating Sides */}
      <div className="hidden lg:grid lg:grid-cols-[1fr_auto_1fr] gap-8 items-start">
        {/* Left Content */}
        <div className={`${isEven ? 'text-right' : ''}`}>
          {isEven && (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-[#0d3d3d]/5 hover:shadow-xl hover:border-[#a57c00]/30 transition-all duration-500 group"
            >
              <motion.span 
                className="text-[#a57c00] font-serif text-6xl opacity-10 group-hover:opacity-30 transition-opacity"
              >
                {step.number}
              </motion.span>
              <h3 className="text-2xl font-serif text-[#0d3d3d] mt-2 mb-4 group-hover:text-[#a57c00] transition-colors">
                {step.title}
              </h3>
              <p className="text-[#0d3d3d]/60 leading-relaxed">{step.description}</p>
              
              {/* Decorative Line */}
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: 60 } : { width: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="h-0.5 bg-[#a57c00] mt-6 ml-auto"
              />
            </motion.div>
          )}
        </div>

        {/* Center Timeline */}
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative z-10"
          >
            {/* Outer Ring Animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isInView ? { scale: [0.8, 1.2, 1], opacity: [0, 0.5, 0] } : {}}
              transition={{ duration: 1, delay: 0.3, repeat: isInView ? Infinity : 0, repeatDelay: 2 }}
              className="absolute inset-0 rounded-full border-2 border-[#a57c00]"
            />
            
            <div className="w-20 h-20 rounded-full bg-white border-2 border-[#a57c00] flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 cursor-pointer group">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-[#a57c00] group-hover:text-[#c99a00] transition-colors"
              >
                <step.icon className="w-6 h-6" strokeWidth={1.5} />
              </motion.div>
            </div>
          </motion.div>
          
          {!isLast && (
            <motion.div
              initial={{ height: 0 }}
              animate={isInView ? { height: 120 } : { height: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-0.5 bg-gradient-to-b from-[#a57c00] to-[#a57c00]/20 mt-4"
            />
          )}
        </div>

        {/* Right Content */}
        <div className={`${!isEven ? '' : ''}`}>
          {!isEven && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-[#0d3d3d]/5 hover:shadow-xl hover:border-[#a57c00]/30 transition-all duration-500 group"
            >
              <motion.span 
                className="text-[#a57c00] font-serif text-6xl opacity-10 group-hover:opacity-30 transition-opacity"
              >
                {step.number}
              </motion.span>
              <h3 className="text-2xl font-serif text-[#0d3d3d] mt-2 mb-4 group-hover:text-[#a57c00] transition-colors">
                {step.title}
              </h3>
              <p className="text-[#0d3d3d]/60 leading-relaxed">{step.description}</p>
              
              {/* Decorative Line */}
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: 60 } : { width: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="h-0.5 bg-[#a57c00] mt-6"
              />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}

export function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const isHeaderInView = useInView(headerRef, { once: true })
  const router = useRouter()

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])

  return (
    <section ref={containerRef} className="py-24 lg:py-32 bg-card relative overflow-hidden">
      {/* Background Pattern */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 opacity-[0.02]"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #0d3d3d 1px, transparent 0)",
            backgroundSize: "50px 50px",
          }}
        />
      </motion.div>

      <div className="mx-auto max-w-6xl px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <motion.div 
                initial={{ width: 0 }}
                animate={isHeaderInView ? { width: 32 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="h-px bg-[#a57c00]" 
              />
              <p className="text-[#0d3d3d] text-sm uppercase tracking-widest font-medium">
                How We Work
              </p>
              <motion.div 
                initial={{ width: 0 }}
                animate={isHeaderInView ? { width: 32 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="h-px bg-[#a57c00]" 
              />
            </div>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-[#0d3d3d] mb-6"
          >
            Our Design
            <br />
            <span className="italic text-[#a57c00]">Process</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[#0d3d3d]/60 max-w-2xl mx-auto leading-relaxed text-lg"
          >
            A structured approach to transforming spaces, from initial concept to final execution.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line - Desktop Only (Behind content) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#a57c00]/10 -translate-x-1/2" />

          <div className="space-y-8 lg:space-y-0">
            {processSteps.map((step, index) => (
              <TimelineStep 
                key={index} 
                step={step} 
                index={index} 
                isLast={index === processSteps.length - 1} 
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className="text-[#0d3d3d]/60 mb-6">Ready to start your project?</p>
          <motion.button
          onClick={()=> router.push('/how-we-work')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#0d3d3d] text-white rounded-full hover:bg-[#0d3d3d]/90 transition-colors font-medium"
          >
            Start Your Journey
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
