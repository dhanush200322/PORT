"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContactHeader from "./ContactHeader";
import ContactInfo from "./ContactInfo";
import ContactSocialLinks from "./ContactSocialLinks";
import ProjectInquiryForm from "./ProjectInquiryForm";
import ContactSuccess from "./ContactSuccess";

export default function Contact() {
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <section id="contact" className="relative w-full bg-black min-h-screen overflow-hidden flex flex-col pt-32">
      
      {/* Background Elements */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.015] z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ 
          duration: 15, 
          ease: "easeInOut", 
          repeat: Infinity 
        }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-primary/10 rounded-full blur-[150px] pointer-events-none z-0"
      />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 pb-40">
        
        <ContactHeader />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Left Side: Info */}
          <div className="lg:col-span-4 flex flex-col">
            <ContactInfo />
            <ContactSocialLinks />
          </div>

          {/* Right Side: Form or Success */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <ContactSuccess key="success" onReset={() => setIsSuccess(false)} />
              ) : (
                <ProjectInquiryForm key="form" onSuccess={() => setIsSuccess(true)} />
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>

      {/* Bottom Message */}
      <div className="relative z-10 w-full border-t border-white/5 bg-white/[0.02] py-20 px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-white/40 text-[var(--text-body)] font-light italic leading-relaxed"
        >
          "Thank you for exploring my journey.<br/>Let's create something meaningful together."
        </motion.p>
      </div>

    </section>
  );
}
