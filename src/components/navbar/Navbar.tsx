"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";
import { Download, Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Expertise", href: "#expertise" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={clsx(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out h-[68px] md:h-[72px] lg:h-[76px] flex items-center",
          isScrolled
            ? "bg-background/20 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.05)]"
            : "bg-transparent border-b border-transparent shadow-none"
        )}
      >
        <div className="relative max-w-[1400px] w-full mx-auto px-8 flex items-center justify-between h-full">
          {/* Logo */}
          <a
            href="#"
            onClick={scrollToTop}
            className="flex items-center text-2xl font-bold tracking-tighter text-white/90 hover:text-white transition-colors relative group select-none"
            aria-label="Scroll to top"
          >
            <span className="relative">
              D
              {/* Subtle glass effect behind the logo on hover */}
              <span className="absolute inset-0 bg-white/10 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </span>
            <span className="text-primary">.</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 lg:gap-10 h-full" onMouseLeave={() => setHoveredLink(null)}>
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.name.toLowerCase();
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onMouseEnter={() => setHoveredLink(link.name)}
                  onClick={() => setActiveSection(link.name.toLowerCase())}
                  className={clsx(
                    "relative px-4 py-2 text-[15px] font-medium transition-colors duration-200",
                    isActive ? "text-white" : "text-gray-custom hover:text-white"
                  )}
                >
                  {link.name}
                  
                  {/* Hover Background/Underline effect */}
                  {hoveredLink === link.name && (
                    <motion.div
                      layoutId="navbar-hover"
                      className="absolute inset-x-0 -bottom-[1px] h-[2px] bg-primary rounded-t-md opacity-80"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}

                  {/* Active Indicator */}
                  {isActive && hoveredLink !== link.name && (
                    <motion.div
                      layoutId="navbar-active"
                      className="absolute inset-x-0 -bottom-[1px] h-[2px] bg-primary/50 rounded-t-md"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Resume Button */}
          <a
            href="/resume.pdf"
            download="Dhanush_AV_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full text-[15px] font-medium bg-gradient-to-r from-[#4F8CFF] to-[#6A5CFF] text-white hover:scale-[1.03] transition-all duration-250 shadow-[0_4px_14px_0_rgba(79,140,255,0.39)] hover:shadow-[0_6px_20px_rgba(79,140,255,0.23)]"
          >
            Resume <Download className="w-4 h-4" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden p-2 -mr-2 text-gray-custom hover:text-white transition-colors"
            aria-label="Open menu"
            aria-expanded={isMobileMenuOpen}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Component */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        links={NAV_LINKS}
      />
    </>
  );
}
