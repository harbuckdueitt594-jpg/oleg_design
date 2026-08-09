'use client';

import { portfolioData } from "@/data/portfolio";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-obsidian-900/80 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="font-sans font-medium tracking-tight text-architectural-50 text-lg group">
          <span className="group-hover:text-electric-lime transition-colors duration-300">OLEG</span>{" "}
          <span className="text-metallic-slate group-hover:text-architectural-50 transition-colors duration-300">CHERNIKOV</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-mono text-metallic-slate">
          <Link href="#manifesto" className="hover:text-electric-lime transition-colors">MANIFESTO</Link>
          <Link href="#works" className="hover:text-electric-lime transition-colors">WORKS</Link>
          <Link href="#tech" className="hover:text-electric-lime transition-colors">TECH</Link>
          <Link href="#process" className="hover:text-electric-lime transition-colors">PROCESS</Link>
        </nav>

        <a
          href={portfolioData.contacts.telegram}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 bg-electric-lime text-obsidian-900 font-sans font-medium text-sm rounded-full hover:scale-105 hover:shadow-[0_0_20px_rgba(212,255,0,0.4)] transition-all duration-300"
        >
          Let&apos;s work
        </a>
      </div>
    </motion.header>
  );
}
