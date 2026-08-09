'use client';

import { portfolioData } from "@/data/portfolio";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { motion } from "framer-motion";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const reducedMotion = useReducedMotion();
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setIsMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerContent = (
    <div className={`container mx-auto px-6 h-16 flex items-center justify-between rounded-full mt-4 transition-colors duration-300 ${scrolled ? 'light-glass shadow-sm' : 'bg-transparent'}`}>
      <Link href="/" className="font-sans font-medium tracking-tight text-obsidian-900 text-lg group">
        <span className="transition-colors duration-200">OLEG</span>{" "}
        <span className="text-metallic-slate group-hover:text-obsidian-900 transition-colors duration-200">CHERNIKOV</span>
      </Link>

      <nav className="hidden md:flex items-center gap-8 text-sm font-mono text-obsidian-900/70">
        <Link href="#works" className="hover:text-obsidian-900 transition-colors duration-200">WORKS</Link>
        <Link href="#tech" className="hover:text-obsidian-900 transition-colors duration-200">TECH</Link>
        <Link href="#process" className="hover:text-obsidian-900 transition-colors duration-200">PROCESS</Link>
      </nav>

      <a
        href={portfolioData.contacts.telegram}
        target="_blank"
        rel="noopener noreferrer"
        className="px-5 py-2.5 bg-obsidian-900 text-architectural-50 font-sans font-medium text-sm rounded-full hover:bg-electric-lime hover:text-obsidian-900 hover:shadow-[0_0_15px_rgba(212,255,0,0.3)] transition-all duration-200"
      >
        Обсудить проект
      </a>
    </div>
  );

  if (!isMounted || reducedMotion) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50">
        {headerContent}
      </header>
    );
  }

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      {headerContent}
    </motion.header>
  );
}
