"use client";

import { motion, Variants } from "framer-motion";
import { EXPERTISE_DATA } from "./ExpertiseData";
import ExpertiseCard from "./ExpertiseCard";

const gridVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

export default function ExpertiseGrid() {
  return (
    <motion.div
      variants={gridVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
    >
      {/* 
        The grid is 4 columns wide on Desktop. 
        'large' cards (Frontend, AI) take 2 columns each, filling the top row.
        The remaining 6 normal cards take 1 column each, filling the next 1.5 rows.
        To make it perfectly symmetrical at the bottom, we can center the last two cards, 
        or let them flow naturally. CSS grid handles the flow elegantly.
      */}
      {EXPERTISE_DATA.map((category, index) => (
        <ExpertiseCard key={index} category={category} />
      ))}
    </motion.div>
  );
}
