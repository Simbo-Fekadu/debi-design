import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Eye, Heart } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import coralStripeDesign from 'figma:asset/2858f785b344b0b3dec420a775218a7235d28bdf.png';

export function FeaturedDesigns() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const collections = [
    {
      id: 1,
      title: 'CORAL STRIPES',
      category: 'FEATURED DESIGN',
      image: coralStripeDesign,
      year: '2022',
      description: 'Contemporary interpretation of traditional patterns with modern silhouettes and vibrant textures.'
    },
    {
      id: 2,
      title: 'MINIMAL FORMS',
      category: 'READY-TO-WEAR',
      image: 'https://images.unsplash.com/photo-1708515902649-1f5b92fe5098?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwc3R1ZGlvJTIwd29ya3NwYWNlJTIwY2xlYW58ZW58MXx8fHwxNzU5ODY1ODMwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      year: '2022',
      description: 'Clean lines meet contemporary silhouettes in this capsule collection.'
    },
    {
      id: 3,
      title: 'GEOMETRIC PATTERNS',
      category: 'TEXTILE DESIGN',
      image: 'https://images.unsplash.com/photo-1640610716374-565003b0dfde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZGVzaWduJTIwcGF0dGVybnN8ZW58MXx8fHwxNzU5ODY1ODMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      year: '2022',
      description: 'Architectural precision translated into wearable art pieces.'
    },
    {
      id: 4,
      title: 'MONOCHROME SERIES',
      category: 'SIGNATURE COLLECTION',
      image: 'https://images.unsplash.com/photo-1629229110188-675ac2b19edd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMHdoaXRlJTIwdGV4dGlsZSUyMGZhYnJpY3xlbnwxfHx8fDE3NTk4NjU4MzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      year: '2022',
      description: 'The essence of black and white refined to its purest form.'
    },
    {
      id: 5,
      title: 'STRUCTURAL DESIGN',
      category: 'EXPERIMENTAL',
      image: 'https://images.unsplash.com/photo-1719947348862-a9840862d118?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmYXNoaW9uJTIwc2tldGNofGVufDF8fHx8MTc1OTg2NTgzMnww&ixlib=rb-4.1.0&q=80&w=1080',
      year: '2022',
      description: 'Exploring the boundaries between fashion and architecture.'
    }
  ];

  return (
    <section className="py-32 px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <div className="text-xs font-light tracking-[0.5em] text-muted-foreground mb-4">
          FEATURED COLLECTIONS
        </div>
        <h2 className="text-5xl sm:text-6xl font-extralight leading-tight mb-8">
          DESIGN
          <br />
          <span className="text-muted-foreground">PORTFOLIO</span>
        </h2>
        <p className="text-lg font-light text-muted-foreground max-w-2xl">
          A curated selection of our most defining works, each piece representing 
          our commitment to minimalist excellence and innovative design thinking.
        </p>
      </motion.div>

      {/* Collections Grid */}
      <div className="grid lg:grid-cols-2 gap-16">
        {collections.map((collection, index) => (
          <motion.div
            key={collection.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            onMouseEnter={() => setHoveredItem(collection.id)}
            onMouseLeave={() => setHoveredItem(null)}
            className="group cursor-pointer"
          >
            {/* Image */}
            <div className="relative overflow-hidden mb-8 aspect-[4/5]">
              <ImageWithFallback
                src={collection.image}
                alt={collection.title}
                className="w-full h-full object-cover transition-all duration-700"
                enableTapToToggle={true}
              />
              
              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredItem === collection.id ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-black/20 flex items-center justify-center"
              >
                <div className="flex gap-4">
                  <Button
                    size="sm"
                    variant="outline"
                    className="bg-white/90 hover:bg-white border-0 text-black rounded-none"
                  >
                    <Eye className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="bg-white/90 hover:bg-white border-0 text-black rounded-none"
                  >
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
              </motion.div>

              {/* Year Badge */}
              <div className="absolute top-6 left-6 bg-white/90 px-3 py-1">
                <span className="text-xs font-light tracking-wider">{collection.year}</span>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-3">
              <div className="text-xs font-light tracking-[0.3em] text-muted-foreground">
                {collection.category}
              </div>
              
              <h3 className="text-2xl font-light tracking-wide group-hover:text-muted-foreground transition-colors duration-300">
                {collection.title}
              </h3>
              
              <p className="text-sm font-light text-muted-foreground leading-relaxed">
                {collection.description}
              </p>

              <motion.div
                initial={{ x: -10, opacity: 0 }}
                animate={{ 
                  x: hoveredItem === collection.id ? 0 : -10,
                  opacity: hoveredItem === collection.id ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="pt-4"
              >
                <Button
                  variant="ghost"
                  className="text-black hover:bg-transparent p-0 font-light tracking-wider group"
                >
                  VIEW COLLECTION
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View All Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-center mt-20"
      >
        <Button
          variant="outline"
          size="lg"
          className="border-black hover:bg-black hover:text-white text-black font-light tracking-wider px-12 py-4 rounded-none"
        >
          VIEW ALL COLLECTIONS
        </Button>
      </motion.div>
    </section>
  );
}