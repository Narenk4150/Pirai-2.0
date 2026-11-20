import React from 'react';
import Button from '../Button';

const STATS = [
  { value: '2017', label: 'Founded' },
  { value: '100+', label: 'Engineers' },
  { value: '5', label: 'Countries' },
  { value: '10wk', label: 'Avg. pilot to production' },
];

export default function CareersHero({ onExploreOpportunities, onLifeAtPirai }) {
  return (
    <section className="careers-hero">
      <div className="container">
        <div className="careers-hero-col">
          <div className="careers-hero-copy">
            <div className="section-pill">
              <span className="dot" />
              <span>Careers At Pirai</span>
            </div>
            <h1>
              <span className="careers-hero-line">Build your future.</span>
              <span className="accent-italic careers-hero-line">Engineer what matters.</span>
            </h1>
            <p>
              Join teams solving high-technology challenges for regulated enterprises — and grow through the work you ship.
            </p>
          </div>

          <div className="careers-hero-actions">
            <Button variant="type1" size="hero" onClick={onExploreOpportunities}>
              Explore Opportunities
            </Button>
            <Button variant="type2" size="hero" onClick={onLifeAtPirai}>
              Life at Pirai
            </Button>
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
      </div>

      <style>{`
        .careers-hero {
          padding: 140px 0 72px;
          background: #FFFFFF;
        }
        .careers-hero-col {
          max-width: 860px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 32px;
        }
        .careers-hero-copy {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
          width: 100%;
        }
        .careers-hero .section-pill {
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
          margin: 0;
        }
        .careers-hero .section-pill .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--primary);
        }
        .careers-hero h1 {
          margin: 0;
          max-width: 720px;
          font-family: 'Poppins', sans-serif;
          font-size: 54px;
          line-height: 64px;
          font-weight: 600;
          letter-spacing: -1px;
          color: var(--heading);
        }
        .careers-hero-line {
          display: block;
        }
        .careers-hero .accent-italic {
          color: var(--primary);
          font-style: italic;
          font-weight: 400;
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
          align-items: center;
          gap: 14px;
        }
        .careers-hero-stats {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 12px;
          padding-top: 20px;
          border-top: 1px solid var(--border);
        }
        .careers-hero .stat-col {
          width: 170px;
          flex: 1 1 0;
          min-width: 0;
          text-align: left;
        }
        .careers-hero .stat-number {
          font-size: 36px;
          line-height: 44px;
          font-weight: 600;
          color: var(--heading);
        }
        .careers-hero .stat-caption {
          margin-top: 6px;
          font-size: 12px;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: var(--body);
        }
        .careers-hero .stat-vert-line {
          width: 1px;
          align-self: stretch;
          background: var(--border);
          flex: 0 0 1px;
        }
        @media (max-width: 768px) {
          .careers-hero {
            padding: 120px 0 56px;
          }
          .careers-hero h1 {
            font-size: 36px;
            line-height: 46px;
            letter-spacing: -0.5px;
          }
          .careers-hero-stats {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px 16px;
            border-top: 1px solid var(--border);
          }
          .careers-hero .stat-col {
            width: auto;
          }
          .careers-hero .stat-vert-line {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
