"use client";

import { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import { useLenis } from "lenis/react";
import { motion, AnimatePresence } from "framer-motion";
import { CertificateItem } from "./CertificateData";
import { 
  X, Download, Eye, CheckCircle2, ZoomIn, ZoomOut, RotateCcw, 
  Share2, ShieldCheck, FileText, Loader2, AlertCircle, Sparkles 
} from "lucide-react";

interface CertificateModalProps {
  certificate: CertificateItem | null;
  onClose: () => void;
}

export default function CertificateModal({ certificate, onClose }: CertificateModalProps) {
  const lenis = useLenis();
  const [mounted, setMounted] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);
  const objectRef = useRef<HTMLObjectElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Reset state when certificate changes
  useEffect(() => {
    if (certificate) {
      setIsLoading(true);
      setHasError(false);
      setZoomLevel(1);
      setCopiedShare(false);
    }
  }, [certificate]);

  // Close on ESC key
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

  const isPdf = certificate?.pdfPath.toLowerCase().endsWith('.pdf');

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.25, 2));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.25, 0.75));
  const handleResetZoom = () => setZoomLevel(1);

  const handleShare = async () => {
    if (!certificate) return;
    const shareData = {
      title: certificate.title,
      text: `Check out ${certificate.title} issued by ${certificate.organization}!`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // Fallback to clipboard copy if user cancels or share API fails
      }
    } else {
      await navigator.clipboard.writeText(window.location.href);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2500);
    }
  };

  return createPortal(
    <AnimatePresence>
      {certificate && (
        <div 
          role="dialog"
          aria-modal="true"
          aria-labelledby="certificate-modal-title"
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 md:p-8"
        >
          
          {/* Blurred Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/75 backdrop-blur-2xl"
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            data-lenis-prevent
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-6xl max-h-[92dvh] bg-background/90 backdrop-blur-2xl border border-white/15 rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.85)] flex flex-col md:flex-row overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Close Button (Mobile & Desktop Header) */}
            <button
              onClick={onClose}
              aria-label="Close certificate modal"
              className="absolute top-4 right-4 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-white/70 hover:bg-red-500/20 hover:text-white hover:border-red-500/40 transition-all duration-300 shadow-lg"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Column: High-Resolution Viewer Window */}
            <div className="w-full md:w-3/5 min-h-[350px] md:min-h-[600px] bg-black/40 border-r border-white/10 flex flex-col relative group">
              
              {/* Viewer Control Toolbar */}
              <div className="w-full px-4 py-3 bg-white/[0.03] border-b border-white/10 flex items-center justify-between z-20">
                <div className="flex items-center gap-1.5 text-white/50 text-xs font-mono uppercase tracking-wider">
                  <FileText className="w-4 h-4 text-primary" />
                  <span>Document Viewer</span>
                </div>

                <div className="flex items-center gap-2">
                  {/* Zoom Controls */}
                  <div className="flex items-center bg-white/5 border border-white/10 rounded-lg p-0.5">
                    <button
                      onClick={handleZoomOut}
                      title="Zoom Out"
                      className="p-1.5 text-white/60 hover:text-white hover:bg-white/10 rounded transition-colors"
                    >
                      <ZoomOut className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-[10px] text-white/70 px-2 font-mono">{Math.round(zoomLevel * 100)}%</span>
                    <button
                      onClick={handleZoomIn}
                      title="Zoom In"
                      className="p-1.5 text-white/60 hover:text-white hover:bg-white/10 rounded transition-colors"
                    >
                      <ZoomIn className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={handleResetZoom}
                      title="Reset Zoom"
                      className="p-1.5 text-white/60 hover:text-white hover:bg-white/10 rounded transition-colors border-l border-white/10 ml-0.5"
                    >
                      <RotateCcw className="w-3 h-3" />
                    </button>
                  </div>

                  {/* Share Button */}
                  <button
                    onClick={handleShare}
                    title="Share Certificate"
                    className="flex items-center gap-1 px-2.5 py-1.5 bg-white/5 border border-white/10 hover:bg-white/10 text-white/70 hover:text-white text-xs rounded-lg transition-colors"
                  >
                    <Share2 className="w-3.5 h-3.5 text-primary" />
                    <span className="hidden sm:inline">{copiedShare ? "Copied!" : "Share"}</span>
                  </button>
                </div>
              </div>

              {/* Main Document Content Box */}
              <div className="flex-1 w-full relative flex items-center justify-center p-4 md:p-6 overflow-auto">
                
                {/* Skeleton Loader State */}
                {isLoading && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 z-10 space-y-4">
                    <Loader2 className="w-10 h-10 text-primary animate-spin" />
                    <p className="text-white/60 text-xs tracking-widest uppercase animate-pulse">Loading Certificate...</p>
                  </div>
                )}

                {/* Document Viewer: Using <object> for PDFs or <img> for images */}
                <div 
                  className="w-full h-full flex items-center justify-center transition-transform duration-300 ease-out"
                  style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'center center' }}
                >
                  {isPdf ? (
                    <object
                      ref={objectRef}
                      data={`${certificate.pdfPath}#toolbar=0&navpanes=0`}
                      type="application/pdf"
                      className="w-full h-full min-h-[420px] rounded-xl border border-white/10 shadow-2xl bg-zinc-900"
                      onLoad={() => setIsLoading(false)}
                      onError={() => {
                        setIsLoading(false);
                        setHasError(true);
                      }}
                    >
                      {/* Fallback inside object if browser blocks or fails PDF rendering */}
                      <div className="w-full h-full min-h-[350px] p-8 flex flex-col items-center justify-center text-center bg-white/[0.02] rounded-xl border border-white/10">
                        <AlertCircle className="w-12 h-12 text-yellow-500 mb-4" />
                        <h4 className="text-white font-semibold text-base mb-2">Inline PDF Preview Unsupported</h4>
                        <p className="text-white/60 text-xs max-w-sm mb-6">
                          Your browser does not support embedded PDF previews directly. You can view or download the original file below.
                        </p>
                        <a
                          href={certificate.pdfPath}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-primary text-primary-foreground text-xs font-bold rounded-lg shadow-lg hover:bg-primary/90 transition-colors"
                        >
                          Open PDF in New Tab
                        </a>
                      </div>
                    </object>
                  ) : (
                    <img
                      src={certificate.imagePath || certificate.pdfPath}
                      alt={certificate.title}
                      loading="lazy"
                      onLoad={() => setIsLoading(false)}
                      onError={() => {
                        setIsLoading(false);
                        setHasError(true);
                      }}
                      className="max-w-full max-h-full object-contain rounded-xl border border-white/15 shadow-2xl hover:scale-[1.01] transition-transform duration-500"
                    />
                  )}
                </div>

                {/* Error Banner state */}
                {hasError && (
                  <div className="absolute inset-0 bg-black/90 flex flex-col items-center justify-center p-6 text-center z-30">
                    <AlertCircle className="w-12 h-12 text-red-400 mb-3" />
                    <h3 className="text-white text-lg font-bold mb-1">Certificate Preview Unavailable</h3>
                    <p className="text-white/60 text-xs max-w-sm mb-6">
                      The certificate file could not be displayed directly. You can still download or view the original file.
                    </p>
                    <a
                      href={certificate.pdfPath}
                      download
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-bold text-xs hover:bg-primary/90 transition-colors shadow-lg"
                    >
                      <Download className="w-4 h-4" />
                      Download Certificate
                    </a>
                  </div>
                )}

              </div>

            </div>

            {/* Right Column: Metadata Details & Bottom Actions */}
            <div className="w-full md:w-2/5 p-6 md:p-8 flex flex-col justify-between overflow-y-auto max-h-[92dvh]">
               
               <div>
                 {/* Header Category & Status */}
                 <div className="flex flex-wrap items-center gap-2 mb-4">
                   <span className="inline-block px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-[10px] font-semibold uppercase tracking-widest">
                     {certificate.category}
                   </span>
                   <span className="flex items-center gap-1.5 text-emerald-400 text-[10px] font-semibold uppercase tracking-widest bg-emerald-400/10 px-3 py-1 rounded-full border border-emerald-400/20">
                     <CheckCircle2 className="w-3.5 h-3.5" />
                     {certificate.status || "Completed ✅"}
                   </span>
                 </div>

                 {/* Title */}
                 <h2 id="certificate-modal-title" className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-4 leading-snug">
                   {certificate.title}
                 </h2>

                 {/* Key Attributes Box */}
                 <div className="grid grid-cols-2 gap-3 p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 mb-6">
                   <div>
                     <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/40 mb-0.5">
                       {certificate.categoryType === "internship" ? "Organization" : "Provider"}
                     </p>
                     <p className="text-white/90 text-xs font-semibold">{certificate.organization}</p>
                   </div>
                   <div>
                     <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/40 mb-0.5">
                       {certificate.categoryType === "internship" ? "Duration / Date" : "Issue Date"}
                     </p>
                     <p className="text-white/90 text-xs font-semibold">
                       {certificate.duration ? `${certificate.duration} (${certificate.issuedDate})` : certificate.issuedDate}
                     </p>
                   </div>
                   {certificate.credentialId && (
                     <div className="col-span-2 border-t border-white/5 pt-2 mt-1 flex items-center justify-between">
                       <div>
                         <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/40 mb-0.5">Credential ID</p>
                         <p className="text-primary font-mono text-[11px]">{certificate.credentialId}</p>
                       </div>
                       <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                         Verified Record
                       </span>
                     </div>
                   )}
                 </div>

                 {/* Description Summary */}
                 <div className="mb-6">
                   <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40 mb-2">Description</p>
                   <p className="text-white/70 font-light text-xs leading-relaxed bg-white/[0.02] p-3 rounded-xl border border-white/5">
                     {certificate.summary}
                   </p>
                 </div>

                 {/* Key Contributions or Highlights */}
                 {((certificate.contributions && certificate.contributions.length > 0) || (certificate.highlights && certificate.highlights.length > 0)) && (
                   <div className="mb-6">
                     <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40 mb-2 flex items-center gap-1.5">
                       <Sparkles className={`w-3 h-3 ${certificate.categoryType === "internship" ? "text-cyan-400" : "text-purple-400"}`} />
                       {certificate.categoryType === "internship" ? "Key Contributions & Deliverables" : "Key Learnings & Outcomes"}
                     </p>
                     <div className="space-y-2 bg-white/[0.02] p-3.5 rounded-xl border border-white/5">
                       {(certificate.contributions || certificate.highlights || []).map((item, idx) => (
                         <div key={idx} className="flex items-start gap-2.5 text-xs text-white/80">
                           <CheckCircle2 className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${certificate.categoryType === "internship" ? "text-cyan-400" : "text-emerald-400"}`} />
                           <span className="leading-snug">{item}</span>
                         </div>
                       ))}
                     </div>
                   </div>
                 )}

                 {/* Skills Learned */}
                 <div className="mb-6">
                   <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40 mb-2">Skills & Technologies</p>
                   <div className="flex flex-wrap gap-1.5">
                     {certificate.skills.map((skill, i) => (
                       <span key={i} className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-white/5 text-white/80 border border-white/10">
                         {skill}
                       </span>
                     ))}
                   </div>
                 </div>
               </div>

               {/* Bottom Modal Actions (3 standard required buttons) */}
               <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3.5 mt-4">
                 
                 {/* Primary Button: View Full Size */}
                 <a 
                   href={certificate.pdfPath}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-primary text-primary-foreground font-bold text-xs hover:bg-primary/90 transition-all duration-300 shadow-[0_4px_20px_rgba(255,255,255,0.15)] active:scale-95"
                 >
                   <Eye className="w-4 h-4" />
                   View Full Size
                 </a>

                 {/* Secondary Button: Download Certificate */}
                 <a 
                   href={certificate.pdfPath}
                   download
                   className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/10 text-white font-semibold text-xs hover:bg-white/20 border border-white/15 transition-all duration-300 active:scale-95"
                 >
                   <Download className="w-4 h-4" />
                   Download Certificate
                 </a>

                 {/* Danger Button: Close */}
                 <button
                   onClick={onClose}
                   className="flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl bg-red-500/10 text-red-400 font-semibold text-xs hover:bg-red-500/20 border border-red-500/20 transition-all duration-300 active:scale-95"
                 >
                   <X className="w-4 h-4" />
                   Close
                 </button>

               </div>

            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}

