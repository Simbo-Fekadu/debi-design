import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

interface HeaderProps {
  currentSection: string;
  setCurrentSection: (section: string) => void;
}

export function Header({ currentSection, setCurrentSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'collections', label: 'Collections' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm border-b border-black/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="cursor-pointer"
            onClick={() => setCurrentSection('home')}
          >
            <div className="text-3xl font-light tracking-wider">
              <span className="font-extralight">DEEBII</span>
            </div>
            <div className="text-xs font-light tracking-[0.3em] text-muted-foreground -mt-1">
              DESIGN
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-12">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ y: -2 }}
                onClick={() => setCurrentSection(item.id)}
                className={`relative text-sm font-light tracking-wider transition-all duration-300 ${
                  currentSection === item.id
                    ? 'text-black'
                    : 'text-muted-foreground hover:text-black'
                }`}
              >
                {item.label.toUpperCase()}
                {currentSection === item.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -bottom-2 left-0 right-0 h-px bg-black"
                    transition={{ type: "spring", duration: 0.6 }}
                  />
                )}
              </motion.button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              variant="outline"
              onClick={() => setCurrentSection('contact')}
              className="border-black hover:bg-black hover:text-white text-black font-light tracking-wider px-8 py-2 rounded-none"
            >
              CONTACT
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          height: isMobileMenuOpen ? 'auto' : 0,
        }}
        transition={{ duration: 0.3 }}
        className="lg:hidden overflow-hidden bg-white border-t border-black/10"
      >
        <div className="p-6 space-y-6">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                setCurrentSection(item.id);
                setIsMobileMenuOpen(false);
              }}
              className={`block w-full text-left text-lg font-light tracking-wider ${
                currentSection === item.id
                  ? 'text-black'
                  : 'text-muted-foreground'
              }`}
            >
              {item.label.toUpperCase()}
            </motion.button>
          ))}
          <div className="pt-4 border-t border-black/10">
            <Button
              variant="outline"
              onClick={() => {
                setCurrentSection('contact');
                setIsMobileMenuOpen(false);
              }}
              className="w-full border-black hover:bg-black hover:text-white text-black font-light tracking-wider rounded-none"
            >
              CONTACT
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
}