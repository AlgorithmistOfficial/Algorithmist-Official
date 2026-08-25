export interface NavItem {
  name: string;
  href: string;
  badge?: string;
}

export type EcosystemCategory = 'Education' | 'Corporate / Delivery' | 'Community' | 'Tools' | 'Research';

export interface EcosystemEntity {
  id: string;
  name: string;
  slug: string;
  category: EcosystemCategory;
  tagline: string;
  shortDescription: string;
  requiredContext: string;
  tags: string[];
  ctaLabel: string;
  ctaLink: string;
  status: 'Active' | 'Incubating' | 'Planned Roadmap';
  statusColor?: string;
  highlights: string[];
  metrics?: { label: string; value: string }[];
  featured?: boolean;
}

export interface ServiceItem {
  id: string;
  name: string;
  tagline: string;
  shortDescription: string;
  outcomes: string[];
  deliverables: string[];
  techStack: string[];
  icon: string;
  category: string;
}

export interface BlogAuthor {
  name: string;
  role: string;
  avatar: string;
  affiliation: string;
}

export interface TableOfContentItem {
  id: string;
  title: string;
  level: number;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'Ecosystem' | 'Engineering' | 'Education' | 'Consultancy' | 'Innovation';
  tags: string[];
  date: string;
  readTime: string;
  author: BlogAuthor;
  featured?: boolean;
  tableOfContents: TableOfContentItem[];
  relatedSlugs: string[];
}

export interface ImpactStat {
  value: string;
  label: string;
  subtext: string;
  growth: string;
}

export interface TimelineItem {
  period: string;
  title: string;
  description: string;
  milestoneType: 'Initiative' | 'Ecosystem' | 'Expansion' | 'Milestone';
  badge: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  partner: string;
  domain: string;
  challenge: string;
  solution: string;
  outcome: string;
  metrics: { value: string; label: string }[];
  tags: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  division: string;
  bio: string;
  focus: string[];
  initials: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  topic: string;
  message: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  topic?: string;
  message?: string;
}

export interface ToastNotification {
  id: string;
  title: string;
  message: string;
  type: 'success' | 'error' | 'info';
}
