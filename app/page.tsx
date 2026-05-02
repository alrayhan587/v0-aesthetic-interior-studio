import { Header } from "@/components/header"
import { HomeHeroSection } from "@/components/home/home-hero-section"
import { AboutSection } from "@/components/home/about-section"
import { ProcessSection } from "@/components/home/process-section"
import { ServicesSection } from "@/components/home/services-section"
import { WhyChooseUsSection } from "@/components/home/why-choose-us-section"

import { VideoGallerySection } from "@/components/home/video-gallery-section"
import { AppointmentSection } from "@/components/home/appointment-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { CtaSection } from "@/components/home/cta-section"
import { PartnersSection } from "@/components/home/partners-section"
import { Footer } from "@/components/footer"
import { TrustFiguresSection } from "@/components/home/trust-figure-section"
import { ProjectSection } from "@/components/home/projects-section"
import { CommercialCTA } from "@/components/service/commercial/cta"
import { HowWeWorkHero } from "@/components/how-we-work/hero-section"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
     
      <HomeHeroSection/>
      <ProcessSection />
      <ServicesSection />
      <ProjectSection/>
      <TrustFiguresSection/>
      <PartnersSection />
    
       <VideoGallerySection />
       <AppointmentSection />
       <TestimonialsSection />
      <CtaSection />
      
    
    </main>
  )
}
