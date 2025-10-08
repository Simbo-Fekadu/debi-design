"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

// Selected images for the slideshow (2, 4, 11, 23)
const slideshowImages = [
  "/images/IMG_20250715_104808_946.jpg", // Image 23
  "/images/IMG_20250715_104145_590.jpg", // Image 2
  "/images/IMG_20250715_104210_092.jpg", // Image 4
  "/images/IMG_20250715_104322_547.jpg", // Image 11
]

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const scrollToGallery = () => {
    const element = document.getElementById("gallery")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Auto-advance slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === slideshowImages.length - 1 ? 0 : prevIndex + 1
      )
    }, 4000) // Change image every 4 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        {slideshowImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={image} 
              alt={`Deebii Design Custom Design ${index + 1}`} 
              className="w-full h-full object-cover" 
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-primary/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-balance">Deebii Design</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 text-pretty max-w-2xl mx-auto leading-relaxed">
            Custom cultural clothing that blends traditional heritage with contemporary fashion trends
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-3 text-lg"
              onClick={scrollToGallery}
            >
              View Our Collection
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-3 text-lg bg-transparent"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get Custom Design
            </Button>
          </div>
        </div>
      </div>

      {/* Slideshow Indicators */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slideshowImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
