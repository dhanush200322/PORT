export type ServiceItem = {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: string; // Lucide icon name
  technologies: string[];
  illustration: string[]; // Steps for the background illustration (e.g. ['Frontend', 'API', 'Database'])
};

export type ProcessItem = {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: string;
};

export type TrustItem = {
  id: string;
  title: string;
  description: string;
  icon: string; // Lucide icon name
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "full-stack",
    number: "01",
    title: "Full Stack Development",
    description: "Build fast, scalable and responsive web applications using modern frontend and backend technologies.",
    icon: "Globe",
    technologies: ["Next.js", "React.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "PostgreSQL"],
    illustration: ["Frontend", "API", "Database"]
  },
  {
    id: "ai-agents",
    number: "02",
    title: "AI Agents & Automation",
    description: "Develop AI-powered assistants, workflow automation, intelligent chatbots and business automation systems.",
    icon: "Bot",
    technologies: ["OpenAI", "Groq", "RAG", "LangChain", "n8n", "MCP"],
    illustration: ["AI", "Workflow", "Automation"]
  },
  {
    id: "business-automation",
    number: "03",
    title: "Business Process Automation",
    description: "Automate repetitive workflows and integrate business tools to improve productivity and operational efficiency.",
    icon: "Workflow",
    technologies: ["n8n", "GoHighLevel", "REST APIs", "CRM", "Webhooks", "Automation"],
    illustration: ["Trigger", "Logic", "Action"]
  },
  {
    id: "crm-dashboards",
    number: "04",
    title: "CRM & Dashboard Solutions",
    description: "Design and develop powerful dashboards, admin panels and CRM systems for data-driven businesses.",
    icon: "BarChart3",
    technologies: ["React", "Next.js", "Charts", "Analytics", "Supabase", "PostgreSQL"],
    illustration: ["Users", "Pipeline", "Analytics"]
  },
  {
    id: "cloud-deployment",
    number: "05",
    title: "Cloud Deployment",
    description: "Deploy scalable applications with secure infrastructure, optimized performance and modern DevOps practices.",
    icon: "Cloud",
    technologies: ["Vercel", "Render", "Docker", "GitHub", "CI/CD", "Cloud Hosting"],
    illustration: ["Code", "Build", "Deploy"]
  },
  {
    id: "api-integration",
    number: "06",
    title: "API Integration",
    description: "Connect third-party services, payment gateways and external platforms through secure API integrations.",
    icon: "Link2",
    technologies: ["REST API", "JWT", "OAuth", "Razorpay", "Resend", "Webhooks"],
    illustration: ["Request", "Auth", "Response"]
  }
];

export const PROCESS_DATA: ProcessItem[] = [
  { id: "discovery", number: "01", title: "Discovery", description: "Understanding requirements, defining goals, and mapping out the technical strategy.", icon: "Search" },
  { id: "planning", number: "02", title: "Planning", description: "Architecting the solution, selecting the right stack, and creating the project roadmap.", icon: "ClipboardList" },
  { id: "development", number: "03", title: "Development", description: "Writing clean, scalable code with continuous integration and iterative feedback.", icon: "Code2" },
  { id: "delivery", number: "04", title: "Delivery", description: "Deploying the final product, monitoring performance, and providing long-term support.", icon: "Rocket" }
];

export const TRUST_DATA: TrustItem[] = [
  {
    id: "modern-stack",
    title: "Modern Stack",
    description: "Building with the latest frameworks and tools.",
    icon: "Layers3"
  },
  {
    id: "business-first",
    title: "Business-First Development",
    description: "Technology that solves real business problems.",
    icon: "Target"
  },
  {
    id: "scalable",
    title: "Scalable Architecture",
    description: "Fast, optimized and highly scalable applications.",
    icon: "Zap"
  },
  {
    id: "clean-code",
    title: "Clean Maintainable Code",
    description: "Long-term support and continuous improvements.",
    icon: "ShieldCheck"
  }
];
