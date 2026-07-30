"use client";

import { motion, Variants } from "framer-motion";
import { TechItem } from "./ExpertiseData";

const chipVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      type: "spring",
      stiffness: 260,
      damping: 20 
    } 
  }
};

export default function TechnologyChip({ tech }: { tech: TechItem }) {
  // Core technologies get premium emphasis styling
  const baseClasses = "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 hover:scale-105 cursor-default";
  
  const styleClasses = tech.isCore
    ? "bg-primary/10 border border-primary/30 text-white hover:bg-primary/20 hover:border-primary/50 hover:shadow-[0_0_12px_rgba(79,140,255,0.3)]"
    : "bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_10px_rgba(255,255,255,0.1)]";

  return (
    <motion.div 
      variants={chipVariants}
      className={`${baseClasses} ${styleClasses}`}
    >
      <span className="opacity-90">{tech.icon}</span>
      <span>{tech.name}</span>
      
      {/* Tiny glowing indicator for Core technologies */}
      {tech.isCore && (
        <span className="relative flex h-1.5 w-1.5 ml-0.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"></span>
        </span>
      )}
    </motion.div>
  );
}
