"use client";

import { motion, Variants } from "framer-motion";
import { SERVICES_DATA } from "./ServicesData";
import ServiceCard from "./ServiceCard";

export default function ServicesGrid() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    },
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto px-6 pb-32">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 auto-rows-fr"
      >
        {SERVICES_DATA.map((service) => (
          <motion.div key={service.id} variants={itemVariants}>
            <ServiceCard service={service} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
