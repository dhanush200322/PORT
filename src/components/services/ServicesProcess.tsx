"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PROCESS_DATA } from "./ServicesData";
import * as LucideIcons from "lucide-react";

export default function ServicesProcess() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress within this container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // SVG Line drawing animation (draws from 0 to 1 based on scroll progress)
  const pathLength = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

  return (
    <div ref={containerRef} className="relative w-full max-w-6xl mx-auto px-6 py-32 flex flex-col items-center">
      
      {/* Animated Background Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.015] z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-24 relative z-10"
      >
        <span className="inline-block px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-[10px] font-semibold uppercase tracking-widest mb-6">
          Process
        </span>
        <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
          How I Work
        </h3>
      </motion.div>

      <div className="flex flex-col md:flex-row items-stretch justify-between w-full relative z-10">
        
        {/* Animated Connecting Line (Desktop) */}
        <div className="hidden md:block absolute top-[4.5rem] left-[10%] right-[10%] h-[2px] z-0">
          {/* Base faint line */}
          <div className="absolute inset-0 bg-white/5" />
          {/* Animated active line using SVG */}
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
            <motion.line
              x1="0"
              y1="1"
              x2="100%"
              y2="1"
              stroke="url(#gradient)"
              strokeWidth="2"
              style={{ pathLength }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="var(--primary)" stopOpacity="0" />
                <stop offset="50%" stopColor="var(--primary)" stopOpacity="1" />
                <stop offset="100%" stopColor="var(--primary)" stopOpacity="1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        {/* Animated Connecting Line (Mobile) */}
        <div className="block md:hidden absolute top-[10%] bottom-[10%] left-1/2 -translate-x-1/2 w-[2px] z-0">
          <div className="absolute inset-0 bg-white/5" />
          <motion.div 
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-transparent via-primary to-primary"
            style={{ height: useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]) }}
          />
        </div>

        {PROCESS_DATA.map((step, idx) => {
          const IconComponent = (LucideIcons as any)[step.icon] || LucideIcons.CheckCircle;
          
          // Calculate when this specific step should be "active" based on scroll
          const stepStart = idx * 0.2;
          const stepEnd = stepStart + 0.2;
          
          const isActive = useTransform(scrollYProgress, 
            [stepStart, stepEnd], 
            [0, 1]
          );

          // For the final "Delivery" step glow
          const isLast = idx === PROCESS_DATA.length - 1;

          return (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 flex flex-col items-center text-center w-full md:w-1/4 px-4 mb-20 md:mb-0 group"
            >
              {/* Card Container with Hover Effects */}
              <motion.div 
                whileHover={{ y: -6 }}
                className="w-full flex flex-col items-center p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all duration-500 hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)] relative overflow-hidden"
              >
                {/* Active/Success Glow */}
                <motion.div 
                  className={`absolute inset-0 rounded-3xl ${isLast ? 'bg-emerald-500/10' : 'bg-primary/10'}`}
                  style={{ opacity: isActive }}
                />

                {/* Icon Circle */}
                <div className="w-20 h-20 rounded-2xl bg-black/50 border border-white/10 flex flex-col items-center justify-center mb-6 shadow-xl relative overflow-hidden z-10 group-hover:border-primary/50 transition-colors duration-500">
                  <motion.div 
                    className="absolute inset-0 bg-primary/20"
                    style={{ opacity: isActive }}
                  />
                  <IconComponent className="w-8 h-8 text-white/50 group-hover:text-white group-hover:scale-110 transition-all duration-500 relative z-10" />
                </div>
                
                <h4 className="text-white font-bold text-lg tracking-wide uppercase mb-3 relative z-10 group-hover:text-primary transition-colors duration-500">
                  <span className="text-primary/50 mr-2">{step.number}</span>
                  {step.title}
                </h4>

                {/* Hidden/Revealed Description */}
                <p className="text-sm text-white/50 leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity duration-500 relative z-10">
                  {step.description}
                </p>
              </motion.div>
            </motion.div>
          );
        })}

      </div>

    </div>
  );
}
