import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, FileVideo, Sparkles, CheckCircle2 } from "lucide-react";
import { PORTFOLIO_CONFIG } from "../data/portfolioData";

export default function ProjectModal({ project, isOpen, onClose, onPrev, onNext, currentIndex, totalCount }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose, onPrev, onNext]);

  // Restart and play video smoothly when modal opens or project changes
  useEffect(() => {
    if (isOpen && videoRef.current && project) {
      videoRef.current.currentTime = 0;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // If unmuted autoplay blocked by browser policy, mute and play automatically
          if (videoRef.current) {
            videoRef.current.muted = true;
            videoRef.current.play().catch(() => {});
          }
        });
      }
    }
  }, [project, isOpen]);

  if (!project) return null;

  // Resolve tools data
  const projectTools = project.tools.map((toolId) =>
    PORTFOLIO_CONFIG.aiTools.find((t) => t.id === toolId)
  ).filter(Boolean);

  const isVertical = project.orientation === "vertical";

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#060606]/92 backdrop-blur-2xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.94, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.94, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            className="relative w-full max-w-4xl bg-[#121212] border border-white/10 rounded-3xl shadow-[0_30px_70px_rgba(0,0,0,0.95),0_0_60px_rgba(245,158,11,0.15)] overflow-hidden z-10 flex flex-col my-auto max-h-[92vh]"
          >
            {/* Top Modal Header with Exact File Name */}
            <div className="px-6 py-4 bg-[#161616] border-b border-white/10 flex items-center justify-between gap-4 z-20">
              <div className="flex items-center gap-3 overflow-hidden">
                <span className="p-1.5 rounded-lg bg-amber-500/10 text-amber-400 shrink-0">
                  <FileVideo className="w-4 h-4" />
                </span>
                <div className="truncate">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400 block">
                    Source Video File
                  </span>
                  <span className="font-mono text-sm font-bold text-amber-300 truncate block">
                    {project.fileName}
                  </span>
                </div>
              </div>

              {/* Close button */}
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white flex items-center justify-center transition-all duration-200 cursor-pointer shrink-0"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Scrollable Content Container */}
            <div className="overflow-y-auto flex-1 flex flex-col">
              
              {/* Cinema Player Stage */}
              <div className="w-full bg-black relative flex items-center justify-center overflow-hidden border-b border-white/10 p-3 sm:p-6 bg-radial-gradient">
                <div
                  className={`relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black flex items-center justify-center ${
                    isVertical ? "w-full max-w-[340px] aspect-[9/16] max-h-[62vh]" : "w-full aspect-video max-h-[55vh]"
                  }`}
                >
                  <video
                    ref={videoRef}
                    key={project.id}
                    src={project.videoUrl}
                    controls
                    autoPlay
                    playsInline
                    preload="auto"
                    className="w-full h-full object-contain bg-black"
                  />
                </div>
              </div>

              {/* Details Body */}
              <div className="p-6 sm:p-8 flex flex-col gap-6">
                
                {/* Title & Metadata Badges */}
                <div className="flex flex-col gap-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300">
                      {project.categoryName}
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                      {project.format}
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                      {project.resolution}
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                      {project.fileSize}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                    {project.title}
                  </h3>
                  <span className="text-xs text-amber-400 font-semibold">
                    Client &amp; Target Industry: {project.clientIndustry}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {project.description}
                </p>

                {/* 3-Second Retention Hook Breakdown */}
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-yellow-500/5 to-transparent border border-amber-500/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span className="text-xs uppercase tracking-widest font-bold text-amber-400">
                      Psychological Hook Strategy
                    </span>
                  </div>
                  <p className="text-sm text-gray-200 leading-relaxed italic">
                    "{project.hook}"
                  </p>
                </div>

                {/* AI Toolchain & Deployed Models */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                  <span className="text-xs uppercase tracking-widest font-bold text-amber-400 block mb-3">
                    Deployed AI Engine Stack
                  </span>
                  <div className="flex flex-wrap gap-2.5">
                    {projectTools.map((tool) => (
                      <div
                        key={tool.id}
                        className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1A1A] border border-white/10 text-xs font-semibold text-gray-200"
                      >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill={tool.color}>
                          <path d={tool.iconPath} />
                        </svg>
                        <span>{tool.name}</span>
                        <span className="text-[10px] text-gray-500 hidden sm:inline">• {tool.tagline.split("&")[0]}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Production Deliverables Checklist */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-300">
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Direct-Response Script &amp; Storyboard Matrix</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>AI Video Generation &amp; Multimodal Synthesis</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>High-Fidelity Audio Mastering &amp; Voiceover Stems</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Exported Master Video ({project.format})</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Bottom Modal Navigation Controls */}
            <div className="px-6 py-4 bg-[#141414] border-t border-white/10 flex items-center justify-between z-20">
              <button
                onClick={onPrev}
                className="px-4 py-2 rounded-full bg-white/5 hover:bg-amber-500/10 hover:border-amber-500/40 border border-white/10 text-xs font-bold uppercase tracking-wider text-gray-200 inline-flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous Video
              </button>

              <div className="flex flex-col items-center">
                <span className="text-xs font-bold text-amber-400 tracking-wider">
                  {String(currentIndex + 1).padStart(2, "0")} / {String(totalCount).padStart(2, "0")}
                </span>
                <span className="text-[10px] text-gray-500 font-mono hidden sm:inline">
                  {project.fileName}
                </span>
              </div>

              <button
                onClick={onNext}
                className="px-4 py-2 rounded-full bg-white/5 hover:bg-amber-500/10 hover:border-amber-500/40 border border-white/10 text-xs font-bold uppercase tracking-wider text-gray-200 inline-flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                Next Video
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
