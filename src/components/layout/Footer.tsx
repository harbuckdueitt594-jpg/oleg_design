'use client';

import { portfolioData } from "@/data/portfolio";
import { Link2, Mail, MessageCircle, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer id="contact" className="bg-obsidian-800 text-architectural-50 py-32 border-t border-white/5 relative overflow-hidden">
      {/* Decorative accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-electric-lime/50 to-transparent"></div>

      <div className="container mx-auto px-6 text-center max-w-4xl relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-5xl md:text-7xl mb-12 uppercase"
        >
          Ready to elevate <br className="hidden md:block"/>
          <span className="text-electric-lime/90 italic">your brand?</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <a
            href={portfolioData.contacts.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-electric-lime text-obsidian-900 rounded-full font-sans font-semibold text-lg hover:shadow-[0_0_40px_rgba(212,255,0,0.4)] hover:scale-105 transition-all duration-300"
          >
            <Send className="w-5 h-5" />
            Write on Telegram
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-8 items-center text-metallic-slate"
        >
          <a href={portfolioData.contacts.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-electric-lime transition-colors" aria-label="WhatsApp">
            <MessageCircle className="w-6 h-6" />
          </a>
          <a href={portfolioData.contacts.email} target="_blank" rel="noopener noreferrer" className="hover:text-electric-lime transition-colors" aria-label="Email">
            <Mail className="w-6 h-6" />
          </a>
          <a href={portfolioData.contacts.behance} target="_blank" rel="noopener noreferrer" className="hover:text-electric-lime transition-colors font-serif italic text-xl" aria-label="Behance">
            Bē
          </a>
          <a href={portfolioData.contacts.github} target="_blank" rel="noopener noreferrer" className="hover:text-electric-lime transition-colors font-serif italic text-xl" aria-label="GitHub">
            Git
          </a>
          <a href={portfolioData.contacts.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-electric-lime transition-colors" aria-label="LinkedIn">
            <Link2 className="w-6 h-6" />
          </a>
        </motion.div>

        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-metallic-slate/50">
          <p>© {new Date().getFullYear()} Oleg Chernikov.</p>
          <p>Direction KA Engineering / AI-Creator / Design</p>
        </div>
      </div>
    </footer>
  );
}
