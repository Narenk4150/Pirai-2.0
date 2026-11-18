import React from 'react';
import { ABOUT_ASSETS } from '../../data/aboutAssets';

export default function OurStory() {
  return (
    <section className="our-story-section">
      <div className="container our-story-grid">
        <div className="story-header" data-reveal>
          <div className="section-pill">
            <span className="dot" />
            <span>Our Story</span>
          </div>
          <h2 className="story-title">
            From a small team in <span className="blue">Pollachi.</span>
          </h2>
        </div>

        <div className="story-narrative" data-reveal data-reveal-delay="0.08">
          <p className="story-lead">
            Pirai Infotech was founded in 2017 by Gokul A N, Founder & Chairman, with a small, passionate team and a clear aim:{' '}
            <span className="blue">transform the digital landscape through innovative IT solutions.</span>
          </p>
          <p className="story-body">
            Since then, Pirai has widened its services, including a focus on automation, and works with enterprises and start-ups that want to grow with digital solutions. The work is still guided by innovation, excellence and customer focus, and by creating opportunities for young talent to grow into tech experts.
          </p>
        </div>

        <div className="story-pillars">
          <div className="pillar" data-reveal data-reveal-delay="0.05">
            <h3>We Envision</h3>
            <p>Empowering businesses to leverage technology while focusing on their core activities.</p>
          </div>
          <div className="pillar" data-reveal data-reveal-delay="0.1">
            <h3>Our Mission</h3>
            <p>Is to digitally transform enterprises with enhanced operations and secure governance.</p>
          </div>
          <div className="pillar" data-reveal data-reveal-delay="0.15">
            <h3>We Thrive On</h3>
            <p>innovation, excellence and customer focus, which drive us to deliver customized, ethical, and exceptional solutions.</p>
          </div>
        </div>

        <div
          className="story-photo"
          data-reveal
          data-reveal-delay="0.12"
          data-reveal-y="18"
        >
          <img
            src={ABOUT_ASSETS.ourStory}
            alt="Pirai team collaborating"
            width={1180}
            height={640}
          />
        </div>
      </div>

      <style>{`
        .our-story-section {
          padding: 80px 0;
          background: #FFFFFF;
        }

        .our-story-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-areas:
            "header narrative"
            "pillars photo";
          column-gap: 80px;
          row-gap: 72px;
          align-items: start;
        }

        .story-header {
          grid-area: header;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 32px;
        }

        .story-narrative {
          grid-area: narrative;
          padding-top: 8px;
        }

        .story-pillars {
          grid-area: pillars;
          display: flex;
          flex-direction: column;
          gap: 40px;
          align-self: end;
        }

        .story-photo {
          grid-area: photo;
          width: 100%;
          height: 320px;
          border-radius: 24px;
          overflow: hidden;
          background: #EEF0F4;
          align-self: end;
          transform-origin: center;
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
          width: fit-content;
        }

        .section-pill .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--primary);
        }

        .story-title {
          font-size: 48px;
          line-height: 60px;
          font-weight: 500;
          color: var(--heading);
          margin: 0;
        }

        .story-title .blue,
        .story-lead .blue {
          color: var(--primary);
        }

        .pillar h3 {
          font-size: 32px;
          font-weight: 400;
          color: var(--heading);
          margin: 0 0 12px;
        }

        .pillar p {
          font-size: 16px;
          color: var(--body);
          margin: 0;
          max-width: 480px;
          line-height: 1.5;
        }

        .story-lead {
          font-size: 32px;
          line-height: 40px;
          font-weight: 500;
          color: var(--heading);
          margin: 0 0 24px;
        }

        .story-body {
          font-size: 16px;
          line-height: 24px;
          color: var(--body);
          margin: 0;
        }

        .story-photo img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          object-position: center;
        }

        @media (max-width: 990px) {
          .our-story-grid {
            grid-template-columns: 1fr;
            grid-template-areas:
              "header"
              "narrative"
              "pillars"
              "photo";
            column-gap: 0;
            row-gap: 40px;
          }

          .story-pillars,
          .story-photo {
            align-self: stretch;
          }

          .story-title {
            font-size: 36px;
            line-height: 46px;
          }

          .story-lead {
            font-size: 24px;
            line-height: 34px;
          }

          .pillar h3 {
            font-size: 28px;
          }
        }
      `}</style>
    </section>
  );
}
