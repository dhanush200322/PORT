"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { Project } from "./ProjectData";
import { X, ExternalLink, Lock } from "lucide-react";
import Image from "next/image";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const GithubIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // Lock body scroll when open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0A0A0A] border border-white/10 rounded-3xl shadow-2xl pointer-events-auto custom-scrollbar relative pb-[env(safe-area-inset-bottom)]"
            >
              
              {/* Close Button */}
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-all z-50"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Cover Image/Video Placeholder */}
              <div className="w-full h-48 md:h-72 bg-gradient-to-br from-white/5 to-white/0 border-b border-white/5 relative overflow-hidden flex items-center justify-center">
                 <div className="absolute inset-0 bg-black/40 z-10" />
                 {/* Fallback pattern for when images are missing */}
                 {!project.imageFallback && (
                   <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
                 )}
                 {project.imageFallback && (
                   <Image 
                     src={project.imageFallback} 
                     alt={project.title} 
                     fill 
                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                     className="object-cover opacity-80"
                   />
                 )}
                 <h2 className="text-[var(--text-h2)] font-bold text-white z-20 tracking-tighter">{project.title}</h2>
              </div>

              {/* Content */}
              <div className="p-6 md:p-12 space-y-12">
                
                {/* Header Info */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary bg-primary/10 rounded-full border border-primary/20">
                      {project.status}
                    </span>
                    <span className="text-sm text-gray-custom">{project.meta.year}</span>
                  </div>
                  <h2 className="text-[var(--text-h2)] font-bold text-white mb-2 tracking-tight">{project.title}</h2>
                  <p className="text-lg text-primary font-medium">{project.category}</p>
                </div>

                {/* Case Study Sections */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  
                  {/* Left Column (Main Story) */}
                  <div className="md:col-span-2 space-y-10">
                    <section>
                      <h3 className="text-sm font-medium uppercase tracking-[0.2em] text-gray-custom mb-4">Overview</h3>
                      <p className="text-white/80 leading-relaxed font-light text-base md:text-lg">{project.caseStudy.overview}</p>
                    </section>

                    <section>
                      <h3 className="text-sm font-medium uppercase tracking-[0.2em] text-gray-custom mb-4">Problem</h3>
                      <p className="text-white/80 leading-relaxed font-light text-base md:text-lg">{project.caseStudy.problem}</p>
                    </section>

                    <section>
                      <h3 className="text-sm font-medium uppercase tracking-[0.2em] text-gray-custom mb-4">Solution</h3>
                      <p className="text-white/80 leading-relaxed font-light text-base md:text-lg">{project.caseStudy.solution}</p>
                    </section>
                  </div>

                  {/* Right Column (Tech & Links) */}
                  <div className="space-y-10">
                    <section>
                      <h3 className="text-sm font-medium uppercase tracking-[0.2em] text-gray-custom mb-4">Architecture</h3>
                      <ul className="space-y-3">
                        {project.caseStudy.architecture.map((item, i) => (
                          <li key={i} className="text-sm text-white/70 font-light flex items-start gap-2">
                            <span className="text-primary mt-1">●</span> {item}
                          </li>
                        ))}
                      </ul>
                    </section>

                    <section>
                      <h3 className="text-sm font-medium uppercase tracking-[0.2em] text-gray-custom mb-4">Tech Stack</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.caseStudy.techStack.map((tech, i) => (
                          <span key={i} className="px-3 py-1.5 rounded-md text-xs font-medium bg-white/5 border border-white/10 text-white/70">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </section>

                    <section className="pt-6 border-t border-white/5 space-y-4">
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
                        >
                          Live Demo <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                      
                      {project.githubUrl ? (
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
                        >
                          View GitHub <GithubIcon className="w-4 h-4" />
                        </a>
                      ) : (
                        <div className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white/5 border border-white/5 text-white/40 cursor-not-allowed">
                          Private Repository <Lock className="w-4 h-4" />
                        </div>
                      )}
                    </section>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
