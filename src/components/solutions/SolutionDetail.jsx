import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button';
import { getCaseStudyById } from '../../data/caseStudies';

export default function SolutionDetail({
  solution,
  onDiscussChallenge,
  onExploreCapabilities,
}) {
  const navigate = useNavigate();
  const studies = (solution.caseStudyIds || [])
    .map((id) => getCaseStudyById(id))
    .filter(Boolean);

  return (
    <div className="solution-detail">
      <section className="sol-hero">
        <div className="container sol-hero-inner">
          <div className="section-pill light">
            <span className="dot" />
            <span>{solution.pill}</span>
          </div>
          <h1>
            {solution.heroTitle}{' '}
            <span className="accent-italic">{solution.heroAccent}</span>
          </h1>
          <p>{solution.lead}</p>
          <div className="sol-hero-actions">
            <Button variant="type1" size="hero" onClick={onDiscussChallenge}>
              Discuss Your Challenge
            </Button>
            <Button variant="type2" size="hero" onClick={onExploreCapabilities}>
              Explore Capabilities
            </Button>
          </div>
        </div>
      </section>

      {solution.problem && (
        <section className="sol-problem">
          <div className="container">
            <div className="section-pill">
              <span className="dot" />
              <span>{solution.problem.pill}</span>
            </div>
            <h2>
              <span className="blue-accent">{solution.problem.titleBefore}</span>
              {solution.problem.titleAfter}
            </h2>
            <p className="sol-lead">{solution.problem.lead}</p>
            <div className="sol-problem-grid">
              <div className="sol-problem-media">
                <img src={solution.problem.image} alt="" />
              </div>
              <ol className="sol-problem-list">
                {solution.problem.items.map((item) => (
                  <li key={item.number}>
                    <span className="num">{item.number}</span>
                    <div>
                      <strong>{item.title}</strong>
                      <p>{item.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>
      )}

      {solution.challenges && (
        <section className="sol-challenges">
          <div className="container">
            <div className="section-pill">
              <span className="dot" />
              <span>{solution.challenges.pill}</span>
            </div>
            <h2>
              <span className="blue-accent">{solution.challenges.titleBefore}</span>
              {solution.challenges.titleAfter}
            </h2>
            <p className="sol-lead">{solution.challenges.lead}</p>
            <div className="sol-challenge-grid">
              {solution.challenges.items.map((item) => (
                <article key={item.number} className="sol-challenge-card">
                  <span className="num">{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {solution.whyMatters && (
        <section className="sol-why">
          <div className="container">
            <div className="section-pill">
              <span className="dot" />
              <span>{solution.whyMatters.pill}</span>
            </div>
            <h2 className="center">
              {solution.whyMatters.titleBefore}{' '}
              <span className="blue-accent">{solution.whyMatters.titleAccent}</span>
            </h2>
            <div className="sol-why-grid">
              {solution.whyMatters.cards.map((card) => (
                <article key={card.title} className="sol-why-card">
                  <div className="icon-dot" />
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {solution.painCards && (
        <section className="sol-pain">
          <div className="container sol-pain-grid">
            {solution.painCards.map((card) => (
              <article key={card.title} className="sol-pain-card">
                <div className="icon-dot" />
                <p>{card.title}</p>
              </article>
            ))}
            {solution.highlightCard && (
              <article className="sol-highlight-card">
                <div className="brand">{solution.highlightCard.brand}</div>
                <p>{solution.highlightCard.body}</p>
                <button type="button" onClick={onExploreCapabilities}>
                  {solution.highlightCard.cta} ↗
                </button>
              </article>
            )}
          </div>
        </section>
      )}

      {solution.approach && (
        <section className="sol-approach">
          <div className="container">
            <div className="section-pill">
              <span className="dot" />
              <span>{solution.approach.pill}</span>
            </div>
            <h2 className={solution.approach.steps ? 'center' : ''}>
              <span className="blue-accent">{solution.approach.titleBefore}</span>{' '}
              {solution.approach.titleAccent}
            </h2>
            <p className={`sol-lead ${solution.approach.steps ? 'center' : ''}`}>
              {solution.approach.lead}
            </p>
            {solution.approach.cards && (
              <div className="sol-approach-cards">
                {solution.approach.cards.map((card) => (
                  <article key={card.title}>
                    <div className="icon-dot" />
                    <h3>{card.title}</h3>
                    <p>{card.body}</p>
                  </article>
                ))}
              </div>
            )}
            {solution.approach.steps && (
              <ol className="sol-approach-steps">
                {solution.approach.steps.map((step) => (
                  <li key={step.number}>
                    <span className="num">{step.number}</span>
                    <div>
                      <strong>{step.title}</strong>
                      <p>{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            )}
          </div>
        </section>
      )}

      {solution.capabilities && (
        <section className="sol-capabilities">
          <div className="container">
            <div className="section-pill">
              <span className="dot" />
              <span>{solution.capabilities.pill}</span>
            </div>
            <h2>
              <span className="blue-accent">{solution.capabilities.titleBefore}</span>{' '}
              {solution.capabilities.titleAccent}
            </h2>
            <p className="sol-lead">{solution.capabilities.lead}</p>
            <div className="sol-cap-list">
              {solution.capabilities.items.map((item, index) => (
                <div key={item} className="sol-cap-row">
                  <span className="num">{String(index + 1).padStart(2, '0')}</span>
                  <strong>{item}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {solution.showcase && (
        <section className="sol-showcase">
          <div className="container">
            <div className="section-pill center-pill">
              <span className="dot" />
              <span>{solution.showcase.pill}</span>
            </div>
            <h2 className="center">
              {solution.showcase.titleBefore}{' '}
              <span className="blue-accent">{solution.showcase.titleAccent}</span>
            </h2>
          </div>
        </section>
      )}

      {studies.length > 0 && (
        <section className="sol-cases">
          <div className="container sol-cases-grid">
            {studies.map((study, index) => (
              <article
                key={study.id}
                className={`sol-case-card ${index === 0 ? 'featured' : ''}`}
              >
                <div className="sol-case-copy">
                  <div className="sol-case-meta">
                    <span>{study.metaLabel || `${study.industry} • ${study.capability}`}</span>
                  </div>
                  <h3>{study.cardTitle || study.title}</h3>
                  {index === 0 && <p>{study.summary}</p>}
                  <div className="sol-case-tags">
                    {(study.tags || []).slice(0, 2).map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <Button
                    variant="type2"
                    size="hero"
                    onClick={() => navigate(`/case-studies/${study.id}`)}
                  >
                    View Case Study
                  </Button>
                </div>
                <div className="sol-case-media">
                  {study.image ? (
                    <img src={study.image} alt={study.client || study.title} />
                  ) : (
                    <div className="sol-case-placeholder">{study.client}</div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {solution.architecture && (
        <section className="sol-architecture">
          <div className="container">
            <div className="section-pill">
              <span className="dot" />
              <span>{solution.architecture.pill}</span>
            </div>
            <h2>
              {solution.architecture.titleBefore}{' '}
              <span className="blue-accent">{solution.architecture.titleAccent}</span>
            </h2>
            <p className="sol-lead">{solution.architecture.lead}</p>
            <div className="sol-layers">
              {solution.architecture.layers.map((layer) => (
                <article key={layer.title}>
                  <div className="icon-dot" />
                  <h3>{layer.title}</h3>
                  <ul>
                    {layer.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {solution.process && (
        <section className="sol-process">
          <div className="container">
            <div className="section-pill">
              <span className="dot" />
              <span>{solution.process.pill}</span>
            </div>
            <h2>
              {solution.process.titleBefore}{' '}
              <span className="blue-accent">{solution.process.titleAccent}</span>
            </h2>
            <p className="sol-lead">{solution.process.lead}</p>
            <div className="sol-process-grid">
              {solution.process.steps.map((step) => (
                <article key={step.number}>
                  <span className="num">{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <style>{`
        .solution-detail { background:#fff; }
        .solution-detail .section-pill {
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
          width: fit-content;
        }
        .solution-detail .section-pill .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--primary);
        }
        .sol-hero {
          padding: 150px 0 72px;
          background:
            radial-gradient(ellipse 80% 60% at 50% -10%, rgba(52,136,255,0.55), transparent 70%),
            linear-gradient(180deg, #6BA8FF 0%, #D7E8FF 42%, #FFFFFF 78%);
          text-align: center;
        }
        .sol-hero-inner { max-width: 900px; margin: 0 auto; }
        .sol-hero .section-pill.light {
          margin: 0 auto 22px;
          background: rgba(255,255,255,0.55);
          border-color: rgba(255,255,255,0.7);
          color: #0F172A;
        }
        .sol-hero h1 {
          margin: 0 0 18px;
          font-size: 56px;
          line-height: 66px;
          font-weight: 600;
          color: #fff;
        }
        .sol-hero .accent-italic {
          color: #DCEEFF;
          font-style: italic;
          font-weight: 500;
        }
        .sol-hero p {
          margin: 0 auto 28px;
          max-width: 680px;
          color: rgba(15,23,42,0.72);
          font-size: 16px;
          line-height: 26px;
        }
        .sol-hero-actions {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 12px;
        }

        .sol-problem,
        .sol-challenges,
        .sol-why,
        .sol-pain,
        .sol-approach,
        .sol-capabilities,
        .sol-showcase,
        .sol-cases,
        .sol-architecture,
        .sol-process {
          padding: 80px 0;
        }

        .sol-lead {
          margin: 12px 0 36px;
          max-width: 720px;
          color: var(--body);
          font-size: 16px;
          line-height: 26px;
        }
        .sol-lead.center,
        h2.center { text-align: center; margin-left: auto; margin-right: auto; }
        .center-pill { margin-left: auto; margin-right: auto; }

        .solution-detail h2 {
          margin: 14px 0 0;
          max-width: 820px;
          font-size: 40px;
          line-height: 50px;
          font-weight: 600;
          color: var(--heading);
        }
        .solution-detail .blue-accent { color: var(--primary); }
        .solution-detail .num {
          color: var(--primary);
          font-style: italic;
          font-weight: 500;
          font-size: 18px;
        }
        .icon-dot {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: #EAF2FF;
          margin-bottom: 16px;
          position: relative;
        }
        .icon-dot::after {
          content: '';
          position: absolute;
          inset: 11px;
          border-radius: 999px;
          background: var(--primary);
        }

        .sol-problem-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 28px;
          align-items: stretch;
        }
        .sol-problem-media {
          border-radius: 28px;
          overflow: hidden;
          min-height: 420px;
          background: #EEF0F4;
        }
        .sol-problem-media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .sol-problem-list {
          list-style: none;
          margin: 0;
          padding: 8px 0;
        }
        .sol-problem-list li {
          display: grid;
          grid-template-columns: 42px 1fr;
          gap: 14px;
          padding: 18px 0;
          border-bottom: 1px solid #E8ECF2;
        }
        .sol-problem-list li:last-child { border-bottom: none; }
        .sol-problem-list strong {
          display: block;
          margin-bottom: 4px;
          color: var(--heading);
          font-size: 16px;
        }
        .sol-problem-list p {
          margin: 0;
          color: var(--body);
          font-size: 14px;
          line-height: 22px;
        }

        .sol-challenge-grid,
        .sol-why-grid,
        .sol-approach-cards,
        .sol-process-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-top: 28px;
        }
        .sol-approach-cards { grid-template-columns: repeat(3, 1fr); }
        .sol-challenge-card,
        .sol-why-card,
        .sol-approach-cards article,
        .sol-process-grid article {
          background: #F5F7FA;
          border-radius: 24px;
          padding: 24px;
        }
        .sol-challenge-card h3,
        .sol-why-card h3,
        .sol-approach-cards h3,
        .sol-process-grid h3 {
          margin: 10px 0 8px;
          font-size: 18px;
          color: var(--heading);
        }
        .sol-challenge-card p,
        .sol-why-card p,
        .sol-approach-cards p,
        .sol-process-grid p {
          margin: 0;
          color: var(--body);
          font-size: 14px;
          line-height: 22px;
        }

        .sol-pain-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(2, minmax(140px, auto));
          gap: 16px;
        }
        .sol-pain-card {
          background: #F5F7FA;
          border-radius: 24px;
          padding: 24px;
        }
        .sol-pain-card p {
          margin: 0;
          font-size: 18px;
          line-height: 26px;
          color: var(--heading);
          font-weight: 500;
        }
        .sol-highlight-card {
          grid-column: 3;
          grid-row: 1 / span 2;
          background: var(--primary);
          color: #fff;
          border-radius: 28px;
          padding: 32px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 100%;
        }
        .sol-highlight-card .brand {
          font-size: 28px;
          font-weight: 700;
        }
        .sol-highlight-card p {
          margin: 24px 0;
          font-size: 28px;
          line-height: 36px;
          font-weight: 500;
        }
        .sol-highlight-card button {
          align-self: flex-start;
          border: none;
          background: rgba(255,255,255,0.92);
          color: #0F172A;
          border-radius: 14px;
          padding: 12px 18px;
          font-weight: 500;
          cursor: pointer;
        }

        .sol-approach-steps {
          list-style: none;
          margin: 28px auto 0;
          padding: 0;
          max-width: 820px;
        }
        .sol-approach-steps li {
          display: grid;
          grid-template-columns: 48px 1fr;
          gap: 16px;
          padding: 20px 0;
          border-bottom: 1px solid #E8ECF2;
        }
        .sol-approach-steps strong {
          display: block;
          margin-bottom: 6px;
          color: var(--heading);
        }
        .sol-approach-steps p {
          margin: 0;
          color: var(--body);
          font-size: 15px;
          line-height: 24px;
        }

        .sol-cap-list {
          margin-top: 28px;
          background: #F5F7FA;
          border-radius: 28px;
          padding: 8px 28px;
        }
        .sol-cap-row {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 26px 0;
          border-bottom: 1px solid #E4E8EF;
        }
        .sol-cap-row:last-child { border-bottom: none; }
        .sol-cap-row strong {
          font-size: 22px;
          color: var(--heading);
          font-weight: 600;
        }

        .sol-cases-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }
        .sol-case-card {
          background: #F5F7FA;
          border-radius: 28px;
          padding: 24px;
          display: grid;
          gap: 18px;
        }
        .sol-case-card.featured {
          grid-column: 1 / -1;
          grid-template-columns: 1.1fr 0.9fr;
          align-items: center;
        }
        .sol-case-meta {
          margin-bottom: 10px;
          color: #6B7280;
          font-size: 13px;
        }
        .sol-case-card h3 {
          margin: 0 0 12px;
          font-size: 24px;
          line-height: 32px;
          color: var(--heading);
        }
        .sol-case-card p {
          margin: 0 0 16px;
          color: var(--body);
          font-size: 15px;
          line-height: 24px;
        }
        .sol-case-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 18px;
        }
        .sol-case-tags span {
          background: #EAF2FF;
          color: var(--primary);
          border-radius: 999px;
          padding: 6px 12px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.04em;
        }
        .sol-case-media {
          border-radius: 20px;
          overflow: hidden;
          background: #E8ECF2;
          min-height: 220px;
        }
        .sol-case-media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .sol-case-placeholder {
          min-height: 220px;
          display: grid;
          place-items: center;
          color: #64748B;
          font-weight: 600;
        }

        .sol-layers {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 12px;
          margin-top: 28px;
          background: #F5F7FA;
          border-radius: 28px;
          padding: 20px;
        }
        .sol-layers article {
          padding: 16px 12px;
          border-right: 1px solid #E4E8EF;
        }
        .sol-layers article:last-child { border-right: none; }
        .sol-layers h3 {
          margin: 0 0 12px;
          font-size: 18px;
          color: var(--heading);
        }
        .sol-layers ul {
          margin: 0;
          padding-left: 16px;
          color: var(--body);
          font-size: 14px;
          line-height: 24px;
        }

        @media (max-width: 980px) {
          .sol-hero h1 { font-size: 36px; line-height: 44px; }
          .solution-detail h2 { font-size: 30px; line-height: 38px; }
          .sol-problem-grid,
          .sol-case-card.featured,
          .sol-pain-grid {
            grid-template-columns: 1fr;
          }
          .sol-highlight-card {
            grid-column: auto;
            grid-row: auto;
          }
          .sol-challenge-grid,
          .sol-why-grid,
          .sol-approach-cards,
          .sol-process-grid,
          .sol-cases-grid,
          .sol-layers {
            grid-template-columns: 1fr;
          }
          .sol-layers article { border-right: none; border-bottom: 1px solid #E4E8EF; }
          .sol-layers article:last-child { border-bottom: none; }
        }
      `}</style>
    </div>
  );
}
