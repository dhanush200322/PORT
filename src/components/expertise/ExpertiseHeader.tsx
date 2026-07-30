"use client";

import { motion, Variants } from "framer-motion";

const HEADING_TEXT = "Technologies I Build With";

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

export default function ExpertiseHeader() {
  const words = HEADING_TEXT.split(" ");

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="flex flex-col items-center text-center mb-24 md:mb-28 relative z-10"
    >
      <motion.span 
        variants={labelVariants}
        className="text-sm font-medium uppercase tracking-[0.2em] text-primary mb-6 block"
      >
        Expertise
      </motion.span>
      
      <h2 className="flex flex-wrap justify-center gap-x-3 gap-y-2 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white mb-8">
        {words.map((word, i) => (
          <motion.span key={i} variants={wordVariants} className="inline-block">
            {word}
          </motion.span>
        ))}
      </h2>

      <motion.p 
        variants={subtitleVariants}
        className="max-w-2xl text-lg md:text-xl font-light text-gray-custom leading-relaxed"
      >
        Building scalable web applications, AI-powered solutions, cloud deployments, and business automation using modern technologies.
      </motion.p>
    </motion.div>
  );
}
