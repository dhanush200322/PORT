"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ACADEMIC_DATA } from "./AcademicData";
import AcademicChapter from "./AcademicChapter";
import { GraduationCap } from "lucide-react";

export default function AcademicStorybook() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 400, damping: 90 });

  // -----------------------------------------------------
  // Background & Environment Logic
  // -----------------------------------------------------
  
  // Base background gradients for the 3 themes
  const bgGradient = useTransform(
    smoothProgress,
    [0, 0.33, 0.66],
    [
      "radial-gradient(circle at 50% 0%, rgba(255, 200, 100, 0.15) 0%, rgba(10, 10, 10, 0) 70%)", // Morning Classroom
      "radial-gradient(circle at 50% 0%, rgba(200, 255, 255, 0.15) 0%, rgba(10, 10, 10, 0) 70%)", // Science Lab
      "radial-gradient(circle at 50% 0%, rgba(0, 100, 255, 0.15) 0%, rgba(10, 10, 10, 0) 70%)",   // Engineering Campus
    ]
  );

  // Environment 1: Classroom
  const env1Opacity = useTransform(smoothProgress, [0, 0.25], [1, 0]);
  const env1Y = useTransform(smoothProgress, [0, 0.25], [0, -50]);

  // Environment 2: Lab
  const env2Opacity = useTransform(smoothProgress, [0.15, 0.33, 0.55], [0, 1, 0]);
  const env2Scale = useTransform(smoothProgress, [0.15, 0.55], [0.95, 1.05]);

  // Environment 3: Engineering Campus
  const env3Opacity = useTransform(smoothProgress, [0.45, 0.66, 1], [0, 1, 1]);
  const env3Scale = useTransform(smoothProgress, [0.45, 1], [0.95, 1.1]);

  // -----------------------------------------------------
  // Chapter "Page Flip" Logic
  // -----------------------------------------------------
  
  // Chapter 1 (10th)
  const chap1Opacity = useTransform(smoothProgress, [0, 0.3], [1, 0]);
  const chap1Y = useTransform(smoothProgress, [0, 0.3], [0, -100]);
  const chap1Scale = useTransform(smoothProgress, [0, 0.3], [1, 0.9]);

  // Chapter 2 (12th)
  const chap2Opacity = useTransform(smoothProgress, [0.2, 0.33, 0.6], [0, 1, 0]);
  const chap2Y = useTransform(smoothProgress, [0.2, 0.33, 0.6], [100, 0, -100]);
  const chap2Scale = useTransform(smoothProgress, [0.2, 0.33, 0.6], [0.9, 1, 0.9]);

  // Chapter 3 (Engineering)
  const chap3Opacity = useTransform(smoothProgress, [0.5, 0.66, 0.85], [0, 1, 0]);
  const chap3Y = useTransform(smoothProgress, [0.5, 0.66, 0.85], [100, 0, -100]);
  const chap3Scale = useTransform(smoothProgress, [0.5, 0.66, 0.85], [0.9, 1, 0.9]);

  // Graduation Ending
  const gradOpacity = useTransform(smoothProgress, [0.8, 0.9, 1], [0, 1, 1]);
  const gradY = useTransform(smoothProgress, [0.8, 0.9, 1], [50, 0, 0]);

  // Mobile layout fallback
  if (isMobile) {
    return (
      <div className="flex flex-col gap-12 px-4 w-full relative z-10 pt-10">
        {ACADEMIC_DATA.map((chapter, i) => (
          <motion.div 
            key={chapter.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="w-full flex justify-center"
          >
            <AcademicChapter chapter={chapter} />
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <div ref={containerRef} className="h-[400vh] relative w-full">
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-background flex items-center justify-center">
        
        {/* Dynamic Abstract Background */}
        <motion.div className="absolute inset-0 z-0" style={{ background: bgGradient }} />

        {/* Global Grid Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02] z-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />

        {/* =========================================
            ENVIRONMENT 1: Morning Classroom
            ========================================= */}
        <motion.div 
          className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
          style={{ opacity: env1Opacity, y: env1Y }}
        >
          {/* Abstract Blackboard */}
          <div className="absolute top-20 w-[800px] h-[300px] border border-white/5 bg-white/[0.01] rounded-xl flex p-6 opacity-30">
             {/* Abstract chalk marks */}
             <div className="w-1/2 h-full border-r border-white/5 flex flex-col gap-4 pr-4">
                <div className="w-3/4 h-px bg-white/20 rotate-1" />
                <div className="w-1/2 h-px bg-white/20 -rotate-2" />
                <div className="w-5/6 h-px bg-white/20" />
             </div>
          </div>
          {/* Abstract Desks */}
          <div className="absolute bottom-10 flex gap-20 opacity-20">
            <div className="w-64 h-32 border-t-2 border-orange-200/20 rounded-[100px_100px_0_0] bg-gradient-to-b from-orange-200/5 to-transparent" />
            <div className="w-64 h-32 border-t-2 border-orange-200/20 rounded-[100px_100px_0_0] bg-gradient-to-b from-orange-200/5 to-transparent" />
          </div>
        </motion.div>

        {/* =========================================
            ENVIRONMENT 2: Science Lab
            ========================================= */}
        <motion.div 
          className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
          style={{ opacity: env2Opacity, scale: env2Scale }}
        >
          {/* Abstract Digital Display Boards */}
          <div className="absolute top-1/4 right-20 w-64 h-40 border border-cyan-500/20 bg-cyan-500/5 rounded-xl flex items-center justify-center shadow-[0_0_30px_rgba(0,255,255,0.05)]">
             <div className="w-32 h-32 rounded-full border border-cyan-500/30 border-dashed animate-[spin_20s_linear_infinite]" />
             <div className="absolute w-20 h-20 rounded-full border border-cyan-500/20 animate-[spin_15s_linear_infinite_reverse]" />
          </div>
          {/* Abstract Lab Equipment/Desk */}
          <div className="absolute bottom-20 w-full h-1 bg-cyan-100/10" />
          <div className="absolute bottom-21 left-1/4 w-32 h-40 border border-cyan-100/20 bg-gradient-to-b from-cyan-100/5 to-transparent rounded-t-lg backdrop-blur-sm" />
        </motion.div>

        {/* =========================================
            ENVIRONMENT 3: Engineering Campus
            ========================================= */}
        <motion.div 
          className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
          style={{ opacity: env3Opacity, scale: env3Scale }}
        >
          {/* PCB Traces & Blueprints */}
          <div className="absolute inset-0 opacity-20"
               style={{
                 backgroundImage: `radial-gradient(circle at 50% 50%, transparent 0%, var(--background) 80%), repeating-linear-gradient(45deg, rgba(0,100,255,0.1) 0, rgba(0,100,255,0.1) 1px, transparent 1px, transparent 20px)`
               }}
          />
          {/* Network Nodes */}
          <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_20px_rgba(0,100,255,1)] animate-pulse" />
          <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_20px_rgba(0,100,255,1)] animate-pulse" />
          <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_20px_rgba(0,100,255,1)] animate-pulse" />
          
          {/* Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-30">
             <line x1="25%" y1="33%" x2="66%" y2="50%" stroke="url(#blue-grad)" strokeWidth="1" />
             <line x1="66%" y1="50%" x2="75%" y2="66%" stroke="url(#blue-grad)" strokeWidth="1" />
             <defs>
               <linearGradient id="blue-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                 <stop offset="0%" stopColor="rgba(0,100,255,0.8)" />
                 <stop offset="100%" stopColor="rgba(0,100,255,0)" />
               </linearGradient>
             </defs>
          </svg>
        </motion.div>

        {/* =========================================
            CHAPTER 1: 10th Standard
            ========================================= */}
        <motion.div 
          className="absolute z-10 w-full flex justify-center px-4"
          style={{ opacity: chap1Opacity, y: chap1Y, scale: chap1Scale }}
        >
          <AcademicChapter chapter={ACADEMIC_DATA[0]} />
        </motion.div>

        {/* =========================================
            CHAPTER 2: 12th Standard
            ========================================= */}
        <motion.div 
          className="absolute z-20 w-full flex justify-center px-4"
          style={{ opacity: chap2Opacity, y: chap2Y, scale: chap2Scale }}
        >
          <AcademicChapter chapter={ACADEMIC_DATA[1]} />
        </motion.div>

        {/* =========================================
            CHAPTER 3: Engineering
            ========================================= */}
        <motion.div 
          className="absolute z-30 w-full flex flex-col items-center justify-center px-4"
          style={{ opacity: chap3Opacity, y: chap3Y, scale: chap3Scale }}
        >
          <AcademicChapter chapter={ACADEMIC_DATA[2]} />
          
          {/* What I Learned Panel (Attached to Engineering Chapter) */}
          <div className="mt-8 flex flex-col items-center">
             <p className="text-xs uppercase tracking-[0.2em] font-semibold text-white/40 mb-4">What Engineering Taught Me</p>
             <div className="flex flex-wrap justify-center gap-3 max-w-2xl">
               {[
                 "Problem Solving",
                 "Team Collaboration",
                 "System Thinking",
                 "Continuous Learning",
                 "Building Real Solutions"
               ].map((skill, i) => (
                 <span key={i} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white/80 text-sm backdrop-blur-md">
                   ✓ {skill}
                 </span>
               ))}
             </div>
          </div>
        </motion.div>

        {/* =========================================
            GRADUATION ENDING
            ========================================= */}
        <motion.div 
          className="absolute z-40 w-full flex flex-col items-center justify-center"
          style={{ opacity: gradOpacity, y: gradY }}
        >
           <div className="w-24 h-24 mb-8 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center shadow-[0_0_50px_rgba(var(--primary),0.2)]">
             <GraduationCap className="w-12 h-12 text-primary" />
           </div>
           <span className="px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest mb-6">
              2025
           </span>
           <h3 className="text-[var(--text-h2)] font-bold text-white tracking-tight mb-4 text-center">
             Graduation
           </h3>
           <p className="text-xl text-primary font-medium text-center">
             Degree Earned. Career Begins.
           </p>
        </motion.div>

      </div>
    </div>
  );
}
