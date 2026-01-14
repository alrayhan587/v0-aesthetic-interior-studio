import { Button } from "@/components/ui/button"

export function AppointmentSection() {
  return (
    <section className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative bg-primary text-primary-foreground p-10 md:p-16 lg:p-20">
          <div className="max-w-2xl">
            <span className="text-sm uppercase tracking-widest text-primary-foreground/70">Book Your Appointment</span>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl leading-tight text-balance">
              Let's design your space.
            </h2>
            <p className="mt-6 text-primary-foreground/80 leading-relaxed">
              Whether you're planning a new home, a renovation, or a commercial space, we're here to help.
            </p>
            <Button className="mt-8 bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-none px-8 py-6 text-sm">
              Book a Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
