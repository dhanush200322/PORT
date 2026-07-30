"use client";

import { motion, Variants } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";

const CORE_VALUES = [
  "Innovation",
  "Problem Solving",
  "Clean Code",
  "Scalability",
  "Leadership",
  "Continuous Learning",
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } 
  },
};

// Component for highlighting text with a subtle, temporary glow
const Highlight = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.strong 
      initial={{ color: "#94A3B8", textShadow: "0px 0px 0px rgba(79,140,255,0)" }}
      whileInView={{ 
        color: "#4F8CFF",
        textShadow: ["0px 0px 0px rgba(79,140,255,0)", "0px 0px 12px rgba(79,140,255,0.6)", "0px 0px 0px rgba(79,140,255,0)"]
      }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
      className="font-medium inline-block"
    >
      {children}
    </motion.strong>
  );
};

export default function AboutContent() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="flex flex-col lg:flex-row gap-16 mt-16"
    >
      {/* Left Column: Introduction */}
      <div className="flex-1 space-y-8">
        <motion.div variants={itemVariants} className="space-y-2">
          <h2 className="text-[var(--text-h2)] font-bold tracking-tighter text-white">
            Hi, I'm Dhanush AV.
          </h2>
          <p className="text-[var(--text-body)] font-medium text-primary">
            Full Stack Developer & AI Automation Engineer
          </p>
        </motion.div>

        <div className="space-y-6 text-gray-custom leading-relaxed text-base md:text-lg font-light">
          <motion.p variants={itemVariants}>
            I am a passionate software developer dedicated to building <Highlight>scalable web applications</Highlight> and <Highlight>AI automation</Highlight> systems. My background blends deep technical expertise with a strong focus on business-centric solutions that drive real value.
          </motion.p>
          <motion.p variants={itemVariants}>
            With an unwavering commitment to <Highlight>clean architecture</Highlight> and <Highlight>continuous learning</Highlight>, I thrive on delivering reliable, high-performance digital products that seamlessly bridge the gap between complex engineering and elegant user experiences.
          </motion.p>
        </div>
      </div>

      {/* Right Column: Core Values & CTA */}
      <div className="flex-1 flex flex-col justify-between">
        <motion.div variants={itemVariants} className="space-y-6">
          <h3 className="text-sm font-medium uppercase tracking-[0.2em] text-gray-custom">
            Core Values
          </h3>
          <div className="flex flex-wrap gap-3">
            {CORE_VALUES.map((value) => (
              <span
                key={value}
                className="px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all cursor-default"
              >
                {value}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-12 lg:mt-0 p-8 rounded-3xl bg-gradient-to-br from-white/[0.05] to-transparent border border-white/5 backdrop-blur-sm">
          <h3 className="text-xl font-medium text-white mb-6">
            Let's build something meaningful together.
          </h3>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/resume.pdf"
              download="Dhanush_AV_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium bg-gradient-to-r from-[#4F8CFF] to-[#6A5CFF] text-white hover:scale-[1.03] transition-all shadow-[0_4px_14px_0_rgba(79,140,255,0.39)] hover:shadow-[0_6px_20px_rgba(79,140,255,0.23)]"
            >
              Download Resume <Download className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all"
            >
              Let's Connect <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
