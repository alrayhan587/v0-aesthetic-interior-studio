"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "How We Work", href: "/how-we-work" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setIsVisible(false)
      } else {
        // Scrolling up or at top
        setIsVisible(true)
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-gray-50 transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"}`}>
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center">
            <img
              src="/logo2.png"
              alt="Aesthetic Interior Studio"
              className="h-auto w-28"
            />
            {/* <span className="ml-2 font-serif text-xl text-[#0d3d3d]">Aesthetic Interior Studio</span> */}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {navItems.map((item) => {
              if (item.name === "Services") {
                return (
                  <div key={item.name} className="relative">
                    <button
                      onMouseEnter={() => {
                        if (dropdownTimeout) {
                          clearTimeout(dropdownTimeout)
                          setDropdownTimeout(null)
                        }
                        setServicesDropdownOpen(true)
                      }}
                      onMouseLeave={() => {
                        const timeout = setTimeout(() => setServicesDropdownOpen(false), 700)
                        setDropdownTimeout(timeout)
                      }}
                      className="text-sm text-black/80 hover:text-[#a57c00] transition-colors flex items-center gap-1"
                    >
                      {item.name} <ChevronDown className="h-4 w-4" />
                    </button>
                    {servicesDropdownOpen && (
                      <div
                        className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md py-2 min-w-[200px]"
                        onMouseEnter={() => {
                          if (dropdownTimeout) {
                            clearTimeout(dropdownTimeout)
                            setDropdownTimeout(null)
                          }
                        }}
                        onMouseLeave={() => {
                          const timeout = setTimeout(() => setServicesDropdownOpen(false), 100)
                          setDropdownTimeout(timeout)
                        }}
                      >
                        <Link
                          href="/services/residential"
                          className="block px-4 py-2 text-sm text-black/80 hover:bg-gray-100"
                          onClick={() => setServicesDropdownOpen(false)}
                        >
                          Residential Service
                        </Link>
                        <Link
                          href="/services/commercial"
                          className="block px-4 py-2 text-sm text-black/80 hover:bg-gray-100"
                          onClick={() => setServicesDropdownOpen(false)}
                        >
                          Commercial Service
                        </Link>
                        <Link
                          href="/services/architectural"
                          className="block px-4 py-2 text-sm text-black/80 hover:bg-gray-100"
                          onClick={() => setServicesDropdownOpen(false)}
                        >
                          Architectural Design
                        </Link>
                      </div>
                    )}
                  </div>
                )
              } else {
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-sm text-black/80 hover:text-[#a57c00] transition-colors"
                  >
                    {item.name}
                  </Link>
                )
              }
            })}
          </div>

          <div className="hidden lg:block">
            <Button className="bg-[#a57c00] text-white hover:bg-[#c99a00] rounded-full px-6">
              Book Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-black" />
            ) : (
              <Menu className="h-6 w-6 text-black" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-black/20">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => {
                if (item.name === "Services") {
                  return (
                    <div key={item.name}>
                      <button
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className="text-sm text-black/80 hover:text-[#a57c00] transition-colors flex items-center gap-1 w-full text-left"
                      >
                        {item.name} <ChevronDown className="h-4 w-4" />
                      </button>
                      {mobileServicesOpen && (
                        <div className="ml-4 mt-2 space-y-2">
                          <Link
                            href="/services/residential"
                            className="block text-sm text-black/80 hover:text-[#a57c00]"
                            onClick={() => {
                              setMobileMenuOpen(false)
                              setMobileServicesOpen(false)
                            }}
                          >
                            Residential Service
                          </Link>
                          <Link
                            href="/services/commercial"
                            className="block text-sm text-black/80 hover:text-[#a57c00]"
                            onClick={() => {
                              setMobileMenuOpen(false)
                              setMobileServicesOpen(false)
                            }}
                          >
                            Commercial Service
                          </Link>
                          <Link
                            href="/services/architectural"
                            className="block text-sm text-black/80 hover:text-[#a57c00]"
                            onClick={() => {
                              setMobileMenuOpen(false)
                              setMobileServicesOpen(false)
                            }}
                          >
                            Architectural Design
                          </Link>
                        </div>
                      )}
                    </div>
                  )
                } else {
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-sm text-black/80 hover:text-[#a57c00] transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )
                }
              })}
              <Button className="bg-[#a57c00] text-white hover:bg-[#c99a00] rounded-full w-full mt-2">
                Book Consultation
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
