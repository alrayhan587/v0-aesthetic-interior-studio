import { AboutCTA } from "@/components/about/about-cta";
import { PartnersSection } from "@/components/partners-section";
import { ProcessSection } from "@/components/process-section";
import { ProjectSection } from "@/components/projects-section";
import { CommercialCTA } from "@/components/service/commercial/cta";
import { ServiceHero } from "@/components/service/service-hero";
import { ServicesSection } from "@/components/services-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { TrustFiguresSection } from "@/components/trust-figure-section";



export default function ServicePage() {
  return (
    <main className="bg-[#f9f7f4]">
    
      <ServiceHero/>
    <ServicesSection/>
      <ProcessSection/>
      <ProjectSection/>
      <PartnersSection/>
      <TrustFiguresSection/>
      <TestimonialsSection/>
      <CommercialCTA/>
      

    </main>
  )
}
