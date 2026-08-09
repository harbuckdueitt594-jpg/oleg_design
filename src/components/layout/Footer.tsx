'use client';

import { portfolioData } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useReducedMotion } from "framer-motion";
import { motion } from "framer-motion";

export default function Footer() {
  const reducedMotion = useReducedMotion();
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setIsMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);


  const content = (
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto text-center mb-24">
        <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-12">
          Let&apos;s create something <span className="italic text-white/50">extraordinary.</span>
        </h2>
        <a
          href={portfolioData.contacts.telegram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-electric-lime text-obsidian-900 font-sans text-xl rounded-full hover:scale-105 hover:shadow-[0_0_30px_rgba(212,255,0,0.4)] transition-all duration-300 group"
        >
          Write on Telegram
          <ArrowUpRight className="w-6 h-6 group-hover:rotate-45 transition-transform duration-300" />
        </a>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center py-8 border-t border-white/10 text-sm font-mono text-metallic-slate">
        <p>&copy; {new Date().getFullYear()} OLEG CHERNIKOV. ALL RIGHTS RESERVED.</p>

        <div className="flex gap-6 mt-4 md:mt-0">
          <a href={portfolioData.contacts.behance} className="hover:text-electric-lime transition-colors">Behance</a>
          <a href={portfolioData.contacts.github} className="hover:text-electric-lime transition-colors">GitHub</a>
          <a href={portfolioData.contacts.linkedin} className="hover:text-electric-lime transition-colors">LinkedIn</a>
        </div>
      </div>
    </div>
  );

  if (!isMounted || reducedMotion) {
    return (
      <footer className="bg-obsidian-900 text-architectural-50 pt-32 pb-8 dark-scene">
        {content}
      </footer>
    );
  }

  return (
    <footer className="bg-obsidian-900 text-architectural-50 pt-32 pb-8 dark-scene">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      >
        {content}
      </motion.div>
    </footer>
  );
}
