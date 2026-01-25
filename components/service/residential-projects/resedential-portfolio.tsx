"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform, useSpring, useInView, AnimatePresence } from "framer-motion"
import { MapPin, ArrowUpRight, X, ChevronLeft, ChevronRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Contemporary Living Space",
    category: "Living Room",
    location: "Mumbai, India",
    year: "2024",
    area: "450 sq ft",
    image: "/images/info1.jpg",
    description: "A harmonious blend of modern aesthetics with comfortable living",
  },
  {
    id: 2,
    title: "Luxury Entertainment Zone",
    category: "Living Room",
    location: "Delhi, India",
    year: "2024",
    area: "520 sq ft",
    image: "/images/info2.jpg",
    description: "Premium entertainment space with state-of-the-art design",
  },
  {
    id: 3,
    title: "Modern Textured Lounge",
    category: "Living Room",
    location: "Bangalore, India",
    year: "2023",
    area: "480 sq ft",
    image: "/images/info3.jpg",
    description: "Rich textures meet contemporary comfort",
  },
  {
    id: 4,
    title: "Elegant Crockery Display",
    category: "Kitchen",
    location: "Pune, India",
    year: "2024",
    area: "180 sq ft",
    image: "/images/info6.jpg",
    description: "Sophisticated storage meets artistic presentation",
  },
  {
    id: 5,
    title: "Grand Dining Experience",
    category: "Dining Room",
    location: "Chennai, India",
    year: "2024",
    area: "320 sq ft",
    image: "/images/info7.jpg",
    description: "Where family gatherings become memorable moments",
  },
  {
    id: 6,
    title: "Sophisticated Dining Suite",
    category: "Dining Room",
    location: "Hyderabad, India",
    year: "2023",
    area: "280 sq ft",
    image: "/images/info8.jpg",
    description: "Elegance in every detail, comfort in every seat",
  },
  {
    id: 7,
    title: "Open Living Concept",
    category: "Dining Room",
    location: "Kolkata, India",
    year: "2024",
    area: "600 sq ft",
    image: "/images/info11.jpg",
    description: "Seamless flow between dining and living spaces",
  },
  {
    id: 8,
    title: "Premium Family Lounge",
    category: "Living Room",
    location: "Ahmedabad, India",
    year: "2024",
    area: "550 sq ft",
    image: "/images/info12.jpg",
    description: "Designed for comfort, built for memories",
  },
  {
    id: 9,
    title: "Executive Living Area",
    category: "Living Room",
    location: "Jaipur, India",
    year: "2023",
    area: "500 sq ft",
    image: "/images/info13.jpg",
    description: "Sophisticated living for the discerning homeowner",
  },
]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: false, margin: "-20%" })

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3])
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1, 1.2])
  const rotate = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [index % 2 === 0 ? -3 : 3, 0, index % 2 === 0 ? 3 : -3]
  )

  const springY = useSpring(y, { stiffness: 100, damping: 30 })
  const springScale = useSpring(scale, { stiffness: 100, damping: 30 })
  const springRotate = useSpring(rotate, { stiffness: 100, damping: 30 })

  const isEven = index % 2 === 0

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity, scale: springScale }}
      className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"
        } gap-8 lg:gap-16 items-center py-16 lg:py-24`}
    >
      {/* Image Container */}
      <motion.div
        style={{ y: springY, rotateZ: springRotate }}
        className="relative w-full lg:w-3/5 aspect-[4/3] overflow-hidden group"
      >
        <motion.div
          style={{ scale: imageScale }}
          className="absolute inset-0"
        >
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 60vw"
          />
        </motion.div>

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-[#0d3d3d]/0 group-hover:bg-[#0d3d3d]/40 transition-all duration-500" />

        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-[#a57c00] opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
        <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-[#a57c00] opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />

        {/* Index Number */}
        <motion.div
          initial={{ opacity: 0, x: isEven ? -50 : 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className={`absolute ${isEven ? "-right-4 lg:-right-12" : "-left-4 lg:-left-12"
            } top-1/2 -translate-y-1/2`}
        >
          <span className="font-serif text-[120px] lg:text-[200px] text-[#a57c00]/10 leading-none select-none">
            {String(index + 1).padStart(2, "0")}
          </span>
        </motion.div>
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`w-full lg:w-2/5 ${isEven ? "lg:pl-8" : "lg:pr-8 lg:text-right"
          }`}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: 60 } : {}}
          transition={{ duration: 0.6 }}
          className={`h-[2px] bg-[#a57c00] mb-4 ${!isEven && "lg:ml-auto"
            }`}
        />

        <span className="text-[#a57c00] text-xs tracking-[0.3em] uppercase font-sans">
          {project.category}
        </span>

        <h3 className="font-serif text-3xl lg:text-4xl xl:text-5xl text-[#0d3d3d] mt-3 mb-4 leading-tight">
          {project.title}
        </h3>

        <p className="text-[#0d3d3d]/60 font-sans text-base lg:text-lg mb-6 leading-relaxed">
          {project.description}
        </p>

        <div
          className={`flex items-center gap-6 text-sm text-[#0d3d3d]/50 font-sans mb-8 ${!isEven && "lg:justify-end"
            }`}
        >
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>{project.location}</span>
          </div>
          <span>|</span>
          <span>{project.area}</span>
          <span>|</span>
          <span>{project.year}</span>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`group inline-flex items-center gap-3 px-6 py-3 bg-transparent border-2 border-[#0d3d3d] text-[#0d3d3d] hover:bg-[#0d3d3d] hover:text-white transition-all duration-300 font-sans text-sm tracking-wider uppercase rounded-full ${!isEven && "lg:ml-auto"
            }`}
        >
          View Project
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </motion.button>
      </motion.div>
    </motion.div>
  )
}

function HorizontalScrollSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"])
  const springX = useSpring(x, { stiffness: 100, damping: 30 })

  return (
    <>
      <div ref={containerRef} className="h-[300vh] relative">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <motion.div
            style={{ x: springX }}
            className="flex gap-8 pl-[10vw]"
          >
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="w-[80vw] md:w-[60vw] lg:w-[40vw] flex-shrink-0 group cursor-pointer"
                onClick={() => {
                  setLightboxIndex(idx)
                  setLightboxOpen(true)
                }}
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 80vw, (max-width: 1024px) 60vw, 40vw"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d3d3d]/90 via-[#0d3d3d]/20 to-transparent opacity-60 group-hover:opacity-90 transition-all duration-500" />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <span className="inline-block px-3 py-1 bg-[#a57c00] text-white text-xs tracking-widest uppercase font-sans mb-4 rounded-full">
                        {project.category}
                      </span>
                      <h3 className="font-serif text-2xl lg:text-3xl text-white mb-2 leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-white/70 font-sans text-sm mb-4 line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-white/50 font-sans text-sm">
                          {project.location}
                        </span>
                        <div className="w-10 h-10 border border-white/30 flex items-center justify-center group-hover:bg-[#a57c00] group-hover:border-[#a57c00] transition-all duration-300 rounded-full">
                          <ArrowUpRight className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Number */}
                  <div className="absolute top-6 left-6">
                    <span className="font-serif text-6xl text-white/10">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0d3d3d]/95 flex items-center justify-center"
            onClick={() => setLightboxOpen(false)}
          >
            <button
              className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center text-white/70 hover:text-white transition-colors z-10 rounded-full"
              onClick={() => setLightboxOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                setLightboxIndex((prev) => (prev - 1 + projects.length) % projects.length)
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/50 transition-all z-10 rounded-full"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                setLightboxIndex((prev) => (prev + 1) % projects.length)
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/50 transition-all z-10 rounded-full"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-[90vw] h-[80vh] max-w-6xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={projects[lightboxIndex].image || "/placeholder.svg"}
                alt={projects[lightboxIndex].title}
                fill
                className="object-contain"
                sizes="90vw"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="font-serif text-2xl text-white mb-2">
                  {projects[lightboxIndex].title}
                </h3>
                <p className="text-white/70 font-sans">
                  {projects[lightboxIndex].location} |{" "}
                  {projects[lightboxIndex].year}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export function ResidentialPortfolio() {
  const containerRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const isHeaderInView = useInView(headerRef, { once: true })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section ref={containerRef} className="relative bg-[#faf9f7]">
      {/* Progress Bar */}
      <motion.div
        style={{ width: progressWidth }}
        className="fixed top-0 left-0 h-1 bg-[#a57c00] z-50"
      />

      {/* Header */}
      <div
        ref={headerRef}
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, #0d3d3d 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative z-10 text-center px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isHeaderInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-24 h-[2px] bg-[#a57c00] mx-auto mb-8"
            />
            <span className="text-[#a57c00] text-sm tracking-[0.4em] uppercase font-sans">
              Portfolio
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#0d3d3d] mt-6 leading-[0.9]"
          >
            Completed
            <br />
            <span className="italic font-light text-[#a57c00]">
              Projects
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-sans text-[#0d3d3d]/60 text-lg md:text-xl max-w-xl mx-auto mt-8 leading-relaxed"
          >
            Explore our collection of meticulously crafted residential interiors,
            each telling a unique story of elegance and innovation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex justify-center gap-12 mt-12"
          >
            {[
              { value: "1000+", label: "Projects" },
              { value: "12+", label: "Years" },
              { value: "98%", label: "Satisfaction" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <span className="font-serif text-4xl md:text-5xl text-[#0d3d3d]">
                  {stat.value}
                </span>
                <p className="text-sm text-[#0d3d3d]/50 font-sans mt-2 tracking-wider uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isHeaderInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 border-2 border-[#0d3d3d]/30 rounded-full flex justify-center pt-2"
            >
              <motion.div className="w-1.5 h-1.5 bg-[#a57c00] rounded-full" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Horizontal Scroll Gallery */}
      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#faf9f7] to-transparent z-10" />
        <HorizontalScrollSection />
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#faf9f7] to-transparent z-10" />
      </div>

      {/* Alternating Project Cards */}
      <div className="relative px-6 md:px-12 lg:px-20 py-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#a57c00] text-sm tracking-[0.3em] uppercase font-sans">
              Detailed View
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#0d3d3d] mt-4">
              Project Showcase
            </h2>
            <div className="w-20 h-[2px] bg-[#a57c00] mx-auto mt-6" />
          </motion.div>

          {projects.slice(0, 5).map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="relative py-24 bg-[#0d3d3d] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, #a57c00 1px, transparent 0)",
              backgroundSize: "30px 30px",
            }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 text-center px-6"
        >
          <span className="text-[#a57c00] text-sm tracking-[0.3em] uppercase font-sans">
            Start Your Journey
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mt-4 mb-6">
            Ready to Transform
            <br />
            <span className="italic font-light">Your Space?</span>
          </h2>
          <p className="text-white/60 font-sans text-lg max-w-xl mx-auto mb-10">
            Let us create a living space that reflects your unique style and
            elevates your everyday living.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#a57c00] text-white font-sans text-sm tracking-wider uppercase hover:bg-[#8a6700] transition-colors rounded-full"
          >
            Get In Touch
            <ArrowUpRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default ResidentialPortfolio
