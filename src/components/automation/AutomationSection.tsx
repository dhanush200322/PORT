"use client";

import { motion, Variants } from "framer-motion";
import { ArrowDown } from "lucide-react";
import GhlExperience from "./GhlExperience";
import GhlWorkGrid from "./GhlWorkGrid";
import GhlCTA from "./GhlCTA";

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

export default function AutomationSection() {
  return (
    <section id="automation" className="relative w-full bg-background py-20 md:py-28 overflow-hidden">
      
      {/* GHL Inspired Violet & Purple Ambient Gradient Backdrop */}
      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none opacity-20"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundSize: "200% 200%",
          backgroundImage: "radial-gradient(circle at 50% 30%, rgba(124,58,237,0.12) 0%, rgba(217,70,239,0.06) 40%, transparent 70%)"
        }}
      />

      {/* Very Low Opacity Grid Lines */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.015] z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 md:px-12 flex flex-col items-center">
        
        {/* Subsection 01: GoHighLevel Experience */}
        <GhlExperience />

        {/* Subsection 02: GoHighLevel Work */}
        <GhlWorkGrid />

        {/* Compact Call to Action */}
        <GhlCTA />

        {/* Cinematic Section Transition Divider to Experience */}
        <motion.div 
          variants={dividerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="w-full max-w-4xl px-6 flex flex-col items-center opacity-80 hover:opacity-100 transition-opacity duration-500 mt-12"
        >
          <motion.div variants={dividerLineVariants} className="w-full max-w-lg h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8 origin-center" />
          
          <motion.span variants={dividerTextVariants} className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400 mb-2 font-mono">
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
            <ArrowDown className="w-5 h-5 text-gray-400" />
          </motion.div>
          
          <motion.div variants={dividerLineVariants} className="w-full max-w-lg h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent mt-8 origin-center" />
        </motion.div>

      </div>
    </section>
  );
}
