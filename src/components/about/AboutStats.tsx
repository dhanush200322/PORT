"use client";

import { motion, Variants, useSpring, useTransform, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const STATS = [
  { value: 10, suffix: "", label: "Projects Delivered" },
  { value: 69, suffix: "", label: "Technologies Mastered" },
  { value: 1, suffix: "+", label: "Years Experience" },
  { value: 10, suffix: "+", label: "Happy Clients" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

// Animated Counter Component
const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const spring = useSpring(0, {
    stiffness: 50,
    damping: 20,
    mass: 1,
  });

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  const displayValue = useTransform(spring, (current) => Math.round(current));

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold tracking-tighter text-white flex items-center justify-center">
      <motion.span>{displayValue}</motion.span>
      {suffix && <span>{suffix}</span>}
    </span>
  );
};

export default function AboutStats() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mt-16 pt-16 border-t border-white/5"
    >
      {STATS.map((stat, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="flex flex-col items-center justify-center text-center space-y-2"
        >
          <AnimatedCounter value={stat.value} suffix={stat.suffix} />
          <span className="text-sm md:text-base font-medium text-gray-custom">
            {stat.label}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
}
