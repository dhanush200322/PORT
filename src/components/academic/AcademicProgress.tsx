"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface AcademicProgressProps {
  score: number; // e.g., 70
}

export default function AcademicProgress({ score }: AcademicProgressProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const radius = 24;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <div ref={ref} className="relative flex items-center justify-center w-16 h-16">
      {/* Background Ring */}
      <svg className="absolute inset-0 w-full h-full transform -rotate-90">
        <circle
          cx="32"
          cy="32"
          r={radius}
          stroke="rgba(255, 255, 255, 0.1)"
          strokeWidth="2"
          fill="none"
        />
        {/* Animated Progress Ring */}
        <motion.circle
          cx="32"
          cy="32"
          r={radius}
          stroke="var(--primary)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: isInView ? strokeDashoffset : circumference }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
          style={{
            strokeDasharray: circumference,
          }}
        />
      </svg>
      {/* Score Text */}
      <span className="text-white font-bold text-sm">
        {score}%
      </span>
    </div>
  );
}
