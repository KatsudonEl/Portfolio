import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, Award, MapPin, Sparkles } from "lucide-react";
import { PORTFOLIO_CONFIG, getAssetUrl } from "../data/portfolioData";

export default function About() {
  const stats = [
    { label: "Featured Video Ads", value: 6, suffix: " HD" },
    { label: "AI Engines Mastered", value: 8, suffix: "+" },
    { label: "Data-Driven Tests", value: 100, suffix: "%" },
    { label: "Thesis Award Year", value: 2025, suffix: "" },
  ];

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-amber-400 block mb-2">
            The Creator Behind The Screen
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Meet <span className="text-gradient">JD</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Profile Card (Left Column) — with real profile image */}
          <div className="lg:col-span-4 glass-panel rounded-3xl p-6 sm:p-8 text-center relative overflow-hidden">
            {/* Animated Rotating Gradient Ring */}
            <div className="relative w-44 h-44 mx-auto mb-6 p-1 rounded-full">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-500 via-yellow-400 to-orange-500 animate-spin-slow blur-xs" />
              <div className="relative w-full h-full rounded-full bg-[#101010] p-1 overflow-hidden flex items-center justify-center border-2 border-black">
                {/* Profile Photo */}
                <img
                  src={getAssetUrl("jd-profile.jpg")}
                  alt="John Dave M. Justo"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-1">
              {PORTFOLIO_CONFIG.creatorName}
            </h3>
            <p className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-6">
              "{PORTFOLIO_CONFIG.alias}" • {PORTFOLIO_CONFIG.role}
            </p>

            <div className="flex flex-col gap-2.5 text-left text-xs">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <Briefcase className="w-4 h-4 text-amber-400 shrink-0" />
                <div>
                  <span className="text-gray-400 block text-[10px]">Currently</span>
                  <strong className="text-gray-200">{PORTFOLIO_CONFIG.currentCompany}</strong>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <Award className="w-4 h-4 text-yellow-400 shrink-0" />
                <div>
                  <span className="text-gray-400 block text-[10px]">Academic Honor</span>
                  <strong className="text-gray-200">{PORTFOLIO_CONFIG.thesisAward}</strong>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <span className="text-gray-400 block text-[10px]">Location</span>
                  <strong className="text-gray-200">{PORTFOLIO_CONFIG.location}</strong>
                </div>
              </div>
            </div>
          </div>

          {/* Bio & Skills (Right Column) */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            <div>
              <p className="text-lg sm:text-xl text-gray-200 leading-relaxed font-normal mb-4">
                I'm JD, a Computer Science graduate and AI content creator who blends{" "}
                <strong className="text-amber-400 font-bold">storytelling, design, and data</strong> to produce videos and visuals that actually convert. With hands-on experience as a Lead Data Analyst and UI/UX Designer, I understand what makes content perform, not just look good.
              </p>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed font-normal">
                Most video creators optimize solely for aesthetic appeal; most marketers look only at spreadsheets. By bridging the gap between generative AI tooling (Veo, Flow, Claude, Midjourney), statistical analytics (Power BI, Looker, Meta Ads testing), and human-centered design, every frame I produce is engineered to hold attention, invoke emotion, and prompt action.
              </p>
            </div>

            {/* Skills Tags Cloud */}
            <div>
              <h4 className="text-xs uppercase tracking-widest font-bold text-amber-400 mb-3">
                Core Competencies &amp; Technical Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {PORTFOLIO_CONFIG.skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-[#1A1A1A] border border-white/10 text-gray-300 hover:border-amber-500 hover:text-white hover:shadow-[0_0_15px_rgba(255,215,0,0.2)] transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Live Counter Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              {stats.map((s, i) => (
                <StatCounterItem key={i} stat={s} />
              ))}
            </div>

            {/* AI Engine Toolkit Grid in About */}
            <div className="pt-4 border-t border-white/10">
              <h4 className="text-xs uppercase tracking-widest font-bold text-amber-400 mb-4">
                The AI Engine Toolkit
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {PORTFOLIO_CONFIG.aiTools.map((tool) => (
                  <div
                    key={tool.id}
                    className="p-3.5 rounded-2xl bg-[#161616] border border-white/5 hover:border-amber-500/40 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center gap-2 group"
                  >
                    <svg className="w-7 h-7 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill={tool.color}>
                      <path d={tool.iconPath} />
                    </svg>
                    <span className="text-xs font-bold text-gray-200">
                      {tool.name}
                    </span>
                    <span className="text-[10px] text-gray-500 line-clamp-1">
                      {tool.tagline}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

/**
 * Animated number counter component
 */
function StatCounterItem({ stat }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1500;
    const stepTime = 25;
    const increment = Math.ceil(stat.value / (duration / stepTime));

    const timer = setInterval(() => {
      start += increment;
      if (start >= stat.value) {
        setCount(stat.value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, stat.value]);

  return (
    <div ref={ref} className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 text-center">
      <div className="font-display font-extrabold text-2xl sm:text-3xl text-gradient mb-1">
        {count}
        {stat.suffix}
      </div>
      <div className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
        {stat.label}
      </div>
    </div>
  );
}
