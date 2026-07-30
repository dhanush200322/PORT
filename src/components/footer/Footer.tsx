"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import FooterBackground from "./FooterBackground";
import FooterContent from "./FooterContent";
import FooterColumns from "./FooterColumns";
import ScrollToTop from "./ScrollToTop";
import ScrollHint from "./ScrollHint";

export default function Footer() {
  const [isExiting, setIsExiting] = useState(false);

  return (
    <motion.footer
      initial={{ opacity: 1 }}
      animate={isExiting ? { opacity: 0, scale: 0.95 } : { opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className="relative w-full bg-black min-h-screen flex flex-col justify-between overflow-hidden"
    >
      <FooterBackground />
      <ScrollHint />
      
      {/* Spacer to push content to center/bottom */}
      <div className="flex-grow flex flex-col justify-center">
        <FooterContent />
      </div>

      <FooterColumns />
      <ScrollToTop onExit={(exiting) => setIsExiting(exiting)} />
    </motion.footer>
  );
}
