// Project types
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: ("frontend" | "backend" | "fullstack" | "devops")[];
  tags: string[];
  reference: string;
  
}

export type ProjectCategory = "all" | "frontend" | "backend" | "fullstack" | "devops";

// Skill types
export interface Skill {
  name: string;
  percentage: number;
}

export interface OtherSkill {
  name: string;
  icon: string;
}

export type SkillCategory = "all" | "frontend" | "backend" | "tools";

// Experience types
export interface WorkExperience {
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface Review {
  id: number;
  name: string;
  position: string;
  company: string;
  text: string;
  avatarUrl: string;
}

// Blog types
export interface BlogPost {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  imageUrl: string;
  tags: string[];
}

// Contact form types
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Theme types
export type Theme = "light" | "dark" | "system";

// Navigation types
export interface NavItem {
  href: string;
  label: string;
  shortcut: string;
}