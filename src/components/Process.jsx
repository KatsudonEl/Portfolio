import React from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_CONFIG } from "../data/portfolioData";

export default function Process() {
  return (
    <section id="process" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-amber-400 block mb-2">
            Methodology
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
            From Idea to <span className="text-gradient">Final Cut</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            A tested, three-step iterative pipeline integrating AI speed with surgical analytical precision.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PORTFOLIO_CONFIG.process.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="group relative rounded-3xl p-8 bg-[#141414]/90 border border-white/10 hover:border-amber-500/50 shadow-xl flex flex-col justify-between overflow-hidden hover:-translate-y-2 transition-all duration-300"
            >
              {/* Large watermark number */}
              <span className="absolute top-4 right-6 font-display font-black text-7xl text-white/[0.03] group-hover:text-amber-500/10 transition-colors pointer-events-none select-none">
                {step.step}
              </span>

              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-6">
                  <span>Step {step.step}</span>
                  <span className="text-gray-600">•</span>
                  <span>{step.badge}</span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors">
                  {step.title}
                </h3>

                <p className="text-sm text-gray-400 leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5">
                <span className="text-[11px] font-bold text-amber-300 block">
                  Output: {step.deliverable}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
