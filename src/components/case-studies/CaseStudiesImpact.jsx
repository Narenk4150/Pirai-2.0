import React from 'react';

const STATS = [
  { value: '6', label: 'Solution Domain' },
  { value: '30+', label: 'Projects Delivered' },
  { value: '9', label: 'Years of Experience' },
  { value: '100%', label: 'Verified Improvements' },
];

export default function CaseStudiesImpact() {
  return (
    <section className="cs-impact">
      <div className="container">
        <div className="section-pill">
          <span className="dot" />
          <span>Business Impact</span>
        </div>
        <h2>
          Engineering outcomes that{' '}
          <span className="blue-accent">move businesses forward.</span>
        </h2>
        <div className="cs-impact-stats">
          {STATS.map((stat, index) => (
            <React.Fragment key={stat.label}>
              {index > 0 && <div className="stat-vert-line" />}
              <div className="stat-col">
                <div className="stat-number">{stat.value}</div>
                <div className="stat-caption">{stat.label}</div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      <style>{`
        .cs-impact {
          padding: 40px 0 72px;
          background: #FFFFFF;
        }
        .section-pill {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          height: 24px;
          padding: 0 10px;
          border: 1px solid var(--border);
          border-radius: 12px;
          font-size: 12px;
          font-weight: 500;
          color: var(--body);
          margin-bottom: 20px;
        }
        .section-pill .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--primary);
        }
        .cs-impact h2 {
          margin: 0 0 40px;
          max-width: 640px;
          font-size: 40px;
          line-height: 50px;
          font-weight: 600;
          color: var(--heading);
        }
        .cs-impact .blue-accent {
          color: var(--primary);
        }
        .cs-impact-stats {
          display: flex;
          align-items: stretch;
          gap: 0;
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          padding: 28px 0;
        }
        .cs-impact .stat-col {
          flex: 1;
          text-align: center;
          padding: 0 16px;
        }
        .cs-impact .stat-number {
          font-size: 40px;
          line-height: 48px;
          font-weight: 600;
          color: var(--heading);
        }
        .cs-impact .stat-caption {
          margin-top: 8px;
          font-size: 12px;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: var(--body);
        }
        .cs-impact .stat-vert-line {
          width: 1px;
          background: var(--border);
        }
        @media (max-width: 768px) {
          .cs-impact h2 {
            font-size: 28px;
            line-height: 36px;
          }
          .cs-impact-stats {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 24px;
            border: none;
            padding: 0;
          }
          .cs-impact .stat-vert-line {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
