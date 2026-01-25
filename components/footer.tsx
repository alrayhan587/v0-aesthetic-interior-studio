import Link from "next/link"
import { MapPin, Phone, Mail } from "lucide-react"

const quickLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

const socialLinks = [
  { name: "Instagram", href: "#" },
  { name: "Facebook", href: "#" },
  { name: "LinkedIn", href: "#" },
  { name: "YouTube", href: "https://www.youtube.com/@AestheticInteriorofficial" },
]

export function Footer() {
  return (
    <footer id="contact" className="bg-[#0d3d3d] text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <img
                src="/images/logo3.png"
                alt="Aesthetic Interior Studio"
                className="h-auto w-40"
              />
            </Link>
            <p className="mt-4 text-white/70 max-w-md leading-relaxed">
              Aesthetic interior design studio creating calm, functional, and beautiful spaces.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-sm text-white/70">
                <MapPin className="h-4 w-4 text-[#a57c00]" />
                <span>123 Design Street, Creative City, 10001</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/70">
                <Phone className="h-4 w-4 text-[#a57c00]" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/70">
                <Mail className="h-4 w-4 text-[#a57c00]" />
                <span>hello@aestheticinterior.com</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-medium text-sm uppercase tracking-widest text-[#a57c00]">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-[#a57c00] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-sm uppercase tracking-widest text-[#a57c00]">Social</h3>
            <ul className="mt-4 space-y-3">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-[#a57c00] transition-colors"
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/20">
          <p className="text-sm text-white/50 text-center">
            © {new Date().getFullYear()} Aesthetic Interior Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
