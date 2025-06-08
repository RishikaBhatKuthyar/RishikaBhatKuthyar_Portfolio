export interface Skill {
  name: string;
  percentage: number;
}

export interface OtherSkill {
  name: string;
  icon: string;
}

export type SkillCategory = "all" | "frontend" | "backend" | "tools";