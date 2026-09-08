"use client";

import { motion } from "framer-motion";
import { Filter, Database, Workflow, Cpu, ArrowUpRight } from "lucide-react";

interface GhlWorkCategory {
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  badge: string;
}

const WORK_CATEGORIES: GhlWorkCategory[] = [
  {
    title: "Funnels & Lead Capture",
    description: "Landing pages, forms, lead capture flows and conversion-focused funnel structures engineered for high lead conversion.",
    icon: Filter,
    color: "from-purple-600 to-indigo-600",
    badge: "Funnels & Forms",
  },
  {
    title: "CRM & Pipeline Automation",
    description: "Lead organization, pipeline stages, opportunity tracking and automated status updates across custom sales pipelines.",
    icon: Database,
    color: "from-violet-600 to-purple-600",
    badge: "CRM Pipelines",
  },
  {
    title: "Workflow Automation",
    description: "Trigger-based workflows, multi-channel email/SMS sequences, appointment reminders and automated lead nurturing campaigns.",
    icon: Workflow,
    color: "from-fuchsia-600 to-pink-600",
    badge: "Trigger Workflows",
  },
  {
    title: "Integrations & AI Automation",
    description: "Webhooks, REST APIs, n8n orchestrations and AI-assisted workflows built for reducing repetitive manual tasks.",
    icon: Cpu,
    color: "from-pink-600 to-rose-600",
    badge: "n8n & AI APIs",
  },
];

export default function GhlWorkGrid() {
  return (
    <div className="w-full max-w-5xl mx-auto mb-16">
      
      {/* Subsection Tag */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-2 mb-4"
      >
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#EC4899] font-bold">
          02 — GHL WORK
        </span>
        <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] animate-pulse" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mb-10"
      >
        <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
          Practical GoHighLevel Systems & Automations
        </h3>
        <p className="text-sm sm:text-base text-gray-400 font-light max-w-2xl">
          A breakdown of the core GoHighLevel solutions, workflows, and integrations built around real business processes.
        </p>
      </motion.div>

      {/* 4 Work Category Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {WORK_CATEGORIES.map((cat, idx) => {
          const IconComponent = cat.icon;

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="group relative rounded-2xl bg-white/[0.02] border border-purple-500/20 hover:border-purple-500/50 p-6 md:p-7 transition-all duration-300 shadow-[0_4px_25px_rgba(0,0,0,0.3)] hover:shadow-[0_10px_35px_rgba(139,92,246,0.15)] flex flex-col justify-between"
            >
              {/* Card Header */}
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${cat.color} text-white shadow-md group-hover:scale-105 transition-transform`}>
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <span className="text-[10px] font-mono uppercase tracking-wider text-purple-300/80 px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 font-semibold">
                    {cat.badge}
                  </span>
                </div>

                <h4 className="text-xl font-bold text-white mb-2.5 group-hover:text-purple-300 transition-colors">
                  {cat.title}
                </h4>

                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light mb-6">
                  {cat.description}
                </p>
              </div>

              {/* Minimal Card Footer */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-gray-500 group-hover:text-purple-400 transition-colors">
                <span>Production Work</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </motion.div>
          );
        })}
      </div>

    </div>
  );
}
