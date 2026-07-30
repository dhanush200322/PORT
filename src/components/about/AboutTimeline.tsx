"use client";

import { motion } from "framer-motion";

const TIMELINE_EVENTS = [
  { label: "Education", year: "2021" },
  { label: "Internships", year: "2025" },
  { label: "Freelance", year: "2026" },
  { label: "Current", year: "Present" },
];

export default function AboutTimeline() {
  return (
    <div className="mt-24 pt-16 border-t border-white/5 w-full max-w-4xl mx-auto">
      <motion.h3 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center text-sm font-medium text-gray-custom uppercase tracking-[0.2em] mb-12"
      >
        Career Progression
      </motion.h3>

      <div className="relative flex justify-between items-center w-full">
        {/* Background Line */}
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[1px] bg-white/10" />

        {/* Animated Progress Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[1px] bg-primary origin-left"
        />

        {/* Timeline Nodes */}
        {TIMELINE_EVENTS.map((event, index) => {
          const isCurrent = index === TIMELINE_EVENTS.length - 1;
          
          return (
            <div key={index} className="relative flex flex-col items-center group">
              
              {/* Year Tooltip (Top) */}
              <motion.span 
                initial={{ opacity: 0, y: 5 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.5 + (index * 0.15), duration: 0.5 }}
                className={`absolute -top-8 text-xs font-medium ${isCurrent ? 'text-primary' : 'text-white/50'}`}
              >
                {event.year}
              </motion.span>

              {/* Node (Fills exactly as the line reaches it) */}
              <motion.div
                initial={{ scale: 0, backgroundColor: "rgba(4, 7, 13, 1)" }}
                whileInView={{ 
                  scale: 1, 
                  backgroundColor: "rgba(79, 140, 255, 1)",
                  boxShadow: isCurrent ? "0 0 15px rgba(79, 140, 255, 0.4)" : "none"
                }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  scale: { delay: (index * 0.4), duration: 0.3 },
                  backgroundColor: { delay: (index * 0.4) + 0.1, duration: 0.2 },
                  boxShadow: { delay: (index * 0.4) + 0.1, duration: 0.2 }
                }}
                className={`w-3 h-3 rounded-full border-2 border-primary relative z-10 transition-transform hover:scale-125`}
              />
              
              {/* Label (Bottom) */}
              <motion.span 
                initial={{ opacity: 0, y: -5 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.5 + (index * 0.15), duration: 0.5 }}
                className={`absolute -bottom-8 text-xs sm:text-sm font-medium whitespace-nowrap ${isCurrent ? 'text-white' : 'text-gray-custom'}`}
              >
                {event.label}
              </motion.span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
