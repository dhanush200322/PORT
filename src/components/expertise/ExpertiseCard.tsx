"use client";

import { motion, useMotionValue, useSpring, useTransform, Variants } from "framer-motion";
import { ExpertiseCategory } from "./ExpertiseData";
import TechnologyChip from "./TechnologyChip";

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, filter: "blur(10px)" },
  visible: { 
    opacity: 1, 
    scale: 1, 
    filter: "blur(0px)",
    transition: { 
      duration: 0.8, 
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.05, // Tiny stagger for chips
      delayChildren: 0.2
    } 
  }
};

export default function ExpertiseCard({ category }: { category: ExpertiseCategory }) {
  // 3D Mouse Tilt Effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  // Rotate between -2 and 2 degrees
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["2deg", "-2deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-2deg", "2deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const isLarge = category.size === "large";

  return (
    <motion.div
      variants={cardVariants}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative flex flex-col h-full p-8 rounded-3xl bg-gradient-to-br from-white/[0.04] to-transparent border border-white/5 backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-1.5 hover:bg-white/[0.06] hover:border-white/10 hover:shadow-[0_12px_40px_rgba(79,140,255,0.12)] ${isLarge ? "md:col-span-2 lg:col-span-2" : "col-span-1"}`}
    >
      <div className="flex flex-col h-full" style={{ transform: "translateZ(30px)" }}>
        
        {/* Header: Icon & Title */}
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 text-primary group-hover:scale-105 transition-transform duration-300 shadow-inner">
            <category.icon className="w-6 h-6 drop-shadow-md" />
          </div>
          <h3 className="text-xl font-semibold text-white tracking-tight">
            {category.title}
          </h3>
        </div>

        {/* Description Story */}
        <p className="text-sm md:text-base text-gray-custom leading-relaxed font-light mb-8 flex-grow">
          {category.description}
        </p>

        {/* Technologies Grid/Wrap */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {category.technologies.slice(0, 5).map((tech, idx) => (
            <TechnologyChip key={idx} tech={tech} />
          ))}
          {category.technologies.length > 5 && (
            <div className="flex items-center justify-center px-3 py-1.5 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-white/50 cursor-default">
              +{category.technologies.length - 5} More
            </div>
          )}
        </div>

      </div>
    </motion.div>
  );
}
