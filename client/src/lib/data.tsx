export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: "frontend" | "backend" | "fullstack" | "mobile";
  tags: string[];
  demoLink: string;
  codeLink: string;
}

export interface Skill {
  name: string;
  percentage: number;
}

export interface OtherSkill {
  name: string;
  icon: string;
}

export interface WorkExperience {
  title: string;
  company: string;
  period: string;
  description: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Dashboard",
    description: "A responsive admin dashboard for e-commerce platforms with real-time analytics and inventory management.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "frontend",
    tags: ["React", "TypeScript"],
    demoLink: "#",
    codeLink: "#"
  },
  {
    id: 2,
    title: "RESTful API Service",
    description: "A scalable REST API for user authentication, data storage, and real-time notifications with WebSockets.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "backend",
    tags: ["Node.js", "Express"],
    demoLink: "#",
    codeLink: "#"
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A full-stack task manager with team collaboration features, file uploads, and progress tracking.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "fullstack",
    tags: ["Next.js", "MongoDB"],
    demoLink: "#",
    codeLink: "#"
  },
  {
    id: 4,
    title: "Fitness Tracking App",
    description: "A cross-platform mobile application for tracking workouts, setting goals, and analyzing fitness progress.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "mobile",
    tags: ["React Native", "Firebase"],
    demoLink: "#",
    codeLink: "#"
  },
  {
    id: 5,
    title: "Financial Dashboard",
    description: "An interactive dashboard for personal finance management with data visualization and budget planning.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "frontend",
    tags: ["Vue.js", "Tailwind"],
    demoLink: "#",
    codeLink: "#"
  },
  {
    id: 6,
    title: "Content Management System",
    description: "A modern CMS with custom content types, role-based access control, and a headless API architecture.",
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "fullstack",
    tags: ["React", "GraphQL"],
    demoLink: "#",
    codeLink: "#"
  }
];

export const frontendSkills: Skill[] = [
  { name: "TypeScript/JavaScript", percentage: 95 },
  { name: "React", percentage: 90 },
  { name: "HTML/CSS", percentage: 85 },
  { name: "Next.js", percentage: 80 },
  { name: "Tailwind CSS", percentage: 85 }
];

export const backendSkills: Skill[] = [
  { name: "Node.js", percentage: 85 },
  { name: "Express", percentage: 80 },
  { name: "MongoDB", percentage: 75 },
  { name: "PostgreSQL", percentage: 70 },
  { name: "GraphQL", percentage: 65 }
];

export const otherSkills: OtherSkill[] = [
  { name: "Git", icon: "ri-git-branch-line" },
  { name: "CI/CD", icon: "ri-terminal-box-line" },
  { name: "AWS", icon: "ri-cloud-line" },
  { name: "Jest/Testing", icon: "ri-test-tube-line" },
  { name: "Docker", icon: "ri-docker-line" },
  { name: "Agile/Scrum", icon: "ri-group-line" },
  { name: "Responsive Design", icon: "ri-smartphone-line" },
  { name: "Security", icon: "ri-shield-check-line" }
];

export const workExperience: WorkExperience[] = [
  {
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    period: "2021 - Present",
    description: "Led the frontend team in rebuilding the company's flagship product using React and TypeScript. Improved performance by 60% and implemented a comprehensive component library."
  },
  {
    title: "Full Stack Developer",
    company: "InnovateSoft",
    period: "2018 - 2021",
    description: "Developed and maintained multiple client projects using Node.js and React. Designed and implemented RESTful APIs, database schemas, and frontend interfaces."
  },
  {
    title: "Junior Web Developer",
    company: "Digital Agency Co.",
    period: "2016 - 2018",
    description: "Started as an intern and grew into a full-time role. Worked on client websites using JavaScript, HTML, and CSS. Assisted senior developers with larger projects."
  }
];
