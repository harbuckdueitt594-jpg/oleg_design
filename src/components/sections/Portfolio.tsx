'use client';

import { portfolioData } from "@/data/portfolio";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useReducedMotion } from "framer-motion";

const categories = ["ALL", ...Array.from(new Set(portfolioData.projects.map(p => p.category)))];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const reducedMotion = useReducedMotion();
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setIsMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);


  const filteredProjects = portfolioData.projects.filter(
    (p) => activeCategory === "ALL" || p.category === activeCategory
  );

  return (
    <section id="works" className="bg-obsidian-900 text-architectural-50 py-32 dark-scene divider-dark-to-light pb-40">
      <div className="container mx-auto px-6">

        <div className="mb-16 md:mb-24">
          <h2 className="font-serif text-4xl md:text-6xl mb-12">Selected Works</h2>

          <div className="flex flex-wrap gap-2 md:gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full font-mono text-xs tracking-wider transition-all duration-200 border ${
                  activeCategory === category
                  ? 'bg-electric-lime text-obsidian-900 border-electric-lime'
                  : 'bg-transparent text-architectural-50/70 border-white/10 hover:border-white/30'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 auto-rows-min">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              // Asymmetric grid logic based on index and featured status (if we had complex logic, but simple pattern for now)
              // Let's use featured for 100%, then alternate sizes for others
              let colSpan = "md:col-span-4"; // Default 33%
              let aspect = "aspect-square"; // 1/1

              if (project.featured) {
                 colSpan = "md:col-span-12"; // 100%
                 aspect = "aspect-[16/9]";
              } else if (index % 3 === 0) {
                 colSpan = "md:col-span-8"; // 66%
                 aspect = "aspect-[16/9]";
              } else if (index % 3 === 1) {
                 colSpan = "md:col-span-4"; // 33%
                 aspect = "aspect-[4/5]";
              }

              // Override with data ratio if provided
              if (project.imagePlaceholderRatio === '16/9') aspect = "aspect-[16/9]";
              if (project.imagePlaceholderRatio === '4/5') aspect = "aspect-[4/5]";
              if (project.imagePlaceholderRatio === '1/1') aspect = "aspect-square";
              if (project.imagePlaceholderRatio === '3/4') aspect = "aspect-[3/4]";

              const cardContent = (
                <div className="group h-full flex flex-col bg-obsidian-800 border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-colors duration-200">
                  <div className={`w-full ${aspect} placeholder-gradient p-6 flex flex-col justify-between`}>
                    <div className="flex justify-between items-start">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-architectural-50/50 bg-obsidian-900/50 px-2 py-1 rounded backdrop-blur-md">
                        {project.category}
                      </span>
                    </div>
                    <div className="font-mono text-xs text-architectural-50/30 text-right opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      VIEW_CASE
                    </div>
                  </div>

                  <div className="p-6 md:p-8 flex-grow flex flex-col">
                    <h3 className="font-sans text-xl md:text-2xl font-medium mb-2 group-hover:text-electric-lime transition-colors duration-200">
                      {project.title}
                    </h3>
                    {project.subtitle && (
                      <p className="font-serif text-lg text-architectural-50/70 mb-4 italic">
                        {project.subtitle}
                      </p>
                    )}
                    <p className="font-sans text-sm text-architectural-50/60 font-light mb-6 flex-grow">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="font-mono text-[10px] text-architectural-50/40 uppercase tracking-wider">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );

              if (!isMounted || reducedMotion) {
                return (
                  <div key={project.id} className={`${colSpan}`}>
                    {cardContent}
                  </div>
                );
              }

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className={`${colSpan}`}
                >
                  {cardContent}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
