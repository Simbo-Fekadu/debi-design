import { Card, CardContent } from "./ui/card";
import { Globe, Users, Heart, Award } from "lucide-react";
import { ImageWithFallback } from './figma/ImageWithFallback';
import aboutImg from '../assets/images/Women/Irrecha-photos-by-hawinank24-7018.jpg';

const stats = [
  { icon: Globe, label: "Cultures Represented", value: "50+" },
  { icon: Heart, label: "Designs Created", value: "25K+" },
  { icon: Award, label: "Heritage Patterns", value: "500+" }
];

const features = [
  {
    title: "Cultural Authenticity",
    description: "Every design is researched and created in collaboration with cultural experts to ensure authenticity and respect."
  },
  {
    title: "Modern Tools",
    description: "State-of-the-art design tools that make it easy to create and customize traditional clothing patterns."
  },
  {
    title: "Community Driven",
    description: "Join a global community of designers and culture enthusiasts sharing knowledge and creativity."
  },
  {
    title: "Educational Resources",
    description: "Learn about the history, significance, and techniques behind each cultural clothing tradition."
  }
];

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                <div className="text-2xl mb-1">{stat.value}</div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl mb-6">
              Preserving Heritage Through Design
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              CulturalWear is more than just a design platform—it's a bridge between 
              traditional craftsmanship and modern creativity. We believe that cultural 
              clothing tells the story of humanity's rich diversity.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our mission is to make these beautiful traditions accessible to everyone 
              while ensuring they are represented with the respect and authenticity 
              they deserve.
            </p>
            
            <div className="space-y-4">
              {features.slice(0, 2).map((feature, index) => (
                <div key={index} className="border-l-4 border-primary pl-4">
                  <h4 className="mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <ImageWithFallback src={aboutImg} alt="About DEEBII" className="w-full h-full object-cover rounded" enableTapToToggle={true} />
            {features.slice(2).map((feature, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h4 className="mb-3">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}