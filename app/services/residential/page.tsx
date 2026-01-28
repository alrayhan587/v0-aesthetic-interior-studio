import { CTASection } from "@/components/service/residential-projects/cta-section";
import { FeaturedProjectsCarousel } from "@/components/service/residential-projects/featuredprojectcarasoual";
import {  ResedentialHero } from "@/components/service/residential-projects/resedential-hero";
import { ResidentialPortfolio } from "@/components/service/residential-projects/resedential-portfolio";
import { TrustSection } from "@/components/service/residential-projects/trust-section";


export default function ResedentialServicePage() {
  return (
    <div className="bg-[#f9f7f4]">
      <main className="w-screen">
        <ResedentialHero />
        {/* <FeaturedProjectsCarousel /> */}
        <ResidentialPortfolio />
        <TrustSection />
        <CTASection />
      </main>
    </div>
  )
}
