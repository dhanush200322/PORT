"use client";

import { motion } from "framer-motion";
import { AcademicChapter as ChapterType } from "./AcademicData";
import AcademicProgress from "./AcademicProgress";
import { useState } from "react";

interface AcademicChapterProps {
  chapter: ChapterType;
}

export default function AcademicChapter({ chapter }: AcademicChapterProps) {
  const [isHovered, setIsHovered] = useState(false);

  const getCardSizeClasses = (size: string) => {
    switch (size) {
      case "small":
        return "max-w-[450px]";
      case "medium":
        return "max-w-[600px]";
      case "hero":
        return "max-w-[800px]";
      default:
        return "max-w-[600px]";
    }
  };

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        relative w-full ${getCardSizeClasses(chapter.cardSize)}
        bg-white/[0.03] backdrop-blur-2xl border border-white/10 
        rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] 
        transition-all duration-700 ease-out hover:border-white/20 hover:bg-white/[0.05]
        p-8 md:p-10 lg:p-12 overflow-hidden group
      `}
    >
      {/* Background glow on hover */}
      <div 
        className={`absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity duration-700 pointer-events-none ${isHovered ? 'opacity-100' : ''}`} 
      />

      <div className="relative z-10">
        
        {/* Header section */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
          <div>
            <span className="inline-block px-3 py-1 mb-4 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest">
              {chapter.qualification}
            </span>
            <h3 className="text-[var(--text-h2)] font-bold text-white tracking-tight mb-2">
              {chapter.title}
            </h3>
            <p className="text-white/60 font-medium">{chapter.school}</p>
          </div>
          <div className="flex-shrink-0">
             <AcademicProgress score={chapter.score} />
          </div>
        </div>

        {/* Content Crossfade (Default vs Hover) */}
        <div className="relative min-h-[160px]">
          {/* Default State */}
          <div 
            className={`absolute inset-0 transition-all duration-500 ${isHovered ? 'opacity-0 translate-y-4 pointer-events-none' : 'opacity-100 translate-y-0'}`}
          >
            <p className="text-white/80 font-light leading-relaxed text-lg mb-8">
              {chapter.description}
            </p>
            
            {/* Knowledge Growth */}
            <div className="flex items-center gap-4">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-white/40">Knowledge Growth</span>
              <div className="flex gap-1.5">
                 {[...Array(8)].map((_, i) => (
                   <div 
                     key={i} 
                     className={`h-1.5 w-5 rounded-sm transition-all duration-500 ${
                       i < chapter.knowledgeGrowth ? 'bg-primary shadow-[0_0_10px_rgba(var(--primary),0.5)]' : 'bg-white/10'
                     }`} 
                   />
                 ))}
              </div>
            </div>
          </div>

          {/* Hover State (Interactive Details) */}
          <div 
            className={`absolute inset-0 transition-all duration-500 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40 mb-3">Skills Gained</p>
                <ul className="space-y-2">
                  {chapter.hoverState.skills.map((skill, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-white/80">
                      <span className="w-1 h-1 rounded-full bg-primary" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40 mb-3">Key Milestone</p>
                <p className="text-sm text-white/80 leading-relaxed mb-4 border-l-2 border-primary/50 pl-3 py-1">
                  {chapter.hoverState.milestone}
                </p>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40 mb-2">Primary Learning</p>
                <p className="text-sm text-primary font-medium">
                  {chapter.hoverState.learnings}
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
