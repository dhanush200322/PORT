"use client";

import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function HeroVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Set to false by default as requested to autoplay with sound ON
  const [isMuted, setIsMuted] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const handleContainerClick = () => {
    if (isMuted && videoRef.current) {
      videoRef.current.muted = false;
      setIsMuted(false);
      videoRef.current.play().catch(e => console.log("Play failed:", e));
    }
  };

  // Smooth parallax effect on scroll
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const toggleMute = () => {
    if (videoRef.current) {
      const newMutedState = !isMuted;
      videoRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
      
      // If unmuting, ensure the video plays (browsers can pause on unmute)
      if (!newMutedState) {
        videoRef.current.play().catch(e => console.log("Play failed:", e));
      }
    }
  };

  // Auto-mute when scrolling past 75%
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.75 && !isMuted) {
      if (videoRef.current) {
        videoRef.current.muted = true;
        setIsMuted(true);
      }
    }
  });

  return (
    <motion.div 
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden bg-background cursor-pointer"
      style={{ y, opacity }}
      onClick={handleContainerClick}
    >
      {/* Cinematic Gradient Overlay */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.70) 100%)"
        }}
      />
      
      {/* Fade in the video */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 w-full h-full pointer-events-none"
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          preload="metadata"
          // scale-125 forces the video to zoom in 25%, definitively pushing watermarks off-screen
          className="absolute inset-0 w-full h-full object-cover scale-125"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>

      {/* Sound Toggle Button */}
      <div className="absolute bottom-6 right-6 lg:bottom-8 lg:right-8 z-50 pointer-events-auto flex flex-col items-end">
        
        {/* Animated Tooltip to draw attention */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: [0, -5, 0] }}
          transition={{ 
            opacity: { delay: 1.5, duration: 0.5 },
            y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" } 
          }}
          className="relative mb-3 bg-primary text-white text-xs font-medium px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-lg whitespace-nowrap pointer-events-none opacity-80"
        >
          <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-primary rotate-45" />
          Click to hear voice! 👋
        </motion.div>

        <button
          onClick={toggleMute}
          suppressHydrationWarning
          className="group flex items-center gap-0 hover:gap-3 px-3 py-3 sm:px-4 sm:py-3 rounded-full bg-black/20 hover:bg-black/60 backdrop-blur-md border border-white/5 hover:border-white/10 text-white/50 hover:text-white transition-all duration-300 overflow-hidden"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? (
            <>
              <VolumeX className="w-5 h-5 opacity-70 group-hover:opacity-100 shrink-0" />
              <span className="text-sm font-medium opacity-0 max-w-0 group-hover:max-w-xs group-hover:opacity-70 transition-all duration-300 whitespace-nowrap overflow-hidden">Sound Off</span>
            </>
          ) : (
            <>
              <Volume2 className="w-5 h-5 text-primary opacity-70 group-hover:opacity-100 shrink-0" />
              <span className="text-sm font-medium text-white opacity-0 max-w-0 group-hover:max-w-xs group-hover:opacity-100 transition-all duration-300 whitespace-nowrap overflow-hidden">Sound On</span>
            </>
          )}
        </button>
      </div>
    </motion.div>
  );
}
