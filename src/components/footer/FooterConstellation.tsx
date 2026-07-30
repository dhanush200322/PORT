"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { useReducedMotion } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
}

const CONNECTION_DISTANCE = 200;

export default function FooterConstellation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number | undefined>(undefined);
  const prefersReducedMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(false);
  const [particleCount, setParticleCount] = useState(0);
  
  // Refs for direct DOM manipulation to avoid React re-renders
  const particlesRef = useRef<Particle[]>([]);
  const circlesRef = useRef<(SVGCircleElement | null)[]>([]);
  const linesRef = useRef<(SVGLineElement | null)[]>([]);
  
  // Track mouse without triggering re-renders
  const mousePosRef = useRef({ x: -1000, y: -1000 });

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

  // Initialize particles once
  useEffect(() => {
    if (typeof window === "undefined" || prefersReducedMotion) return;
    
    // Determine motion level based on screen width
    const width = window.innerWidth;
    let count = 8; // Mobile
    if (width > 1024) count = 30; // Desktop
    else if (width > 768) count = 18; // Tablet
    
    setParticleCount(count);

    particlesRef.current = Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
    }));
  }, [prefersReducedMotion]);

  // Animation Loop - Direct DOM mutation
  useEffect(() => {
    if (!isVisible || prefersReducedMotion || particlesRef.current.length === 0) return;

    const animate = () => {
      if (!containerRef.current) return;
      const { width, height } = containerRef.current.getBoundingClientRect();
      const mouse = mousePosRef.current;

      particlesRef.current.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off edges
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Update Circle DOM
        const circle = circlesRef.current[i];
        if (circle) {
          circle.setAttribute("cx", p.x.toString());
          circle.setAttribute("cy", p.y.toString());
        }

        // Update Line DOM
        const line = linesRef.current[i];
        if (line) {
          const distToMouse = Math.hypot(p.x - mouse.x, p.y - mouse.y);
          if (distToMouse < CONNECTION_DISTANCE) {
            const opacity = (1 - distToMouse / CONNECTION_DISTANCE) * 0.3;
            line.setAttribute("x1", p.x.toString());
            line.setAttribute("y1", p.y.toString());
            line.setAttribute("x2", mouse.x.toString());
            line.setAttribute("y2", mouse.y.toString());
            line.setAttribute("stroke", `rgba(255,255,255,${opacity})`);
            line.style.display = "block";
          } else {
            line.style.display = "none";
          }
        }
      });

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isVisible, prefersReducedMotion]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mousePosRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  };

  const handleMouseLeave = () => {
    mousePosRef.current = { x: -1000, y: -1000 };
  };

  if (prefersReducedMotion) return null;

  // We map over a static array just to create the initial SVG elements
  const renderArray = Array.from({ length: particleCount });

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 z-0 pointer-events-auto overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {renderArray.map((_, i) => (
          <g key={`particle-group-${i}`}>
            <circle 
              ref={(el) => { circlesRef.current[i] = el; }}
              r={1.5} 
              fill="rgba(255,255,255,0.4)" 
            />
            <line 
              ref={(el) => { linesRef.current[i] = el; }}
              strokeWidth="1"
              style={{ display: "none" }}
            />
          </g>
        ))}
      </svg>
    </div>
  );
}
