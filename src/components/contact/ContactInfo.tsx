"use client";

import { motion } from "framer-motion";
import { CheckCircle2, MapPin, Clock } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-6">
      
      {/* Availability Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 flex flex-col"
      >
        <div className="flex items-center justify-between mb-6">
          <h4 className="text-white font-bold text-lg">Available For</h4>
          <div className="flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] font-semibold text-emerald-400 uppercase tracking-widest">Available</span>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          {["Full-Time Opportunities", "Freelance Projects", "Contract Work", "Remote Collaboration"].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 text-white/70 text-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-400/80" />
              {item}
            </div>
          ))}
        </div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Location Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 flex flex-col"
        >
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
            <MapPin className="w-5 h-5" />
          </div>
          <p className="text-white font-semibold text-sm mb-1">Salem, Tamil Nadu</p>
          <p className="text-white/50 text-xs">India (IST UTC +5:30)</p>
        </motion.div>

        {/* Response Time Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 flex flex-col"
        >
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
            <Clock className="w-5 h-5" />
          </div>
          <p className="text-white/50 text-xs mb-1">Usually replies within</p>
          <p className="text-white font-semibold text-sm">24 Hours</p>
        </motion.div>
      </div>

    </div>
  );
}
