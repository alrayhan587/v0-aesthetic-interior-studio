"use client"

import { Quote } from "lucide-react"
import { useEffect, useRef } from "react"

const testimonials = [
  {
    quote:
      "Working with the team was smooth and professional. They understood our needs and delivered exactly what we imagined.",
    author: "Sarah Rahman",
    project: "Home Renovation",
    image: "/p1.jpg",
  },
  {
    quote:
      "Our home now feels calm, modern, and beautifully designed. We loved the experience from start to finish.",
    author: "Michael Ahmed",
    project: "Apartment Interior",
    image: "/p2.jpg",
  },
  {
    quote: "Design and execution were seamless. Highly recommended!",
    author: "Emma Chowdhury",
    project: "Office Space",
    image: "/p3.jpg",
  },
  {
    quote:
      "They transformed our space into something timeless and elegant. Every detail was thoughtfully planned.",
    author: "David Hossain",
    project: "Luxury Living Room",
    image: "/p4.jpg",
  },
  {
    quote:
      "From concept to completion, the process was stress-free and transparent. Truly professional work.",
    author: "Nadia Karim",
    project: "Full Home Interior",
    image: "/p5.jpg",
  },
  {
    quote:
      "The design perfectly reflects our lifestyle. The balance between aesthetics and functionality is impressive.",
    author: "Arif & Sultana Islam",
    project: "Modern Apartment",
    image: "/p6.jpg",
  },
  {
    quote:
      "Attention to detail and quality materials made all the difference. The final result exceeded expectations.",
    author: "Jonathan Rahman",
    project: "Kitchen Remodeling",
    image: "/p7.jpg",
  },
  {
    quote:
      "Minimal, warm, and elegant—exactly what we wanted. Communication throughout the project was excellent.",
    author: "Farhana Akter",
    project: "Bedroom Interior",
    image: "/p8.jpg",
  },
  {
    quote:
      "Their team understands space planning extremely well. Every corner feels purposeful and refined.",
    author: "Rohan Mahmud",
    project: "Studio Apartment",
    image: "/p9.jpg",
  },
  {
    quote:
      "Professional execution with a strong design vision. We felt confident at every stage of the project.",
    author: "Ayesha Khan",
    project: "Commercial Interior",
    image: "/p10.jpg",
  },
  {
    quote:
      "The final outcome feels luxurious yet comfortable. We receive compliments from every visitor.",
    author: "Tanvir Ahmed",
    project: "Villa Interior",
    image: "/p11.jpg",
  },
  {
    quote:
      "Creative, reliable, and detail-oriented. The space feels both modern and timeless.",
    author: "Nafisa Rahman",
    project: "Dining Area Design",
    image: "/p12.jpg",
  },
]
export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const speedRef = useRef(0.5) // normal speed

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    let scrollPosition = 0
    let animationId: number

    const animate = () => {
      scrollPosition += speedRef.current

      if (scrollPosition >= container.scrollWidth / 2) {
        scrollPosition = 0
      }

      container.scrollLeft = scrollPosition
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    const handleMouseEnter = () => {
      speedRef.current = 0.15 // slow on hover
    }

    const handleMouseLeave = () => {
      speedRef.current = 0.5 // back to normal
    }

    container.addEventListener("mouseenter", handleMouseEnter)
    container.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      cancelAnimationFrame(animationId)
      container.removeEventListener("mouseenter", handleMouseEnter)
      container.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <section className="py-20 lg:py-32 bg-card border-t border-border overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-12 text-center">
        <span className="text-sm uppercase tracking-widest text-[#a57c00]">
          Testimonials
        </span>
        <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl text-[#0d3d3d]">
          What our clients say
        </h2>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-8 overflow-hidden px-6 lg:px-8"
      >
        {[...testimonials, ...testimonials].map((t, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-80 md:w-96 p-6 bg-white/90 backdrop-blur-md rounded-lg shadow-lg text-center"
          >
            <img
              src={t.image}
              alt={t.author}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />

            <Quote className="h-6 w-6 text-[#a57c00]/40 mx-auto mb-4" />

            <p className="italic text-gray-700 text-base leading-relaxed break-words">
              “{t.quote}”
            </p>

            <div className="mt-4 pt-4 border-t border-border">
              <span className="font-medium text-[#0d3d3d]">{t.author}</span>
              <span className="block text-sm text-gray-500 mt-1">
                {t.project}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}