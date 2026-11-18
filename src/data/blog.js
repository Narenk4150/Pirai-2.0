export const BLOG_CATEGORIES = [
  'All Insights',
  'AI & Intelligent Automation',
  'Enterprise Engineering',
  'Cloud & Platform Systems',
  'Data & Operational Intelligence',
  'Quality & Reliability Engineering',
  'CTO as Service',
];

export const BLOG_POSTS = [
  {
    id: 'poc-to-production-ai',
    title: 'How enterprise AI is transforming everyday business operations.',
    cardTitle: 'From POC to Production: Scaling AI in Enterprise Operations',
    excerpt:
      'Explore how intelligent workflows move beyond isolated prototypes to improve operational efficiency and business decision-making.',
    category: 'AI & Intelligent Automation',
    categoryLabel: 'AI & AUTOMATION',
    date: 'May 15, 2026',
    readTime: '8 min read',
    author: 'Pirai Editorial Team',
    authorRole: 'Product & Design Practice',
    image: '/images/featured_insight.png',
    body: [
      'Most enterprise AI programs stall between a promising pilot and a system teams can trust in production. The gap is rarely model quality alone — it is operating design, ownership, and the discipline required to keep AI inside real workflows.',
      'Teams that scale successfully start with a narrow operational problem, define clear handoffs between people and automation, and instrument the system so failures are visible early.',
      'In this article we walk through the practical checkpoints we use when moving AI initiatives from POC to production-grade operations: data readiness, evaluation loops, change management, and the engineering patterns that keep systems maintainable after launch.',
    ],
  },
  {
    id: 'kubernetes-enterprise-scale',
    title: 'Kubernetes at Enterprise Scale',
    cardTitle: 'Kubernetes at Enterprise Scale',
    excerpt:
      'What changes when container platforms move from a single team experiment to shared enterprise infrastructure.',
    category: 'Cloud & Platform Systems',
    categoryLabel: 'CLOUD & PLATFORMS',
    date: 'Jun 28, 2026',
    readTime: '4 min read',
    author: 'Pirai Editorial Team',
    authorRole: 'Cloud Practice',
    image: '/images/insight_kubernetes.png',
    body: [
      'Kubernetes becomes an enterprise concern the moment multiple teams depend on it for delivery speed and operational reliability.',
      'At that point, platform design matters as much as cluster setup: guardrails, observability, and clear ownership boundaries keep teams moving without creating shared risk.',
    ],
  },
  {
    id: 'modernizing-legacy-systems',
    title: 'Modernizing Legacy Systems',
    cardTitle: 'Modernizing Legacy Systems',
    excerpt:
      'A staged approach to modernization that protects continuity while improving maintainability.',
    category: 'Enterprise Engineering',
    categoryLabel: 'ENTERPRISE ENGINEERING',
    date: 'Jun 20, 2026',
    readTime: '6 min read',
    author: 'Pirai Editorial Team',
    authorRole: 'Engineering Practice',
    image: '/images/insight_legacy.png',
    body: [
      'Legacy systems rarely fail all at once — they accumulate friction until change becomes expensive.',
      'The more durable modernization programs start with operating reality: which workflows matter, which interfaces can change safely, and how to migrate without freezing the business.',
    ],
  },
  {
    id: 'roi-of-ai-automation',
    title: 'ROI of AI Automation',
    cardTitle: 'ROI of AI Automation',
    excerpt:
      'How to measure automation value without reducing complex operations to vanity metrics.',
    category: 'AI & Intelligent Automation',
    categoryLabel: 'AI & AUTOMATION',
    date: 'Jun 19, 2026',
    readTime: '10 min read',
    author: 'Pirai Editorial Team',
    authorRole: 'Strategy Practice',
    image: '/images/insight_roi.png',
    body: [
      'Useful ROI for AI automation tracks cycle time, exception rates, and adoption — not just model accuracy slides.',
      'When those measures are tied to a real operating process, teams can decide where automation belongs and where human judgment should remain in the loop.',
    ],
  },
  {
    id: 'scaling-ai-web-apps',
    title: 'Production: Scaling AI Web Apps',
    cardTitle: 'Production: Scaling AI Web Apps',
    excerpt:
      'Architecture choices that help AI-enabled web applications stay reliable as usage grows.',
    category: 'Enterprise Engineering',
    categoryLabel: 'ENTERPRISE ARCHITECTURE',
    date: 'Jun 06, 2026',
    readTime: '9 min read',
    author: 'Pirai Editorial Team',
    authorRole: 'Platform Practice',
    image: '/images/insight_scaling.png',
    body: [
      'AI-enabled products introduce new load patterns: bursty inference, variable latency, and dependent upstream systems.',
      'Designing for those realities early — caching, queueing, fallbacks, and clear UX for delayed work — keeps products usable under production pressure.',
    ],
  },
  {
    id: 'data-ops-visibility',
    title: 'Building operational visibility from disconnected systems',
    cardTitle: 'Building operational visibility from disconnected systems',
    excerpt:
      'How teams create one trustworthy operating view without forcing a single-source rewrite.',
    category: 'Data & Operational Intelligence',
    categoryLabel: 'DATA & INTELLIGENCE',
    date: 'May 28, 2026',
    readTime: '7 min read',
    author: 'Pirai Editorial Team',
    authorRole: 'Data Practice',
    image: '/images/insight_legacy.png',
    body: [
      'Operational visibility usually fails because systems never agreed on definitions — not because dashboards were missing.',
      'The work starts by aligning events, ownership, and refresh expectations before visualizing anything.',
    ],
  },
];

export function getBlogPostById(id) {
  return BLOG_POSTS.find((post) => post.id === id) || null;
}

export function getBlogCategoryCounts() {
  const counts = { 'All Insights': BLOG_POSTS.length };
  BLOG_CATEGORIES.slice(1).forEach((category) => {
    counts[category] = BLOG_POSTS.filter((post) => post.category === category).length;
  });
  return counts;
}
