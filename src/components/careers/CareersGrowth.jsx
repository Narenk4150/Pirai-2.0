import React from 'react';
import { CAREER_GROWTH } from '../../data/careers';

export default function CareersGrowth() {
  return (
    <section className="careers-growth">
      <div className="container growth-grid">
        <div className="growth-copy">
          <div className="section-pill">
            <span className="dot" />
            <span>Your Growth</span>
          </div>
          <h2>Grow through the work you do.</h2>
        </div>

        <div className="growth-card">
          <div className="growth-card-inner">
            <div className="brand">Pirai</div>
            <div className="divider" />
            <div className="line">Engineering</div>
            <div className="accent">what matters.</div>
          </div>
        </div>

        <div className="growth-list">
          {CAREER_GROWTH.map((item) => (
            <div key={item.title} className="growth-item">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .careers-growth {
          padding: 40px 0 80px;
          background: #FFFFFF;
        }
        .growth-grid {
          display: grid;
          grid-template-columns: 1fr 280px 1fr;
          gap: 32px;
          align-items: center;
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
        .growth-copy h2 {
          margin: 0;
          font-size: 40px;
          line-height: 50px;
          font-weight: 600;
          color: var(--heading);
          max-width: 280px;
        }
        .growth-card {
          border-radius: 28px;
          background: linear-gradient(160deg, #EAF2FF 0%, #D7E7FF 100%);
          min-height: 320px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 32px;
        }
        .growth-card-inner {
          text-align: center;
        }
        .growth-card .brand {
          font-size: 42px;
          font-weight: 700;
          color: #1D4ED8;
        }
        .growth-card .divider {
          width: 48px;
          height: 3px;
          background: var(--primary);
          margin: 18px auto;
        }
        .growth-card .line {
          font-size: 22px;
          color: #1E3A8A;
          font-weight: 500;
        }
        .growth-card .accent {
          font-size: 24px;
          color: var(--primary);
          font-weight: 700;
        }
        .growth-list {
          display: flex;
          flex-direction: column;
        }
        .growth-item {
          padding: 22px 0;
          border-bottom: 1px solid var(--border);
        }
        .growth-item:first-child {
          padding-top: 0;
        }
        .growth-item:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }
        .growth-item h3 {
          margin: 0 0 6px;
          font-size: 18px;
          color: var(--heading);
        }
        .growth-item p {
          margin: 0;
          font-size: 14px;
          line-height: 22px;
          color: var(--body);
        }
        @media (max-width: 900px) {
          .growth-grid {
            grid-template-columns: 1fr;
          }
          .growth-copy h2 {
            max-width: none;
            font-size: 30px;
            line-height: 40px;
          }
        }
      `}</style>
    </section>
  );
}
