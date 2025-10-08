import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Slider } from "./ui/slider";
import { Palette, Layers, Sparkles, Download } from "lucide-react";
import { useState } from "react";

const colorPalettes = [
  { name: "Traditional", colors: ["#8B5CF6", "#F59E0B", "#EF4444", "#10B981"] },
  { name: "Earth Tones", colors: ["#92400E", "#A3A3A3", "#374151", "#059669"] },
  { name: "Ocean", colors: ["#3B82F6", "#06B6D4", "#10B981", "#8B5CF6"] },
  { name: "Sunset", colors: ["#F59E0B", "#EF4444", "#EC4899", "#8B5CF6"] }
];

const patterns = [
  { name: "Geometric", preview: "▲◆▼" },
  { name: "Floral", preview: "❀✿❀" },
  { name: "Stripes", preview: "|||" },
  { name: "Dots", preview: "●●●" }
];

export function CustomizeSection() {
  const [selectedPalette, setSelectedPalette] = useState(0);
  const [selectedPattern, setSelectedPattern] = useState(0);
  const [opacity, setOpacity] = useState([80]);
  const [scale, setScale] = useState([100]);

  return (
    <section id="customize" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl mb-6">Design Your Own</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Create unique cultural clothing designs with our intuitive customization tools. 
            Blend traditional patterns with modern aesthetics.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Design Preview */}
          <div className="order-2 lg:order-1">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                  {/* Pattern Preview */}
                  <div 
                    className="absolute inset-0 flex items-center justify-center text-6xl"
                    style={{ 
                      opacity: opacity[0] / 100,
                      transform: `scale(${scale[0] / 100})`,
                      color: colorPalettes[selectedPalette].colors[0]
                    }}
                  >
                    {patterns[selectedPattern].preview}
                  </div>
                  
                  {/* Color Overlay */}
                  <div 
                    className="absolute inset-0 mix-blend-multiply"
                    style={{
                      background: `linear-gradient(45deg, ${colorPalettes[selectedPalette].colors[0]}22, ${colorPalettes[selectedPalette].colors[1]}22)`
                    }}
                  ></div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg mb-1">Custom Design</h3>
                      <p className="text-sm text-muted-foreground">
                        {patterns[selectedPattern].name} • {colorPalettes[selectedPalette].name}
                      </p>
                    </div>
                    <Button size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Export
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Customization Controls */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Color Palettes */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Palette className="h-5 w-5 text-primary" />
                  <h3 className="text-lg">Color Palette</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {colorPalettes.map((palette, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedPalette(index)}
                      className={`p-3 rounded-lg border-2 transition-all ${
                        selectedPalette === index ? 'border-primary' : 'border-border'
                      }`}
                    >
                      <div className="flex gap-1 mb-2">
                        {palette.colors.map((color, colorIndex) => (
                          <div
                            key={colorIndex}
                            className="w-4 h-4 rounded-sm"
                            style={{ backgroundColor: color }}
                          ></div>
                        ))}
                      </div>
                      <p className="text-sm">{palette.name}</p>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Patterns */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Layers className="h-5 w-5 text-primary" />
                  <h3 className="text-lg">Pattern Style</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {patterns.map((pattern, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedPattern(index)}
                      className={`p-3 rounded-lg border-2 transition-all text-center ${
                        selectedPattern === index ? 'border-primary' : 'border-border'
                      }`}
                    >
                      <div className="text-2xl mb-2">{pattern.preview}</div>
                      <p className="text-sm">{pattern.name}</p>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Adjustments */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="h-5 w-5 text-primary" />
                  <h3 className="text-lg">Adjustments</h3>
                </div>
                <div className="space-y-6">
                  <div>
                    <label className="text-sm mb-2 block">Pattern Opacity</label>
                    <Slider
                      value={opacity}
                      onValueChange={setOpacity}
                      max={100}
                      min={10}
                      step={10}
                      className="w-full"
                    />
                    <p className="text-xs text-muted-foreground mt-1">{opacity[0]}%</p>
                  </div>
                  <div>
                    <label className="text-sm mb-2 block">Pattern Scale</label>
                    <Slider
                      value={scale}
                      onValueChange={setScale}
                      max={200}
                      min={50}
                      step={10}
                      className="w-full"
                    />
                    <p className="text-xs text-muted-foreground mt-1">{scale[0]}%</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button className="w-full" size="lg">
              Save Design
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}