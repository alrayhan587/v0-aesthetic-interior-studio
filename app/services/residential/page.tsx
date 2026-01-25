import { CTASection } from "@/components/service/residential-projects/cta-section";
import { FeaturedProjectsCarousel } from "@/components/service/residential-projects/featuredprojectcarasoual";
import { Hero } from "@/components/service/residential-projects/hero";
import { ResidentialPortfolio } from "@/components/service/residential-projects/resedential-portfolio";
import { TrustSection } from "@/components/service/residential-projects/trust-section";


export default function Home() {
  return (
    <div className="min-h-screen bg-white">

      <main>
        <Hero />
        {/* <FeaturedProjectsCarousel /> */}
        <ResidentialPortfolio />
        <TrustSection />
        <CTASection />
      </main>
 
    </div>
  )
}
