export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: 'web3' | 'frontend' | 'fullstack';
  tags: string[];
  features: string[];
  demoUrl?: string;
  githubUrl?: string;
  imageAccent: string; // Tailwind color classes for glow
}

export interface Skill {
  name: string;
  category: 'frontend' | 'web3' | 'tools';
  proficiency: number; // 0 to 100
  iconName: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
  isCurrent?: boolean;
}

export interface GuestbookEntry {
  id: string;
  name: string;
  message: string;
  timestamp: string;
  walletAddress?: string;
}
