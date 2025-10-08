import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Download, Share2, Save, RotateCcw, Grid, Square, Circle, Triangle } from 'lucide-react';
import { Button } from './ui/button';
import { Slider } from './ui/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

export function DesignStudio() {
  const [selectedTool, setSelectedTool] = useState('shapes');
  const [selectedShape, setSelectedShape] = useState('square');
  const [strokeWidth, setStrokeWidth] = useState([2]);
  const [opacity, setOpacity] = useState([1]);

  const tools = [
    { id: 'shapes', name: 'SHAPES', icon: Square },
    { id: 'grid', name: 'GRID', icon: Grid },
    { id: 'patterns', name: 'PATTERNS', icon: Circle },
    { id: 'typography', name: 'TYPE', icon: Triangle },
  ];

  const shapes = [
    { id: 'square', name: 'SQUARE', icon: Square },
    { id: 'circle', name: 'CIRCLE', icon: Circle },
    { id: 'triangle', name: 'TRIANGLE', icon: Triangle },
  ];

  return (
    <section className="py-32 px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-20"
      >
        <div className="text-xs font-light tracking-[0.5em] text-muted-foreground mb-4">
          DESIGN STUDIO
        </div>
        <h1 className="text-5xl sm:text-6xl font-extralight leading-tight mb-8">
          MINIMAL
          <br />
          <span className="text-muted-foreground">CREATOR</span>
        </h1>
        <p className="text-lg font-light text-muted-foreground max-w-2xl">
          Create clean, geometric designs using our minimalist design tools. 
          Every element is carefully crafted to maintain visual harmony and purpose.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-4 gap-12">
        {/* Tools Panel */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          {/* Tool Selection */}
          <div className="space-y-4">
            <div className="text-xs font-light tracking-[0.3em] text-muted-foreground">
              TOOLS
            </div>
            <div className="space-y-2">
              {tools.map((tool) => (
                <button
                  key={tool.id}
                  onClick={() => setSelectedTool(tool.id)}
                  className={`w-full p-4 text-left border transition-all duration-300 ${
                    selectedTool === tool.id
                      ? 'border-black bg-black text-white'
                      : 'border-black/10 hover:border-black/30'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <tool.icon className="w-4 h-4" />
                    <span className="text-sm font-light tracking-wider">{tool.name}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Shape Selection */}
          {selectedTool === 'shapes' && (
            <div className="space-y-4">
              <div className="text-xs font-light tracking-[0.3em] text-muted-foreground">
                SHAPES
              </div>
              <div className="grid grid-cols-3 gap-2">
                {shapes.map((shape) => (
                  <button
                    key={shape.id}
                    onClick={() => setSelectedShape(shape.id)}
                    className={`aspect-square border flex items-center justify-center transition-all duration-300 ${
                      selectedShape === shape.id
                        ? 'border-black bg-black text-white'
                        : 'border-black/10 hover:border-black/30'
                    }`}
                  >
                    <shape.icon className="w-5 h-5" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Properties */}
          <div className="space-y-6">
            <div className="text-xs font-light tracking-[0.3em] text-muted-foreground">
              PROPERTIES
            </div>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-light tracking-wider">STROKE WIDTH</label>
                <Slider
                  value={strokeWidth}
                  onValueChange={setStrokeWidth}
                  max={10}
                  min={1}
                  step={1}
                  className="w-full"
                />
                <div className="text-xs text-muted-foreground">{strokeWidth[0]}px</div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-light tracking-wider">OPACITY</label>
                <Slider
                  value={opacity}
                  onValueChange={setOpacity}
                  max={1}
                  min={0.1}
                  step={0.1}
                  className="w-full"
                />
                <div className="text-xs text-muted-foreground">{(opacity[0] * 100).toFixed(0)}%</div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-2">
            <div className="text-xs font-light tracking-[0.3em] text-muted-foreground mb-4">
              ACTIONS
            </div>
            {[
              { icon: Save, label: 'SAVE' },
              { icon: Download, label: 'EXPORT' },
              { icon: Share2, label: 'SHARE' },
              { icon: RotateCcw, label: 'RESET' },
            ].map((action, index) => (
              <Button
                key={index}
                variant="outline"
                className="w-full border-black/10 hover:border-black hover:bg-black hover:text-white text-black font-light tracking-wider rounded-none justify-start"
              >
                <action.icon className="w-4 h-4 mr-3" />
                {action.label}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Design Canvas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="lg:col-span-3"
        >
          <div className="border border-black/10 aspect-[4/3] bg-white p-12 relative">
            {/* Canvas Header */}
            <div className="absolute top-6 left-6 right-6 flex justify-between items-center">
              <div className="text-xs font-light tracking-[0.3em] text-muted-foreground">
                CANVAS
              </div>
              <div className="flex gap-4 text-xs font-light tracking-wider text-muted-foreground">
                <span>1920 × 1080</span>
                <span>100%</span>
              </div>
            </div>

            {/* Design Area */}
            <div className="w-full h-full flex items-center justify-center relative mt-8">
              {/* Grid Background */}
              <div className="absolute inset-0 opacity-5">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <defs>
                    <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                      <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#000" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100" height="100" fill="url(#grid)" />
                </svg>
              </div>

              {/* Design Elements */}
              <div className="relative z-10 flex items-center justify-center space-x-8">
                {selectedTool === 'shapes' && (
                  <>
                    {selectedShape === 'square' && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: opacity[0], scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="w-24 h-24 border-black"
                        style={{ borderWidth: strokeWidth[0] }}
                      />
                    )}
                    {selectedShape === 'circle' && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: opacity[0], scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="w-24 h-24 border-black rounded-full"
                        style={{ borderWidth: strokeWidth[0] }}
                      />
                    )}
                    {selectedShape === 'triangle' && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: opacity[0], scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="w-0 h-0"
                        style={{
                          borderLeft: '48px solid transparent',
                          borderRight: '48px solid transparent',
                          borderBottom: `96px solid black`,
                          opacity: opacity[0]
                        }}
                      />
                    )}
                  </>
                )}

                {selectedTool === 'grid' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: opacity[0] }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-3 grid-rows-3 gap-4"
                  >
                    {Array.from({ length: 9 }).map((_, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 border-black"
                        style={{ borderWidth: strokeWidth[0] }}
                      />
                    ))}
                  </motion.div>
                )}

                {selectedTool === 'patterns' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: opacity[0] }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-12 h-12 border-black rounded-full" style={{ borderWidth: strokeWidth[0] }} />
                    <div className="w-12 h-12 border-black" style={{ borderWidth: strokeWidth[0] }} />
                    <div className="w-12 h-12 border-black rounded-full" style={{ borderWidth: strokeWidth[0] }} />
                  </motion.div>
                )}

                {selectedTool === 'typography' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: opacity[0], y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-6xl font-extralight tracking-wider"
                  >
                    MINIMAL
                  </motion.div>
                )}
              </div>
            </div>

            {/* Canvas Footer */}
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">
              <div className="text-xs font-light tracking-[0.3em] text-muted-foreground">
                DEEBII STUDIO
              </div>
              <div className="text-xs font-light tracking-wider text-muted-foreground">
                {selectedTool.toUpperCase()} TOOL ACTIVE
              </div>
            </div>
          </div>

          {/* Canvas Controls */}
          <div className="mt-8 flex justify-center">
            <Button
              size="lg"
              className="bg-black hover:bg-black/90 text-white font-light tracking-wider px-12 py-4 rounded-none"
            >
              EXPORT DESIGN
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}