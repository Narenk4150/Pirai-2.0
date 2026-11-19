import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from './Button';
import { HOMEPAGE_ASSETS } from '../data/homepageAssets';
import { MOTION, prefersReducedMotion } from '../utils/motion';

gsap.registerPlugin(ScrollTrigger);

export default function Hero({ onDiscussChallenge, onExploreSolutions }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root || prefersReducedMotion()) return undefined;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: MOTION.ease } });

      tl.fromTo(
        root.querySelector('.hero-figma-bg-image-wrapper'),
        { autoAlpha: 0, scale: 1.04, x: 24 },
        { autoAlpha: 1, scale: 1, x: 0, duration: MOTION.image },
        0
      )
        .fromTo(
          root.querySelector('.eyetray-badge'),
          { autoAlpha: 0, y: 16 },
          { autoAlpha: 1, y: 0, duration: MOTION.text },
          0.12
        )
        .fromTo(
          root.querySelectorAll('[data-hero-line]'),
          { autoAlpha: 0, y: 28 },
          { autoAlpha: 1, y: 0, duration: 0.55, stagger: MOTION.heroStagger },
          0.18
        )
        .fromTo(
          root.querySelector('.hero-body-copy'),
          { autoAlpha: 0, y: 18 },
          { autoAlpha: 1, y: 0, duration: MOTION.text },
          0.38
        )
        .fromTo(
          root.querySelectorAll('.hero-buttons-group .figma-btn-master'),
          { autoAlpha: 0, y: 16 },
          { autoAlpha: 1, y: 0, duration: MOTION.text, stagger: 0.08 },
          0.48
        )
        .fromTo(
          root.querySelector('.hero-left-stats-row'),
          { autoAlpha: 0, y: 14 },
          { autoAlpha: 1, y: 0, duration: MOTION.text },
          0.62
        );

      // Restrained parallax on hero image (desktop only)
      const img = root.querySelector('.hero-figma-portrait-img');
      if (img && window.matchMedia('(min-width: 991px)').matches) {
        gsap.to(img, {
          y: -36,
          ease: 'none',
          scrollTrigger: {
            trigger: root,
            start: 'top top',
            end: 'bottom top',
            scrub: 0.6,
          },
        });
      }
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero-section" ref={sectionRef}>
      <div className="container hero-container-relative">
        <div className="hero-grid-layout">
          <div className="hero-content-col">
            <div className="hero-copy-stack">
              <div className="eyetray-badge">
                <span className="dot" />
                <span>Enterprise engineering & applied AI</span>
              </div>

              <h1 className="hero-h1">
                <span className="hero-line" data-hero-line>
                  We rebuild how enterprises operate —
                </span>
                <span className="hero-line" data-hero-line>
                  <span className="accent-italic">systems teams adopt on day one</span>
                  , not just deploy.
                </span>
              </h1>

              <p className="hero-body-copy section-body">
                Pirai partners with regulated enterprises to design, build, and ship AI-enabled systems — from insurer claims workflows to manufacturing floor intelligence — engineered around how your teams actually work.
              </p>
            </div>

            <div className="hero-buttons-group">
              <Button variant="type1" size="hero" onClick={onDiscussChallenge}>
                Discuss Your Challenge
              </Button>

              <Button variant="type2" size="hero" onClick={onExploreSolutions}>
                See Our Work
              </Button>
            </div>

            <div className="hero-left-stats-row">
              <div className="stat-col">
                <div className="stat-number">100+</div>
                <div className="stat-caption">Engineers</div>
              </div>

              <div className="stat-vert-line" />

              <div className="stat-col">
                <div className="stat-number">8+</div>
                <div className="stat-caption">Years delivering</div>
              </div>

              <div className="stat-vert-line" />

              <div className="stat-col">
                <div className="stat-number">5</div>
                <div className="stat-caption">Regulated verticals</div>
              </div>

              <div className="stat-vert-line" />

              <div className="stat-col">
                <div className="stat-number">10wk</div>
                <div className="stat-caption">Avg. pilot to production</div>
              </div>
            </div>
          </div>

          <div className="hero-graphic-col" aria-hidden="true">
            <div className="hero-figma-bg-image-wrapper">
              <img
                src={HOMEPAGE_ASSETS.hero}
                alt=""
                className="hero-figma-portrait-img"
              />
              <div className="hero-figma-gradient-overlay" />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          padding-top: 140px;
          padding-bottom: 60px;
          background: #FFFFFF;
          overflow: hidden;
          min-height: 700px;
        }

        .hero-container-relative {
          position: relative;
          z-index: 2;
        }

        .hero-grid-layout {
          display: grid;
          grid-template-columns: minmax(0, 1.15fr) minmax(280px, 0.85fr);
          gap: 24px;
          align-items: start;
        }

        .hero-content-col {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          max-width: 720px;
          gap: 32px;
          position: relative;
          z-index: 2;
        }

        .hero-copy-stack {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
          width: 100%;
        }

        .hero-h1 {
          margin-bottom: 0;
        }

        .hero-line {
          display: block;
        }

        .hero-body-copy {
          max-width: 669px;
          margin-bottom: 0;
          font-size: 16px;
          color: var(--body);
          line-height: 1.5;
        }

        .hero-buttons-group {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 0;
        }

        .hero-graphic-col {
          position: relative;
          min-height: 560px;
          display: flex;
          align-items: flex-start;
          justify-content: center;
        }

        .hero-figma-bg-image-wrapper {
          position: relative;
          width: 100%;
          max-width: 520px;
          height: 620px;
          margin-top: -48px;
          pointer-events: none;
          display: flex;
          align-items: flex-start;
          justify-content: center;
        }

        .hero-figma-portrait-img {
          height: 100%;
          width: 100%;
          max-height: 620px;
          object-fit: contain;
          object-position: top center;
          transform: translateY(-12px);
          will-change: transform;
        }

        .hero-figma-gradient-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0) 62%, rgba(255, 255, 255, 1) 100%);
          pointer-events: none;
        }

        .hero-left-stats-row {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 12px;
          padding-top: 16px;
          border-top: 1px solid var(--border);
        }

        .stat-col {
          width: 160px;
          flex: 0 0 160px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          gap: 4px;
        }

        .stat-number {
          font-size: 16px;
          font-weight: 600;
          color: var(--heading);
          line-height: 1.2;
        }

        .stat-caption {
          font-size: 14px;
          font-weight: 400;
          color: var(--muted);
          text-transform: uppercase;
          letter-spacing: 0;
          line-height: 1.4;
        }

        .stat-vert-line {
          width: 1px;
          height: 42px;
          background: var(--border);
          flex-shrink: 0;
        }

        @media (max-width: 1100px) {
          .hero-grid-layout {
            grid-template-columns: minmax(0, 1.1fr) minmax(240px, 0.9fr);
            gap: 16px;
          }
          .hero-figma-bg-image-wrapper {
            max-width: 440px;
            height: 560px;
          }
        }

        @media (max-width: 990px) {
          .hero-grid-layout {
            grid-template-columns: 1fr;
          }
          .hero-content-col {
            max-width: 100%;
          }
          .hero-graphic-col {
            order: -1;
            min-height: 0;
            justify-content: center;
          }
          .hero-figma-bg-image-wrapper {
            margin-top: 0;
            height: 360px;
            max-width: 420px;
          }
          .hero-figma-portrait-img {
            transform: translateY(0);
            max-height: 360px;
          }
        }

        @media (max-width: 768px) {
          .hero-left-stats-row {
            flex-wrap: wrap;
            gap: 20px;
          }
          .stat-col {
            width: calc(50% - 10px);
            flex: 0 0 calc(50% - 10px);
          }
          .stat-vert-line {
            display: none;
          }
          .hero-buttons-group .figma-btn-master {
            width: 100%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-figma-portrait-img {
            will-change: auto;
          }
        }
      `}</style>
    </section>
  );
}
