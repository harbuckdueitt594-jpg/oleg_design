'use client';

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useReducedMotion } from "framer-motion";

// Update to 4 steps as requested in the prompt
const processSteps = [
  { title: "Discovery", desc: "Analyzing brand context and strategic goals." },
  { title: "Direction", desc: "Establishing the visual language and architecture." },
  { title: "Production", desc: "Rapid implementation via AI and modern stacks." },
  { title: "Launch", desc: "Deployment, testing, and hand-off." }
];

export default function Process() {
  const reducedMotion = useReducedMotion();
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setIsMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);


  const content = (
    <div className="container mx-auto px-6">
      <div className="text-center max-w-2xl mx-auto mb-20">
        <h2 className="font-serif text-4xl md:text-5xl text-obsidian-900 mb-6">Workflow.</h2>
        <p className="font-sans text-obsidian-900/60 text-lg font-light">Structured 4-step approach to deliver premium quality at speed.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {processSteps.map((step, index) => (
          <div key={step.title} className="relative group">
            {/* Connecting line for desktop */}
            {index < processSteps.length - 1 && (
              <div className="hidden lg:block absolute top-8 left-[60%] w-full h-[1px] bg-obsidian-900/10 z-0"></div>
            )}

            <div className="relative z-10 bg-architectural-50 border border-obsidian-900/10 p-8 rounded-2xl h-full flex flex-col group-hover:border-obsidian-900/20 transition-colors duration-200">
              <div className="w-16 h-16 rounded-full flex items-center justify-center font-serif text-2xl bg-architectural-100 text-obsidian-900 mb-8">
                0{index + 1}
              </div>
              <h3 className="font-sans text-xl font-medium text-obsidian-900 mb-3">
                {step.title}
              </h3>
              <p className="font-sans text-sm text-obsidian-900/60 font-light">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  if (!isMounted || reducedMotion) {
    return (
      <section id="process" className="bg-architectural-50 py-24 md:py-32 light-scene divider-light-to-dark pb-40">
        {content}
      </section>
    );
  }

  return (
    <section id="process" className="bg-architectural-50 py-24 md:py-32 light-scene divider-light-to-dark pb-40">
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
