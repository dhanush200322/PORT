"use client";

import { motion } from "framer-motion";
import CertificatesHeader from "./CertificatesHeader";
import AchievementStats from "./AchievementStats";
import CertificateGallery from "./CertificateGallery";
import TechStackWall from "./TechStackWall";
import { ArrowDown } from "lucide-react";

export default function Certificates() {
  return (
    <section id="certifications" className="relative w-full bg-background min-h-screen overflow-hidden">
      
      {/* 1. Header Section */}
      <CertificatesHeader />

      {/* 2. Achievement Statistics */}
      <AchievementStats />

      {/* 3. Certificate Gallery (Bento Grid + Trust Strip) */}
      <CertificateGallery />

      {/* 4. Tech Stack Wall */}
      <TechStackWall />

      {/* 5. Bottom Transition */}
      <div className="relative w-full py-32 flex flex-col items-center justify-center border-t border-white/5 bg-gradient-to-b from-black to-background px-6">
        
        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl text-center mb-20"
        >
          <p className="text-xl md:text-2xl font-light text-white/80 leading-relaxed italic">
            "Continuous learning has been the foundation of every skill I've developed."
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center flex flex-col items-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/40 mb-3">
            Credentials Complete
          </span>
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary mb-6">
            What I Can Build
          </span>
          <h2 className="text-[var(--text-h2)] font-bold text-white tracking-tight mb-8">
            Services
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
