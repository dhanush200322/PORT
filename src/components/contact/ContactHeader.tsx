"use client";

import { motion } from "framer-motion";

export default function ContactHeader() {
  const headingText = "Let's Build Something Amazing Together";
  const words = headingText.split(" ");

  return (
    <div className="flex flex-col items-start max-w-2xl mb-20">
      
      {/* Label */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-[10px] font-semibold uppercase tracking-[0.2em] mb-6"
      >
        Contact
      </motion.div>

      {/* Heading (Word by Word reveal) */}
      <h2 className="text-[var(--text-h1)] font-bold text-white tracking-tight leading-[1.1] mb-6 flex flex-wrap gap-x-3 gap-y-2">
        {words.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              duration: 0.8, 
              delay: 0.1 + (i * 0.08),
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
          delay: 0.1 + (words.length * 0.08) + 0.2, // Play after heading
          ease: "easeOut"
        }}
        className="text-[var(--text-body)] font-light text-white/60 leading-relaxed"
      >
        Whether you're hiring a Full Stack Developer, looking for AI Automation, or planning your next digital product, I'd love to hear about your ideas.
      </motion.p>
      
    </div>
  );
}
