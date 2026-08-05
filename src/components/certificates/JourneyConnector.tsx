"use client";

import { motion } from "framer-motion";
import { GitFork, Briefcase, GraduationCap } from "lucide-react";

interface JourneyConnectorProps {
  hoveredBranch: "internship" | "course" | null;
}

export default function JourneyConnector({ hoveredBranch }: JourneyConnectorProps) {
  return (
    <div className="relative w-full max-w-5xl mx-auto my-8 hidden md:block z-10 pointer-events-none">
      
      {/* Center Node */}
      <div className="flex flex-col items-center justify-center relative mb-6">
        <motion.div
          animate={{ scale: [1, 1.08, 1], boxShadow: ["0 0 20px rgba(255,255,255,0.1)", "0 0 35px rgba(255,255,255,0.25)", "0 0 20px rgba(255,255,255,0.1)"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="w-12 h-12 rounded-2xl bg-white/5 border border-white/20 backdrop-blur-2xl flex items-center justify-center shadow-2xl relative z-10"
        >
          <GitFork className="w-5 h-5 text-white/80" />
        </motion.div>
        <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/40 mt-2">
          Career Journey Branch
        </span>
      </div>

      {/* SVG Animated Flow Paths */}
      <div className="relative w-full h-24">
        <svg 
          viewBox="0 0 1000 100" 
          fill="none" 
          className="w-full h-full overflow-visible"
        >
          <defs>
            {/* Cyan Gradient for Internship */}
            <linearGradient id="internshipGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.8" />
            </linearGradient>

            {/* Purple Gradient for Course */}
            <linearGradient id="courseGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#a855f7" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.8" />
            </linearGradient>

            {/* Base Dim Gradient */}
            <linearGradient id="baseGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.15)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
            </linearGradient>
          </defs>

          {/* Left Path: Center (500,0) -> Left Branch (250,90) */}
          <path
            d="M 500 0 C 500 45, 250 45, 250 90"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="3"
            fill="none"
          />
          <motion.path
            d="M 500 0 C 500 45, 250 45, 250 90"
            stroke={hoveredBranch === "internship" ? "url(#internshipGradient)" : "rgba(6,182,212,0.4)"}
            strokeWidth={hoveredBranch === "internship" ? "4" : "2"}
            strokeDasharray="8 6"
            fill="none"
            animate={{ strokeDashoffset: [0, -28] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            style={{
              filter: hoveredBranch === "internship" ? "drop-shadow(0 0 10px rgba(6,182,212,0.8))" : "none"
            }}
          />

          {/* Right Path: Center (500,0) -> Right Branch (750,90) */}
          <path
            d="M 500 0 C 500 45, 750 45, 750 90"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="3"
            fill="none"
          />
          <motion.path
            d="M 500 0 C 500 45, 750 45, 750 90"
            stroke={hoveredBranch === "course" ? "url(#courseGradient)" : "rgba(168,85,247,0.4)"}
            strokeWidth={hoveredBranch === "course" ? "4" : "2"}
            strokeDasharray="8 6"
            fill="none"
            animate={{ strokeDashoffset: [0, -28] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            style={{
              filter: hoveredBranch === "course" ? "drop-shadow(0 0 10px rgba(168,85,247,0.8))" : "none"
            }}
          />

          {/* Branch Target Nodes */}
          <circle 
            cx="250" 
            cy="90" 
            r="6" 
            fill="#06b6d4" 
            className={`transition-all duration-300 ${hoveredBranch === "internship" ? "r-8 opacity-100" : "opacity-60"}`} 
          />
          <circle 
            cx="750" 
            cy="90" 
            r="6" 
            fill="#a855f7" 
            className={`transition-all duration-300 ${hoveredBranch === "course" ? "r-8 opacity-100" : "opacity-60"}`} 
          />
        </svg>
      </div>

    </div>
  );
}
