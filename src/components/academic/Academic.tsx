"use client";

import { motion } from "framer-motion";
import AcademicHeader from "./AcademicHeader";
import AcademicStorybook from "./AcademicStorybook";
import { ArrowDown } from "lucide-react";

export default function Academic() {
  return (
    <section id="academic" className="relative w-full bg-background min-h-screen">
      
      {/* 1. Header Section */}
      <AcademicHeader />

      {/* 2. Cinematic Sticky Storybook */}
      <AcademicStorybook />

      {/* 3. Bottom Transition & Quote */}
      <div className="relative w-full py-32 flex flex-col items-center justify-center border-t border-white/5 bg-gradient-to-b from-black to-background px-6">
        
        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl text-center mb-20"
        >
          <p className="text-2xl md:text-3xl lg:text-4xl font-light text-white/80 leading-relaxed italic">
            "Every lesson learned became another building block toward becoming the developer I am today."
          </p>
        </motion.div>

        {/* Animated Divider */}
        <motion.div 
          initial={{ height: 0 }}
          whileInView={{ height: 60 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-px bg-gradient-to-b from-primary/50 to-transparent mb-8"
        />

        {/* Next Section Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center flex flex-col items-center"
        >
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary mb-6">
            NEXT
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-8">
            Certifications & Achievements
          </h2>
          
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/50 shadow-[0_0_20px_rgba(255,255,255,0.02)]"
          >
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
}
