"use client"

import { useState } from "react"

const services = [
  {
    title: "Residential Interiors",
    description: "Complete home design solutions from living rooms to bedrooms.",
    image: "/modern-residential-living-room-interior-design.jpg",
  },
  {
    title: "Kitchen & Wardrobe Design",
    description: "Custom modular kitchens and storage solutions.",
    image: "/luxury-modular-kitchen-interior-with-island.jpg",
  },
  {
    title: "Office & Commercial Spaces",
    description: "Professional environments that inspire productivity.",
    image: "/modern-corporate-office-interior-design.jpg",
  },
  {
    title: "Renovation & Remodeling",
    description: "Transform existing spaces with modern updates.",
    image: "/home-renovation-before-after-modern-update.jpg",
  },
  {
    title: "Custom Furniture & Storage",
    description: "Bespoke pieces designed for your unique needs.",
    image: "/custom-bespoke-furniture-wooden-craftsmanship.jpg",
  },
  {
    title: "Color & Material Consultation",
    description: "Expert guidance on color palettes, textures, and finishes for cohesive design.",
    image: "/interior-design-color-palette-material-samples.jpg",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-card relative overflow-hidden">
      {/* Room sketch background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url('/interior-design-room-layout-sketch-pencil-drawing.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm uppercase tracking-widest text-muted-foreground">Our Services</span>
          <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl text-foreground text-balance">
            Interior solutions for every space
          </h2>
          <p className="mt-6 text-muted-foreground">
            Each project is designed to balance beauty, durability, and everyday use.
          </p>
        </div>
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service }: { service: (typeof services)[0] }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="bg-background border border-border hover:border-foreground/20 transition-all duration-300 group overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Service Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={service.image || "/placeholder.svg"}
          alt={service.title}
          className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? "scale-110" : "scale-100"}`}
        />
        <div
          className={`absolute inset-0 bg-foreground/20 transition-opacity duration-300 ${isHovered ? "opacity-0" : "opacity-100"}`}
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-medium text-lg text-foreground group-hover:text-primary transition-colors">
          {service.title}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{service.description}</p>
      </div>
    </div>
  )
}
