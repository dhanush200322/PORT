export type CertificateItem = {
  id: string;
  title: string;
  organization: string;
  issuedDate: string;
  category: string;
  isFeatured?: boolean;
  gridClass?: string;
  pdfPath: string;
  imagePath: string; // Thumbnail for the certificate
  logoIcon: string;  // Lucide icon name for organization logo
  skills: string[];
  summary: string;
};

export const CERTIFICATE_DATA: CertificateItem[] = [
  {
    id: "six-sigma",
    title: "Frontend Web Developer Internship",
    organization: "Six Sigma Solutions",
    issuedDate: "January 2026",
    category: "Professional Experience",
    isFeatured: true,
    gridClass: "md:col-span-2 md:row-span-2",
    pdfPath: "/certificates/six sigma solutions certificate.jpg",
    imagePath: "/certificates/six sigma solutions certificate.jpg",
    logoIcon: "Briefcase",
    skills: ["React.js", "Frontend Architecture", "Team Collaboration", "Git Workflow"],
    summary: "Successfully completed a rigorous internship focused on developing responsive, production-ready frontend components."
  },
  {
    id: "react-js",
    title: "React JS Training",
    organization: "Training Program",
    issuedDate: "August 2024",
    category: "Frontend Development",
    pdfPath: "/certificates/DHANUSH AV React JS Training.pdf",
    imagePath: "/certificates/six sigma solutions certificate.jpg", // Placeholder until user adds real thumbnails
    logoIcon: "Code2",
    skills: ["React.js", "Hooks", "Components", "State Management"],
    summary: "Comprehensive training in modern React JS, covering functional components, state management, and application architecture."
  },
  {
    id: "java",
    title: "Java Certificate",
    organization: "Training Program",
    issuedDate: "2024",
    category: "Programming",
    pdfPath: "/certificates/Java certificate.pdf",
    imagePath: "/certificates/six sigma solutions certificate.jpg", // Placeholder
    logoIcon: "Coffee",
    skills: ["OOP", "Collections", "Java", "Exception Handling"],
    summary: "Mastered core object-oriented programming principles and advanced Java concepts."
  },
  {
    id: "sql",
    title: "SQL Certificate",
    organization: "Training Program",
    issuedDate: "2024",
    category: "Database",
    pdfPath: "/certificates/sql certificate.pdf",
    imagePath: "/certificates/six sigma solutions certificate.jpg", // Placeholder
    logoIcon: "Database",
    skills: ["Joins", "Normalization", "Queries", "Indexes"],
    summary: "Gained proficiency in relational database design, complex queries, and data normalization."
  },
  {
    id: "entrepreneur",
    title: "Entrepreneur Development Workshop",
    organization: "Workshop",
    issuedDate: "2023",
    category: "Workshop",
    gridClass: "md:col-span-2 md:row-span-1",
    pdfPath: "/certificates/entrepreneur devlopment workshop certificate.pdf",
    imagePath: "/certificates/six sigma solutions certificate.jpg", // Placeholder
    logoIcon: "Lightbulb",
    skills: ["Leadership", "Business Strategy", "Innovation", "Networking"],
    summary: "Participated in an intensive workshop focusing on product innovation, business strategy, and leadership skills."
  },
  {
    id: "internship-training",
    title: "URL Factory Intern",
    organization: "URL Factory",
    issuedDate: "2023",
    category: "Professional Training",
    gridClass: "md:col-span-1 md:row-span-1",
    pdfPath: "/certificates/Dhanush A V Internship  Experience letter.pdf",
    imagePath: "/certificates/six sigma solutions certificate.jpg", // Placeholder
    logoIcon: "Building2",
    skills: ["Professional Development", "Project Lifecycle", "Team Dynamics", "Agile"],
    summary: "Recognized for consistent professional growth and ability to adapt to fast-paced team environments."
  }
];
