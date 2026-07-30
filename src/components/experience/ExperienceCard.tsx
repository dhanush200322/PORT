"use client";

import { motion } from "framer-motion";
import { ExperienceStage } from "./ExperienceData";

interface ExperienceCardProps {
  data: ExperienceStage;
}

export default function ExperienceCard({ data }: ExperienceCardProps) {
  
  const getCardSizeClasses = (size: string) => {
    switch (size) {
      case "small":
        return "w-[300px] md:w-[350px] min-h-[300px]";
      case "medium":
        return "w-[350px] md:w-[450px] min-h-[350px]";
      case "large":
        return "w-[400px] md:w-[550px] min-h-[400px]";
      case "hero":
        return "w-[450px] md:w-[650px] min-h-[450px]";
      default:
        return "w-[350px] md:w-[450px] min-h-[350px]";
    }
  };

  const getCardPadding = (size: string) => {
    switch (size) {
      case "small": return "p-6";
      case "medium": return "p-8";
      case "large": return "p-8 md:p-10";
      case "hero": return "p-8 md:p-12";
      default: return "p-8";
    }
  };

  return (
    <motion.div
      className={`
        relative flex flex-col justify-between 
        bg-white/[0.02] backdrop-blur-xl border border-white/10 
        rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] 
        transition-all duration-700 ease-out hover:border-white/20 hover:bg-white/[0.04]
        shrink-0
        ${getCardSizeClasses(data.cardSize)}
        ${getCardPadding(data.cardSize)}
      `}
    >
      {/* Subtle top inner highlight */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50" />
      
      <div>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-3xl md:text-4xl">{data.icon}</span>
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-tight">
              {data.role}
            </h3>
            <p className="text-primary font-medium text-sm mt-1">{data.company}</p>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-3">
            {data.duration}
          </p>
          
          {data.caption ? (
            <p className="text-white/70 font-light leading-relaxed">{data.caption}</p>
          ) : (
            <ul className="space-y-3">
              {data.responsibilities.map((resp, i) => (
                <li key={i} className="flex items-start gap-3 text-white/70 font-light text-sm md:text-base leading-relaxed">
                  <span className="text-primary mt-1.5 opacity-80 text-[10px]">●</span>
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-white/5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30 mb-4">
          Core Technologies
        </p>
        <div className="flex flex-wrap gap-2">
          {data.technologies.map((tech, i) => (
            <span 
              key={i} 
              className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/5 text-white/80 border border-white/5 backdrop-blur-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
