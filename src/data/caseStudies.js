export const CASE_STUDY_CATEGORIES = [
  'All Projects',
  'AI & Intelligent Automation',
  'Enterprise Engineering',
  'Cloud & Platform Systems',
  'Data & Operational Intelligence',
  'Quality & Reliability Engineering',
  'CTO as Service',
];

export const CASE_STUDIES = [
  {
    id: 'hiringjet',
    client: 'HiringJet',
    category: 'Enterprise Engineering',
    industry: 'Recruitment Technology',
    capability: 'Enterprise Engineering',
    engagement: 'Product Design & Platform Engineering',
    product: 'Multi-Portal Recruitment Platform',
    title: 'Building a connected recruitment platform for modern hiring operations.',
    titleAccent: 'hiring operations.',
    cardTitle: 'Rebuilding the recruitment experience for connected hiring workflows.',
    summary:
      'An integrated recruitment platform designed to connect job seekers, employers and recruitment agencies through streamlined hiring workflows.',
    lead:
      'A multi-portal recruitment ecosystem bridging candidates, hiring managers, and partner agencies through synchronized workflows and automated governance.',
    introTitle: 'Bringing fragmented recruitment experiences together',
    introBody:
      'Recruitment platforms are rarely used by a single type of user. Job seekers prioritize discovery speed and transparent progress. Corporate employers require business verification, vacancy governance, and slot-controlled interviews. Recruitment agencies need dedicated multi-client roster management. HiringJet brought these disparate workflows together into a unified platform architecture.',
    tags: ['PLATFORM ENGINEERING', 'WORKFLOW DESIGN'],
    services: [
      'Product Strategy',
      'UX/UI Design',
      'Frontend Development',
      'Backend Development',
      'Quality Assurance',
      'AI Integration',
    ],
    image: '/images/hiringjet_tablet.jpg',
    metaLabel: 'Recruitment Technology / Enterprise Engineering',
    sections: [
      {
        id: 'problem',
        label: 'The Problem',
        eyebrow: 'THE PROBLEM',
        heading: 'Bringing fragmented recruitment experiences together',
        body:
          'Recruitment involves multiple stakeholders with different expectations and operational requirements. HiringJet required a connected platform that could support job seekers, employers and recruitment agencies while managing complex workflows around account verification, job publishing, candidate discovery and interview coordination.',
      },
      {
        id: 'impact',
        label: 'Operational Impact',
        eyebrow: 'OPERATIONAL IMPACT',
        heading: 'Managing different users and complex hiring workflows',
        body:
          'The platform needed to accommodate different recruitment journeys without compromising the experience of individual user groups. From job seeker onboarding and employer verification to subscription-controlled job publishing and interview allocation, each workflow required clear interactions and structured operational rules.',
      },
      {
        id: 'solution',
        label: 'Pirai Solution',
        eyebrow: 'PIRAI SOLUTION',
        heading: 'One platform designed around three recruitment experiences',
        body:
          'Pirai approached HiringJet as a multi-portal digital product, designing and engineering dedicated experiences for job seekers, employers and recruitment agencies. A central back-office environment supports platform administration, while specialised workflows such as JetWalkin bring AI-assisted skill suggestions and location-based candidate discovery into the recruitment experience.',
      },
      {
        id: 'architecture',
        label: 'Architecture & Workflow',
        eyebrow: 'ARCHITECTURE & WORKFLOW',
        heading: 'Connecting recruitment from registration to interview',
        body:
          'The platform brings together four connected environments: Job Seeker Portal, Employer Portal, Agency Portal and Back Office. These environments support the recruitment journey from account registration and job publishing to candidate discovery, selection and interview scheduling. JetWalkin extends this experience through skill suggestions and candidate discovery within a defined 25 km radius.',
      },
      {
        id: 'capabilities',
        label: 'Capabilities Used',
        eyebrow: 'CAPABILITIES USED',
        heading: 'Combining product design with platform engineering',
        body:
          "The engagement brought together product strategy, UX/UI design and platform engineering to address the platform's functional requirements. The work covered role-specific user experiences, registration and verification journeys, job management, subscription rules, candidate discovery, AI-assisted skill suggestions, interview scheduling and administrative workflows.",
      },
      {
        id: 'implementation',
        label: 'Implementation Process',
        eyebrow: 'IMPLEMENTATION PROCESS',
        heading: 'Turning recruitment requirements into connected experiences',
        body:
          "The implementation scope covered the design and development of the platform's individual user environments and their connected recruitment workflows. UX/UI design established the interaction patterns and interface experiences, while frontend and backend engineering addressed the application interfaces, business logic and operational requirements.",
      },
      {
        id: 'results',
        label: 'Results & Metrics',
        eyebrow: 'RESULTS & METRICS',
        heading: 'Establishing structured recruitment platform rules',
        body:
          'The documented product scope includes three dedicated user portals supported by a central back office, an initial allowance of three free job postings, location-based candidate discovery within 25 km and structured interview-slot allocation. These figures represent product requirements rather than measured business-performance results.',
      },
      {
        id: 'outcomes',
        label: 'Business Outcomes',
        eyebrow: 'BUSINESS OUTCOMES',
        heading: 'Building a foundation for connected hiring operations',
        body:
          'HiringJet establishes a connected digital foundation for recruitment operations, bringing different stakeholder experiences and hiring workflows into one platform. The solution supports structured job management, candidate discovery and interview coordination while accommodating the distinct needs of job seekers, employers and recruitment agencies.',
      },
    ],
  },
  {
    id: 'insurance-claims',
    client: 'HiringJet',
    category: 'Enterprise Engineering',
    industry: 'Insurance',
    capability: 'Enterprise Engineering',
    engagement: 'Operations Rebuild',
    product: 'Claims Workflow Platform',
    title: 'Claims workflow rebuild, 10-week delivery',
    cardTitle: 'Claims workflow rebuild, 10-week delivery',
    summary:
      "Pirai embedded with a regional insurer's ops group and rebuilt their claims workflow end to end. Adoption was immediate — the system was designed around how adjusters actually work, not how the org chart is drawn.",
    lead:
      "Pirai embedded with a regional insurer's operations group and rebuilt its claims workflow end to end, designing around the way adjusters actually work.",
    tags: ['WORKFLOW AUTOMATION', 'UX RESEARCH'],
    services: ['Product Strategy', 'UX Research', 'Platform Engineering', 'Workflow Automation'],
    image: '/images/hiringjet_tablet.jpg',
    metaLabel: 'Insurance • Operations',
    sections: [
      {
        id: 'problem',
        label: 'The Problem',
        eyebrow: 'THE PROBLEM',
        heading: 'Claims operations designed around the org chart',
        body:
          'The existing claims process reflected departmental boundaries more than how adjusters actually worked day to day, creating friction, handoffs and slow adoption of previous tooling.',
      },
      {
        id: 'solution',
        label: 'Pirai Solution',
        eyebrow: 'PIRAI SOLUTION',
        heading: 'An end-to-end rebuild around real adjuster workflows',
        body:
          'Pirai embedded with the operations group, mapped the true claims journey, and rebuilt the workflow end to end so the system matched how people already worked.',
      },
      {
        id: 'results',
        label: 'Results & Metrics',
        eyebrow: 'RESULTS & METRICS',
        heading: '10-week delivery with immediate adoption',
        body:
          'The rebuilt claims workflow shipped in under 10 weeks. Adoption was immediate because the design started from adjuster reality rather than a slide-deck process map.',
      },
    ],
  },
  {
    id: 'beacon',
    client: 'Beacon',
    category: 'Data & Operational Intelligence',
    industry: 'Healthcare',
    capability: 'Data & Operational Intelligence',
    engagement: 'Product Build',
    product: 'Operations Visibility Platform',
    title: 'Beacon: unified ops visibility for care teams',
    cardTitle: 'Beacon: unified ops visibility for care teams',
    summary:
      'A healthcare operations platform giving hospital ops teams one operational view across systems that previously never talked to each other — cutting handoff time between departments.',
    lead:
      'A healthcare operations platform giving hospital ops teams one operational view across systems that previously never talked to each other.',
    tags: ['PRODUCT STRATEGY', 'FULL-STACK BUILD'],
    services: ['Product Strategy', 'Full-Stack Engineering', 'Data Integration'],
    image: '/images/beacon_monitor.jpg',
    metaLabel: 'Healthcare • Operations Intelligence',
    sections: [
      {
        id: 'problem',
        label: 'The Problem',
        eyebrow: 'THE PROBLEM',
        heading: 'Care teams working across disconnected systems',
        body:
          'Hospital operations teams were forced to piece together status across systems that never shared a common view, slowing handoffs between departments.',
      },
      {
        id: 'solution',
        label: 'Pirai Solution',
        eyebrow: 'PIRAI SOLUTION',
        heading: 'One operational view for care operations',
        body:
          'Beacon unifies operational signals into a single platform so care teams can see what matters without chasing updates across tools.',
      },
    ],
  },
  {
    id: 'urban-cooperative-banks',
    client: 'Urban Cooperative Banks',
    category: 'AI & Intelligent Automation',
    industry: 'BFSI',
    capability: 'AI & Intelligent Automation',
    engagement: 'Digital Lending Pilot',
    product: 'Lending Workflow Platform',
    title: 'Digital lending pilot for Urban Cooperative Banks',
    cardTitle: 'Digital lending pilot for Urban Cooperative Banks',
    summary:
      'A digital lending pilot that helps cooperative banks move credit workflows from paper-heavy processes into a guided, auditable digital experience.',
    lead:
      'A digital lending pilot designed for Urban Cooperative Banks, focused on practical adoption rather than a greenfield rebuild.',
    tags: ['AI INTEGRATION', 'WEB APP'],
    services: ['AI Integration', 'Web Application', 'Process Design'],
    image: '/images/bank_lending.jpg',
    metaLabel: 'BFSI • Digital Lending',
    sections: [
      {
        id: 'solution',
        label: 'Pirai Solution',
        eyebrow: 'PIRAI SOLUTION',
        heading: 'A lending pilot built for cooperative bank operations',
        body:
          'The pilot digitizes key lending steps while preserving the controls and review patterns cooperative banks already rely on.',
      },
    ],
  },
  {
    id: 'predictive-quality',
    client: 'Manufacturing Partner',
    category: 'AI & Intelligent Automation',
    industry: 'Manufacturing',
    capability: 'AI & Intelligent Automation',
    engagement: 'Plant Rollout',
    product: 'Predictive Quality System',
    title: 'Predictive quality checks on the production line',
    cardTitle: 'Predictive quality checks on the production line',
    summary:
      'Quality checks that surface risk earlier on the production line, helping plant teams intervene before defects cascade into scrap or rework.',
    lead:
      'A predictive quality system designed to help plant teams catch issues earlier in production.',
    tags: ['AI INTEGRATION', 'PLANT ROLLOUT'],
    services: ['AI Integration', 'Plant Systems', 'Quality Engineering'],
    image: '/images/manufacturing_laptop.jpg',
    metaLabel: 'Manufacturing • Quality Systems',
    sections: [
      {
        id: 'solution',
        label: 'Pirai Solution',
        eyebrow: 'PIRAI SOLUTION',
        heading: 'Earlier signals for production quality',
        body:
          'The system brings predictive checks into the production line so quality teams can act before defects become expensive.',
      },
    ],
  },
  {
    id: 'zice',
    client: 'ZICE',
    category: 'Data & Operational Intelligence',
    industry: 'ESG',
    capability: 'Data & Operational Intelligence',
    engagement: 'Platform Build',
    product: 'ESG Reporting Platform',
    title: 'Bringing enterprise sustainability data into one connected platform.',
    cardTitle: 'Bringing enterprise sustainability data into one connected platform.',
    summary:
      'A structured ESG platform designed to simplify framework management, disclosures, data collection and sustainability reporting.',
    lead:
      'A structured ESG platform designed to simplify framework management, disclosures, data collection and sustainability reporting.',
    tags: ['DATA COLLECTION', 'REPORTING'],
    services: ['Data Platform', 'Reporting', 'Product Engineering'],
    image: '/images/beacon_monitor.jpg',
    metaLabel: 'ESG • Sustainability',
    sections: [
      {
        id: 'solution',
        label: 'Pirai Solution',
        eyebrow: 'PIRAI SOLUTION',
        heading: 'One place for sustainability data and disclosures',
        body:
          'ZICE brings framework management, data collection and reporting into a connected platform for enterprise sustainability teams.',
      },
    ],
  },
  {
    id: 'cloud-architecture-builder',
    client: 'Cloud Architecture Builder',
    category: 'Cloud & Platform Systems',
    industry: 'Enterprise Technology',
    capability: 'Cloud & Platform Systems',
    engagement: 'Product Engineering',
    product: 'Architecture Design Tool',
    title: 'Simplifying complex cloud architecture for engineering teams.',
    cardTitle: 'Simplifying complex cloud architecture for engineering teams.',
    summary:
      'A unified visual experience for designing and validating cloud infrastructure across multiple providers.',
    lead:
      'A unified visual experience for designing and validating cloud infrastructure across multiple providers.',
    tags: ['ARCHITECTURE DESIGN', 'VALIDATION'],
    services: ['Cloud Architecture', 'Product Engineering', 'Validation'],
    image: '/images/bank_lending.jpg',
    metaLabel: 'Enterprise Technology • Cloud',
    sections: [
      {
        id: 'solution',
        label: 'Pirai Solution',
        eyebrow: 'PIRAI SOLUTION',
        heading: 'A clearer way to design multi-cloud architecture',
        body:
          'The builder helps engineering teams design and validate infrastructure visually across providers without losing architectural rigor.',
      },
    ],
  },
  {
    id: 'process-automation',
    client: 'Operations Partner',
    category: 'AI & Intelligent Automation',
    industry: 'Operations',
    capability: 'AI & Intelligent Automation',
    engagement: 'Automation Program',
    product: 'Operations Automation Layer',
    title: 'Automating routine operations so teams can focus on decisions.',
    cardTitle: 'Automating routine operations so teams can focus on decisions.',
    summary:
      'An intelligent automation layer that handles repetitive operational tasks and routes exceptions to the right people.',
    lead:
      'An intelligent automation layer that handles repetitive operational tasks and routes exceptions to the right people.',
    tags: ['INTELLIGENT AUTOMATION', 'WORKFLOW'],
    services: ['Intelligent Automation', 'Workflow Design'],
    image: '/images/manufacturing_laptop.jpg',
    metaLabel: 'Operations • Automation',
    sections: [
      {
        id: 'solution',
        label: 'Pirai Solution',
        eyebrow: 'PIRAI SOLUTION',
        heading: 'Automation that leaves judgment with people',
        body:
          'Routine work is automated while exceptions are routed clearly, so teams spend time on decisions instead of repetition.',
      },
    ],
  },
  {
    id: 'document-intelligence',
    client: 'Financial Services Partner',
    category: 'AI & Intelligent Automation',
    industry: 'Financial Services',
    capability: 'AI & Intelligent Automation',
    engagement: 'AI Pipeline',
    product: 'Document Intelligence',
    title: 'Turning unstructured documents into usable data.',
    cardTitle: 'Turning unstructured documents into usable data.',
    summary:
      'An AI-assisted pipeline that extracts and structures information from documents for downstream systems.',
    lead:
      'An AI-assisted pipeline that extracts and structures information from documents for downstream systems.',
    tags: ['AI', 'DATA EXTRACTION'],
    services: ['AI', 'Data Extraction', 'Integration'],
    image: '/images/hiringjet_tablet.jpg',
    metaLabel: 'Financial Services • Document AI',
    sections: [
      {
        id: 'solution',
        label: 'Pirai Solution',
        eyebrow: 'PIRAI SOLUTION',
        heading: 'From documents to structured inputs',
        body:
          'The pipeline turns unstructured documents into usable data that downstream systems and teams can trust.',
      },
    ],
  },
];

export function getCaseStudyById(id) {
  return CASE_STUDIES.find((study) => study.id === id) || null;
}

export function getCategoryCounts() {
  const counts = { 'All Projects': CASE_STUDIES.length };
  CASE_STUDY_CATEGORIES.slice(1).forEach((category) => {
    counts[category] = CASE_STUDIES.filter((study) => study.category === category).length;
  });
  return counts;
}
