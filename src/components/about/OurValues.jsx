import React from 'react';

const VALUES = [
  {
    num: '01',
    title: 'Innovation',
    text: 'Applying fresh thinking to real business problems.',
  },
  {
    num: '02',
    title: 'Excellence',
    text: 'Holding our work to a high standard, from design to delivery.',
  },
  {
    num: '03',
    title: 'Customer focus',
    text: 'Customized, ethical solutions shaped around each client.',
  },
];

export default function OurValues() {
  return (
    <section className="our-values-section">
      <div className="container">
        <div className="values-header" data-reveal>
          <div className="section-pill">
            <span className="dot" />
            <span>Our values</span>
          </div>
          <h2 className="values-title">
            <span className="blue">Three values </span>
            behind every engagement.
          </h2>
        </div>

        <div className="values-grid">
          {VALUES.map((v, index) => (
            <div
              key={v.num}
              className="value-card"
              data-reveal
              data-reveal-delay={0.1 * (index + 1)}
              data-reveal-y="28"
            >
              <span className="value-num">{v.num}</span>
              <div className="value-copy">
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .our-values-section {
          padding: 80px 0;
          background: #FFFFFF;
        }
        .values-header { margin-bottom: 48px; }
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
        .values-title {
          font-size: 48px;
          line-height: 60px;
          font-weight: 500;
          color: var(--heading);
          margin: 0;
          max-width: 810px;
        }
        .values-title .blue { color: var(--primary); }
        .values-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .value-card {
          background: #EEF0F4;
          border-radius: 36px;
          padding: 36px;
          min-height: 310px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }
        .value-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 28px rgba(15, 23, 42, 0.05);
        }
        .value-num {
          font-size: 48px;
          line-height: 54px;
          font-weight: 300;
          font-style: italic;
          color: var(--primary);
        }
        .value-copy h3 {
          font-size: 32px;
          line-height: 30px;
          font-weight: 300;
          color: var(--heading);
          margin: 0 0 16px;
        }
        .value-copy p {
          font-size: 16px;
          line-height: 24px;
          color: var(--body);
          margin: 0;
        }
        @media (max-width: 990px) {
          .values-grid { grid-template-columns: 1fr; }
          .values-title { font-size: 36px; line-height: 46px; }
          .value-card { min-height: 240px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .value-card { transition: none !important; }
          .value-card:hover { transform: none; }
        }
      `}</style>
    </section>
  );
}
