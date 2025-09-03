import type React from "react"
import type { Metadata } from "next"
import { Inter, Cormorant, Great_Vibes } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Deebii Design - Custom Cultural Clothing",
  description:
    "Professional cultural clothing shop designing custom clothes based on customer needs and current trends",
  generator: "v0.app",
}

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" })
const cormorant = Cormorant({ subsets: ["latin"], variable: "--font-cormorant", weight: ["300","400","500","600","700"], display: "swap" })
const greatVibes = Great_Vibes({ subsets: ["latin"], variable: "--font-greatvibes", weight: "400", display: "swap" })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable} ${greatVibes.variable}`}>
      <head>
        <link rel="icon" href="/logo.jpg" />
        <link rel="apple-touch-icon" href="/logo.jpg" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className="font-sans">
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
