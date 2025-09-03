"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 768)
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative flex h-14 md:h-16 items-center justify-center">
          {/* Logo (top-left) */}
            <button onClick={() => scrollToSection("home")} className="absolute left-0 flex items-center gap-2 group" aria-label="Go to home">
              <Image src="/logo.jpg" alt="Deebii Design Logo" width={40} height={40} priority className="h-9 w-9 rounded-full object-cover" />
              <span className="hidden sm:inline font-script text-xl text-primary tracking-wide group-hover:text-accent transition-colors">Deebii</span>
            </button>
          <div className="flex w-full md:w-auto md:justify-center overflow-x-auto no-scrollbar gap-6 md:gap-10 uppercase tracking-wide font-semibold text-xs md:text-sm pl-14 md:pl-0">
            {['Home','About','Gallery','Contact'].map(label => (
              <button
                key={label}
                onClick={() => scrollToSection(label.toLowerCase())}
                className="shrink-0 px-1 py-1 border-b-2 border-transparent hover:border-accent hover:text-accent transition-colors"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
