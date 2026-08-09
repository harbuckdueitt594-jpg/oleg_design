'use client';

import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useReducedMotion } from "framer-motion";

export default function Hero() {
  const reducedMotion = useReducedMotion();
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setIsMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);


  const content = (
    <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="max-w-2xl">
        <p className="font-mono text-obsidian-900/60 tracking-widest text-sm mb-6 uppercase">
          {portfolioData.author.role}
        </p>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] text-obsidian-900 mb-8">
          <span className="block">Precision</span>
          <span className="block text-obsidian-900/60 italic">Liquid Editorial.</span>
        </h1>

        <p className="font-sans text-xl text-obsidian-900/80 max-w-xl font-light mb-12">
          {portfolioData.author.tagline}
        </p>

        <div className="flex flex-wrap gap-4">
          {portfolioData.author.metrics.slice(0, 2).map((metric, idx) => (
            <div key={idx} className="light-glass px-4 py-2 rounded-full flex items-center gap-2">
               <div className="w-2 h-2 rounded-full bg-electric-lime shadow-[0_0_8px_rgba(212,255,0,0.8)]"></div>
               <span className="font-mono text-xs uppercase tracking-wider text-obsidian-900 font-medium">
                 {metric.label}: {metric.value}
               </span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] w-full max-w-md mx-auto lg:ml-auto placeholder-gradient border border-architectural-100 rounded-2xl overflow-hidden shadow-2xl">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-mono text-metallic-slate/50 text-sm tracking-widest">VISUAL_FRAME</span>
        </div>
        {/* Decorative architectural borders */}
        <div className="absolute top-4 left-4 w-8 h-[1px] bg-white/20"></div>
        <div className="absolute top-4 left-4 w-[1px] h-8 bg-white/20"></div>
        <div className="absolute bottom-4 right-4 w-8 h-[1px] bg-white/20"></div>
        <div className="absolute bottom-4 right-4 w-[1px] h-8 bg-white/20"></div>
      </div>
    </div>
  );

  if (!isMounted || reducedMotion) {
    return (
      <section className="relative min-h-screen flex items-center bg-architectural-50 pt-28 pb-20 overflow-hidden light-scene">
        {content}
      </section>
    );
  }

  return (
    <section className="relative min-h-screen flex items-center bg-architectural-50 pt-28 pb-20 overflow-hidden light-scene">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="w-full"
      >
        {content}
      </motion.div>
    </section>
  );
}
