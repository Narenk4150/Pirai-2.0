import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQS = [
  {
    q: 'What does Pirai do?',
    a: 'Pirai helps businesses build, connect and modernize the systems that support their operations, from enterprise applications and cloud platforms to data, automation and quality engineering.',
  },
  {
    q: 'Who does Pirai work with?',
    a: 'Pirai works with enterprises and start-ups that want to grow with digital solutions.',
  },
  {
    q: 'Do you work with clients internationally?',
    a: 'Yes. Pirai works with clients across India, Malaysia, Germany, England and the United States.',
  },
  {
    q: 'How do we get started?',
    a: 'Share your engineering goals, systems or operational challenges through the contact page. We’ll start with a conversation about what you need before proposing a direction.',
  },
  {
    q: 'How long will a project take, and what will it cost?',
    a: 'Both depend on scope, the systems involved and how you want to work. We’ll give you a realistic view after understanding your requirements, rather than a generic figure.',
  },
];

export default function AboutFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="about-faq-section">
      <div className="container about-faq-grid">
        <div className="faq-left" data-reveal>
          <div className="section-pill">
            <span className="dot" />
            <span>FAQ’s</span>
          </div>
          <h2 className="faq-title">
            <span className="blue">Questions </span>
            we’re often asked.
          </h2>
          <p className="faq-sub">
            Can’t find your answer? Tell us about your challenge and we’ll respond directly.
          </p>
        </div>

        <div className="faq-right" data-reveal data-reveal-delay="0.1">
          {FAQS.map((item, idx) => {
            const open = openIndex === idx;
            return (
              <div key={item.q} className={`faq-item ${open ? 'open' : ''}`}>
                <button
                  type="button"
                  className="faq-trigger"
                  onClick={() => setOpenIndex(open ? -1 : idx)}
                  aria-expanded={open}
                >
                  <span className="faq-q">{item.q}</span>
                  <span className={`faq-icon ${open ? 'is-open' : ''}`}>
                    {open ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>
                <div className="faq-panel" aria-hidden={!open}>
                  <p className="faq-a">{item.a}</p>
                </div>
                {idx < FAQS.length - 1 && <div className="faq-divider" />}
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .about-faq-section {
          padding: 80px 0;
          background: #FFFFFF;
        }
        .about-faq-grid {
          display: grid;
          grid-template-columns: 406px 1fr;
          gap: 80px;
          align-items: start;
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
          margin-bottom: 32px;
        }
        .section-pill .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--primary);
        }
        .faq-title {
          font-size: 48px;
          line-height: 60px;
          font-weight: 500;
          color: var(--heading);
          margin: 0 0 12px;
        }
        .faq-title .blue { color: var(--primary); }
        .faq-sub {
          font-size: 16px;
          color: var(--body);
          margin: 0;
          max-width: 406px;
        }
        .faq-right {
          max-width: 640px;
          width: 100%;
          margin-left: auto;
        }
        .faq-trigger {
          width: 100%;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 24px;
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          text-align: left;
        }
        .faq-q {
          font-size: 24px;
          line-height: 1.35;
          color: var(--heading);
          font-weight: 400;
        }
        .faq-icon {
          width: 40px;
          height: 40px;
          border: 1px solid #94A3B8;
          border-radius: 22px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #64748B;
          flex-shrink: 0;
          transition: transform 0.3s ease, border-color 0.3s ease, color 0.3s ease, background 0.3s ease;
        }
        .faq-icon.is-open {
          border-color: var(--primary);
          color: var(--primary);
          background: rgba(52, 136, 255, 0.06);
          transform: rotate(180deg);
        }
        .faq-panel {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.45s ease;
        }
        .faq-item.open .faq-panel {
          grid-template-rows: 1fr;
        }
        .faq-panel > .faq-a {
          overflow: hidden;
          min-height: 0;
        }
        .faq-a {
          margin: 0;
          padding-top: 0;
          font-size: 16px;
          line-height: 24px;
          color: var(--body);
          max-width: 560px;
          opacity: 0;
          transform: translateY(6px);
          transition: opacity 0.35s ease, transform 0.35s ease, padding-top 0.35s ease;
        }
        .faq-item.open .faq-a {
          opacity: 1;
          transform: translateY(0);
          padding-top: 12px;
        }
        .faq-divider {
          height: 1px;
          background: var(--border);
          margin: 24px 0;
        }
        @media (max-width: 990px) {
          .about-faq-grid { grid-template-columns: 1fr; gap: 40px; }
          .faq-title { font-size: 36px; line-height: 46px; }
          .faq-right { margin-left: 0; }
          .faq-q { font-size: 20px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .faq-panel,
          .faq-a,
          .faq-icon {
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}
