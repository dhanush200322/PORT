"use client";

import { motion } from "framer-motion";
import { Activity, Cpu, Database, RefreshCw, Workflow } from "lucide-react";

interface AutomationHUDProps {
  currentStage: number;
  totalStages: number;
  activeStageName: string;
  isAutoPlaying: boolean;
  onToggleAutoPlay: () => void;
  onSelectStage: (stage: number) => void;
}

export default function AutomationHUD({
  currentStage,
  totalStages,
  activeStageName,
  isAutoPlaying,
  onToggleAutoPlay,
  onSelectStage,
}: AutomationHUDProps) {
  return (
    <div className="w-full bg-white/[0.02] backdrop-blur-md border border-white/10 rounded-2xl p-4 md:p-5 mb-8 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
      
      {/* Left: System Telemetry */}
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-gray-custom">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="font-semibold text-white uppercase tracking-wider">SYSTEM ACTIVE</span>
        </div>

        <div className="hidden sm:flex items-center gap-1.5 border-l border-white/10 pl-4">
          <Workflow className="w-3.5 h-3.5 text-primary" />
          <span>WORKFLOW:</span>
          <span className="text-white font-mono font-medium">CRM_LEAD_ROUTING</span>
        </div>

        <div className="hidden md:flex items-center gap-1.5 border-l border-white/10 pl-4">
          <Database className="w-3.5 h-3.5 text-secondary" />
          <span>CRM:</span>
          <span className="text-white font-mono font-medium">GOHIGHLEVEL</span>
        </div>

        <div className="hidden lg:flex items-center gap-1.5 border-l border-white/10 pl-4">
          <Cpu className="w-3.5 h-3.5 text-blue-400" />
          <span>ORCHESTRATION:</span>
          <span className="text-white font-mono font-medium">n8n + AI</span>
        </div>
      </div>

      {/* Right: Stage Navigation & Execution State */}
      <div className="flex items-center justify-between lg:justify-end gap-3 border-t lg:border-t-0 border-white/10 pt-3 lg:pt-0">
        
        {/* Stage Progress Pills */}
        <div className="flex items-center gap-1.5">
          {Array.from({ length: totalStages }).map((_, idx) => (
            <button
              key={idx}
              suppressHydrationWarning
              onClick={() => onSelectStage(idx + 1)}
              className={`h-2 transition-all duration-300 rounded-full ${
                currentStage === idx + 1
                  ? "w-8 bg-gradient-to-r from-primary to-secondary shadow-[0_0_12px_rgba(79,140,255,0.6)]"
                  : idx + 1 < currentStage
                  ? "w-2 bg-primary/60"
                  : "w-2 bg-white/10 hover:bg-white/30"
              }`}
              title={`Stage 0${idx + 1}`}
            />
          ))}
        </div>

        {/* Stage Name Badge */}
        <div className="text-xs font-mono px-3 py-1.5 rounded-lg bg-white/[0.05] border border-white/10 text-white flex items-center gap-2">
          <Activity className="w-3.5 h-3.5 text-primary animate-pulse" />
          <span>0{currentStage}/{totalStages}: {activeStageName}</span>
        </div>

        {/* Play/Pause Auto-simulation Toggle */}
        <button
          suppressHydrationWarning
          onClick={onToggleAutoPlay}
          className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all flex items-center gap-1.5 border ${
            isAutoPlaying
              ? "bg-primary/20 border-primary/40 text-primary hover:bg-primary/30"
              : "bg-white/5 border-white/10 text-gray-custom hover:text-white hover:bg-white/10"
          }`}
        >
          <RefreshCw className={`w-3 h-3 ${isAutoPlaying ? "animate-spin" : ""}`} />
          <span>{isAutoPlaying ? "Simulating" : "Interactive"}</span>
        </button>
      </div>

    </div>
  );
}
