"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useState } from "react";

interface ScrollToTopProps {
  onExit: (exiting: boolean) => void;
}

export default function ScrollToTop({ onExit }: ScrollToTopProps) {
  const { scrollYProgress } = useScroll();
  const [isClicked, setIsClicked] = useState(false);
  
  // Smooth the scroll progress for the SVG ring
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const handleClick = () => {
    if (isClicked) return;
    setIsClicked(true);
    
    // Trigger the parent exit animation sequence
    onExit(true);

    // After a delay to allow the footer to collapse visually, scroll to top
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      
      // Reset state after scrolling finishes
      setTimeout(() => {
        setIsClicked(false);
        onExit(false); // Reset footer visibility so it shows when scrolling down again
      }, 1000);
    }, 600); // 600ms delay to let particles dissolve and spotlight collapse
  };

  return (
    <div className="absolute bottom-12 right-6 md:right-12 z-50">
      <motion.button
        onClick={handleClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={isClicked ? { 
          scale: 0.9, 
          boxShadow: "0 0 40px rgba(255,255,255,0.8)",
          backgroundColor: "rgba(255,255,255,1)" 
        } : {}}
        suppressHydrationWarning
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-white/5 border border-white/10 text-white backdrop-blur-md group transition-colors duration-500 hover:bg-white/10 hover:border-white/30"
        aria-label="Scroll to top"
      >
        {/* Progress Ring */}
        <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 100 100">
          <circle 
            cx="50" cy="50" r="48" 
            fill="none" 
            stroke="rgba(255,255,255,0.1)" 
            strokeWidth="2" 
          />
          <motion.circle 
            cx="50" cy="50" r="48" 
            fill="none" 
            stroke="rgba(255,255,255,0.8)" 
            strokeWidth="2"
            strokeLinecap="round"
            style={{ pathLength: isClicked ? 1 : pathLength }}
            transition={isClicked ? { duration: 0.5, ease: "easeOut" } : {}}
          />
        </svg>

        {/* Icon */}
        <motion.div
          animate={isClicked ? { y: -30, opacity: 0 } : { y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ArrowUp className={`w-5 h-5 transition-colors duration-500 ${isClicked ? 'text-black' : 'text-white'}`} />
        </motion.div>
      </motion.button>
    </div>
  );
}
