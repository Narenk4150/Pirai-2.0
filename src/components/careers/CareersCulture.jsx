import React from 'react';
import { CAREER_CULTURE } from '../../data/careers';

export default function CareersCulture() {
  return (
    <section className="careers-culture" id="life-at-pirai">
      <div className="container">
        <div className="culture-header">
          <div className="section-pill">
            <span className="dot" />
            <span>Our Culture</span>
          </div>
          <h2>
            Great work happens when people{' '}
            <span className="blue-accent">grow together.</span>
          </h2>
          <p>
            A glimpse into our daily collaboration, technical knowledge shares, and workplace community.
          </p>
        </div>

        <div className="culture-gallery">
          {CAREER_CULTURE.map((item) => (
            <figure key={item.caption} className={`culture-shot ${item.className}`}>
              <img src={item.src} alt={item.caption} />
              <div className="culture-caption-shade" aria-hidden="true" />
              <figcaption>{item.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>

      <style>{`
        .careers-culture {
          position: relative;
          z-index: 1;
          padding: 40px 0 40px;
          background: #FFFFFF;
        }
        .culture-header {
          text-align: center;
          max-width: 720px;
          margin: 0 auto 44px;
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
        .culture-header h2 {
          margin: 0 0 14px;
          font-family: 'Poppins', sans-serif;
          font-size: 40px;
          line-height: 50px;
          font-weight: 600;
          color: var(--heading);
        }
        .culture-header .blue-accent {
          color: var(--primary);
        }
        .culture-header p {
          margin: 0 auto;
          max-width: 560px;
          font-size: 16px;
          line-height: 26px;
          color: var(--body);
        }
        .culture-gallery {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          grid-template-rows: 1fr 1fr;
          gap: 20px;
          min-height: 580px;
        }
        .culture-shot {
          position: relative;
          margin: 0;
          border-radius: 24px;
          overflow: hidden;
          background: #EEF0F4;
          min-height: 0;
        }
        .culture-shot.tall {
          grid-row: 1 / span 2;
          min-height: 580px;
        }
        .culture-shot.wide {
          min-height: 280px;
        }
        .culture-shot img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .culture-caption-shade {
          position: absolute;
          inset: 0;
          z-index: 1;
          /* Figma: soft fade from mid → deep black under caption */
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0) 42%,
            rgba(0, 0, 0, 0.22) 62%,
            rgba(0, 0, 0, 0.62) 82%,
            rgba(0, 0, 0, 0.86) 100%
          );
          pointer-events: none;
        }
        .culture-shot figcaption {
          position: absolute;
          left: 24px;
          right: 24px;
          bottom: 24px;
          z-index: 2;
          color: #FFFFFF;
          font-family: 'Poppins', sans-serif;
          /* Figma caption ≈ 16–18px medium; use 18 for photo overlays */
          font-size: 18px;
          line-height: 26px;
          font-weight: 500;
        }
        @media (max-width: 900px) {
          .culture-gallery {
            grid-template-columns: 1fr;
            grid-template-rows: auto;
            min-height: 0;
          }
          .culture-shot.tall,
          .culture-shot.wide {
            min-height: 260px;
            grid-row: auto;
          }
          .culture-header h2 {
            font-size: 30px;
            line-height: 40px;
          }
        }
      `}</style>
    </section>
  );
}
