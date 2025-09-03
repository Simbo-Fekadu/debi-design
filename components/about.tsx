import { Card, CardContent } from "@/components/ui/card"
import { Palette, Users, Sparkles } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">About Deebii Design</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
            We specialize in creating custom cultural clothing that honors traditional craftsmanship while embracing
            modern fashion sensibilities. Each piece is thoughtfully designed to reflect your unique style and cultural
            heritage.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                <Palette className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">Custom Design</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every piece is tailored to your specific needs, preferences, and cultural background, ensuring a perfect
                fit and authentic representation.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">Cultural Heritage</h3>
              <p className="text-muted-foreground leading-relaxed">
                We honor traditional techniques and patterns while incorporating contemporary elements that resonate
                with today's fashion landscape.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                <Sparkles className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">Modern Trends</h3>
              <p className="text-muted-foreground leading-relaxed">
                Stay current with the latest fashion trends while maintaining the authenticity and elegance of
                traditional cultural wear.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
