import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, Maximize2, FileVideo, Sparkles, ArrowUpRight } from "lucide-react";
import { PORTFOLIO_CONFIG } from "../data/portfolioData";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const categories = PORTFOLIO_CONFIG.categories;
  const allProjects = PORTFOLIO_CONFIG.projects;

  // Filter projects based on activeTab
  const filteredProjects = activeTab === "all"
    ? allProjects
    : allProjects.filter((p) => p.categoryId === activeTab);

  const handleOpenModal = (proj) => {
    const idx = allProjects.findIndex((p) => p.id === proj.id);
    setSelectedProject(proj);
    setSelectedIndex(idx >= 0 ? idx : 0);
  };

  const handlePrev = () => {
    const newIdx = (selectedIndex - 1 + allProjects.length) % allProjects.length;
    setSelectedIndex(newIdx);
    setSelectedProject(allProjects[newIdx]);
  };

  const handleNext = () => {
    const newIdx = (selectedIndex + 1) % allProjects.length;
    setSelectedIndex(newIdx);
    setSelectedProject(allProjects[newIdx]);
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-[0.2em] mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Real Video Productions</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-extrabold text-white mb-4"
          >
            Featured <span className="text-gradient">Video Works</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm sm:text-base leading-relaxed"
          >
            All production videos sourced directly from the portfolio library, labeled and formatted with full creative specs, hook breakdown, and AI toolchains.
          </motion.p>
        </div>

        {/* Sticky Filter Bar */}
        <div className="sticky top-20 z-30 flex justify-center pb-10 pt-2">
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-full bg-[#111111]/90 backdrop-blur-xl border border-white/10 shadow-2xl max-w-full overflow-x-auto">
            {categories.map((cat) => {
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`relative px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-colors duration-200 whitespace-nowrap cursor-pointer ${
                    isActive ? "text-black" : "text-gray-400 hover:text-gray-200"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabPill"
                      className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full shadow-lg shadow-amber-500/30"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">
                    {cat.name} {cat.id === "all" ? `(${cat.count})` : `(${allProjects.filter(p => p.categoryId === cat.id).length})`}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Responsive Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpen={() => handleOpenModal(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Full-Screen Cinema Modal */}
      <ProjectModal
        isOpen={Boolean(selectedProject)}
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onPrev={handlePrev}
        onNext={handleNext}
        currentIndex={selectedIndex}
        totalCount={allProjects.length}
      />
    </section>
  );
}

/**
 * Modern ProjectCard with Real Video Player, File Name Labeling, and Details
 */
function ProjectCard({ project, onOpen }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  // Play / Pause toggle
  const togglePlay = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  // Mute / Unmute toggle
  const toggleMute = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  // Autoplay on hover preview
  const handleMouseEnter = () => {
    if (videoRef.current && !isPlaying) {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current && isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  // Tool icons
  const projectTools = project.tools.map((toolId) =>
    PORTFOLIO_CONFIG.aiTools.find((t) => t.id === toolId)
  ).filter(Boolean);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`group relative rounded-2xl overflow-hidden bg-[#141414] border border-white/10 hover:border-amber-500/50 shadow-2xl flex flex-col justify-between transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_35px_rgba(245,158,11,0.15)] ${
        project.orientation === "landscape" ? "md:col-span-2 lg:col-span-2" : ""
      }`}
    >
      {/* File Name Header Pill Bar */}
      <div className="px-4 py-3 bg-[#181818] border-b border-white/5 flex items-center justify-between gap-2 z-10">
        <div className="flex items-center gap-2 overflow-hidden">
          <span className="p-1 rounded bg-amber-500/10 text-amber-400 shrink-0">
            <FileVideo className="w-3.5 h-3.5" />
          </span>
          <span className="font-mono text-xs font-semibold text-amber-300 truncate" title={project.fileName}>
            {project.fileName}
          </span>
        </div>
        <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-white/5 text-gray-400 border border-white/5 shrink-0">
          {project.fileSize}
        </span>
      </div>

      {/* Video Stage Frame */}
      <div
        onClick={onOpen}
        className={`relative w-full overflow-hidden bg-black cursor-pointer flex items-center justify-center ${
          project.orientation === "landscape" ? "aspect-video" : "aspect-[9/16] max-h-[500px]"
        }`}
      >
        <video
          ref={videoRef}
          src={project.videoUrl}
          loop
          muted={isMuted}
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        />

        {/* Video Overlays: Quick Action Controls */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity" />

        {/* Top Badges over video */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-20 pointer-events-none">
          <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-amber-300 border border-white/10">
            {project.format}
          </span>
          <span className="text-[10px] font-semibold px-2 py-1 rounded bg-black/70 backdrop-blur-md text-gray-300 border border-white/10">
            {project.resolution}
          </span>
        </div>

        {/* Hover / Inactive Center Play Button */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
            <div className="w-14 h-14 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 flex items-center justify-center text-black shadow-[0_0_30px_rgba(245,158,11,0.6)] group-hover:scale-110 transition-transform">
              <Play className="w-6 h-6 fill-current ml-0.5" />
            </div>
          </div>
        )}

        {/* Bottom Interactive Video Toolbar */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between z-20">
          <div className="flex items-center gap-2">
            <button
              onClick={togglePlay}
              className="w-8 h-8 rounded-full bg-black/70 hover:bg-amber-500 hover:text-black border border-white/20 text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-md"
              title={isPlaying ? "Pause Preview" : "Play Preview"}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current ml-0.5" />}
            </button>

            <button
              onClick={toggleMute}
              className="w-8 h-8 rounded-full bg-black/70 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-md"
              title={isMuted ? "Unmute Audio" : "Mute Audio"}
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5 text-gray-400" /> : <Volume2 className="w-3.5 h-3.5 text-amber-400" />}
            </button>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpen();
            }}
            className="px-3 py-1.5 rounded-full bg-black/70 hover:bg-amber-500 hover:text-black border border-white/20 text-white text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer backdrop-blur-md"
          >
            <span>Cinema View</span>
            <Maximize2 className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Card Details & Specifications */}
      <div className="p-5 flex flex-col justify-between flex-grow z-10 bg-[#121212]">
        <div>
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
              {project.categoryName}
            </span>
            <span className="text-[10px] text-gray-400">
              {project.clientIndustry}
            </span>
          </div>

          <h3
            onClick={onOpen}
            className="text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition-colors cursor-pointer"
          >
            {project.title}
          </h3>

          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Strategic Hook Callout Box */}
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 mb-4">
            <span className="text-[10px] uppercase font-bold tracking-wider text-amber-400/90 block mb-1">
              ⚡ 3-Second Retention Hook
            </span>
            <p className="text-xs text-gray-300 italic">
              "{project.hook}"
            </p>
          </div>
        </div>

        {/* Footer: Tools + View Case CTA */}
        <div className="flex items-center justify-between pt-3 border-t border-white/5">
          <div className="flex items-center gap-1.5">
            {projectTools.map((t) => (
              <div
                key={t.id}
                title={t.name}
                className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center p-1"
              >
                <svg className="w-full h-full" viewBox="0 0 24 24" fill={t.color}>
                  <path d={t.iconPath} />
                </svg>
              </div>
            ))}
          </div>

          <button
            onClick={onOpen}
            className="text-xs font-bold text-amber-400 hover:text-yellow-300 inline-flex items-center gap-1 group-hover:translate-x-1 transition-all cursor-pointer"
          >
            Full Breakdown
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </motion.article>
  );
}
