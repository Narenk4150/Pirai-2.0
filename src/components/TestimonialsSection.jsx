import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Pirai's team embedded with our ops group and rebuilt our claims workflow in under 10 weeks — adoption was immediate because they designed around how our adjusters actually work.",
      author: "Head of Operations",
      company: "Regional Insurance Provider",
      image: "/images/client_portrait.png",
      metric: "10-WEEK ROLLOUT"
    },
    {
      quote: "The multi-agent orchestration architecture Pirai delivered enabled us to process over 100,000 medical records daily with 99.4% precision.",
      author: "VP of Enterprise Technology",
      company: "National Healthcare Network",
      image: "/images/client_portrait.png",
      metric: "100K+ RECORDS/DAY"
    },
    {
      quote: "Modernizing our legacy core system was terrifying until Pirai stepped in. Zero downtime, seamless data migration, and instant performance boost.",
      author: "Chief Technology Officer",
      company: "Global Logistics Leader",
      image: "/images/client_portrait.png",
      metric: "0% DOWNTIME"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section className="testimonials-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="eyetray-badge">
            <span className="dot" />
            <span>CLIENT VOICES</span>
          </div>
          <h2 className="section-h2">
            What Our Clients Say
          </h2>
          <p className="section-body header-desc">
            Our success is measured by the satisfaction of our clients. We take pride in building long-term engineering partnerships.
          </p>
        </div>

        {/* Testimonial Main Container */}
        <div className="testimonial-wrapper">
          <button className="nav-arrow-btn left" onClick={handlePrev} aria-label="Previous">
            <ArrowLeft size={18} />
          </button>

          <div className="testimonial-card">
            <div className="card-image-col">
              <img src={current.image} alt={current.author} className="client-image" />
              <div className="tag-pill metric-pill">{current.metric}</div>
            </div>

            <div className="card-content-col">
              <p className="quote-text">"{current.quote}"</p>

              <div className="quote-footer">
                <div className="author-info">
                  <div className="author-name">{current.author}</div>
                  <div className="author-company">{current.company}</div>
                </div>

                <div className="quote-icon-badge">
                  <Quote size={28} className="quote-icon" />
                </div>
              </div>
            </div>
          </div>

          <button className="nav-arrow-btn right" onClick={handleNext} aria-label="Next">
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      <style>{`
        .testimonials-section {
          padding: 100px 0;
          background: #FFFFFF;
        }

        .section-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: 48px;
        }

        .testimonial-wrapper {
          display: flex;
          align-items: center;
          gap: 24px;
          position: relative;
          max-width: 960px;
          margin: 0 auto;
        }

        .testimonial-card {
          flex: 1;
          display: flex;
          background: var(--surface-alt);
          border: 1px solid var(--primary);
          box-shadow: 0 0 16px rgba(52, 136, 255, 0.3);
          border-radius: 28px;
          padding: 16px;
          gap: 24px;
          overflow: hidden;
          min-height: 300px;
        }

        .card-image-col {
          width: 230px;
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          flex-shrink: 0;
        }

        .client-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .metric-pill {
          position: absolute;
          bottom: 12px;
          left: 12px;
          right: 12px;
          text-align: center;
          justify-content: center;
          background: var(--heading);
          color: #FFFFFF;
        }

        .card-content-col {
          flex: 1;
          background: #FFFFFF;
          border-radius: 20px;
          padding: 28px 32px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .quote-text {
          font-size: 16px;
          color: var(--body);
          line-height: 1.6;
          font-weight: 400;
        }

        .quote-footer {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          padding-top: 16px;
          border-top: 1px solid var(--border);
        }

        .author-name {
          font-size: 16px;
          font-weight: 600;
          color: var(--heading);
        }

        .author-company {
          font-size: 14px;
          color: var(--muted);
        }

        .quote-icon {
          color: var(--primary);
        }

        .nav-arrow-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--surface-alt);
          border: 1px solid var(--border);
          color: var(--heading);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          flex-shrink: 0;
        }

        .nav-arrow-btn:hover {
          background: var(--primary);
          color: #FFFFFF;
          border-color: var(--primary);
        }

        @media (max-width: 800px) {
          .testimonial-card {
            flex-direction: column;
          }
          .card-image-col {
            width: 100%;
            height: 200px;
          }
          .nav-arrow-btn {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
