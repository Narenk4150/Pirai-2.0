export const SOLUTIONS = [
  {
    id: 'intelligent-automation',
    aliases: ['ai-automation', 'ai-&-intelligent-automation'],
    navLabels: ['AI Automation', 'Intelligent Automation', 'AI & Intelligent Automation'],
    pill: 'AI & Intelligent Automation',
    heroTitle: 'Turn Complex Operations Into',
    heroAccent: 'Intelligent Workflows',
    lead:
      'Pirai connects AI, workflows and enterprise systems to automate repetitive work and improve how teams operate.',
    primaryCta: 'Discuss Your Challenge',
    secondaryCta: 'Explore Capabilities',
    secondaryCtaTarget: 'cases',
    problem: {
      pill: 'The Enterprise Problem',
      titleBefore: 'Enterprise AI',
      titleAfter: ' is rarely limited by the model.',
      lead:
        'The harder problem is connecting intelligence to the systems, information and workflows that run the business.',
      image: '/images/Services/AI%20Automation/Enterprise%20Problem.png',
      items: [
        {
          number: '01',
          title: 'Fragmented information',
          body: 'Critical knowledge lives across documents, applications and disconnected systems.',
        },
        {
          number: '02',
          title: 'Manual workflows',
          body: 'Teams still move information between systems and make repetitive decisions manually.',
        },
        {
          number: '03',
          title: 'AI stuck in pilots',
          body: 'Proofs of concept demonstrate potential but struggle to become production systems.',
        },
        {
          number: '04',
          title: 'Context gaps',
          body: "Generic AI doesn't understand the organization's processes, policies and operational context.",
        },
        {
          number: '05',
          title: 'Trust & control',
          body: 'Enterprise automation needs governance, human oversight and predictable behavior.',
        },
      ],
    },
    methodology: {
      pill: 'How Pirai Works',
      titleBefore: 'One method,',
      titleAccent: 'Six disciplined stages.',
      lead:
        'The same repeatable sequence runs behind every engagement — from the first workflow map to a production rollout.',
      stages: [
        {
          number: '01',
          title: 'Understand',
          body: 'Map the workflow, users, data and decisions.',
        },
        {
          number: '02',
          title: 'Contextualize',
          body: 'Grounding models in enterprise reality.',
        },
        {
          number: '03',
          title: 'Reason',
          body: 'Apply the right AI models & intelligence.',
        },
        {
          number: '04',
          title: 'Act',
          body: 'Automate workflows and decisions.',
        },
        {
          number: '05',
          title: 'Govern',
          body: 'Keep humans, policies and controls in the loop.',
        },
        {
          number: '06',
          title: 'Learn',
          body: 'Measure outcomes and continuously improve.',
        },
      ],
    },
    pain: {
      pill: 'Operational Impact',
      titleBefore: "When intelligence can't move through the workflow,",
      titleAccent: 'the business pays for it.',
      lead:
        'Every gap above shows up on the balance sheet — in lost hours, missed deadlines, and stalled AI investment.',
    },
    painCards: [
      {
        title: 'Hours lost to manual work every week',
        icon: '/images/Services/AI%20Automation/Hours.svg',
      },
      {
        title: 'Handoffs slow delivery cycles.',
        icon: '/images/Services/AI%20Automation/Handoffs.svg',
      },
      {
        title: 'Scattered context delays delivery.',
        icon: '/images/Services/AI%20Automation/Scattered.svg',
      },
      {
        title: 'Budget spent on pilots that never ship',
        icon: '/images/Services/AI%20Automation/Budget.svg',
      },
    ],
    highlightCard: {
      brand: 'Pirai',
      body: 'We connect intelligence to the work itself.',
      cta: 'Discuss Your Challenge',
    },
    capabilities: {
      pill: 'Intelligent Enterprise',
      titleBefore: 'Five capabilities,',
      titleAccent: 'One platform.',
      lead: 'Everything below plugs into the same architecture — nothing here is a bolt-on integration.',
      numbered: true,
      interactive: true,
      items: [
        {
          title: 'AI Workflow Systems',
          body: 'Orchestrate multi-step processes with AI decisions, system actions and human approvals in one flow.',
        },
        {
          title: 'Document Intelligence',
          body: 'Extract, classify and route information from documents into the systems that need to act on it.',
        },
        {
          title: 'LLM Integrations',
          body: 'Connect large language models to enterprise data, tools and policies so answers stay grounded.',
        },
        {
          title: 'AI Agents',
          body: 'Deploy agents that monitor, decide and execute within clear operational boundaries.',
        },
        {
          title: 'Operational Automation',
          body: 'Automate repetitive operational work while keeping auditability and exception handling intact.',
        },
      ],
    },
    showcase: {
      pill: 'Intelligent Enterprise',
      titleBefore: 'Intelligence designed around',
      titleAccent: 'enterprise architecture.',
      titleYour: 'your',
      diagram: {
        illustration: '/images/Services/AI%20Automation/AI%20Enterprise.svg',
        // Visual top → bottom: matches top-down assemble (Inputs first, Outcomes last)
        left: [
          {
            title: 'Context',
            body: 'Knowledge bases, logic,\nand governance.',
          },
          {
            title: 'Workflow',
            body: 'Orchestration, rules,\nand human approvals.',
          },
          {
            title: 'Outcomes',
            body: 'Faster execution,\nless overhead.',
          },
        ],
        right: [
          {
            title: 'Inputs',
            body: 'Data, documents, APIs,\nand human entry.',
          },
          {
            title: 'Intelligence',
            body: 'LLMs, models,\nand AI agents.',
          },
          {
            title: 'Systems',
            body: 'ERP, CRM, and\noperational platforms.',
          },
        ],
      },
    },
    cases: {
      pill: 'Selected work',
      titleBefore: 'AI that works',
      titleAccent: 'beyond the prototype.',
      lead:
        'A sample of engagements across regulated industries — each one designed around the team that has to run it every day.',
      cta: 'View all case study',
    },
    architecture: {
      pill: 'The Full Stack',
      titleBefore: 'Pirai adapts AI to the enterprise',
      titleAccent: '— not the enterprise to AI.',
      lead: 'Five layers working together as one system — not five disconnected tools bolted onto the business.',
      layers: [
        {
          title: 'AI',
          icon: '/images/Services/AI%20Automation/AI.svg',
          items: ['LLMs', 'ML Models', 'AI Agents'],
        },
        {
          title: 'Data',
          icon: '/images/Services/AI%20Automation/Data.svg',
          items: ['Data Platforms', 'Vector Search', 'Knowledge Systems'],
        },
        {
          title: 'Integration',
          icon: '/images/Services/AI%20Automation/Integration.svg',
          items: ['APIs', 'Enterprise Applications', 'Event Systems'],
        },
        {
          title: 'Infrastructure',
          icon: '/images/Services/AI%20Automation/Infrastructure.svg',
          items: ['Cloud', 'Containers', 'DevOps'],
        },
        {
          title: 'Governance',
          icon: '/images/Services/AI%20Automation/Governance.svg',
          items: ['Security', 'Access Control', 'Human Approval'],
        },
      ],
    },
    caseStudyIds: ['insurance-claims', 'urban-cooperative-banks', 'predictive-quality'],
  },
  {
    id: 'enterprise-solutions',
    aliases: ['enterprise-engineering', 'enterprise-solutions'],
    navLabels: ['Enterprise Solutions', 'Enterprise Engineering'],
    pill: 'Enterprise Engineering',
    heroTitle: 'Engineering the systems',
    heroAccent: 'enterprises depend on.',
    lead:
      'Pirai designs, builds and modernizes enterprise applications — connecting platforms, data and workflows into systems that scale with the business.',
    challenges: {
      pill: 'The Engineering Challenges',
      titleBefore: 'Complex systems',
      titleAfter: ' can hold business growth back.',
      lead:
        'Disconnected platforms, legacy constraints and fragile integrations make it harder to deliver reliable digital experiences.',
      items: [
        {
          number: '01',
          title: 'Legacy Systems',
          body: 'Outdated technology can be difficult to maintain, extend and evolve.',
        },
        {
          number: '02',
          title: 'Disconnected Applications',
          body: 'Siloed systems create fragmented data and manual workarounds.',
        },
        {
          number: '03',
          title: 'Integration Complexity',
          body: 'Multiple platforms, APIs and third-party services must work together reliably.',
        },
        {
          number: '04',
          title: 'Scaling Limitations',
          body: 'Systems must evolve to support changing business needs and increasing complexity.',
        },
      ],
    },
    approach: {
      pill: 'Our Engineering Approach',
      titleBefore: 'From business',
      titleAccent: 'needs to resilient systems.',
      lead:
        'We take a business-aligned approach to engineering, combining deep technical expertise with domain understanding to design, build and modernize systems that are reliable, integrated and built for long-term growth.',
      cards: [
        {
          title: 'Business-Aligned Engineering',
          body: 'Start with business goals, user needs and operational requirements.',
        },
        {
          title: 'Modern Architectures',
          body: 'Design for maintainability, integration and future scalability.',
        },
        {
          title: 'End-to-End Partnership',
          body: 'Support the journey from engineering strategy through delivery and ongoing improvement.',
        },
      ],
    },
    capabilities: {
      pill: 'Core Engineering Capabilities',
      titleBefore: 'Full-spectrum enterprise',
      titleAccent: 'engineering services.',
      lead: 'We deliver engineering services to build, integrate and modernize enterprise systems.',
      items: [
        'Full-Stack Development',
        'Enterprise Application Development',
        'API & Systems Integration',
        'Legacy Modernization',
        'System Architecture',
      ],
    },
    architecture: {
      pill: 'Architecture & System Integration',
      titleBefore: 'Connected systems for a stronger,',
      titleAccent: 'more agile enterprise.',
      lead: 'Applications, data and infrastructure connected through a reliable integration layer.',
      layers: [
        { title: 'User Channels', items: ['Web / Mobile', 'Internal Tools', 'Partner Systems'] },
        { title: 'Application Layer', items: ['Enterprise Apps', 'Custom Applications', 'Third-Party Systems'] },
        { title: 'Integration Layer', items: ['APIs', 'Middleware', 'Connectors'] },
        { title: 'Data Layer', items: ['Operational Data', 'Analytic Data', 'External Data'] },
        { title: 'Infrastructure', items: ['Cloud', 'On-Premises', 'Hybrid'] },
      ],
    },
    process: {
      pill: 'From engineering strategy to delivery',
      titleBefore: 'A proven path to',
      titleAccent: 'enterprise impact.',
      lead: 'We follow a structured, collaborative process to take engineering projects from discovery to production.',
      steps: [
        { number: '01', title: 'Discover', body: 'Map systems, constraints and business outcomes.' },
        { number: '02', title: 'Architect', body: 'Define the target architecture and integration plan.' },
        { number: '03', title: 'Build', body: 'Deliver in iterative releases with clear ownership.' },
        { number: '04', title: 'Operate', body: 'Harden reliability, observability and handover.' },
      ],
    },
    caseStudyIds: ['hiringjet', 'insurance-claims', 'beacon'],
  },
  {
    id: 'cloud-platforms',
    aliases: ['cloud-platform-systems', 'cloud-&-platform-systems', 'cloud-&-platforms'],
    navLabels: ['Cloud Platforms', 'Cloud & Platform Systems', 'Cloud & Platform System'],
    pill: 'Cloud & Platform System',
    heroTitle: 'Cloud platforms built to run the business',
    heroAccent: 'not just host it.',
    lead:
      'Plan, migrate and modernise your infrastructure with cloud, DevOps and database expertise. Pirai helps enterprises build secure, scalable platforms and keep critical systems running.',
    challenges: {
      pill: 'The Challenges',
      titleBefore: 'Growing systems',
      titleAfter: ' need more than infrastructure.',
      lead:
        'As applications and data grow, disconnected infrastructure and manual operations make it harder to scale, deliver and maintain reliability.',
      items: [
        {
          number: '01',
          title: 'Complex Cloud Environments',
          body: 'Managing workloads across multiple cloud platforms.',
        },
        {
          number: '02',
          title: 'Slow Software Delivery',
          body: 'Manual processes slow down development and releases.',
        },
        {
          number: '03',
          title: 'Legacy Database Systems',
          body: 'Modernising databases while protecting critical data.',
        },
        {
          number: '04',
          title: 'Limited Visibility',
          body: 'Keeping infrastructure and applications running smoothly.',
        },
      ],
    },
    whyMatters: {
      pill: 'Why It Matters',
      titleBefore: 'When infrastructure becomes complex,',
      titleAccent: 'operations feel it.',
      cards: [
        {
          title: 'Delivery Delays',
          body: 'Manual release processes make it difficult to maintain consistent software delivery.',
        },
        {
          title: 'Infrastructure Complexity',
          body: 'Multiple cloud environments increase the effort required to manage systems and resources.',
        },
        {
          title: 'Migration Risk',
          body: 'Critical data and applications need carefully planned transitions to maintain continuity.',
        },
        {
          title: 'Reduced Visibility',
          body: 'Disconnected monitoring tools make it harder to identify and investigate operational issues.',
        },
      ],
    },
    approach: {
      pill: 'Our Approach',
      titleBefore: 'From cloud strategy to',
      titleAccent: 'reliable operations.',
      lead:
        'As applications and data grow, disconnected infrastructure and manual operations make it harder to scale, deliver and maintain reliability.',
      steps: [
        {
          number: '01',
          title: 'Assess & Plan',
          body: 'Evaluate existing infrastructure, workloads, dependencies and business requirements to define the right migration or modernisation roadmap.',
        },
        {
          number: '02',
          title: 'Design Target Platforms',
          body: 'Design the target cloud environment and plan workload, application and database transitions.',
        },
        {
          number: '03',
          title: 'Automate & Modernise',
          body: 'Introduce infrastructure automation, containerisation and CI/CD pipelines to establish repeatable delivery practices.',
        },
        {
          number: '04',
          title: 'Monitor & Optimise',
          body: 'Improve operational visibility through monitoring, infrastructure management, backup planning and ongoing optimisation.',
        },
      ],
    },
    capabilities: {
      pill: 'Core Engineering Capabilities',
      titleBefore: 'Everything your cloud',
      titleAccent: 'platform needs to evolve.',
      lead:
        'From initial cloud planning to infrastructure automation and database modernisation, Pirai supports the technology foundations behind enterprise applications.',
      items: [
        'Cloud Strategy & Migration',
        'Managed & Multi-Cloud Services',
        'DevOps & CI/CD Automation',
        'Infrastructure as Code & Automation',
        'Database & Data Migration',
        'Monitoring, Backup & Disaster Recovery',
      ],
    },
    architecture: {
      pill: 'Connected Platform Architecture',
      titleBefore: 'One connected foundation',
      titleAccent: 'for modern enterprise operations.',
      lead:
        'Cloud infrastructure, application delivery and operational management work together to support dependable enterprise platforms.',
      layers: [
        {
          title: 'Business Applications',
          items: ['Enterprise Application', 'Web Applications', 'Business Databases', 'APIs and Integrations'],
        },
        {
          title: 'Delivery & Automation',
          items: ['Source Control', 'CI/CD Pipelines', 'Automated Testing', 'Infrastructure as Code'],
        },
        {
          title: 'Platform Operations',
          items: ['Monitoring', 'Backup & Recovery', 'Security Controls', 'Cost Optimisation'],
        },
      ],
    },
    caseStudyIds: ['beacon', 'hiringjet', 'predictive-quality'],
  },
];

export function getSolutionById(slug) {
  if (!slug) return null;
  const normalized = slug.toLowerCase();
  return (
    SOLUTIONS.find(
      (solution) =>
        solution.id === normalized ||
        solution.aliases?.includes(normalized) ||
        solution.navLabels.some((label) => label.toLowerCase().replace(/\s+/g, '-') === normalized)
    ) || null
  );
}

export function getSolutionIdFromLabel(label) {
  if (!label) return null;
  const match = SOLUTIONS.find((solution) =>
    solution.navLabels.some((item) => item.toLowerCase() === label.toLowerCase())
  );
  return match?.id || null;
}
