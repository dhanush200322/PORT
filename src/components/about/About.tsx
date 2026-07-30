"use client";

import { motion, Variants } from "framer-motion";
import AboutContent from "./AboutContent";
import AboutHighlights from "./AboutHighlights";
import AboutStats from "./AboutStats";
import AboutTimeline from "./AboutTimeline";
import { ArrowDown } from "lucide-react";

const HEADING_TEXT = "Building Modern Software Solutions";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.16, 1, 0.3, 1],
      when: "beforeChildren",
      staggerChildren: 0.2
    } 
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

const dividerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.5 }
  }
};

const dividerLineVariants: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: { 
    scaleX: 1, 
    opacity: 1, 
    transition: { duration: 1, ease: "easeInOut" } 
  }
};

const dividerTextVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

export default function About() {
  const words = HEADING_TEXT.split(" ");

  return (
    <section id="about" className="relative w-full min-h-screen bg-background py-24 md:py-32 overflow-hidden">
      
      {/* Subtle Background Gradient Motion */}
      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none opacity-30"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundSize: "200% 200%",
          backgroundImage: "radial-gradient(circle at center, rgba(79,140,255,0.03) 0%, transparent 50%)"
        }}
      />

      <motion.div 
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12"
      >
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.span 
            variants={wordVariants}
            className="text-sm font-medium uppercase tracking-[0.2em] text-primary mb-6 block"
          >
            About Me
          </motion.span>
          
          <h2 className="flex flex-wrap justify-center gap-x-3 gap-y-2 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white">
            {words.map((word, i) => (
              <motion.span key={i} variants={wordVariants} className="inline-block">
                {word}
              </motion.span>
            ))}
          </h2>
        </div>

        {/* Section Content */}
        <AboutContent />
        <AboutHighlights />
        <AboutStats />
        <AboutTimeline />

        {/* Cinematic Section Transition Divider */}
        <motion.div 
          variants={dividerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-32 flex flex-col items-center opacity-80 hover:opacity-100 transition-opacity duration-500"
        >
          <motion.div variants={dividerLineVariants} className="w-full max-w-lg h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8 origin-center" />
          
          <motion.span variants={dividerTextVariants} className="text-xs font-medium uppercase tracking-[0.2em] text-gray-custom mb-2">
            Next
          </motion.span>
          
          <motion.span variants={dividerTextVariants} className="text-lg font-medium tracking-wide text-white mb-6">
            Expertise
          </motion.span>
          
          <motion.div
            variants={dividerTextVariants}
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          >
            <ArrowDown className="w-5 h-5 text-gray-custom" />
          </motion.div>
          
          <motion.div variants={dividerLineVariants} className="w-full max-w-lg h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent mt-8 origin-center" />
        </motion.div>
        
      </motion.div>
    </section>
  );
}
