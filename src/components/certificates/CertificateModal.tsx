"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useLenis } from "lenis/react";
import { motion, AnimatePresence } from "framer-motion";
import { CertificateItem } from "./CertificateData";
import { X, Download, FileText, CheckCircle2 } from "lucide-react";

interface CertificateModalProps {
  certificate: CertificateItem | null;
  onClose: () => void;
}

export default function CertificateModal({ certificate, onClose }: CertificateModalProps) {
  const lenis = useLenis();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  // Prevent background scrolling
  useEffect(() => {
    if (certificate) {
      document.body.style.overflow = 'hidden';
      lenis?.stop();
    } else {
      document.body.style.overflow = 'unset';
      lenis?.start();
    }
    return () => { 
      document.body.style.overflow = 'unset'; 
      lenis?.start();
    };
  }, [certificate, lenis]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {certificate && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
          
          {/* Blurred Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-2xl"
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            data-lenis-prevent
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-5xl max-h-[90dvh] overflow-y-auto bg-background/80 backdrop-blur-xl border border-white/10 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] pb-[env(safe-area-inset-bottom)] flex flex-col md:flex-row overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/50 hover:bg-white/10 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Column: Visual Preview (Placeholder for high-res image) */}
            <div className="w-full md:w-1/2 min-h-[300px] md:min-h-[500px] bg-white/[0.02] border-r border-white/10 flex items-center justify-center p-8 relative group">
               {/* Abstract Certificate Visual */}
               <div className="w-full max-w-sm aspect-[1.4/1] bg-gradient-to-br from-white/10 to-transparent border border-white/20 rounded-lg shadow-2xl p-6 flex flex-col items-center justify-center text-center transform group-hover:scale-[1.02] transition-transform duration-700">
                  <FileText className="w-16 h-16 text-white/20 mb-4" />
                  <div className="w-3/4 h-2 bg-white/10 rounded mb-2" />
                  <div className="w-1/2 h-2 bg-white/10 rounded mb-6" />
                  <div className="w-16 h-16 rounded-full border-4 border-primary/20 bg-primary/5 mt-auto" />
               </div>
               
               {/* Overlay helper text for user */}
               <div className="absolute bottom-6 text-center text-white/30 text-xs tracking-widest uppercase">
                  High-Resolution Preview
               </div>
            </div>

            {/* Right Column: Metadata & Action */}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col">
               
               <div className="mb-8">
                 <div className="flex flex-wrap items-center gap-3 mb-4">
                   <span className="inline-block px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-[10px] font-semibold uppercase tracking-widest">
                     {certificate.category}
                   </span>
                   <span className="flex items-center gap-1.5 text-emerald-400/80 text-[10px] font-semibold uppercase tracking-widest bg-emerald-400/10 px-3 py-1 rounded-full border border-emerald-400/20">
                     <CheckCircle2 className="w-3.5 h-3.5" />
                     Completed
                   </span>
                 </div>
                 <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-2">
                   {certificate.title}
                 </h2>
               </div>

               <div className="space-y-6 flex-1">
                 <div>
                   <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40 mb-1">Issued By</p>
                   <p className="text-white/90 font-medium">{certificate.organization}</p>
                 </div>
                 
                 <div>
                   <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40 mb-1">Issue Date</p>
                   <p className="text-white/90 font-medium">{certificate.issuedDate}</p>
                 </div>

                 <div>
                   <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40 mb-2">Skills Learned</p>
                   <div className="flex flex-wrap gap-2">
                     {certificate.skills.map((skill, i) => (
                       <span key={i} className="flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium bg-white/5 text-white/70 border border-white/5">
                         <CheckCircle2 className="w-3 h-3 text-primary" />
                         {skill}
                       </span>
                     ))}
                   </div>
                 </div>

                 <div>
                   <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40 mb-2">Summary</p>
                   <p className="text-white/60 font-light text-sm leading-relaxed">
                     {certificate.summary}
                   </p>
                 </div>
               </div>

               {/* View Button */}
               <div className="mt-10 pt-6 border-t border-white/10">
                 <a 
                   href={certificate.pdfPath}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-colors"
                 >
                   View Certificate
                 </a>
               </div>

            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
