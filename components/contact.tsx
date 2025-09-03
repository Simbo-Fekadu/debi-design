"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Instagram, MessageCircle } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            Ready to create your custom cultural clothing? Contact us to discuss your vision and let's bring your unique
            style to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Left Column (Main Contact Card) */}
          <div className="lg:col-span-3 space-y-8">
            <Card className="border border-border/60 shadow-sm hover:shadow-md transition-all duration-300 rounded-2xl overflow-hidden">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-primary tracking-tight mb-6">Contact Details</h3>
                <div className="grid sm:grid-cols-2 gap-8">
                  {/* Phones */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent"><Phone className="h-5 w-5" /></span>
                      <p className="font-medium text-primary">Phone</p>
                    </div>
                    <div className="pl-13 space-y-1 text-sm text-muted-foreground">
                      <p className="leading-relaxed">+251 937 740 130</p>
                      <p className="leading-relaxed">+251 910 049 291</p>
                    </div>
                  </div>
                  {/* WhatsApp */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.2 5.077 4.363.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347"/><path d="M12.051 2.003c5.446 0 9.877 4.428 9.879 9.872.002 5.448-4.431 9.883-9.878 9.883h-.004a9.83 9.83 0 0 1-4.992-1.338l-.357-.214-3.482.92.93-3.4-.243-.395a9.82 9.82 0 0 1-1.6-5.456c.003-5.45 4.432-9.872 9.747-9.872m0-2C5.403.003-.002 5.508 0 12.07c-.002 2.275.593 4.508 1.72 6.467L.11 23.96a1 1 0 0 0 1.226 1.226l5.552-1.48a11.82 11.82 0 0 0 5.163 1.249h.005c6.563 0 11.883-5.32 11.879-11.878C23.94 5.506 18.612.003 12.051.003"/></svg>
                      </span>
                      <p className="font-medium text-primary">WhatsApp</p>
                    </div>
                    <div className="pl-13 text-sm text-muted-foreground">
                      <a href="https://whatsapp.com/dl/" target="_blank" rel="noopener noreferrer" className="hover:text-accent">WhatsApp</a>
                    </div>
                  </div>
                  {/* Facebook */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
                      </span>
                      <p className="font-medium text-primary">Facebook</p>
                    </div>
                    <div className="pl-13 text-sm text-muted-foreground break-all">
                      <a href="https://www.facebook.com/profile.php?id=100075545182650" target="_blank" rel="noopener noreferrer" className="hover:text-accent">Deebii Design</a>
                    </div>
                  </div>
                  {/* Instagram */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent"><Instagram className="h-5 w-5" /></span>
                      <p className="font-medium text-primary">Instagram</p>
                    </div>
                    <div className="pl-13 text-sm text-muted-foreground">
                      <a href="https://www.instagram.com/deebii_design_?igsh=MXNsZ2F6NWFhbnNuYw==" target="_blank" rel="noopener noreferrer" className="hover:text-accent">Deebii Design</a>
                    </div>
                  </div>
                  {/* Telegram */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent"><MessageCircle className="h-5 w-5" /></span>
                      <p className="font-medium text-primary">Telegram</p>
                    </div>
                    <div className="pl-13 text-sm text-muted-foreground">
                      <a href="https://t.me/deebbii" target="_blank" rel="noopener noreferrer" className="hover:text-accent">Deebii Design</a>
                    </div>
                  </div>
                </div>
                <div className="mt-10 grid sm:grid-cols-3 gap-4">
                  <Button onClick={() => window.open('tel:+251937740130','_self')} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">Call</Button>
                  <Button variant="outline" onClick={() => window.open('https://whatsapp.com/dl/','_blank')} className="w-full hover:border-accent hover:text-accent">WhatsApp</Button>
                  <Button variant="outline" onClick={() => window.open('https://www.instagram.com/deebii_design_?igsh=MXNsZ2F6NWFhbnNuYw==','_blank')} className="w-full hover:border-accent hover:text-accent">Instagram</Button>
                </div>
              </CardContent>
            </Card>
            </div>

          {/* Right Column CTA */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-accent/10 via-accent/5 to-transparent rounded-3xl p-10 border border-accent/20 shadow-sm relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(circle_at_center,white,transparent)]" />
              <h3 className="text-3xl font-bold text-primary mb-5 tracking-tight">Start Your Custom Design</h3>
              <p className="text-muted-foreground leading-relaxed mb-8 text-sm sm:text-base">
                Traditional ceremonial wear, modern fusion, or something totally unique—share your idea and we'll craft a garment that reflects identity and elegance.
              </p>
              <div className="space-y-5">
                <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold tracking-wide" onClick={() => window.open('tel:+251937740130','_self')}>Call Now: +251 937 740 130</Button>
                <Button variant="outline" size="lg" className="w-full hover:border-accent hover:text-accent" onClick={() => window.open('https://whatsapp.com/dl/','_blank')}>Message on WhatsApp</Button>
                <Button variant="outline" size="lg" className="w-full hover:border-accent hover:text-accent" onClick={() => window.open('https://t.me/deebbii','_blank')}>Message on Telegram</Button>
                <Button variant="outline" size="lg" className="w-full hover:border-accent hover:text-accent" onClick={() => window.open('https://www.instagram.com/deebii_design_?igsh=MXNsZ2F6NWFhbnNuYw==','_blank')}>Follow on Instagram</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-12 border-t border-border text-center space-y-8">
          <div className="flex justify-center gap-8 text-muted-foreground text-xl">
            <a href="https://www.instagram.com/deebii_design_?igsh=MXNsZ2F6NWFhbnNuYw==" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="https://www.tiktok.com/@nardosmis?_t=ZM-8zOskqLpx6W&_r=1" aria-label="TikTok" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12.042 2c.705 1.233 1.58 2.284 2.645 3.034.843.59 1.8.95 2.78 1.062v3.401a8.484 8.484 0 0 1-4.833-1.467v5.358a5.358 5.358 0 1 1-5.358-5.358c.183 0 .36.017.537.034v3.567a1.79 1.79 0 1 0 1.253 1.702V2h2.976z"/></svg>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100075545182650" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
            </a>
            <a href="https://x.com" aria-label="X" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2H21.5l-7.377 8.42L23 22h-6.594l-5.17-6.766L5.1 22H1.844l7.91-9.027L2 2h6.75l4.713 6.231L18.244 2zm-2.318 17.94h2.035L8.16 3.94H6.003l9.923 16z"/></svg>
            </a>
            <a href="https://t.me/deebbii" aria-label="Telegram" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0C5.344 0 0 5.344 0 11.944c0 6.6 5.344 11.944 11.944 11.944s11.944-5.344 11.944-11.944C23.888 5.344 18.544 0 11.944 0zm5.487 8.171-1.944 9.163c-.146.657-.54.815-1.089.507l-3.005-2.215-1.451 1.397c-.16.16-.295.295-.605.295l.214-3.052 5.56-5.02c.242-.214-.053-.335-.374-.121l-6.874 4.327-2.96-.924c-.643-.2-.657-.643.136-.952l11.567-4.458c.54-.2 1.012.121.815.952z"/></svg>
            </a>
            <a href="https://whatsapp.com/dl/" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.2 5.077 4.363.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347"/><path d="M12.051 2.003c5.446 0 9.877 4.428 9.879 9.872.002 5.448-4.431 9.883-9.878 9.883h-.004a9.83 9.83 0 0 1-4.992-1.338l-.357-.214-3.482.92.93-3.4-.243-.395a9.82 9.82 0 0 1-1.6-5.456c.003-5.45 4.432-9.872 9.747-9.872m0-2C5.403.003-.002 5.508 0 12.07c-.002 2.275.593 4.508 1.72 6.467L.11 23.96a1 1 0 0 0 1.226 1.226l5.552-1.48a11.82 11.82 0 0 0 5.163 1.249h.005c6.563 0 11.883-5.32 11.879-11.878C23.94 5.506 18.612.003 12.051.003"/></svg>
            </a>
          </div>
          <p className="text-muted-foreground text-sm">
            © 2024 Deebii Design. All rights reserved. | Custom Cultural Clothing & Fashion Design
          </p>
        </div>
      </div>
    </section>
  )
}
