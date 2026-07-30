"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { EXPERIENCE_DATA } from "./ExperienceData";
import ExperienceCard from "./ExperienceCard";
import CareerEvolution from "./CareerEvolution";
import FutureVision from "./FutureVision";

export default function CareerJourney() {
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

  // Smooth out the scroll progress slightly for the UI movement
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 400, damping: 90 });

  // Map 0 -> 1 progress to a horizontal translation
  // Desktop layout translates fully left
  // Using a percentage based translation based on the total width of the track
  const x = useTransform(smoothProgress, [0, 1], ["0%", "-75%"]);

  // Timeline line width (0% to 100%)
  const lineWidth = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  // Calculate current active stage based on scroll progress
  // 5 stops: 4 stages + 1 future vision
  const getStageIndex = (progress: number) => {
    if (progress < 0.2) return 0;
    if (progress < 0.4) return 1;
    if (progress < 0.6) return 2;
    if (progress < 0.8) return 3;
    return 4;
  };

  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    return smoothProgress.on("change", (v) => {
      setActiveStage(getStageIndex(v));
    });
  }, [smoothProgress]);

  // Mobile layout fallback (Vertical)
  if (isMobile) {
    return (
      <div className="flex flex-col gap-8 px-4 w-full relative z-10 pt-10">
        {EXPERIENCE_DATA.map((stage, i) => (
          <motion.div 
            key={stage.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="w-full flex justify-center"
          >
            <ExperienceCard data={stage} />
          </motion.div>
        ))}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="w-full flex justify-center mt-10"
        >
          <FutureVision />
        </motion.div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="h-[400vh] relative w-full">
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-background">
        
        {/* Dynamic Abstract Background/Evolution */}
        <CareerEvolution scrollYProgress={smoothProgress} />

        {/* Horizontal Scrolling Track */}
        <motion.div 
          className="absolute top-0 left-0 h-full flex items-center pt-20 pb-40 px-[10vw]"
          style={{ x }}
        >
          <div className="flex items-center gap-[15vw]">
            {EXPERIENCE_DATA.map((stage) => (
              <ExperienceCard key={stage.id} data={stage} />
            ))}
            {/* 5th element: Future Vision */}
            <FutureVision />
          </div>
        </motion.div>

        {/* Cinematic Animated Timeline (Bottom) */}
        <div className="absolute bottom-16 left-0 right-0 px-[10vw] z-50">
          <div className="flex items-center justify-between relative">
            {/* Track Background */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-px bg-white/10" />
            
            {/* Active Drawing Line */}
            <motion.div 
              className="absolute top-1/2 -translate-y-1/2 left-0 h-px bg-primary" 
              style={{ width: lineWidth }}
            />

            {/* Timeline Nodes */}
            {EXPERIENCE_DATA.map((stage, idx) => (
              <div 
                key={stage.id} 
                className={`relative z-10 flex flex-col items-center gap-4 transition-all duration-500 ${activeStage >= idx ? 'opacity-100 scale-110' : 'opacity-40 scale-100'}`}
              >
                <div className={`w-12 h-12 rounded-full border flex items-center justify-center text-xl backdrop-blur-md transition-colors duration-500 ${activeStage >= idx ? 'bg-primary/20 border-primary text-white shadow-[0_0_20px_rgba(var(--primary),0.3)]' : 'bg-black border-white/20 text-white/50'}`}>
                  {stage.icon}
                </div>
                <span className={`text-[10px] uppercase tracking-widest font-semibold transition-colors duration-500 ${activeStage >= idx ? 'text-primary' : 'text-white/40'}`}>
                  {stage.stage}
                </span>
              </div>
            ))}
            
            {/* Future Vision Node */}
            <div className={`relative z-10 flex flex-col items-center gap-4 transition-all duration-500 ${activeStage === 4 ? 'opacity-100 scale-110' : 'opacity-40 scale-100'}`}>
               <div className={`w-12 h-12 rounded-full border flex items-center justify-center text-xl backdrop-blur-md transition-colors duration-500 ${activeStage === 4 ? 'bg-primary/20 border-primary text-white shadow-[0_0_20px_rgba(var(--primary),0.3)]' : 'bg-black border-white/20 text-white/50'}`}>
                  🚀
                </div>
                <span className={`text-[10px] uppercase tracking-widest font-semibold transition-colors duration-500 ${activeStage === 4 ? 'text-primary' : 'text-white/40'}`}>
                  Future
                </span>
            </div>

          </div>

          {/* Progress Indicator */}
          <div className="mt-8 flex items-center gap-4 justify-center">
            <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-white/50">Career Progress</span>
            <div className="flex gap-1">
               {/* 8 blocks total, fill based on stage */}
               {[...Array(8)].map((_, i) => (
                 <div 
                   key={i} 
                   className={`h-1.5 w-4 rounded-sm transition-all duration-500 ${
                     i < (activeStage + 1) * 1.6 ? 'bg-primary shadow-[0_0_10px_rgba(var(--primary),0.5)]' : 'bg-white/10'
                   }`} 
                 />
               ))}
            </div>
            <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-primary ml-2">
              {activeStage === 4 ? "Future" : EXPERIENCE_DATA[activeStage]?.stage}
            </span>
          </div>

        </div>

      </div>
    </div>
  );
}
