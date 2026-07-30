"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useSpring } from "framer-motion";

interface StatItemProps {
  finalValue: number;
  label: string;
  suffix?: string;
}

function StatItem({ finalValue, label, suffix = "" }: StatItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  // Start at 0, spring to finalValue when in view
  const springValue = useSpring(0, { stiffness: 50, damping: 20 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      springValue.set(finalValue);
    }
  }, [isInView, finalValue, springValue]);

  useEffect(() => {
    return springValue.onChange((latest) => {
      setDisplayValue(Math.floor(latest));
    });
  }, [springValue]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center p-6 text-center">
      <div className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight flex items-baseline">
        {displayValue}
        <span className="text-primary ml-1">{suffix}</span>
      </div>
      <div className="text-sm font-medium uppercase tracking-[0.15em] text-white/50 max-w-[150px] leading-relaxed">
        {label}
      </div>
    </div>
  );
}

export default function AchievementStats() {
  return (
    <div className="w-full max-w-5xl mx-auto px-6 py-20 relative z-20">
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent blur-3xl opacity-50" />

      <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
        
        <StatItem finalValue={6} suffix="+" label="Professional Certifications" />
        <StatItem finalValue={8} suffix="+" label="Projects Delivered" />
        <StatItem finalValue={2} suffix="+" label="Professional Experiences" />
        <StatItem finalValue={80} suffix="%" label="Engineering Score" />
        
      </div>
    </div>
  );
}
