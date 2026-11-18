import React from 'react';
import { BriefcaseBusiness, UsersRound, TrendingUp } from 'lucide-react';
import { CAREER_WHY } from '../../data/careers';

const ICONS = [BriefcaseBusiness, UsersRound, TrendingUp];

export default function CareersWhy() {
  return (
    <section className="careers-why">
      <div className="container">
        <div className="section-pill">
          <span className="dot" />
          <span>Why Pirai</span>
        </div>
        <h2>
          More than a workplace.{' '}
          <span className="blue-accent">A place to make an impact.</span>
        </h2>
        <div className="why-grid">
          {CAREER_WHY.map((item, index) => {
            const Icon = ICONS[index] || BriefcaseBusiness;
            return (
              <article key={item.title} className="why-card">
                <div className="why-icon">
                  <Icon size={28} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>

      <style>{`
        .careers-why {
          padding: 48px 0 72px;
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
        .careers-why h2 {
          margin: 0 0 36px;
          max-width: 720px;
          font-size: 40px;
          line-height: 50px;
          font-weight: 600;
          color: var(--heading);
        }
        .careers-why .blue-accent {
          color: var(--primary);
        }
        .why-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .why-card {
          background: #EEF0F4;
          border-radius: 24px;
          padding: 28px;
          min-height: 220px;
        }
        .why-icon {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: #FFFFFF;
          color: var(--primary);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }
        .why-card h3 {
          margin: 0 0 10px;
          font-size: 20px;
          color: var(--heading);
        }
        .why-card p {
          margin: 0;
          font-size: 15px;
          line-height: 24px;
          color: var(--body);
        }
        @media (max-width: 900px) {
          .why-grid {
            grid-template-columns: 1fr;
          }
          .careers-why h2 {
            font-size: 30px;
            line-height: 40px;
          }
        }
      `}</style>
    </section>
  );
}
