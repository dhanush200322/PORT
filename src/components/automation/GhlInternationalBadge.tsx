"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Globe, Sparkles, DollarSign, Layers } from "lucide-react";

const CLIENT_WORKFLOW_STAGES = [
  "Client Inquiry",
  "Discovery",
  "GHL Strategy",
  "Automation Build",
  "Testing & Optimization",
  "Project Closure ✓",
];

export default function GhlInternationalBadge() {
  return (
    <div className="w-full my-8">
      {/* Top Banner: GHL Logo + International Client Experience + $2K+ Projects */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch mb-8">
        
        {/* Card 1: GoHighLevel Tech Badge & Logo */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:col-span-4 p-5 rounded-2xl bg-white/[0.02] border border-purple-500/20 hover:border-purple-500/40 transition-all flex flex-col justify-between shadow-[0_4px_20px_rgba(124,58,237,0.08)]"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#D946EF]" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-purple-300 font-bold">
                Platform Badge
              </span>
            </div>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          </div>

          {/* GHL Stylized Logo/Wordmark */}
          <div className="my-2 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#D946EF] p-0.5 shadow-[0_0_20px_rgba(124,58,237,0.4)]">
              <div className="w-full h-full bg-[#04070D] rounded-[10px] flex items-center justify-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-400 text-lg font-mono">
                GHL
              </div>
            </div>
            <div>
              <div className="text-lg font-bold text-white tracking-wide">
                GoHighLevel CRM
              </div>
              <div className="text-[11px] text-gray-400 font-mono">
                Expert Certified & Workflow Specialist
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-white/5 text-[11px] text-gray-400 font-light">
            Funnels • CRM • Automations • n8n Sync
          </div>
        </motion.div>

        {/* Card 2: International Client Experience (USA -> Canada) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:col-span-5 p-5 rounded-2xl bg-white/[0.02] border border-purple-500/20 hover:border-purple-500/40 transition-all flex flex-col justify-between shadow-[0_4px_20px_rgba(124,58,237,0.08)]"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-purple-400" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-purple-300 font-bold">
                Global Delivery
              </span>
            </div>
            <span className="text-[11px] font-mono text-emerald-400">Verified Remote</span>
          </div>

          {/* Animated Flag Connector */}
          <div className="flex items-center gap-3 my-2">
            <div className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-bold flex items-center gap-2">
              <span>🇺🇸</span>
              <span>USA</span>
            </div>

            {/* Connecting Animated Line */}
            <div className="flex-1 h-[2px] bg-gradient-to-r from-purple-500/40 via-pink-500/60 to-purple-500/40 relative overflow-hidden">
              <motion.div
                className="w-4 h-full bg-white shadow-[0_0_10px_#FFFFFF]"
                animate={{ x: ["-100%", "400%"] }}
                transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
              />
            </div>

            <div className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-bold flex items-center gap-2">
              <span>🇨🇦</span>
              <span>Canada</span>
            </div>
          </div>

          <p className="text-xs text-gray-300 font-light leading-relaxed">
            Worked with international clients across the USA and Canada, building GHL funnels, CRM systems, and automation workflows.
          </p>
        </motion.div>

        {/* Card 3: $2K+ Client Projects */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:col-span-3 p-5 rounded-2xl bg-white/[0.02] border border-purple-500/20 hover:border-purple-500/40 transition-all flex flex-col justify-between shadow-[0_4px_20px_rgba(124,58,237,0.08)]"
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5">
              <DollarSign className="w-4 h-4 text-pink-400" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-purple-300 font-bold">
                Project Value
              </span>
            </div>
            <span className="text-[10px] font-mono text-purple-400">High Impact</span>
          </div>

          <div className="my-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-purple-400 tracking-tight">
              $2K+ Projects
            </div>
            <div className="text-[11px] text-gray-400 font-mono mt-0.5">
              Completed Deliverables
            </div>
          </div>

          <p className="text-[11px] text-gray-300 font-light leading-snug">
            From automation setup to complete lead-generation workflows.
          </p>
        </motion.div>

      </div>

      {/* Cinematic Client Project Progression (Inquiry -> Closure) */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="rounded-2xl bg-white/[0.015] border border-purple-500/20 p-5 md:p-6 shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
      >
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/5">
          <div className="flex items-center gap-2">
            <Layers className="w-3.5 h-3.5 text-[#D946EF]" />
            <span className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Client Project Delivery Lifecycle
            </span>
          </div>
          <span className="text-[10px] font-mono text-gray-400">End-to-End Execution</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {CLIENT_WORKFLOW_STAGES.map((stage, idx) => {
            const isFinal = idx === CLIENT_WORKFLOW_STAGES.length - 1;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + idx * 0.08 }}
                className={`p-3 rounded-xl border text-center transition-all ${
                  isFinal
                    ? "bg-gradient-to-br from-emerald-950/40 via-purple-950/20 to-black border-emerald-500/50 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.2)]"
                    : "bg-white/[0.02] border-white/10 text-gray-300 hover:border-purple-500/30"
                }`}
              >
                <div className="text-[10px] font-mono text-gray-500 mb-1">
                  0{idx + 1}
                </div>
                <div className={`text-xs font-bold tracking-tight ${isFinal ? "text-emerald-300" : "text-white"}`}>
                  {stage}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
