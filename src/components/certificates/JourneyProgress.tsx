"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award } from "lucide-react";

export default function JourneyProgress() {
  const steps = [
    { label: "Industry Experience", subtitle: "Real-world Internships", icon: Briefcase, color: "text-cyan-400 border-cyan-500/40 bg-cyan-500/10" },
    { label: "Continuous Learning", subtitle: "Course Certifications", icon: GraduationCap, color: "text-purple-400 border-purple-500/40 bg-purple-500/10" },
    { label: "Validated Competencies", subtitle: "Engineering Excellence", icon: Award, color: "text-emerald-400 border-emerald-500/40 bg-emerald-500/10" },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-6 mb-12">
      <div className="relative flex items-center justify-between">
        
        {/* Animated Connecting Line */}
        <div className="absolute top-1/2 left-8 right-8 -translate-y-1/2 h-0.5 bg-white/10 z-0">
          <motion.div
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500"
          />
        </div>

        {/* Milestone Nodes */}
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="relative z-10 flex flex-col items-center group cursor-default"
            >
              <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center backdrop-blur-xl shadow-lg transition-transform duration-300 group-hover:scale-110 ${step.color}`}>
                <Icon className="w-4 h-4" />
              </div>
              <div className="text-center mt-2">
                <span className="text-[11px] font-bold text-white tracking-wide block">{step.label}</span>
                <span className="text-[9px] text-white/40 font-mono block hidden sm:block">{step.subtitle}</span>
              </div>
            </motion.div>
          );
        })}

      </div>
    </div>
  );
}
