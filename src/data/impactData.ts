import { ImpactStat, TimelineItem, CaseStudy } from '../types';

export const IMPACT_STATS: ImpactStat[] = [
  {
    value: '4,500+',
    label: 'Engineering Hours Mentored',
    subtext: 'Across student cohorts & technical reviews',
    growth: '+140% YoY'
  },
  {
    value: '120+',
    label: 'Production Projects Shipped',
    subtext: 'Built with full SDLC & cloud deployment',
    growth: '+210% YoY'
  },
  {
    value: '94%',
    label: 'Placement & Hiring Success',
    subtext: 'Graduates securing tech internships & roles',
    growth: 'Industry Leading'
  },
  {
    value: '25k+',
    label: 'Algorithmic Problems Solved',
    subtext: 'Practiced systematically on Academy frameworks',
    growth: 'Cumulative'
  }
];

export const TIMELINE_ITEMS: TimelineItem[] = [
  {
    period: 'Q1 2025',
    title: 'Genesis of the Algorithmist Thesis',
    description: 'Conducted extensive research across Indian engineering colleges, identifying the acute disparity between purely theoretical coursework and modern industry tech expectations.',
    milestoneType: 'Initiative',
    badge: 'Research & Inception'
  },
  {
    period: 'Q3 2025',
    title: 'Launch of Algorithmist Academy & Nexus Pilots',
    description: 'Piloted the integrated model: intensive DSA problem-solving in Academy followed immediately by hands-on full-stack development and live deployment in Nexus.',
    milestoneType: 'Ecosystem',
    badge: 'Dual Engine Rollout'
  },
  {
    period: 'Q1 2026',
    title: 'Ecosystem Expansion & CoreLabs Tooling',
    description: 'Built proprietary assessment runners, automated PR review bots, and established structured mock interview loops, achieving a 94% placement readiness rate for cohort participants.',
    milestoneType: 'Milestone',
    badge: 'Scale & Tooling'
  },
  {
    period: 'Q3 2026 (Present)',
    title: 'Institutional Alliances & Enterprise Delivery Roadmap',
    description: 'Unifying the parent structure to inaugurate Algorithmist Technologies for client-facing software delivery and Algorithmist Optivio for enterprise technical consulting.',
    milestoneType: 'Expansion',
    badge: 'Enterprise Horizons'
  },
  {
    period: '2027 Roadmap',
    title: 'National Scale & Open Research Publications',
    description: 'Expanding to 50+ college partner ecosystems, launching open-source distributed systems libraries, and scaling client engineering pods across international markets.',
    milestoneType: 'Milestone',
    badge: 'Future Vision'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cs-1',
    title: 'From Theory-Heavy Undergraduate to Shipped Distributed Cloud Application in 12 Weeks',
    partner: 'Algorithmist Nexus & Academy Cohort Alpha',
    domain: 'Student Engineering & Cloud DevOps',
    challenge: 'Students in traditional Tier-2/3 engineering colleges possessed good academic grades in computer science theory but had never written production unit tests, configured Docker containers, or handled real HTTP traffic concurrency.',
    solution: 'Enrolled in the 12-week intensive pipeline: 4 weeks of rigorous Academy DSA & memory optimization followed by 8 weeks in Nexus building a high-throughput collaborative task management platform with WebSockets and PostgreSQL replication.',
    outcome: 'Every participant deployed their system to live production with automated GitHub Actions CI/CD pipelines, resulting in 100% of the cohort clearing Tier-1 tech interviews with active portfolio demonstrations.',
    metrics: [
      { value: '100%', label: 'Production Deployment Rate' },
      { value: '3.8x', label: 'Offer Rate vs. Peer Average' },
      { value: '<40ms', label: 'Avg API Response Achieved' }
    ],
    tags: ['Education', 'Nexus', 'Academy', 'DevOps', 'Success Story']
  },
  {
    id: 'cs-2',
    title: 'Enterprise Architecture Diagnostic & Cloud Cost Optimization for High-Growth FinTech',
    partner: 'Algorithmist Consultancy Advisory',
    domain: 'Enterprise Architecture & FinTech',
    challenge: 'A fast-growing transaction platform suffered from frequent database locks during peak market hours and unpredictable cloud infrastructure bills escalating by 45% month-over-month.',
    solution: 'Conducted a deep architectural audit, decoupled monolithic SQL transactions using the transactional outbox pattern, and introduced Redis cluster caching for idempotent read queries.',
    outcome: 'Eliminated peak-hour database locks entirely, improved P99 latency from 1,200ms down to 85ms, and lowered recurring AWS cloud compute expenses by 42%.',
    metrics: [
      { value: '42%', label: 'Cloud Cost Reduction' },
      { value: '14x', label: 'P99 Latency Improvement' },
      { value: '99.99%', label: 'Uptime Maintained' }
    ],
    tags: ['Enterprise', 'Architecture', 'Performance', 'Consultancy']
  }
];
