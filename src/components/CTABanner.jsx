import React from 'react';
import Button from './Button';

export default function CTABanner({ onDiscussChallenge, onExploreSolutions }) {
  return (
    <section className="cta-banner-section">
      <div className="container">
        <div className="banner-dark-navy-card">
          <div className="banner-inner-content">
            {/* H2 (white, with one phrase in the blue accent color) */}
            <h2 className="banner-h2">
              Ready to Build the Next <br />
              <span className="accent-blue">Intelligent Enterprise?</span>
            </h2>

            {/* Body (light gray) */}
            <p className="banner-body-text">
              Let's discuss how we can transform your operations. Tell us a bit more about your project and we'll route you to the right team within one business day.
            </p>

            {/* Two buttons */}
            <div className="banner-buttons-row">
              <Button variant="primary" onClick={onDiscussChallenge}>
                Discuss Your Challenge
              </Button>

              <Button variant="secondary" onClick={onExploreSolutions}>
                Explore Solutions
              </Button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .cta-banner-section {
          padding: 80px 0 100px 0;
          background: #FFFFFF;
        }

        .banner-dark-navy-card {
          position: relative;
          background: #0F172A;
          border-radius: 28px;
          padding: 64px 56px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          overflow: hidden;
          box-shadow: 0 24px 60px rgba(15, 23, 42, 0.25);
        }

        .banner-inner-content {
          max-width: 680px;
        }

        .banner-h2 {
          font-size: 42px;
          line-height: 52px;
          font-weight: 600;
          color: #FFFFFF;
          margin-bottom: 20px;
          letter-spacing: -0.5px;
        }

        .accent-blue {
          color: var(--primary);
        }

        .banner-body-text {
          font-size: 16px;
          color: var(--muted);
          line-height: 1.6;
          margin-bottom: 40px;
        }

        .banner-buttons-row {
          display: flex;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        @media (max-width: 768px) {
          .banner-dark-navy-card {
            padding: 40px 24px;
          }
          .banner-h2 {
            font-size: 30px;
            line-height: 38px;
          }
          .banner-buttons-row .custom-pirai-btn {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
