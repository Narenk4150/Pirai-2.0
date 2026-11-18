import React from 'react';
import Button from './Button';

export default function EngineeringChallengeCTA({ onDiscussChallenge, onExploreSolutions }) {
  return (
    <section className="eng-challenge-cta">
      <div className="container">
        <div className="eng-challenge-card">
          <div className="eng-challenge-copy">
            <h2>
              Have an <span className="blue-accent">engineering challenge to solve?</span>
            </h2>
            <p>
              Tell us about your systems, integration needs or modernization goals. Let’s explore the right engineering approach for your business.
            </p>
            <div className="eng-challenge-actions">
              <Button variant="type1" size="hero" onClick={onDiscussChallenge}>
                Discuss Your Challenge
              </Button>
              <Button variant="type2" size="hero" onClick={onExploreSolutions}>
                Explore Solutions
              </Button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .eng-challenge-cta {
          padding: 40px 0 80px;
          background: #FFFFFF;
        }
        .eng-challenge-card {
          border-radius: 28px;
          background: linear-gradient(120deg, #EAF2FF 0%, #F8FBFF 55%, #EEF0F4 100%);
          padding: 56px;
        }
        .eng-challenge-copy {
          max-width: 680px;
        }
        .eng-challenge-copy h2 {
          margin: 0 0 16px;
          font-size: 40px;
          line-height: 50px;
          font-weight: 600;
          color: var(--heading);
        }
        .eng-challenge-copy .blue-accent {
          color: var(--primary);
        }
        .eng-challenge-copy p {
          margin: 0 0 28px;
          font-size: 16px;
          line-height: 26px;
          color: var(--body);
        }
        .eng-challenge-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }
        @media (max-width: 768px) {
          .eng-challenge-card {
            padding: 32px 24px;
          }
          .eng-challenge-copy h2 {
            font-size: 30px;
            line-height: 40px;
          }
        }
      `}</style>
    </section>
  );
}
