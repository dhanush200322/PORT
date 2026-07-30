"use client";

import { motion } from "framer-motion";
import { SOCIAL_LINKS } from "./ContactData";
import { ExternalLink, FileText, Mail } from "lucide-react";

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4"></path>
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const GumroadIcon = () => (
  <svg viewBox="0 0 500 500" className="w-5 h-5" fill="currentColor">
    <path d="M250,0C111.9,0,0,111.9,0,250s111.9,250,250,250s250-111.9,250-250S388.1,0,250,0z M353.6,353.6 c-28.7,28.7-66.8,44.5-107.4,44.5c-40.6,0-78.7-15.8-107.4-44.5c-28.7-28.7-44.5-66.8-44.5-107.4c0-40.6,15.8-78.7,44.5-107.4 c28.7-28.7,66.8-44.5,107.4-44.5c40.6,0,78.7,15.8,107.4,44.5c28.7,28.7,44.5,66.8,44.5,107.4C398.1,286.7,382.3,324.9,353.6,353.6 z M246.2,165.7c-44,0-79.6,35.7-79.6,79.6s35.7,79.6,79.6,79.6s79.6-35.7,79.6-79.6S290.2,165.7,246.2,165.7z M287.4,263.3 c-9.9,9.9-23.1,15.3-37.1,15.3c-14,0-27.2-5.5-37.1-15.3c-9.9-9.9-15.3-23.1-15.3-37.1c0-14,5.5-27.2,15.3-37.1 c9.9-9.9,23.1-15.3,37.1-15.3c14,0,27.2,5.5,37.1,15.3c9.9,9.9,15.3,23.1,15.3,37.1C302.7,240.2,297.3,253.4,287.4,263.3z"></path>
  </svg>
);

const getIcon = (id: string) => {
  switch (id) {
    case 'github': return <GithubIcon />;
    case 'linkedin': return <LinkedinIcon />;
    case 'gumroad': return <GumroadIcon />;
    case 'resume': return <FileText className="w-5 h-5" />;
    case 'email': return <Mail className="w-5 h-5" />;
    default: return <ExternalLink className="w-5 h-5" />;
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
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 group-hover:text-primary group-hover:bg-primary/10 transition-colors duration-500">
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
