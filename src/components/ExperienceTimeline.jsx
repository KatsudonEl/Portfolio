import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PORTFOLIO_CONFIG } from "../data/portfolioData";

export default function ExperienceTimeline() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 80%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-amber-400 block mb-2">
            Career &amp; Academic Journey
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
            Experience &amp; <span className="text-gradient">Education</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            A proven blend of front-line industry analytical internships, award-winning academic research in computer science, and certified software quality engineering.
          </p>
        </div>

        {/* Timeline wrapper */}
        <div ref={containerRef} className="relative py-8">
          
          {/* Static track */}
          <div className="absolute top-0 bottom-0 left-6 md:left-1/2 -translate-x-1/2 w-[3px] bg-white/10 rounded-full" />
          
          {/* Animated drawing line */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute top-0 left-6 md:left-1/2 -translate-x-1/2 w-[3px] bg-gradient-to-b from-amber-500 via-yellow-400 to-orange-500 rounded-full shadow-[0_0_12px_#FFD700]"
          />

          {/* Timeline items: Experience */}
          {PORTFOLIO_CONFIG.experience.map((exp, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div
                key={i}
                className={`relative mb-12 flex flex-col md:flex-row items-start ${
                  isLeft ? "md:justify-start" : "md:justify-end"
                }`}
              >
                {/* Center Node */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#0D0D0D] border-2 border-amber-400 shadow-[0_0_10px_#FFD700] z-10" />

                {/* Card Content */}
                <div
                  className={`w-full pl-14 md:pl-0 md:w-[46%] ${
                    isLeft ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"
                  }`}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                    className="glass-panel rounded-2xl p-6 hover:border-amber-500/40 transition-colors shadow-xl"
                  >
                    <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-amber-500/10 text-amber-300 border border-amber-500/20 mb-3">
                      {exp.period}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                      {exp.role}
                    </h3>
                    <div className="text-xs font-semibold text-amber-300 mb-4">
                      {exp.company}
                    </div>
                    <ul className={`space-y-2 text-xs sm:text-sm text-gray-400 ${isLeft ? "md:list-none" : "list-none"}`}>
                      {exp.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-amber-400 shrink-0">▹</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </div>
            );
          })}

          {/* Timeline items: Education */}
          {PORTFOLIO_CONFIG.education.map((edu, i) => {
            const isLeft = (i + PORTFOLIO_CONFIG.experience.length) % 2 === 0;
            return (
              <div
                key={`edu-${i}`}
                className={`relative mb-12 flex flex-col md:flex-row items-start ${
                  isLeft ? "md:justify-start" : "md:justify-end"
                }`}
              >
                {/* Center Node */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#0D0D0D] border-2 border-yellow-400 shadow-[0_0_10px_#F5A623] z-10" />

                {/* Card Content */}
                <div
                  className={`w-full pl-14 md:pl-0 md:w-[46%] ${
                    isLeft ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"
                  }`}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                    className="glass-panel rounded-2xl p-6 hover:border-yellow-500/40 transition-colors shadow-xl"
                  >
                    <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-yellow-500/10 text-yellow-300 border border-yellow-500/20 mb-3">
                      {edu.period}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                      {edu.degree}
                    </h3>
                    <div className="text-xs font-semibold text-amber-300 mb-4">
                      {edu.institution}
                    </div>
                    <ul className={`space-y-2 text-xs sm:text-sm text-gray-400 ${isLeft ? "md:list-none" : "list-none"}`}>
                      {edu.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-yellow-400 shrink-0">▹</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </div>
            );
          })}

        </div>

        {/* Certifications and Honors */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          {PORTFOLIO_CONFIG.certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-5 rounded-2xl bg-[#161616] border border-white/5 hover:border-amber-500/40 hover:-translate-y-1 transition-all duration-300 flex items-start gap-3.5"
            >
              <div className="text-2xl p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 shrink-0">
                {cert.icon}
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-1">
                  {cert.title}
                </h4>
                <p className="text-xs text-gray-400 leading-snug">
                  {cert.issuer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
