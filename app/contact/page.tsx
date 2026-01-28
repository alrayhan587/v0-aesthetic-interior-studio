import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"

export const metadata = {
  title: "Contact Us | Aesthetic Interior Studio",
  description: "Get in touch with our design team. We're here to bring your interior design vision to life.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      
      {/* <ContactHero /> */}
      <div className="pt-16 lg:pt-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>

    </main>
  )
}
