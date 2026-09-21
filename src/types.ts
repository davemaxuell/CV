export interface Experience {
  id: string;
  company: string;
  location?: string;
  role: string;
  period: string;
  current?: boolean;
  department?: string;
  highlight?: string;
  points: string[];
  tools?: string[];
  iconBg?: string;
  iconType: 'university' | 'lab' | 'pharma' | 'bank' | 'global' | 'industry' | 'ta';
}

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  affiliation?: string;
  period: string;
  description: string;
  highlights: string[];
  tags: string[];
  image?: string;
  linkText?: string;
  liveUrl?: string;
  repositoryUrl?: string;
  award?: string;
}

export interface Publication {
  id: string;
  title: string;
  conference: string;
  year: string;
  authorRole: 'First author' | 'Second author' | 'Co-author';
  status?: string;
  highlight?: string;
  award?: string;
  pages?: string;
  summary: string;
  metrics: { label: string; value: string }[];
  tags: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
  current?: boolean;
  gpa?: string;
  expectedGraduation?: string;
  details: string[];
  iconType: 'university' | 'language' | 'scholarship';
}

export interface RecognitionItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  badge?: string;
}

export interface SkillCategory {
  id?: string;
  title: string;
  shortTitle?: string;
  iconName?: string;
  description?: string;
  items: string[];
}
