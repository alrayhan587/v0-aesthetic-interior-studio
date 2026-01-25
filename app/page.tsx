import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProcessSection } from "@/components/process-section"
import { ServicesSection } from "@/components/services-section"
import { WhyChooseUsSection } from "@/components/why-choose-us-section"

import { VideoGallerySection } from "@/components/video-gallery-section"
import { AppointmentSection } from "@/components/appointment-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CtaSection } from "@/components/cta-section"
import { PartnersSection } from "@/components/partners-section"
import { Footer } from "@/components/footer"
import { TrustFiguresSection } from "@/components/trust-figure-section"
import { ProjectSection } from "@/components/projects-section"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
     
      <HeroSection />
      <ProcessSection />
      <ServicesSection />
      <ProjectSection/>
         <TrustFiguresSection/>
          <PartnersSection />
    
       <VideoGallerySection />
       <AppointmentSection />
       <TestimonialsSection />
      
       
         <AboutSection />
      <WhyChooseUsSection />
      
   
      
     
     
     
      
      
      <CtaSection />
      
    
    </main>
  )
}
