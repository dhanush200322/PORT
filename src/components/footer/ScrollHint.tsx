"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowDown } from "lucide-react";

export default function ScrollHint() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "0px" });
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (isInView) {
      // Fade out the hint after 4 seconds of the footer being in view
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  return (
    <div ref={containerRef} className="absolute top-12 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isInView && isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex flex-col items-center gap-3"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-semibold">Explore Again</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-3 h-3 text-white/30" />
        </motion.div>
      </motion.div>
    </div>
  );
}
