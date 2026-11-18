import React from 'react';

const GALLERY = [
  {
    src: '/images/careers/culture-1.png',
    caption: 'Knowledge sharing and technology workshops',
    className: 'tall',
  },
  {
    src: '/images/careers/culture-2.png',
    caption: 'Architectural brainstorms & cross-functional engineering reviews',
    className: 'wide',
  },
  {
    src: '/images/careers/culture-3.png',
    caption: 'Celebrating milestones & team accomplishments',
    className: 'wide',
  },
];

export default function CareersCulture() {
  return (
    <section className="careers-culture" id="life-at-pirai">
      <div className="container">
        <div className="culture-header">
          <div className="section-pill">
            <span className="dot" />
            <span>Our Culture</span>
          </div>
          <h2>
            Great work happens when people{' '}
            <span className="blue-accent">grow together.</span>
          </h2>
          <p>
            A glimpse into our daily collaboration, technical knowledge shares, and workplace community.
          </p>
        </div>

        <div className="culture-gallery">
          {GALLERY.map((item) => (
            <figure key={item.caption} className={`culture-shot ${item.className}`}>
              <img src={item.src} alt={item.caption} />
              <figcaption>{item.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>

      <style>{`
        .careers-culture {
          padding: 40px 0 80px;
          background: #FFFFFF;
        }
        .culture-header {
          text-align: center;
          max-width: 720px;
          margin: 0 auto 40px;
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
          margin-bottom: 20px;
        }
        .section-pill .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--primary);
        }
        .culture-header h2 {
          margin: 0 0 14px;
          font-size: 40px;
          line-height: 50px;
          font-weight: 600;
          color: var(--heading);
        }
        .culture-header .blue-accent {
          color: var(--primary);
        }
        .culture-header p {
          margin: 0;
          font-size: 16px;
          line-height: 26px;
          color: var(--body);
        }
        .culture-gallery {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          grid-template-rows: 1fr 1fr;
          gap: 20px;
          min-height: 560px;
        }
        .culture-shot {
          position: relative;
          margin: 0;
          border-radius: 24px;
          overflow: hidden;
          background: #EEF0F4;
        }
        .culture-shot.tall {
          grid-row: 1 / span 2;
        }
        .culture-shot img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .culture-shot figcaption {
          position: absolute;
          left: 20px;
          right: 20px;
          bottom: 20px;
          color: #FFFFFF;
          font-size: 14px;
          font-weight: 500;
          text-shadow: 0 2px 12px rgba(15, 23, 42, 0.45);
        }
        @media (max-width: 900px) {
          .culture-gallery {
            grid-template-columns: 1fr;
            grid-template-rows: auto;
            min-height: 0;
          }
          .culture-shot.tall,
          .culture-shot.wide {
            min-height: 260px;
            grid-row: auto;
          }
          .culture-header h2 {
            font-size: 30px;
            line-height: 40px;
          }
        }
      `}</style>
    </section>
  );
}
