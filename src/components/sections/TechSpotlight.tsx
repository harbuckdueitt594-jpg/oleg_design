'use client';

import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { Terminal, Code2, Cpu } from "lucide-react";

export default function TechSpotlight() {
  const featuredTechProjects = portfolioData.projects.filter(
    p => p.id === "eidos-studio-web" || p.id === "kai-intelligence"
  );

  return (
    <section id="tech" className="bg-[#050505] text-architectural-50 py-32 border-t border-white/5 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-96 bg-electric-lime/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <div className="inline-flex items-center justify-center p-3 bg-white/5 rounded-full mb-6 border border-white/10">
            <Cpu className="w-6 h-6 text-electric-lime" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl uppercase mb-4">
            Vibe-Coding & <br/> <span className="italic text-metallic-slate">AI Architecture</span>
          </h2>
          <p className="font-mono text-sm text-metallic-slate max-w-xl mx-auto">
            SYSTEM.DEPLOY(high_performance_assets)
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {featuredTechProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="group relative bg-[#0C0D0E] border border-white/10 rounded-lg overflow-hidden hover:border-electric-lime/30 transition-colors duration-500"
            >
              {/* IDE Header */}
              <div className="flex items-center px-4 py-3 border-b border-white/5 bg-[#050505]/50">
                <div className="flex gap-1.5 mr-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20 group-hover:bg-red-500/80 transition-colors"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20 group-hover:bg-yellow-500/80 transition-colors"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20 group-hover:bg-green-500/80 transition-colors"></div>
                </div>
                <div className="font-mono text-xs text-metallic-slate flex items-center gap-2">
                  <Terminal className="w-3 h-3" />
                  {project.id}.ts
                </div>
              </div>

              {/* Content body */}
              <div className="p-8 md:p-10">
                <h3 className="font-sans font-medium text-2xl mb-2 text-electric-lime">{project.title}</h3>
                <p className="font-serif italic text-metallic-slate mb-6">{project.subtitle}</p>

                <p className="font-sans font-light text-sm text-architectural-50/80 mb-8 leading-relaxed">
                  {project.description}
                </p>

                {project.result && (
                  <div className="mb-8 p-4 bg-white/5 border border-white/5 rounded backdrop-blur-sm">
                    <p className="font-mono text-xs text-metallic-slate mb-2 uppercase tracking-widest">{`// RETURN.IMPACT`}</p>
                    <p className="font-sans text-sm text-architectural-50">{project.result}</p>
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 bg-[#050505] border border-white/10 rounded text-xs font-mono text-metallic-slate flex items-center gap-1.5">
                      <Code2 className="w-3 h-3 text-electric-lime/70" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
