import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
// Use a representative hero image from assets
import heroImg from '../assets/images/IMG_20250715_104808_940.jpg';
// load sp* images for the hero slider using Vite glob
const spModules = import.meta.glob('../assets/images/**/sp*.{jpg,jpeg,png,JPG,JPEG,PNG}', { eager: true, query: '?url', import: 'default' }) as Record<string, string>;
const spGallery = Object.values(spModules || {});

interface HeroProps {
  onNavigate: (section: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  const [images] = React.useState<string[]>(spGallery.length ? spGallery : [heroImg]);
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!images || images.length <= 1) return;
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % images.length);
    }, 3500);
    return () => clearInterval(id);
  }, [images]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background - Minimalist Design */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100">
        {/* background gradient only - removed full-bleed hero image so right-side slider is primary */}
        <div className="absolute inset-0 bg-white/20" />
      </div>

      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start min-h-[calc(100vh-5rem)]">
            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="space-y-8"
            >
              {/* Main Heading */}
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-xs font-light tracking-[0.5em] text-muted-foreground"
                >
                  ETHIOPIAN FASHION REIMAGINED
                </motion.div>
                
                <motion.h1
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.7 }}
                  className="text-6xl sm:text-7xl lg:text-8xl font-extralight leading-none tracking-tight"
                >
                  TRADITION
                  <br />
                  <span className="font-light">MEETS</span>
                  <br />
                  <span className="text-muted-foreground">MODERN</span>
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                  className="text-lg font-light text-muted-foreground max-w-lg leading-relaxed"
                >
                  Contemporary Ethiopian fashion that celebrates our rich heritage. 
                  Handcrafted designs for every occasion, blending tradition with modern elegance.
                </motion.p>
              </div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button
                  size="lg"
                  onClick={() => onNavigate('collections')}
                  className="bg-black hover:bg-black/90 text-white font-light tracking-wider px-12 py-4 rounded-none group"
                >
                  EXPLORE COLLECTIONS
                  <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => onNavigate('about')}
                  className="border-black hover:bg-black hover:text-white text-black font-light tracking-wider px-12 py-4 rounded-none"
                >
                  ABOUT US
                </Button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.3 }}
                className="grid grid-cols-3 gap-8 pt-12"
              >
                {[
                  { value: '2022', label: 'ESTABLISHED' },
                  { value: '100+', label: 'DESIGNS' },
                  { value: '50+', label: 'CLIENTS' },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-light tracking-wider">{stat.value}</div>
                    <div className="text-xs font-light tracking-[0.3em] text-muted-foreground mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Visual Side - image slider for sp* images */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="hidden lg:flex flex-col justify-center items-end text-right"
            >
              <div className="w-[420px] max-w-full">
                <div className="aspect-[3/4] overflow-hidden bg-muted rounded">
                  <ImageWithFallback
                    src={images[current]}
                    alt={`Hero ${current + 1}`}
                    className="w-full h-full object-cover transition-all duration-700"
                    enableTapToToggle={true}
                  />
                </div>
                {/* small indicators */}
                <div className="flex items-center justify-center gap-2 mt-4">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrent(idx)}
                      aria-label={`Go to slide ${idx + 1}`}
                      className={`w-2 h-2 rounded-full ${idx === current ? 'bg-black' : 'bg-black/20'}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-8"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-16 bg-black/50"
        >
          <motion.div
            animate={{ y: [0, 32, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-px h-4 bg-black"
          />
        </motion.div>
        <div className="text-xs font-light tracking-[0.3em] text-muted-foreground mt-4 -rotate-90 origin-left">
          SCROLL
        </div>
      </motion.div>

      {/* Brand Statement */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 right-8 text-right"
      >
        <div className="text-xs font-light tracking-[0.3em] text-muted-foreground">
          DEEBII DESIGN STUDIO
        </div>
        <div className="text-xs font-light tracking-[0.2em] text-muted-foreground/60 mt-1">
          EST. 2022
        </div>
      </motion.div>
    </section>
  );
}