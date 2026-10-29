import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useSpring(0, { damping: 25, stiffness: 300 });
  const cursorY = useSpring(0, { damping: 25, stiffness: 300 });

  const ringX = useSpring(0, { damping: 20, stiffness: 180 });
  const ringY = useSpring(0, { damping: 20, stiffness: 180 });

  useEffect(() => {
    // Only enable on fine pointer devices (desktop)
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const moveHandler = (e) => {
      if (!isVisible) setIsVisible(true);
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      ringX.set(e.clientX);
      ringY.set(e.clientY);
    };

    const mouseOverHandler = (e) => {
      const target = e.target;
      if (target.closest("a, button, [role='button'], input, textarea, .hover-target, [data-tilt]")) {
        setIsHovered(true);
      }
    };

    const mouseOutHandler = (e) => {
      const target = e.target;
      if (target.closest("a, button, [role='button'], input, textarea, .hover-target, [data-tilt]")) {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", moveHandler);
    document.addEventListener("mouseover", mouseOverHandler);
    document.addEventListener("mouseout", mouseOutHandler);

    return () => {
      window.removeEventListener("mousemove", moveHandler);
      document.removeEventListener("mouseover", mouseOverHandler);
      document.removeEventListener("mouseout", mouseOutHandler);
    };
  }, [isVisible, cursorX, cursorY, ringX, ringY]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden">
      {/* Central dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-amber-400 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_#F59E0B]"
        style={{ x: cursorX, y: cursorY }}
      />
      {/* Trailing ring */}
      <motion.div
        className={`fixed top-0 left-0 rounded-full border border-amber-500/60 -translate-x-1/2 -translate-y-1/2 transition-colors duration-200 ${
          isHovered ? "border-amber-400 bg-amber-500/10 shadow-[0_0_15px_rgba(245,158,11,0.3)]" : ""
        }`}
        animate={{
          width: isHovered ? 56 : 32,
          height: isHovered ? 56 : 32,
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
        style={{ x: ringX, y: ringY }}
      />
    </div>
  );
}
