"use client"

import { useEffect, useRef } from "react"

const partners = [
  { name: "Bosch", logo: "/bosch-brand-logo-simple.jpg" },
  { name: "Hettich", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Hafele", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Blum", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Siemens", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Greenlam", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Kohler", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Asian Paints", logo: "/placeholder.svg?height=60&width=120" },
]

export function PartnersSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    let scrollPosition = 0
    const scrollSpeed = 0.5

    const animate = () => {
      scrollPosition += scrollSpeed
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }
      scrollContainer.scrollLeft = scrollPosition
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    // Pause on hover
    const handleMouseEnter = () => cancelAnimationFrame(animationId)
    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(animate)
    }

    scrollContainer.addEventListener("mouseenter", handleMouseEnter)
    scrollContainer.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      cancelAnimationFrame(animationId)
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter)
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <section className="py-16 lg:py-20 bg-card border-t border-border overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm uppercase tracking-widest text-muted-foreground">Our Brand Partners</span>
          <p className="mt-2 text-sm text-muted-foreground">
            We work with trusted brands and suppliers to ensure quality, durability, and timeless design.
          </p>
        </div>
      </div>

      {/* Auto-scrolling logo slider */}
      <div
        ref={scrollRef}
        className="mt-10 flex gap-12 overflow-hidden whitespace-nowrap"
        style={{ scrollBehavior: "auto" }}
      >
        {/* Duplicate logos for seamless infinite scroll */}
        {[...partners, ...partners].map((partner, index) => (
          <div
            key={`${partner.name}-${index}`}
            className="flex-shrink-0 flex items-center justify-center w-32 h-16 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
          >
            <img
              src={partner.logo || "/placeholder.svg"}
              alt={partner.name}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
