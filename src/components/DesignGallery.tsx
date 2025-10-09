import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Heart, Eye, Download } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const designs = [
  {
    id: 1,
    title: "Traditional Indian Saree",
    culture: "Indian",
    image: "https://images.unsplash.com/photo-1712686422222-b2bdb134000f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGZhYnJpYyUyMHBhdHRlcm5zfGVufDF8fHx8MTc1OTg2NDg2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    likes: 245,
    views: 1200,
    colors: ["#8B5CF6", "#F59E0B", "#EF4444"]
  },
  {
    id: 2,
    title: "Japanese Kimono Design",
    culture: "Japanese",
    image: "https://images.unsplash.com/photo-1739202527610-9f9d2a5dbddd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWJyb2lkZXJ5JTIwdHJhZGl0aW9uYWwlMjBhcnR8ZW58MXx8fHwxNzU5ODY0ODY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    likes: 189,
    views: 890,
    colors: ["#EC4899", "#10B981", "#3B82F6"]
  },
  {
    id: 3,
    title: "African Kente Pattern",
    culture: "African",
    image: "https://images.unsplash.com/photo-1701964619775-b18422290cf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXh0aWxlJTIwZGVzaWduJTIwcGF0dGVybnN8ZW58MXx8fHwxNzU5ODY0ODY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    likes: 324,
    views: 1567,
    colors: ["#F59E0B", "#EF4444", "#10B981"]
  },
  {
    id: 4,
    title: "Mexican Embroidery",
    culture: "Mexican",
    image: "https://images.unsplash.com/photo-1743080331389-3517430d2cc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdWx0dXJhbCUyMGRyZXNzJTIwZmFzaGlvbnxlbnwxfHx8fDE3NTk4NjQ4Njd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    likes: 156,
    views: 723,
    colors: ["#EF4444", "#F59E0B", "#EC4899"]
  },
  {
    id: 5,
    title: "Nordic Wool Patterns",
    culture: "Nordic",
    image: "https://images.unsplash.com/photo-1758269736002-71d2e00f6ba3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWF2aW5nJTIwdGV4dGlsZSUyMGFydHxlbnwxfHx8fDE3NTk4NjQ4Njd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    likes: 201,
    views: 934,
    colors: ["#6366F1", "#8B5CF6", "#EC4899"]
  },
  {
    id: 6,
    title: "Chinese Silk Brocade",
    culture: "Chinese",
    image: "https://images.unsplash.com/photo-1646822356463-c05d53c24308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGN1bHR1cmFsJTIwY2xvdGhpbmd8ZW58MXx8fHwxNzU5ODY0ODY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    likes: 278,
    views: 1345,
    colors: ["#F59E0B", "#EF4444", "#8B5CF6"]
  }
];

export function DesignGallery() {
  return (
    <section id="designs" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl mb-6">Featured Designs</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover beautiful traditional clothing designs from cultures around the world. 
            Each piece tells a story of heritage and craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {designs.map((design) => (
            <Card key={design.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer">
              <div className="relative aspect-[4/5] overflow-hidden">
                <ImageWithFallback
                  src={design.image}
                  alt={design.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-transform duration-300"
                  enableTapToToggle={true}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 pointer-events-none"></div>
                
                {/* Overlay Actions */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors">
                    <Heart className="h-4 w-4" />
                  </button>
                  <button className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors">
                    <Download className="h-4 w-4" />
                  </button>
                </div>

                {/* Culture Badge */}
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-white/90 text-foreground">
                    {design.culture}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-lg mb-2">{design.title}</h3>
                
                {/* Color Palette */}
                <div className="flex gap-2 mb-4">
                  {design.colors.map((color, index) => (
                    <div
                      key={index}
                      className="w-4 h-4 rounded-full border border-border"
                      style={{ backgroundColor: color }}
                    ></div>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Heart className="h-4 w-4" />
                      <span>{design.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      <span>{design.views}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}