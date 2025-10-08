import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Toaster } from './components/ui/sonner';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Collections } from './components/Collections';
import { Heritage } from './components/Heritage';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Listen for programmatic navigation events (used by components that can't reach app state)
  useEffect(() => {
    const handler = (e: Event) => {
      try {
        // CustomEvent with detail containing the section id
        // @ts-ignore
        const detail = (e as CustomEvent).detail;
        if (detail && typeof detail === 'string') {
          setCurrentSection(detail);
          // scroll to top so the section content is visible
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      } catch (err) {
        // ignore
      }
    };
    window.addEventListener('navigate-to', handler as EventListener);
    return () => window.removeEventListener('navigate-to', handler as EventListener);
  }, []);

  const pageTransition = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen relative bg-white">
      <Toaster position="top-center" />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >
        <Header currentSection={currentSection} setCurrentSection={setCurrentSection} />
        
        <AnimatePresence mode="wait">
          {currentSection === 'home' && (
            <motion.div key="home" {...pageTransition}>
              <Hero onNavigate={setCurrentSection} />
              <Collections />
              <Heritage />
            </motion.div>
          )}
          
          {currentSection === 'collections' && (
            <motion.div key="collections" {...pageTransition}>
              <div className="pt-20">
                <Collections />
              </div>
            </motion.div>
          )}
          
          {currentSection === 'about' && (
            <motion.div key="about" {...pageTransition}>
              <div className="pt-20">
                <Heritage />
              </div>
            </motion.div>
          )}
          
          {currentSection === 'contact' && (
            <motion.div key="contact" {...pageTransition}>
              <div className="pt-20">
                <Contact />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        <Footer />
      </motion.div>
    </div>
  );
}