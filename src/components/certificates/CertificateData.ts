export type JourneyCategoryType = 'internship' | 'course' | 'achievement' | 'award';

export type CertificateItem = {
  id: string;
  title: string;
  organization: string;
  issuedDate: string;
  category: string;
  categoryType: JourneyCategoryType;
  duration?: string;
  isFeatured?: boolean;
  gridClass?: string;
  pdfPath: string;
  imagePath: string; // Thumbnail or full document for the certificate
  logoIcon: string;  // Lucide icon name for organization logo
  skills: string[];
  summary: string;
  highlights?: string[];
  contributions?: string[];
  status?: string;
  credentialId?: string;
  verifyUrl?: string;
};

export const CERTIFICATE_DATA: CertificateItem[] = [
  // 💼 Internship Experience Category
  {
    id: "inamigos-foundation",
    title: "Web Development Internship Certificate",
    organization: "InAmigos Foundation (IAF)",
    issuedDate: "2024",
    duration: "3 Months",
    category: "Web Development Internship",
    categoryType: "internship",
    isFeatured: true,
    pdfPath: "/certificates/inamigos-foundation-web-development-certificate.pdf",
    imagePath: "/certificates/inamigos-foundation-web-development-certificate.pdf",
    logoIcon: "Globe",
    skills: ["HTML", "CSS", "JavaScript", "Responsive Design", "UI/UX", "Documentation"],
    summary: "Successfully completed a Web Development Internship at InAmigos Foundation (IAF), contributing to responsive web development, website analysis, UI/UX improvements, technical documentation, and successful completion of all assigned internship tasks.",
    highlights: [
      "Developed responsive and user-friendly web pages.",
      "Improved website UI/UX through detailed analysis.",
      "Created technical documentation and project reports.",
      "Successfully completed all internship deliverables.",
      "Awarded official Internship Completion Certificate."
    ],
    contributions: [
      "Built responsive, component-driven UI pages.",
      "Performed detailed UX analysis and accessibility audit.",
      "Authored comprehensive technical documentation & project reports."
    ],
    status: "Completed ✅",
    credentialId: "IAF-WDI-2024-OFFICIAL",
    verifyUrl: ""
  },
  {
    id: "six-sigma",
    title: "Frontend Web Developer Internship",
    organization: "Six Sigma Solutions",
    issuedDate: "January 2026",
    duration: "4 Months",
    category: "Frontend Development",
    categoryType: "internship",
    isFeatured: true,
    pdfPath: "/certificates/six sigma solutions certificate.jpg",
    imagePath: "/certificates/six sigma solutions certificate.jpg",
    logoIcon: "Briefcase",
    skills: ["React.js", "Frontend Architecture", "Team Collaboration", "Git Workflow"],
    summary: "Successfully completed a rigorous internship focused on developing responsive, production-ready frontend components.",
    highlights: [
      "Architected responsive React UI components.",
      "Collaborated with cross-functional team in Agile workflow.",
      "Optimized frontend load performance and code quality."
    ],
    contributions: [
      "Engineered high-performance React UI components.",
      "Integrated REST APIs with state management."
    ],
    status: "Completed ✅",
    credentialId: "SSS-FWD-2026",
    verifyUrl: ""
  },
  {
    id: "internship-training",
    title: "Full Stack Developer & AI Automation",
    organization: "URL Factory",
    issuedDate: "2023",
    duration: "2 Months",
    category: "Full Stack & AI Automation",
    categoryType: "internship",
    pdfPath: "/certificates/Dhanush A V Internship  Experience letter.pdf",
    imagePath: "/certificates/six sigma solutions certificate.jpg",
    logoIcon: "Cpu",
    skills: ["React.js", "Node.js", "AI Automation", "Full Stack", "Python", "API Integration"],
    summary: "Contributed as a Full Stack Developer focusing on building scalable web applications, integrating AI automation workflows, and streamlining development lifecycle tasks.",
    highlights: [
      "Engineered full-stack web applications with modern frontend and backend frameworks.",
      "Integrated AI automation workflows to streamline business processes and task execution.",
      "Developed custom APIs and database integrations for real-world projects."
    ],
    contributions: [
      "Built end-to-end full stack features and responsive user interfaces.",
      "Designed AI automation pipelines for enhanced productivity."
    ],
    status: "Completed ✅",
    credentialId: "URLF-FSD-AI-2023"
  },

  // 📜 Course Completed Certificates Category
  {
    id: "react-js",
    title: "React JS Training Certificate",
    organization: "Training Program",
    issuedDate: "August 2024",
    category: "Frontend Certificate",
    categoryType: "course",
    pdfPath: "/certificates/DHANUSH AV React JS Training.pdf",
    imagePath: "/certificates/six sigma solutions certificate.jpg",
    logoIcon: "Code2",
    skills: ["React.js", "Hooks", "Components", "State Management"],
    summary: "Comprehensive training in modern React JS, covering functional components, state management, and application architecture.",
    credentialId: "REACT-JS-2024-CERT"
  },
  {
    id: "java",
    title: "Java Programming Certificate",
    organization: "Training Program",
    issuedDate: "2024",
    category: "Programming Certificate",
    categoryType: "course",
    pdfPath: "/certificates/Java certificate.pdf",
    imagePath: "/certificates/six sigma solutions certificate.jpg",
    logoIcon: "Coffee",
    skills: ["OOP", "Collections", "Java", "Exception Handling"],
    summary: "Mastered core object-oriented programming principles, data structures, and advanced Java concepts.",
    credentialId: "JAVA-PRO-2024"
  },
  {
    id: "sql",
    title: "SQL & Database Certificate",
    organization: "Training Program",
    issuedDate: "2024",
    category: "Database Certificate",
    categoryType: "course",
    pdfPath: "/certificates/sql certificate.pdf",
    imagePath: "/certificates/six sigma solutions certificate.jpg",
    logoIcon: "Database",
    skills: ["Joins", "Normalization", "Queries", "Indexes"],
    summary: "Gained proficiency in relational database design, complex queries, indexing, and data normalization.",
    credentialId: "SQL-DB-2024"
  },
  {
    id: "entrepreneur",
    title: "Entrepreneur Development Workshop",
    organization: "Workshop Certification",
    issuedDate: "2023",
    category: "Workshop Certificate",
    categoryType: "course",
    pdfPath: "/certificates/entrepreneur devlopment workshop certificate.pdf",
    imagePath: "/certificates/six sigma solutions certificate.jpg",
    logoIcon: "Lightbulb",
    skills: ["Leadership", "Business Strategy", "Innovation", "Networking"],
    summary: "Participated in an intensive workshop focusing on product innovation, business strategy, and leadership skills.",
    credentialId: "EDW-WS-2023"
  }
];


