import { ServiceItem } from '../types';

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'talent-incubation',
    name: 'Hands-on Talent Incubation & Project Mentorship',
    tagline: 'Bridging college theory to production engineering through Nexus & Academy frameworks.',
    shortDescription: 'Comprehensive training and mentorship programs equipping students and young engineers with industrial software development lifecycle and algorithmic rigor.',
    outcomes: [
      'Transform theoretical knowledge into 3+ live production-grade portfolio applications',
      'Master industry SDLC practices, automated CI/CD, Git workflows, and code review standards',
      'Prepare rigorously for Tier-1 technology placement and internship loops with 90%+ confidence'
    ],
    deliverables: [
      'Tailored cohort curriculum & live code reviews',
      'Interactive DSA problem sets & mock interviews',
      'Cloud deployment infrastructure for student projects',
      'Certification of Technical Competence & Portfolio Dossier'
    ],
    techStack: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Docker', 'AWS/GCP'],
    icon: 'GraduationCap',
    category: 'Education & Training'
  },
  {
    id: 'fullstack-engineering',
    name: 'Custom Full-Stack Software Development',
    tagline: 'High-performance web applications, resilient backends, and cloud native architectures.',
    shortDescription: 'End-to-end custom application engineering from initial system architecture to production deployment, tailored for startups and scaling businesses.',
    outcomes: [
      'Rapid prototype-to-production turnaround with clean, modular TypeScript codebases',
      'High-throughput backend APIs with sub-50ms average latency',
      'Secure, responsive frontend user interfaces optimized for modern web standards'
    ],
    deliverables: [
      'Full source code repository with comprehensive automated test coverage',
      'Interactive API documentation (Swagger/OpenAPI)',
      'Automated deployment pipelines and container orchestration',
      'Post-launch SLA support and architectural documentation'
    ],
    techStack: ['React', 'Next.js', 'Express', 'Tailwind CSS', 'Redis', 'PostgreSQL'],
    icon: 'Layers',
    category: 'Software Engineering'
  },
  {
    id: 'enterprise-consultancy',
    name: 'Strategic Technical & Architecture Consultancy',
    tagline: 'Strategic advisory assessing business software requirements, scalability, and system bottlenecks.',
    shortDescription: 'In-depth architectural audits and strategic technology roadmaps designed by senior systems engineers to accelerate operational efficiency and eliminate technical debt.',
    outcomes: [
      'Identify and remediate architectural bottlenecks before high-traffic scaling events',
      'Reduce cloud infrastructure spend by up to 40% through compute and database optimization',
      'Establish enterprise-grade security, access control, and telemetry standards'
    ],
    deliverables: [
      'Comprehensive Architecture & Security Audit Report',
      'Cloud Cost Optimization & Rightsizing Plan',
      'System Modernization & Migration Roadmap',
      'Executive Technology Strategy Presentation'
    ],
    techStack: ['Kubernetes', 'Terraform', 'Kafka', 'Datadog', 'Microservices', 'GraphQL'],
    icon: 'Cpu',
    category: 'Consultancy'
  },
  {
    id: 'cloud-devops',
    name: 'Cloud Infrastructure & DevOps Automation',
    tagline: 'Automated CI/CD pipelines, containerization, and zero-downtime deployment environments.',
    shortDescription: 'Modern cloud orchestration and infrastructure-as-code engineering to guarantee high availability, resilient failover, and continuous delivery velocity.',
    outcomes: [
      'Eliminate manual deployment friction with one-click automated release pipelines',
      'Attain 99.95%+ uptime with automated health checks, self-healing containers, and load balancing',
      'Enforce zero-trust network configurations and automated vulnerability scanning'
    ],
    deliverables: [
      'Infrastructure as Code (Terraform / CloudFormation)',
      'Multi-stage Docker build containers with caching',
      'Grafana/Prometheus metric dashboards and PagerDuty integration',
      'Disaster recovery and automated backup runbooks'
    ],
    techStack: ['Docker', 'Kubernetes', 'GitHub Actions', 'AWS / GCP / Cloud Run', 'NGINX'],
    icon: 'Cloud',
    category: 'DevOps & Cloud'
  },
  {
    id: 'algorithmic-audits',
    name: 'Algorithmic Efficiency & Performance Engineering',
    tagline: 'Profiling computational complexity, database query tuning, and low-latency optimization.',
    shortDescription: 'Deep profiling of critical backend bottlenecks, optimizing database queries, algorithmic execution, and caching layers for heavy data processing workloads.',
    outcomes: [
      'Slash database query response times by 60–80% via index remodeling and query rewriting',
      'Optimize algorithmic CPU utilization for intensive computation workloads',
      'Eliminate memory leaks and stabilize long-running server processes'
    ],
    deliverables: [
      'Flame graph performance profiling analysis',
      'Database indexing strategy and connection pool tuning',
      'Asynchronous worker queue implementation',
      'Benchmark verification reports'
    ],
    techStack: ['PostgreSQL', 'Redis', 'Node.js', 'Go', 'Rust / C++', 'Elasticsearch'],
    icon: 'Zap',
    category: 'Performance'
  },
  {
    id: 'institutional-partnerships',
    name: 'University & Institutional Technical Partnerships',
    tagline: 'Institutional partnerships integrating modern industry-standard training directly into college curricula.',
    shortDescription: 'Collaborative programs partnering with engineering colleges to establish dedicated Algorithmist Innovation Hubs, elevating student placement metrics and hands-on competence.',
    outcomes: [
      'Elevate institutional placement records with verified industry-ready engineering graduates',
      'Provide students with dedicated project mentors and real-world sprint reviews',
      'Equip college faculty with modern pedagogical frameworks and emerging tech toolsets'
    ],
    deliverables: [
      'Co-branded Campus Innovation Labs & Semester Tracks',
      'Access to Algorithmist CoreLabs assessment tooling',
      'Annual Collegiate Hackathons & Capstone Project Showcases',
      'Direct placement referral pipeline with hiring partners'
    ],
    techStack: ['LMS Integration', 'Automated Lab Runners', 'Git Assessment Engine'],
    icon: 'Building',
    category: 'Institutional'
  }
];
