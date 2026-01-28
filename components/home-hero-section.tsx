"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"

const heroSlides = [
  {
    image: "/hero/hero-1.jpg",
    title: "Designing Spaces That Tell Your Story",
    subtitle: "Elevate your interior with timeless design and elegant aesthetics.",
  },
  {
    image: "/hero/hero-2.jpg",
    title: "Where Elegance Meets Functionality",
    subtitle: "Transform your vision into beautiful, livable spaces.",
  },
  {
    image: "/hero/hero-3.jpg",
    title: "Modern Design for Contemporary Living",
    subtitle: "Create environments that inspire and comfort.",
  },
]

export function HomeHeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index: number) => setCurrentSlide(index)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)

  return (
    <section className="relative h-screen w-full overflow-hidden pt-20">
      {/* Background Carousel */}
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img 
            src={slide.image || "/placeholder.svg"} 
            alt={slide.title} 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 w-full text-center">
          <div className="max-w-3xl mx-auto">
            {heroSlides.map((slide, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                {index === currentSlide && (
                  <>
                    <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight text-balance">
                      {slide.title}
                    </h1>
                    <p className="mt-6 text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
                      {slide.subtitle}
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                      <Link
                        href="#services"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#a57c00] text-white rounded-full hover:bg-[#c99a00] transition-colors font-medium"
                      >
                        Explore Services
                        <ArrowRight className="h-5 w-5" />
                      </Link>
                      <Link
                        href="#contact"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white hover:text-[#0d3d3d] transition-colors font-medium"
                      >
                        Get Consultation
                      </Link>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full flex items-center justify-center bg-white/20 hover:bg-[#a57c00] backdrop-blur-sm transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full flex items-center justify-center bg-white/20 hover:bg-[#a57c00] backdrop-blur-sm transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === currentSlide ? "w-8 bg-[#a57c00]" : "w-2.5 bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
