import { CTASection } from "@/components/service/residential-projects/cta-section";
import { ResedentialHero } from "@/components/service/residential-projects/resedential-hero";
import { ResidentialPortfolio } from "@/components/service/residential-projects/resedential-portfolio";
import { TrustSection } from "@/components/service/residential-projects/trust-section";
import { m } from "framer-motion";

export default function ResidentialPage() {
    return(
        <main className="bg-[#f9f7f4]">
            <ResedentialHero/>
            <ResidentialPortfolio/>
            <TrustSection/>
          
            
        </main>
    )
}