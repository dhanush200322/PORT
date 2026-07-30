"use client";

import { motion } from "framer-motion";
import { CertificateItem } from "./CertificateData";
import { Award, ArrowRight, CheckCircle2 } from "lucide-react";
import * as LucideIcons from "lucide-react";

interface CertificateCardProps {
  certificate: CertificateItem;
  onClick: () => void;
}

export default function CertificateCard({ certificate, onClick }: CertificateCardProps) {
  const IconComponent = (LucideIcons as any)[certificate.logoIcon] || LucideIcons.FileText;

  return (
    <motion.div
      onClick={onClick}
      whileHover={{ y: -6 }}
      className={`
        group relative flex flex-col justify-between overflow-hidden cursor-pointer
        bg-white/[0.02] backdrop-blur-2xl border border-white/10 
        rounded-[2rem] shadow-[0_8px_32px_rgba(0,0,0,0.2)] 
        transition-all duration-700 ease-out hover:border-white/30 hover:bg-white/[0.03]
        ${certificate.isFeatured ? 'h-full md:col-span-2 md:row-span-2 p-8 md:p-14' : 'h-full p-8 md:p-10'}
      `}
    >
      {/* Abstract Grid / Geometric Pattern Background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-700 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />
      
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none z-0 group-hover:bg-primary/10 transition-colors duration-700" />

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col">
        
        {/* Top Header Section */}
        <div className="flex justify-between items-start mb-12">
          {certificate.isFeatured ? (
            <div className="flex flex-col gap-3">
               <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-500 text-xs font-bold uppercase tracking-widest">
                 <Award className="w-3.5 h-3.5" />
                 Verified Professional Experience
               </span>
               <div className="text-yellow-500/50 text-xs tracking-[0.2em] ml-1">★★★★★</div>
               <div className="mt-4 flex items-center gap-3 text-white/50">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-widest">Issued By</span>
                    <span className="text-sm font-semibold text-white/80">{certificate.organization}</span>
                  </div>
               </div>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              <span className="inline-block self-start px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-[10px] font-semibold uppercase tracking-widest">
                {certificate.category}
              </span>
              <div className="flex items-center gap-2 text-white/50">
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] uppercase tracking-widest">Issued By</span>
                    <span className="text-xs font-semibold text-white/80">{certificate.organization}</span>
                  </div>
              </div>
            </div>
          )}
          
          <div className="text-white/40 text-xs font-medium uppercase tracking-[0.2em]">
            {certificate.issuedDate}
          </div>
        </div>

        {/* Main Title */}
        <div className="mt-auto">
          <h3 className={`${certificate.isFeatured ? 'text-[var(--text-h1)]' : 'text-[var(--text-h3)]'} font-bold text-white tracking-tight leading-[1.1] mb-8 group-hover:text-primary transition-colors duration-500`}>
            {certificate.title}
          </h3>

          {/* Skills Area */}
          <div className="flex flex-wrap gap-2 mb-8">
             {certificate.skills.map((skill, i) => (
               <span 
                 key={i} 
                 className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/[0.03] text-white/70 border border-white/10 backdrop-blur-md"
               >
                 {skill}
               </span>
             ))}
          </div>

          {/* Bottom Action Row */}
          <div className="flex items-center justify-between border-t border-white/10 pt-6">
            <div className="flex items-center gap-2 text-emerald-400/80 text-xs font-semibold uppercase tracking-widest bg-emerald-400/10 px-3 py-1 rounded-full border border-emerald-400/20">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Completed
            </div>

            <div className="flex items-center gap-2 text-white/50 text-sm font-medium group-hover:text-white transition-colors duration-300">
              View Certificate
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
