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

export type ProjectCategory = "all" | "frontend" | "backend" | "fullstack" | "mobile";