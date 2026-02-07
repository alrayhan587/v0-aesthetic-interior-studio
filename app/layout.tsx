import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import WhatsAppButton from "@/components/whatsAppButton"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "500", "600", "700"] })

export const metadata: Metadata = {
  title: "Aesthetic Interior Studio | Designing Spaces That Feel Like Home",
  description:
    "We create calm, beautiful, and functional interiors for modern living. From concept to completion, we design spaces that reflect your lifestyle, taste, and everyday needs.",
  generator: "v0.app",
  icons: {
    icon:"/favicon.ico",
    other: [
      {
        url: "/images/ais-icon-light.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/images/ais-icon-dark.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/images/ais-icon-dark.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/images/ais-icon-dark.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`} suppressHydrationWarning={true}>
        <Header />
        {children}
        <WhatsAppButton/>
        <Footer />
      </body>
    </html>
  )
}
