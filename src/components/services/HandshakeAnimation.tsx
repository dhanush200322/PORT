"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Sparkles, Handshake, ShieldCheck, Zap } from "lucide-react";
import { useState, useEffect } from "react";

// Premium Glassmorphic Vector Left Hand SVG
const LeftHandSVG = () => (
  <svg viewBox="0 0 200 120" className="w-32 h-20 md:w-48 md:h-28 drop-shadow-[0_10px_20px_rgba(6,182,212,0.25)]">
    <defs>
      <linearGradient id="left-hand-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.9" />
        <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.7" />
        <stop offset="100%" stopColor="#1E1B4B" stopOpacity="0.4" />
      </linearGradient>
      <linearGradient id="left-arm-glow" x1="0%" y1="50%" x2="100%" y2="50%">
        <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.8" />
      </linearGradient>
    </defs>

    {/* Cuff / Arm */}
    <rect x="0" y="38" width="60" height="44" rx="8" fill="url(#left-arm-glow)" stroke="#06B6D4" strokeWidth="1.5" />
    <line x1="10" y1="38" x2="10" y2="82" stroke="#67E8F9" strokeWidth="2" opacity="0.6" />
    <line x1="25" y1="38" x2="25" y2="82" stroke="#67E8F9" strokeWidth="1" opacity="0.4" />

    {/* Hand & Palm */}
    <path
      d="M55 42 L110 40 C125 40 135 48 135 56 C135 62 125 68 115 70 L115 78 C115 84 105 88 95 88 L55 82 Z"
      fill="url(#left-hand-grad)"
      stroke="#67E8F9"
      strokeWidth="1.5"
    />

    {/* Clapsed Fingers (Left grip) */}
    <path d="M110 42 C125 45 138 52 135 60 C132 66 122 66 112 64" fill="none" stroke="#A5F3FC" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M105 48 C120 52 132 58 128 66 C125 72 116 70 108 68" fill="none" stroke="#A5F3FC" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M100 54 C115 58 125 64 122 72 C119 76 110 74 102 72" fill="none" stroke="#A5F3FC" strokeWidth="2" strokeLinecap="round" />
    <path d="M95 60 C108 64 116 70 114 76 C112 80 104 78 98 75" fill="none" stroke="#A5F3FC" strokeWidth="2" strokeLinecap="round" />

    {/* Thumb */}
    <path d="M75 42 Q90 28 105 32 Q112 36 102 46 Z" fill="url(#left-hand-grad)" stroke="#67E8F9" strokeWidth="1.5" />
  </svg>
);

// Premium Glassmorphic Vector Right Hand SVG
const RightHandSVG = () => (
  <svg viewBox="0 0 200 120" className="w-32 h-20 md:w-48 md:h-28 drop-shadow-[0_10px_20px_rgba(168,85,247,0.25)] scale-x-[-1]">
    <defs>
      <linearGradient id="right-hand-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#A855F7" stopOpacity="0.9" />
        <stop offset="50%" stopColor="#6366F1" stopOpacity="0.7" />
        <stop offset="100%" stopColor="#1E1B4B" stopOpacity="0.4" />
      </linearGradient>
      <linearGradient id="right-arm-glow" x1="0%" y1="50%" x2="100%" y2="50%">
        <stop offset="0%" stopColor="#A855F7" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#A855F7" stopOpacity="0.8" />
      </linearGradient>
    </defs>

    {/* Cuff / Arm */}
    <rect x="0" y="38" width="60" height="44" rx="8" fill="url(#right-arm-glow)" stroke="#A855F7" strokeWidth="1.5" />
    <line x1="10" y1="38" x2="10" y2="82" stroke="#E9D5FF" strokeWidth="2" opacity="0.6" />
    <line x1="25" y1="38" x2="25" y2="82" stroke="#E9D5FF" strokeWidth="1" opacity="0.4" />

    {/* Hand & Palm */}
    <path
      d="M55 42 L110 40 C125 40 135 48 135 56 C135 62 125 68 115 70 L115 78 C115 84 105 88 95 88 L55 82 Z"
      fill="url(#right-hand-grad)"
      stroke="#E9D5FF"
      strokeWidth="1.5"
    />

    {/* Clapsed Fingers (Right grip) */}
    <path d="M110 42 C125 45 138 52 135 60 C132 66 122 66 112 64" fill="none" stroke="#F5D0FE" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M105 48 C120 52 132 58 128 66 C125 72 116 70 108 68" fill="none" stroke="#F5D0FE" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M100 54 C115 58 125 64 122 72 C119 76 110 74 102 72" fill="none" stroke="#F5D0FE" strokeWidth="2" strokeLinecap="round" />
    <path d="M95 60 C108 64 116 70 114 76 C112 80 104 78 98 75" fill="none" stroke="#F5D0FE" strokeWidth="2" strokeLinecap="round" />

    {/* Thumb */}
    <path d="M75 42 Q90 28 105 32 Q112 36 102 46 Z" fill="url(#right-hand-grad)" stroke="#E9D5FF" strokeWidth="1.5" />
  </svg>
);

export default function HandshakeAnimation() {
  const shouldReduceMotion = useReducedMotion();
  const [hasAnimated, setHasAnimated] = useState(false);

  // Particle positions for energy burst at contact
  const particles = [
    { x: -35, y: -25, delay: 0.9 },
    { x: 35, y: -30, delay: 0.95 },
    { x: -45, y: 20, delay: 1.0 },
    { x: 45, y: 25, delay: 1.05 },
    { x: 0, y: -45, delay: 0.85 },
    { x: 0, y: 45, delay: 1.1 },
  ];

  // If reduced motion is enabled, render simplified accessible state
  if (shouldReduceMotion) {
    return (
      <div className="w-full max-w-4xl mx-auto px-6 py-12 flex flex-col items-center justify-center text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-4">
          <Handshake className="w-4 h-4" />
          Seamless Collaboration
        </div>
        <h3 className="text-xl md:text-3xl font-bold text-white tracking-tight">
          Let’s Build Something Extraordinary Together
        </h3>
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-5xl mx-auto px-6 py-16 md:py-24 flex flex-col items-center justify-center overflow-hidden pointer-events-none select-none">
      
      {/* Background Ambient Glow Halo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-r from-cyan-500/15 via-blue-500/15 to-purple-500/15 blur-[80px] pointer-events-none" />

      {/* Main Container Triggered Once On View */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
        onViewportEnter={() => setHasAnimated(true)}
        className="relative z-10 flex flex-col items-center justify-center w-full"
      >
        
        {/* Stage 1: Partnership Badge Above Animation */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -20, scale: 0.9 },
            visible: { opacity: 1, y: 0, scale: 1 }
          }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-lg mb-8"
        >
          <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-white/80">
            Collaboration • Trust • Partnership
          </span>
          <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
        </motion.div>

        {/* Stage 2: Handshake Motion Stage */}
        <div className="relative flex items-center justify-center w-full max-w-2xl h-36 md:h-48 my-2">
          
          {/* Contact Energy Burst Rings */}
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.2 },
              visible: { 
                opacity: [0, 1, 0], 
                scale: [0.3, 2.2, 3.2],
                transition: { duration: 1.2, delay: 0.85, ease: "easeOut" } 
              }
            }}
            className="absolute z-0 w-24 h-24 md:w-36 md:h-36 rounded-full border-2 border-cyan-400/60 shadow-[0_0_40px_rgba(6,182,212,0.6)]"
          />

          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.2 },
              visible: { 
                opacity: [0, 0.8, 0], 
                scale: [0.2, 1.8, 2.6],
                transition: { duration: 1.4, delay: 0.95, ease: "easeOut" } 
              }
            }}
            className="absolute z-0 w-20 h-20 md:w-28 md:h-28 rounded-full border-2 border-purple-400/60 shadow-[0_0_40px_rgba(168,85,247,0.6)]"
          />

          {/* Contact Core Particle Burst */}
          {particles.map((p, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, x: 0, y: 0, scale: 0 },
                visible: {
                  opacity: [0, 1, 0],
                  x: [0, p.x * 1.5],
                  y: [0, p.y * 1.5],
                  scale: [0.5, 1.5, 0],
                  transition: { duration: 0.8, delay: p.delay, ease: "easeOut" }
                }
              }}
              className="absolute z-10 w-2 h-2 rounded-full bg-gradient-to-r from-cyan-300 to-purple-300 shadow-[0_0_12px_#38BDF8]"
            />
          ))}

          {/* Left Hand Motion */}
          <motion.div
            variants={{
              hidden: { x: "-120%", opacity: 0, scale: 0.9 },
              visible: {
                x: ["-120%", "-5%", "0%", "-2%", "0%"],
                opacity: [0, 1, 1, 1, 1],
                scale: [0.9, 1.05, 1, 1.02, 1],
                rotate: [0, 4, 0, -2, 0],
                transition: {
                  duration: 1.4,
                  times: [0, 0.55, 0.7, 0.85, 1],
                  ease: [0.16, 1, 0.3, 1]
                }
              }
            }}
            className="absolute left-[8%] sm:left-[18%] md:left-[24%] z-20"
          >
            <LeftHandSVG />
          </motion.div>

          {/* Right Hand Motion */}
          <motion.div
            variants={{
              hidden: { x: "120%", opacity: 0, scale: 0.9 },
              visible: {
                x: ["120%", "5%", "0%", "2%", "0%"],
                opacity: [0, 1, 1, 1, 1],
                scale: [0.9, 1.05, 1, 1.02, 1],
                rotate: [0, -4, 0, 2, 0],
                transition: {
                  duration: 1.4,
                  times: [0, 0.55, 0.7, 0.85, 1],
                  ease: [0.16, 1, 0.3, 1]
                }
              }
            }}
            className="absolute right-[8%] sm:right-[18%] md:right-[24%] z-20"
          >
            <RightHandSVG />
          </motion.div>

        </div>

        {/* Stage 3: Headline & Partnership Callout */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 25 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.8, delay: 1.3, ease: "easeOut" }
            }
          }}
          className="flex flex-col items-center text-center mt-4 max-w-xl"
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="w-8 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
            <span className="text-cyan-400 font-mono text-xs font-semibold tracking-wider">
              READY FOR IMPACT
            </span>
            <span className="w-8 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
          </div>

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-snug">
            Let’s Build Something <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Extraordinary Together
            </span>
          </h3>

          <p className="text-white/50 text-xs sm:text-sm font-light mt-3 max-w-md">
            Bridging vision into reality through full-stack web engineering, custom AI automation, and scalable digital solutions.
          </p>
        </motion.div>

      </motion.div>

    </div>
  );
}
