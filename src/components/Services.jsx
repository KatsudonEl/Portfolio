import React from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_CONFIG } from "../data/portfolioData";

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-amber-400 block mb-2">
            Solutions &amp; Offerings
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
            What We Can <span className="text-gradient">Build Together</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Specialized end-to-end creative and analytical production tailored for modern e-commerce brands, tech companies, and forward-thinking creators.
          </p>
        </div>

        {/* 6 Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_CONFIG.services.map((service, i) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative rounded-3xl p-8 bg-[#141414]/90 border border-white/10 hover:border-amber-500/50 shadow-xl flex flex-col justify-between hover:-translate-y-2 transition-all duration-300"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 group-hover:bg-gradient-to-r group-hover:from-amber-500 group-hover:to-yellow-500 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.5)] transition-all">
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors">
                  {service.name}
                </h3>

                <p className="text-sm text-gray-400 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <ul className="space-y-2 pt-4 border-t border-white/5 text-xs text-gray-300">
                {service.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-amber-400 font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
