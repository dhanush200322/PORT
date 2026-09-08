"use client";

import { motion } from "framer-motion";
import { Database, Workflow, Cpu, Webhook, ArrowRightLeft, Layers, ShieldCheck } from "lucide-react";

const PILLARS = [
  {
    role: "CRM LAYER",
    title: "GoHighLevel",
    icon: Database,
    color: "from-blue-600 to-indigo-600",
    borderColor: "border-blue-500/40",
    glowColor: "shadow-[0_0_30px_rgba(79,140,255,0.2)]",
    description: "Central repository for contacts, opportunity pipelines, SMS/Email messaging, calendar bookings, and native snapshot triggers.",
    capabilities: ["Contacts & Pipelines", "Custom Fields", "Native Workflows", "Opportunity Stages"],
  },
  {
    role: "INTEGRATION LAYER",
    title: "Webhooks & REST APIs",
    icon: Webhook,
    color: "from-cyan-500 to-teal-500",
    borderColor: "border-cyan-500/40",
    glowColor: "shadow-[0_0_30px_rgba(6,182,212,0.2)]",
    description: "High-speed bi-directional data flow transmitting real-time JSON payloads between CRM events and external microservices.",
    capabilities: ["Inbound Webhooks", "OAuth 2.0 Auth", "Custom Payload Parsing", "API Rate Management"],
  },
  {
    role: "ORCHESTRATION LAYER",
    title: "n8n Automation Engine",
    icon: Workflow,
    color: "from-violet-600 to-purple-600",
    borderColor: "border-violet-500/40",
    glowColor: "shadow-[0_0_30px_rgba(159,92,255,0.2)]",
    description: "Self-hosted workflow engine executing complex multi-step branching, error handling, database lookups, and multi-app sync.",
    capabilities: ["Branching Logic", "Error Handling", "Database Transformations", "Sub-workflow Dispatch"],
  },
  {
    role: "INTELLIGENCE LAYER",
    title: "AI & LLM Logic",
    icon: Cpu,
    color: "from-pink-600 to-purple-600",
    borderColor: "border-pink-500/40",
    glowColor: "shadow-[0_0_30px_rgba(236,72,153,0.2)]",
    description: "Retrieval-Augmented Generation (RAG) and specialized LLM prompts analyzing lead intent, qualifying responses, and generating natural replies.",
    capabilities: ["Intent Classification", "RAG Vector Search", "Sentiment Scoring", "Structured JSON Outputs"],
  },
];

export default function AutomationArchitectureVisual() {
  return (
    <div className="w-full max-w-[1340px] mx-auto px-4 sm:px-6 mb-24">
      <div className="rounded-3xl bg-white/[0.015] backdrop-blur-xl border border-white/10 p-6 md:p-10 relative overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.5)]">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Layers className="w-4 h-4 text-primary" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-primary font-medium">
              System Architecture Pillars
            </span>
          </div>
          <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tight mb-4">
            How CRM, n8n, AI, and APIs Connect Together
          </h3>
          <p className="text-sm text-gray-custom leading-relaxed">
            Every production automation system is structured around four decoupled layers ensuring 99.9% uptime, zero lost leads, and enterprise-grade resilience.
          </p>
        </div>

        {/* 4 Pillars Interconnected Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {PILLARS.map((pillar, idx) => {
            const IconComponent = pillar.icon;

            return (
              <div key={idx} className="relative flex flex-col justify-between">
                
                {/* Visual Inter-connect Line (Desktop) */}
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-12 -right-3 w-6 h-[2px] bg-gradient-to-r from-white/20 to-white/5 z-20">
                    <motion.div
                      className="w-1.5 h-1.5 rounded-full bg-primary absolute -top-[2px]"
                      animate={{ x: [0, 20] }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                    />
                  </div>
                )}

                <div className={`h-full p-6 rounded-2xl bg-white/[0.02] border ${pillar.borderColor} ${pillar.glowColor} flex flex-col justify-between transition-all hover:bg-white/[0.04]`}>
                  <div>
                    {/* Top Role Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-mono font-bold tracking-widest text-white/70 uppercase">
                        {pillar.role}
                      </span>
                      <div className={`p-2 rounded-xl bg-gradient-to-br ${pillar.color} text-white`}>
                        <IconComponent className="w-4 h-4" />
                      </div>
                    </div>

                    <h4 className="text-lg font-bold text-white mb-2">
                      {pillar.title}
                    </h4>

                    <p className="text-xs text-gray-custom leading-relaxed mb-6">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Capabilities Chip List */}
                  <div className="pt-4 border-t border-white/5">
                    <span className="text-[10px] font-mono text-gray-custom uppercase tracking-wider block mb-2">
                      Core Functions:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {pillar.capabilities.map((cap, cIdx) => (
                        <span key={cIdx} className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-white/80 font-mono">
                          {cap}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Central Interconnection Diagram Footer */}
        <div className="mt-10 p-4 rounded-2xl bg-black/60 border border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-gray-custom">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span className="text-white font-medium">Enterprise Workflow Protocol:</span>
            <span>GOHIGHLEVEL ↔ WEBHOOK ↔ n8n ↔ AI LOGIC ↔ REST API</span>
          </div>

          <div className="text-[11px] text-primary">
            End-to-End Orchestrated & Monitored
          </div>
        </div>

      </div>
    </div>
  );
}
