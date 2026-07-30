export type ExperienceStage = {
  id: string;
  stage: string;
  icon: string;
  company: string;
  duration: string;
  role: string;
  responsibilities: string[];
  technologies: string[];
  cardSize: "small" | "medium" | "large" | "hero";
  caption?: string; // used for Student stage mainly
};

export const EXPERIENCE_DATA: ExperienceStage[] = [
  {
    id: "student",
    stage: "Student",
    icon: "🎓",
    company: "Modern Engineering College",
    duration: "Learning Phase",
    role: "Engineering Student",
    caption: "Learning the fundamentals of engineering, software development and problem solving.",
    responsibilities: [
      "Mastered data structures and algorithms",
      "Explored core web technologies",
      "Developed an analytical engineering mindset"
    ],
    technologies: ["C++", "Java", "HTML/CSS", "Basic JS"],
    cardSize: "small"
  },
  {
    id: "intern",
    stage: "Intern",
    icon: "💻",
    company: "Six Sigma Solutions",
    duration: "Sep 2025 — Dec 2025",
    role: "Frontend Web Developer Intern",
    responsibilities: [
      "Built responsive React applications",
      "Developed reusable UI components",
      "Improved frontend rendering performance",
      "Worked seamlessly with Git version control"
    ],
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "Git"],
    cardSize: "medium"
  },
  {
    id: "developer",
    stage: "Developer",
    icon: "⚙️",
    company: "URL Factory Pvt Ltd",
    duration: "Dec 2025 — Apr 2026",
    role: "Full Stack & Automation Developer",
    responsibilities: [
      "Architected Full Stack architectures",
      "Engineered robust API Integrations",
      "Designed CRM Automation systems",
      "Deployed n8n Workflow Automations",
      "Integrated early AI capabilities"
    ],
    technologies: ["React", "Node.js", "MongoDB", "PostgreSQL", "n8n", "GoHighLevel", "Express.js", "REST APIs"],
    cardSize: "large"
  },
  {
    id: "ai-engineer",
    stage: "AI Engineer",
    icon: "🤖",
    company: "Current Focus",
    duration: "Present",
    role: "Full Stack & AI Automation Engineer",
    responsibilities: [
      "Architecting AI Platforms & Agents",
      "Streamlining Business Automation",
      "Developing SaaS Products",
      "Implementing RAG Applications",
      "Scaling Enterprise Web Applications"
    ],
    technologies: ["Next.js", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "Supabase", "Docker", "Redis", "AI APIs"],
    cardSize: "hero"
  }
];

export const FUTURE_VISION = {
  title: "The Journey Continues",
  subtitle: "I'm currently focused on building:",
  focusAreas: [
    "AI Agents",
    "SaaS Platforms",
    "Enterprise Automation",
    "Intelligent Business Solutions",
    "Scalable Full Stack Applications"
  ],
  nextGoal: "Building products that create real-world impact."
};
