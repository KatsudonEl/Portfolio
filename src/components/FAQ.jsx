import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { PORTFOLIO_CONFIG } from "../data/portfolioData";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 px-4 relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-amber-400 block mb-2">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Transparent answers about timelines, AI pipelines, rights, and workflow collaboration.
          </p>
        </div>

        {/* Accordion list */}
        <div className="flex flex-col gap-3">
          {PORTFOLIO_CONFIG.faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`rounded-2xl border transition-colors duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-[#161616] border-amber-500/40 shadow-lg"
                    : "bg-[#111111]/90 border-white/5 hover:border-white/15"
                }`}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-white">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 font-bold ${
                      isOpen ? "bg-gradient-to-r from-amber-500 to-yellow-500 text-black rotate-45" : "bg-white/5 text-gray-400"
                    }`}
                  >
                    <Plus className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-5 sm:px-6 pb-6 text-sm text-gray-400 leading-relaxed border-t border-white/5 pt-3">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
