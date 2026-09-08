"use client";

import { motion } from "framer-motion";
import {
  UserCheck,
  Filter,
  Database,
  Workflow,
  Send,
  CheckCircle2,
  Sparkles,
  Zap,
} from "lucide-react";

import GhlInternationalBadge from "./GhlInternationalBadge";

const FLOW_STEPS = [
  { label: "Lead", icon: UserCheck },
  { label: "Funnel", icon: Filter },
  { label: "CRM", icon: Database },
  { label: "Automation", icon: Workflow },
  { label: "Follow-up", icon: Send },
  { label: "Conversion", icon: CheckCircle2 },
];

const PRACTICAL_CAPABILITIES = [
  "GoHighLevel CRM",
  "Sales Pipelines",
  "Lead Capture & Management",
  "Workflows & Automation",
  "Forms & Surveys",
  "Calendars & Appointment Automation",
  "Email/SMS Follow-ups",
  "Lead Nurturing",
  "Webhooks & API Integrations",
  "Funnel Building",
  "AI-Assisted Automation",
  "GHL + n8n Integrations",
];

export default function GhlExperience() {
  return (
    <div className="w-full max-w-5xl mx-auto mb-20">
      
      {/* Subsection Tag */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-2 mb-4"
      >
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#8B5CF6] font-bold">
          01 — GHL EXPERIENCE
        </span>
        <span className="w-1.5 h-1.5 rounded-full bg-[#D946EF] animate-pulse" />
      </motion.div>

      {/* Main Headline & Supporting Copy */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mb-12"
      >
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-[1.15]">
          GoHighLevel Experience
        </h3>
        
        <p className="text-base sm:text-lg md:text-xl text-gray-300 font-light max-w-3xl leading-relaxed">
          I build practical GoHighLevel systems that connect funnels, CRM, follow-ups, and automation into one streamlined lead-generation workflow.
        </p>
      </motion.div>

      {/* International Client Experience, $2K+ Value & Client Delivery Lifecycle */}
      <GhlInternationalBadge />

      {/* Minimal Elegant Flow Visual: Lead -> Funnel -> CRM -> Automation -> Follow-up -> Conversion */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="relative rounded-2xl bg-white/[0.02] border border-purple-500/20 p-6 md:p-8 mb-12 overflow-hidden shadow-[0_10px_40px_rgba(124,58,237,0.1)]"
      >
        {/* Soft Background Gradient Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-pink-900/10 pointer-events-none" />

        <div className="text-xs font-mono uppercase tracking-widest text-purple-300/80 mb-6 flex items-center gap-2">
          <Zap className="w-3.5 h-3.5 text-[#D946EF]" />
          <span>Core Lead-to-Conversion Workflow</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 relative z-10">
          {FLOW_STEPS.map((step, idx) => {
            const IconComponent = step.icon;

            return (
              <div key={idx} className="relative flex flex-col items-center">
                <div className="w-full p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-purple-500/40 hover:bg-white/[0.05] transition-all text-center flex flex-col items-center group">
                  <div className="p-2.5 rounded-lg bg-gradient-to-br from-purple-600/30 to-pink-600/30 border border-purple-500/30 text-purple-300 group-hover:scale-110 transition-transform mb-2">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-white tracking-wide">
                    {step.label}
                  </span>
                </div>

                {/* Connecting Dot/Arrow (Desktop) */}
                {idx < FLOW_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 z-20 text-purple-400/40">
                    ➔
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* Practical Implementation Capabilities Tags */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-4 flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-[#8B5CF6]" />
          <span>Practical Implementation Focus:</span>
        </div>

        <div className="flex flex-wrap gap-2.5">
          {PRACTICAL_CAPABILITIES.map((cap, idx) => (
            <span
              key={idx}
              className="text-xs md:text-sm px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-purple-500/20 text-gray-200 hover:border-purple-500/50 hover:text-white transition-all font-medium"
            >
              {cap}
            </span>
          ))}
        </div>
      </motion.div>

    </div>
  );
}
