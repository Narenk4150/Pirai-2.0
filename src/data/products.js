export const PRODUCTS = [
  {
    id: 'contract-genie',
    number: '01',
    title: 'Contract Genie',
    tag: 'AI-POWERED CONTRACT MANAGEMENT',
    summary:
      'Simplify contract workflows with an intelligent approach to managing and working with business agreements.',
    heroTitle: 'Simplifying Legal Document Creation and Generation',
    lead:
      'Create and generate professional legal documents and contracts through a streamlined digital experience that simplifies document preparation.',
    overviewTitle: 'A Structured Approach to Legal Document Generation',
    overview:
      'Contract Genie is designed to simplify how users create and generate legal documents through a guided digital experience. Rather than assembling agreements from disconnected files, teams select an appropriate template, supply structured inputs, and generate clean, formatted documents ready for review.',
    challenge:
      'Legal and commercial teams often prepare agreements across scattered templates, emails, and local files — slowing reviews and creating inconsistent outputs.',
    services: [
      'Legal Document Creation',
      'Document Generation',
      'Contract Preparation',
      'Digital Document Workflow',
    ],
    steps: [
      { title: 'Choose a Document', body: 'Start with the required legal document type or available template.' },
      { title: 'Enter Information', body: 'Provide the relevant document details.' },
      { title: 'Generate Document', body: 'Generate the document based on the supplied information.' },
      { title: 'Review & Export', body: 'Review the generated document and proceed with the available output options.' },
    ],
    capabilities: [
      'Template-led document creation',
      'Structured input capture',
      'Consistent document generation',
      'Review-ready export workflows',
    ],
    impact:
      'Contract Genie helps teams reduce preparation friction, standardize outputs, and move legal document creation into one accessible workflow.',
  },
  {
    id: 'ai-mrp',
    number: '02',
    title: 'AI MRP',
    tag: 'AI-DRIVEN MATERIAL PLANNING',
    summary:
      'Bring greater intelligence to material planning, forecasting and inventory-related decisions.',
    heroTitle: 'Smarter Material Planning for Manufacturing Operations',
    lead:
      'AI MRP helps planning teams improve forecasting and inventory decisions with clearer signals across demand, supply, and production constraints.',
    overviewTitle: 'Planning support grounded in operational reality',
    overview:
      'AI MRP is designed to support material planning teams with better visibility into demand patterns, inventory risk, and replenishment choices — without replacing the judgment planners still need.',
    challenge:
      'Manufacturing planners often reconcile forecasts, inventory, and production signals across tools that never agree, creating reactive firefighting.',
    services: [
      'Demand Forecasting Support',
      'Inventory Intelligence',
      'Planning Workflows',
      'Operational Analytics',
    ],
    steps: [
      { title: 'Connect Planning Inputs', body: 'Bring demand, inventory, and production signals into one planning view.' },
      { title: 'Surface Risk', body: 'Identify shortages, excess, and planning exceptions early.' },
      { title: 'Recommend Actions', body: 'Support planners with prioritized recommendations.' },
      { title: 'Track Outcomes', body: 'Measure whether planning decisions improved inventory and service levels.' },
    ],
    capabilities: [
      'Forecast visibility',
      'Inventory risk signals',
      'Exception-focused planning',
      'Decision support for planners',
    ],
    impact:
      'AI MRP helps manufacturing teams reduce planning noise and make inventory decisions with clearer operational context.',
  },
  {
    id: 'sense-guard',
    number: '03',
    title: 'Sense Guard',
    tag: 'INTELLIGENT MONITORING',
    summary:
      'Improve operational visibility through monitoring and AI-based detection capabilities.',
    heroTitle: 'Operational Monitoring with Intelligent Detection',
    lead:
      'Sense Guard helps operations teams spot anomalies earlier and keep complex systems under watch without drowning in alerts.',
    overviewTitle: 'Monitoring designed for action, not noise',
    overview:
      'Sense Guard brings monitoring and anomaly detection together so teams can understand what changed, why it matters, and who needs to respond.',
    challenge:
      'Operations teams are often flooded with alerts that lack context, while meaningful anomalies hide across disconnected systems.',
    services: [
      'Operations Monitoring',
      'Anomaly Detection',
      'Alerting Workflows',
      'Visibility Dashboards',
    ],
    steps: [
      { title: 'Instrument Systems', body: 'Connect the operational signals that matter.' },
      { title: 'Detect Anomalies', body: 'Surface unusual patterns before they become incidents.' },
      { title: 'Route Response', body: 'Send the right context to the right owners.' },
      { title: 'Improve Continuously', body: 'Tune detection against real outcomes and false positives.' },
    ],
    capabilities: [
      'Unified operational visibility',
      'AI-assisted anomaly detection',
      'Context-rich alerting',
      'Response-ready workflows',
    ],
    impact:
      'Sense Guard helps teams move from reactive monitoring to earlier, more confident operational response.',
  },
];

export function getProductById(id) {
  return PRODUCTS.find((product) => product.id === id) || null;
}
