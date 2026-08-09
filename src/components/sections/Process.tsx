'use client';

import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Process() {
  return (
    <section id="process" className="bg-architectural-50 text-obsidian-900 py-32 border-t border-obsidian-900/5">
      <div className="container mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="font-serif text-4xl md:text-5xl uppercase">
            Services & <span className="italic text-obsidian-900/50">Process</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-[1px] bg-obsidian-900/10 z-0"></div>

          {portfolioData.process.map((step, index) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative z-10 flex flex-col"
            >
              <div className="w-24 h-24 rounded-full bg-architectural-100 border border-obsidian-900/10 flex items-center justify-center text-2xl font-serif mb-8 group hover:bg-electric-lime hover:border-electric-lime transition-colors duration-500">
                0{index + 1}
              </div>

              <h3 className="font-sans font-medium text-xl mb-4">{step}</h3>

              <div className="flex-grow">
                 {/* Visual placeholder for step description if we wanted to add them later */}
                 <div className="h-1 w-12 bg-electric-lime mb-4"></div>
              </div>

              {index < portfolioData.process.length - 1 && (
                <div className="md:hidden mt-8 flex justify-center">
                  <ArrowRight className="text-obsidian-900/20" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
