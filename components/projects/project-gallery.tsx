"use client"

import { useState } from "react"
import { ProjectFilter } from "./project-filter"
import { ProjectCard } from "./project-card"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Modern Living Room",
    category: "residential",
    location: "Dhaka, Bangladesh",
    image: "/images/info1.jpg",
    description:
      "A stunning living room with marble TV panel, floating media unit, crystal chandelier, and elegant display shelves with gold accents.",
  },
  {
    id: 2,
    title: "Modern Dining Space",
    category: "residential",
    location: "Chittagong, Bangladesh",
    image: "/images/info11.jpg",
    description:
      "An elegant dining room featuring marble table, leather chairs, and textured wall panels with ambient LED lighting.",
  },
  {
    id: 3,
    title: "Spacious Living Area",
    category: "residential",
    location: "Sylhet, Bangladesh",
    image: "/images/info12.jpg",
    description:
      "A grand living space with marble feature wall, large TV, cream sectional sofa, and designer crystal chandeliers.",
  },
  {
    id: 4,
    title: "Family Living Room",
    category: "residential",
    location: "Rajshahi, Bangladesh",
    image: "/images/info13.jpg",
    description:
      "A comfortable family living area with marble TV wall, modern sectional sofa, and elegant display shelving.",
  },
  {
    id: 5,
    title: "Walk-in Wardrobe",
    category: "furniture",
    location: "Khulna, Bangladesh",
    image: "/images/info15.jpg",
    description: "An open walk-in closet system with glass doors, wood shelving, and elegant LED accent lighting.",
  },
  {
    id: 6,
    title: "Luxury Dining Room",
    category: "residential",
    location: "Dhaka, Bangladesh",
    image: "/images/info16.jpg",
    description:
      "A sophisticated dining space with black glass cabinets, marble dining table, cream chairs, and wine display.",
  },
  {
    id: 7,
    title: "Sculptural Display",
    category: "furniture",
    location: "Comilla, Bangladesh",
    image: "/images/info17.jpg",
    description:
      "An artistic display area featuring angel wing sculpture against marble backdrop with floating grey shelf.",
  },
  {
    id: 8,
    title: "Contemporary Lounge",
    category: "residential",
    location: "Gazipur, Bangladesh",
    image: "/images/info18.jpg",
    description:
      "A modern lounge with grey modular sofa, tan accent chair, round coffee table, and built-in storage cabinets.",
  },
  {
    id: 9,
    title: "Elegant Entry Display",
    category: "furniture",
    location: "Narayanganj, Bangladesh",
    image: "/images/info19.jpg",
    description:
      "A stunning entryway display with sculptural art piece, marble feature wall, and contemporary decor elements.",
  },
  {
    id: 10,
    title: "Luxurious Master Bedroom",
    category: "residential",
    location: "Mymensingh, Bangladesh",
    image: "/images/info20.jpg",
    description:
      "A sophisticated bedroom with upholstered bed, built-in wardrobe with glass doors, and marble flooring.",
  },
  {
    id: 11,
    title: "Modern Dining Corner",
    category: "renovation",
    location: "Rangpur, Bangladesh",
    image: "/images/info21.jpg",
    description:
      "An elegant dining area with marble accent wall, sideboard cabinet, gold floor mirror, and warm wood flooring.",
  },
  {
    id: 12,
    title: "Designer Closet System",
    category: "furniture",
    location: "Bogra, Bangladesh",
    image: "/images/info22.jpg",
    description:
      "A premium walk-in closet with glass display doors, wood shelving, and integrated LED lighting throughout.",
  },
  {
    id: 13,
    title: "Serene Retreat",
    category: "residential",
    location: "Barisal, Bangladesh",
    image: "/images/info23.jpg",
    description:
      "A calm bedroom with dark headboard, ambient backlighting, and a cozy green accent chair by large windows.",
  },
  {
    id: 14,
    title: "Minimalist Console Unit",
    category: "furniture",
    location: "Jessore, Bangladesh",
    image: "/images/info24.jpg",
    description:
      "A floating console in burgundy and taupe tones with illuminated shelving and contemporary art display.",
  },
  {
    id: 15,
    title: "Contemporary Bedroom",
    category: "renovation",
    location: "Dinajpur, Bangladesh",
    image: "/images/info25.jpg",
    description: "A modern bedroom renovation featuring black glass wardrobe doors and decorative illuminated mirror.",
  },
  {
    id: 16,
    title: "Traditional Dining Room",
    category: "residential",
    location: "Cox's Bazar, Bangladesh",
    image: "/images/info8.jpg",
    description:
      "A classic dining space with ornate table cloth, leather chairs, mirror accent wall, and black glass cabinets.",
  },
]

const INITIAL_DISPLAY_COUNT = 6

export function ProjectGallery() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [showAll, setShowAll] = useState(false)

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, INITIAL_DISPLAY_COUNT)
  const hasMoreProjects = filteredProjects.length > INITIAL_DISPLAY_COUNT

  return (
    <section className="py-16 md:py-24 bg-[#faf9f6] border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-[#a57c00] text-sm uppercase tracking-widest mb-3 font-medium">Portfolio</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-[#0d3d3d] text-balance">
            Explore Our Work
          </h2>
          <p className="text-[#0d3d3d]/70 mt-4 max-w-2xl mx-auto leading-relaxed">
            Discover our collection of {projects.length}+ completed projects across Bangladesh, showcasing our
            expertise in residential, renovation, and custom furniture design.
          </p>
        </div>

        {/* Filter */}
        <div className="mb-12">
          <ProjectFilter
            activeFilter={activeFilter}
            onFilterChange={(filter) => {
              setActiveFilter(filter)
              setShowAll(false) // Reset to collapsed when filter changes
            }}
          />
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {displayedProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-[#0d3d3d]/60">No projects found in this category.</p>
          </div>
        )}

        {hasMoreProjects && (
          <div className="flex justify-center mt-12">
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowAll(!showAll)}
              className="border-[#0d3d3d] text-[#0d3d3d] hover:bg-[#0d3d3d] hover:text-white transition-all duration-300 px-8 py-6"
            >
              {showAll ? (
                <>
                  View Less <ChevronUp className="ml-2 h-4 w-4" />
                </>
              ) : (
                <>
                  View More ({filteredProjects.length - INITIAL_DISPLAY_COUNT} more){" "}
                  <ChevronDown className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        )}

        {/* Project Count */}
        <div className="text-center mt-8">
          <p className="text-[#0d3d3d]/50 text-sm">
            Showing {displayedProjects.length} of {filteredProjects.length} projects
          </p>
        </div>
      </div>
    </section>
  )
}
