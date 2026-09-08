"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  UserCheck,
  Database,
  Cpu,
  Workflow,
  Webhook,
  BarChart3,
  Send,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  Info,
  Sparkles,
  Zap,
} from "lucide-react";
import AutomationHUD from "./AutomationHUD";

export interface NodeData {
  id: string;
  stageIndex: number; // 1 to 7
  title: string;
  subtitle: string;
  icon: React.ElementType;
  tech: string;
  color: string; // Tailwind color class
  hoverCapabilities: string[];
  statusText: string;
  outputPayload?: string;
}

const STAGES: NodeData[] = [
  {
    id: "lead",
    stageIndex: 1,
    title: "NEW LEAD",
    subtitle: "Inbound Lead Capture",
    icon: UserCheck,
    tech: "Form / Webhook",
    color: "from-blue-500 to-cyan-400",
    hoverCapabilities: ["LEAD CAPTURE", "UTM TRACKING", "FORM SUBMISSION"],
    statusText: "Lead Ingested from Web Form",
    outputPayload: '{\n  "lead": "Alex Morgan",\n  "email": "alex@enterprise.io",\n  "intent": "AI CRM Setup"\n}',
  },
  {
    id: "ghl",
    stageIndex: 2,
    title: "GOHIGHLEVEL",
    subtitle: "CRM Ingestion Layer",
    icon: Database,
    tech: "GoHighLevel CRM",
    color: "from-blue-600 to-indigo-500",
    hoverCapabilities: ["CRM", "CONTACTS", "PIPELINES", "WORKFLOWS"],
    statusText: "Contact Created & Webhook Fired",
    outputPayload: '{\n  "ghl_contact_id": "ghl_89327",\n  "tag": "raw_inbound",\n  "trigger": "contact_created"\n}',
  },
  {
    id: "ai",
    stageIndex: 3,
    title: "AI CLASSIFIER",
    subtitle: "Intelligence & Sentiment",
    icon: Cpu,
    tech: "Groq / OpenAI API",
    color: "from-purple-500 to-pink-500",
    hoverCapabilities: ["CLASSIFICATION", "DECISION", "ROUTING"],
    statusText: "AI Intent: HIGH_QUALIFIED (Score: 94%)",
    outputPayload: '{\n  "intent": "INTERESTED",\n  "sentiment": "HIGH_INTENT",\n  "suggested_action": "PRIORITY_ROUTING"\n}',
  },
  {
    id: "n8n",
    stageIndex: 4,
    title: "n8n WORKFLOW",
    subtitle: "Orchestration Engine",
    icon: Workflow,
    tech: "n8n Automation",
    color: "from-violet-600 to-primary",
    hoverCapabilities: ["TRIGGERS", "LOGIC", "INTEGRATIONS", "AUTOMATION"],
    statusText: "Executing Branch Logic & Custom Fields",
    outputPayload: '{\n  "execution_id": "n8n_exec_9041",\n  "branch": "vip_pipeline",\n  "status": "success"\n}',
  },
  {
    id: "api",
    stageIndex: 5,
    title: "REST API / WEBHOOK",
    subtitle: "Integration Gateway",
    icon: Webhook,
    tech: "REST API / JSON",
    color: "from-cyan-500 to-blue-500",
    hoverCapabilities: ["EVENT", "PAYLOAD", "TRIGGER", "AUTH"],
    statusText: "Payload Pushed to Calendar & GHL API",
    outputPayload: '{\n  "endpoint": "/v1/contacts/update",\n  "http_status": 200,\n  "response": "OK"\n}',
  },
  {
    id: "pipeline",
    stageIndex: 6,
    title: "SALES PIPELINE",
    subtitle: "GHL Opportunity Stage",
    icon: BarChart3,
    tech: "GHL Opportunities",
    color: "from-blue-400 to-indigo-600",
    hoverCapabilities: ["DEALS", "STAGES", "SMART LISTS", "RETENTION"],
    statusText: "Moved to 'Hot Leads - Booking Ready'",
    outputPayload: '{\n  "pipeline": "Sales V1",\n  "stage": "Hot Lead - Qualified",\n  "value": "$5,000"\n}',
  },
  {
    id: "followup",
    stageIndex: 7,
    title: "AUTOMATED FOLLOW-UP",
    subtitle: "Conversion & Booking",
    icon: Send,
    tech: "SMS / Email / Calendar",
    color: "from-emerald-400 to-cyan-500",
    hoverCapabilities: ["SMS", "EMAIL", "CALENDAR", "AUTO-BOOK"],
    statusText: "SMS Sent + Calendar Invite Dispatched",
    outputPayload: '{\n  "action": "SMS_SENT",\n  "calendar_slot": "Confirmed",\n  "workflow_state": "COMPLETE"\n}',
  },
];

export default function AutomationCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: "-100px" });

  const [activeStage, setActiveStage] = useState<number>(1);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  // Auto progression step timer when in view
  useEffect(() => {
    if (!isInView || !isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveStage((prev) => (prev >= STAGES.length ? 1 : prev + 1));
    }, 3200);

    return () => clearInterval(interval);
  }, [isInView, isAutoPlaying]);

  const handleSelectStage = (stage: number) => {
    setActiveStage(stage);
    setIsAutoPlaying(false); // pause auto simulation on manual click so user has full control
  };

  const currentActiveNode = STAGES.find((s) => s.stageIndex === activeStage) || STAGES[0];

  return (
    <div ref={containerRef} className="relative w-full max-w-[1340px] mx-auto px-4 sm:px-6 mb-24">
      
      {/* Telemetry HUD */}
      <AutomationHUD
        currentStage={activeStage}
        totalStages={STAGES.length}
        activeStageName={currentActiveNode.title}
        isAutoPlaying={isAutoPlaying}
        onToggleAutoPlay={() => setIsAutoPlaying(!isAutoPlaying)}
        onSelectStage={handleSelectStage}
      />

      {/* Main Canvas Card Container */}
      <div className="relative w-full rounded-3xl bg-white/[0.015] backdrop-blur-xl border border-white/10 p-6 md:p-10 overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.6)]">
        
        {/* Background Subtle Mesh */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)`,
            backgroundSize: "24px 24px"
          }}
        />

        {/* Ambient Glow behind active step */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-primary/10 rounded-full blur-[140px] pointer-events-none transition-all duration-700 opacity-60"
        />

        {/* Canvas Header Bar */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-primary/10 border border-primary/20 text-primary">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold text-white tracking-tight flex items-center gap-2">
                Live Automation Workflow
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-primary/20 border border-primary/30 text-primary font-mono font-normal">
                  n8n + GHL
                </span>
              </h3>
              <p className="text-xs text-gray-custom">
                Scroll or click any node to simulate live workflow execution
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              suppressHydrationWarning
              onClick={() => handleSelectStage(activeStage > 1 ? activeStage - 1 : STAGES.length)}
              className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-medium text-white/80 hover:bg-white/10 hover:text-white transition-all"
            >
              Previous Step
            </button>
            <button
              suppressHydrationWarning
              onClick={() => handleSelectStage(activeStage < STAGES.length ? activeStage + 1 : 1)}
              className="px-4 py-1.5 rounded-xl bg-primary border border-primary/40 text-xs font-bold text-white hover:bg-primary/90 transition-all flex items-center gap-1 shadow-[0_0_15px_rgba(79,140,255,0.4)]"
            >
              <span>Next Step</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* DESKTOP & TABLET WORKFLOW GRAPH (2-Row Interactive Grid) */}
        <div className="hidden md:block relative z-10 my-8">
          
          {/* Top Row: Nodes 1 - 4 */}
          <div className="grid grid-cols-4 gap-4 lg:gap-6 mb-12 relative">
            {STAGES.slice(0, 4).map((node, index) => {
              const isActive = node.stageIndex === activeStage;
              const isPast = node.stageIndex < activeStage;
              const IconComponent = node.icon;
              const isHovered = hoveredNode === node.id;

              return (
                <div key={node.id} className="relative flex flex-col items-center">
                  
                  {/* Connecting line to next node in row */}
                  {index < 3 && (
                    <div className="absolute top-1/2 -right-3 lg:-right-4 w-6 lg:w-8 h-[2px] bg-white/10 -translate-y-1/2 z-0">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-secondary"
                        initial={{ width: "0%" }}
                        animate={{ width: isPast || (isActive && index < activeStage - 1) ? "100%" : "0%" }}
                        transition={{ duration: 0.5 }}
                      />
                      {/* Pulse Indicator */}
                      {isActive && (
                        <motion.div
                          className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_#4F8CFF]"
                          animate={{ x: [0, 24] }}
                          transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
                        />
                      )}
                    </div>
                  )}

                  {/* Node Button Container */}
                  <motion.div
                    onClick={() => handleSelectStage(node.stageIndex)}
                    onMouseEnter={() => setHoveredNode(node.id)}
                    onMouseLeave={() => setHoveredNode(null)}
                    whileHover={{ scale: 1.03, y: -2 }}
                    className={`relative w-full rounded-2xl p-4 md:p-5 cursor-pointer transition-all duration-300 border ${
                      isActive
                        ? "bg-gradient-to-b from-white/[0.08] to-white/[0.02] border-primary shadow-[0_0_30px_rgba(79,140,255,0.25)] ring-1 ring-primary/50"
                        : isPast
                        ? "bg-white/[0.03] border-primary/30 text-white/90"
                        : "bg-white/[0.015] border-white/10 text-white/50 hover:border-white/20 hover:bg-white/[0.03]"
                    }`}
                  >
                    {/* Node Header */}
                    <div className="flex items-center justify-between mb-3">
                      <div className={`p-2.5 rounded-xl bg-gradient-to-br ${node.color} text-white shadow-md`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      
                      <div className="flex items-center gap-1.5">
                        <span className={`w-2 h-2 rounded-full ${
                          isActive ? "bg-emerald-400 animate-ping" : isPast ? "bg-emerald-500" : "bg-white/20"
                        }`} />
                        <span className="text-[10px] font-mono text-gray-custom">0{node.stageIndex}</span>
                      </div>
                    </div>

                    {/* Titles */}
                    <h4 className="text-sm font-bold text-white tracking-wide mb-0.5">
                      {node.title}
                    </h4>
                    <p className="text-[11px] text-gray-custom line-clamp-1 mb-3">
                      {node.subtitle}
                    </p>

                    {/* Tech Badge */}
                    <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[10px] font-mono text-white/70">
                      <span>{node.tech}</span>
                      {isActive && (
                        <span className="text-primary font-bold animate-pulse flex items-center gap-0.5">
                          ● ACTIVE
                        </span>
                      )}
                    </div>

                    {/* Micro-interaction Tooltip Card on Hover */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 5, scale: 0.95 }}
                          className="absolute left-0 right-0 -bottom-16 z-30 p-2.5 rounded-xl bg-black/95 border border-primary/40 backdrop-blur-xl shadow-xl text-center"
                        >
                          <div className="text-[9px] font-mono uppercase tracking-widest text-primary mb-1">
                            Capabilities
                          </div>
                          <div className="flex flex-wrap justify-center gap-1">
                            {node.hoverCapabilities.map((cap, cIdx) => (
                              <span key={cIdx} className="text-[9px] px-1.5 py-0.5 rounded bg-white/10 text-white font-medium">
                                {cap}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
              );
            })}
          </div>

          {/* Row Connector Loop (Node 4 down to Node 5) */}
          <div className="relative h-10 w-full flex justify-end pr-12 my-2">
            <div className="w-[2px] h-full bg-gradient-to-b from-primary/60 to-secondary/60 relative">
              {activeStage >= 4 && (
                <motion.div
                  className="w-2 h-2 rounded-full bg-secondary -left-[3px] absolute shadow-[0_0_8px_#9F5CFF]"
                  animate={{ y: [0, 32] }}
                  transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
                />
              )}
            </div>
          </div>

          {/* Bottom Row: Nodes 5 - 7 */}
          <div className="grid grid-cols-3 gap-6 relative max-w-4xl ml-auto">
            {STAGES.slice(4, 7).map((node, index) => {
              const isActive = node.stageIndex === activeStage;
              const isPast = node.stageIndex < activeStage;
              const IconComponent = node.icon;
              const isHovered = hoveredNode === node.id;

              return (
                <div key={node.id} className="relative flex flex-col items-center">
                  
                  {/* Connecting line to next node */}
                  {index < 2 && (
                    <div className="absolute top-1/2 -right-4 w-8 h-[2px] bg-white/10 -translate-y-1/2 z-0">
                      <motion.div
                        className="h-full bg-gradient-to-r from-secondary to-emerald-400"
                        initial={{ width: "0%" }}
                        animate={{ width: isPast ? "100%" : "0%" }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  )}

                  {/* Node Button Container */}
                  <motion.div
                    onClick={() => handleSelectStage(node.stageIndex)}
                    onMouseEnter={() => setHoveredNode(node.id)}
                    onMouseLeave={() => setHoveredNode(null)}
                    whileHover={{ scale: 1.03, y: -2 }}
                    className={`relative w-full rounded-2xl p-4 md:p-5 cursor-pointer transition-all duration-300 border ${
                      isActive
                        ? "bg-gradient-to-b from-white/[0.08] to-white/[0.02] border-secondary shadow-[0_0_30px_rgba(159,92,255,0.25)] ring-1 ring-secondary/50"
                        : isPast
                        ? "bg-white/[0.03] border-secondary/30 text-white/90"
                        : "bg-white/[0.015] border-white/10 text-white/50 hover:border-white/20 hover:bg-white/[0.03]"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className={`p-2.5 rounded-xl bg-gradient-to-br ${node.color} text-white shadow-md`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      
                      <div className="flex items-center gap-1.5">
                        <span className={`w-2 h-2 rounded-full ${
                          isActive ? "bg-emerald-400 animate-ping" : isPast ? "bg-emerald-500" : "bg-white/20"
                        }`} />
                        <span className="text-[10px] font-mono text-gray-custom">0{node.stageIndex}</span>
                      </div>
                    </div>

                    <h4 className="text-sm font-bold text-white tracking-wide mb-0.5">
                      {node.title}
                    </h4>
                    <p className="text-[11px] text-gray-custom line-clamp-1 mb-3">
                      {node.subtitle}
                    </p>

                    <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[10px] font-mono text-white/70">
                      <span>{node.tech}</span>
                      {isActive && (
                        <span className="text-secondary font-bold animate-pulse flex items-center gap-0.5">
                          ● EXECUTING
                        </span>
                      )}
                    </div>

                    {/* Micro Tooltip */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 5, scale: 0.95 }}
                          className="absolute left-0 right-0 -bottom-16 z-30 p-2.5 rounded-xl bg-black/95 border border-secondary/40 backdrop-blur-xl shadow-xl text-center"
                        >
                          <div className="text-[9px] font-mono uppercase tracking-widest text-secondary mb-1">
                            Capabilities
                          </div>
                          <div className="flex flex-wrap justify-center gap-1">
                            {node.hoverCapabilities.map((cap, cIdx) => (
                              <span key={cIdx} className="text-[9px] px-1.5 py-0.5 rounded bg-white/10 text-white font-medium">
                                {cap}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* MOBILE WORKFLOW GRAPH (Vertical Downward Flow) */}
        <div className="block md:hidden relative z-10 my-6 space-y-4">
          {STAGES.map((node) => {
            const isActive = node.stageIndex === activeStage;
            const isPast = node.stageIndex < activeStage;
            const IconComponent = node.icon;

            return (
              <div key={node.id} className="relative flex flex-col items-center">
                <div
                  onClick={() => handleSelectStage(node.stageIndex)}
                  className={`w-full rounded-2xl p-4 border transition-all ${
                    isActive
                      ? "bg-white/[0.06] border-primary shadow-[0_0_20px_rgba(79,140,255,0.2)]"
                      : isPast
                      ? "bg-white/[0.03] border-primary/30"
                      : "bg-white/[0.01] border-white/10 opacity-70"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-xl bg-gradient-to-br ${node.color} text-white`}>
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs font-bold text-white">{node.title}</h4>
                        <span className="text-[10px] font-mono text-gray-custom">Stage 0{node.stageIndex}</span>
                      </div>
                      <p className="text-[10px] text-gray-custom">{node.subtitle}</p>
                    </div>
                  </div>
                </div>

                {/* Downward line */}
                {node.stageIndex < 7 && (
                  <div className="w-[2px] h-4 bg-white/10 my-1 relative">
                    {isActive && (
                      <motion.div
                        className="w-1.5 h-1.5 rounded-full bg-primary -left-[2px] absolute"
                        animate={{ y: [0, 16] }}
                        transition={{ repeat: Infinity, duration: 0.8 }}
                      />
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ACTIVE STAGE LOG & JSON PAYLOAD INSPECTOR */}
        <div className="relative z-10 mt-8 p-5 rounded-2xl bg-black/60 border border-white/10 font-mono text-xs">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-white/10">
            <div className="flex items-center gap-2 text-white/90">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="font-bold tracking-wider uppercase text-[11px]">
                Stage Output Log: {currentActiveNode.title}
              </span>
            </div>
            <div className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" />
              <span>{currentActiveNode.statusText}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start text-[11px]">
            <div>
              <span className="text-gray-custom block mb-1">Target Integration Layer:</span>
              <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-white/90">
                {currentActiveNode.tech} • Executing automated rules & payload transfer
              </div>
            </div>

            <div>
              <span className="text-gray-custom block mb-1">Payload Sample (JSON):</span>
              <pre className="p-2.5 rounded-xl bg-black/80 border border-white/10 text-cyan-300 font-mono overflow-x-auto text-[10px]">
                {currentActiveNode.outputPayload}
              </pre>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
