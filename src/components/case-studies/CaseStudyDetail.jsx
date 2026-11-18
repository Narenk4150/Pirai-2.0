import React, { useEffect, useState } from 'react';

export default function CaseStudyDetail({ study }) {
  const [activeSection, setActiveSection] = useState(study.sections?.[0]?.id || '');

  useEffect(() => {
    const sections = study.sections || [];
    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) {
          setActiveSection(visible.target.id.replace('section-', ''));
        }
      },
      { rootMargin: '-30% 0px -50% 0px', threshold: [0.2, 0.5, 0.8] }
    );

    sections.forEach((section) => {
      const el = document.getElementById(`section-${section.id}`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [study]);

  const titleParts = study.titleAccent
    ? study.title.split(study.titleAccent)
    : [study.title, ''];

  return (
    <article className="csd">
      <section className="csd-hero">
        <div className="container">
          <div className="section-pill">
            <span className="dot" />
            <span>{study.metaLabel || `${study.industry} / ${study.capability}`}</span>
          </div>
          <h1>
            {titleParts[0]}
            {study.titleAccent && (
              <span className="accent-italic">{study.titleAccent}</span>
            )}
            {titleParts[1]}
          </h1>
          <p className="csd-lead">{study.lead || study.summary}</p>

          <div className="csd-meta">
            <div>
              <span>Industry</span>
              <strong>{study.industry}</strong>
            </div>
            <div className="meta-line" />
            <div>
              <span>Capability</span>
              <strong>{study.capability}</strong>
            </div>
            <div className="meta-line" />
            <div>
              <span>Engagement</span>
              <strong>{study.engagement}</strong>
            </div>
            <div className="meta-line" />
            <div>
              <span>Product</span>
              <strong>{study.product}</strong>
            </div>
          </div>

          <div className="csd-hero-media">
            <img src={study.image} alt={study.client} />
          </div>
        </div>
      </section>

      <section className="csd-intro">
        <div className="container csd-intro-grid">
          <div>
            <h2>{study.introTitle || study.cardTitle || study.title}</h2>
            <p>{study.introBody || study.summary}</p>
          </div>
          <aside className="csd-services">
            <div className="services-label">Services</div>
            <ul>
              {(study.services || []).map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="csd-body">
        <div className="container csd-body-grid">
          <nav className="csd-contents" aria-label="Case study sections">
            <div className="contents-label">Contents</div>
            <ul>
              {(study.sections || []).map((section) => (
                <li key={section.id}>
                  <a
                    href={`#section-${section.id}`}
                    className={activeSection === section.id ? 'active' : ''}
                    onClick={() => setActiveSection(section.id)}
                  >
                    {section.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="csd-sections">
            {(study.sections || []).map((section) => (
              <section
                key={section.id}
                id={`section-${section.id}`}
                className="csd-section"
              >
                <div className="section-eyebrow">{section.eyebrow}</div>
                <h3>{section.heading}</h3>
                <p>{section.body}</p>
              </section>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .csd-hero {
          padding: 140px 0 40px;
          background: #FFFFFF;
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
          margin-bottom: 24px;
        }
        .section-pill .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--primary);
        }
        .csd-hero h1 {
          margin: 0 0 20px;
          max-width: 900px;
          font-size: 48px;
          line-height: 60px;
          font-weight: 600;
          color: var(--heading);
        }
        .csd-hero .accent-italic {
          color: var(--primary);
          font-style: italic;
          font-weight: 500;
        }
        .csd-lead {
          margin: 0 0 36px;
          max-width: 780px;
          font-size: 16px;
          line-height: 26px;
          color: var(--body);
        }
        .csd-meta {
          display: grid;
          grid-template-columns: 1fr auto 1fr auto 1fr auto 1fr;
          gap: 16px;
          align-items: start;
          margin-bottom: 40px;
        }
        .csd-meta span {
          display: block;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          color: var(--body);
          margin-bottom: 8px;
        }
        .csd-meta strong {
          display: block;
          font-size: 15px;
          font-weight: 600;
          color: var(--heading);
          line-height: 22px;
        }
        .meta-line {
          width: 1px;
          min-height: 48px;
          background: var(--border);
        }
        .csd-hero-media {
          border-radius: 28px;
          overflow: hidden;
          background: #EEF0F4;
          aspect-ratio: 16 / 9;
        }
        .csd-hero-media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .csd-intro {
          padding: 64px 0;
          background: #FFFFFF;
        }
        .csd-intro-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 260px;
          gap: 48px;
          align-items: start;
        }
        .csd-intro h2 {
          margin: 0 0 16px;
          font-size: 36px;
          line-height: 46px;
          font-weight: 600;
          color: var(--heading);
        }
        .csd-intro p {
          margin: 0;
          font-size: 16px;
          line-height: 28px;
          color: var(--body);
        }
        .csd-services .services-label,
        .csd-contents .contents-label {
          font-size: 12px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #94A3B8;
          margin-bottom: 16px;
        }
        .csd-services ul {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .csd-services li {
          position: relative;
          padding-left: 18px;
          font-size: 15px;
          color: var(--heading);
        }
        .csd-services li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 7px;
          width: 8px;
          height: 8px;
          border-radius: 2px;
          background: var(--primary);
        }
        .csd-body {
          padding: 24px 0 80px;
          background: #FFFFFF;
        }
        .csd-body-grid {
          display: grid;
          grid-template-columns: 220px minmax(0, 1fr);
          gap: 48px;
          align-items: start;
        }
        .csd-contents {
          position: sticky;
          top: 110px;
        }
        .csd-contents ul {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .csd-contents a {
          display: block;
          padding-left: 14px;
          border-left: 2px solid transparent;
          color: #94A3B8;
          text-decoration: none;
          font-size: 14px;
          line-height: 20px;
        }
        .csd-contents a.active {
          border-left-color: var(--primary);
          color: var(--heading);
          font-weight: 500;
        }
        .csd-sections {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }
        .csd-section {
          padding-bottom: 40px;
          border-bottom: 1px solid var(--border);
        }
        .csd-section:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }
        .section-eyebrow {
          font-size: 12px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--primary);
          font-weight: 600;
          margin-bottom: 12px;
        }
        .csd-section h3 {
          margin: 0 0 14px;
          font-size: 28px;
          line-height: 36px;
          font-weight: 600;
          color: var(--heading);
        }
        .csd-section p {
          margin: 0;
          font-size: 16px;
          line-height: 28px;
          color: var(--body);
        }
        @media (max-width: 900px) {
          .csd-hero h1 {
            font-size: 34px;
            line-height: 44px;
          }
          .csd-meta,
          .csd-intro-grid,
          .csd-body-grid {
            grid-template-columns: 1fr;
          }
          .meta-line {
            display: none;
          }
          .csd-contents {
            position: static;
          }
          .csd-contents ul {
            flex-direction: row;
            flex-wrap: wrap;
            gap: 8px;
          }
          .csd-contents a {
            border: 1px solid var(--border);
            border-radius: 999px;
            padding: 8px 12px;
          }
          .csd-contents a.active {
            border-color: var(--primary);
            background: #EAF2FF;
          }
        }
      `}</style>
    </article>
  );
}
