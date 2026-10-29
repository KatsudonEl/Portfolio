import React from "react";
import { PORTFOLIO_CONFIG } from "../data/portfolioData";

export default function Marquee() {
  const tools = PORTFOLIO_CONFIG.aiTools;
  // Duplicate arrays for smooth infinite loop
  const row1 = [...tools, ...tools, ...tools];
  const row2 = [...tools.slice().reverse(), ...tools.slice().reverse(), ...tools.slice().reverse()];

  return (
    <section id="tools" className="py-16 border-y border-white/5 bg-[#0F0F0F]/40 relative overflow-hidden">
      <div className="text-center mb-8">
        <h3 className="text-xs uppercase tracking-[0.25em] font-bold text-gray-400">
          The AI Stack Behind My Work
        </h3>
      </div>

      <div className="flex flex-col gap-4">
        {/* Row 1: Leftward */}
        <div className="flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] group">
          <div className="flex shrink-0 gap-4 animate-marquee-left group-hover:[animation-play-state:paused]">
            {row1.map((tool, i) => (
              <div
                key={`r1-${i}`}
                className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#161616]/80 border border-white/10 hover:border-amber-500/60 hover:shadow-[0_0_20px_rgba(255,215,0,0.2)] transition-all duration-300 text-sm font-semibold text-gray-200 cursor-default"
              >
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill={tool.color}>
                  <path d={tool.iconPath} />
                </svg>
                <span>{tool.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Rightward */}
        <div className="flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] group">
          <div className="flex shrink-0 gap-4 animate-marquee-right group-hover:[animation-play-state:paused]">
            {row2.map((tool, i) => (
              <div
                key={`r2-${i}`}
                className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#161616]/80 border border-white/10 hover:border-yellow-500/60 hover:shadow-[0_0_20px_rgba(245,166,35,0.2)] transition-all duration-300 text-sm font-semibold text-gray-200 cursor-default"
              >
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill={tool.color}>
                  <path d={tool.iconPath} />
                </svg>
                <span>{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
