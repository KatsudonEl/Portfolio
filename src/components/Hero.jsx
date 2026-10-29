import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import { PORTFOLIO_CONFIG, getAssetUrl } from "../data/portfolioData";

export default function Hero() {
  const headlineWords = "Turning Ideas Into Scroll-Stopping AI Videos & Visuals.".split(" ");

  const previews = [
    {
      badge: "🏎️ Automotive Ad",
      title: "BMW GT3 EVO_ADS.mp4",
      videoUrl: getAssetUrl("videos/BMW%20GT3%20EVO_ADS.mp4"),
      gradient: "from-blue-950/80 via-neutral-900 to-black",
      delay: 0,
      yOffset: [-4, 6, -4],
      duration: 6
    },
    {
      badge: "⚡ Fitness UGC",
      title: "GymShark_FitnessAds.mp4",
      videoUrl: getAssetUrl("videos/GymShark_FitnessAds.mp4"),
      gradient: "from-zinc-900/80 via-neutral-900 to-black",
      delay: 0.5,
      yOffset: [6, -6, 6],
      duration: 7
    },
    {
      badge: "💻 SaaS Demo",
      title: "Saas_PromoVideo.mp4",
      videoUrl: getAssetUrl("videos/Saas_PromoVideo.mp4"),
      gradient: "from-indigo-950/80 via-neutral-900 to-black",
      delay: 1,
      yOffset: [-6, 4, -6],
      duration: 6.5
    },
    {
      badge: "✨ Skincare Ad",
      title: "Skincare_ComercialAds.mp4",
      videoUrl: getAssetUrl("videos/Skincare_ComercialAds.mp4"),
      gradient: "from-emerald-950/80 via-neutral-900 to-black",
      delay: 1.5,
      yOffset: [5, -5, 5],
      duration: 7.2
    }
  ];

  return (
    <section id="hero" className="min-h-screen pt-36 pb-20 flex flex-col items-center justify-center text-center relative overflow-hidden px-4">
      
      {/* Background ambient glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Hero Status Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold tracking-wide uppercase mb-6 shadow-[0_0_20px_rgba(255,215,0,0.1)]"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#10B981]" />
        <span>AI Video &amp; Content Creator</span>
      </motion.div>

      {/* Staggered Word Slide-Up Headline */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold max-w-5xl leading-[1.08] tracking-tight mb-6">
        {headlineWords.map((word, i) => {
          const isHighlight = word.includes("Scroll-Stopping") || word.includes("Videos") || word.includes("Visuals");
          return (
            <span key={i} className="inline-block overflow-hidden align-bottom mr-3">
              <motion.span
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.15 + i * 0.06,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className={`inline-block ${isHighlight ? "text-gradient" : "text-white"}`}
              >
                {word}
              </motion.span>
            </span>
          );
        })}
      </h1>

      {/* Subline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="text-base sm:text-xl text-gray-400 max-w-2xl mb-10 font-normal leading-relaxed"
      >
        UGC Ads <span className="text-amber-400 mx-2">•</span> Cinematic Commercials{" "}
        <span className="text-amber-400 mx-2">•</span> Social Content{" "}
        <span className="text-amber-400 mx-2">•</span> Storytelling
      </motion.p>

      {/* Action CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.85 }}
        className="flex flex-wrap items-center justify-center gap-4 mb-16"
      >
        <a
          href={`mailto:${PORTFOLIO_CONFIG.email}?subject=Project%20Inquiry%20-%20AI%20Video%20Creation`}
          className="px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-bold text-sm tracking-wide shadow-lg shadow-amber-500/30 hover:shadow-yellow-500/40 hover:-translate-y-0.5 transition-all duration-200 inline-flex items-center gap-2 group"
        >
          Get Started Now
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>

        <a
          href="#projects"
          className="px-8 py-3.5 rounded-full bg-white/5 border border-white/10 hover:border-amber-500/40 text-gray-200 font-semibold text-sm hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-200"
        >
          See Projects
        </a>
      </motion.div>

      {/* Floating Animated Preview Thumbnails */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-2 mb-12"
      >
        {previews.map((item, i) => (
          <motion.div
            key={i}
            animate={{ y: item.yOffset }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: item.delay
            }}
            className="group relative rounded-2xl overflow-hidden border border-white/10 bg-[#141414]/80 backdrop-blur-md p-4 text-left shadow-2xl hover:border-amber-500/50 hover:shadow-[0_15px_30px_rgba(255,215,0,0.12)] transition-all duration-300"
          >
            <div className={`aspect-video rounded-xl bg-gradient-to-br ${item.gradient} mb-3 border border-white/10 relative overflow-hidden flex items-center justify-center`}>
              <video
                src={item.videoUrl}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />
              <div className="absolute top-2 left-2 right-2 flex items-center justify-between z-10 pointer-events-none">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-black/70 backdrop-blur-md text-amber-300 border border-white/10">
                  {item.badge}
                </span>
                <Sparkles className="w-3 h-3 text-amber-400/80" />
              </div>
            </div>
            <h4 className="font-mono text-[11px] font-semibold text-gray-300 group-hover:text-amber-300 transition-colors truncate" title={item.title}>
              {item.title}
            </h4>
          </motion.div>
        ))}
      </motion.div>

      {/* Bouncing Scroll Indicator */}
      <a
        href="#tools"
        className="inline-flex flex-col items-center gap-2 text-xs uppercase tracking-widest text-gray-500 hover:text-amber-400 transition-colors"
      >
        <span>Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </a>

    </section>
  );
}
