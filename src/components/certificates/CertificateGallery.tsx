"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { CERTIFICATE_DATA, CertificateItem } from "./CertificateData";
import CertificateCard from "./CertificateCard";
import CertificateModal from "./CertificateModal";

export default function CertificateGallery() {
  const [activeCertificate, setActiveCertificate] = useState<CertificateItem | null>(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  return (
    <div className="relative w-full container-xl py-20 min-h-screen">
      
      {/* Subtle Moving Spotlight Background */}
      <motion.div
        animate={{ 
          x: ["-20%", "20%", "-20%"],
          y: ["-20%", "20%", "-20%"]
        }}
        transition={{ 
          duration: 20, 
          ease: "linear", 
          repeat: Infinity 
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[1000px] max-h-[1000px] bg-primary/5 rounded-full blur-[120px] pointer-events-none z-0"
      />

      {/* Bento Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 auto-rows-[400px] md:auto-rows-[450px]"
      >
        {CERTIFICATE_DATA.map((certificate) => (
          <motion.div 
            key={certificate.id} 
            variants={itemVariants}
            className={certificate.gridClass || ''}
          >
            <CertificateCard 
              certificate={certificate} 
              onClick={() => setActiveCertificate(certificate)} 
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Trust Strip */}
      <div className="mt-32 relative z-10 flex flex-col items-center justify-center text-center">
         <div className="w-px h-16 bg-gradient-to-b from-transparent to-primary/50 mb-8" />
         <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary mb-4">
           Committed to Continuous Learning
         </p>
         <p className="text-white/60 font-light max-w-lg leading-relaxed text-sm md:text-base">
           Always improving through practical experience, industry certifications, and real-world projects.
         </p>
         <div className="w-px h-16 bg-gradient-to-t from-transparent to-primary/50 mt-8" />
      </div>

      {/* Modal */}
      <CertificateModal 
        certificate={activeCertificate} 
        onClose={() => setActiveCertificate(null)} 
      />
      
    </div>
  );
}
