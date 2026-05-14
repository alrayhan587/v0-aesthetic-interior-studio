"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

const heroSlides = [
  {
    image: "/banner/Banner1.png",
    title: "Designing Spaces That Tell Your Story",
    subtitle: "Elevate your interior with timeless design and elegant aesthetics.",
  },
  {
    image: "/banner/Banner2.png",
    title: "Where Elegance Meets Functionality",
    subtitle: "Transform your vision into beautiful, livable spaces.",
  },
  {
    image: "/banner/Banner3.png",
    title: "Modern Design for Contemporary Living",
    subtitle: "Create environments that inspire and comfort.",
  },
  {
    image: "/banner/Banner4.png",
    title: "Modern Design for Contemporary Living",
    subtitle: "Create environments that inspire and comfort.",
  },
  {
    image: "/banner/Banner5.png",
    title: "Crafted Interiors with Lasting Impressions",
    subtitle: "Bring beauty, comfort, and purpose into every corner of your space.",
  },
]

export function HomeHeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [showSiteTitle, setShowSiteTitle] = useState(false)
  const sectionRef = useRef<HTMLElement | null>(null)
  const siteTitleTimeout = useRef<number | null>(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowSiteTitle(true)
            if (siteTitleTimeout.current) {
              window.clearTimeout(siteTitleTimeout.current)
            }
            siteTitleTimeout.current = window.setTimeout(() => {
              setShowSiteTitle(false)
              siteTitleTimeout.current = null
            }, 5000)
          }
        })
      },
      { threshold: 0.2 }
    )

    observer.observe(el)
    return () => {
      observer.disconnect()
      if (siteTitleTimeout.current) {
        window.clearTimeout(siteTitleTimeout.current)
        siteTitleTimeout.current = null
      }
    }
  }, [])

  const goToSlide = (index: number) => setCurrentSlide(index)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  const activeSlide = heroSlides[currentSlide]

  return (
    <section ref={sectionRef} className="relative min-h-screen w-full overflow-hidden pt-20">
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-[1400ms] ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            className={`h-full w-full object-cover transition-transform duration-[7000ms] ${
              index === currentSlide ? "scale-105" : "scale-100"
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/35" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(165,124,0,0.25),transparent_42%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.15),transparent_45%)]" />
        </div>
      ))}

      <div className="relative z-10 flex min-h-[calc(100vh-5rem)] items-end lg:items-center">
        <div className="mx-auto grid w-full max-w-7xl gap-14 px-6 pb-12 pt-24 lg:grid-cols-[1fr_auto] lg:gap-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <div className="mb-7 flex items-center gap-3">
              <div className="h-px w-12 bg-[#c89f2f]/80" />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={showSiteTitle ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
                className="text-xs font-medium uppercase tracking-[0.28em] text-white/90 sm:text-sm"
              >
                Aesthetic Interior Studio
              </motion.p>
            </div>

            <motion.h1
              key={`title-${currentSlide}`}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="max-w-2xl font-serif text-4xl font-light leading-[1.12] text-white sm:text-5xl lg:text-7xl"
            >
              {activeSlide.title}
            </motion.h1>
            <motion.p
              key={`subtitle-${currentSlide}`}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg lg:text-xl"
            >
              {activeSlide.subtitle}
            </motion.p>

            <motion.div
              key={`cta-${currentSlide}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <Link
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#a57c00] px-8 py-4 font-medium text-white transition-all duration-300 hover:bg-[#c99a00]"
              >
                Explore Services
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/60 bg-white/5 px-8 py-4 font-medium text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-[#0d3d3d]"
              >
                Get Consultation
              </Link>
            </motion.div>

            <div className="mt-10 grid max-w-2xl grid-cols-3 gap-5 rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-md">
              <div>
                <p className="font-serif text-2xl text-white sm:text-3xl">1000+</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-white/75 sm:text-sm">Projects Delivered</p>
              </div>
              <div>
                <p className="font-serif text-2xl text-white sm:text-3xl">10+</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-white/75 sm:text-sm">Years of Experience</p>
              </div>
              <div>
                <p className="font-serif text-2xl text-white sm:text-3xl">4.9/5</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-white/75 sm:text-sm">Client Satisfaction</p>
              </div>
            </div>
          </div>

          <div className="mx-auto w-full max-w-sm self-end lg:mx-0 lg:self-center">
            <div className="rounded-3xl border border-white/20 bg-black/25 p-5 backdrop-blur-xl">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.22em] text-white/80">Featured Spaces</p>
                <p className="text-sm text-white/85">
                  {String(currentSlide + 1).padStart(2, "0")} / {String(heroSlides.length).padStart(2, "0")}
                </p>
              </div>
              <div className="space-y-3">
                {heroSlides.map((slide, index) => (
                  <button
                    key={slide.image}
                    onClick={() => goToSlide(index)}
                    className="group w-full text-left"
                    aria-label={`Go to slide ${index + 1}`}
                  >
                    <p
                      className={`text-sm transition-colors ${
                        currentSlide === index ? "text-white" : "text-white/60 group-hover:text-white/80"
                      }`}
                    >
                      {slide.title}
                    </p>
                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/20">
                      {currentSlide === index ? (
                        <motion.div
                          key={`progress-${currentSlide}`}
                          className="h-full rounded-full bg-[#c89f2f]"
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 5, ease: "linear" }}
                        />
                      ) : (
                        <div className={`h-full rounded-full ${currentSlide > index ? "w-full bg-white/60" : "w-0"}`} />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/35 bg-white/15 backdrop-blur-md transition-colors hover:bg-[#a57c00] lg:left-8"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/35 bg-white/15 backdrop-blur-md transition-colors hover:bg-[#a57c00] lg:right-8"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-3 lg:bottom-8">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === currentSlide ? "w-8 bg-[#c89f2f]" : "w-2.5 bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
