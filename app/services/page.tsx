import { AboutCTA } from "@/components/about/about-cta";
import { PartnersSection } from "@/components/home/partners-section";
import { ProcessSection } from "@/components/home/process-section";
import { ProjectSection } from "@/components/home/projects-section";
import { CommercialCTA } from "@/components/service/commercial/cta";
import { ServiceHero } from "@/components/service/service-hero";
import { ServicesSection } from "@/components/home/services-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { TrustFiguresSection } from "@/components/home/trust-figure-section";



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
