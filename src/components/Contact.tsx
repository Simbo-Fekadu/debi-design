import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send,Globe } from 'lucide-react';
import { Button } from './ui/button';
import { toast } from 'sonner@2.0.3';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Build email body
      const bodyLines = [
        `Name: ${formData.name}`,
        `From: ${formData.email}`,
        `Phone: ${formData.phone}`,
        '',
        formData.message
      ];
      const body = bodyLines.join('\n');
      const mailto = `mailto:simbo0799@gmail.com?subject=${encodeURIComponent(formData.subject || 'Contact from website')}&body=${encodeURIComponent(body)}`;

      // Open user's mail client with prefilled email
      window.location.href = mailto;

      toast.success("Opened your mail client. Please send the message to complete submission.");

      // reset form
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (err) {
      console.error('Failed to open mail client', err);
      toast.error('Failed to open mail client.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@deebii.studio',
      href: 'mailto:simbo0799@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+251 937740130',
      href: 'tel:+251937740130'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Addis Ababa, Ethiopia',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://www.instagram.com/deebii_design_?igsh=MXNsZ2F6NWFhbnNuYw=='
    },
    {
      icon: Globe,
      label: 'Facebook',
      href: 'https://www.facebook.com/profile.php?id=100075545182650'
    },
    {
      icon: Send,
      label: 'Telegram',
      href: 'https://t.me/deebbii'
    },
    {
      icon: Phone,
      label: 'WhatsApp',
      href: 'https://wa.me/251937740130'
    }
  ];

  return (
    <section id="contact" className="py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="text-xs font-light tracking-[0.5em] text-muted-foreground mb-4">
            GET IN TOUCH
          </div>
          <h2 className="text-5xl sm:text-6xl font-extralight leading-tight mb-8">
            CONTACT
            <br />
            <span className="text-muted-foreground">US</span>
          </h2>
          <p className="text-lg font-light text-muted-foreground max-w-2xl mx-auto">
            Have a question or want to place a custom order? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-8">
              <h3 className="text-2xl font-light tracking-wide">
                LET'S TALK
              </h3>
              
              <p className="text-lg font-light text-muted-foreground leading-relaxed">
                Whether you're interested in our collections, need a custom design, 
                or simply want to learn more about Ethiopian traditional clothing, 
                we're here to help.
              </p>

              {/* Contact Details */}
              <div className="space-y-6 pt-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 group cursor-pointer"
                  >
                    <div className="w-12 h-12 border border-black/10 flex items-center justify-center group-hover:border-black group-hover:bg-black group-hover:text-white transition-all duration-300">
                      <info.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-light tracking-[0.3em] text-muted-foreground mb-1">
                        {info.label.toUpperCase()}
                      </div>
                      <div className="text-lg font-light group-hover:text-muted-foreground transition-colors">
                        {info.value}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-black/10">
              <div className="text-xs font-light tracking-[0.3em] text-muted-foreground mb-6">
                FOLLOW US
              </div>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    className="w-12 h-12 border border-black/10 flex items-center justify-center hover:border-black hover:bg-black hover:text-white transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <div className="pt-8 border-t border-black/10">
              <div className="text-xs font-light tracking-[0.3em] text-muted-foreground mb-6">
                BUSINESS HOURS
              </div>
              <div className="space-y-3 text-sm font-light">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-light tracking-[0.2em] text-muted-foreground">
                    NAME *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 border border-black/10 focus:border-black focus:outline-none font-light transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-light tracking-[0.2em] text-muted-foreground">
                    EMAIL *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 border border-black/10 focus:border-black focus:outline-none font-light transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-light tracking-[0.2em] text-muted-foreground">
                  PHONE
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-4 border border-black/10 focus:border-black focus:outline-none font-light transition-colors"
                  placeholder="+251 XXX XXXXXX"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-light tracking-[0.2em] text-muted-foreground">
                  SUBJECT *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 border border-black/10 focus:border-black focus:outline-none font-light transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-light tracking-[0.2em] text-muted-foreground">
                  MESSAGE *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-4 border border-black/10 focus:border-black focus:outline-none font-light transition-colors resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-black hover:bg-black/90 text-white font-light tracking-wider px-8 py-4 rounded-none group disabled:opacity-50"
              >
                {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                <Send className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>

              <p className="text-xs font-light text-muted-foreground text-center">
                We'll respond within 24 hours
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}