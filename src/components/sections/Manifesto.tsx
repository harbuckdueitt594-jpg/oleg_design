'use client';

import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";

export default function Manifesto() {
  return (
    <section id="manifesto" className="bg-architectural-100 text-obsidian-900 py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-8">
              The <br className="hidden md:block"/>
              <span className="italic text-obsidian-900/60">Philosophy</span>
            </h2>
            <p className="font-sans text-xl md:text-2xl leading-relaxed font-light">
              {portfolioData.author.manifesto}
            </p>
          </motion.div>

          <div className="flex flex-col justify-center gap-12">
            {portfolioData.author.metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border-b border-obsidian-900/10 pb-6 group"
              >
                <div className="flex justify-between items-end">
                  <span className="font-mono text-xs uppercase tracking-widest text-obsidian-900/50 group-hover:text-obsidian-900 transition-colors">
                    0{index + 1} {`// ${metric.label}`}
                  </span>
                  <span className="font-serif text-4xl md:text-5xl text-obsidian-900 group-hover:text-electric-lime group-hover:drop-shadow-md transition-all duration-300">
                    {metric.value}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
