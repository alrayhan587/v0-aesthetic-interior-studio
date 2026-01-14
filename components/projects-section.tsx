"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const projects = [
  {
    title: "Modern Apartment",
    category: "Residential",
    image: "/modern-apartment-living-room-minimalist-interior.jpg",
    size: "large",
  },
  {
    title: "Custom Kitchen",
    category: "Kitchen Design",
    image: "/luxury-custom-kitchen-marble-countertop-pendant-li.jpg",
    size: "small",
  },
  {
    title: "Corporate Office",
    category: "Commercial",
    image: "/modern-corporate-office-glass-partitions.jpg",
    size: "small",
  },
  {
    title: "Luxury Penthouse",
    category: "Residential",
    image: "/luxury-penthouse-interior-design-skyline-view.jpg",
    size: "large",
  },
  {
    title: "Boutique Hotel Lobby",
    category: "Hospitality",
    image: "/boutique-hotel-lobby-elegant-interior-design.jpg",
    size: "small",
  },
  {
    title: "Master Bedroom Suite",
    category: "Residential",
    image: "/master-bedroom-suite-luxury-neutral-tones.jpg",
    size: "small",
  },
  {
    title: "Restaurant Interior",
    category: "Hospitality",
    image: "/fine-dining-restaurant-interior-warm-lighting.jpg",
    size: "small",
  },
  {
    title: "Spa & Wellness Center",
    category: "Commercial",
    image: "/spa-wellness-center-interior-zen-design.jpg",
    size: "small",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 lg:py-32 bg-card">
      {/* Header */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="text-sm uppercase tracking-widest text-muted-foreground">Our Projects</span>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl text-foreground text-balance">
              A selection of our recent work
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl">
              From modern apartments to custom kitchens and office interiors, our projects reflect a balance of clean
              design, practical layouts, and refined materials.
            </p>
          </div>
          <Button
            variant="outline"
            className="rounded-none px-6 border-foreground text-foreground hover:bg-foreground hover:text-background w-fit bg-transparent"
          >
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="w-full">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`relative cursor-pointer overflow-hidden ${project.size === "large" ? "md:col-span-2 md:row-span-2" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-square">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? "scale-110" : "scale-100"}`}
        />

        {/* Hover overlay with text */}
        <div
          className={`absolute inset-0 bg-foreground/70 flex flex-col items-center justify-center transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
        >
          <span className="text-xs uppercase tracking-widest text-white/70 mb-2">{project.category}</span>
          <h3 className="font-serif text-xl md:text-2xl text-white text-center px-4">{project.title}</h3>
          <div className={`mt-4 w-12 h-[1px] bg-white transition-all duration-500 ${isHovered ? "w-20" : "w-0"}`} />
        </div>
      </div>
    </div>
  )
}
