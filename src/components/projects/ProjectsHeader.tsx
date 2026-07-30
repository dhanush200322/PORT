"use client";

import { motion, Variants } from "framer-motion";

const HEADING_TEXT = "Projects That Deliver Real Business Value";

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

export default function ProjectsHeader() {
  const words = HEADING_TEXT.split(" ");

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="flex flex-col items-center text-center mb-16 md:mb-24 relative z-10"
    >
      <motion.span 
        variants={labelVariants}
        className="text-sm font-medium uppercase tracking-[0.2em] text-primary mb-6 block"
      >
        Featured Projects
      </motion.span>
      
      <h2 className="flex flex-wrap justify-center gap-x-3 gap-y-2 text-[var(--text-h1)] font-bold tracking-tighter text-white mb-8 max-w-4xl">
        {words.map((word, i) => (
          <motion.span key={i} variants={wordVariants} className="inline-block">
            {word}
          </motion.span>
        ))}
      </h2>

      <motion.p 
        variants={subtitleVariants}
        className="max-w-3xl text-[var(--text-body)] font-light text-gray-custom leading-relaxed"
      >
        A curated collection of AI platforms, enterprise applications, business automation systems, SaaS products, and modern web applications built with scalable technologies.
      </motion.p>
    </motion.div>
  );
}
