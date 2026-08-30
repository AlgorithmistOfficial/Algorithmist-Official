import { TeamMember } from '../types';

export const CORE_VALUES = [
  {
    title: 'Rigor Over Rote',
    tag: 'Foundational Principle',
    description: 'We reject surface-level memorization and generic templates. Every algorithmic intuition and architectural pattern is rooted in first principles of computational science.',
    icon: 'Terminal'
  },
  {
    title: 'Ship to Production',
    tag: 'Execution Mandate',
    description: 'Knowledge is only proven when running in production. From student projects in Nexus to enterprise client deliverables, we value deployed software and measurable uptime.',
    icon: 'Rocket'
  },
  {
    title: 'The Continuous Pipeline',
    tag: 'Ecosystem Synergy',
    description: 'We believe learning, engineering, and consulting are not isolated silos. Fundamentals in Academy feed projects in Nexus, which power real delivery in Technologies and Optivio.',
    icon: 'Network'
  },
  {
    title: 'Radical Engineering Transparency',
    tag: 'Culture & Quality',
    description: 'Code quality, architecture trade-offs, and project timelines are evaluated with unvarnished honesty, constructive peer reviews, and verifiable telemetry.',
    icon: 'ShieldCheck'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Shreyansh',
    role: 'Founder & Chief Architect',
    division: 'Algorithmist Parent Authority',
    bio: 'Visionary engineer focused on bridging the acute divide in engineering pedagogy while architecting scalable software engines across educational and enterprise frontiers.',
    focus: ['Systems Architecture', 'Curriculum Engineering', 'Ecosystem Strategy'],
    initials: 'SO'
  },
  {
    name: 'Aarav Patel',
    role: 'Head of Project Incubation & SDLC',
    division: 'Algorithmist Nexus',
    bio: 'Former senior backend engineer with deep passion for mentoring engineers through agile sprint reviews, cloud infrastructure orchestration, and clean code hygiene.',
    focus: ['Cloud DevOps', 'Microservices', 'Production Mentorship'],
    initials: 'AP'
  },
  {
    name: 'Dr. Meera Nambiar',
    role: 'Director of Algorithmic Pedagogy',
    division: 'Algorithmist Academy',
    bio: 'Competitive coding mentor and computational complexity researcher dedicated to dismantling algorithmic fear through structured mental models and systematic practice.',
    focus: ['DSA Mastery', 'Graph Algorithms', 'Interview Readiness'],
    initials: 'MN'
  },
  {
    name: 'Kabir Mehta',
    role: 'VP of Enterprise Delivery',
    division: 'Algorithmist Technologies',
    bio: 'Seasoned technical director specializing in high-throughput enterprise systems, distributed databases, and digital transformation for scaling organizations.',
    focus: ['Client Engagements', 'Scalable Systems', 'Tech Delivery'],
    initials: 'KM'
  },
  {
    name: 'Ananya Sen',
    role: 'Head of Strategic Advisory & Ops',
    division: 'Algorithmist Optivio',
    bio: 'Strategic systems consultant advising business leaders on technical debt remediation, vendor evaluation, and engineering organization velocity.',
    focus: ['Enterprise Roadmaps', 'Operational Velocity', 'Cost Auditing'],
    initials: 'AS'
  }
];

export const TRUST_AND_COMPLIANCE = [
  {
    title: 'Intellectual Property Protection',
    description: 'Strict client IP isolation and clear student repository ownership policies ensure full transparency and confidentiality across all educational and client deliverables.'
  },
  {
    title: 'Enterprise Code Quality Standards',
    description: 'All code delivered by Algorithmist adheres to strict linting, TypeScript type-safety thresholds, modular architecture principles, and automated security vulnerability checks.'
  },
  {
    title: 'Pedagogical Integrity & Verification',
    description: 'Curricula across Academy and Nexus are continuously updated against current Tier-1 tech hiring standards and production cloud paradigms, with verified completion rubrics.'
  },
  {
    title: 'Data Privacy & Secure Infrastructure',
    description: 'We employ modern security best practices including encrypted communications, least-privilege role-based access controls, and zero-trust cloud configuration principles.'
  }
];
