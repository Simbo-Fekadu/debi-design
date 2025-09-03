"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// Real images from the images folder
const imageFiles = [
  "IMG_20250715_104140_625.jpg",
  "IMG_20250715_104145_590.jpg",
  "IMG_20250715_104150_090.jpg",
  "IMG_20250715_104205_271.jpg",
  "IMG_20250715_104210_092.jpg",
  "IMG_20250715_104226_097.jpg",
  "IMG_20250715_104236_498.jpg",
  "IMG_20250715_104243_455.jpg",
  "IMG_20250715_104257_108.jpg",
  "IMG_20250715_104313_758.jpg",
  "IMG_20250715_104322_547.jpg",
  "IMG_20250715_104336_662.jpg",
  "IMG_20250715_104352_314.jpg",
  "IMG_20250715_104357_125.jpg",
  "IMG_20250715_104425_245.jpg",
  "IMG_20250715_104435_411.jpg",
  "IMG_20250715_104600_140.jpg",
  "IMG_20250715_104611_132.jpg",
  "IMG_20250715_104621_996.jpg",
  "IMG_20250715_104631_095.jpg",
  "IMG_20250715_104808_940.jpg",
  "IMG_20250715_104808_946.jpg",
  "IMG_20250715_104809_640.jpg",
  "IMG_20250715_104809_741.jpg",
]

// Updated categories per request
const categories = ["All", "Men", "Women", "Kids"]
const itemsPerPage = 6

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [showAll, setShowAll] = useState(false)

  // Temporary classification: cycle through Men, Women, Kids.
  // Once you move images into /public/images/Men, /Women, /Kids you can replace this with explicit arrays.
  // Manual grouping per request:
  // Kids: designs 4,5
  // Men: designs 12,17,18,19
  // All others: Women
  const menSet = new Set([12, 17, 18, 19])
  const kidsSet = new Set([4, 5])
  const galleryItems = imageFiles.map((imageFile, index) => {
    const id = index + 1
    let assigned: string
    if (kidsSet.has(id)) assigned = "Kids"
    else if (menSet.has(id)) assigned = "Men"
    else assigned = "Women"
    return {
      id,
      title: `Custom Design ${id}`,
      category: assigned,
      image: `/images/${imageFile}`,
      description: "Beautiful custom cultural clothing design"
    }
  })

  const filteredItems =
    activeCategory === "All" ? galleryItems : galleryItems.filter((item) => item.category === activeCategory)

  const displayedItems = showAll ? filteredItems : filteredItems.slice(0, itemsPerPage)
  const hasMoreItems = filteredItems.length > itemsPerPage

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">Our Collection</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            Explore our diverse range of custom cultural clothing, each piece crafted with attention to detail and
            cultural authenticity.
          </p>
        </div>

        {/* Category Filter */}
        <div className="relative mb-14">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {categories.map((category) => {
              const active = activeCategory === category
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`group relative px-6 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background backdrop-blur-sm border ${
                    active
                      ? 'bg-accent text-accent-foreground border-accent shadow-sm'
                      : 'bg-white/40 dark:bg-white/5 border-border/60 hover:border-accent/60 text-foreground hover:text-accent'
                  }`}
                >
                  <span className="relative z-10 tracking-wide">{category}</span>
                  {active && (
                    <span className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/0 via-accent/10 to-accent/20 pointer-events-none" />
                  )}
                  <span className={`absolute left-1/2 -bottom-2 h-0.5 w-0 bg-accent transition-all duration-300 ease-out group-hover:w-1/2 ${active ? 'w-2/3' : ''}`} />
                </button>
              )
            })}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedItems.map((item, index) => (
            <Card
              key={item.id}
              className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-300"></div>
                </div>
                <div className="p-6">
                  <span className="text-sm text-accent font-medium">{item.category}</span>
                  <h3 className="text-xl font-semibold text-primary mt-2 group-hover:text-accent transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-2">{item.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Show More/Less Button */}
        {hasMoreItems && (
          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="bg-accent/10 hover:bg-accent/20 text-accent hover:text-accent-foreground font-semibold px-8 py-3 border-accent/30"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Show Less" : `Show More (${filteredItems.length - itemsPerPage} more)`}
            </Button>
          </div>
        )}

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-3"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Request Custom Design
          </Button>
        </div>
      </div>
    </section>
  )
}
