export interface ProjectMeta {
  year: string;
  role: string;
  context: string;
}

export interface ProjectCaseStudy {
  overview: string;
  problem: string;
  solution: string;
  architecture: string[];
  techStack: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  status: "LIVE" | "IN DEVELOPMENT" | "CLIENT PROJECT" | "PRIVATE" | "PROTOTYPE";
  isFeatured?: boolean;
  meta: ProjectMeta;
  technologies: string[];
  githubUrl: string | null;
  liveUrl: string | null;
  imageFallback: string;
  videoPreview: string;
  colSpanClasses: string; // Tailwind class for bento grid sizing
  caseStudy: ProjectCaseStudy;
}

export const PROJECTS_DATA: Project[] = [
  // 🚗 1. Car Rental Management System (Featured Full Stack App)
  {
    id: "car-rental-management-system",
    title: "Car Rental Management System",
    category: "Full Stack Web Application",
    shortDescription: "A modern full-stack car rental platform that enables users to browse available vehicles, view rental details, and manage reservations through a clean and responsive interface.",
    status: "LIVE",
    isFeatured: true,
    meta: {
      year: "2026",
      role: "Full Stack Developer",
      context: "Featured Project",
    },
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    githubUrl: null,
    liveUrl: "https://car-rental-management-system-alpha-rose.vercel.app/",
    imageFallback: "/projects/car-rental-management-system.webp",
    videoPreview: "",
    colSpanClasses: "col-span-1 md:col-span-2 lg:col-span-6", // Hero Featured Card
    caseStudy: {
      overview: "A comprehensive car rental platform engineered with modern full-stack web technologies to streamline vehicle booking, inventory management, and customer reservations.",
      problem: "Traditional rental businesses struggle with manual booking records, lack of real-time vehicle availability tracking, and fragmented customer management.",
      solution: "Built an automated web application offering dynamic vehicle browsing, real-time booking management, search and filtering algorithms, and interactive admin dashboards.",
      architecture: [
        "Frontend: React & TypeScript with responsive Tailwind CSS components.",
        "Backend: Node.js & Express RESTful APIs with MongoDB database persistence.",
        "Features: User authentication, vehicle search/filter, and booking state management."
      ],
      techStack: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"]
    }
  },
  // 🎓 2. Online Examination System (Featured Education Platform)
  {
    id: "online-examination-system",
    title: "Online Examination System",
    category: "Education Platform",
    shortDescription: "A comprehensive online examination platform with secure assessments, timer-based exams, result management, and an intuitive dashboard for students and administrators.",
    status: "LIVE",
    isFeatured: true,
    meta: {
      year: "2026",
      role: "Full Stack Developer",
      context: "Featured Project",
    },
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    githubUrl: null,
    liveUrl: "https://online-examnination.vercel.app/",
    imageFallback: "/projects/online-examination-system.webp",
    videoPreview: "",
    colSpanClasses: "col-span-1 md:col-span-1 lg:col-span-3",
    caseStudy: {
      overview: "An end-to-end online examination and assessment platform designed for educational institutions to conduct secure timer-bound tests and evaluate student performance.",
      problem: "Educators require secure, automated testing platforms that prevent unauthorized submission, enforce exam duration constraints, and calculate instant analytical reports.",
      solution: "Developed a robust examination engine with real-time timers, question bank management, automated grading, and dedicated analytics dashboards for students and admins.",
      architecture: [
        "Exam Engine: Timer-based client controller with instant state autosave.",
        "Admin Panel: Comprehensive portal for managing questions, tests, and student metrics.",
        "Database: MongoDB schemas optimized for relational student & exam data."
      ],
      techStack: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"]
    }
  },
  // 🎟️ 3. Event Booking Platform
  {
    id: "event-booking-platform",
    title: "Event Booking Platform",
    category: "Booking Platform",
    shortDescription: "A complete event booking platform allowing users to browse events, reserve tickets, and manage bookings through an intuitive and responsive interface.",
    status: "LIVE",
    meta: {
      year: "2025",
      role: "Full Stack Developer",
      context: "Production App",
    },
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express.js"],
    githubUrl: null,
    liveUrl: "https://booking-system-omega-eight.vercel.app/",
    imageFallback: "/projects/event-booking-platform.webp",
    videoPreview: "",
    colSpanClasses: "col-span-1 md:col-span-1 lg:col-span-3",
    caseStudy: {
      overview: "An interactive event management and ticketing platform allowing organizers to publish events and users to discover and book tickets seamlessly.",
      problem: "Event planners need an intuitive digital channel for ticket distribution, attendee verification, and booking management without steep third-party platform fees.",
      solution: "Engineered an event ticketing portal featuring real-time event discovery, seat/ticket reservations, user account management, and responsive UI screens.",
      architecture: [
        "Frontend: React single page application with Tailwind CSS design tokens.",
        "Backend: Express.js API services handling ticket reservation workflows."
      ],
      techStack: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express.js"]
    }
  },
  // ☕ 4. Cafe Website
  {
    id: "cafe-website",
    title: "Cafe Website",
    category: "Business Website",
    shortDescription: "A modern café website designed to provide an engaging digital experience with beautiful product showcases, menu presentation, and responsive layouts.",
    status: "LIVE",
    meta: {
      year: "2025",
      role: "Frontend Developer",
      context: "Client Delivery",
    },
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: null,
    liveUrl: "https://cafe-website-one-tau.vercel.app/",
    imageFallback: "/projects/cafe-website.webp",
    videoPreview: "",
    colSpanClasses: "col-span-1 md:col-span-1 lg:col-span-3",
    caseStudy: {
      overview: "A visually rich landing page and digital menu application created for a boutique coffee house to enhance online brand presence and customer engagement.",
      problem: "Boutique cafes need an aesthetic, mobile-first web presence to highlight signature offerings, daily specials, and location information.",
      solution: "Delivered a high-conversion, beautifully animated web application with interactive menu navigation and location details.",
      architecture: [
        "Client: React & TypeScript application with fluid Framer Motion animations.",
        "Styling: Custom Tailwind CSS utilities for dark/light glassmorphism ambiance."
      ],
      techStack: ["React", "TypeScript", "Tailwind CSS"]
    }
  },
  {
    id: "nexora-ai",
    title: "Nexora AI",
    category: "AI SaaS Platform",
    shortDescription: "An AI-powered multi-agent platform for building intelligent chatbots with authentication, payments, knowledge bases, and scalable backend architecture.",
    status: "LIVE",
    meta: {
      year: "2026",
      role: "AI SaaS Platform",
      context: "Production Ready",
    },
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Express.js", "Redis", "Docker", "JWT", "Groq API", "Razorpay"],
    githubUrl: null,
    liveUrl: "https://ai-agent-pohw.vercel.app/",
    imageFallback: "/logonex.png",
    videoPreview: "",
    colSpanClasses: "col-span-1 md:col-span-1 lg:col-span-3",
    caseStudy: {
      overview: "Nexora AI is a comprehensive SaaS platform that allows businesses to instantly deploy multi-agent AI chatbots. It handles the entire lifecycle from knowledge ingestion to conversation generation.",
      problem: "Businesses struggle to build custom AI assistants because it requires integrating separate services for LLMs, vector databases, billing, and frontend interfaces.",
      solution: "Developed an all-in-one platform where users can upload documents, train agents, and embed them onto their websites with zero code, protected by a robust authentication and payment gateway.",
      architecture: [
        "Frontend: Next.js App Router for SEO and performance.",
        "Backend: Node.js/Express.js microservices.",
        "AI Engine: LangChain with Groq API for ultra-low latency.",
        "Infrastructure: Dockerized containers orchestrated on AWS."
      ],
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Express.js", "Redis", "Docker", "JWT", "Groq API", "Resend API", "Razorpay"]
    }
  },
  {
    id: "av-care-os",
    title: "AV Care OS",
    category: "Enterprise AI Healthcare",
    shortDescription: "An enterprise healthcare operating system powered by AI for monitoring, hospital management, and intelligent medical workflows.",
    status: "LIVE",
    meta: {
      year: "2025",
      role: "Enterprise Healthcare",
      context: "Production Ready",
    },
    technologies: ["React", "Tailwind CSS", "Supabase", "AI Agents"],
    githubUrl: null,
    liveUrl: "https://av-care-os.vercel.app/",
    imageFallback: "/avcareos.png",
    videoPreview: "",
    colSpanClasses: "col-span-1 md:col-span-1 lg:col-span-3",
    caseStudy: {
      overview: "AV Care OS modernizes hospital workflows by integrating patient monitoring, appointment scheduling, and AI-assisted diagnoses into a single unified dashboard.",
      problem: "Legacy hospital systems are fragmented, causing data silos and slowing down critical medical decisions.",
      solution: "Engineered a centralized, real-time operating system that consolidates patient data and provides AI-driven insights to healthcare professionals.",
      architecture: [
        "Client: React single-page application with responsive Tailwind design.",
        "Database: Supabase for real-time Postgres and authentication.",
        "AI: Integrated diagnostic assistance agents."
      ],
      techStack: ["React", "Tailwind CSS", "Supabase", "PostgreSQL", "React Query"]
    }
  },
  {
    id: "notebook-ai",
    title: "Notebook AI",
    category: "AI Research Platform",
    shortDescription: "An AI-powered research assistant helping professionals organize, summarize, and interact with knowledge intelligently.",
    status: "LIVE",
    meta: {
      year: "2025",
      role: "Productivity SaaS",
      context: "Production Ready",
    },
    technologies: ["React", "Tailwind", "Supabase", "Groq API", "Stripe"],
    githubUrl: null,
    liveUrl: "https://notebook-llm-space-myfb.vercel.app/",
    imageFallback: "/notebookai.png",
    videoPreview: "",
    colSpanClasses: "col-span-1 md:col-span-1 lg:col-span-3",
    caseStudy: {
      overview: "Notebook AI transforms static notes into an interactive, intelligent knowledge base.",
      problem: "Students and researchers waste hours manually summarizing documents and searching through disparate notes.",
      solution: "Built a platform that uses RAG (Retrieval-Augmented Generation) to let users 'chat' directly with their uploaded documents.",
      architecture: [
        "Auth & DB: Supabase.",
        "AI: Groq API for rapid LLM inference.",
        "Payments: Stripe integration for premium tiers."
      ],
      techStack: ["React", "Tailwind CSS", "Supabase", "Groq API", "Stripe"]
    }
  },
  {
    id: "finance-tracker",
    title: "Finance Tracker",
    category: "FinTech Platform",
    shortDescription: "An enterprise-grade financial portfolio tracker with real-time analytics, investment tracking, and responsive dashboards.",
    status: "CLIENT PROJECT",
    meta: {
      year: "2024",
      role: "FinTech App",
      context: "Enterprise Scale",
    },
    technologies: ["React", "NestJS", "PostgreSQL", "Prisma"],
    githubUrl: null,
    liveUrl: "https://finance-tracker-gules-nu.vercel.app/",
    imageFallback: "/tracker.png",
    videoPreview: "",
    colSpanClasses: "col-span-1 md:col-span-1 lg:col-span-3",
    caseStudy: {
      overview: "A comprehensive dashboard for high-net-worth individuals to track diverse financial portfolios in real-time.",
      problem: "Existing portfolio trackers lack the deep customization and security required by enterprise clients.",
      solution: "Developed a highly secure, performant application with complex data visualization and real-time market integrations.",
      architecture: [
        "Backend: NestJS for robust, scalable API architecture.",
        "ORM: Prisma with PostgreSQL.",
        "Frontend: React with advanced charting libraries."
      ],
      techStack: ["React", "NestJS", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS"]
    }
  },
  {
    id: "smart-home-rag",
    title: "Smart Home RAG",
    category: "AI Automation",
    shortDescription: "An AI-powered RAG chatbot for smart home automation with contextual responses and intelligent device management.",
    status: "PROTOTYPE",
    meta: {
      year: "2025",
      role: "IoT Automation",
      context: "Experimental Prototype",
    },
    technologies: ["React", "Node.js", "OpenAI API", "RAG"],
    githubUrl: "https://github.com/yourusername/smart-home-rag",
    liveUrl: null,
    imageFallback: "/ragchatbot.png",
    videoPreview: "",
    colSpanClasses: "col-span-1 md:col-span-1 lg:col-span-3",
    caseStudy: {
      overview: "An experimental chatbot that controls IoT devices using natural language and contextual memory.",
      problem: "Smart home assistants often lack context about the home's specific configuration and past states.",
      solution: "Implemented a RAG pipeline that feeds device state history and user preferences into the LLM context.",
      architecture: [
        "Backend: Node.js orchestrating IoT endpoints.",
        "AI: OpenAI API with vector similarity search.",
        "Frontend: React chat interface."
      ],
      techStack: ["React", "Node.js", "OpenAI API", "RAG", "Vector DB"]
    }
  },
  {
    id: "ngo-website",
    title: "NGO Website",
    category: "NGO Platform",
    shortDescription: "A responsive NGO website designed to showcase community initiatives, increase awareness, and improve supporter engagement.",
    status: "LIVE",
    meta: {
      year: "2023",
      role: "Public Platform",
      context: "Client Delivery",
    },
    technologies: ["HTML", "CSS", "JavaScript"],
    githubUrl: null,
    liveUrl: "https://in-amigos-website-tan.vercel.app/",
    imageFallback: "/InAmigos.jpeg",
    videoPreview: "",
    colSpanClasses: "col-span-1 md:col-span-2 lg:col-span-2",
    caseStudy: {
      overview: "A digital presence overhaul for a local NGO to drive donations and volunteer sign-ups.",
      problem: "The organization's previous site was non-responsive and difficult to navigate on mobile.",
      solution: "Built a fast, lightweight, and highly accessible static website optimized for mobile users.",
      architecture: [
        "Pure HTML/CSS/JS for maximum performance.",
        "Deployed on Vercel for global edge caching."
      ],
      techStack: ["HTML", "CSS", "JavaScript", "Responsive Design"]
    }
  },
  {
    id: "temple-gym",
    title: "Temple Gym",
    category: "Business Website",
    shortDescription: "A modern promotional website for a fitness center featuring responsive layouts and engaging user experiences.",
    status: "LIVE",
    meta: {
      year: "2023",
      role: "Business Landing Page",
      context: "Client Delivery",
    },
    technologies: ["HTML", "CSS", "JavaScript"],
    githubUrl: null,
    liveUrl: "https://temple-gym.netlify.app/",
    imageFallback: "/gym.png",
    videoPreview: "",
    colSpanClasses: "col-span-1 md:col-span-1 lg:col-span-2",
    caseStudy: {
      overview: "A high-conversion landing page designed for a local fitness center to attract new memberships.",
      problem: "The gym needed a strong online presence to compete with larger commercial chains.",
      solution: "Delivered a visually striking, fast-loading website with clear calls-to-action.",
      architecture: ["Static site hosted on Netlify."],
      techStack: ["HTML", "CSS", "JavaScript"]
    }
  },
  {
    id: "dm-healthy",
    title: "DM Healthy",
    category: "Health Platform",
    shortDescription: "A promotional health awareness website focused on delivering educational content to the global IT community.",
    status: "PRIVATE",
    meta: {
      year: "2024",
      role: "Content Platform",
      context: "Internal Project",
    },
    technologies: ["React", "CSS", "Firebase", "SQL"],
    githubUrl: null,
    liveUrl: "https://dailymessage-two.vercel.app/",
    imageFallback: "/WM.png",
    videoPreview: "",
    colSpanClasses: "col-span-1 md:col-span-1 lg:col-span-2",
    caseStudy: {
      overview: "An educational platform addressing health issues specific to IT professionals, like ergonomics and eye strain.",
      problem: "IT professionals lack centralized, targeted health resources.",
      solution: "Created a React-based content delivery platform with a Firebase backend for easy content management.",
      architecture: [
        "Frontend: React SPA.",
        "Backend/DB: Firebase."
      ],
      techStack: ["React", "CSS", "Firebase", "SQL"]
    }
  }
];

