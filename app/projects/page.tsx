import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProjectHero } from "@/components/projects/project-hero"
import { ProjectGallery } from "@/components/projects/project-gallery"
import { FeaturedProjects } from "@/components/projects/featured-projects"
import { ProjectCTA } from "@/components/projects/project-cta"

export const metadata = {
  title: "Our Projects | Aesthetic Interior Studio",
  description:
    "Explore our portfolio of residential, commercial, and renovation projects. Every space tells a story of thoughtful design.",
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <ProjectHero />
      <ProjectGallery />
      <FeaturedProjects />
      <ProjectCTA />
    </main>
  )
}
