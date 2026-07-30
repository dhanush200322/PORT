"use client";

import { motion, Variants } from "framer-motion";
import ProjectsHeader from "./ProjectsHeader";
import ProjectsGrid from "./ProjectsGrid";
import { ArrowDown } from "lucide-react";

const dividerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.5 }
  }
};

const dividerLineVariants: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: { 
    scaleX: 1, 
    opacity: 1, 
    transition: { duration: 1, ease: "easeInOut" } 
  }
};

const dividerTextVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

export default function Projects() {
  return (
    <section id="projects" className="relative w-full min-h-screen bg-background py-24 md:py-32 overflow-hidden">
      
      {/* 
        Ultra-Subtle Background Gradient Motion 
        Animates background position very slowly over 30s.
      */}
      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none opacity-20"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundSize: "200% 200%",
          backgroundImage: "radial-gradient(circle at center, rgba(79,140,255,0.03) 0%, transparent 60%)"
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12">
        
        <ProjectsHeader />
        <ProjectsGrid />

        {/* Cinematic Section Transition Divider */}
        <motion.div 
          variants={dividerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-32 flex flex-col items-center opacity-80 hover:opacity-100 transition-opacity duration-500"
        >
          <motion.div variants={dividerLineVariants} className="w-full max-w-lg h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8 origin-center" />
          
          <motion.span variants={dividerTextVariants} className="text-xs font-medium uppercase tracking-[0.2em] text-gray-custom mb-2">
            Next
          </motion.span>
          
          <motion.span variants={dividerTextVariants} className="text-lg font-medium tracking-wide text-white mb-6">
            Professional Experience
          </motion.span>
          
          <motion.div
            variants={dividerTextVariants}
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          >
            <ArrowDown className="w-5 h-5 text-gray-custom" />
          </motion.div>
          
          <motion.div variants={dividerLineVariants} className="w-full max-w-lg h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent mt-8 origin-center" />
        </motion.div>
        
      </div>
    </section>
  );
}
