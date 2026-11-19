import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button';
import { getCaseStudyById } from '../../data/caseStudies';

function ArchitectureDiagram({ left = [], right = [] }) {
  return (
    <div className="sol-arch-diagram" aria-hidden="true">
      <div className="sol-arch-side sol-arch-left">
        {left.map((label, index) => (
          <div key={label} className={`sol-arch-label pos-${index}`}>
            <span>{label}</span>
            <i />
          </div>
        ))}
      </div>

      <div className="sol-arch-stack">
        <div className="sol-arch-stack-inner">
          {[0, 1, 2, 3, 4].map((layer) => (
            <span key={layer} className={`sol-arch-layer layer-${layer}`} />
          ))}
        </div>
      </div>

      <div className="sol-arch-side sol-arch-right">
        {right.map((label, index) => (
          <div key={label} className={`sol-arch-label pos-${index}`}>
            <i />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CapCheckIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="11" fill="#3488FF" />
      <path
        d="M6.5 11.2L9.6 14.2L15.5 7.8"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function SolutionDetail({
  solution,
  onDiscussChallenge,
  onExploreCapabilities,
}) {
  const navigate = useNavigate();
  const studies = (solution.caseStudyIds || [])
    .map((id) => getCaseStudyById(id))
    .filter(Boolean);

  const primaryCta = solution.primaryCta || 'Discuss Your Challenge';
  const secondaryCta = solution.secondaryCta || 'Explore Capabilities';

  const handleSecondary = () => {
    if (solution.secondaryCtaTarget === 'cases') {
      const el = document.querySelector('.sol-cases');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    if (onExploreCapabilities) onExploreCapabilities();
  };

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
              {primaryCta}
            </Button>
            <Button variant="type2" size="hero" onClick={handleSecondary}>
              {secondaryCta}
            </Button>
          </div>
        </div>
      </section>

      {solution.problem && (
        <section className="sol-problem">
          <div className="container">
            <div className="sol-problem-heading">
              <h2>
                <span className="blue-accent">{solution.problem.titleBefore}</span>
                {solution.problem.titleAfter}
              </h2>
              {solution.problem.lead ? (
                <p className="sol-lead">{solution.problem.lead}</p>
              ) : null}
            </div>
            <div className="sol-problem-grid">
              <div className="sol-problem-media">
                <img src={solution.problem.image} alt="" />
              </div>
              <ol className="sol-problem-list">
                {solution.problem.items.map((item) => (
                  <li key={item.number}>
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

      {solution.methodology && (
        <section className="sol-methodology">
          <div className="container">
            <div className="sol-methodology-header">
              <h2 className="center">
                {solution.methodology.titleBefore}{' '}
                <span className="blue-accent">{solution.methodology.titleAccent}</span>
              </h2>
              {solution.methodology.lead ? (
                <p className="sol-lead center">{solution.methodology.lead}</p>
              ) : null}
            </div>
            <div className="sol-method-grid">
              {solution.methodology.stages.map((stage) => (
                <article key={stage.number} className="sol-method-card">
                  <span className="num">{stage.number}</span>
                  <h3>{stage.title}</h3>
                  <p>{stage.body}</p>
                </article>
              ))}
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
          <div className="container">
            {solution.pain && (
              <h2 className="sol-pain-title">
                {solution.pain.titleBefore}{' '}
                <span className="blue-accent">{solution.pain.titleAccent}</span>
              </h2>
            )}
            <div className="sol-pain-grid">
              {solution.painCards.map((card) => (
                <article key={card.title} className="sol-pain-card">
                  {card.icon ? (
                    <img className="sol-pain-icon" src={card.icon} alt="" width={40} height={40} />
                  ) : (
                    <div className="icon-dot" />
                  )}
                  <p>{card.title}</p>
                </article>
              ))}
              {solution.highlightCard && (
                <article className="sol-highlight-card">
                  <div className="brand">{solution.highlightCard.brand}</div>
                  <p>{solution.highlightCard.body}</p>
                  <button type="button" onClick={onDiscussChallenge}>
                    {solution.highlightCard.cta}
                  </button>
                </article>
              )}
            </div>
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
            <div className="sol-cap-panel">
              <div className="sol-cap-header">
                <h2>
                  <span className="blue-accent">{solution.capabilities.titleBefore}</span>{' '}
                  {solution.capabilities.titleAccent}
                </h2>
                {solution.capabilities.lead ? (
                  <p className="sol-lead">{solution.capabilities.lead}</p>
                ) : null}
              </div>
              <div className="sol-cap-list">
                {solution.capabilities.items.map((item) => (
                  <div key={item} className="sol-cap-row">
                    <CapCheckIcon />
                    <strong>{item}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {solution.showcase && (
        <section className="sol-showcase">
          <div className="container">
            <h2 className="center sol-showcase-title">
              {solution.showcase.titleBefore}{' '}
              <span className="blue-accent">{solution.showcase.titleAccent}</span>
            </h2>
            {solution.showcase.diagram ? (
              <ArchitectureDiagram
                left={solution.showcase.diagram.left}
                right={solution.showcase.diagram.right}
              />
            ) : null}
          </div>
        </section>
      )}

      {studies.length > 0 && (
        <section className="sol-cases">
          <div className="container">
            {solution.cases && (
              <div className="sol-cases-header">
                <div className="sol-cases-heading">
                  <h2>
                    {solution.cases.titleBefore}{' '}
                    <span className="blue-accent">{solution.cases.titleAccent}</span>
                  </h2>
                  {solution.cases.lead ? <p className="sol-lead">{solution.cases.lead}</p> : null}
                </div>
                <Button
                  variant="type2"
                  size="hero"
                  onClick={() => navigate('/case-studies')}
                >
                  View all case studies
                </Button>
              </div>
            )}
            <div className="sol-cases-grid">
              {studies.map((study, index) => {
                const isFeatured = index === 0;
                const media = (
                  <div className="sol-case-media">
                    {study.image ? (
                      <img src={study.image} alt={study.client || study.title} />
                    ) : (
                      <div className="sol-case-placeholder">{study.client}</div>
                    )}
                  </div>
                );
                const copy = (
                  <div className="sol-case-copy">
                    <div className="sol-case-meta">
                      <span>{study.metaLabel || `${study.industry} • ${study.capability}`}</span>
                    </div>
                    <h3>{study.cardTitle || study.title}</h3>
                    {isFeatured && <p>{study.summary}</p>}
                    {!isFeatured && study.summary ? (
                      <p className="sol-case-summary-short">{study.summary}</p>
                    ) : null}
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
                );

                return (
                  <article
                    key={study.id}
                    className={`sol-case-card ${isFeatured ? 'featured' : 'stacked'}`}
                  >
                    {isFeatured ? (
                      <>
                        {copy}
                        {media}
                      </>
                    ) : (
                      <>
                        {media}
                        {copy}
                      </>
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {solution.architecture && (
        <section className="sol-architecture">
          <div className="container">
            <h2 className="center">
              {solution.architecture.titleBefore}{' '}
              <span className="blue-accent">{solution.architecture.titleAccent}</span>
            </h2>
            {solution.architecture.lead ? (
              <p className="sol-lead center">{solution.architecture.lead}</p>
            ) : null}
            <div className="sol-layers">
              {solution.architecture.layers.map((layer) => (
                <article key={layer.title}>
                  {layer.icon ? (
                    <img className="sol-layer-icon" src={layer.icon} alt="" width={40} height={40} />
                  ) : (
                    <div className="icon-dot" />
                  )}
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
          padding: 140px 0 80px;
          background:
            radial-gradient(ellipse 90% 70% at 50% -18%, rgba(52,136,255,0.42), transparent 68%),
            linear-gradient(180deg, #B7D4FF 0%, #E8F1FF 38%, #FFFFFF 78%);
          text-align: center;
        }
        .sol-hero-inner {
          max-width: 860px;
          margin: 0 auto;
          padding-left: 40px;
          padding-right: 40px;
        }
        .sol-hero .section-pill.light {
          margin: 0 auto 20px;
          background: rgba(255,255,255,0.72);
          border-color: rgba(52,136,255,0.22);
          color: var(--primary);
        }
        .sol-hero h1 {
          margin: 0 auto 16px;
          max-width: 780px;
          font-size: 52px;
          line-height: 62px;
          font-weight: 600;
          color: #0F172A;
          letter-spacing: -0.5px;
        }
        .sol-hero .accent-italic {
          color: #3488FF;
          font-style: italic;
          font-weight: 500;
        }
        .sol-hero p {
          margin: 0 auto 28px;
          max-width: 640px;
          color: #475569;
          font-size: 16px;
          line-height: 26px;
        }
        .sol-hero-actions {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          gap: 14px;
        }

        .sol-problem,
        .sol-methodology,
        .sol-challenges,
        .sol-why,
        .sol-pain,
        .sol-approach,
        .sol-capabilities,
        .sol-showcase,
        .sol-cases,
        .sol-architecture,
        .sol-process {
          padding: 96px 0;
        }

        .sol-lead {
          margin: 14px 0 0;
          max-width: 720px;
          color: var(--body);
          font-size: 16px;
          line-height: 26px;
        }
        .sol-lead.center,
        h2.center {
          text-align: center;
          margin-left: auto;
          margin-right: auto;
        }

        .solution-detail h2 {
          margin: 0;
          max-width: 860px;
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
          line-height: 1;
        }
        .icon-dot {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background: #EAF2FF;
          margin-bottom: 16px;
          position: relative;
          flex-shrink: 0;
        }
        .icon-dot::after {
          content: '';
          position: absolute;
          inset: 12px;
          border-radius: 999px;
          background: var(--primary);
        }

        .sol-problem-heading {
          margin-bottom: 40px;
          max-width: 760px;
        }
        .sol-problem-heading .sol-lead {
          margin-top: 14px;
        }
        .sol-problem-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          gap: 48px;
          align-items: stretch;
        }
        .sol-problem-media {
          border-radius: 28px;
          overflow: hidden;
          aspect-ratio: 1 / 1.02;
          min-height: 0;
          height: 100%;
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
          padding: 0;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
        }
        .sol-problem-list li {
          padding: 16px 0;
          border-bottom: 1px solid #E8ECF2;
        }
        .sol-problem-list li:first-child { padding-top: 0; }
        .sol-problem-list li:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }
        .sol-problem-list strong {
          display: block;
          margin-bottom: 6px;
          color: var(--heading);
          font-size: 16px;
          font-weight: 600;
          line-height: 24px;
        }
        .sol-problem-list p {
          margin: 0;
          color: var(--body);
          font-size: 14px;
          line-height: 22px;
        }

        .sol-methodology {
          background: #FFFFFF;
        }
        .sol-methodology-header {
          margin-bottom: 44px;
          max-width: 720px;
          margin-left: auto;
          margin-right: auto;
        }
        .sol-methodology-header .sol-lead {
          margin-top: 14px;
        }
        .sol-method-grid {
          display: grid;
          grid-template-columns: repeat(6, minmax(0, 1fr));
          gap: 14px;
          align-items: stretch;
        }
        .sol-method-card {
          background: #F5F7FA;
          border-radius: 20px;
          padding: 24px 18px;
          min-height: 230px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .sol-method-card .num {
          font-size: 20px;
          line-height: 1;
        }
        .sol-method-card h3 {
          margin: 16px 0 10px;
          font-size: 16px;
          line-height: 22px;
          font-weight: 600;
          color: var(--heading);
        }
        .sol-method-card p {
          margin: 0;
          font-size: 13px;
          line-height: 20px;
          color: var(--body);
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

        .sol-pain-title {
          max-width: 820px;
          margin-bottom: 40px;
        }
        .sol-pain-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr)) minmax(280px, 1.12fr);
          grid-template-rows: repeat(2, minmax(160px, 1fr));
          gap: 20px;
          align-items: stretch;
        }
        .sol-pain-card {
          background: #F5F7FA;
          border-radius: 24px;
          padding: 28px 24px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          min-height: 160px;
        }
        .sol-pain-icon {
          width: 40px;
          height: 40px;
          display: block;
          object-fit: contain;
        }
        .sol-pain-card p {
          margin: 0;
          margin-top: auto;
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
          padding: 36px 32px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 100%;
        }
        .sol-highlight-card .brand {
          font-size: 28px;
          font-weight: 700;
          line-height: 1.2;
        }
        .sol-highlight-card p {
          margin: 32px 0;
          font-size: 28px;
          line-height: 36px;
          font-weight: 500;
        }
        .sol-highlight-card button {
          align-self: flex-start;
          border: none;
          background: rgba(255,255,255,0.96);
          color: #0F172A;
          border-radius: 14px;
          padding: 12px 18px;
          font-family: inherit;
          font-size: 14px;
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

        .sol-cap-panel {
          background: #F5F7FA;
          border-radius: 32px;
          padding: 44px 48px;
        }
        .sol-cap-header {
          margin-bottom: 8px;
          max-width: 720px;
        }
        .sol-cap-header .sol-lead {
          margin-top: 12px;
          margin-bottom: 8px;
        }
        .sol-cap-list {
          margin-top: 12px;
        }
        .sol-cap-row {
          display: flex;
          align-items: center;
          gap: 18px;
          padding: 30px 0;
          border-bottom: 1px solid #E4E8EF;
        }
        .sol-cap-row:last-child { border-bottom: none; padding-bottom: 4px; }
        .sol-cap-row:first-child { padding-top: 18px; }
        .sol-cap-row strong {
          font-size: 24px;
          line-height: 32px;
          color: var(--heading);
          font-weight: 600;
        }

        .sol-showcase {
          padding-top: 80px;
          padding-bottom: 48px;
        }
        .sol-showcase-title {
          margin-bottom: 56px;
          max-width: 820px;
        }
        .sol-arch-diagram {
          display: grid;
          grid-template-columns: minmax(140px, 1fr) minmax(260px, 360px) minmax(140px, 1fr);
          align-items: center;
          gap: 20px 32px;
          max-width: 1040px;
          margin: 0 auto;
          min-height: 380px;
        }
        .sol-arch-side {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 280px;
        }
        .sol-arch-left { align-items: flex-end; }
        .sol-arch-right { align-items: flex-start; }
        .sol-arch-label {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          color: var(--heading);
          font-size: 16px;
          font-weight: 500;
          white-space: nowrap;
        }
        .sol-arch-label i {
          width: 72px;
          height: 1px;
          background: linear-gradient(90deg, rgba(52,136,255,0.15), rgba(52,136,255,0.9));
          display: block;
          flex-shrink: 0;
        }
        .sol-arch-left .sol-arch-label i {
          background: linear-gradient(90deg, rgba(52,136,255,0.9), rgba(52,136,255,0.15));
        }
        .sol-arch-stack {
          height: 340px;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 900px;
        }
        .sol-arch-stack-inner {
          position: relative;
          width: 100%;
          height: 280px;
          transform-style: preserve-3d;
        }
        .sol-arch-layer {
          position: absolute;
          left: 50%;
          height: 58px;
          border-radius: 18px;
          background: linear-gradient(135deg, rgba(52,136,255,0.95), rgba(105,168,255,0.58));
          box-shadow:
            0 16px 36px rgba(52,136,255,0.16),
            inset 0 1px 0 rgba(255,255,255,0.4);
          border: 1px solid rgba(255,255,255,0.38);
          transform-origin: center center;
          transform: translateX(-50%) rotateX(62deg) rotateZ(-42deg);
        }
        .sol-arch-layer.layer-0 { top: 18px; width: 58%; }
        .sol-arch-layer.layer-1 { top: 62px; width: 66%; }
        .sol-arch-layer.layer-2 { top: 106px; width: 74%; }
        .sol-arch-layer.layer-3 { top: 150px; width: 82%; }
        .sol-arch-layer.layer-4 { top: 194px; width: 90%; }

        .sol-cases-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 24px;
          margin-bottom: 36px;
        }
        .sol-cases-heading {
          max-width: 720px;
        }
        .sol-cases-header .sol-lead {
          margin-top: 12px;
        }
        .sol-cases-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          align-items: stretch;
        }
        .sol-case-card {
          background: #F5F7FA;
          border-radius: 28px;
          padding: 20px;
          display: grid;
          gap: 18px;
          min-height: 100%;
        }
        .sol-case-card.stacked {
          grid-template-rows: 220px 1fr;
        }
        .sol-case-card.featured {
          grid-column: 1 / -1;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          align-items: stretch;
          padding: 28px;
          gap: 28px;
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
        .sol-case-card.featured h3 {
          font-size: 28px;
          line-height: 36px;
        }
        .sol-case-card p {
          margin: 0 0 16px;
          color: var(--body);
          font-size: 15px;
          line-height: 24px;
        }
        .sol-case-summary-short {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
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
          height: 100%;
        }
        .sol-case-card.featured .sol-case-media {
          min-height: 320px;
        }
        .sol-case-card.stacked .sol-case-copy {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .sol-case-card.stacked .sol-case-copy .figma-btn-master {
          margin-top: auto;
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

        .sol-architecture h2 {
          max-width: 900px;
        }
        .sol-layers {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 0;
          margin-top: 40px;
          background: #F5F7FA;
          border-radius: 28px;
          padding: 32px 8px;
        }
        .sol-layers article {
          padding: 8px 20px;
          border-right: 1px solid #E4E8EF;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .sol-layers article:last-child { border-right: none; }
        .sol-layer-icon {
          width: 40px;
          height: 40px;
          object-fit: contain;
          display: block;
          margin-bottom: 16px;
        }
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

        @media (max-width: 1100px) {
          .sol-method-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          .sol-cases-header {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media (max-width: 980px) {
          .sol-hero h1 { font-size: 36px; line-height: 44px; }
          .solution-detail h2 { font-size: 30px; line-height: 38px; }
          .sol-problem-grid,
          .sol-case-card.featured,
          .sol-pain-grid,
          .sol-arch-diagram {
            grid-template-columns: 1fr;
          }
          .sol-highlight-card {
            grid-column: auto;
            grid-row: auto;
            min-height: 240px;
          }
          .sol-challenge-grid,
          .sol-why-grid,
          .sol-approach-cards,
          .sol-process-grid,
          .sol-cases-grid,
          .sol-layers,
          .sol-method-grid {
            grid-template-columns: 1fr;
          }
          .sol-case-card.stacked {
            grid-template-rows: 200px auto;
          }
          .sol-layers article {
            border-right: none;
            border-bottom: 1px solid #E4E8EF;
            padding: 20px 8px;
          }
          .sol-layers article:last-child { border-bottom: none; }
          .sol-arch-side {
            height: auto;
            gap: 18px;
          }
          .sol-arch-left,
          .sol-arch-right {
            align-items: center;
          }
          .sol-arch-label i { width: 40px; }
          .sol-cap-panel { padding: 28px 22px; }
          .sol-cap-row strong { font-size: 18px; line-height: 26px; }
          .sol-problem-media {
            aspect-ratio: 16 / 11;
            height: auto;
          }
        }

        @media (max-width: 640px) {
          .sol-method-grid {
            display: flex;
            overflow-x: auto;
            gap: 12px;
            padding-bottom: 8px;
            scroll-snap-type: x mandatory;
          }
          .sol-method-card {
            flex: 0 0 78%;
            scroll-snap-align: start;
            min-height: 200px;
          }
        }
      `}</style>
    </div>
  );
}
