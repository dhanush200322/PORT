"use client";

import { motion, useMotionValue, useSpring, useTransform, Variants } from "framer-motion";
import { Project } from "./ProjectData";
import { ArrowRight, Play } from "lucide-react";
import { useRef, useState } from "react";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
  onOpenCaseStudy: (project: Project) => void;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.96, filter: "blur(10px)" },
  visible: { 
    opacity: 1, 
    scale: 1, 
    filter: "blur(0px)",
    transition: { 
      duration: 0.8, 
      ease: [0.16, 1, 0.3, 1]
    } 
  }
};

export default function ProjectCard({ project, onOpenCaseStudy }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // 3D Mouse Tilt Effect (Max 2 degrees as requested)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["2deg", "-2deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-2deg", "2deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current && project.videoPreview) {
      videoRef.current.play().catch(() => {}); // Catch play promise errors
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
    if (videoRef.current && project.videoPreview) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => onOpenCaseStudy(project)}
      className={`group relative flex flex-col h-[400px] md:h-[450px] rounded-3xl overflow-hidden cursor-pointer border border-white/5 bg-white/[0.02] transition-all duration-500 ease-out hover:border-white/10 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] ${project.colSpanClasses}`}
    >
      
      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        {/* Placeholder Gradient Fallback */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
        
        {/* Image Fallback */}
        {project.imageFallback && (
          <Image
            src={project.imageFallback}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={`object-cover transition-all duration-700 ease-out ${isHovered && !project.videoPreview ? "opacity-100 scale-[1.03]" : "opacity-50 scale-100"}`}
          />
        )}
        
        {/* Video Player */}
        {project.videoPreview && (
          <video
            ref={videoRef}
            src={project.videoPreview}
            muted
            loop
            playsInline
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${isHovered ? "opacity-100 scale-[1.03]" : "opacity-0 scale-100"}`}
          />
        )}
        
        {/* Very Dark Overlay base */}
        <div className="absolute inset-0 bg-black/50 transition-opacity duration-500 group-hover:bg-black/40" />
        {/* Gradient Overlay for Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90" />
      </div>

      {/* Top Status Badge */}
      <div className="absolute top-6 right-6 z-20">
        <span className="px-3 py-1 text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-white/90 bg-black/40 backdrop-blur-md rounded-full border border-white/10">
          {project.status}
        </span>
      </div>

      {/* Content Container (Slides up on hover) */}
      <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 md:p-8" style={{ transform: "translateZ(20px)" }}>
        
        <div className="transform transition-transform duration-500 ease-[0.16,1,0.3,1] translate-y-8 group-hover:translate-y-0">
          
          {/* Context Line */}
          <p className="text-primary text-xs md:text-sm font-medium tracking-wide mb-2 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
            {project.meta.year} • {project.meta.role} • {project.meta.context}
          </p>

          {/* Title */}
          <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-3">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-white/60 text-sm md:text-base font-light line-clamp-2 mb-6 group-hover:text-white/80 transition-colors duration-300">
            {project.shortDescription}
          </p>

          {/* Tech Chips */}
          <div className="flex flex-wrap gap-2 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
            {project.technologies.slice(0, 4).map((tech, idx) => (
              <span key={idx} className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-white/10 text-white/80 border border-white/5 backdrop-blur-sm">
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-white/5 text-white/50 border border-white/5 backdrop-blur-sm">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          {/* Call to Action Button */}
          <div className="flex items-center gap-2 text-white font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
            View Details <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>

        </div>
      </div>
      
    </motion.div>
  );
}
