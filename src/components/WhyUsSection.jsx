import React, { useState } from 'react';
import Button from './Button';
import { HOMEPAGE_ASSETS } from '../data/homepageAssets';

function WhyPiraiCard({ number, label, caption, iconSrc }) {
  const [isHovered, setIsHovered] = useState(false);

  const restXPercent = number === '01' ? -35 : -30;
  const hoverXPercent = number === '01' ? 95 : 75;

  return (
    <div
      className={`why-pirai-card${isHovered ? ' is-hovered' : ''}`}
      data-num={number}
      data-reveal-child
      style={{
        '--rest-x': `${restXPercent}%`,
        '--hover-x': `${hoverXPercent}%`,
      }}
      tabIndex={0}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      <span className="why-pirai-card-gradient" aria-hidden="true" />

      <div className="card-massive-numeral">{number}</div>

      <div className="card-hover-group">
        <div className="icon-wrapper">
          <img src={iconSrc} alt="" width={96} height={96} draggable={false} />
        </div>
        <p className="hover-caption-semibold">{caption}</p>
      </div>

      <div className="card-bottom-label">{label}</div>
    </div>
  );
}

export default function WhyUsSection({ onAboutUs }) {
  const cardsData = [
    {
      number: '01',
      label: 'ENGINEERED',
      caption: 'Secure. Scalable. Enterprise-ready.',
      iconSrc: HOMEPAGE_ASSETS.whyPirai.ENGINEERED,
    },
    {
      number: '02',
      label: 'INTELLIGENT',
      caption: 'AI-powered operations with measurable impact.',
      iconSrc: HOMEPAGE_ASSETS.whyPirai.INTELLIGENT,
    },
    {
      number: '03',
      label: 'TRUSTED',
      caption: 'Long-term partnerships built on outcomes.',
      iconSrc: HOMEPAGE_ASSETS.whyPirai.TRUSTED,
    },
  ];

  return (
    <section className="why-us-section-wrapper" id="why-pirai">
      <div className="container">
        <div className="section-header-row" data-reveal>
          <div className="header-left">
            <div className="eyetray-badge">
              <span className="dot" />
              <span>Why Pirai</span>
            </div>
            <h2 className="section-h2-title">
              Engineering Excellence Meets <br />
              <span className="blue-accent">Operational Intelligence</span>
            </h2>
            <p className="header-sub-text">
              Deep domain understanding across five enterprise verticals.
            </p>
          </div>

          <div className="header-right">
            <Button variant="type3" size="hero" onClick={onAboutUs}>
              About Us
            </Button>
          </div>
        </div>

        <div
          className="why-pirai-grid-container"
          data-reveal-stagger="0.12"
          data-reveal-y="36"
          data-reveal-duration="0.7"
          data-reveal-scale="1.03"
        >
          {cardsData.map((card) => (
            <WhyPiraiCard
              key={card.number}
              number={card.number}
              label={card.label}
              caption={card.caption}
              iconSrc={card.iconSrc}
            />
          ))}
        </div>
      </div>

      <style>{`
        .why-us-section-wrapper {
          padding: 80px 0;
          background-color: #FFFFFF;
        }

        .why-us-section-wrapper .section-header-row {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 40px;
          gap: 32px;
        }

        .why-us-section-wrapper .header-left {
          max-width: 680px;
        }

        .why-us-section-wrapper .section-h2-title {
          font-family: 'Poppins', sans-serif;
          font-size: 40px;
          font-weight: 600;
          line-height: 50px;
          color: #0F172A;
          margin-bottom: 16px;
        }

        .why-us-section-wrapper .blue-accent {
          color: #3488FF;
        }

        .why-us-section-wrapper .header-sub-text {
          font-family: 'Poppins', sans-serif;
          font-size: 16px;
          line-height: 26px;
          color: #475569;
          max-width: 600px;
        }

        .why-pirai-grid-container {
          display: flex;
          justify-content: center;
          gap: 20px;
          max-width: 1200px;
          margin: 0 auto;
        }

        /* LIGHT GRAY CARD — no stroke; gradient + white content on hover */
        .why-pirai-card {
          position: relative;
          width: 386px;
          height: 500px;
          background: #EEF0F4;
          border: none;
          border-radius: 32px;
          padding: 0;
          box-shadow: 0 4px 20px rgba(15, 23, 42, 0.02);
          box-sizing: border-box;
          overflow: hidden;
          cursor: pointer;
          isolation: isolate;
          outline: none;
          flex: 0 0 386px;
          transition: box-shadow 0.35s cubic-bezier(0.65, 0, 0.35, 1);
        }

        .why-pirai-card-gradient {
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: linear-gradient(180deg, #3488FF 0%, #69A8FF 100%);
          transform: scaleY(0);
          transform-origin: bottom center;
          transition: transform 0.32s cubic-bezier(0.65, 0, 0.35, 1);
          z-index: 0;
          pointer-events: none;
          will-change: transform;
        }

        .why-pirai-card.is-hovered,
        .why-pirai-card:hover,
        .why-pirai-card:focus-visible {
          box-shadow: 0 14px 32px rgba(52, 136, 255, 0.28);
        }

        .why-pirai-card.is-hovered .why-pirai-card-gradient,
        .why-pirai-card:hover .why-pirai-card-gradient,
        .why-pirai-card:focus-visible .why-pirai-card-gradient {
          transform: scaleY(1);
        }

        /* MASSIVE NUMERAL — rest/hover x via CSS vars; fast leave (~60ms) */
        .card-massive-numeral {
          position: absolute;
          top: 40px;
          left: 0;
          font-family: 'Poppins', sans-serif;
          font-size: 316px;
          font-weight: 800;
          line-height: 1;
          color: #3488FF;
          letter-spacing: -8px;
          font-variant-numeric: tabular-nums;
          font-feature-settings: "tnum";
          user-select: none;
          pointer-events: none;
          z-index: 1;
          white-space: nowrap;
          opacity: 1;
          transform: translateX(var(--rest-x));
          transition:
            transform 0.06s ease,
            color 0.25s cubic-bezier(0.65, 0, 0.35, 1);
          will-change: transform, color;
        }

        .why-pirai-card.is-hovered .card-massive-numeral,
        .why-pirai-card:hover .card-massive-numeral,
        .why-pirai-card:focus-visible .card-massive-numeral {
          transform: translateX(var(--hover-x));
          color: #FFFFFF;
          transition:
            transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
            color 0.3s cubic-bezier(0.65, 0, 0.35, 1);
        }

        .card-hover-group {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 180px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          pointer-events: none;
          z-index: 3;
          opacity: 0;
          transform: translate(-50%, calc(-50% + 32px));
          transition:
            opacity 0.06s ease,
            transform 0.06s ease;
          will-change: transform, opacity;
        }

        .why-pirai-card.is-hovered .card-hover-group,
        .why-pirai-card:hover .card-hover-group,
        .why-pirai-card:focus-visible .card-hover-group {
          opacity: 1;
          transform: translate(-50%, -50%);
          transition:
            opacity 0.35s cubic-bezier(0.22, 1, 0.36, 1),
            transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }

        .icon-wrapper img {
          display: block;
          width: 96px;
          height: 96px;
          object-fit: contain;
          transition: filter 0.3s cubic-bezier(0.65, 0, 0.35, 1);
        }

        .why-pirai-card.is-hovered .icon-wrapper img,
        .why-pirai-card:hover .icon-wrapper img,
        .why-pirai-card:focus-visible .icon-wrapper img {
          filter: brightness(0) invert(1);
        }

        .hover-caption-semibold {
          font-family: 'Poppins', sans-serif;
          font-size: 16px;
          font-weight: 600;
          color: #FFFFFF;
          line-height: 24px;
          margin: 0;
          width: 180px;
          min-height: 72px;
          text-align: center;
        }

        .card-bottom-label {
          position: absolute;
          bottom: 18px;
          left: 50%;
          transform: translateX(-50%);
          font-family: 'Poppins', sans-serif;
          font-size: 16px;
          font-weight: 700;
          line-height: 24px;
          color: #0F172A;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          white-space: nowrap;
          z-index: 4;
          pointer-events: none;
          transition: color 0.3s cubic-bezier(0.65, 0, 0.35, 1);
        }

        .why-pirai-card.is-hovered .card-bottom-label,
        .why-pirai-card:hover .card-bottom-label,
        .why-pirai-card:focus-visible .card-bottom-label {
          color: #FFFFFF;
        }

        @media (max-width: 1024px) {
          .why-pirai-grid-container {
            flex-direction: column;
            align-items: center;
          }
          .why-pirai-card {
            width: 100%;
            max-width: 386px;
            height: 440px;
            flex: 0 0 auto;
          }
          .why-us-section-wrapper .section-header-row {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .why-pirai-card-gradient,
          .card-massive-numeral,
          .card-hover-group,
          .card-bottom-label,
          .icon-wrapper img {
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}
