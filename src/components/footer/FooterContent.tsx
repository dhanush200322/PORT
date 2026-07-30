"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function FooterContent() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const titleText = "Let's Build Something Extraordinary";
  const quoteText = "The best digital experiences begin with a simple conversation.";
  
  const signatureLines = [
    "Crafted with passion,",
    "precision,",
    "and a commitment to building",
    "exceptional digital experiences."
  ];

  const letterVariants = {
    hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div ref={containerRef} className="relative z-10 w-full max-w-[1400px] mx-auto px-6 flex flex-col items-center text-center mt-32 mb-20 pointer-events-none">
      
      {/* Interactive Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="mb-16 pointer-events-auto"
      >
        <motion.div
          whileHover={{ 
            rotate: 4, 
            scale: 1.05, 
            boxShadow: "0 0 40px rgba(255,255,255,0.2)"
          }}
          className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center cursor-pointer transition-all duration-300 relative overflow-hidden group"
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <span className="text-2xl font-bold text-white relative z-10">D.</span>
        </motion.div>
      </motion.div>

      {/* Centerpiece Typography */}
      <motion.div 
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ staggerChildren: 0.03, delayChildren: 0.2 }}
        className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-16 max-w-[1200px]"
      >
        {titleText.split(" ").map((word, wordIndex) => (
          <div key={wordIndex} className="flex overflow-hidden pb-4">
            {word.split("").map((char, charIndex) => (
              <motion.span
                key={`${wordIndex}-${charIndex}`}
                variants={letterVariants}
                transition={{ 
                  type: "spring", 
                  damping: 12, 
                  stiffness: 100 
                }}
                className="text-[12vw] md:text-[100px] lg:text-[140px] font-[800] leading-[0.9] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40"
              >
                {char}
              </motion.span>
            ))}
          </div>
        ))}
      </motion.div>

      {/* Floating Quote */}
      <motion.div 
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ staggerChildren: 0.1, delayChildren: 1.5 }}
        className="flex flex-wrap justify-center gap-1.5 mb-24 max-w-2xl"
      >
        {quoteText.split(" ").map((word, i) => (
          <motion.span 
            key={i} 
            variants={wordVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-lg md:text-xl text-white/50 font-light"
          >
            {word}
          </motion.span>
        ))}
      </motion.div>

      {/* Final Signature */}
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ staggerChildren: 0.4, delayChildren: 2.5 }}
        className="flex flex-col items-center gap-1 opacity-40 hover:opacity-100 transition-opacity duration-700 pointer-events-auto"
      >
        {signatureLines.map((line, i) => (
          <motion.p
            key={i}
            variants={{
              hidden: { opacity: 0, filter: "blur(4px)", y: 10 },
              visible: { opacity: 1, filter: "blur(0px)", y: 0 }
            }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-sm md:text-base text-white font-serif italic"
          >
            {line}
          </motion.p>
        ))}
      </motion.div>

    </div>
  );
}
