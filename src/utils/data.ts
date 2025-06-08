import { Project } from '../types/Project';
import { Skill, OtherSkill } from '../types/Skill';
import { WorkExperience, Review } from '../types/Experience';
import { BlogPost } from '../types/Blog';

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, inventory management, and order tracking.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    category: "fullstack",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe", "JWT"],
    demoLink: "https://demo.example.com",
    codeLink: "https://github.com/username/ecommerce-platform"
  },
  {
    id: 2,
    title: "Task Management Dashboard",
    description: "A responsive web application for project and task management with real-time collaboration features. Built using React, TypeScript, and Firebase.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2339&q=80",
    category: "frontend",
    tags: ["React", "TypeScript", "Firebase", "Material-UI", "WebSocket"],
    demoLink: "https://tasks.example.com",
    codeLink: "https://github.com/username/task-manager"
  },
  {
    id: 3,
    title: "RESTful API Service",
    description: "A robust REST API built with Express.js and MongoDB, featuring authentication, rate limiting, data validation, and comprehensive documentation.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2341&q=80",
    category: "backend",
    tags: ["Node.js", "Express", "MongoDB", "JWT", "Swagger"],
    demoLink: "https://api.example.com/docs",
    codeLink: "https://github.com/username/api-service"
  },
  {
    id: 4,
    title: "Weather Mobile App",
    description: "Cross-platform mobile application built with React Native, providing real-time weather data, forecasts, and location-based services.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    category: "mobile",
    tags: ["React Native", "TypeScript", "Weather API", "Geolocation"],
    demoLink: "https://apps.example.com/weather",
    codeLink: "https://github.com/username/weather-app"
  }
];

export const frontendSkills: Skill[] = [
  { name: "JavaScript", percentage: 95 },
  { name: "TypeScript", percentage: 90 },
  { name: "React", percentage: 92 },
  { name: "Vue.js", percentage: 85 },
  { name: "HTML5", percentage: 98 },
  { name: "CSS3", percentage: 95 },
  { name: "Tailwind CSS", percentage: 88 },
  { name: "SASS/SCSS", percentage: 85 }
];

export const backendSkills: Skill[] = [
  { name: "Node.js", percentage: 90 },
  { name: "Express.js", percentage: 88 },
  { name: "Python", percentage: 82 },
  { name: "PostgreSQL", percentage: 85 },
  { name: "MongoDB", percentage: 80 },
  { name: "Redis", percentage: 75 },
  { name: "GraphQL", percentage: 78 },
  { name: "REST APIs", percentage: 92 }
];

export const otherSkills: OtherSkill[] = [
  { name: "Git", icon: "ri-git-branch-line" },
  { name: "Docker", icon: "ri-ship-line" },
  { name: "AWS", icon: "ri-cloud-line" },
  { name: "Figma", icon: "ri-palette-line" },
  { name: "Webpack", icon: "ri-tools-line" },
  { name: "Jest", icon: "ri-test-tube-line" },
  { name: "CI/CD", icon: "ri-rocket-line" },
  { name: "Agile", icon: "ri-team-line" }
];

export const workExperience: WorkExperience[] = [
  {
    title: "Senior Full Stack Developer",
    company: "TechCorp Solutions",
    period: "2022 - Present",
    description: "Lead development of enterprise web applications using React, Node.js, and cloud technologies. Mentored junior developers and implemented best practices for code quality and performance optimization."
  },
  {
    title: "Frontend Developer",
    company: "Digital Innovations Inc.",
    period: "2020 - 2022",
    description: "Developed responsive user interfaces and interactive web applications. Collaborated with UX/UI designers to implement pixel-perfect designs and ensure optimal user experience across devices."
  },
  {
    title: "Junior Web Developer",
    company: "StartupXYZ",
    period: "2019 - 2020",
    description: "Built and maintained company websites using modern web technologies. Gained experience in full-stack development, database design, and agile development methodologies."
  },
  {
    title: "Web Development Intern",
    company: "Local Agency",
    period: "2018 - 2019",
    description: "Assisted in developing client websites and learning fundamental web development concepts. Worked with HTML, CSS, JavaScript, and content management systems."
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Modern JavaScript: ES2023 Features You Should Know",
    date: "2023-12-15",
    excerpt: "Explore the latest JavaScript features that are changing how we write code in 2023, including array methods, string manipulation, and performance improvements.",
    imageUrl: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2274&q=80",
    tags: ["JavaScript", "ES2023", "Web Development"]
  },
  {
    id: 2,
    title: "Building Scalable React Applications with TypeScript",
    date: "2023-11-28",
    excerpt: "Learn best practices for structuring large React applications with TypeScript, including component patterns, state management, and testing strategies.",
    imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    tags: ["React", "TypeScript", "Architecture"]
  },
  {
    id: 3,
    title: "Optimizing Web Performance: A Complete Guide",
    date: "2023-10-20",
    excerpt: "Comprehensive guide to web performance optimization, covering everything from image optimization to code splitting and lazy loading techniques.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
    tags: ["Performance", "Optimization", "Web Development"]
  }
];