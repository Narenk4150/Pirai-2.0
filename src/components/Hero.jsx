import React from 'react';
import Button from './Button';

export default function Hero({ onDiscussChallenge, onExploreSolutions }) {
  return (
    <section className="hero-section">
      {/* Figma Absolute Right Hero Image Layer (Placed Higher) */}
      <div className="hero-figma-bg-image-wrapper">
        <img 
          src="/images/hero_portrait.png" 
          alt="Enterprise AI & Engineering" 
          className="hero-figma-portrait-img" 
        />
        <div className="hero-figma-gradient-overlay" />
      </div>

      <div className="container hero-container-relative">
        <div className="hero-grid-layout">
          {/* Left Column: Eyebrow, H1, Body, Buttons, and Stats Row underneath */}
          <div className="hero-content-col">
            {/* Eyebrow pill badge */}
            <div className="eyetray-badge">
              <span className="dot" />
              <span>Enterprise engineering & applied AI</span>
            </div>

            {/* H1 Heading */}
            <h1 className="hero-h1">
              We rebuild how enterprises operate — <span className="accent-italic">systems teams adopt on day one,</span> not just deploy.
            </h1>

            {/* Body paragraph */}
            <p className="hero-body-copy section-body">
              Pirai partners with regulated enterprises to design, build, and ship AI-enabled systems — from insurer claims workflows to manufacturing floor intelligence — engineered around how your teams actually work.
            </p>

            {/* Hero Buttons using Master Figma Component */}
            <div className="hero-buttons-group">
              <Button variant="type3" size="hero" onClick={onDiscussChallenge}>
                Discuss Your Challenge
              </Button>

              <Button variant="type2" size="hero" onClick={onExploreSolutions}>
                Explore Solutions
              </Button>
            </div>

            {/* Divider and 4 Stats placed directly below the left section content */}
            <div className="hero-left-stats-divider divider" />

            <div className="hero-left-stats-row">
              <div className="stat-col">
                <div className="stat-number">100+</div>
                <div className="stat-caption">ENGINEERS</div>
              </div>

              <div className="stat-vert-line" />

              <div className="stat-col">
                <div className="stat-number">8+</div>
                <div className="stat-caption">YEARS DELIVERING</div>
              </div>

              <div className="stat-vert-line" />

              <div className="stat-col">
                <div className="stat-number">5</div>
                <div className="stat-caption">REGULATED VERTICALS</div>
              </div>

              <div className="stat-vert-line" />

              <div className="stat-col">
                <div className="stat-number">10wk</div>
                <div className="stat-caption">AVG. PILOT TO PRODUCTION</div>
              </div>
            </div>
          </div>

          {/* Right Column Spacer for the background hero image */}
          <div className="hero-graphic-spacer" />
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          padding-top: 130px;
          padding-bottom: 70px;
          background: #FFFFFF;
          overflow: hidden;
          min-height: 680px;
        }

        /* Figma Absolute Right Image Layer (Placed Higher) */
        .hero-figma-bg-image-wrapper {
          position: absolute;
          top: 0;
          right: 0;
          width: 52%;
          max-width: 700px;
          height: 100%;
          z-index: 1;
          pointer-events: none;
          display: flex;
          align-items: flex-start;
          justify-content: flex-end;
        }

        .hero-figma-portrait-img {
          height: 100%;
          width: auto;
          max-height: 700px;
          object-fit: contain;
          object-position: top right;
          transform: translateY(-20px);
        }

        .hero-figma-gradient-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0) 65%, rgba(255, 255, 255, 1) 100%);
          pointer-events: none;
        }

        .hero-container-relative {
          position: relative;
          z-index: 2;
        }

        .hero-grid-layout {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 40px;
          align-items: flex-start;
        }

        .hero-content-col {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          max-width: 680px;
        }

        .hero-h1 {
          margin-bottom: 24px;
        }

        .hero-body-copy {
          max-width: 669px;
          margin-bottom: 40px;
          font-size: 16px;
          color: var(--body);
          line-height: 1.6;
        }

        .hero-buttons-group {
          display: flex;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
          margin-bottom: 48px;
        }

        .hero-graphic-spacer {
          height: 520px;
        }

        /* 4 Stats scoped directly inside the left section content width */
        .hero-left-stats-divider {
          width: 100%;
          margin-bottom: 28px;
        }

        .hero-left-stats-row {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 0;
        }

        .stat-col {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          gap: 4px;
        }

        .stat-number {
          font-size: 28px;
          font-weight: 600;
          color: var(--heading);
          line-height: 1.1;
        }

        .stat-caption {
          font-size: 11px;
          font-weight: 500;
          color: var(--muted);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .stat-vert-line {
          width: 1px;
          height: 36px;
          background: var(--border);
          flex-shrink: 0;
          margin: 0 12px;
        }

        @media (max-width: 990px) {
          .hero-grid-layout {
            grid-template-columns: 1fr;
          }
          .hero-content-col {
            max-width: 100%;
          }
          .hero-figma-bg-image-wrapper {
            position: relative;
            width: 100%;
            max-width: 100%;
            height: 380px;
            top: 0;
          }
          .hero-figma-portrait-img {
            transform: translateY(0);
          }
          .hero-graphic-spacer {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .hero-left-stats-row {
            flex-direction: column;
            gap: 20px;
            align-items: flex-start;
          }
          .stat-vert-line {
            display: none;
          }
          .hero-buttons-group .figma-btn-master {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
