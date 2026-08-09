'use client';

import { portfolioData } from "@/data/portfolio";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

const CATEGORIES = [
  "ALL",
  "SMM & BRAND IDENTITY",
  "NEURO-CINEMATIC",
  "E-COMMERCE & PRINT",
  "VIBE-CODING & FAST WEB",
  "AI ARCHITECTURE & AGENTS"
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "ALL") return portfolioData.projects;
    return portfolioData.projects.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="works" className="bg-obsidian-900 text-architectural-50 py-32 min-h-screen">
      <div className="container mx-auto px-6">

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl uppercase"
          >
            Selected <span className="italic text-electric-lime/80">Works</span>
          </motion.h2>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2 md:gap-4"
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-4 py-2 rounded-full text-xs font-mono transition-all duration-300 border",
                  activeCategory === cat
                    ? "bg-electric-lime border-electric-lime text-obsidian-900"
                    : "border-white/10 text-metallic-slate hover:border-white/30 hover:text-architectural-50"
                )}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, type: "spring", bounce: 0.2 }}
                className={cn(
                  "group cursor-pointer",
                  // Make featured items span full width on desktop occasionally, or just keep grid standard.
                  // For a cleaner editorial look, we'll keep a strict 2-col grid but adjust aspect ratios.
                )}
              >
                {/* Image Placeholder */}
                <div
                  className="placeholder-gradient rounded-sm mb-6 transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  style={{ aspectRatio: project.imagePlaceholderRatio.replace('/', ' / ') }}
                >
                  <div className="absolute top-4 left-4 flex gap-2 z-10">
                    {project.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="px-3 py-1 bg-obsidian-900/80 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-mono text-architectural-50 uppercase">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Decorative tech markers */}
                  <div className="absolute bottom-4 right-4 text-electric-lime/50 font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    [SYS.RENDER_OK]
                  </div>
                  <div className="absolute inset-0 bg-electric-lime/0 group-hover:bg-electric-lime/5 transition-colors duration-500"></div>
                </div>

                {/* Content */}
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-sans font-medium text-xl md:text-2xl tracking-tight group-hover:text-electric-lime transition-colors duration-300">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="w-6 h-6 text-metallic-slate group-hover:text-electric-lime transition-colors duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>

                  {project.subtitle && (
                    <p className="font-serif italic text-metallic-slate mb-4 text-lg">
                      {project.subtitle}
                    </p>
                  )}

                  <p className="font-sans font-light text-sm text-architectural-50/70 line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
