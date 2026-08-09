'use client';

import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useReducedMotion } from "framer-motion";

export default function Hero() {
  const reducedMotion = useReducedMotion();
  const [isMounted, setIsMounted] = useState(false);
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const id = requestAnimationFrame(() => setIsMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const mskTime = new Date().toLocaleTimeString("en-US", {
        timeZone: "Europe/Moscow",
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      });
      setTime(mskTime + " MSK");
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const categories = Array.from(new Set(portfolioData.projects.map(p => p.category)));

  const content = (
    <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-12">
      {/* Left Vertical Sub-Navigation */}
      <div className="hidden lg:flex lg:col-span-3 flex-col gap-4 mt-8">
        {categories.map((category) => (
          <div key={category} className="font-mono text-xs tracking-wider text-obsidian-900/40 uppercase hover:text-obsidian-900 transition-colors duration-200 cursor-pointer">
            {category}
          </div>
        ))}
      </div>

      {/* Main Center Content */}
      <div className="lg:col-span-6 flex flex-col justify-center h-full pt-12">
        <motion.h1
          className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] leading-[1] text-obsidian-900 mb-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
        >
          {portfolioData.author.name.split(' // ').map((line, i) => (
            <motion.span
              key={i}
              className={`block ${i === 1 ? 'text-2xl md:text-4xl lg:text-5xl italic text-obsidian-900/70 mt-2' : ''}`}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              {i === 1 ? "// " + line : line}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          className="font-sans text-lg md:text-xl text-obsidian-900/80 font-light mb-12 max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          {portfolioData.author.manifesto}
        </motion.p>
      </div>

      {/* Right Spatial Coordinates & Hero Visual */}
      <div className="lg:col-span-3 flex flex-col items-end pt-12 relative">
        <div className="w-full mb-8 flex flex-col items-end text-right">
          <div className="font-mono text-xs text-obsidian-900/50 mb-1">ST. PETERSBURG</div>
          <div className="font-mono text-sm text-obsidian-900 mb-4">59.9343° N | 30.3351° E</div>

          <div className="font-mono text-xs text-obsidian-900/50 mb-1">BRYANSK</div>
          <div className="font-mono text-sm text-obsidian-900 mb-6">53.2435° N | 34.3634° E</div>

          <div className="font-mono text-sm text-obsidian-900 flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-electric-lime"></div>
            {time}
          </div>
        </div>

        <div className="relative aspect-[3/4] w-full placeholder-gradient rounded-sm overflow-hidden border border-obsidian-900/10 shadow-xl filter contrast-125 saturate-50">
          <div className="absolute inset-0 bg-architectural-50/10 mix-blend-overlay"></div>
          <div className="absolute inset-0 flex items-center justify-center backdrop-blur-[2px]">
            <span className="font-mono text-architectural-50/30 text-sm tracking-widest rotate-90 opacity-50">AXURE_RENDER</span>
          </div>
        </div>

        {/* Floating Widget */}
        <div className="absolute -bottom-6 -left-6 lg:left-auto lg:-right-6 light-glass p-4 rounded-xl shadow-2xl z-20 flex items-center gap-4">
           <div className="flex flex-col">
             <span className="font-mono text-[10px] text-obsidian-900/60 uppercase">Latest Project ↗</span>
             <span className="font-sans text-sm font-medium text-obsidian-900">EIDOS-STUDIO.RU</span>
             <span className="font-sans text-xs text-obsidian-900/60">Launch in 7 days</span>
           </div>
        </div>
      </div>
    </div>
  );

  if (!isMounted || reducedMotion) {
    return (
      <section className="relative min-h-screen flex flex-col justify-center bg-architectural-50 pt-32 pb-24 overflow-hidden light-scene divider-light-to-dark">
        {content}
        <div className="absolute bottom-12 w-full">
           <div className="marquee-container opacity-40">
             <div className="marquee-content font-mono text-sm uppercase tracking-widest text-obsidian-900/60">
                <span className="mx-8">3-5x Speed</span> • <span className="mx-8">7-Day Launch</span> • <span className="mx-8">AI Architecture</span> • <span className="mx-8">Creative Direction</span> •
                <span className="mx-8">3-5x Speed</span> • <span className="mx-8">7-Day Launch</span> • <span className="mx-8">AI Architecture</span> • <span className="mx-8">Creative Direction</span> •
                <span className="mx-8">3-5x Speed</span> • <span className="mx-8">7-Day Launch</span> • <span className="mx-8">AI Architecture</span> • <span className="mx-8">Creative Direction</span>
             </div>
           </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-architectural-50 pt-32 pb-24 overflow-hidden light-scene divider-light-to-dark">
      {content}
      <motion.div
        className="absolute bottom-12 w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
         <div className="marquee-container opacity-40">
           <div className="marquee-content font-mono text-sm uppercase tracking-widest text-obsidian-900/60">
              <span className="mx-8">3-5x Speed</span> • <span className="mx-8">7-Day Launch</span> • <span className="mx-8">AI Architecture</span> • <span className="mx-8">Creative Direction</span> •
              <span className="mx-8">3-5x Speed</span> • <span className="mx-8">7-Day Launch</span> • <span className="mx-8">AI Architecture</span> • <span className="mx-8">Creative Direction</span> •
              <span className="mx-8">3-5x Speed</span> • <span className="mx-8">7-Day Launch</span> • <span className="mx-8">AI Architecture</span> • <span className="mx-8">Creative Direction</span>
           </div>
         </div>
      </motion.div>
    </section>
  );
}
