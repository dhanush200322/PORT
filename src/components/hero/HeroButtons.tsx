"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

export default function HeroButtons() {
  return (
    <motion.div 
      className="flex flex-col sm:flex-row items-center gap-6 mt-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.a
        href="#projects"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        suppressHydrationWarning
        className="group relative px-8 py-4 bg-primary text-white rounded-full font-medium text-sm flex items-center gap-2 overflow-hidden w-full sm:w-auto justify-center cursor-pointer"
      >
        <span className="relative z-10 flex items-center gap-2">
          Explore Portfolio
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
      </motion.a>

      <motion.a
        href="#contact"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        suppressHydrationWarning
        className="group relative px-8 py-4 bg-white/5 border border-white/20 backdrop-blur-md text-white rounded-full font-medium text-sm flex items-center gap-2 overflow-hidden w-full sm:w-auto justify-center hover:border-white/40 transition-colors cursor-pointer"
      >
        <span className="relative z-10 flex items-center gap-2">
          Hire Me
          <Mail className="w-4 h-4" />
        </span>
        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
      </motion.a>
    </motion.div>
  );
}
