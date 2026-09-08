"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, CheckCircle2, ChevronRight, MessageSquare, RefreshCw, Send, Sparkles, UserCheck } from "lucide-react";

interface DecisionBranch {
  id: string;
  label: string;
  badgeColor: string;
  description: string;
  ghlAction: string;
  sampleMessage: string;
}

const BRANCHES: DecisionBranch[] = [
  {
    id: "INTERESTED",
    label: "INTERESTED",
    badgeColor: "from-emerald-500 to-teal-400 text-white border-emerald-400/40",
    description: "Lead expressed explicit buying intent or requested a meeting.",
    ghlAction: "Create GHL Opportunity in 'Hot Deals' + Trigger Calendar Invite Link",
    sampleMessage: "Hi, I watched your demo and want to automate our sales leads. When can we talk?",
  },
  {
    id: "FOLLOW_UP",
    label: "FOLLOW_UP",
    badgeColor: "from-blue-500 to-indigo-500 text-white border-blue-400/40",
    description: "Lead requested more details or pricing documentation.",
    ghlAction: "Tag GHL Contact 'Needs_Info' + Send Automated SMS Resource Packet",
    sampleMessage: "Can you send me over your case studies and n8n workflow architecture docs?",
  },
  {
    id: "RESCHEDULED",
    label: "RESCHEDULED",
    badgeColor: "from-purple-500 to-pink-500 text-white border-purple-400/40",
    description: "Lead requested to move booked appointment slot.",
    ghlAction: "Update GHL Booking Calendar + Dispatch Reschedule SMS Notification",
    sampleMessage: "Something came up for Thursday 2 PM. Can we move our call to Friday morning?",
  },
  {
    id: "NOT_INTERESTED",
    label: "NOT_INTERESTED",
    badgeColor: "from-gray-500 to-slate-600 text-white border-gray-400/40",
    description: "Lead requested to opt out or stop communication.",
    ghlAction: "Apply GHL DNC Tag + Remove from Active Follow-up Sequences",
    sampleMessage: "Please remove me from your outreach list for now. Thanks.",
  },
];

export default function AiClassificationVisual() {
  const [selectedBranch, setSelectedBranch] = useState<DecisionBranch>(BRANCHES[0]);
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);

  const handleBranchClick = (branch: DecisionBranch) => {
    setIsAnalyzing(true);
    setSelectedBranch(branch);
    setTimeout(() => {
      setIsAnalyzing(false);
    }, 600);
  };

  return (
    <div className="w-full max-w-[1340px] mx-auto px-4 sm:px-6 mb-24">
      <div className="rounded-3xl bg-white/[0.015] backdrop-blur-xl border border-white/10 p-6 md:p-10 overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.5)]">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-secondary" />
              <span className="text-xs font-mono uppercase tracking-widest text-secondary">
                AI Intent & Sentiment Classifier
              </span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
              Autonomous AI Decision & Workflow Branching
            </h3>
          </div>
          <p className="text-xs text-gray-custom max-w-xl">
            Click any scenario below to see how AI analyzes natural language responses and triggers conditional GHL CRM actions.
          </p>
        </div>

        {/* Main Interactive Branching Visualization */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Incoming Message & AI Processor */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 rounded-2xl bg-black/50 border border-white/10">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-gray-custom uppercase tracking-wider flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-primary" />
                  INCOMING REPLY
                </span>
                <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-white/10 text-white/80 font-mono">
                  Webhook Payload
                </span>
              </div>

              {/* Message Box */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-white/90 text-xs leading-relaxed mb-6 font-mono">
                "{selectedBranch.sampleMessage}"
              </div>

              {/* AI Processing Node */}
              <div className="relative p-5 rounded-2xl bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-purple-500/30">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Bot className={`w-5 h-5 text-secondary ${isAnalyzing ? "animate-bounce" : ""}`} />
                    <span className="text-xs font-bold text-white">AI CLASSIFICATION ENGINE</span>
                  </div>
                  <span className="text-[10px] font-mono text-secondary">LLM Prompt Matrix</span>
                </div>

                <div className="text-xs text-gray-custom mb-3">
                  {isAnalyzing ? (
                    <span className="text-primary font-mono flex items-center gap-2">
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      Analyzing intent & sentiment vectors...
                    </span>
                  ) : (
                    <span>Classification Output: <strong className="text-white font-mono">{selectedBranch.label}</strong></span>
                  )}
                </div>

                <div className="w-full bg-black/40 h-1.5 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary to-secondary"
                    initial={{ width: "0%" }}
                    animate={{ width: isAnalyzing ? ["0%", "100%"] : "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </div>
              </div>
            </div>

            {/* Bottom Status */}
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-gray-custom">
              <span>Model: Groq Llama-3 70B</span>
              <span className="text-emerald-400">Latency: 180ms</span>
            </div>
          </div>

          {/* Right Column: Decision Branch Selection & GHL Action Trigger */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            
            {/* Branch Selector Grid */}
            <div className="mb-6">
              <span className="text-xs font-mono text-gray-custom uppercase tracking-wider block mb-3">
                Select Decision Branch Scenario:
              </span>

              <div className="grid grid-cols-2 gap-3">
                {BRANCHES.map((b) => {
                  const isSelected = b.id === selectedBranch.id;

                  return (
                    <button
                      key={b.id}
                      suppressHydrationWarning
                      onClick={() => handleBranchClick(b)}
                      className={`p-3.5 rounded-xl border text-left transition-all ${
                        isSelected
                          ? "bg-white/[0.08] border-primary ring-1 ring-primary/50 shadow-[0_0_20px_rgba(79,140,255,0.2)]"
                          : "bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.04]"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-md border ${b.badgeColor}`}>
                          {b.label}
                        </span>
                        {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-primary" />}
                      </div>
                      <p className="text-[11px] text-gray-custom line-clamp-2">
                        {b.description}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Resulting GHL Action Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-950/20 via-black to-blue-950/20 border border-emerald-500/30">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  AUTOMATED GHL CRM ACTION TRIGGERED
                </span>
                <span className="text-[10px] font-mono text-white/50">Execution Time: &lt;1s</span>
              </div>

              <div className="text-sm font-semibold text-white mb-2">
                {selectedBranch.ghlAction}
              </div>

              <p className="text-xs text-gray-custom leading-relaxed">
                Rules engine automatically updates GHL Opportunity pipeline stage, injects custom fields into contact record, and triggers downstream webhook tasks via n8n.
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
