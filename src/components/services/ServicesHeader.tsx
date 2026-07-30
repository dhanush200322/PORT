"use client";

import { motion } from "framer-motion";

export default function ServicesHeader() {
  const headingText = "Building Digital Products That Scale";
  const words = headingText.split(" ");

  return (
    <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto px-6 mb-24 md:mb-32 pt-20">
      
      {/* Label */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-[10px] font-semibold uppercase tracking-[0.2em] mb-6"
      >
        Services
      </motion.div>

      {/* Heading (Word by Word reveal) */}
      <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-8 flex flex-wrap justify-center gap-x-3 gap-y-2 md:gap-x-4">
        {words.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              duration: 0.8, 
              delay: 0.2 + (i * 0.1),
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            {word}
          </motion.span>
        ))}
      </h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ 
          duration: 0.8, 
          delay: 0.2 + (words.length * 0.1) + 0.2, // Play after heading
          ease: "easeOut"
        }}
        className="text-[var(--text-body)] font-light text-white/60 max-w-2xl leading-relaxed"
      >
        From modern web applications to AI-powered automation, I build reliable, scalable, and business-focused software solutions that solve real-world problems.
      </motion.p>
      
    </div>
  );
}
