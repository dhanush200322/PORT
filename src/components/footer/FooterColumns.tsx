"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

export default function FooterColumns() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const [time, setTime] = useState<string>("");

  useEffect(() => {
    // Living Clock - IST Time
    const updateClock = () => {
      const now = new Date();
      // Format to IST
      const istTime = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit', // Optional: could remove seconds for cleaner look, but "Living" implies seconds
        hour12: true
      });
      setTime(istTime);
    };
    
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const columns: { title: string, links: { label: string, href: string, external?: boolean }[] }[] = [
    {
      title: "Navigation",
      links: [
        { label: "Expertise", href: "#expertise" },
        { label: "Projects", href: "#projects" },
        { label: "Experience", href: "#experience" },
        { label: "Contact", href: "#contact" }
      ]
    },
    {
      title: "Social",
      links: [
        { label: "GitHub", href: "https://github.com/dhanush200322", external: true },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/dhanush-av-618271378/", external: true },
        { label: "Gumroad", href: "https://gumroad.com/products", external: true },
        { label: "Email", href: "mailto:ro224313@gmail.com", external: true }
      ]
    }
  ];

  return (
    <div ref={containerRef} className="relative z-10 w-full max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-32 border-t border-white/5 pt-20">
      
      {/* Brand & Living Clock */}
      <motion.div
        initial={{ opacity: 0, y: 30, filter: "blur(5px)" }}
        animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="flex flex-col gap-6"
      >
        <div>
          <h4 className="text-white font-bold text-lg mb-1">DHANUSH AV</h4>
          <p className="text-white/40 text-sm">Full Stack Developer &<br/>AI Automation Engineer</p>
        </div>
        
        <div className="flex flex-col gap-1 mt-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-white/30">Local Time</span>
          <p className="text-white/80 font-mono text-sm tracking-wide">{time || "00:00:00 PM"}</p>
          <p className="text-white/40 text-xs">Salem, India (IST)</p>
        </div>
      </motion.div>

      {/* Navigation Columns */}
      {columns.map((col, idx) => (
        <motion.div
          key={col.title}
          initial={{ opacity: 0, y: 30, filter: "blur(5px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8, delay: 0.35 + idx * 0.15, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <h4 className="text-xs font-semibold uppercase tracking-widest text-white/30">{col.title}</h4>
          <ul className="flex flex-col gap-4">
            {col.links.map((link) => (
              <li key={link.label}>
                <a 
                  href={link.href}
                  target={link.external ? "_blank" : "_self"}
                  rel={link.external ? "noopener noreferrer" : ""}
                  className="group relative inline-flex items-center text-white/60 hover:text-white transition-colors duration-300"
                >
                  <span className="relative z-10 block transition-transform duration-300 group-hover:translate-x-2">
                    {link.label}
                  </span>
                  
                  {link.external && (
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-3 group-hover:translate-y-0 transition-all duration-300" />
                  )}

                  {/* Underline draw effect */}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white/50 group-hover:w-full transition-all duration-500 ease-out" />
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}

      {/* Availability / Live Status */}
      <motion.div
        initial={{ opacity: 0, y: 30, filter: "blur(5px)" }}
        animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
        transition={{ duration: 0.8, delay: 0.65, ease: "easeOut" }}
        className="flex flex-col gap-6 lg:items-end lg:text-right"
      >
        <h4 className="text-xs font-semibold uppercase tracking-widest text-white/30">Availability</h4>
        
        <div className="group relative inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 cursor-default hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-500">
          <div className="relative flex items-center justify-center w-2 h-2">
            <span className="absolute w-full h-full bg-emerald-500 rounded-full animate-ping opacity-75" />
            <span className="relative w-2 h-2 bg-emerald-500 rounded-full" />
          </div>
          <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">Available</span>

          {/* Tooltip */}
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 lg:left-auto lg:-translate-x-0 lg:right-0 opacity-0 group-hover:opacity-100 group-hover:-top-14 transition-all duration-300 pointer-events-none">
            <div className="px-3 py-2 bg-black/90 border border-white/10 rounded-lg text-xs text-white/80 whitespace-nowrap shadow-xl backdrop-blur-md">
              Currently accepting new opportunities.
            </div>
          </div>
        </div>
      </motion.div>

    </div>
  );
}
