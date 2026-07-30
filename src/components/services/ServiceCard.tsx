"use client";

import { motion } from "framer-motion";
import { ServiceItem } from "./ServicesData";
import { ArrowRight } from "lucide-react";
import * as LucideIcons from "lucide-react";

interface ServiceCardProps {
  service: ServiceItem;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const IconComponent = (LucideIcons as any)[service.icon] || LucideIcons.Code2;

  return (
    <motion.div
      whileHover={{ y: -6 }}
      className={`
        group relative flex flex-col overflow-hidden
        bg-white/[0.02] backdrop-blur-2xl border border-white/10 
        rounded-[2rem] shadow-[0_8px_32px_rgba(0,0,0,0.2)] 
        transition-all duration-700 ease-out hover:border-white/30 hover:bg-white/[0.03]
        p-8 md:p-12 h-full cursor-pointer
      `}
    >
      {/* Soft Illuminating Border on Hover */}
      <div className="absolute inset-0 rounded-[2rem] border-2 border-primary/0 group-hover:border-primary/20 transition-colors duration-700 pointer-events-none z-20" />
      
      {/* Background Abstract Illustration (Low Opacity Diagram) */}
      <div className="absolute top-12 right-0 bottom-0 w-full overflow-hidden pointer-events-none opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-700 flex flex-col justify-end p-8 z-0">
        <div className="flex flex-col gap-4 items-end text-[10px] font-mono tracking-[0.3em] uppercase text-white font-bold select-none">
          {service.illustration.map((step, idx) => (
            <div key={idx} className="flex flex-col items-end gap-4">
              <div className="px-4 py-2 border border-white/20 rounded-md bg-white/5 backdrop-blur-sm shadow-2xl">
                {step}
              </div>
              {idx < service.illustration.length - 1 && (
                <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent mr-10" />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 h-full flex flex-col">
        {/* Header: Number & Icon */}
        <div className="flex justify-between items-start mb-12">
           <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/70 group-hover:text-primary group-hover:border-primary/30 transition-colors duration-500 shadow-xl relative overflow-hidden">
             <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             <IconComponent className="w-6 h-6 md:w-7 md:h-7 relative z-10 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 ease-out" />
           </div>

           <div className="text-white/10 font-bold text-[var(--text-h2)] tracking-tighter select-none font-mono">
             {service.number}
           </div>
        </div>

        {/* Content */}
        <div className="mt-auto">
          <h3 className="text-[var(--text-h3)] font-bold text-white tracking-tight leading-[1.2] mb-4 group-hover:text-primary transition-colors duration-500">
            {service.title}
          </h3>
          <p className="text-white/50 text-sm md:text-base leading-relaxed mb-8 max-w-sm">
            {service.description}
          </p>

          {/* Tech Chips (Staggered hover animation) */}
          <div className="flex flex-wrap gap-2 mb-10">
            {service.technologies.map((tech, i) => (
              <div 
                key={i} 
                className="px-3 py-1.5 rounded-lg text-[10px] font-semibold tracking-widest uppercase bg-white/[0.03] text-white/60 border border-white/5 backdrop-blur-md transform transition-all duration-500 ease-out"
                style={{ 
                  transitionDelay: `${i * 30}ms`,
                }}
              >
                {tech}
              </div>
            ))}
          </div>

          {/* CTA Row */}
          <div className="flex items-center gap-3 text-white/50 text-xs md:text-sm font-semibold uppercase tracking-widest group-hover:text-white transition-colors duration-300">
            View Capabilities
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" />
          </div>
        </div>
      </div>
      
    </motion.div>
  );
}
