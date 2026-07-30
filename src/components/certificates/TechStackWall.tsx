"use client";

import { motion } from "framer-motion";

const TECH_STACK = [
  "React", "Next.js", "TypeScript", "Node.js", "Express.js", 
  "MongoDB", "PostgreSQL", "Docker", "Redis", "Supabase", 
  "n8n", "GitHub", "Vercel"
];

export default function TechStackWall() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-32 relative z-10 border-t border-white/5 bg-gradient-to-b from-transparent to-black/20">
      
      <div className="text-center mb-16">
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary mb-4 block">
          Technical Arsenal
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
          Tools of the Trade
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-4 md:gap-6">
        {TECH_STACK.map((tech, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="px-6 py-3 md:px-8 md:py-4 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:border-primary/50 hover:bg-white/[0.05] transition-colors duration-300 cursor-default"
          >
            <span className="text-white/80 font-medium md:text-lg tracking-wide">
              {tech}
            </span>
          </motion.div>
        ))}
      </div>

    </div>
  );
}
