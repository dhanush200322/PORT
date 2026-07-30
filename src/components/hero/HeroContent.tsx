"use client";

import { motion } from "framer-motion";
import HeroButtons from "./HeroButtons";

export default function HeroContent() {
  return (
    <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-6 md:px-12 mt-16 pointer-events-none">
      
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-8 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center gap-2 pointer-events-auto"
      >
        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        <span className="text-xs sm:text-sm font-medium text-gray-custom tracking-wide">
          AI • Full Stack • Available for Freelance
        </span>
      </motion.div>

      {/* Greeting */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-lg sm:text-xl md:text-2xl text-gray-custom mb-4 font-light tracking-wide"
      >
        Hello, I'm
      </motion.p>

      {/* Name Title */}
      <div className="overflow-hidden mb-6 flex justify-center">
        <motion.h1
          className="text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-bold tracking-tight text-white flex items-center justify-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 1 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.08,
                delayChildren: 0.1,
              },
            },
          }}
        >
          {"DHANUSH AV".split("").map((char, index) => (
            <motion.span
              key={index}
              variants={{
                hidden: { y: "100%", opacity: 0 },
                visible: { 
                  y: 0, 
                  opacity: 1,
                  transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] }
                },
              }}
              className={char === " " ? "w-4 md:w-8" : "inline-block"}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>
      </div>

      {/* Roles & Subtitle */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="flex flex-col items-center max-w-2xl"
      >
        <h2 className="text-[var(--text-h3)] font-medium text-white/90 mb-4 tracking-tight flex flex-col sm:flex-row items-center gap-2">
          <span>Full Stack Developer</span>
          <span className="hidden sm:inline text-primary">&</span>
          <span className="sm:hidden text-primary">&</span>
          <span>AI Automation Engineer</span>
        </h2>
        <p className="text-[var(--text-body)] text-gray-custom leading-relaxed font-light">
          Building Scalable Web Applications & AI Solutions.
        </p>
      </motion.div>

      {/* Call To Actions */}
      <div className="pointer-events-auto">
        <HeroButtons />
      </div>

      {/* Mouse Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-gray-custom">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
          <motion.div
            className="w-full h-1/2 bg-primary"
            animate={{ 
              y: ["-100%", "200%"],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}
