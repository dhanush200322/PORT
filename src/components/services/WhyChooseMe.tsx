"use client";

import { motion } from "framer-motion";
import { TRUST_DATA } from "./ServicesData";
import * as LucideIcons from "lucide-react";

export default function WhyChooseMe() {
  return (
    <div className="relative w-full container-xl py-24 border-t border-white/5">
      
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-20 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-[var(--text-h2)] font-bold text-white tracking-tight mb-4">
            Why Choose Me?
          </h3>
          <p className="text-white/50 text-lg max-w-lg">
            A reliable partner for delivering high-quality digital products.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {TRUST_DATA.map((item, idx) => {
          const IconComponent = (LucideIcons as any)[item.icon] || LucideIcons.CheckCircle;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-colors duration-500"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-500">
                <IconComponent className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">
                {item.title}
              </h4>
              <p className="text-sm text-white/50 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </div>

    </div>
  );
}
