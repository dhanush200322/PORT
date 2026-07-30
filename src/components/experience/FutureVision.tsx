"use client";

import { FUTURE_VISION } from "./ExperienceData";

export default function FutureVision() {
  return (
    <div className="flex flex-col justify-center items-start w-[450px] md:w-[600px] h-full shrink-0 px-8">
      <div className="w-full relative bg-primary/10 border border-primary/20 rounded-3xl p-8 md:p-12 overflow-hidden shadow-[0_0_50px_rgba(var(--primary),0.1)]">
        {/* Glow behind */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-50 blur-3xl" />
        
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
            {FUTURE_VISION.title}
          </h2>
          <p className="text-lg text-primary font-medium mb-8">
            {FUTURE_VISION.subtitle}
          </p>
          
          <ul className="space-y-4 mb-10">
            {FUTURE_VISION.focusAreas.map((focus, i) => (
              <li key={i} className="flex items-center gap-3 text-white/80 font-light text-lg">
                <span className="text-primary mt-0.5">🚀</span>
                {focus}
              </li>
            ))}
          </ul>

          <div className="pt-8 border-t border-primary/20">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/40 mb-2">Next Goal</p>
            <p className="text-xl text-white/90 font-light leading-relaxed">
              {FUTURE_VISION.nextGoal}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
