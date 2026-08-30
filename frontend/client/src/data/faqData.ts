export interface FAQItem {
  id: string;
  category: 'ecosystem' | 'partnerships' | 'pedagogy' | 'governance';
  question: string;
  answer: string;
  tags: string[];
}

export const FAQ_CATEGORIES = [
  { id: 'all', label: 'All Questions' },
  { id: 'ecosystem', label: 'Ecosystem & Wings' },
  { id: 'partnerships', label: 'Partner Opportunities & Hiring' },
  { id: 'pedagogy', label: 'Pedagogy & Rigor' },
  { id: 'governance', label: 'IP, Security & Compliance' },
] as const;

export const ABOUT_FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'ecosystem',
    question: 'How do Algorithmist Academy, Algorithmist Nexus, and Algorithmist Technologies interrelate?',
    answer: 'Algorithmist operates as a unified engineering parent organization. Algorithmist Academy establishes deep mathematical and algorithmic foundations (data structures, asymptotic analysis, competitive programming intuition). Algorithmist Nexus transforms this foundation into end-to-end software delivery through production build cycles, code reviews, and distributed systems design. Algorithmist Technologies and Optivio then deploy this verified engineering talent to solve complex architectural challenges for global enterprise clients.',
    tags: ['Ecosystem Architecture', 'Academy', 'Nexus', 'Optivio']
  },
  {
    id: 'faq-2',
    category: 'partnerships',
    question: 'What partner opportunities are available for universities, incubators, and enterprise teams?',
    answer: 'We partner along three main axes: 1) Institutional Pedagogy: Embedding industry-grade software engineering labs, capstone sprint accelerators, and competitive DSA curricula into computer science departments. 2) Talent Pipelines: Connecting top-tier hiring teams with pre-vetted engineers who have passed our verified build and algorithmic benchmarks. 3) Enterprise Delivery: Sponsoring real-world engineering sprints where fellows solve real business bottlenecks under staff engineer supervision.',
    tags: ['Universities', 'Hiring Pipeline', 'Enterprise Sprints']
  },
  {
    id: 'faq-3',
    category: 'partnerships',
    question: 'How does enterprise hiring work with Algorithmist fellows and graduates?',
    answer: 'Unlike traditional job boards or resume databases, every Algorithmist candidate is accompanied by verifiable GitHub build histories, performance telemetry across DSA benchmarks, and recorded code reviews. Companies can hire directly from our graduated cohorts or commission dedicated talent acceleration tracks tailored to their specific technology stack.',
    tags: ['Talent Acquisition', 'Telemetry', 'Vetted Candidates']
  },
  {
    id: 'faq-4',
    category: 'pedagogy',
    question: 'What makes the Algorithmist pedagogical model different from typical bootcamps or MOOCs?',
    answer: 'Traditional bootcamps focus on surface-level framework syntax without foundational algorithmic depth, while academic MOOCs rarely enforce production deployment standards. Algorithmist unifies both: fellows write custom data structures from scratch, optimize for Big-O spatial and temporal boundaries, and simultaneously deploy cloud-native, monitored microservices with CI/CD pipelines, unit testing suites, and real latency constraints.',
    tags: ['Rigor', 'DSA vs Frameworks', 'Production Standards']
  },
  {
    id: 'faq-5',
    category: 'governance',
    question: 'How does Algorithmist handle Intellectual Property (IP) and client confidentiality?',
    answer: 'We enforce enterprise-grade legal and data segregation protocols. All commercial projects, client codebases, and proprietary datasets handled by Algorithmist Technologies and Optivio are protected by comprehensive NDAs and strict IP assignment agreements. Client repositories reside in isolated environments with role-based access control (RBAC), and student sandbox environments never intersect with commercial client infrastructure.',
    tags: ['IP Assignment', 'Confidentiality', 'Data Isolation']
  },
  {
    id: 'faq-6',
    category: 'pedagogy',
    question: 'What is the acceptance rate and selection criteria for Algorithmist cohorts?',
    answer: 'Admission into Algorithmist fellowship tracks is competitive (historically <8% acceptance rate). Selection is based on algorithmic problem-solving aptitude, dedication to craftsmanship, and fundamental computing concepts. We prioritize high agency and technical curiosity over prior pedigree.',
    tags: ['Admissions', 'Acceptance Rate', 'Selection Standards']
  },
  {
    id: 'faq-7',
    category: 'ecosystem',
    question: 'What is the role of Algorithmist CoreLabs in open-source research and tooling?',
    answer: 'CoreLabs serves as the applied R&D and open-source division of the parent company. CoreLabs researchers publish technical teardowns, release open-source performance benchmarking suites, and experiment with developer tooling and compiler heuristics that feed back into Academy curriculum and enterprise consulting.',
    tags: ['CoreLabs', 'Open Source', 'R&D']
  },
  {
    id: 'faq-8',
    category: 'governance',
    question: 'How can an organization sponsor a dedicated hackathon, fellowship grant, or research lab?',
    answer: 'Organizations can collaborate with our Directorate to establish co-branded research grants, hackathon challenge tracks, or dedicated scholarship endowments. Reach out via our Contact Directorate portal with your strategic objectives, and our partnerships team will provide an institutional sponsorship brief within 24–48 hours.',
    tags: ['Sponsorship', 'Hackathons', 'Directorate Contact']
  }
];
