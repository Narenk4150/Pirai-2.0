import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Button from '../Button';

export default function AboutHero({ onDiscussChallenge, onSeeWork }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return undefined;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const targets = root.querySelectorAll(
      '.about-anim-badge, .about-anim-line, .about-anim-body, .about-anim-cta, .about-anim-stats'
    );

    if (reduced) {
      gsap.set(targets, { clearProps: 'all' });
      return undefined;
    }

    const ctx = gsap.context(() => {
      gsap.set('.about-anim-badge, .about-anim-line, .about-anim-body, .about-anim-cta, .about-anim-stats', {
        autoAlpha: 0,
        y: 22,
      });

      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
        onComplete: () => gsap.set(targets, { clearProps: 'transform' }),
      });

      tl.to('.about-anim-badge', { autoAlpha: 1, y: 0, duration: 0.55 })
        .to('.about-anim-line', { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.12 }, '-=0.25')
        .to('.about-anim-body', { autoAlpha: 1, y: 0, duration: 0.55 }, '-=0.35')
        .to('.about-anim-cta', { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.08 }, '-=0.3')
        .to('.about-anim-stats', { autoAlpha: 1, y: 0, duration: 0.55 }, '-=0.25');
    }, root);

    return () => {
      ctx.revert();
      gsap.set(targets, { clearProps: 'all' });
    };
  }, []);

  return (
    <section className="about-hero" ref={sectionRef}>
      <div className="container">
        <div className="about-hero-col">
          <div className="about-hero-copy">
            <div className="eyetray-badge about-anim-badge">
              <span className="dot" />
              <span>About Pirai</span>
            </div>

            <h1 className="hero-h1 about-hero-h1">
              <span className="about-anim-line">Technology partners for </span>
              <span className="accent-italic about-anim-line">
                enterprises that can’t afford to stand still.
              </span>
            </h1>

            <p className="section-body about-hero-body about-anim-body">
              Pirai helps organizations build, connect, modernize and run the systems their business depends on.
            </p>
          </div>

          <div className="about-hero-buttons">
            <div className="about-anim-cta">
              <Button variant="type1" size="hero" onClick={onDiscussChallenge}>
                Discuss Your Challenge
              </Button>
            </div>
            <div className="about-anim-cta">
              <Button variant="type2" size="hero" onClick={onSeeWork}>
                See Our Work
              </Button>
            </div>
          </div>

          <div className="about-hero-stats about-anim-stats">
            <div className="stat-col">
              <div className="stat-number">2017</div>
              <div className="stat-caption">Founded</div>
            </div>
            <div className="stat-vert-line" />
            <div className="stat-col">
              <div className="stat-number">100+</div>
              <div className="stat-caption">Engineers</div>
            </div>
            <div className="stat-vert-line" />
            <div className="stat-col">
              <div className="stat-number">5</div>
              <div className="stat-caption">Countries</div>
            </div>
            <div className="stat-vert-line" />
            <div className="stat-col">
              <div className="stat-number">10wk</div>
              <div className="stat-caption">Avg. pilot to production</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-hero {
          padding: 140px 0 72px;
          background: #FFFFFF;
        }
        .about-hero-col {
          max-width: 839px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 32px;
        }
        .about-hero-copy {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
          width: 100%;
        }
        .about-hero-h1 {
          margin: 0;
          max-width: 698px;
        }
        .about-hero-body {
          max-width: 669px;
          margin: 0;
          font-size: 16px;
          line-height: 1.5;
          color: var(--body);
        }
        .about-hero-buttons {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 14px;
        }
        .about-hero-stats {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 12px;
          padding-top: 16px;
          border-top: 1px solid var(--border);
        }
        .about-hero-stats .stat-col {
          width: 160px;
          flex: 0 0 160px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 4px;
        }
        .about-hero-stats .stat-number {
          font-size: 16px;
          font-weight: 600;
          color: var(--heading);
          line-height: 1.2;
        }
        .about-hero-stats .stat-caption {
          font-size: 14px;
          font-weight: 400;
          color: var(--muted);
          text-transform: uppercase;
          line-height: 1.4;
        }
        .about-hero-stats .stat-vert-line {
          width: 1px;
          height: 42px;
          background: var(--border);
          flex-shrink: 0;
        }
        @media (max-width: 768px) {
          .about-hero { padding-top: 120px; }
          .about-hero-stats { flex-wrap: wrap; gap: 20px; }
          .about-hero-stats .stat-col { width: calc(50% - 10px); flex-basis: calc(50% - 10px); }
          .about-hero-stats .stat-vert-line { display: none; }
          .about-hero-buttons .figma-btn-master { width: 100%; }
        }
      `}</style>
    </section>
  );
}
