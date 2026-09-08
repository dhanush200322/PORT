"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MessageSquare, Workflow } from "lucide-react";

export default function GhlCTA() {
  return (
    <div className="relative w-full max-w-5xl mx-auto pb-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full rounded-3xl bg-white/[0.02] border border-purple-500/20 p-8 md:p-12 text-center overflow-hidden flex flex-col items-center shadow-[0_15px_50px_rgba(0,0,0,0.4)]"
      >
        {/* Soft Ambient Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-full bg-gradient-to-b from-purple-600/15 via-pink-600/10 to-transparent blur-[80px] pointer-events-none z-0" />

        <div className="relative z-10 flex flex-col items-center">
          
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono font-medium mb-4">
            <Workflow className="w-3.5 h-3.5 text-[#D946EF]" />
            <span>GoHighLevel + CRM + n8n Automation</span>
          </div>

          <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-3">
            Need Custom GHL Workflows or CRM Automations?
          </h4>

          <p className="text-xs sm:text-sm text-gray-300 mb-8 max-w-lg font-light leading-relaxed">
            I connect funnels, sales pipelines, custom webhooks, n8n orchestrations, and AI agents into reliable lead-generation systems.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a 
              href="#contact" 
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#D946EF] text-white font-bold text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-[0_0_25px_rgba(124,58,237,0.3)] flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Let's Work Together</span>
            </a>

            <a 
              href="#projects" 
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/5 border border-white/10 text-white font-bold text-xs uppercase tracking-widest hover:bg-white/10 hover:border-white/30 transition-all flex items-center justify-center gap-2"
            >
              <span>View Projects</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </motion.div>
    </div>
  );
}
