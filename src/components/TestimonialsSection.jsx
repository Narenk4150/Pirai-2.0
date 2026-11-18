import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { HOMEPAGE_ASSETS } from '../data/homepageAssets';
import { TESTIMONIALS } from '../data/testimonials';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIndex];
  const imageFit = current.imageFit || 'cover';
  const imageCrop = current.imageCrop || 'full';

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header" data-reveal>
          <div className="eyetray-badge">
            <span className="dot" />
            <span>Client Voices</span>
          </div>
          <h2 className="section-h2">
            What Our <span className="blue-accent">Clients Say</span>
          </h2>
          <p className="section-body header-desc">
            Our success is measured by the satisfaction of our clients. We take pride in
            building long partnerships.
          </p>
        </div>

        <div className="testimonial-wrapper" data-reveal data-reveal-y="28" data-reveal-duration="0.65">
          <button className="nav-arrow-btn left" onClick={handlePrev} aria-label="Previous">
            <ArrowLeft size={18} strokeWidth={2} />
          </button>

          <div className="testimonial-stage">
            <div className="testimonial-card-back" aria-hidden="true" />

            <div className="testimonial-card" key={current.id}>
              <div className={`card-image-col fit-${imageFit} crop-${imageCrop}`}>
                <img
                  src={current.image}
                  alt={current.author}
                  className={`client-image fit-${imageFit} crop-${imageCrop}`}
                />
              </div>

              <div className="card-content-col">
                <div className="card-content-surface">
                  <p className="quote-text">{current.quote}</p>

                  <div className="quote-footer">
                    <div className="author-info">
                      <div className="author-name">{current.author}</div>
                      <div className="author-company">{current.company}</div>
                    </div>

                    <div className="quote-icon-badge">
                      <img
                        src={HOMEPAGE_ASSETS.testimonials.quote}
                        alt=""
                        className="quote-icon"
                        width={84}
                        height={72}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button className="nav-arrow-btn right" onClick={handleNext} aria-label="Next">
            <ArrowRight size={18} strokeWidth={2} />
          </button>
        </div>

        <div className="testimonial-dots" role="tablist" aria-label="Testimonials">
          {TESTIMONIALS.map((item, index) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={index === currentIndex}
              aria-label={`Show testimonial from ${item.author}`}
              className={`testimonial-dot${index === currentIndex ? ' is-active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>

      <style>{`
        .testimonials-section {
          padding: 96px 0 104px;
          background: #FFFFFF;
        }

        .testimonials-section .section-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: 48px;
        }

        .testimonials-section .eyetray-badge {
          align-self: center;
          margin-bottom: 14px;
        }

        .testimonials-section .section-h2 {
          margin: 0 0 12px;
          font-family: 'Poppins', sans-serif;
          font-size: 40px;
          line-height: 50px;
          font-weight: 600;
          color: #0F172A;
          letter-spacing: -0.02em;
        }

        .testimonials-section .blue-accent {
          color: #3488FF;
        }

        .testimonials-section .header-desc {
          max-width: 520px;
          margin: 0;
          font-family: 'Poppins', sans-serif;
          color: #64748B;
          font-size: 16px;
          line-height: 26px;
        }

        .testimonial-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 36px;
          position: relative;
          max-width: 1060px;
          margin: 0 auto;
        }

        .testimonial-stage {
          position: relative;
          flex: 1;
          min-width: 0;
          max-width: 880px;
        }

        /* Secondary pale grey-blue card — edges visible on both sides */
        .testimonial-card-back {
          position: absolute;
          top: 50%;
          left: 50%;
          z-index: 0;
          width: calc(100% + 48px);
          height: calc(100% + 32px);
          transform: translate(-50%, -50%);
          background: #E9EDF3;
          border-radius: 34px;
          pointer-events: none;
        }

        .testimonial-card {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: stretch;
          width: 100%;
          background: #F5F7FA;
          border: 1.5px solid #3488FF;
          box-shadow:
            0 0 0 1px rgba(52, 136, 255, 0.04),
            0 0 32px rgba(52, 136, 255, 0.18),
            0 14px 36px rgba(15, 23, 42, 0.05);
          border-radius: 28px;
          padding: 18px;
          gap: 18px;
          overflow: hidden;
          min-height: 360px;
          aspect-ratio: 2.45 / 1;
          max-height: 380px;
          box-sizing: border-box;
          animation: testimonialSlide 0.45s cubic-bezier(0.22, 1, 0.36, 1);
        }

        @keyframes testimonialSlide {
          from { opacity: 0; transform: translateX(14px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @media (prefers-reduced-motion: reduce) {
          .testimonial-card {
            animation: none;
          }
        }

        .card-image-col {
          width: 34%;
          max-width: 292px;
          min-width: 210px;
          position: relative;
          border-radius: 18px;
          overflow: hidden;
          flex-shrink: 0;
          background: #FFFFFF;
          min-height: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          align-self: stretch;
        }

        .card-image-col.fit-contain {
          padding: 0 28px;
          background: #FFFFFF;
        }

        .client-image {
          display: block;
        }

        .client-image.fit-cover {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
        }

        .client-image.fit-contain {
          width: 100%;
          height: auto;
          max-width: 168px;
          max-height: 168px;
          object-fit: contain;
          object-position: center;
          margin: 0 auto;
        }

        /* Wordmark logos: crop circular badge to the mark/text band without editing SVG */
        .client-image.fit-contain.crop-band {
          max-width: 220px;
          height: 68px;
          max-height: 68px;
          object-fit: cover;
          object-position: center center;
        }

        .testimonials-section .card-content-col {
          flex: 1;
          min-width: 0;
          display: flex;
          background: transparent;
          padding: 0;
          gap: 0;
        }

        .card-content-surface {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: #FFFFFF;
          border-radius: 18px;
          padding: 28px 28px 22px;
          min-height: 100%;
          box-sizing: border-box;
        }

        .quote-text {
          margin: 0;
          font-family: 'Poppins', sans-serif;
          font-size: 16px;
          color: #1E293B;
          line-height: 28px;
          font-weight: 400;
        }

        .quote-footer {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 16px;
          padding-top: 20px;
          border-top: 1px solid #E2E8F0;
          margin-top: auto;
        }

        .author-name {
          font-family: 'Poppins', sans-serif;
          font-size: 16px;
          font-weight: 600;
          color: #0F172A;
          line-height: 24px;
        }

        .author-company {
          margin-top: 2px;
          font-family: 'Poppins', sans-serif;
          font-size: 14px;
          line-height: 20px;
          font-style: italic;
          color: #94A3B8;
        }

        .quote-icon-badge {
          flex-shrink: 0;
          line-height: 0;
          align-self: flex-end;
          margin: 0 -4px -6px 0;
        }

        .quote-icon {
          width: 84px;
          height: auto;
          display: block;
        }

        .nav-arrow-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #FFFFFF;
          border: 1.5px solid rgba(52, 136, 255, 0.4);
          color: #3488FF;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease;
          flex-shrink: 0;
          z-index: 2;
        }

        .nav-arrow-btn:hover {
          background: #3488FF;
          border-color: #3488FF;
          color: #FFFFFF;
        }

        .testimonial-dots {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          margin-top: 36px;
        }

        .testimonial-dot {
          width: 7px;
          height: 7px;
          border-radius: 999px;
          border: none;
          padding: 0;
          background: #D0D5DD;
          cursor: pointer;
          transition: width 0.2s ease, background-color 0.2s ease;
        }

        .testimonial-dot.is-active {
          width: 20px;
          background: #3488FF;
        }

        @media (max-width: 1100px) {
          .testimonial-wrapper {
            max-width: 100%;
            gap: 28px;
          }
          .testimonial-stage {
            max-width: 100%;
          }
          .testimonial-card-back {
            width: calc(100% + 36px);
            height: calc(100% + 22px);
          }
          .testimonials-section .section-h2 {
            font-size: 36px;
            line-height: 44px;
          }
          .testimonials-section .section-header {
            margin-bottom: 40px;
          }
          .card-image-col {
            width: 34%;
            max-width: 260px;
            min-width: 200px;
          }
          .testimonial-card {
            min-height: 320px;
            max-height: none;
            aspect-ratio: auto;
          }
        }

        @media (max-width: 900px) {
          .testimonials-section {
            padding: 80px 0 88px;
          }
          .testimonials-section .section-header {
            margin-bottom: 36px;
          }
          .testimonials-section .section-h2 {
            font-size: 32px;
            line-height: 40px;
          }
          .testimonial-wrapper {
            gap: 16px;
          }
          .testimonial-card {
            min-height: 300px;
            max-height: none;
            aspect-ratio: auto;
            padding: 14px;
            gap: 14px;
          }
          .card-image-col {
            width: 210px;
            min-width: 190px;
            max-width: 210px;
          }
          .card-image-col.fit-contain {
            padding: 0 18px;
          }
          .card-content-surface {
            padding: 18px 18px 16px;
          }
          .quote-text {
            font-size: 15px;
            line-height: 24px;
          }
          .quote-icon {
            width: 64px;
          }
          .testimonial-card-back {
            width: calc(100% + 24px);
            height: calc(100% + 16px);
            border-radius: 28px;
          }
          .testimonial-dots {
            margin-top: 28px;
          }
        }

        @media (max-width: 860px) {
          .testimonial-card {
            flex-direction: column;
            min-height: 0;
            max-height: none;
            aspect-ratio: auto;
            background: #FFFFFF;
          }
          .card-image-col {
            width: 100%;
            max-width: none;
            min-width: 0;
            min-height: 200px;
            aspect-ratio: 16 / 10;
          }
          .card-image-col.fit-contain {
            padding: 24px 32px;
            aspect-ratio: auto;
            min-height: 140px;
            background: #FFFFFF;
          }
          .card-content-surface {
            padding: 8px 4px 0;
          }
          .testimonial-card-back {
            display: none;
          }
          .nav-arrow-btn {
            display: none;
          }
          .quote-footer {
            margin-top: 16px;
            padding-top: 14px;
          }
        }
      `}</style>
    </section>
  );
}
