import React from 'react';
import Button from '../Button';

export default function CaseStudiesHero({ onDiscussChallenge, onExploreCapabilities }) {
  return (
    <section className="cs-hero">
      <div className="container">
        <div className="cs-hero-inner">
          <div className="section-pill">
            <span className="dot" />
            <span>Our Works</span>
          </div>
          <h1>
            Real challenges.{' '}
            <span className="accent-italic">Engineered outcomes.</span>
          </h1>
          <p>
            Explore how we help enterprises transform complex challenges into reliable, scalable technology solutions.
          </p>
          <div className="cs-hero-actions">
            <Button variant="type1" size="hero" onClick={onDiscussChallenge}>
              Discuss Your Challenge
            </Button>
            <Button variant="type2" size="hero" onClick={onExploreCapabilities}>
              Explore Capabilities
            </Button>
          </div>
        </div>
      </div>

      <style>{`
        .cs-hero {
          padding: 140px 0 64px;
          background: #FFFFFF;
        }
        .cs-hero-inner {
          max-width: 760px;
          margin: 0 auto;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
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
        }
        .section-pill .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--primary);
        }
        .cs-hero h1 {
          margin: 0;
          font-size: 56px;
          line-height: 68px;
          font-weight: 600;
          color: var(--heading);
        }
        .cs-hero h1 .accent-italic {
          color: var(--primary);
          font-style: italic;
          font-weight: 500;
        }
        .cs-hero p {
          margin: 0;
          max-width: 620px;
          font-size: 16px;
          line-height: 26px;
          color: var(--body);
        }
        .cs-hero-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          justify-content: center;
          margin-top: 8px;
        }
        @media (max-width: 768px) {
          .cs-hero h1 {
            font-size: 36px;
            line-height: 46px;
          }
        }
      `}</style>
    </section>
  );
}
