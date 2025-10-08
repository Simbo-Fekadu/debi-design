import React from "react";
import { motion } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Globe,
  Send,
} from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/deebii_design_?igsh=MXNsZ2F6NWFhbnNuYw==", label: "Instagram" },
    { icon: Globe, href: "https://www.facebook.com/profile.php?id=100075545182650", label: "Facebook" },
    { icon: Send, href: "https://t.me/deebbii", label: "Telegram" },
    { icon: Phone, href: "https://wa.me/251937740130", label: "WhatsApp" },
  ];

  const footerSections = [
    {
      title: "SHOP",
      links: [
        { label: "Women", href: "#" },
        { label: "Men", href: "#" },
        { label: "Couples", href: "#" },
        { label: "Kids", href: "#" },
      ],
    },
    {
      title: "COMPANY",
      links: [
        { label: "About Us", href: "#" },
        { label: "Our Story", href: "#" },
        // removed: Artisans, Sustainability
      ],
    },
    {
      title: "SUPPORT",
      links: [
        { label: "Contact Us", href: "#" },
        { label: "FAQs", href: "#" },
        // removed: Shipping, Returns
      ],
    },
  ];

  return (
    <footer className="relative border-t border-black/10 mt-32">
      {/* Newsletter Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="border-b border-black/10 py-20"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="text-xs font-light tracking-[0.5em] text-muted-foreground mb-6">
            STAY UPDATED
          </div>
          <h3 className="text-4xl sm:text-5xl font-extralight leading-tight mb-8">
            STAY
            <br />
            <span className="text-muted-foreground">
              CONNECTED
            </span>
          </h3>
          <p className="text-lg font-light text-muted-foreground mb-12 max-w-2xl mx-auto">
            Subscribe to receive updates on new collections, exclusive 
            offers, and Ethiopian fashion inspiration.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 border border-black/20 focus:border-black focus:outline-none font-light text-sm"
            />
            <Button
              size="lg"
              className="bg-black hover:bg-black/90 text-white font-light tracking-wider px-8 py-4 rounded-none"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              SUBSCRIBE
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Main Footer Content */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-5 space-y-8"
            >
              <div>
                <div className="text-4xl font-light tracking-wider mb-2">
                  DEEBII
                </div>
                <div className="text-xs font-light tracking-[0.3em] text-muted-foreground">
                  ETHIOPIAN FASHION
                </div>
              </div>

              <p className="text-sm font-light text-muted-foreground leading-relaxed max-w-md">
                Contemporary Ethiopian fashion brand celebrating 
                traditional craftsmanship with modern design. 
                Handcrafted clothing for women, men, couples, and children.
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-sm font-light">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  <div className="flex flex-col">
                    <a href="tel:+251937740130" className="hover:underline">+251 937 740 130</a>
                    <a href="tel:+251910049291" className="hover:underline">+251 910 049 291</a>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm font-light">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span>Addis Ababa, ET</span>
                </div>
                <div className="flex items-center gap-4 text-sm font-light">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <a href="mailto:simbo0799@gmail.com" className="hover:underline">hello@deebii.studio</a>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-6">
                {socialLinks.map((social, index) => {
                  const isPhone = social.label === 'WhatsApp' || social.label === 'Phone';
                  const href = isPhone && social.href && social.href.startsWith('wa.me') ? social.href : social.href;
                  return (
                    <motion.a
                      key={index}
                      href={isPhone ? social.href.startsWith('http') ? social.href : `tel:${social.href}` : social.href}
                      target={!isPhone && social.href && social.href !== '#' ? '_blank' : undefined}
                      rel={!isPhone && social.href && social.href !== '#' ? 'noopener noreferrer' : undefined}
                      whileHover={{ y: -2 }}
                      className="w-10 h-10 border border-black/10 flex items-center justify-center hover:border-black hover:bg-black hover:text-white transition-all duration-300"
                      aria-label={social.label}
                    >
                      <social.icon className="w-4 h-4" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Links Sections */}
            <div className="lg:col-span-7 grid md:grid-cols-3 gap-12">
              {footerSections.map((section, sectionIndex) => (
                <motion.div
                  key={sectionIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: sectionIndex * 0.1,
                  }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <div className="text-xs font-light tracking-[0.3em] text-muted-foreground">
                    {section.title}
                  </div>
                  <ul className="space-y-4">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a
                          href={link.href}
                          className="text-sm font-light hover:text-muted-foreground transition-colors duration-300"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="border-t border-black/10 py-8"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-8 text-xs font-light text-muted-foreground">
              <span>© 2022 DEEBII Designs</span>
              <span>All rights reserved</span>
            </div>

            <div className="flex items-center gap-8 text-xs font-light">
              <a
                href="#"
                className="text-muted-foreground hover:text-black transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-black transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-black transition-colors"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}