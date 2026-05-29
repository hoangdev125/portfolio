import type { Skill } from '../types';

export const skillsData: Skill[] = [
  // Frontend
  { name: 'HTML5', category: 'Frontend', icon: 'FileCode' },
  { name: 'CSS3', category: 'Frontend', icon: 'Layers' },
  { name: 'JavaScript', category: 'Frontend', icon: 'Terminal' },
  { name: 'TypeScript', category: 'Frontend', icon: 'FileJson' },
  { name: 'React', category: 'Frontend', icon: 'Atom' },
  { name: 'Tailwind CSS', category: 'Frontend', icon: 'Wind' },

  // Backend
  { name: 'Java', category: 'Backend', icon: 'Coffee' },
  { name: 'Spring Boot', category: 'Backend', icon: 'Leaf' },

  // Database
  { name: 'MySQL', category: 'Database', icon: 'Database' },

  // Tools
  { name: 'Git', category: 'Tools', icon: 'GitBranch' },
  { name: 'GitHub', category: 'Tools', icon: 'Github' },
  { name: 'VS Code', category: 'Tools', icon: 'Laptop' },
  { name: 'Postman', category: 'Tools', icon: 'Send' },
];
