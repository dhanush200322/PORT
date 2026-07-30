"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUp, RefreshCcw } from "lucide-react";

interface ContactSuccessProps {
  onReset: () => void;
}

export default function ContactSuccess({ onReset }: ContactSuccessProps) {
  const prefersReducedMotion = useReducedMotion();
  const [isInteracted, setIsInteracted] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto transition back after 6 seconds
  useEffect(() => {
    if (!isInteracted) {
      timerRef.current = setTimeout(() => {
        onReset();
      }, 6000);
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isInteracted, onReset]);

  const handleInteraction = () => {
    setIsInteracted(true);
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const titleWords = ["Message", "Sent", "Successfully"];

  // Generate deterministic particles for premium effect
  const particles = Array.from({ length: 18 }).map((_, i) => ({
    id: i,
    x: (i % 6) * 15 - 45 + Math.random() * 20,
    delay: i * 0.05 + Math.random() * 0.2,
    duration: 2 + Math.random() * 1.5,
  }));

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={handleInteraction}
      onClick={handleInteraction}
      onFocus={handleInteraction}
      className="p-8 md:p-16 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-emerald-500/30 backdrop-blur-2xl flex flex-col items-center justify-center text-center relative min-h-[600px] transition-colors duration-700 group hover:-translate-y-1 hover:shadow-[0_20px_60px_-15px_rgba(16,185,129,0.1)]"
      role="status"
      aria-live="polite"
    >
      {/* Soft Green Radial Glow Background */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none z-0" 
      />

      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 rounded-[2.5rem]">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: "60%", x: `${p.x}px`, scale: 0.5 }}
            animate={
              prefersReducedMotion
                ? { opacity: 0 }
                : { opacity: [0, 0.6, 0], y: "-20%", scale: [0.5, 1, 0.5] }
            }
            transition={{
              duration: p.duration,
              delay: p.delay,
              ease: "easeOut",
              repeat: Infinity,
              repeatType: "loop"
            }}
            className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-emerald-400 rounded-full blur-[1px]"
          />
        ))}
      </div>

      {/* Success Icon */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
        whileHover={{ rotate: 3, scale: 1.05 }}
        className="w-28 h-28 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-10 z-10 shadow-[0_0_50px_rgba(16,185,129,0.2)] relative transition-all duration-300 group-hover:shadow-[0_0_70px_rgba(16,185,129,0.3)]"
      >
        <svg className="w-14 h-14 text-emerald-400" viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <motion.path
            d="M 14.1 27.2 l 7.1 7.2 16.7 -16.8"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: 1, 
              opacity: 1,
            }}
            transition={{ 
              pathLength: { duration: 0.8, ease: "easeOut", delay: 0.4 },
              opacity: { duration: 0.1, delay: 0.4 }
            }}
          />
        </svg>
        {/* Subtle Pulse */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0, 0.3, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 rounded-full border border-emerald-400 pointer-events-none"
        />
      </motion.div>

      {/* Heading Animation */}
      <div className="flex flex-wrap justify-center gap-2 mb-4 z-10 overflow-hidden">
        {titleWords.map((word, idx) => (
          <motion.span
            key={idx}
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.2 + idx * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-[var(--text-h2)] font-bold text-white tracking-tight"
          >
            {word}
          </motion.span>
        ))}
      </div>

      {/* Subtitle */}
      <motion.p 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
        className="text-[var(--text-body)] text-white/60 max-w-md mx-auto mb-12 z-10 leading-relaxed font-light"
      >
        Your inquiry has been secured. I'll review your details and be in touch shortly.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
        className="flex flex-col sm:flex-row items-center gap-4 z-10 w-full justify-center"
      >
        <button
          onClick={onReset}
          className="group relative px-8 py-4 rounded-xl bg-white text-black font-bold text-sm uppercase tracking-widest transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 w-full sm:w-auto shadow-[0_0_30px_rgba(255,255,255,0.2)]"
        >
          <RefreshCcw className="w-4 h-4 group-hover:-rotate-90 transition-transform duration-500" />
          Send Another Message
        </button>

        <button
          onClick={scrollToTop}
          className="group relative px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white transition-all text-sm uppercase tracking-widest font-semibold hover:scale-105 active:scale-95 flex items-center justify-center gap-2 w-full sm:w-auto"
        >
          <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
          Back to Top
        </button>
      </motion.div>

      {/* Closing Message */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-0 w-full text-center z-10 px-6"
      >
        <p className="text-white/30 text-sm font-light italic">
          "Thank you for your time. I'm looking forward to connecting with you."
        </p>
      </motion.div>

    </motion.div>
  );
}
