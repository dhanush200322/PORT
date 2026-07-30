"use client";

import { motion, Variants } from "framer-motion";
import { Code2, Bot, Cloud, Database, Rocket, Smartphone } from "lucide-react";

const HIGHLIGHTS = [
  { icon: Code2, title: "Full Stack Development" },
  { icon: Bot, title: "AI Automation" },
  { icon: Cloud, title: "Cloud Infrastructure" },
  { icon: Database, title: "Database Design" },
  { icon: Rocket, title: "CI/CD Deployment" },
  { icon: Smartphone, title: "Responsive UI" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
  },
};

export default function AboutHighlights() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16"
    >
      {HIGHLIGHTS.map((highlight, index) => (
        <motion.div
          key={index}
          variants={cardVariants}
          className="group relative flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.08] hover:border-white/20 hover:shadow-[0_8px_30px_rgba(79,140,255,0.08)] cursor-default"
        >
          {/* Subtle icon container with slight rotation */}
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-black/40 border border-white/10 text-primary group-hover:rotate-6 group-hover:scale-105 transition-transform duration-500 ease-out">
            <highlight.icon className="w-5 h-5" />
          </div>
          
          <span className="text-base font-medium text-white/90 group-hover:text-white transition-colors duration-500">
            {highlight.title}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
}
