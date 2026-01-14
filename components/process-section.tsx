"use client"

const processSteps = [
  {
    number: "01",
    title: "Consultation",
    description: "We begin by understanding your needs, space, budget, and design preferences.",
  },
  {
    number: "02",
    title: "Concept & Design",
    description: "Our designers create layouts, material selections, and 3D visualizations.",
  },
  {
    number: "03",
    title: "Detailed Planning",
    description: "We prepare drawings, cost estimates, and project timelines.",
  },
  {
    number: "04",
    title: "Execution",
    description: "Our team manages production, installation, and quality control.",
  },
  {
    number: "05",
    title: "Handover",
    description: "Your finished space is delivered, ready to live and work in.",
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Room sketch background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url('/architectural-interior-design-blueprint-sketch-flo.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm uppercase tracking-widest text-muted-foreground">How We Work</span>
          <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl text-foreground text-balance">
            A simple, clear design process
          </h2>
        </div>

        {/* Process Steps with Timeline */}
        <div className="mt-20 relative">
          {/* Connecting Line - Desktop */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-border" />

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {processSteps.map((step, index) => (
              <div key={step.number} className="relative group">
                {/* Step Number Circle */}
                <div className="relative flex flex-col items-center lg:items-center">
                  <div className="w-24 h-24 rounded-full bg-secondary border-4 border-background shadow-lg flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300 z-10">
                    <span className="font-serif text-3xl text-foreground group-hover:text-primary-foreground transition-colors">
                      {step.number}
                    </span>
                  </div>

                  {/* Arrow connector for mobile/tablet */}
                  {index < processSteps.length - 1 && <div className="lg:hidden h-8 w-0.5 bg-border my-2" />}

                  {/* Content */}
                  <div className="mt-6 text-center">
                    <h3 className="font-medium text-lg text-foreground group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-[200px] mx-auto">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Arrow between steps - Desktop */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-2 transform -translate-y-1/2 z-20">
                    <div className="w-4 h-4 border-t-2 border-r-2 border-muted-foreground/30 rotate-45" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
