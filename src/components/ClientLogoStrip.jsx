import React from 'react';

const LOGO_DIR = '/images/Homepage/client-logos';

export default function ClientLogoStrip() {
  // One color PNG each — B/W via CSS grayscale; color on hover
  const clientLogos = Array.from({ length: 28 }, (_, i) => {
    const n = String(i + 1).padStart(2, '0');
    return {
      id: `client-${n}`,
      name: `Client ${i + 1}`,
      src: `${LOGO_DIR}/client-${n}.png`,
    };
  });

  const marqueeList = [...clientLogos, ...clientLogos];

  return (
    <section className="client-logo-strip">
      <div className="logo-strip-inner">
        <div className="strip-caption" data-reveal data-reveal-y="16" data-reveal-duration="0.45">
          <span>Trusted by enterprises across industries</span>
        </div>

        <div className="marquee-wrapper">
          <div className="marquee-fade marquee-fade-left" aria-hidden="true" />
          <div className="marquee-fade marquee-fade-right" aria-hidden="true" />

          <div className="marquee-mask">
            <div className="marquee-track">
              {marqueeList.map((logo, index) => (
                <div key={`${logo.id}-${index}`} className="logo-chip">
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="client-logo-img"
                    loading="lazy"
                    draggable={false}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .client-logo-strip {
          padding: 72px 0;
          background: #F8FAFC;
          overflow: hidden;
        }

        .logo-strip-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 40px;
          width: 100%;
        }

        .strip-caption {
          font-family: var(--font-family);
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 1.12px;
          color: #475569;
          text-transform: uppercase;
          text-align: center;
        }

        .marquee-wrapper {
          position: relative;
          width: 100%;
          overflow: hidden;
          padding: 20px 0;
        }

        .marquee-mask {
          width: 100%;
          overflow: hidden;
          -webkit-mask-image: linear-gradient(
            90deg,
            transparent 0%,
            #000 16%,
            #000 84%,
            transparent 100%
          );
          mask-image: linear-gradient(
            90deg,
            transparent 0%,
            #000 16%,
            #000 84%,
            transparent 100%
          );
        }

        .marquee-fade {
          position: absolute;
          top: 0;
          bottom: 0;
          width: clamp(140px, 18vw, 280px);
          z-index: 3;
          pointer-events: none;
        }

        .marquee-fade-left {
          left: 0;
          background: linear-gradient(
            90deg,
            #F8FAFC 0%,
            #F8FAFC 35%,
            rgba(248, 250, 252, 0) 100%
          );
        }

        .marquee-fade-right {
          right: 0;
          background: linear-gradient(
            270deg,
            #F8FAFC 0%,
            #F8FAFC 35%,
            rgba(248, 250, 252, 0) 100%
          );
        }

        .marquee-track {
          display: flex;
          align-items: center;
          gap: 72px;
          width: max-content;
          animation: marqueeScroll 70s linear infinite;
          will-change: transform;
        }

        .marquee-wrapper:hover .marquee-track {
          animation-play-state: paused;
        }

        .logo-chip {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 40px;
          flex-shrink: 0;
          cursor: pointer;
        }

        .client-logo-img {
          height: 40px;
          width: auto;
          max-width: 220px;
          object-fit: contain;
          object-position: center;
          filter: grayscale(1);
          opacity: 0.85;
          transition: filter 0.3s ease, opacity 0.3s ease, transform 0.3s ease;
          user-select: none;
          -webkit-user-drag: none;
        }

        .logo-chip:hover .client-logo-img {
          filter: grayscale(0);
          opacity: 1;
          transform: scale(1.04);
        }

        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @media (max-width: 990px) {
          .client-logo-strip {
            padding: 56px 0;
          }
          .logo-strip-inner {
            gap: 32px;
          }
          .marquee-track {
            gap: 56px;
          }
          .marquee-fade {
            width: 96px;
          }
        }

        @media (max-width: 768px) {
          .client-logo-strip {
            padding: 48px 0;
          }
          .marquee-track {
            gap: 40px;
            animation-duration: 55s;
          }
          .marquee-fade {
            width: 64px;
          }
          .client-logo-img,
          .logo-chip {
            height: 32px;
          }
          .marquee-wrapper {
            padding: 12px 0;
          }
          .marquee-mask {
            -webkit-mask-image: linear-gradient(
              90deg,
              transparent 0%,
              #000 12%,
              #000 88%,
              transparent 100%
            );
            mask-image: linear-gradient(
              90deg,
              transparent 0%,
              #000 12%,
              #000 88%,
              transparent 100%
            );
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
            flex-wrap: wrap;
            justify-content: center;
            width: 100%;
            max-width: 1100px;
            margin: 0 auto;
            row-gap: 24px;
          }
        }
      `}</style>
    </section>
  );
}
