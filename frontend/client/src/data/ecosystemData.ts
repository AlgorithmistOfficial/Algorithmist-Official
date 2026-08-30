import { EcosystemEntity, EcosystemCategory } from '../types';

export const ECOSYSTEM_ENTITIES: EcosystemEntity[] = [
  {
    id: 'nexus',
    name: 'Algorithmist Nexus',
    slug: 'algorithmist-nexus',
    category: 'Education',
    tagline: 'The Project-Development & Product-Building Authority',
    shortDescription: 'Transforming theoretical engineering education into production-grade project development and demonstrable industry expertise.',
    requiredContext: 'Algorithmist Nexus is the project-development and product-building wing—where learners ship real, end-to-end projects using industry SDLC, code quality standards, reviews, and deployment practices. Nexus focuses on transforming learning into demonstrable outcomes (portfolios, case studies, shipped features).',
    tags: ['Education', 'Project Development', 'Build-to-Ship', 'SDLC', 'Engineering'],
    ctaLabel: 'Explore Nexus projects',
    ctaLink: '/contact?topic=nexus',
    status: 'Active',
    statusColor: 'bg-emerald-500',
    featured: true,
    highlights: [
      'End-to-end modern tech stack development (React, Node, Cloud, Distributed Systems)',
      'Simulated industry sprint cycles, code reviews, and architecture teardowns',
      'Production deployment on cloud infrastructure with CI/CD and monitoring',
      'Mentorship bridging the gap between college curriculum and real tech demands'
    ],
    metrics: [
      { label: 'Production Projects Shipped', value: '120+' },
      { label: 'Engineering Hours Mentored', value: '4,500+' },
      { label: 'Code Reviews Completed', value: '950+' }
    ]
  },
  {
    id: 'academy',
    name: 'Algorithmist Academy',
    slug: 'algorithmist-academy',
    category: 'Education',
    tagline: 'Structured Training & Placement-Readiness Wing',
    shortDescription: 'Rigorous Data Structures, Algorithms, and technical problem-solving tracks engineered for top-tier hiring loops.',
    requiredContext: 'Algorithmist Academy is the structured training and placement-prep wing—focused on DSA, fundamentals, interview readiness, and disciplined practice systems. Academy builds problem-solving depth and consistency so learners can perform in real hiring loops.',
    tags: ['Education', 'DSA', 'Placement Prep', 'Problem Solving', 'Competitive Coding'],
    ctaLabel: 'See Academy tracks',
    ctaLink: '/contact?topic=academy',
    status: 'Active',
    statusColor: 'bg-emerald-500',
    featured: true,
    highlights: [
      'Comprehensive Data Structures & Algorithms curriculum from fundamentals to advanced trees/graphs/DP',
      'Systematic mock interview loops with real-time feedback and rubric scoring',
      'Daily problem-solving sprints cultivating analytical rigor and intuition',
      'Specialized interview strategies tailored to leading tech benchmarks'
    ],
    metrics: [
      { label: 'Problems Solved', value: '25,000+' },
      { label: 'Placement Success Rate', value: '94%' },
      { label: 'Mock Loops Conducted', value: '1,800+' }
    ]
  },
  {
    id: 'technologies',
    name: 'Algorithmist Technologies',
    slug: 'algorithmist-technologies',
    category: 'Corporate / Delivery',
    tagline: 'Real-World Software Engineering & Client Delivery',
    shortDescription: 'Client-facing engineering agency delivering scalable custom web platforms, cloud architectures, and full-stack software solutions.',
    requiredContext: 'Algorithmist Technologies is the delivery engine designed to work on real-world software projects and serve market-demanded client requirements, from rapid minimum viable products to robust scalable infrastructure.',
    tags: ['Enterprise', 'Software Delivery', 'Cloud Architecture', 'Custom Dev'],
    ctaLabel: 'Engage Technology Services',
    ctaLink: '/contact?topic=technologies',
    status: 'Incubating',
    statusColor: 'bg-amber-500',
    featured: false,
    highlights: [
      'Full lifecycle custom software engineering and microservices development',
      'Cloud migration, serverless design, and container orchestration',
      'API gateway design and high-throughput backend services',
      'Integration pipeline for top-tier talent emerging from the Algorithmist ecosystem'
    ],
    metrics: [
      { label: 'Target Systems Capacity', value: '99.99%' },
      { label: 'Architecture Frameworks', value: 'Modular' },
      { label: 'Delivery Standard', value: 'Enterprise' }
    ]
  },
  {
    id: 'optivio',
    name: 'Algorithmist Optivio',
    slug: 'algorithmist-optivio',
    category: 'Corporate / Delivery',
    tagline: 'Strategic Business Technical Requirements & Growth Consultancy',
    shortDescription: 'Consultancy wing analyzing large enterprise operational requirements to design digital transformation roadmaps.',
    requiredContext: 'Algorithmist Optivio focuses on high-impact business technical requirements, assessing corporate operational bottlenecks and advising enterprise leaders on software architectures that directly accelerate business growth.',
    tags: ['Enterprise', 'Consultancy', 'Business Systems', 'Strategy'],
    ctaLabel: 'Request Business Consultation',
    ctaLink: '/contact?topic=optivio',
    status: 'Planned Roadmap',
    statusColor: 'bg-indigo-400',
    featured: false,
    highlights: [
      'Enterprise technical requirement synthesis and software selection audits',
      'Workflow automation and operational pipeline optimization',
      'Scalability and cost-efficiency architectural roadmaps',
      'Strategic tech advisory for executive stakeholders'
    ],
    metrics: [
      { label: 'Strategic Focus', value: 'Enterprise' },
      { label: 'Audit Rigor', value: 'Multi-layer' },
      { label: 'ROI Optimization', value: 'Data-driven' }
    ]
  },
  {
    id: 'community',
    name: 'Algorithmist Open Community',
    slug: 'algorithmist-community',
    category: 'Community',
    tagline: 'Collaborative Knowledge Network for Engineers & Builders',
    shortDescription: 'An inclusive peer-driven community hosting open hackathons, technical writeups, code discussions, and collaborative study groups.',
    requiredContext: 'Algorithmist Open Community convenes aspiring engineers, mentors, and industry practitioners to share insights, conduct open-source code sprints, and foster engineering camaraderie.',
    tags: ['Community', 'Open Source', 'Hackathons', 'Peer Learning'],
    ctaLabel: 'Join Community Network',
    ctaLink: '/contact?topic=community',
    status: 'Active',
    statusColor: 'bg-emerald-500',
    featured: false,
    highlights: [
      'Weekly engineering discussions and tech debate forums',
      'Community open-source sprint initiatives and bug bashes',
      'Peer code review pods and portfolio feedback sessions',
      'Exclusive AMAs with seasoned industry staff engineers'
    ],
    metrics: [
      { label: 'Active Members', value: '3,200+' },
      { label: 'Open Discussions', value: '800+' },
      { label: 'Hackathon Entries', value: '150+' }
    ]
  },
  {
    id: 'tools',
    name: 'Algorithmist Developer Tooling (CoreLabs)',
    slug: 'algorithmist-tools',
    category: 'Tools',
    tagline: 'Productivity Engines & Automated Assessment Platforms',
    shortDescription: 'Internal and developer-facing utility platforms powering code quality diagnostics, algorithmic benchmarks, and project scaffolding.',
    requiredContext: 'Algorithmist CoreLabs builds specialized software utilities to streamline algorithmic evaluation, benchmark code execution efficiency, and automate educational code reviews.',
    tags: ['Tools', 'Productivity', 'Benchmarking', 'Diagnostics'],
    ctaLabel: 'Explore Tooling Suite',
    ctaLink: '/contact?topic=tools',
    status: 'Incubating',
    statusColor: 'bg-amber-500',
    featured: false,
    highlights: [
      'Automated time and space complexity diagnostic test runners',
      'CLI tools for bootstrapping production-ready engineering templates',
      'Interactive visualizers for tree and graph algorithm traversals',
      'Standardized linting and code quality rulesets for cohort submissions'
    ],
    metrics: [
      { label: 'Diagnostic Runs', value: '50k+' },
      { label: 'Templates Available', value: '18+' },
      { label: 'Automated Checks', value: '100%' }
    ]
  },
  {
    id: 'research',
    name: 'Algorithmist Applied Research & Systems Lab',
    slug: 'algorithmist-research',
    category: 'Research',
    tagline: 'Investigating Scalable Systems & Computational Pedagogies',
    shortDescription: 'Research initiative studying efficient algorithmic structures, distributed systems reliability, and accelerated STEM pedagogical methodologies.',
    requiredContext: 'Algorithmist Research explores innovative methodologies in distributed computing and computational pedagogy, publishing whitepapers and practical architecture guides for the wider technical ecosystem.',
    tags: ['Research', 'Distributed Systems', 'Algorithms', 'Pedagogy'],
    ctaLabel: 'View Research Publications',
    ctaLink: '/blogs?category=Innovation',
    status: 'Active',
    statusColor: 'bg-emerald-500',
    featured: false,
    highlights: [
      'Applied studies on graph partitioning and low-latency data structures',
      'Empirical analysis of peer-driven project learning vs. lecture-only retention',
      'Design patterns for multi-tenant cloud-native micro-frontends',
      'Open technical whitepapers published quarterly'
    ],
    metrics: [
      { label: 'Whitepapers Published', value: '6' },
      { label: 'Research Citations', value: '45+' },
      { label: 'Ongoing Studies', value: '3' }
    ]
  }
];

export const ECOSYSTEM_CATEGORIES: EcosystemCategory[] = [
  'Education',
  'Corporate / Delivery',
  'Community',
  'Tools',
  'Research'
];

export const FILTER_TAGS = [
  'All',
  'Education',
  'Project Development',
  'Build-to-Ship',
  'DSA',
  'Placement Prep',
  'Enterprise',
  'Cloud Architecture',
  'Community',
  'Tools',
  'Research'
];
