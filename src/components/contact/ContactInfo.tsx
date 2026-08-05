"use client";

import { motion } from "framer-motion";
import { CheckCircle2, MapPin, Clock, ExternalLink } from "lucide-react";

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
        <motion.a
          href="https://maps.app.goo.gl/6mZ6vqCc8J56rRA1A"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ y: -4 }}
          className="group p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-primary/40 hover:bg-white/[0.04] flex flex-col justify-between transition-all duration-500 hover:shadow-[0_8px_30px_rgba(59,130,246,0.12)] relative overflow-hidden cursor-pointer min-h-[160px]"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-300 shadow-md">
                <MapPin className="w-5 h-5" />
              </div>
              <ExternalLink className="w-4 h-4 text-white/30 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
            </div>
            <p className="text-white font-bold text-sm mb-1 group-hover:text-primary transition-colors">Salem, Tamil Nadu</p>
            <p className="text-white/50 text-xs">India (IST UTC +5:30)</p>
          </div>

          <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-medium text-primary/80 group-hover:text-primary transition-colors">
            <span>Open Google Maps</span>
            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </motion.a>

        {/* Response Time Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 flex flex-col justify-between min-h-[160px]"
        >
          <div>
            <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4 shadow-md">
              <Clock className="w-5 h-5" />
            </div>
            <p className="text-white/50 text-xs mb-1">Usually replies within</p>
            <p className="text-white font-bold text-sm">24 Hours</p>
          </div>

          <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-medium text-emerald-400">
            <span>Fast Response Rate</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </div>
        </motion.div>
      </div>

    </div>
  );
}
