import React from "react";
import { ArrowUp, Mail } from "lucide-react";
import { PORTFOLIO_CONFIG } from "../data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="pt-24 pb-12 px-4 border-t border-white/5 relative overflow-hidden bg-gradient-to-b from-transparent via-amber-950/10 to-[#0D0D0D]">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Available For Work Badge */}
        <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-8 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_#10B981]" />
          <span>Available For Work • Q3/Q4 Projects</span>
        </div>

        {/* Main Footer Headline */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white leading-[1.1] mb-6 max-w-4xl mx-auto">
          Curious about what we can create together? <br />
          <span className="text-gradient">Let's bring something extraordinary to life!</span>
        </h2>

        <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto mb-10 leading-relaxed">
          Whether you need a full UGC ad test batch, a cinematic product reveal, or creative data performance analysis — my inbox is always open.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-20">
          <a
            href={`mailto:${PORTFOLIO_CONFIG.email}?subject=Project%20Inquiry%20-%20AI%20Video%20Creation`}
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-extrabold text-sm tracking-wide shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 transition-all inline-flex items-center gap-2"
          >
            <Mail className="w-4 h-4 text-black" />
            Send Email
          </a>

          <a
            href={PORTFOLIO_CONFIG.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-full bg-white/5 border border-white/10 hover:border-white/20 text-gray-200 font-semibold text-sm hover:bg-white/10 hover:-translate-y-0.5 transition-all inline-flex items-center gap-2"
          >
            <svg className="w-4 h-4 fill-current text-[#0A66C2]" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            Connect on LinkedIn
          </a>
        </div>

        {/* Giant JD Outline Text with Gradient Hover Fill */}
        <div className="my-10 select-none">
          <span
            className="font-display font-black text-[7rem] sm:text-[14rem] md:text-[18rem] leading-[0.75] tracking-tighter text-transparent transition-all duration-500 cursor-pointer inline-block hover:scale-105 hover:drop-shadow-[0_0_50px_rgba(245,158,11,0.5)]"
            style={{
              WebkitTextStroke: "2px rgba(255, 255, 255, 0.12)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.webkitTextStroke = "0px transparent";
              e.currentTarget.style.backgroundImage = "linear-gradient(135deg, #F59E0B, #FBBF24)";
              e.currentTarget.style.webkitBackgroundClip = "text";
              e.currentTarget.style.webkitTextFillColor = "transparent";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.webkitTextStroke = "2px rgba(255, 255, 255, 0.12)";
              e.currentTarget.style.backgroundImage = "none";
              e.currentTarget.style.webkitTextFillColor = "transparent";
            }}
          >
            JD
          </span>
        </div>

        {/* Meta Footer Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            © {new Date().getFullYear()} <strong className="text-gray-300">{PORTFOLIO_CONFIG.creatorName}</strong>. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`mailto:${PORTFOLIO_CONFIG.email}`}
              className="hover:text-amber-400 transition-colors"
            >
              {PORTFOLIO_CONFIG.email}
            </a>
            <span>•</span>
            <span>{PORTFOLIO_CONFIG.location}</span>
          </div>

          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-full bg-white/5 hover:bg-amber-500 hover:text-black text-gray-300 border border-white/10 flex items-center justify-center transition-all cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
