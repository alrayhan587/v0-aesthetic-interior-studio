import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

import { ProjectGallery } from "@/components/projects/project-gallery"
import { FeaturedProjects } from "@/components/projects/featured-projects"
import { ProjectCTA } from "@/components/projects/project-cta"
import { ProjectsHero } from "@/components/projects/project-hero"

export const metadata = {
  title: "Our Projects | Aesthetic Interior Studio",
  description:
    "Explore our portfolio of residential, commercial, and renovation projects. Every space tells a story of thoughtful design.",
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#faf9f6]">
      <ProjectsHero />
      <ProjectGallery />
      <FeaturedProjects />
      <ProjectCTA />
    </main>
  )
}
