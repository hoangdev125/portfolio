export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools';
  icon: string; // The Lucide icon component name as string
}

export interface Project {
  id: string;
  name: string;
  description: string;
  techStack: string[];
  githubLink: string;
  demoLink: string;
  image: string; // Absolute or relative path to project screenshot
  featured?: boolean;
  features?: string[]; // detailed features for featured project layout
}

export interface Experience {
  id: string;
  role: string;
  companyOrSchool: string;
  duration: string;
  description: string[];
  type: 'education' | 'work';
}
