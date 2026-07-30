"use client";

import { motion } from "framer-motion";
import FooterConstellation from "./FooterConstellation";
import { useEffect, useState } from "react";

export default function FooterBackground() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 bg-black">
      {/* Layer 4: Aurora Gradient (< 5% opacity) */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          background: 'radial-gradient(ellipse at top, rgba(255,255,255,0.8), transparent 70%), radial-gradient(ellipse at bottom, rgba(255,255,255,0.4), transparent 80%)'
        }}
      />

      {/* Layer 1: Animated Premium Grid (Moves extremely slowly) */}
      <motion.div 
        animate={{ 
          y: [0, -40],
        }}
        transition={{ 
          duration: 20, 
          ease: "linear", 
          repeat: Infinity 
        }}
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          height: '200%',
        }}
      />

      {/* Layer 5: Noise Texture */}
      <div 
        className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
        }}
      />

      {/* Layer 2: Soft radial spotlight (Follows mouse slightly) */}
      <motion.div
        animate={{
          x: mousePos.x / 15,
          y: mousePos.y / 15,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 50 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] bg-white/5 rounded-full blur-[120px]"
      />

      {/* New Layer: Ambient Glow Behind Title */}
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[300px] bg-white/5 rounded-full blur-[100px] opacity-70" />

      {/* Layer 3: Tiny glowing particles / Constellation */}
      <FooterConstellation />

      {/* Vignette effect for edges */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.8)_100%)]" />
    </div>
  );
}
