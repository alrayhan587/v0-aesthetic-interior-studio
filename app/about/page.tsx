import type { Metadata } from "next"
import { AboutHero } from "@/components/about/about-hero"
import { OurPhilosophy } from "@/components/about/our-philosophy"
import { OurStory } from "@/components/about/our-story"
import { WhatWeDo } from "@/components/about/what-we-do"
import { OurTeam } from "@/components/about/our-team"
import { AboutCTA } from "@/components/about/about-cta"


export const metadata: Metadata = {
  title: "About Us | Interior Design Studio",
  description:
    "Learn about our interior design philosophy, story, and team. We craft functional and timeless interiors that reflect your lifestyle.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#faf9f6]">
    
      <AboutHero />
      <OurPhilosophy />
      <OurStory />
      <WhatWeDo />
      <OurTeam />
      <AboutCTA />
     
    </main>
  )
}
