"use client";

import { motion } from "framer-motion";
import { CertificateItem } from "./CertificateData";
import { Award, ArrowRight, CheckCircle2, ShieldCheck, Clock } from "lucide-react";
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
        ${certificate.isFeatured ? 'h-full md:col-span-2 md:row-span-2 p-8 md:p-12' : 'h-full p-8 md:p-10'}
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
      <div className="relative z-10 h-full flex flex-col justify-between">
        
        {/* Top Header Section */}
        <div>
          <div className="flex justify-between items-start mb-6">
            {certificate.isFeatured ? (
              <div className="flex flex-col gap-2">
                 <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 text-[11px] font-bold uppercase tracking-widest">
                   <Award className="w-3.5 h-3.5" />
                   {certificate.category}
                 </span>
                 <div className="flex items-center gap-2 text-white/70 mt-2">
                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                      <IconComponent className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] uppercase tracking-widest text-white/40 font-semibold">Issued By</span>
                      <span className="text-xs font-semibold text-white/90">{certificate.organization}</span>
                    </div>
                 </div>
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                <span className="inline-block self-start px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-[10px] font-semibold uppercase tracking-widest">
                  {certificate.category}
                </span>
                <div className="flex items-center gap-2 text-white/50">
                    <div className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                      <IconComponent className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] uppercase tracking-widest text-white/40 font-semibold">Issued By</span>
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
          <h3 className={`${certificate.isFeatured ? 'text-2xl md:text-3xl lg:text-4xl' : 'text-xl md:text-2xl'} font-bold text-white tracking-tight leading-[1.2] mb-4 group-hover:text-primary transition-colors duration-500`}>
            {certificate.title}
          </h3>

          {/* Short Description */}
          <p className="text-white/60 text-xs md:text-sm font-light leading-relaxed mb-6 line-clamp-3">
            {certificate.summary}
          </p>

          {/* Key Highlights (if available) */}
          {certificate.highlights && certificate.highlights.length > 0 && (
            <div className="mb-6 space-y-1.5 border-l-2 border-primary/30 pl-3">
              {certificate.highlights.slice(0, 3).map((highlight, idx) => (
                <div key={idx} className="flex items-center gap-2 text-[11px] text-white/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/80 flex-shrink-0" />
                  <span className="truncate">{highlight}</span>
                </div>
              ))}
              {certificate.highlights.length > 3 && (
                <div className="text-[10px] text-primary/80 font-medium pl-3">
                  +{certificate.highlights.length - 3} more highlights
                </div>
              )}
            </div>
          )}

          {/* Skills Area */}
          <div className="flex flex-wrap gap-1.5 mb-6">
             {certificate.skills.map((skill, i) => (
               <span 
                 key={i} 
                 className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-white/[0.04] text-white/70 border border-white/10 backdrop-blur-md"
               >
                 {skill}
               </span>
             ))}
          </div>
        </div>

        {/* Bottom Action Row */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-5 mt-auto">
          
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1.5 text-emerald-400 text-[10px] font-semibold uppercase tracking-widest bg-emerald-400/10 px-2.5 py-1 rounded-full border border-emerald-400/20">
              <CheckCircle2 className="w-3 h-3" />
              Completed
            </span>

            {/* Verification Button / Placeholder */}
            {certificate.verifyUrl ? (
              <a
                href={certificate.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1 text-primary text-[10px] font-semibold uppercase tracking-widest bg-primary/10 hover:bg-primary/20 px-2.5 py-1 rounded-full border border-primary/30 transition-colors"
              >
                <ShieldCheck className="w-3 h-3" />
                Verify
              </a>
            ) : (
              <div 
                className="relative group/tooltip flex items-center gap-1 text-white/40 text-[10px] font-semibold uppercase tracking-widest bg-white/5 px-2.5 py-1 rounded-full border border-white/10 cursor-help"
                onClick={(e) => e.stopPropagation()}
              >
                <Clock className="w-3 h-3" />
                Verification Coming Soon
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover/tooltip:block w-48 p-2 bg-black/90 text-white text-[10px] rounded-lg shadow-xl border border-white/10 text-center pointer-events-none z-30">
                  Official verification will be available when provided by {certificate.organization}.
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center gap-1.5 text-white/70 text-xs font-semibold group-hover:text-primary transition-colors duration-300">
            View Certificate
            <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-300" />
          </div>

        </div>

      </div>
    </motion.div>
  );
}

