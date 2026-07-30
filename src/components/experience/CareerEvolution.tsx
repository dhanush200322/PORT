"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface CareerEvolutionProps {
  scrollYProgress: MotionValue<number>;
}

export default function CareerEvolution({ scrollYProgress }: CareerEvolutionProps) {
  // Global Camera Zoom (0.98 -> 1.05)
  const cameraScale = useTransform(scrollYProgress, [0, 1], [0.98, 1.05]);

  // Stage 1: Student (0 to 0.25)
  const stage1Opacity = useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 1, 0]);
  const stage1Y = useTransform(scrollYProgress, [0, 0.3], [0, -50]);

  // Stage 2: Intern (0.2 to 0.5)
  const stage2Opacity = useTransform(scrollYProgress, [0.2, 0.3, 0.45, 0.55], [0, 1, 1, 0]);
  const stage2Scale = useTransform(scrollYProgress, [0.2, 0.55], [0.95, 1.05]);

  // Stage 3: Developer (0.45 to 0.75)
  const stage3Opacity = useTransform(scrollYProgress, [0.45, 0.55, 0.7, 0.8], [0, 1, 1, 0]);
  const stage3Scale = useTransform(scrollYProgress, [0.45, 0.8], [0.95, 1.05]);

  // Stage 4: AI Engineer (0.7 to 1.0)
  const stage4Opacity = useTransform(scrollYProgress, [0.7, 0.8, 1], [0, 1, 1]);
  const stage4Scale = useTransform(scrollYProgress, [0.7, 1], [0.95, 1.05]);

  // Overall Background colors
  const bgGradient = useTransform(
    scrollYProgress,
    [0, 0.33, 0.66, 1],
    [
      "radial-gradient(circle at 50% 50%, rgba(30, 20, 10, 0.3) 0%, rgba(10, 10, 10, 0) 70%)", // Warm Student
      "radial-gradient(circle at 50% 50%, rgba(20, 30, 40, 0.3) 0%, rgba(10, 10, 10, 0) 70%)", // Startup Blue
      "radial-gradient(circle at 50% 50%, rgba(40, 20, 40, 0.3) 0%, rgba(10, 10, 10, 0) 70%)", // Corporate Purple
      "radial-gradient(circle at 50% 50%, rgba(10, 40, 40, 0.4) 0%, rgba(10, 10, 10, 0) 70%)", // AI Cyber Green
    ]
  );

  return (
    <motion.div 
      className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center"
      style={{ scale: cameraScale }}
    >
      <motion.div className="absolute inset-0" style={{ background: bgGradient }} />

      {/* Grid Pattern that slowly shifts */}
      <motion.div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          y: useTransform(scrollYProgress, [0, 1], [0, -100]),
        }}
      />

      {/* =========================================
          SCENE 1: STUDENT
          ========================================= */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center"
        style={{ opacity: stage1Opacity, y: stage1Y }}
      >
        <div className="relative w-[600px] h-[400px] flex items-center justify-center">
          {/* Desk */}
          <div className="absolute bottom-10 w-3/4 h-2 bg-white/10 rounded-full blur-[1px]" />
          {/* Laptop */}
          <div className="absolute bottom-12 w-32 h-20 border border-white/20 bg-white/5 rounded-t-xl backdrop-blur-sm" />
          {/* Books */}
          <div className="absolute bottom-12 left-10 w-16 h-12 border border-white/10 bg-white/5 rounded-sm rotate-12" />
          {/* Silhouette */}
          <div className="absolute bottom-12 right-20 w-24 h-40 border border-white/10 bg-gradient-to-t from-white/10 to-transparent rounded-t-full opacity-50" />
          
          <div className="absolute top-20 text-center w-full">
            <span className="px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-200/50 text-xs tracking-widest uppercase shadow-[0_0_20px_rgba(255,165,0,0.1)]">
              Warm Classroom
            </span>
          </div>
        </div>
      </motion.div>

      {/* =========================================
          SCENE 2: INTERN
          ========================================= */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center"
        style={{ opacity: stage2Opacity, scale: stage2Scale }}
      >
        <div className="relative w-[800px] h-[500px] flex items-center justify-center">
          {/* Desk */}
          <div className="absolute bottom-10 w-full h-1 bg-white/10 rounded-full" />
          {/* Monitor */}
          <div className="absolute bottom-11 w-64 h-40 border border-blue-500/30 bg-blue-500/5 rounded-xl backdrop-blur-md shadow-[0_0_30px_rgba(0,100,255,0.1)] flex items-center justify-center">
            <div className="w-3/4 h-3/4 border border-blue-500/20 rounded-md flex flex-col gap-2 p-2 opacity-50">
               <div className="h-2 w-1/3 bg-blue-500/20 rounded" />
               <div className="h-2 w-full bg-blue-500/10 rounded" />
               <div className="h-2 w-5/6 bg-blue-500/10 rounded" />
            </div>
          </div>
          {/* Silhouette */}
          <div className="absolute bottom-11 right-20 w-32 h-56 border border-white/20 bg-gradient-to-t from-white/20 to-transparent rounded-t-full opacity-60" />

          <div className="absolute top-20 text-center w-full">
            <span className="px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-200/50 text-xs tracking-widest uppercase shadow-[0_0_20px_rgba(0,100,255,0.1)]">
              Startup Office
            </span>
          </div>
        </div>
      </motion.div>

      {/* =========================================
          SCENE 3: DEVELOPER
          ========================================= */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center"
        style={{ opacity: stage3Opacity, scale: stage3Scale }}
      >
        <div className="relative w-[1000px] h-[600px] flex items-center justify-center">
          {/* Dual Monitors */}
          <div className="absolute bottom-20 left-1/4 w-72 h-44 border border-purple-500/30 bg-purple-500/5 rounded-xl backdrop-blur-md shadow-[0_0_40px_rgba(150,0,255,0.1)] -rotate-6 flex flex-col p-3 gap-2">
            <div className="w-full h-3 bg-purple-500/20 rounded" />
            <div className="flex-1 border border-purple-500/20 rounded opacity-50 grid grid-cols-2 gap-2 p-2">
               <div className="bg-purple-500/10 rounded" />
               <div className="bg-purple-500/10 rounded" />
            </div>
          </div>
          <div className="absolute bottom-20 right-1/4 w-72 h-44 border border-purple-500/30 bg-purple-500/5 rounded-xl backdrop-blur-md shadow-[0_0_40px_rgba(150,0,255,0.1)] rotate-6 flex items-center justify-center flex-col gap-3">
             <div className="w-16 h-16 rounded-full border border-purple-500/30 bg-purple-500/10 animate-pulse" />
             <div className="w-24 h-2 bg-purple-500/20 rounded" />
          </div>
          
          {/* Silhouette */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-40 h-64 border border-white/30 bg-gradient-to-t from-white/30 to-transparent rounded-t-full opacity-70" />

          <div className="absolute top-20 text-center w-full">
            <span className="px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-200/50 text-xs tracking-widest uppercase shadow-[0_0_20px_rgba(150,0,255,0.1)]">
              Corporate Workspace
            </span>
          </div>
        </div>
      </motion.div>

      {/* =========================================
          SCENE 4: AI ENGINEER
          ========================================= */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center"
        style={{ opacity: stage4Opacity, scale: stage4Scale }}
      >
        <div className="relative w-[1200px] h-[700px] flex items-center justify-center">
          {/* Large Curved Monitor */}
          <div className="absolute bottom-24 left-1/2 -translate-x-1/2 w-[800px] h-[400px] border-t-2 border-primary/40 bg-gradient-to-b from-primary/10 to-transparent rounded-[100px_100px_0_0] blur-[1px] shadow-[0_-20px_80px_rgba(var(--primary),0.15)] flex flex-col items-center pt-10">
            {/* Abstract Node Graph */}
            <div className="flex items-center gap-10 opacity-60">
              <div className="w-12 h-12 rounded-full border border-primary/50 bg-primary/20 animate-pulse" />
              <div className="w-32 h-px bg-primary/30" />
              <div className="w-16 h-16 rounded-full border border-primary/50 bg-primary/30 shadow-[0_0_30px_rgba(var(--primary),0.3)] flex items-center justify-center">
                 <div className="w-4 h-4 rounded-full bg-primary" />
              </div>
              <div className="w-32 h-px bg-primary/30" />
              <div className="w-12 h-12 rounded-full border border-primary/50 bg-primary/20 animate-pulse" />
            </div>
          </div>
          
          {/* Silhouette */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-48 h-80 border-t border-white/40 bg-gradient-to-t from-white/40 to-transparent rounded-t-full opacity-90 shadow-[0_0_50px_rgba(255,255,255,0.1)]" />

          <div className="absolute top-20 text-center w-full">
            <span className="px-4 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-primary/70 text-xs tracking-widest uppercase shadow-[0_0_30px_rgba(var(--primary),0.2)]">
              AI & Automation Lab
            </span>
          </div>
        </div>
      </motion.div>
      
    </motion.div>
  );
}
