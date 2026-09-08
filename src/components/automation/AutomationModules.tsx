"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Bot, CheckCircle2, Database, Home, Layers, Sparkles, Workflow, Zap } from "lucide-react";

interface CaseStudyModule {
  id: string;
  title: string;
  category: string;
  oneLiner: string;
  techStack: string[];
  architectureSteps: string[];
  outcome: string;
  verifiedMetric: string;
}

const MODULES: CaseStudyModule[] = [
  {
    id: "ghl-n8n-crm",
    title: "GHL + n8n CRM Automation",
    category: "CRM & Workflow Orchestration",
    oneLiner: "Connected AI conversation handling with CRM workflows through n8n.",
    techStack: ["GoHighLevel", "n8n", "Webhooks", "REST API", "PostgreSQL"],
    architectureSteps: ["INBOUND LEAD", "GHL CRM", "WEBHOOK TRIGGER", "n8n WORKFLOW", "AUTO FOLLOW-UP"],
    outcome: "Eliminated manual lead entry and reduced lead qualification response time from hours to under 30 seconds.",
    verifiedMetric: "10+ Active Workflows",
  },
  {
    id: "nexora-ai-ghl",
    title: "Nexora AI Chatbot → GHL",
    category: "AI SaaS & CRM Integration",
    oneLiner: "Autonomous AI chatbot booking qualified leads directly into GHL sales pipelines.",
    techStack: ["Nexora AI", "Next.js", "Groq API", "n8n", "GoHighLevel API"],
    architectureSteps: ["USER MESSAGE", "GROQ AI AGENT", "n8n ROUTER", "GHL OPPORTUNITY", "CALENDAR BOOKING"],
    outcome: "Unified multi-agent LLM chat with GHL CRM pipelines for automated appointment scheduling.",
    verifiedMetric: "Full SaaS Architecture",
  },
  {
    id: "smart-home-crm",
    title: "Smart Home Automation CRM",
    category: "IoT & AI Retention Loop",
    oneLiner: "Contextual lead preference classification routing into automated CRM retention loops.",
    techStack: ["Smart Home RAG", "OpenAI API", "Node.js", "n8n", "GHL Webhooks"],
    architectureSteps: ["LEAD PREFERENCE", "AI CLASSIFICATION", "GHL CONTACT", "BOOKING ENGINE", "RETENTION LOOP"],
    outcome: "Transformed static RAG chatbot interactions into automated customer lifecycle CRM campaigns.",
    verifiedMetric: "RAG + CRM Integration",
  },
];

export default function AutomationModules() {
  const [activeTab, setActiveTab] = useState<string>(MODULES[0].id);

  const activeModule = MODULES.find((m) => m.id === activeTab) || MODULES[0];

  return (
    <div className="w-full max-w-[1340px] mx-auto px-4 sm:px-6 mb-24">
      <div className="rounded-3xl bg-white/[0.015] backdrop-blur-xl border border-white/10 p-6 md:p-10 shadow-[0_20px_80px_rgba(0,0,0,0.5)]">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-primary block mb-2 font-medium">
              Verified Production Architectures
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              Interactive Automation Case Study Modules
            </h3>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-gray-custom">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Real Code & Production Architecture</span>
          </div>
        </div>

        {/* Module Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
          {MODULES.map((module) => {
            const isActive = module.id === activeTab;

            return (
              <button
                key={module.id}
                suppressHydrationWarning
                onClick={() => setActiveTab(module.id)}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  isActive
                    ? "bg-white/[0.08] border-primary shadow-[0_0_25px_rgba(79,140,255,0.25)] ring-1 ring-primary/40"
                    : "bg-white/[0.02] border-white/10 hover:bg-white/[0.04] hover:border-white/20"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono text-primary uppercase font-bold tracking-wider">
                    {module.category}
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/30">
                    {module.verifiedMetric}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white mb-1">
                  {module.title}
                </h4>
                <p className="text-xs text-gray-custom line-clamp-1">
                  {module.oneLiner}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Module Detail Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeModule.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="p-6 md:p-8 rounded-2xl bg-black/60 border border-white/10"
          >
            {/* Header info */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-primary/20 text-primary border border-primary/30 font-bold">
                  {activeModule.category}
                </span>
              </div>
              <h4 className="text-2xl font-bold text-white mb-2">
                {activeModule.title}
              </h4>
              <p className="text-sm text-gray-custom/90 leading-relaxed font-light">
                {activeModule.oneLiner}
              </p>
            </div>

            {/* Visual Architecture Step Flow */}
            <div className="mb-8 p-4 rounded-xl bg-white/[0.02] border border-white/10">
              <span className="text-[10px] font-mono text-gray-custom uppercase tracking-wider block mb-3">
                Visual Workflow Architecture:
              </span>

              <div className="flex flex-wrap items-center gap-2 md:gap-3">
                {activeModule.architectureSteps.map((step, sIdx) => (
                  <div key={sIdx} className="flex items-center gap-2 md:gap-3">
                    <div className="px-3 py-2 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-white/15 text-xs font-mono font-bold text-white flex items-center gap-2 shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {step}
                    </div>
                    {sIdx < activeModule.architectureSteps.length - 1 && (
                      <ArrowRight className="w-3.5 h-3.5 text-gray-custom shrink-0" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Grid: Tech Stack & Outcome */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/10">
              <div>
                <span className="text-xs font-mono text-gray-custom uppercase tracking-wider block mb-2">
                  Technology Stack:
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeModule.techStack.map((tech, tIdx) => (
                    <span key={tIdx} className="text-xs px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-white/90 font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-xs font-mono text-gray-custom uppercase tracking-wider block mb-2">
                  Verified Outcome:
                </span>
                <p className="text-xs text-white/80 leading-relaxed">
                  {activeModule.outcome}
                </p>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </div>
  );
}
