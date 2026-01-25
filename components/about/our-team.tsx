"use client"

import { useEffect, useRef, useState } from "react"
import { Linkedin, Twitter, Mail } from "lucide-react"

const teamMembers = [
  {
    name: "Sarah Ahmed",
    role: "Founder & Lead Designer",
    image: "/professional-interior-designer.png",
    specialty: "Luxury Residential",
    social: { linkedin: "#", twitter: "#", email: "#" },
  },
  {
    name: "Rafiq Hassan",
    role: "Senior Architect",
    image: "/professional-man-architect-portrait.jpg",
    specialty: "Commercial Spaces",
    social: { linkedin: "#", twitter: "#", email: "#" },
  },
  {
    name: "Nadia Khan",
    role: "Design Director",
    image: "/professional-woman-designer-portrait-smiling.jpg",
    specialty: "Color & Texture",
    social: { linkedin: "#", twitter: "#", email: "#" },
  },
  {
    name: "Imran Ali",
    role: "Project Manager",
    image: "/professional-man-project-manager-portrait.jpg",
    specialty: "Execution Excellence",
    social: { linkedin: "#", twitter: "#", email: "#" },
  },
]

export function OurTeam() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".team-card")
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("animate-in", "fade-in", "slide-in-from-bottom-4")
                card.classList.remove("opacity-0")
              }, index * 150)
            })
          }
        })
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-24 bg-[#f5f4f0]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#a57c00] text-sm tracking-[0.2em] uppercase font-medium mb-4">
            Meet The Experts
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-[#1a3a2f] mb-6 text-balance">
            Our Team
          </h2>
          <p className="text-[#4a4a4a] max-w-2xl mx-auto leading-relaxed text-pretty">
            A passionate team of designers, architects, and project managers dedicated to bringing your vision to
            life.
          </p>
        </div>

        {/* Team Grid */}
        <div ref={sectionRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="team-card opacity-0 group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image Container */}
              <div className="relative rounded-2xl overflow-hidden mb-6 aspect-square">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay with Social Links */}
                <div
                  className={`absolute inset-0 bg-[#1a3a2f]/80 flex items-center justify-center gap-3 transition-all duration-500 ${hoveredIndex === index ? "opacity-100" : "opacity-0"
                    }`}
                >
                  <a
                    href={member.social.linkedin}
                    className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-[#a57c00] transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4 text-white" />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-[#a57c00] transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-4 h-4 text-white" />
                  </a>
                  <a
                    href={member.social.email}
                    className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-[#a57c00] transition-colors"
                    aria-label="Email"
                  >
                    <Mail className="w-4 h-4 text-white" />
                  </a>
                </div>
              </div>

              {/* Info */}
              <div className="text-center">
                <h3 className="text-lg  text-[#1a3a2f] mb-1">{member.name}</h3>
                <p className="text-[#a57c00] text-sm font-medium mb-2">{member.role}</p>
                <p className="text-[#6a6a6a] text-sm">{member.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
