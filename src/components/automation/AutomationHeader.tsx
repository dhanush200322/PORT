"use client";

import { motion, Variants } from "framer-motion";

const HEADING_TEXT = "Intelligent Workflows. Connected Systems. Automated Outcomes.";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.1,
      delayChildren: 0.2
    } 
  },
};

const labelVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
  },
};

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 15, filter: "blur(8px)" },
  visible: { 
    opacity: 1, 
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  },
};

const subtitleVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] } 
  },
};

export default function AutomationHeader() {
  const words = HEADING_TEXT.split(" ");

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="flex flex-col items-center text-center mb-12 md:mb-16 relative z-10"
    >
      <motion.div variants={labelVariants} className="flex items-center gap-2 mb-6">
        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        <span className="text-xs md:text-sm font-medium uppercase tracking-[0.25em] text-primary">
          GHL × AI AUTOMATION
        </span>
      </motion.div>

      <h2 className="flex flex-wrap justify-center gap-x-3 gap-y-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white mb-6 max-w-5xl leading-[1.15]">
        {words.map((word, i) => (
          <motion.span 
            key={i} 
            variants={wordVariants} 
            className={word.includes("Automated") ? "text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary inline-block" : "inline-block"}
          >
            {word}
          </motion.span>
        ))}
      </h2>

      <motion.div variants={subtitleVariants} className="flex flex-wrap justify-center items-center gap-2 md:gap-3 text-xs md:text-sm text-gray-custom/90 font-medium tracking-wide">
        <span className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-white/90">GoHighLevel</span>
        <span className="text-primary/40">•</span>
        <span className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-white/90">n8n</span>
        <span className="text-primary/40">•</span>
        <span className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-white/90">AI Classifier</span>
        <span className="text-primary/40">•</span>
        <span className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-white/90">REST APIs</span>
        <span className="text-primary/40">•</span>
        <span className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-white/90">Webhooks</span>
      </motion.div>
    </motion.div>
  );
}
