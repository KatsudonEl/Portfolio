import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Projects from "./components/Projects";
import About from "./components/About";
import ExperienceTimeline from "./components/ExperienceTimeline";
import Process from "./components/Process";
import Services from "./components/Services";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0D0D0D] text-[#F3F4F6] selection:bg-amber-500/25 selection:text-amber-100">
      
      {/* Page Load Intro Reveal */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }}
            className="fixed inset-0 z-[10000] bg-[#0A0A0A] flex flex-col items-center justify-center pointer-events-none"
          >
            <div className="relative flex items-center justify-center">
              <div className="w-32 h-32 rounded-full border-2 border-dashed border-amber-500/40 border-t-yellow-400 animate-spin" />
              <div className="absolute font-display font-black text-5xl text-gradient animate-pulse">
                JD
              </div>
            </div>
            <p className="mt-6 text-xs uppercase tracking-[0.3em] text-gray-400 font-semibold">
              AI Video &amp; Visuals
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Film Grain Texture Overlay */}
      <div className="bg-grain" aria-hidden="true" />

      {/* Ambient Floating Gradient Blobs — warm gold tones */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-amber-600/8 blur-[130px] animate-blob" />
        <div className="absolute top-[35%] -right-40 w-[650px] h-[650px] rounded-full bg-yellow-500/8 blur-[140px] animate-blob [animation-delay:4s]" />
        <div className="absolute bottom-[10%] left-[10%] w-[550px] h-[550px] rounded-full bg-orange-600/8 blur-[130px] animate-blob [animation-delay:8s]" />
      </div>

      {/* Interactive Custom Cursor */}
      <CustomCursor />

      {/* Sticky Pill-Shaped Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <Marquee />
        <Projects />
        <About />
        <ExperienceTimeline />
        <Process />
        <Services />
        <FAQ />
      </main>

      {/* Contact Footer */}
      <Footer />
    </div>
  );
}
