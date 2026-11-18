import React from 'react';
import Button from '../Button';

const STATS = [
  { value: '30+', label: 'Projects' },
  { value: '50+', label: 'Engineers' },
  { value: '5', label: 'Countries' },
  { value: '6M+', label: 'Avg. Test Execution' },
];

export default function CareersHero({ onExploreOpportunities, onLifeAtPirai }) {
  return (
    <section className="careers-hero">
      <div className="container">
        <div className="careers-hero-inner">
          <h1>
            Build your future.{' '}
            <span className="accent-italic">Engineer what matters.</span>
          </h1>
          <p>
            Join teams solving high-technology challenges for regulated enterprises — and grow through the work you ship.
          </p>
          <div className="careers-hero-actions">
            <Button variant="type1" size="hero" onClick={onExploreOpportunities}>
              Explore Opportunities
            </Button>
            <Button variant="type2" size="hero" onClick={onLifeAtPirai}>
              Life at Pirai
            </Button>
          </div>
        </div>

        <div className="careers-hero-stats">
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
        .careers-hero {
          padding: 140px 0 64px;
          background: #FFFFFF;
        }
        .careers-hero-inner {
          max-width: 780px;
          margin: 0 auto 48px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }
        .careers-hero h1 {
          margin: 0;
          font-size: 56px;
          line-height: 68px;
          font-weight: 600;
          color: var(--heading);
        }
        .careers-hero .accent-italic {
          color: var(--primary);
          font-style: italic;
          font-weight: 500;
        }
        .careers-hero p {
          margin: 0;
          max-width: 620px;
          font-size: 16px;
          line-height: 26px;
          color: var(--body);
        }
        .careers-hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          justify-content: center;
          margin-top: 8px;
        }
        .careers-hero-stats {
          display: flex;
          align-items: stretch;
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          padding: 28px 0;
        }
        .careers-hero .stat-col {
          flex: 1;
          text-align: center;
          padding: 0 12px;
        }
        .careers-hero .stat-number {
          font-size: 36px;
          line-height: 44px;
          font-weight: 600;
          color: var(--heading);
        }
        .careers-hero .stat-caption {
          margin-top: 8px;
          font-size: 12px;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: var(--body);
        }
        .careers-hero .stat-vert-line {
          width: 1px;
          background: var(--border);
        }
        @media (max-width: 768px) {
          .careers-hero h1 {
            font-size: 36px;
            line-height: 46px;
          }
          .careers-hero-stats {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            border: none;
          }
          .careers-hero .stat-vert-line {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
