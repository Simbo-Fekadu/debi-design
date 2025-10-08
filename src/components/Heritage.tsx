import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import heritageImg from '../assets/images/Women/Irrecha-photos-by-hawinank24-7018.jpg';

export function Heritage() {
  const philosophy = [
    {
      title: 'HERITAGE',
      description: 'Celebrating Ethiopian cultural traditions through contemporary design language and craftsmanship.'
    },
    {
      title: 'QUALITY',
      description: 'Every piece is crafted with premium materials and meticulous attention to detail.'
    },
    {
      title: 'AUTHENTICITY',
      description: 'Preserving traditional patterns and techniques while embracing modern aesthetics.'
    },
    {
      title: 'SUSTAINABILITY',
      description: 'Supporting local artisans and using ethically sourced materials in all our creations.'
    }
  ];

  return (
    <section id="about" className="py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-xs font-light tracking-[0.5em] text-muted-foreground">
              ABOUT DEEBII
            </div>
            
            <h2 className="text-5xl sm:text-6xl font-extralight leading-tight">
              DESIGN
              <br />
              <span className="text-muted-foreground">PHILOSOPHY</span>
            </h2>
            
            <div className="space-y-6 text-lg font-light text-muted-foreground leading-relaxed">
              <p>
                DEEBII Design is a contemporary Ethiopian fashion brand that bridges 
                tradition and modernity. We specialize in creating beautiful, wearable 
                pieces that honor our rich cultural heritage.
              </p>
              
              <p>
                Each design tells a story—from traditional Oromia dresses to modern 
                interpretations of Ethiopian patterns. We work with skilled local 
                artisans to ensure every piece meets the highest standards of quality.
              </p>
              
              <p>
                Our mission is to celebrate Oromo Ethiopian culture through fashion, making 
                traditional clothing accessible and relevant for today's generation 
                while supporting local craftsmanship and sustainable practices.
              </p>
            </div>
          </motion.div>

          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[3/4] overflow-hidden bg-muted">
                <ImageWithFallback src={heritageImg} alt="DEEBII Craftsmanship" className="w-full h-full object-cover grayscale" enableTapToToggle={true} />
              </div>
            
            {/* Floating Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="absolute -bottom-8 -left-8 bg-white p-8 max-w-xs border border-black/10"
            >
              <blockquote className="text-sm font-light italic leading-relaxed">
                "Fashion is a powerful way to preserve culture. Through our designs, 
                we honor the past while creating pieces for the future."
              </blockquote>
              <div className="text-xs font-light tracking-[0.3em] text-muted-foreground mt-4">
                — DEEBII DESIGN
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Philosophy Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-black/10 pt-20"
        >
          <div className="text-xs font-light tracking-[0.5em] text-muted-foreground mb-12">
            OUR VALUES
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {philosophy.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-4 group"
              >
                <div className="h-px w-12 bg-black group-hover:w-20 transition-all duration-500"></div>
                
                <h3 className="text-lg font-light tracking-wider">
                  {principle.title}
                </h3>
                
                <p className="text-sm font-light text-muted-foreground leading-relaxed">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-black/10 pt-20 mt-20"
        >
          <div className="grid md:grid-cols-4 gap-12 text-center">
            {[
              { value: '2022', label: 'ESTABLISHED' },
              { value: '100+', label: 'DESIGNS CREATED' },
              { value: '50+', label: 'CLIENTS SERVED' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <div className="text-4xl font-extralight tracking-wide">{stat.value}</div>
                <div className="text-xs font-light tracking-[0.3em] text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}