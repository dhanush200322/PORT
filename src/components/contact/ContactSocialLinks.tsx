"use client";

import { motion } from "framer-motion";
import { SOCIAL_LINKS } from "./ContactData";
import { ExternalLink } from "lucide-react";

// Official Brand Icons
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#0A66C2]">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.6 1.6 0 0 0-1.61 1.6c0 .88.71 1.6 1.61 1.6.89 0 1.6-.72 1.6-1.6 0-.89-.71-1.6-1.6-1.6Z" />
  </svg>
);

const GumroadIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#FF90E8]">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5c1.4 0 2.6.6 3.4 1.6l-1.5 1.1c-.5-.6-1.1-1-1.9-1-1.4 0-2.5 1.1-2.5 2.8s1.1 2.8 2.5 2.8c1.1 0 1.9-.6 2.3-1.4h-2.3v-1.8h4.2v4.8c-.9.9-2.3 1.7-4.2 1.7z" />
  </svg>
);

const ResumeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-[#38BDF8]" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <line x1="10" y1="9" x2="8" y2="9" />
  </svg>
);

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5">
    <path fill="#EA4335" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

const getIcon = (id: string) => {
  switch (id) {
    case 'github': return <GithubIcon />;
    case 'linkedin': return <LinkedinIcon />;
    case 'gumroad': return <GumroadIcon />;
    case 'resume': return <ResumeIcon />;
    case 'email': return <EmailIcon />;
    default: return <ExternalLink className="w-5 h-5 text-white/70" />;
  }
};

export default function ContactSocialLinks() {
  return (
    <div className="flex flex-col gap-4 mt-12">
      
      <h4 className="text-white font-bold text-lg mb-2">Professional Profiles</h4>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {SOCIAL_LINKS.map((link, idx) => {
          return (
            <motion.a
              key={link.id}
              href={link.url}
              download={link.id === 'resume' ? true : undefined}
              target={link.id === 'resume' ? undefined : "_blank"}
              rel={link.id === 'resume' ? undefined : "noopener noreferrer"}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="group flex flex-col p-5 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-500 hover:shadow-xl relative overflow-hidden"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/70 group-hover:bg-white/10 group-hover:scale-105 transition-all duration-500 shadow-md">
                  {getIcon(link.id)}
                </div>
                <ExternalLink className="w-4 h-4 text-white/20 group-hover:text-white/70 transition-colors duration-500" />
              </div>
              
              <h5 className="text-white font-bold text-sm mb-1">{link.name}</h5>
              <p className="text-white/40 text-xs">{link.description}</p>
            </motion.a>
          );
        })}
      </div>

    </div>
  );
}

