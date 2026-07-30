export type AcademicChapter = {
  id: string;
  title: string;
  school: string;
  qualification: string;
  score: number;
  theme: "Morning" | "Science" | "Innovation";
  description: string;
  cardSize: "small" | "medium" | "hero";
  knowledgeGrowth: number; // out of 8
  hoverState: {
    skills: string[];
    learnings: string;
    milestone: string;
  };
  coursework?: string[];
};

export const ACADEMIC_DATA: AcademicChapter[] = [
  {
    id: "chapter-1",
    title: "Secondary Education",
    school: "St. John's Matriculation Higher Secondary School",
    qualification: "10th Standard",
    score: 70,
    theme: "Morning",
    cardSize: "small",
    knowledgeGrowth: 3, // Foundation
    description: "Built a strong academic foundation in mathematics, science, discipline, and analytical thinking.",
    hoverState: {
      skills: ["Mathematics", "Core Science", "Discipline", "Time Management"],
      learnings: "Mastered the fundamentals of logical reasoning and academic discipline.",
      milestone: "Discovered an early affinity for problem solving."
    }
  },
  {
    id: "chapter-2",
    title: "Higher Secondary Education",
    school: "St. John's Matriculation Higher Secondary School",
    qualification: "12th Standard",
    score: 75,
    theme: "Science",
    cardSize: "medium",
    knowledgeGrowth: 5, // Analytical Thinking
    description: "Developed logical thinking, problem-solving skills, and discovered a passion for technology and engineering.",
    hoverState: {
      skills: ["Physics", "Chemistry", "Advanced Mathematics", "Computer Basics"],
      learnings: "Bridged theoretical science with practical problem-solving applications.",
      milestone: "Made the definitive choice to pursue software and electronics."
    }
  },
  {
    id: "chapter-3",
    title: "Engineering",
    school: "Dhirajlal Gandhi College of Technology",
    qualification: "B.E. in Electronics and Communication Engineering",
    score: 80,
    theme: "Innovation",
    cardSize: "hero",
    knowledgeGrowth: 8, // Engineering
    description: "Completed Bachelor of Engineering while developing strong technical knowledge in software engineering, web development, databases, networking and programming, laying the foundation for Full Stack Development and AI Automation.",
    coursework: [
      "Data Structures",
      "Database Management Systems",
      "Object Oriented Programming",
      "Computer Networks",
      "Operating Systems",
      "Software Engineering",
      "Embedded Systems",
      "Web Technologies"
    ],
    hoverState: {
      skills: ["Full Stack Development", "System Design", "Networking", "Databases"],
      learnings: "Transformed theoretical knowledge into production-ready software solutions.",
      milestone: "Graduated with honors and built multiple live applications."
    }
  }
];

export const WHAT_I_LEARNED = [
  "Problem Solving",
  "Team Collaboration",
  "System Thinking",
  "Continuous Learning",
  "Building Real Solutions"
];
