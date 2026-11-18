import React from 'react';
import { HOMEPAGE_ASSETS } from '../data/homepageAssets';

export default function CTABanner({ onDiscussChallenge, onExploreSolutions }) {
  return (
    <section
      className="cta-banner-section"
      data-reveal
      data-reveal-y="32"
      data-reveal-duration="0.7"
      data-reveal-scale="1.02"
    >
      <div className="container">
        <div className="banner-frame">
          <img
            src={HOMEPAGE_ASSETS.ctaBanner}
            alt="Ready to Build the Next Intelligent Enterprise?"
            className="banner-full-img"
          />

          <button
            type="button"
            className="cta-hotspot cta-hotspot-primary"
            onClick={onDiscussChallenge}
            aria-label="Discuss Your Challenge"
          />
          <button
            type="button"
            className="cta-hotspot cta-hotspot-secondary"
            onClick={onExploreSolutions}
            aria-label="Explore Solutions"
          />
        </div>
      </div>

      <style>{`
        .cta-banner-section {
          padding: 40px 0 80px;
          background: #FFFFFF;
        }

        .banner-frame {
          position: relative;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          border-radius: 32px;
          overflow: hidden;
          line-height: 0;
        }

        .banner-full-img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: contain;
        }

        .cta-hotspot {
          position: absolute;
          border: 0;
          padding: 0;
          margin: 0;
          background: transparent;
          cursor: pointer;
          border-radius: 12px;
        }

        .cta-hotspot:focus-visible {
          outline: 2px solid #3488FF;
          outline-offset: 3px;
        }

        /* Mapped from Footer CTA.png (1200x400) button bounds */
        .cta-hotspot-primary {
          left: 5%;
          top: 66.5%;
          width: 26.6%;
          height: 19.75%;
        }

        .cta-hotspot-secondary {
          left: 32.8%;
          top: 66.5%;
          width: 19.6%;
          height: 19.75%;
        }

        @media (max-width: 900px) {
          .banner-frame {
            border-radius: 24px;
          }
        }

        @media (max-width: 640px) {
          .cta-hotspot-primary,
          .cta-hotspot-secondary {
            /* Keep hit targets usable on small screens */
            min-height: 44px;
          }
        }
      `}</style>
    </section>
  );
}
