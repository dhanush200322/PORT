"use client";

import { useState, useMemo } from "react";
import { motion, Variants } from "framer-motion";
import { CERTIFICATE_DATA, CertificateItem } from "./CertificateData";
import JourneyCard from "./JourneyCard";
import JourneyProgress from "./JourneyProgress";
import JourneyConnector from "./JourneyConnector";
import CertificateModal from "./CertificateModal";
import { Briefcase, GraduationCap, Search, Filter, Sparkles } from "lucide-react";

export default function CertificateGallery() {
  const [activeCertificate, setActiveCertificate] = useState<CertificateItem | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<"All" | "Internship" | "Course">("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredBranch, setHoveredBranch] = useState<"internship" | "course" | null>(null);

  // Filter items based on category & search query
  const { internships, courses } = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();

    const matchesSearch = (item: CertificateItem) =>
      !query ||
      item.title.toLowerCase().includes(query) ||
      item.organization.toLowerCase().includes(query) ||
      item.summary.toLowerCase().includes(query) ||
      item.skills.some((s) => s.toLowerCase().includes(query));

    const allFiltered = CERTIFICATE_DATA.filter(matchesSearch);

    return {
      internships: allFiltered.filter((item) => item.categoryType === "internship"),
      courses: allFiltered.filter((item) => item.categoryType === "course"),
    };
  }, [searchQuery]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const showInternships = selectedCategory === "All" || selectedCategory === "Internship";
  const showCourses = selectedCategory === "All" || selectedCategory === "Course";

  return (
    <div className="relative w-full max-w-7xl mx-auto px-6 py-8 min-h-screen">
      
      {/* Subtle Moving Background Spotlight */}
      <motion.div
        animate={{ 
          x: ["-20%", "20%", "-20%"],
          y: ["-20%", "20%", "-20%"]
        }}
        transition={{ duration: 22, ease: "linear", repeat: Infinity }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75vw] h-[75vw] max-w-[900px] max-h-[900px] bg-primary/5 rounded-full blur-[130px] pointer-events-none z-0"
      />

      {/* 1. Section Progress Indicator Bar */}
      <JourneyProgress />

      {/* 2. Interactive Search & Filter Control Bar */}
      <div className="relative z-20 mb-10 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 bg-white/[0.02] p-3.5 rounded-2xl border border-white/10 backdrop-blur-xl shadow-2xl">
        
        {/* Search Input */}
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
          <input
            type="text"
            suppressHydrationWarning
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search experience or skills..."
            className="w-full pl-10 pr-8 py-2 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-white/40 focus:outline-none focus:border-cyan-500/50 transition-colors"
          />
          {searchQuery && (
            <button 
              suppressHydrationWarning
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white text-xs"
            >
              ✕
            </button>
          )}
        </div>

        {/* Filter Switcher */}
        <div className="flex items-center gap-1 bg-white/5 p-1 rounded-xl border border-white/10 w-full sm:w-auto justify-center">
          <Filter className="w-3.5 h-3.5 text-white/40 ml-2 hidden sm:inline" />
          {(["All", "Internship", "Course"] as const).map((cat) => (
            <button
              key={cat}
              suppressHydrationWarning
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all duration-300 ${
                selectedCategory === cat
                  ? cat === "Internship"
                    ? "bg-cyan-500 text-black shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                    : cat === "Course"
                    ? "bg-purple-500 text-white shadow-[0_0_15px_rgba(168,85,247,0.4)]"
                    : "bg-white text-black shadow-lg"
                  : "text-white/60 hover:text-white hover:bg-white/10"
              }`}
            >
              {cat === "Internship" ? "💼 Internships" : cat === "Course" ? "📜 Courses" : "All Tracks"}
            </button>
          ))}
        </div>

      </div>

      {/* 3. Animated SVG Flowchart Connector */}
      <JourneyConnector hoveredBranch={hoveredBranch} />

      {/* 4. Dual Track Journey Timeline */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 mt-4">
        
        {/* Track 1: 💼 Internship Experience (Blue / Cyan Theme) */}
        {showInternships && (
          <div className="flex flex-col space-y-6">
            
            {/* Track Header */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-3xl bg-gradient-to-r from-cyan-500/10 to-blue-500/5 border border-cyan-500/30 backdrop-blur-xl shadow-xl"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                    Internship Experience
                    <span className="text-xs font-mono font-normal text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/30">
                      {internships.length} Entries
                    </span>
                  </h3>
                  <p className="text-xs text-white/60 font-light">Real Industry Work & Hands-on Deliverables</p>
                </div>
              </div>
              <p className="text-xs text-white/50 font-light leading-relaxed mt-2 border-t border-cyan-500/10 pt-3">
                Hands-on industry experience gained through real-world software development, architecture, UI/UX optimization, and technical reporting.
              </p>
            </motion.div>

            {/* Cards List */}
            {internships.length > 0 ? (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-6"
              >
                {internships.map((item) => (
                  <motion.div key={item.id} variants={itemVariants}>
                    <JourneyCard
                      certificate={item}
                      onClick={() => setActiveCertificate(item)}
                      onHoverStateChange={(isHovered) => setHoveredBranch(isHovered ? "internship" : null)}
                    />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <div className="p-8 text-center bg-white/[0.01] rounded-2xl border border-white/5 text-white/40 text-xs">
                No matching internship entries found.
              </div>
            )}

          </div>
        )}

        {/* Track 2: 📜 Course Completed Certificates (Purple / Emerald Theme) */}
        {showCourses && (
          <div className="flex flex-col space-y-6">
            
            {/* Track Header */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-3xl bg-gradient-to-r from-purple-500/10 to-emerald-500/5 border border-purple-500/30 backdrop-blur-xl shadow-xl"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                    Course Certifications
                    <span className="text-xs font-mono font-normal text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded-full border border-purple-500/30">
                      {courses.length} Credentials
                    </span>
                  </h3>
                  <p className="text-xs text-white/60 font-light">Continuous Learning & Technical Training</p>
                </div>
              </div>
              <p className="text-xs text-white/50 font-light leading-relaxed mt-2 border-t border-purple-500/10 pt-3">
                Professional certifications and specialized training programs completed across React, Java, SQL databases, and leadership workshops.
              </p>
            </motion.div>

            {/* Cards List */}
            {courses.length > 0 ? (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-6"
              >
                {courses.map((item) => (
                  <motion.div key={item.id} variants={itemVariants}>
                    <JourneyCard
                      certificate={item}
                      onClick={() => setActiveCertificate(item)}
                      onHoverStateChange={(isHovered) => setHoveredBranch(isHovered ? "course" : null)}
                    />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <div className="p-8 text-center bg-white/[0.01] rounded-2xl border border-white/5 text-white/40 text-xs">
                No matching course credentials found.
              </div>
            )}

          </div>
        )}

      </div>

      {/* Trust Strip */}
      <div className="mt-24 relative z-10 flex flex-col items-center justify-center text-center">
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-cyan-500/50 to-purple-500/50 mb-6" />
        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary mb-2">
          Committed to Continuous Learning & Real Impact
        </p>
        <p className="text-white/60 font-light max-w-lg leading-relaxed text-xs md:text-sm">
          Bridging academic knowledge with real-world engineering excellence through continuous practice and industry internships.
        </p>
        <div className="w-px h-12 bg-gradient-to-t from-transparent via-cyan-500/50 to-purple-500/50 mt-6" />
      </div>

      {/* Modal Integration */}
      <CertificateModal 
        certificate={activeCertificate} 
        onClose={() => setActiveCertificate(null)} 
      />

    </div>
  );
}
