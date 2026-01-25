"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect } from "react"

export function AboutHero() {
  const { scrollY } = useScroll()
  const scale = useTransform(scrollY, [0, 800], [1, 1.5])

  useEffect(() => {
    const unsubscribe = scale.onChange((value) => console.log('Scale:', value))
    return unsubscribe
  }, [scale])

  return (
    <section className="relative overflow-hidden min-h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-30 bg-[url('/background/background10.jpg')]"
      />
      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 py-32 md:py-40 flex flex-col items-center justify-center text-center">
        {/* Accent line */}
        <div className="mb-8 flex items-center justify-center gap-3">
          <div className="h-px w-8" style={{ backgroundColor: '#a57c00' }}></div>
          <p className="text-[#a57c00] text-sm uppercase tracking-widest font-medium mb-4" style={{ color: '#0d3d3d' }}>
            About Us
          </p>
          <div className="h-px w-8" style={{ backgroundColor: '#a57c00' }}></div>
        </div>

        {/* Main Heading */}
        <h1
          className="text-5xl md:text-7xl lg:text-7xl font-serif font-light leading-tight mb-6"
          style={{ color: '#0d3d3d' }}
        >
          Built on Vision
          <br className="hidden sm:block" />
          <span style={{ color: '#a57c00' }}>Designed with Passion</span>
        </h1>

        {/* Description */}
        <p
          className="mt-6 text-lg md:text-xl max-w-2xl leading-relaxed font-light"
          style={{ color: '#0d3d3d' }}
        >
          We are a design-focused interior studio dedicated to creating functional and inspiring spaces that reflect each client's vision and lifestyle.
        </p>

        {/* CTA Button */}
        <button
          className="mt-10 px-8 py-3 font-medium text-sm uppercase tracking-wider transition-all hover:opacity-80"
          style={{
            backgroundColor: '#a57c00',
            color: '#f9f7f4'
          }}
        >
          Learn More
        </button>
      </div>
    </section>
  )
}