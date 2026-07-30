"use client";

import { motion, Variants } from "framer-motion";
import { useState } from "react";
import { PROJECTS_DATA, Project } from "./ProjectData";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

const gridVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

export default function ProjectsGrid() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenCaseStudy = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseCaseStudy = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <motion.div
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 mt-16 w-full"
      >
        {PROJECTS_DATA.map((project) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            onOpenCaseStudy={handleOpenCaseStudy} 
          />
        ))}
      </motion.div>

      {/* Case Study Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={handleCloseCaseStudy} 
      />
    </>
  );
}
