"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MessageSquare, Zap } from "lucide-react";

export default function AutomationCTA() {
  return (
    <div className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 pb-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full rounded-[2.5rem] bg-white/[0.02] backdrop-blur-2xl border border-white/10 p-8 md:p-16 text-center overflow-hidden flex flex-col items-center shadow-[0_20px_80px_rgba(0,0,0,0.5)]"
      >
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-primary/20 rounded-full blur-[100px] pointer-events-none z-0" />
        <div className="absolute inset-0 rounded-[2.5rem] border border-white/5 bg-gradient-to-b from-white/5 to-transparent pointer-events-none z-0" />

        <div className="relative z-10 flex flex-col items-center">
          
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-medium mb-6">
            <Zap className="w-3.5 h-3.5" />
            <span>FULL STACK + GHL + AI AUTOMATION</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6 max-w-3xl leading-[1.15]">
            BUILD THE SYSTEM. <br className="hidden sm:inline" />
            AUTOMATE THE WORKFLOW.
          </h2>

          <p className="text-sm md:text-base text-gray-custom mb-8 max-w-xl font-light leading-relaxed">
            CRM automation, AI workflows and intelligent integrations built around real business processes.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a 
              href="#projects" 
              className="w-full sm:w-auto px-9 py-4 rounded-full bg-white text-black font-bold text-xs md:text-sm uppercase tracking-widest hover:bg-white/90 hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)] flex items-center justify-center gap-2"
            >
              <span>View Projects</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a 
              href="#contact" 
              className="w-full sm:w-auto px-9 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold text-xs md:text-sm uppercase tracking-widest hover:bg-white/10 hover:border-white/30 transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Let's Work Together</span>
            </a>
          </div>

        </div>
      </motion.div>
    </div>
  );
}
