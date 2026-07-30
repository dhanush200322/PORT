"use client";

import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { Volume2, VolumeX, ArrowDown } from "lucide-react";

export default function HeroVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // State for voice toggle (Sound On/Off)
  const [isMuted, setIsMuted] = useState(true);
  
  // State for loading experience
  const [hasStartedPlaying, setHasStartedPlaying] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Smooth parallax effect on scroll
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Debug logging helper (Development only)
  const logDebug = (msg: string) => {
    if (process.env.NODE_ENV === "development") {
      console.log(`Hero Video: ✓ ${msg}`);
    }
  };

  const attemptPlay = useCallback(async (retryCount = 0) => {
    if (!videoRef.current) return;

    try {
      // Must be muted for autoplay to succeed
      videoRef.current.muted = true;
      setIsMuted(true);
      await videoRef.current.play();
      setHasStartedPlaying(true);
      logDebug(retryCount === 0 ? "autoplay success" : `retry #${retryCount}`);
    } catch (err) {
      // If play fails, retry or wait for interaction
      if (retryCount === 0) {
        setTimeout(() => attemptPlay(1), 300);
      } else if (retryCount === 1) {
        setTimeout(() => attemptPlay(2), 800);
      } else {
        logDebug("waiting for interaction to recover playback");
        // Add interaction listeners as fallback
        const recoverPlayback = () => {
          if (videoRef.current) {
            videoRef.current.muted = true;
            videoRef.current.play()
              .then(() => {
                setHasStartedPlaying(true);
                logDebug("recovered after interaction");
                removeRecoveryListeners();
              })
              .catch(console.error);
          }
        };

        const removeRecoveryListeners = () => {
          document.removeEventListener('click', recoverPlayback);
          document.removeEventListener('pointerdown', recoverPlayback);
          document.removeEventListener('touchstart', recoverPlayback);
          document.removeEventListener('keydown', recoverPlayback);
          document.removeEventListener('scroll', recoverPlayback);
        };

        document.addEventListener('click', recoverPlayback);
        document.addEventListener('pointerdown', recoverPlayback);
        document.addEventListener('touchstart', recoverPlayback);
        document.addEventListener('keydown', recoverPlayback);
        document.addEventListener('scroll', recoverPlayback, { once: true });
      }
    }
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      logDebug("metadata loaded");
      attemptPlay();
    };

    if (video.readyState >= 1) { // HAVE_METADATA or greater
      handleLoadedMetadata();
    } else {
      video.addEventListener('loadedmetadata', handleLoadedMetadata);
    }

    // Page Visibility API
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && videoRef.current?.paused) {
        attemptPlay(0); // Restart the retry flow
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Intelligent playback recovery
    const handlePlaybackStalled = () => {
      if (document.visibilityState === 'visible' && videoRef.current?.paused) {
        attemptPlay(0);
      }
    };
    video.addEventListener('pause', handlePlaybackStalled);
    video.addEventListener('waiting', handlePlaybackStalled);
    video.addEventListener('suspend', handlePlaybackStalled);
    video.addEventListener('stalled', handlePlaybackStalled);
    
    const handlePlaying = () => {
      setHasStartedPlaying(true);
      logDebug("playback started");
    };
    video.addEventListener('playing', handlePlaying);

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      video.removeEventListener('pause', handlePlaybackStalled);
      video.removeEventListener('waiting', handlePlaybackStalled);
      video.removeEventListener('suspend', handlePlaybackStalled);
      video.removeEventListener('stalled', handlePlaybackStalled);
      video.removeEventListener('playing', handlePlaying);
    };
  }, [attemptPlay]);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation(); // prevent container click from triggering twice
    if (videoRef.current) {
      const newMutedState = !isMuted;
      videoRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
      
      if (!newMutedState) {
        videoRef.current.play().catch(e => console.log("Play failed:", e));
      }
    }
  };

  const handleContainerClick = () => {
    if (isMuted && videoRef.current) {
      videoRef.current.muted = false;
      setIsMuted(false);
      videoRef.current.play().catch(e => console.log("Play failed:", e));
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
      
      {/* Poster Placeholder (Shown until video starts playing) */}
      <motion.div
        className="absolute inset-0 z-0 bg-background/80 flex items-center justify-center"
        animate={{ opacity: hasStartedPlaying ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      />
      
      {/* Fade in the video */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: hasStartedPlaying ? 1 : 0 }}
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
        
        {/* Sleek, Professional Sound Indicator */}
        {isMuted && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: [0, 8, 0] }}
            transition={{ 
              opacity: { delay: 1.0, duration: 0.8 },
              y: { repeat: Infinity, duration: 2, ease: "easeInOut" } 
            }}
            className="flex flex-col items-center mb-4 pointer-events-none mr-1 sm:mr-2"
          >
            <div className="bg-black/40 backdrop-blur-md text-white/90 text-xs sm:text-sm font-medium px-4 py-2 sm:px-5 sm:py-2.5 rounded-full border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)] whitespace-nowrap tracking-wider flex items-center gap-2.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              ENABLE SOUND
            </div>
            <motion.div 
              className="mt-2 text-white/50"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
            </motion.div>
          </motion.div>
        )}

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
