import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MILESTONES = [
  {
    label: 'Humble Beginnings',
    year: '2017',
    text: 'Founded in Pollachi with a vision to transform businesses through technology.',
  },
  {
    label: 'Expanding Horizons',
    year: '2019',
    text: 'Expanded operations into the UK, Malaysia and Germany.',
  },
  {
    label: 'Broadening Capabilities',
    year: '2020',
    text: 'Diversified IT services with a strategic focus on automation.',
  },
  {
    label: 'Strategic Partnerships',
    year: '2021',
    text: 'Strengthened technology capabilities through AWS and Red Hat partnerships.',
  },
  {
    label: 'Global Expansion',
    year: '2024',
    text: 'Established a world-class development centre in Pollachi and expanded into the Philippines.',
  },
  {
    label: 'Scaling for the Future',
    year: '2026',
    text: 'Expanded into the Middle East and established a 30-seat Offshore Development Centre.',
  },
];

export default function Milestones() {
  const sectionRef = useRef(null);
  const itemRefs = useRef([]);
  const [active, setActive] = useState(0);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 991px)');
    const sync = () => setIsDesktop(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || !sectionRef.current) return undefined;

    const ctx = gsap.context(() => {
      itemRefs.current.filter(Boolean).forEach((el, index) => {
        const year = el.querySelector('.m-year');
        const label = el.querySelector('.m-label');
        const text = el.querySelector('.m-text');

        gsap.fromTo(
          [label, year, text],
          { autoAlpha: 0, y: 18 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.08,
            ease: 'power3.out',
            clearProps: 'transform',
            scrollTrigger: {
              trigger: el,
              start: 'top 82%',
              toggleActions: 'play none none none',
              once: true,
            },
          }
        );

        ScrollTrigger.create({
          trigger: el,
          start: 'top center',
          end: 'bottom center',
          onEnter: () => setActive(index),
          onEnterBack: () => setActive(index),
        });
      });

      const line = sectionRef.current.querySelector('.milestones-progress');
      if (line && isDesktop) {
        gsap.fromTo(
          line,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current.querySelector('.milestones-list'),
              start: 'top 70%',
              end: 'bottom 40%',
              scrub: 0.4,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [isDesktop]);

  return (
    <section className="milestones-section" ref={sectionRef}>
      <div className="container milestones-grid">
        <div className="milestones-left" data-reveal>
          <div className="section-pill">
            <span className="dot" />
            <span>Our journey</span>
          </div>
          <h2 className="milestones-title">
            Pirai — Key <span className="blue">Turning Points &</span> Milestones.
          </h2>
        </div>

        <div className="milestones-right">
          <div className="milestones-track" aria-hidden="true">
            <span className="milestones-rail" />
            <span className="milestones-progress" />
          </div>

          <div className="milestones-list">
            {MILESTONES.map((item, idx) => (
              <button
                key={item.year}
                type="button"
                ref={(el) => {
                  itemRefs.current[idx] = el;
                }}
                className={`milestone-item ${idx === active ? 'active' : ''}`}
                onClick={() => setActive(idx)}
                onMouseEnter={() => setActive(idx)}
              >
                <span className="m-label">{item.label}</span>
                <span className="m-year">{item.year}</span>
                <span className="m-text">{item.text}</span>
              </button>
            ))}
          </div>

          <div className="milestones-dots" role="tablist" aria-label="Milestones">
            {MILESTONES.map((item, idx) => (
              <button
                key={item.year}
                type="button"
                role="tab"
                aria-selected={idx === active}
                aria-label={`Go to ${item.year} — ${item.label}`}
                className={`m-dot ${idx === active ? 'active' : ''}`}
                onClick={() => {
                  setActive(idx);
                  itemRefs.current[idx]?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                  });
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .milestones-section {
          padding: 80px 0;
          background: #FFFFFF;
        }
        .milestones-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }
        .milestones-left {
          position: sticky;
          top: 50%;
          translate: 0 -50%;
          height: fit-content;
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
        .milestones-title {
          font-size: 48px;
          line-height: 60px;
          font-weight: 500;
          color: var(--heading);
          margin: 0;
          max-width: 501px;
        }
        .milestones-title .blue { color: var(--primary); }
        .milestones-right {
          display: flex;
          gap: 32px;
          align-items: flex-start;
          position: relative;
        }
        .milestones-track {
          position: absolute;
          left: -28px;
          top: 18px;
          bottom: 18px;
          width: 2px;
          display: none;
        }
        .milestones-rail {
          position: absolute;
          inset: 0;
          background: #E2E8F0;
          border-radius: 2px;
        }
        .milestones-progress {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: var(--primary);
          border-radius: 2px;
          transform-origin: top center;
          transform: scaleY(0);
        }
        .milestones-list {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 56px;
          padding-right: 8px;
        }
        .milestone-item {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 12px;
          background: none;
          border: none;
          padding: 8px 0;
          text-align: left;
          cursor: pointer;
          opacity: 0.42;
          transition: opacity 0.45s ease;
          min-height: 140px;
        }
        .milestone-item.active,
        .milestone-item:hover {
          opacity: 1;
        }
        .m-label {
          font-size: 12px;
          font-weight: 500;
          color: var(--muted);
        }
        .m-year {
          font-size: 72px;
          line-height: 60px;
          font-weight: 300;
          color: var(--primary);
        }
        .m-text {
          font-size: 16px;
          font-weight: 500;
          color: var(--heading);
          max-width: 369px;
          line-height: 1.5;
        }
        .milestones-dots {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 8px;
          position: sticky;
          top: 50%;
          translate: 0 -50%;
          height: fit-content;
          align-self: start;
          flex-shrink: 0;
        }
        .m-dot {
          width: 18px;
          height: 4px;
          padding: 0;
          border: none;
          border-radius: 999px;
          background: #D9D9D9;
          cursor: pointer;
          transition: background 0.35s ease;
        }
        .m-dot.active { background: var(--primary); }
        @media (min-width: 991px) {
          .milestones-track { display: block; }
        }
        @media (max-width: 990px) {
          .milestones-grid { grid-template-columns: 1fr; gap: 40px; }
          .milestones-left {
            position: relative;
            top: 0;
            translate: none;
          }
          .milestones-title { font-size: 36px; line-height: 46px; }
          .m-year { font-size: 56px; }
          .milestone-item { min-height: 0; opacity: 1; }
          .milestones-dots {
            position: relative;
            top: 0;
            translate: none;
            flex-direction: row;
            justify-content: flex-start;
            padding-top: 8px;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .milestone-item,
          .m-dot {
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}
