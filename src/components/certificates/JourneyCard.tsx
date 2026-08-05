"use client";

import { motion } from "framer-motion";
import { CertificateItem } from "./CertificateData";
import { ArrowRight, CheckCircle2, ShieldCheck, Clock, Calendar, Sparkles, Award } from "lucide-react";
import * as LucideIcons from "lucide-react";

interface JourneyCardProps {
  certificate: CertificateItem;
  onClick: () => void;
  onHoverStateChange?: (isHovered: boolean) => void;
}

export default function JourneyCard({ certificate, onClick, onHoverStateChange }: JourneyCardProps) {
  const IconComponent = (LucideIcons as any)[certificate.logoIcon] || LucideIcons.FileText;
  const isInternship = certificate.categoryType === "internship";

  return (
    <motion.div
      onClick={onClick}
      onMouseEnter={() => onHoverStateChange?.(true)}
      onMouseLeave={() => onHoverStateChange?.(false)}
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`
        group relative flex flex-col justify-between overflow-hidden cursor-pointer
        bg-white/[0.02] backdrop-blur-2xl border rounded-3xl p-6 md:p-8
        shadow-[0_8px_32px_rgba(0,0,0,0.25)] transition-all duration-500
        ${isInternship 
          ? "border-cyan-500/20 hover:border-cyan-400/50 hover:bg-cyan-500/[0.03] hover:shadow-[0_10px_40px_rgba(6,182,212,0.15)]" 
          : "border-purple-500/20 hover:border-purple-400/50 hover:bg-purple-500/[0.03] hover:shadow-[0_10px_40px_rgba(168,85,247,0.15)]"
        }
      `}
    >
      {/* Dynamic Background Glow */}
      <div 
        className={`absolute -bottom-24 -right-24 w-72 h-72 rounded-full blur-[90px] pointer-events-none transition-opacity duration-500 opacity-20 group-hover:opacity-40 ${
          isInternship ? "bg-cyan-500" : "bg-purple-500"
        }`}
      />

      {/* Top Header Row */}
      <div className="relative z-10">
        <div className="flex items-center justify-between gap-3 mb-4">
          
          {/* Category Pill */}
          <span 
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border backdrop-blur-md ${
              isInternship
                ? "border-cyan-500/30 bg-cyan-500/10 text-cyan-400"
                : "border-purple-500/30 bg-purple-500/10 text-purple-400"
            }`}
          >
            {isInternship ? <Award className="w-3 h-3" /> : <Sparkles className="w-3 h-3" />}
            {certificate.category}
          </span>

          {/* Issued Date & Duration */}
          <div className="flex items-center gap-2 text-white/40 text-xs font-mono">
            {certificate.duration && (
              <span className="flex items-center gap-1 text-[11px] bg-white/5 px-2 py-0.5 rounded border border-white/5">
                <Clock className="w-3 h-3 text-white/50" />
                {certificate.duration}
              </span>
            )}
            <span className="flex items-center gap-1 text-[11px]">
              <Calendar className="w-3 h-3 text-white/40" />
              {certificate.issuedDate}
            </span>
          </div>

        </div>

        {/* Organization / Provider */}
        <div className="flex items-center gap-2.5 text-white/70 mb-3">
          <div className={`w-7 h-7 rounded-lg border flex items-center justify-center bg-white/5 ${
            isInternship ? "border-cyan-500/20 text-cyan-400" : "border-purple-500/20 text-purple-400"
          }`}>
            <IconComponent className="w-3.5 h-3.5" />
          </div>
          <span className="text-xs font-semibold tracking-wide text-white/80">{certificate.organization}</span>
        </div>

        {/* Card Title */}
        <h3 className={`text-xl md:text-2xl font-bold text-white tracking-tight leading-snug mb-3 transition-colors duration-300 ${
          isInternship ? "group-hover:text-cyan-300" : "group-hover:text-purple-300"
        }`}>
          {certificate.title}
        </h3>

        {/* Short Summary */}
        <p className="text-white/60 text-xs font-light leading-relaxed mb-4 line-clamp-2">
          {certificate.summary}
        </p>

        {/* Key Highlights / Contributions Preview */}
        {certificate.highlights && certificate.highlights.length > 0 && (
          <div className="mb-4 space-y-1.5 border-l-2 border-white/10 pl-3">
            {certificate.highlights.slice(0, 2).map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-[11px] text-white/70">
                <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${isInternship ? "bg-cyan-400" : "bg-purple-400"}`} />
                <span className="truncate">{item}</span>
              </div>
            ))}
          </div>
        )}

        {/* Skills Chips */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {certificate.skills.slice(0, 4).map((skill, i) => (
            <span 
              key={i} 
              className="px-2.5 py-0.5 rounded-md text-[10px] font-medium bg-white/[0.04] text-white/70 border border-white/10"
            >
              {skill}
            </span>
          ))}
          {certificate.skills.length > 4 && (
            <span className="px-2 py-0.5 rounded-md text-[10px] text-white/40 font-mono">
              +{certificate.skills.length - 4}
            </span>
          )}
        </div>
      </div>

      {/* Bottom Action Row */}
      <div className="relative z-10 flex items-center justify-between border-t border-white/10 pt-4 mt-auto">
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1 text-emerald-400 text-[10px] font-semibold uppercase tracking-widest bg-emerald-400/10 px-2.5 py-0.5 rounded-full border border-emerald-400/20">
            <CheckCircle2 className="w-3 h-3" />
            Completed
          </span>

          {certificate.credentialId && (
            <span className="hidden sm:inline-flex text-[10px] font-mono text-white/40 bg-white/5 px-2 py-0.5 rounded border border-white/5">
              ID: {certificate.credentialId}
            </span>
          )}
        </div>

        <div className={`flex items-center gap-1 text-xs font-semibold transition-colors duration-300 ${
          isInternship ? "text-cyan-400/90 group-hover:text-cyan-300" : "text-purple-400/90 group-hover:text-purple-300"
        }`}>
          <span>View Details</span>
          <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </div>
    </motion.div>
  );
}
