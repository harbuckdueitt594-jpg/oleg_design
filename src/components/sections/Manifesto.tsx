'use client';

import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useReducedMotion } from "framer-motion";

export default function Manifesto() {
  const reducedMotion = useReducedMotion();
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setIsMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);


  const content = (
    <div className="container mx-auto px-6 max-w-4xl text-center">
      <h2 className="font-serif text-3xl md:text-5xl leading-tight mb-8 text-obsidian-900">
        <span className="italic text-obsidian-900/60">The Manifesto.</span>
      </h2>
      <p className="font-sans text-xl md:text-3xl leading-relaxed font-light text-obsidian-900/80">
        &quot;{portfolioData.author.manifesto}&quot;
      </p>
    </div>
  );

  if (!isMounted || reducedMotion) {
    return (
      <section id="manifesto" className="bg-architectural-50 text-obsidian-900 py-24 md:py-32 relative light-scene">
        {content}
      </section>
    );
  }

  return (
    <section id="manifesto" className="bg-architectural-50 text-obsidian-900 py-24 md:py-32 relative light-scene">
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
