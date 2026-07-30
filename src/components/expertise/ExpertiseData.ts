import { Monitor, Server, Database, Bot, Cloud, Wrench, Code2, Briefcase } from "lucide-react";

export interface TechItem {
  name: string;
  icon: string;
  isCore: boolean;
}

export interface ExpertiseCategory {
  title: string;
  description: string;
  icon: React.ElementType;
  technologies: TechItem[];
  size?: "large" | "normal"; // Used for bento grid hierarchy
}

export const EXPERTISE_DATA: ExpertiseCategory[] = [
  {
    title: "Frontend Engineering",
    description: "Designing fast, accessible, and scalable interfaces for modern web applications.",
    icon: Monitor,
    size: "large",
    technologies: [
      { name: "React.js", icon: "⚛", isCore: true },
      { name: "Next.js", icon: "▲", isCore: true },
      { name: "TypeScript", icon: "TS", isCore: true },
      { name: "JavaScript (ES6+)", icon: "JS", isCore: false },
      { name: "Tailwind CSS", icon: "🌊", isCore: false },
      { name: "HTML5", icon: "🌐", isCore: false },
      { name: "CSS3", icon: "🎨", isCore: false },
      { name: "Bootstrap", icon: "🅱", isCore: false },
    ],
  },
  {
    title: "AI & Automation",
    description: "Developing intelligent agents and advanced business automation workflows.",
    icon: Bot,
    size: "large",
    technologies: [
      { name: "AI Agents", icon: "🤖", isCore: true },
      { name: "n8n", icon: "⚙️", isCore: true },
      { name: "LangChain", icon: "🦜", isCore: true },
      { name: "RAG", icon: "🧠", isCore: true },
      { name: "GoHighLevel CRM", icon: "📈", isCore: false },
      { name: "Prompt Eng.", icon: "✍️", isCore: false },
      { name: "MCP", icon: "🔌", isCore: false },
    ],
  },
  {
    title: "Backend Engineering",
    description: "Designing secure REST APIs and scalable server-side architectures.",
    icon: Server,
    size: "normal",
    technologies: [
      { name: "Node.js", icon: "🟢", isCore: true },
      { name: "Express.js", icon: "🚂", isCore: true },
      { name: "Java", icon: "☕", isCore: false },
      { name: "REST APIs", icon: "🔗", isCore: false },
      { name: "JWT Auth", icon: "🔐", isCore: false },
    ],
  },
  {
    title: "Database Engineering",
    description: "Architecting efficient and scalable data storage solutions.",
    icon: Database,
    size: "normal",
    technologies: [
      { name: "MongoDB", icon: "🍃", isCore: true },
      { name: "PostgreSQL", icon: "🐘", isCore: true },
      { name: "Supabase", icon: "⚡", isCore: false },
    ],
  },
  {
    title: "Cloud & DevOps",
    description: "Deploying reliable production-ready applications to modern infrastructure.",
    icon: Cloud,
    size: "normal",
    technologies: [
      { name: "Git", icon: "🐙", isCore: true },
      { name: "GitHub", icon: "🐈", isCore: true },
      { name: "Vercel", icon: "▲", isCore: true },
      { name: "Netlify", icon: "💠", isCore: false },
      { name: "Render", icon: "☁️", isCore: false },
      { name: "CI/CD", icon: "🔄", isCore: false },
    ],
  },
  {
    title: "Business Solutions",
    description: "Building software products that solve real-world business problems.",
    icon: Briefcase,
    size: "normal",
    technologies: [
      { name: "CRM Automation", icon: "💼", isCore: false },
      { name: "Lead Automation", icon: "🎯", isCore: false },
      { name: "AI Chatbots", icon: "💬", isCore: false },
      { name: "Smart Home", icon: "🏠", isCore: false },
      { name: "WhatsApp Automation", icon: "📱", isCore: false },
    ],
  },
  {
    title: "Software Engineering",
    description: "Applying engineering principles for maintainable and secure codebases.",
    icon: Code2,
    size: "normal",
    technologies: [
      { name: "Clean Architecture", icon: "📐", isCore: false },
      { name: "Component Arch", icon: "🧩", isCore: false },
      { name: "Code Quality", icon: "✨", isCore: false },
      { name: "Optimization", icon: "🚀", isCore: false },
    ],
  },
  {
    title: "Development Tools",
    description: "Professional tooling used throughout the development lifecycle.",
    icon: Wrench,
    size: "normal",
    technologies: [
      { name: "VS Code", icon: "💻", isCore: false },
      { name: "Postman", icon: "🚀", isCore: false },
      { name: "Figma", icon: "🎨", isCore: false },
      { name: "Canva", icon: "🖌️", isCore: false },
    ],
  },
];
