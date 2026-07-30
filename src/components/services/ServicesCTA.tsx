"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Download } from "lucide-react";

export default function ServicesCTA() {
  return (
    <div className="relative w-full container-md pb-40">
      
      {/* Tiny Strip above CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16"
      >
        <div className="flex items-center gap-2 text-white/50 text-xs md:text-sm uppercase tracking-widest font-semibold mr-4">
          Available For
        </div>
        {["Freelance", "Full-Time", "Contract", "Remote"].map((type, idx) => (
          <div key={idx} className="flex items-center gap-2 text-white/80 text-sm font-medium">
            <CheckCircle2 className="w-4 h-4 text-emerald-400/80" />
            {type}
          </div>
        ))}
      </motion.div>

      {/* Main CTA Panel */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full rounded-[2.5rem] bg-white/[0.02] backdrop-blur-2xl border border-white/10 p-10 md:p-20 text-center overflow-hidden flex flex-col items-center"
      >
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-primary/20 rounded-full blur-[100px] pointer-events-none z-0" />
        <div className="absolute inset-0 rounded-[2.5rem] border border-white/5 bg-gradient-to-b from-white/5 to-transparent pointer-events-none z-0" />

        <div className="relative z-10 flex flex-col items-center">
          <h2 className="text-[var(--text-h2)] font-bold text-white tracking-tight mb-6 max-w-3xl leading-[1.1]">
            Let's Build Something Exceptional Together
          </h2>
          <p className="text-[var(--text-body)] text-white/60 mb-8 max-w-2xl font-light leading-relaxed">
            Whether you're launching a startup, automating a business, or building your next digital product, I'm ready to turn your ideas into reality.
          </p>

          <div className="flex flex-col items-center gap-4 mb-12">
            <p className="text-sm text-primary font-medium tracking-wide">
              Typically replies within 24 hours
            </p>
            <p className="text-xs text-white/40 uppercase tracking-widest">
              Available for Freelance & Full-Time Opportunities
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a 
              href="#contact" 
              className="w-full sm:w-auto px-10 py-5 rounded-full bg-white text-black font-bold text-sm uppercase tracking-widest hover:bg-white/90 hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
              Let's Talk
            </a>
            <a 
              href="/resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-5 rounded-full bg-white/5 border border-white/10 text-white font-bold text-sm uppercase tracking-widest hover:bg-white/10 hover:border-white/30 transition-all flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </div>
        </div>
      </motion.div>

    </div>
  );
}
