import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Working with the team was smooth and professional. They understood our needs and delivered exactly what we imagined.",
    author: "Sarah & James",
    project: "Home Renovation",
  },
  {
    quote: "Our home now feels calm, modern, and beautifully designed. We loved the experience from start to finish.",
    author: "Michael Chen",
    project: "Apartment Interior",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-32 bg-card relative overflow-hidden">
      {/* Room sketch background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url('/living-room-interior-design-sketch-pencil-architec.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm uppercase tracking-widest text-muted-foreground">Testimonials</span>
          <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl text-foreground text-balance">
            What our clients say
          </h2>
        </div>
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background/90 backdrop-blur-sm p-8 md:p-10 border border-border hover:shadow-lg transition-shadow"
            >
              <Quote className="h-8 w-8 text-border" />
              <p className="mt-6 text-lg text-foreground leading-relaxed italic">"{testimonial.quote}"</p>
              <div className="mt-6 pt-6 border-t border-border">
                <span className="font-medium text-foreground">{testimonial.author}</span>
                <span className="block text-sm text-muted-foreground mt-1">{testimonial.project}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
