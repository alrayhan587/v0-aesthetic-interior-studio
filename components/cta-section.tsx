import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CtaSection() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src="/beautiful-modern-interior-design-living-space-warm.jpg" alt="Interior design background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/70" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white text-balance">
            Ready to transform your space?
          </h2>
          <p className="mt-6 text-lg text-white/80">
            Start with a simple conversation and let us guide you through the rest.
          </p>
          <Button className="mt-10 bg-white text-foreground hover:bg-white/90 rounded-none px-8 py-6 text-sm">
            Start Your Project
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
