import { Project } from '../types/Project';
import { Skill, OtherSkill } from '../types/Skill';
import { WorkExperience } from '../types/Experience';
import { BlogPost } from '../types/Blog';

export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with shopping cart, user authentication, and payment processing.",
    image: "https://via.placeholder.com/500x300",
    category: "fullstack",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    demoLink: "https://example.com",
    codeLink: "https://github.com/example"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team features.",
    image: "https://via.placeholder.com/500x300",
    category: "frontend",
    tags: ["React", "Redux", "Firebase"],
    demoLink: "https://example.com",
    codeLink: "https://github.com/example"
  },
  {
    id: 3,
    title: "Weather Forecast API",
    description: "A RESTful API for weather forecasts with caching and geolocation support.",
    image: "https://via.placeholder.com/500x300",
    category: "backend",
    tags: ["Node.js", "Express", "Redis"],
    demoLink: "https://example.com",
    codeLink: "https://github.com/example"
  },
  {
    id: 4,
    title: "Fitness Tracking Mobile App",
    description: "A cross-platform mobile app for tracking workouts and nutrition.",
    image: "https://via.placeholder.com/500x300",
    category: "mobile",
    tags: ["React Native", "Redux", "Firebase"],
    demoLink: "https://example.com",
    codeLink: "https://github.com/example"
  }
];

export const frontendSkills: Skill[] = [
  { name: "HTML", percentage: 95 },
  { name: "CSS", percentage: 90 },
  { name: "JavaScript", percentage: 92 },
  { name: "TypeScript", percentage: 85 },
  { name: "React", percentage: 90 },
  { name: "Vue.js", percentage: 80 },
  { name: "Next.js", percentage: 85 },
  { name: "Tailwind CSS", percentage: 88 }
];

export const backendSkills: Skill[] = [
  { name: "Node.js", percentage: 88 },
  { name: "Express", percentage: 85 },
  { name: "Python", percentage: 80 },
  { name: "Django", percentage: 75 },
  { name: "MongoDB", percentage: 82 },
  { name: "PostgreSQL", percentage: 80 },
  { name: "RESTful APIs", percentage: 90 },
  { name: "GraphQL", percentage: 78 }
];

export const otherSkills: OtherSkill[] = [
  { name: "Git", icon: "ri-git-branch-line" },
  { name: "Docker", icon: "ri-docker-line" },
  { name: "CI/CD", icon: "ri-settings-line" },
  { name: "AWS", icon: "ri-cloud-line" },
  { name: "Agile/Scrum", icon: "ri-team-line" },
  { name: "Jest", icon: "ri-test-tube-line" },
  { name: "Webpack", icon: "ri-stack-line" },
  { name: "Figma", icon: "ri-pen-tool-line" }
];

export const workExperience: WorkExperience[] = [
  {
    title: "Senior Frontend Developer",
    company: "Tech Solutions Inc.",
    period: "Jan 2021 - Present",
    description: "Developed and maintained multiple React applications. Led a team of 3 developers. Implemented CI/CD pipelines and improved performance by 40%."
  },
  {
    title: "Full Stack Developer",
    company: "Digital Innovations",
    period: "Jun 2018 - Dec 2020",
    description: "Built RESTful APIs with Node.js and Express. Developed frontend with React and Redux. Worked closely with design team to implement responsive UI."
  },
  {
    title: "Junior Web Developer",
    company: "StartUp Studio",
    period: "Aug 2016 - May 2018",
    description: "Created responsive websites using HTML, CSS, and JavaScript. Integrated third-party APIs. Collaborated with UI/UX designers."
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Building Scalable React Applications",
    date: "2024-01-15",
    excerpt: "Learn best practices for building large-scale React applications with proper state management and component architecture.",
    imageUrl: "https://via.placeholder.com/400x250",
    tags: ["React", "JavaScript", "Architecture"]
  },
  {
    id: 2,
    title: "Mastering TypeScript for Better Development",
    date: "2024-01-10",
    excerpt: "Discover how TypeScript can improve your development workflow and catch errors before they reach production.",
    imageUrl: "https://via.placeholder.com/400x250",
    tags: ["TypeScript", "Development", "Best Practices"]
  },
  {
    id: 3,
    title: "Modern CSS Techniques and Best Practices",
    date: "2024-01-05",
    excerpt: "Explore modern CSS features like Grid, Flexbox, and custom properties to create responsive and maintainable stylesheets.",
    imageUrl: "https://via.placeholder.com/400x250",
    tags: ["CSS", "Design", "Frontend"]
  }
];