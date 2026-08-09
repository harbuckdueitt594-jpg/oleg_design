'use client';

import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useReducedMotion } from "framer-motion";

export default function TechSpotlight() {
  const reducedMotion = useReducedMotion();
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setIsMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);


  const spotlightProjects = portfolioData.projects.filter(p =>
    p.category === 'VIBE-CODING & FAST WEB' || p.category === 'AI ARCHITECTURE & AGENTS'
  );

  const content = (
    <div className="container mx-auto px-6">
      <div className="mb-16">
        <h2 className="font-mono text-electric-lime tracking-widest text-sm mb-4 uppercase">
          High-Tech Spotlight
        </h2>
        <h3 className="font-serif text-4xl md:text-5xl">Engineering <span className="italic text-white/50">Speed</span>.</h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {spotlightProjects.map((project) => (
          <div key={project.id} className="dark-glass rounded-2xl p-8 md:p-12 border border-white/10 relative overflow-hidden group">
            {/* Ambient glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-electric-lime/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-electric-lime/10 transition-colors duration-500"></div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-8">
                <h4 className="font-sans text-2xl font-medium">{project.title}</h4>
                <span className="font-mono text-[10px] uppercase tracking-widest text-electric-lime bg-electric-lime/10 px-2 py-1 rounded">
                  {project.category.split('&')[0]}
                </span>
              </div>

              <p className="font-serif text-xl text-architectural-50/80 italic mb-4">
                {project.subtitle}
              </p>

              <p className="font-sans text-sm text-architectural-50/60 font-light mb-8 flex-grow">
                {project.description}
              </p>

              {project.result && (
                <div className="mb-8 p-4 bg-obsidian-900/50 rounded-lg border border-white/5 border-l-2 border-l-electric-lime">
                  <span className="block font-mono text-[10px] text-architectural-50/40 uppercase mb-2">Outcome</span>
                  <p className="font-sans text-sm">{project.result}</p>
                </div>
              )}

              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="font-mono text-[10px] text-architectural-50/50 uppercase tracking-wider border border-white/10 px-2 py-1 rounded-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  if (!isMounted || reducedMotion) {
    return (
      <section id="tech" className="bg-obsidian-900 text-architectural-50 py-24 md:py-32 dark-scene divider-dark-to-light pb-40">
        {content}
      </section>
    );
  }

  return (
    <section id="tech" className="bg-obsidian-900 text-architectural-50 py-24 md:py-32 dark-scene divider-dark-to-light pb-40">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      >
        {content}
      </motion.div>
    </section>
  );
}
