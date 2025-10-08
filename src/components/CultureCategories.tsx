import { Card, CardContent } from "./ui/card";
import { ArrowRight } from "lucide-react";

const cultures = [
  {
    name: "Asian Heritage",
    description: "Elegant designs from China, Japan, Korea, and Southeast Asia",
    designs: 156,
    color: "from-red-500 to-orange-500"
  },
  {
    name: "African Traditions",
    description: "Bold patterns and vibrant colors from across Africa",
    designs: 89,
    color: "from-yellow-500 to-red-500"
  },
  {
    name: "European Classics",
    description: "Traditional and folk costumes from European regions",
    designs: 124,
    color: "from-blue-500 to-purple-500"
  },
  {
    name: "Latin American",
    description: "Colorful embroideries and textiles from Latin America",
    designs: 73,
    color: "from-green-500 to-blue-500"
  },
  {
    name: "Middle Eastern",
    description: "Intricate patterns and luxurious fabrics",
    designs: 92,
    color: "from-purple-500 to-pink-500"
  },
  {
    name: "Indigenous Arts",
    description: "Sacred patterns and traditional weaving techniques",
    designs: 67,
    color: "from-orange-500 to-yellow-500"
  }
];

export function CultureCategories() {
  return (
    <section id="cultures" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl mb-6">Explore by Culture</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dive deep into the rich textile traditions of different cultures. 
            Each region offers unique patterns, techniques, and stories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cultures.map((culture, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer border-0">
              <div className={`h-2 bg-gradient-to-r ${culture.color}`}></div>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg mb-2 group-hover:text-primary transition-colors">
                      {culture.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {culture.description}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    <span className="text-foreground">{culture.designs}</span> designs available
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}