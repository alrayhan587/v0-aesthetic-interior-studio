"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, Palette, FileText, Wrench, Handshake, LucideIcon } from "lucide-react"

interface ProcessStep {
  number: string
  title: string
  description: string
  icon: LucideIcon
  progress: number
}

const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We begin by understanding your needs, space, budget, and design preferences through an in-depth discovery session.",
    icon: MessageCircle,
    progress: 20,
  },
  {
    number: "02",
    title: "Concept & Design",
    description:
      "Our designers create thoughtful layouts, curated material selections, and immersive 3D visualizations.",
    icon: Palette,
    progress: 40,
  },
  {
    number: "03",
    title: "Detailed Planning",
    description: "We prepare comprehensive drawings, accurate cost estimates, and realistic project timelines.",
    icon: FileText,
    progress: 60,
  },
  {
    number: "04",
    title: "Execution",
    description:
      "Our expert team manages every detail—from production and installation to rigorous quality control.",
    icon: Wrench,
    progress: 90,
  },
  {
    number: "05",
    title: "Handover",
    description: "Your beautifully finished space is delivered, ready for you to live, work, and thrive in.",
    icon: Handshake,
    progress: 100,
  },
]

function FloatingOrb({ delay = 0, size = 80, x = 0, y = 0 }: { delay?: number; size?: number; x?: number; y?: number }) {
  return (
    <motion.div
      className="absolute rounded-full bg-[#a57c00]/10 blur-xl"
      style={{ width: size, height: size, left: `${x}%`, top: `${y}%` }}
      animate={{
        y: [0, -20, 0],
        x: [0, 10, 0],
        scale: [1, 1.1, 1],
        opacity: [0.3, 0.5, 0.3],
      }}
      transition={{
        duration: 6,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  )
}

function IconDisplay({ icon: Icon, isActive }: { icon: LucideIcon; isActive: boolean }) {
  return (
    <div className="relative w-full h-[280px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-cream to-cream-dark">
      {/* Floating orbs background */}
      <FloatingOrb delay={0} size={100} x={20} y={20} />
      <FloatingOrb delay={1} size={60} x={70} y={30} />
      <FloatingOrb delay={2} size={80} x={30} y={60} />
      <FloatingOrb delay={0.5} size={50} x={75} y={70} />

      {/* Decorative rings */}
      <motion.div
        className="absolute w-48 h-48 rounded-full border border-[#a57c00]/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute w-64 h-64 rounded-full border border-[#a57c00]/10"
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute w-80 h-80 rounded-full border border-[#a57c00]/5"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />

      {/* Icon container with glow effect */}
      <AnimatePresence mode="wait">
        <motion.div
          key={Icon.displayName}
          initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          exit={{ scale: 0.8, opacity: 0, rotate: 10 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative z-10"
        >
          {/* Glow behind icon */}
          <div className="absolute inset-0 blur-2xl bg-[#a57c00]/30 rounded-full scale-150" />

          {/* Icon background circle */}
          <motion.div
            className="relative w-32 h-32 rounded-full bg-card flex items-center justify-center shadow-xl"
            animate={{
              boxShadow: isActive
                ? "0 0 60px rgba(165, 124, 0, 0.3), 0 25px 50px -12px rgba(0, 0, 0, 0.15)"
                : "0 25px 50px -12px rgba(0, 0, 0, 0.1)",
            }}
            transition={{ duration: 0.5 }}
          >
            <Icon className="w-14 h-14 text-[#a57c00]" strokeWidth={1.5} />
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0)
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null)
  const progress = processSteps[activeStep].progress

  const handleHover = (index: number) => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current)
    hoverTimeout.current = setTimeout(() => setActiveStep(index), 150)
  }

  return (
    <section className="py-20 lg:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm uppercase tracking-widest text-[#a57c00]">How We Work</span>
          <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl leading-tight text-[#0d3d3d] text-balance">
            Our Design Process
          </h2>
          <div className="mt-4 w-16 h-0.5 bg-[#a57c00] mx-auto" />
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          {processSteps.map((step, index) => (
            <motion.button
              key={step.number}
              onMouseEnter={() => handleHover(index)}
              onClick={() => setActiveStep(index)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeStep === index
                ? "bg-[#0d3d3d] text-accent-foreground shadow-lg shadow-[#0d3d3d]/25"
                : "bg-card border border-border text-muted-foreground hover:border-[#0d3d3d] hover:text-[#0d3d3d]"
                }`}
            >
              {step.number}. {step.title}
            </motion.button>
          ))}
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="h-1.5 bg-muted rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#0d3d3d] to-[#1a5a5a] rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          </div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-xs text-muted-foreground">Start</span>
            <motion.span
              key={progress}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm font-medium text-gold"
            >
              {progress}% Complete
            </motion.span>
            <span className="text-xs text-muted-foreground">Finish</span>
          </div>
        </motion.div>

        {/* Center Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-2xl shadow-black/10 bg-card border border-border"
        >
          {/* Icon Display */}
          <IconDisplay icon={processSteps[activeStep].icon} isActive={true} />

          {/* Text Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="p-10 text-center"
            >
              <span className="font-serif text-gold text-3xl font-medium">
                {processSteps[activeStep].number}
              </span>
              <h3 className="mt-2 font-serif text-3xl md:text-4xl text-teal">
                {processSteps[activeStep].title}
              </h3>
              <p className="mt-5 text-muted-foreground leading-relaxed text-lg max-w-lg mx-auto">
                {processSteps[activeStep].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Step indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {processSteps.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveStep(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${activeStep === index
                ? "w-8 bg-[#0d3d3d]"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
