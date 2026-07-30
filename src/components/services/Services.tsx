"use client";

import { motion } from "framer-motion";
import ServicesHeader from "./ServicesHeader";
import ServicesGrid from "./ServicesGrid";
import ServicesProcess from "./ServicesProcess";
import WhyChooseMe from "./WhyChooseMe";
import ServicesCTA from "./ServicesCTA";

export default function Services() {
  return (
    <section id="services" className="relative w-full bg-black min-h-screen overflow-hidden flex flex-col pt-32">
      
      {/* Premium Background Elements */}
      {/* 1. Very low opacity geometric grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.02] z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
      
      {/* 2. Soft moving spotlight */}
      <motion.div
        animate={{ 
          x: ["-10%", "10%", "-10%"],
          y: ["-10%", "10%", "-10%"]
        }}
        transition={{ 
          duration: 20, 
          ease: "linear", 
          repeat: Infinity 
        }}
        className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] bg-primary/10 rounded-full blur-[150px] pointer-events-none z-0"
      />

      {/* 3. Subtle animated mesh gradient (top right) */}
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.4, 0.3]
        }}
        transition={{ 
          duration: 15, 
          ease: "easeInOut", 
          repeat: Infinity 
        }}
        className="absolute -top-40 -right-40 w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none z-0"
      />

      {/* Content Stream */}
      <div className="relative z-10 w-full flex flex-col">
        <ServicesHeader />
        <ServicesGrid />
        <ServicesProcess />
        <WhyChooseMe />
        <ServicesCTA />

        {/* Bottom Transition */}
        <div className="relative w-full py-24 flex flex-col items-center justify-center border-t border-white/5 bg-gradient-to-b from-transparent to-background/50 px-6">
          <div className="text-white/30 text-xs font-semibold uppercase tracking-[0.3em] mb-8">
            Next
          </div>
          <h2 className="text-2xl md:text-4xl font-light text-white tracking-widest mb-16">
            Let's Connect
          </h2>
          
          {/* Animated growing divider line pointing down */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: 120 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-px bg-gradient-to-b from-primary to-transparent relative"
          >
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-2 -left-1 w-2.5 h-2.5 border-r border-b border-primary rotate-45"
            />
          </motion.div>
        </div>
      </div>
      
    </section>
  );
}
