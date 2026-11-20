import React from 'react';
import { CAREER_WHY } from '../../data/careers';

export default function CareersWhy() {
  return (
    <section className="careers-why">
      <div className="container">
        <div className="why-header">
          <div className="section-pill">
            <span className="dot" />
            <span>Why Pirai</span>
          </div>
          <h2>
            <span className="blue-accent">More than a workplace.</span>
            <span className="why-title-line">A place to make an impact.</span>
          </h2>
        </div>
        <div className="why-grid">
          {CAREER_WHY.map((item) => (
            <article key={item.title} className="why-card">
              <div className="why-icon">
                <img src={item.icon} alt="" width={48} height={48} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .careers-why {
          padding: 40px 0 80px;
          background: #FFFFFF;
        }
        .why-header {
          margin-bottom: 40px;
          max-width: 720px;
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
          margin: 0;
          font-family: 'Poppins', sans-serif;
          font-size: 40px;
          line-height: 50px;
          font-weight: 600;
          color: var(--heading);
        }
        .careers-why .blue-accent {
          display: block;
          color: var(--primary);
        }
        .why-title-line {
          display: block;
        }
        .why-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
          align-items: stretch;
        }
        .why-card {
          background: #F4F6FA;
          border-radius: 24px;
          padding: 36px 32px;
          min-height: 280px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          box-sizing: border-box;
        }
        .why-icon {
          width: 56px;
          height: 56px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 28px;
        }
        .why-icon img {
          width: 48px;
          height: 48px;
          object-fit: contain;
          display: block;
        }
        .why-card h3 {
          margin: 0 0 12px;
          font-family: 'Poppins', sans-serif;
          font-size: 22px;
          line-height: 30px;
          font-weight: 600;
          color: var(--heading);
        }
        .why-card p {
          margin: 0;
          font-size: 15px;
          line-height: 24px;
          color: var(--body);
          max-width: 280px;
        }
        @media (max-width: 900px) {
          .why-grid {
            grid-template-columns: 1fr;
          }
          .why-card {
            min-height: 0;
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
