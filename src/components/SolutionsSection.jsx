import React from 'react';
import { Bot, Server, Cloud, Database, ShieldAlert, UserCheck, ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function SolutionsSection({ onSelectSolution }) {
  const capabilities = [
    {
      id: 'ai-automation',
      title: 'AI & Intelligent Automation',
      tagline: 'Streamline complex operations with autonomous AI workflows.',
      description: 'End-to-end multi-agent orchestration, document intelligence, and automated decision engines built for strict enterprise SLAs.',
      icon: Bot,
      outcomes: ['85% reduction in manual processing', '10-week POC to production cycle', 'Human-in-the-loop oversight'],
      tag: 'HEALTHCARE'
    },
    {
      id: 'enterprise-eng',
      title: 'Enterprise Engineering',
      tagline: 'Modernize monolithic applications into high-scale platforms.',
      description: 'Decouple legacy systems, implement event-driven architectures, and ensure zero-downtime database migrations.',
      icon: Server,
      outcomes: ['99.99% system availability', 'Sub-50ms API response times', 'Zero data loss guarantees'],
      tag: 'WORKFLOW AUTOMATION'
    },
    {
      id: 'cloud-platform',
      title: 'Cloud & Platform Systems',
      tagline: 'Resilient Kubernetes infrastructure and automated IaC pipelines.',
      description: 'Multi-cloud deployment orchestration, cost-optimized container management, and continuous security compliance.',
      icon: Cloud,
      outcomes: ['40% reduction in cloud spend', 'Automated CI/CD rollouts', 'SOC2 / HIPAA compliance'],
      tag: 'DEVOPS'
    },
    {
      id: 'data-intel',
      title: 'Data & Intelligence',
      tagline: 'Transform raw data into real-time operational insights.',
      description: 'Unified data lakes, feature store infrastructure, and predictive analytics pipelines for executive decision-making.',
      icon: Database,
      outcomes: ['Real-time streaming telemetry', 'Unified customer 360 views', 'ML Model monitoring'],
      tag: 'ANALYTICS'
    },
    {
      id: 'quality-sre',
      title: 'Quality & Reliability',
      tagline: 'Full-spectrum Site Reliability Engineering and automated QA.',
      description: 'Chaos testing, synthetic monitoring, load testing, and self-healing infrastructure protocols.',
      icon: ShieldAlert,
      outcomes: ['Automated regression suites', 'Predictive incident mitigation', '24/7 SRE coverage'],
      tag: 'SRE'
    },
    {
      id: 'cto-service',
      title: 'CTO as a Service',
      tagline: 'Strategic technical leadership for high-growth enterprises.',
      description: 'Architectural audits, technology stack selection, security governance, and technical due diligence.',
      icon: UserCheck,
      outcomes: ['Technical roadmap alignment', 'Vendor & stack evaluation', 'Engineering culture scaling'],
      tag: 'ADVISORY'
    }
  ];

  return (
    <section className="solutions-section" id="solutions">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="eyetray-badge">
            <span className="dot" />
            <span>OUR SERVICES</span>
          </div>
          <h2 className="section-h2">
            Deep Domain Engineering & AI Solutions
          </h2>
          <p className="section-body header-desc">
            Our specialized engineering groups embed directly with your teams to solve complex operational challenges.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="capabilities-grid">
          {capabilities.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.id} className="capability-card">
                <div className="card-top-row">
                  <div className="card-icon-box">
                    <Icon size={24} />
                  </div>
                  <span className="tag-pill">{item.tag}</span>
                </div>

                <h3 className="card-title">{item.title}</h3>
                <p className="card-tagline">{item.tagline}</p>
                <p className="section-body card-description">{item.description}</p>

                <div className="card-outcomes">
                  {item.outcomes.map((outcome, idx) => (
                    <div key={idx} className="outcome-item">
                      <CheckCircle2 size={15} className="check-icon" />
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>

                <button 
                  className="btn-secondary standard-btn card-action-btn"
                  onClick={() => onSelectSolution(item)}
                >
                  <span>Explore Architecture</span>
                  <div className="btn-icon-circle">
                    <ArrowLeft size={16} />
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .solutions-section {
          padding: 100px 0;
          background: #FFFFFF;
        }

        .section-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: 56px;
        }

        .header-desc {
          max-width: 650px;
          margin-top: 12px;
        }

        .capabilities-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(370px, 1fr));
          gap: 28px;
        }

        .capability-card {
          background: #FFFFFF;
          border-radius: 24px;
          padding: 32px;
          border: 1px solid var(--border);
          display: flex;
          flex-direction: column;
          transition: border-color 0.2s ease, transform 0.2s ease;
        }

        .capability-card:hover {
          border-color: var(--primary);
          transform: translateY(-2px);
        }

        .card-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .card-icon-box {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: var(--surface-alt);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .card-title {
          font-size: 22px;
          font-weight: 600;
          color: var(--heading);
          margin-bottom: 6px;
        }

        .card-tagline {
          font-size: 14px;
          font-weight: 500;
          color: var(--primary);
          margin-bottom: 12px;
        }

        .card-description {
          font-size: 15px;
          color: var(--body);
          line-height: 1.6;
          margin-bottom: 24px;
        }

        .card-outcomes {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 28px;
          padding-top: 16px;
          border-top: 1px dashed var(--border);
        }

        .outcome-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: var(--heading);
          font-weight: 500;
        }

        .check-icon {
          color: var(--primary);
          flex-shrink: 0;
        }

        .card-action-btn {
          margin-top: auto;
          width: 100%;
        }

        @media (max-width: 768px) {
          .capabilities-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
