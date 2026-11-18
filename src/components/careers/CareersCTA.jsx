import React from 'react';
import Button from '../Button';

export default function CareersCTA({ onExplorePositions, onSubmitProfile }) {
  return (
    <section className="careers-cta">
      <div className="container">
        <div className="section-pill">
          <span className="dot" />
          <span>Our Teams</span>
        </div>
        <h2>
          Your next opportunity could{' '}
          <span className="blue-accent">start here.</span>
        </h2>
        <p>
          We are always interested in connecting with people who are curious, driven and passionate about building meaningful technology.
        </p>
        <div className="careers-cta-actions">
          <Button variant="type1" size="hero" onClick={onExplorePositions}>
            Explore Open Positions
          </Button>
          <Button variant="type2" size="hero" onClick={onSubmitProfile}>
            Submit Your Profile
          </Button>
        </div>
      </div>

      <style>{`
        .careers-cta {
          padding: 40px 0 80px;
          background: #FFFFFF;
          text-align: center;
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
        .careers-cta h2 {
          margin: 0 auto 14px;
          max-width: 680px;
          font-size: 40px;
          line-height: 50px;
          font-weight: 600;
          color: var(--heading);
        }
        .careers-cta .blue-accent {
          color: var(--primary);
        }
        .careers-cta p {
          margin: 0 auto 28px;
          max-width: 620px;
          font-size: 16px;
          line-height: 26px;
          color: var(--body);
        }
        .careers-cta-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          justify-content: center;
        }
        @media (max-width: 768px) {
          .careers-cta h2 {
            font-size: 30px;
            line-height: 40px;
          }
        }
      `}</style>
    </section>
  );
}
