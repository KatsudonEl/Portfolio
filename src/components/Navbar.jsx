import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { PORTFOLIO_CONFIG } from "../data/portfolioData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ["hero", "services", "projects", "process", "about", "experience", "faq", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Process", href: "#process" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <header className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <motion.nav
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`pointer-events-auto flex items-center gap-6 px-5 py-2.5 rounded-full border transition-all duration-300 ${
            scrolled
              ? "bg-[#0D0D0D]/90 backdrop-blur-xl border-amber-500/25 shadow-[0_12px_36px_rgba(0,0,0,0.7)]"
              : "bg-[#111111]/75 backdrop-blur-lg border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
          }`}
        >
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-1.5 font-display font-black text-xl text-white group">
            <span className="text-gradient">JD</span>
            <span className="text-xs font-normal text-gray-400 border-l border-white/10 pl-2">Creative</span>
          </a>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-5 list-none">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`relative text-xs uppercase tracking-wider font-semibold transition-colors duration-200 py-1 ${
                      isActive ? "text-amber-400" : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="navUnderline"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* CTA Button */}
          <div className="hidden sm:block">
            <a
              href={`mailto:${PORTFOLIO_CONFIG.email}?subject=Project%20Inquiry%20-%20AI%20Video%20Creation`}
              className="btn-glow-border px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-white inline-flex items-center gap-1.5 hover:shadow-[0_0_20px_rgba(255,215,0,0.3)] transition-shadow"
            >
              Get Started
              <ArrowUpRight className="w-3.5 h-3.5 text-amber-400" />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-gray-300 hover:text-white p-1"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </motion.nav>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-4 top-20 z-40 bg-[#111111]/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-semibold text-gray-200 hover:text-amber-400 border-b border-white/5 pb-2"
              >
                {link.name}
              </a>
            ))}
            <a
              href={`mailto:${PORTFOLIO_CONFIG.email}?subject=Project%20Inquiry%20-%20AI%20Video%20Creation`}
              onClick={() => setMobileOpen(false)}
              className="mt-2 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-bold text-center text-sm shadow-lg shadow-amber-500/25"
            >
              Get Started Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
