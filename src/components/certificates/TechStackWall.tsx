"use client";

import { motion } from "framer-motion";

// Official Brand Icons
const ReactIcon = () => (
  <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-5 h-5 text-[#61DAFB]">
    <circle cx="0" cy="0" r="2.05" fill="currentColor" />
    <g stroke="currentColor" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

const NextjsIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
    <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm4.5 17.5L8 7.3V16H6.5V6.5h1.8l8.5 10.2V6.5h1.5v11h-1.8z" />
  </svg>
);

const TypeScriptIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5">
    <rect width="24" height="24" rx="4" fill="#3178C6" />
    <path d="M11.3 18v-1.7H9.2V9.8H7.3V8.1h5.8v1.7h-1.9v6.5h2.1V18h-2zm3.3-1.6c.6.4 1.4.6 2.2.6 1.3 0 2.1-.6 2.1-1.5 0-.9-.6-1.3-2.1-1.8-1.9-.6-2.9-1.3-2.9-2.9 0-1.8 1.4-3 3.6-3 1 0 1.9.2 2.6.6l-.7 1.5c-.6-.3-1.3-.5-2-.5-1.2 0-1.8.6-1.8 1.3 0 .8.6 1.2 2 1.7 2 .7 3 1.4 3 3 0 1.9-1.5 3.1-3.9 3.1-1.2 0-2.3-.3-3.1-.8l.7-1.5z" fill="white" />
  </svg>
);

const NodejsIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#5FA04E]">
    <path d="M12 1.837a1.8 1.8 0 0 0-.9.245L2.7 6.907a1.8 1.8 0 0 0-.9.9v9.6c0 .373.1.737.3 1.05l.6.9c.2.3.5.5.9.7l8.4 4.825c.273.155.584.238.9.245.316-.007.627-.09.9-.245l8.4-4.825c.4-.2.7-.4.9-.7l.6-.9c.2-.313.3-.677.3-1.05v-9.6a1.8 1.8 0 0 0-.9-.9L12.9 2.082a1.8 1.8 0 0 0-.9-.245zM12 4.1l6.9 3.965-6.9 3.965-6.9-3.965L12 4.1zm-7.8 5.768L11.1 13.8v7.93l-6.9-3.965v-7.897zm15.6 0v7.897l-6.9 3.965v-7.93l6.9-3.965z"/>
  </svg>
);

const ExpressIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
    <path d="M24 12.5c0 4.1-2.9 7.5-6.8 8.3v-2.1c2.8-.7 4.8-3.2 4.8-6.2 0-3.6-2.9-6.5-6.5-6.5S9 8.9 9 12.5c0 1.2.3 2.3.9 3.3l-1.5 1.5C7.4 16 7 14.3 7 12.5 7 7.8 10.8 4 15.5 4S24 7.8 24 12.5zM1.5 8h4v1.5h-4V8zm0 4h5v1.5h-5V12zm0 4h3v1.5h-3V16z"/>
  </svg>
);

const MongoIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#47A248]">
    <path d="M12 1.5c-.3 0-.6.1-.8.4C9.5 4.3 4.5 11.2 4.5 15.5c0 4.1 3.4 7.5 7.5 7.5s7.5-3.4 7.5-7.5c0-4.3-5-11.2-6.7-13.6-.2-.3-.5-.4-.8-.4zm0 2.6c2.4 3.7 5.5 9.4 5.5 11.4 0 3-2.5 5.5-5.5 5.5S6.5 18.5 6.5 15.5c0-2 3.1-7.7 5.5-11.4zM12 6v14c.2-.2.5-.5.7-.9.6-1 1.8-3.4 1.8-6.1 0-3.1-1.7-6-2.5-7z"/>
  </svg>
);

const PostgresIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#4169E1]">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm.88 15.66c-1.84.44-3.6-.45-4.45-1.73-.85-1.28-.7-3.05.37-4.22 1.07-1.17 2.76-1.57 4.34-1.03.62.21 1.18.57 1.63 1.03.45.46.77 1.03.93 1.66.16.63.14 1.3-.06 1.92-.2.62-.57 1.17-1.07 1.59s-1.11.66-1.69.78zm-3.04-5.32c-.39.42-.51 1.03-.31 1.55.2.52.68.88 1.24.93.56.05 1.1-.22 1.38-.7.28-.48.24-1.08-.1-1.52-.34-.44-.92-.61-1.44-.43-.52.18-.87.65-.77 1.17z"/>
  </svg>
);

const DockerIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#2496ED]">
    <path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.186v1.887c0 .102.083.185.185.185zm-2.954-2.257h2.118a.185.185 0 0 0 .186-.186V6.748a.185.185 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.887c0 .102.083.186.185.186zm0 2.257h2.118a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.118a.185.185 0 0 0-.185.186v1.887c0 .102.083.185.185.185zm-2.954 0h2.118a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186H8.075a.185.185 0 0 0-.185.186v1.887c0 .102.083.185.185.185zm0-2.257h2.118a.185.185 0 0 0 .186-.186V6.748a.185.185 0 0 0-.186-.185H8.075a.185.185 0 0 0-.185.185v1.887c0 .102.083.186.185.186zm-2.955 0h2.119a.185.185 0 0 0 .185-.186V6.748a.185.185 0 0 0-.185-.185H5.12a.185.185 0 0 0-.185.185v1.887c0 .102.083.186.185.186zm0 2.257h2.119a.186.186 0 0 0 .185-.185V9.006a.186.186 0 0 0-.185-.186H5.12a.185.185 0 0 0-.185.186v1.887c0 .102.083.185.185.185zm-2.954 0h2.119a.186.186 0 0 0 .185-.185V9.006a.186.186 0 0 0-.185-.186H2.166a.185.185 0 0 0-.185.186v1.887c0 .102.083.185.185.185zm0-2.257h2.119a.185.185 0 0 0 .185-.186V6.748a.185.185 0 0 0-.185-.185H2.166a.185.185 0 0 0-.185.185v1.887c0 .102.083.186.185.186zM.075 12.871c.075.485.457.868.918 1.02 2.689.886 6.804.886 9.493 0 .461-.152.843-.535.918-1.02.165-1.066.165-2.155 0-3.221-.075-.485-.457-.868-.918-1.02-2.689-.886-6.804-.886-9.493 0-.461.152-.843.535-.918 1.02-.165 1.066-.165 2.155 0 3.221z"/>
  </svg>
);

const RedisIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#DC382D]">
    <path d="M22.75 14.542l-9.58-4.106a2.75 2.75 0 0 0-2.34 0l-9.58 4.106A1.25 1.25 0 0 0 0 15.694v2.556c0 .502.302.953.766 1.144l9.58 3.931a3.75 3.75 0 0 0 2.808 0l9.58-3.931A1.25 1.25 0 0 0 23.5 18.25v-2.556a1.25 1.25 0 0 0-.75-1.152zM12 21.364l-9-3.692v-1.637l9 3.857 9-3.857v1.637l-9 3.692zm10.75-9.864l-9.58-4.106a2.75 2.75 0 0 0-2.34 0l-9.58 4.106A1.25 1.25 0 0 0 0 12.694v.856l10.9-4.672a2.75 2.75 0 0 1 2.2 0l10.9 4.672v-.856a1.25 1.25 0 0 0-.75-1.152zM12 2.75a2.75 2.75 0 0 0-1.17.265L1.25 7.121A1.25 1.25 0 0 0 .5 8.273v.52l10.9-4.672a2.75 2.75 0 0 1 2.2 0l10.9 4.672v-.52a1.25 1.25 0 0 0-.75-1.152l-9.58-4.106A2.75 2.75 0 0 0 12 2.75z"/>
  </svg>
);

const SupabaseIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#3ECF8E]">
    <path d="M13.35 23.732c-.753.846-2.122.316-2.122-.821v-8.49H2.336c-1.396 0-2.16-1.626-1.26-2.697L10.65.268c.753-.846 2.122-.316 2.122.821v8.49h8.892c1.396 0 2.16 1.626 1.26 2.697l-9.574 11.456z"/>
  </svg>
);

const N8nIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#EA4B71]">
    <path d="M18.8 6a2.8 2.8 0 0 0-2.8 2.8c0 .3.05.6.14.88l-3.3 1.9a2.78 2.78 0 0 0-1.64-.53c-.63 0-1.2.21-1.65.57L6.2 9.7a2.8 2.8 0 1 0-1.4 2.42l3.35 1.92a2.8 2.8 0 0 0 4.9 1.16l3.3-1.9c.45.36 1.02.57 1.65.57a2.8 2.8 0 1 0 0-5.6z"/>
  </svg>
);

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const VercelIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
    <path d="M12 1L24 22H0L12 1z"/>
  </svg>
);

const TECH_ITEMS = [
  { name: "React", icon: ReactIcon },
  { name: "Next.js", icon: NextjsIcon },
  { name: "TypeScript", icon: TypeScriptIcon },
  { name: "Node.js", icon: NodejsIcon },
  { name: "Express.js", icon: ExpressIcon },
  { name: "MongoDB", icon: MongoIcon },
  { name: "PostgreSQL", icon: PostgresIcon },
  { name: "Docker", icon: DockerIcon },
  { name: "Redis", icon: RedisIcon },
  { name: "Supabase", icon: SupabaseIcon },
  { name: "n8n", icon: N8nIcon },
  { name: "GitHub", icon: GithubIcon },
  { name: "Vercel", icon: VercelIcon },
];

export default function TechStackWall() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-32 relative z-10 border-t border-white/5 bg-gradient-to-b from-transparent to-black/20">
      
      <div className="text-center mb-16">
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary mb-4 block">
          Technical Arsenal
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
          Tools of the Trade
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-4 md:gap-5">
        {TECH_ITEMS.map((item, i) => {
          const IconComponent = item.icon;
          return (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="group flex items-center gap-3 px-5 py-3 md:px-7 md:py-3.5 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:border-primary/50 hover:bg-white/[0.05] transition-all duration-300 cursor-default"
            >
              <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300 shadow-sm">
                <IconComponent />
              </div>
              <span className="text-white/80 font-medium md:text-base tracking-wide group-hover:text-white transition-colors">
                {item.name}
              </span>
            </motion.div>
          );
        })}
      </div>

    </div>
  );
}

