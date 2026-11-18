export const CAREER_TEAMS = [
  { id: 'product-design', title: 'Product Design & UX', description: 'Shape product experiences that teams adopt on day one.' },
  { id: 'frontend', title: 'Frontend Engineering', description: 'Build interfaces that stay fast, clear, and maintainable.' },
  { id: 'backend', title: 'Backend Engineering', description: 'Design services and data layers that scale with the business.' },
  { id: 'ai', title: 'AI & Intelligent Automation', description: 'Turn operational workflows into reliable intelligent systems.' },
  { id: 'cloud', title: 'Cloud & Platform Systems', description: 'Engineer platforms that stay secure, observable, and resilient.' },
  { id: 'data-quality', title: 'Data & Quality Engineering', description: 'Make data trustworthy and releases dependable.' },
];

export const CAREER_WHY = [
  {
    title: 'Meaningful Work',
    description: 'Build digital products that solve real business challenges.',
  },
  {
    title: 'Collaborative Teams',
    description: 'Work with talented people across technology and design.',
  },
  {
    title: 'Room to Grow',
    description: 'Learn, develop your skills and take on new challenges.',
  },
];

export const CAREER_GROWTH = [
  {
    title: 'Hands-on Experience',
    description: 'Learn by working on real-world projects.',
  },
  {
    title: 'Mentorship',
    description: 'Grow through guidance and peer learning.',
  },
  {
    title: 'Ownership',
    description: 'Take responsibility and shape your work.',
  },
];

export const JOB_OPENINGS = [
  {
    id: 'senior-frontend-engineer',
    title: 'Senior Frontend Engineer',
    shortTitle: 'Senior Frontend Engineer [React / TypeScript]',
    department: 'Frontend',
    location: 'On-site / India',
    detailLocation: 'Pollachi, India',
    experience: '2-10 Years Experience',
    detailExperience: '3-6 Years Experience',
    summary:
      'Help design and ship product interfaces used every day by enterprise teams — clear, fast, and built to last.',
    about:
      'We are looking for a Senior Frontend Engineer to build polished product experiences across regulated enterprise workflows. You will work closely with design and backend teams to turn complex requirements into interfaces that feel simple in use.',
    responsibilities: [
      'Build and maintain production React / TypeScript interfaces for multi-portal products.',
      'Partner with design to translate flows into accessible, responsive UI systems.',
      'Own frontend architecture decisions around state, performance, and component reuse.',
      'Collaborate with backend engineers on API contracts and integration patterns.',
      'Raise the bar on code quality through reviews, testing, and thoughtful documentation.',
    ],
    requirements: [
      '3+ years hands-on frontend development with React and TypeScript.',
      'Strong understanding of modern CSS layout, component systems, and accessibility.',
      'Experience integrating REST APIs and handling complex client-side state.',
      'Comfort collaborating in product squads with designers and backend engineers.',
    ],
    preferred: [
      'Experience with design systems and reusable component libraries.',
      'Familiarity with testing libraries and CI-friendly frontend workflows.',
    ],
  },
  {
    id: 'backend-platform-engineer',
    title: 'Backend Platform Engineer',
    shortTitle: 'Backend Platform Engineer [Node.js / Python]',
    department: 'Backend',
    location: 'On-site / India',
    detailLocation: 'Pollachi, India',
    experience: '3-8 Years Experience',
    detailExperience: '3-6 Years Experience',
    summary:
      'Design and build the services, data models, and integrations that keep enterprise products reliable under real load.',
    about:
      'We are seeking a Backend Platform Engineer to build scalable microservices and platform foundations that power Pirai products and client systems.',
    responsibilities: [
      'Design REST and gRPC microservices in Node.js or Python.',
      'Model transactional databases with PostgreSQL or MongoDB.',
      'Implement authentication, authorization, and secure service boundaries.',
      'Ensure unit-test coverage and dependable release quality.',
      'Collaborate with frontend and platform teams on end-to-end delivery.',
    ],
    requirements: [
      '3+ years hands-on backend development with Node.js/Express/NestJS or Python/FastAPI.',
      'In-depth knowledge of relational databases and ORM/query builders.',
      'Solid understanding of asynchronous event queues (RabbitMQ, Kafka, or Redis).',
    ],
    preferred: [
      'Experience deploying containerized workloads via Docker and Kubernetes.',
      'Familiarity with cloud-native monitoring and telemetry tools.',
    ],
  },
  {
    id: 'ai-automation-engineer',
    title: 'AI Automation Engineer',
    shortTitle: 'AI Automation Engineer [Applied AI / Workflows]',
    department: 'AI',
    location: 'On-site / India',
    detailLocation: 'Pollachi, India',
    experience: '2-7 Years Experience',
    detailExperience: '2-7 Years Experience',
    summary:
      'Apply AI where it improves real operational workflows — with clear ownership, evaluation, and production discipline.',
    about:
      'Join Pirai to design and ship intelligent automation that helps enterprise teams move faster without losing control of the process.',
    responsibilities: [
      'Prototype and productionize AI-assisted workflows for enterprise operations.',
      'Build evaluation loops, guardrails, and monitoring for model-assisted features.',
      'Collaborate with domain experts to map automation to real operating processes.',
      'Integrate AI capabilities into existing product and platform surfaces.',
    ],
    requirements: [
      'Hands-on experience shipping applied AI or automation features into production.',
      'Strong software engineering fundamentals in Python or TypeScript.',
      'Ability to communicate tradeoffs clearly with product and engineering partners.',
    ],
    preferred: [
      'Experience with retrieval systems, document intelligence, or workflow orchestration.',
      'Familiarity with regulated industry constraints and auditability needs.',
    ],
  },
];

export function getJobById(id) {
  return JOB_OPENINGS.find((job) => job.id === id) || null;
}
