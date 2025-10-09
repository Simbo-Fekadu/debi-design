import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { analyzeImages, clusterByHash, AnalyzedImage } from '../utils/imageUtils';

// Load images from the local assets/images folder (including subfolders) using Vite's glob
const imageModules = import.meta.glob('../assets/images/**/*.{jpg,jpeg,png,JPG,JPEG,PNG,jpg}', { eager: true, query: '?url', import: 'default' }) as Record<string, string>;
const galleryImages = Object.values(imageModules || {});

// Fallback single image (kept for legacy cases) — use a local asset from src/assets
import coralStripeDesign from '../assets/2858f785b344b0b3dec420a775218a7235d28bdf.png';

export function Collections() {
  const [activeCategory, setActiveCategory] = useState('all');
  // Carousel state removed — collections render as a grid now.

  const categories = [
    { id: 'all', label: 'ALL DESIGNS' },
    { id: 'women', label: 'WOMEN' },
    { id: 'men', label: 'MEN' },
    { id: 'kids', label: 'KIDS' },
  ];

  // ============================================
  // COLLECTION DATA
  // Add your products here with actual images, titles, descriptions and prices
  // ============================================
  // Build a simple collections structure using images found in src/assets/images
  const galleryItems = (galleryImages.length ? galleryImages : [coralStripeDesign]).map((src, i) => ({
    id: i + 1,
    title: `Design ${i + 1}`,
    description: 'Traditional patterns reimagined',
    image: src,
    price: ''
  }));

  // Helper to classify images by URL/filename
  const classifyUrl = (url?: string): 'women' | 'men' | 'kids' | 'uncategorized' => {
    if (!url) return 'uncategorized';
    const lower = url.toLowerCase();
    const name = lower.split('/').pop() || lower;
    const base = name.split('?')[0].replace(/\.[^.]+$/, '');
    if (lower.includes('/women/') || base.match(/woman|women|female|lady|girl/)) return 'women';
    if (lower.includes('/men/') || base.match(/man(?!y)|men|male|groom/)) return 'men';
    if (lower.includes('/kids/') || base.match(/kid|child|children|baby/)) return 'kids';
    // also consider files that start with sp as featured; leave uncategorized for now
    return 'uncategorized';
  };

  // Build collections by classification. 'all' will be the union.
  const collections: Record<string, any[]> = { women: [], men: [], kids: [], all: [] };
  galleryItems.forEach((it) => {
    const cat = classifyUrl(it.image);
    if (cat === 'uncategorized') {
      collections.all.push(it);
    } else {
      collections[cat].push(it);
      collections.all.push(it);
    }
  });

  // analysis state
  const [clusters, setClusters] = useState<AnalyzedImage[][] | null>(null);
  const [clusterIndices, setClusterIndices] = useState<Record<number, number>>({});
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});

  useEffect(() => {
    let mounted = true;
    async function runAnalysis() {
      const urls = galleryItems.map(i => i.image);
      const analyzed = await analyzeImages(urls);
      // order analyzed by quality descending
      analyzed.sort((a, b) => b.score - a.score);
      const cls = clusterByHash(analyzed, 12);
      if (!mounted) return;
      setClusters(cls);
      // init indices
      const idxs: Record<number, number> = {};
      cls.forEach((c, i) => (idxs[i] = 0));
      setClusterIndices(idxs);
    }
    runAnalysis();
    return () => {
      mounted = false;
    };
  }, []);

  // Carousel helpers removed.

  const renderCategorySection = (categoryId: keyof typeof collections, categoryTitle: string) => {
    const items = collections[categoryId];
    if (!items || items.length === 0) return null;

    const isExpanded = !!expandedCategories[categoryId];

    // Build a unified list of cards to render. If clusters exist (we analyzed gallery), use cluster primaries,
    // otherwise use the raw items as-is.
    type Card = { id: string; url: string; title?: string; description?: string; score?: number; count?: number };
    let cards: Card[] = [];
    if (clusters && clusters.length > 0) {
      cards = clusters.map((cluster, i) => ({
        id: `cluster-${i}`,
        url: cluster[0].url,
        title: `Cluster ${i + 1}`,
        score: cluster[0].score,
        count: cluster.length,
      }));
      // Filter clusters by the current category
      cards = cards.filter(c => {
        if (categoryId === 'all') return true;
        const cat = classifyUrl(c.url);
        return cat === categoryId;
      });
    } else {
      cards = items.map(it => ({ id: String(it.id), url: it.image, title: it.title, description: it.description }));
    }

    // Featured detection: filename contains 'sp' (case-insensitive)
    const getFileNameFromUrl = (u?: string) => {
      if (!u) return '';
      try {
        const p = u.split('/').pop() || u;
        const base = p.split('?')[0].toLowerCase();
        // remove extension
        return base.replace(/\.[^.]+$/, '');
      } catch (e) {
        return '';
      }
    };

    // Improved featured detection: filenames that start with 'sp' (sp0, sp01, etc.) or include 'sp'
    const featured = cards.filter(c => {
      const name = getFileNameFromUrl(c.url);
      return name.startsWith('sp') || name.includes('sp');
    });
    const nonFeatured = cards.filter(c => !featured.includes(c));

    // If we have no explicit featured items, use top N items (by score if available)
    const fallbackCount = 6;
    const initialCards = featured.length > 0 ? featured : cards.slice(0, fallbackCount);
    const toShow = isExpanded ? cards : initialCards;

    return (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-32"
      >
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="text-xs font-light tracking-[0.5em] text-muted-foreground mb-2">COLLECTION</div>
            <h3 className="text-4xl font-extralight tracking-wide">{categoryTitle}</h3>
          </div>
        </div>

        {/* Grid of cards (responsive: 1 / 2 / 3 columns) */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {toShow.map((c) => (
            <motion.div key={c.id} className="group relative" whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
              <div className="aspect-[3/4] overflow-hidden bg-muted relative">
                <ImageWithFallback src={c.url} alt={c.title || c.id} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" style={{ objectPosition: 'center 10%' }} enableTapToToggle={true} />
                <div className="absolute bottom-3 right-3 w-28 h-8 rounded bg-white/80 backdrop-blur-sm pointer-events-none" />
              </div>
              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-light">{c.title || ''}</h4>
                  {c.count && <span className="text-xs text-muted-foreground">{c.count} pics</span>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View more / collapse */}
        {cards.length > toShow.length && (
          <div className="mt-8 text-center">
            <Button
              size="lg"
              variant="outline"
              onClick={() => setExpandedCategories(prev => ({ ...prev, [categoryId]: !prev[categoryId] }))}
              className="rounded-none px-12"
            >
              {isExpanded ? 'Show less' : `View more (${cards.length - toShow.length})`}
            </Button>
          </div>
        )}
      </motion.div>
    );
  };

  return (
    <section id="collections" className="py-32 px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-20 text-center"
      >
        <div className="text-xs font-light tracking-[0.5em] text-muted-foreground mb-4">
          DEEBII COLLECTIONS
        </div>
        <h2 className="text-5xl sm:text-6xl font-extralight leading-tight mb-8">
          CURATED
          <br />
          <span className="text-muted-foreground">DESIGNS</span>
        </h2>
        <p className="text-lg font-light text-muted-foreground max-w-2xl mx-auto">
          Explore our carefully curated collection of traditional Ethiopian clothing 
          reimagined with contemporary minimalist aesthetics.
        </p>
      </motion.div>

      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-4 mb-20"
      >
        {categories.map((category) => (
          <Button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            variant={activeCategory === category.id ? 'default' : 'outline'}
            className={`font-light tracking-wider px-8 py-2 rounded-none ${
              activeCategory === category.id
                ? 'bg-black text-white'
                : 'border-black/10 hover:border-black hover:bg-black hover:text-white'
            }`}
          >
            {category.label}
          </Button>
        ))}
      </motion.div>

  {/* Collections by Category */}
  {/* Collections by Category */}
  {activeCategory === 'all' ? (
    renderCategorySection('all', 'ALL')
  ) : activeCategory === 'women' ? (
    renderCategorySection('women', 'WOMEN')
  ) : activeCategory === 'men' ? (
    renderCategorySection('men', 'MEN')
  ) : activeCategory === 'kids' ? (
    renderCategorySection('kids', 'KIDS')
  ) : null}

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-32 text-center border-t border-black/10 pt-20"
      >
        <h3 className="text-3xl font-extralight mb-4">
          CUSTOM <span className="text-muted-foreground">ORDERS</span>
        </h3>
        <p className="text-lg font-light text-muted-foreground mb-8 max-w-2xl mx-auto">
          Can't find exactly what you're looking for? We offer custom design services 
          tailored to your specific needs and preferences.
        </p>
        <Button
          size="lg"
          onClick={() => {
            // Scroll to contact section if present, otherwise request app-level navigation
            const contactSection = document.getElementById('contact');
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: 'smooth' });
            } else {
              // dispatch a navigation event so the app can switch to the contact page
              try {
                window.dispatchEvent(new CustomEvent('navigate-to', { detail: 'contact' }));
              } catch (e) {
                // fallback: set hash
                window.location.hash = '#contact';
              }
            }
          }}
          className="bg-black hover:bg-black/90 text-white font-light tracking-wider px-12 py-4 rounded-none"
        >
          REQUEST CUSTOM DESIGN
        </Button>
      </motion.div>
    </section>
  );
}