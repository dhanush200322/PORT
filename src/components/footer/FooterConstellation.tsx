"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export default function FooterConstellation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const requestRef = useRef<number | undefined>(undefined);
  const prefersReducedMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer to pause when out of view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Initialize particles
  useEffect(() => {
    if (typeof window === "undefined" || prefersReducedMotion) return;
    
    const initParticles: Particle[] = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
    }));
    setParticles(initParticles);
  }, [prefersReducedMotion]);

  // Animation Loop
  useEffect(() => {
    if (!isVisible || prefersReducedMotion || particles.length === 0) return;

    const animate = () => {
      setParticles(prev => prev.map(p => {
        let newX = p.x + p.vx;
        let newY = p.y + p.vy;

        if (containerRef.current) {
          const { width, height } = containerRef.current.getBoundingClientRect();
          if (newX < 0 || newX > width) p.vx *= -1;
          if (newY < 0 || newY > height) p.vy *= -1;
        }

        return { ...p, x: newX, y: newY };
      }));
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current!);
  }, [isVisible, prefersReducedMotion, particles.length]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: -1000, y: -1000 });
  };

  if (prefersReducedMotion) return null;

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 z-0 pointer-events-auto overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {particles.map((p1, i) => {
          // Draw lines to mouse if close (only closest 3-5 is the goal, but simple distance check is very fast)
          const distToMouse = Math.hypot(p1.x - mousePos.x, p1.y - mousePos.y);
          const mouseLineOpacity = distToMouse < 200 ? (1 - distToMouse / 200) * 0.3 : 0;

          return (
            <g key={`group-${p1.id}`}>
              {/* Particle Dot */}
              <circle cx={p1.x} cy={p1.y} r={1.5} fill="rgba(255,255,255,0.4)" />
              
              {/* Line to Mouse */}
              {mouseLineOpacity > 0 && (
                <line 
                  x1={p1.x} y1={p1.y} 
                  x2={mousePos.x} y2={mousePos.y} 
                  stroke={`rgba(255,255,255,${mouseLineOpacity})`} 
                  strokeWidth="1"
                />
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
