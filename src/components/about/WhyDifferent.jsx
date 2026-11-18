import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ABOUT_ASSETS } from '../../data/aboutAssets';
import { prefersReducedMotion } from '../../utils/motion';

gsap.registerPlugin(ScrollTrigger);

const CARDS = [
  {
    title: 'Business-first engineering',
    text: 'We start with your goals and operating realities.',
    icon: ABOUT_ASSETS.whyDifferent[0].icon,
    photo: ABOUT_ASSETS.whyDifferent[0].photo,
  },
  {
    title: (
      <>
        Built for the
        <br />
        long term
      </>
    ),
    titleKey: 'Built for the long term',
    text: 'We design for maintainability, reliability and scalability.',
    icon: ABOUT_ASSETS.whyDifferent[1].icon,
    photo: ABOUT_ASSETS.whyDifferent[1].photo,
  },
  {
    title: 'Accountable partnership',
    text: 'We stay with you from planning through delivery.',
    icon: ABOUT_ASSETS.whyDifferent[2].icon,
    photo: ABOUT_ASSETS.whyDifferent[2].photo,
  },
];

export default function WhyDifferent() {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [isDesktop, setIsDesktop] = useState(true);

  const displayIndex = hoverIndex !== null ? hoverIndex : activeIndex;

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 991px)');
    const sync = () => setIsDesktop(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion() || !isDesktop || !sectionRef.current) {
      setActiveIndex(0);
      return undefined;
    }

    const section = sectionRef.current;
    setActiveIndex(0);

    const trigger = ScrollTrigger.create({
      trigger: section,
      start: 'top 88px',
      end: () => `+=${Math.round(window.innerHeight * 1.8)}`,
      pin: true,
      pinSpacing: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        const steps = CARDS.length;
        // Equal scroll share per card while the section stays pinned.
        const next = Math.min(steps - 1, Math.floor(self.progress * steps));
        setActiveIndex((prev) => (prev === next ? prev : next));
      },
      onEnter: () => setActiveIndex(0),
      onEnterBack: () => setActiveIndex(CARDS.length - 1),
      onLeaveBack: () => setActiveIndex(0),
    });

    const refreshId = window.requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      window.cancelAnimationFrame(refreshId);
      trigger.kill();
    };
  }, [isDesktop]);

  const handleEnter = (index) => {
    if (!isDesktop || prefersReducedMotion()) return;
    setHoverIndex(index);
  };

  const handleLeave = () => {
    if (!isDesktop || prefersReducedMotion()) return;
    setHoverIndex(null);
  };

  return (
    <section className="why-different-section" ref={sectionRef}>
      <div className="container">
        <div className="why-diff-header" data-reveal>
          <div className="section-pill">
            <span className="dot" />
            <span>What makes Pirai different</span>
          </div>
          <h2 className="why-diff-title">
            <span className="blue">A partner </span>
            accountable for the outcome.
          </h2>
        </div>

        <div
          className={`why-diff-grid${isDesktop ? ' is-desktop' : ''}`}
          data-reveal
          data-reveal-y="24"
          onMouseLeave={handleLeave}
        >
          {CARDS.map(({ title, titleKey, text, icon, photo }, index) => {
            const reduced = prefersReducedMotion();
            const isActive = !isDesktop
              ? true
              : reduced
                ? index === 0
                : index === displayIndex;

            return (
              <article
                key={titleKey || title}
                className={`why-diff-card${isActive ? ' is-active' : ''}`}
                onMouseEnter={() => handleEnter(index)}
                onFocus={() => handleEnter(index)}
              >
                <div className="why-diff-icon">
                  <img src={icon} alt="" width={100} height={100} draggable={false} />
                </div>

                <div className="why-diff-copy">
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>

                {photo ? (
                  <div className="why-diff-photo" aria-hidden={!isActive}>
                    <img src={photo} alt="" width={140} height={140} draggable={false} />
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>

      <style>{`
        .why-different-section {
          padding: 80px 0;
          background: #FFFFFF;
          position: relative;
          z-index: 2;
        }
        .why-diff-header {
          margin-bottom: 48px;
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
        .why-diff-title {
          font-size: 48px;
          line-height: 60px;
          font-weight: 500;
          color: var(--heading);
          margin: 0;
          max-width: 810px;
        }
        .why-diff-title .blue { color: var(--primary); }

        .why-diff-grid {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .why-diff-grid.is-desktop {
          flex-direction: row;
          align-items: stretch;
        }

        .why-diff-card {
          position: relative;
          background: #EEF0F4;
          border-radius: 36px;
          padding: 28px;
          min-height: 352px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 24px;
          overflow: hidden;
          min-width: 0;
          flex: 1 1 auto;
          transition: flex-grow 0.75s cubic-bezier(0.45, 0, 0.2, 1);
        }
        .why-diff-grid.is-desktop .why-diff-card {
          flex: 1 1 0;
        }
        .why-diff-grid.is-desktop .why-diff-card.is-active {
          flex: 2.1 1 0;
        }

        .why-diff-icon {
          width: 100px;
          height: 100px;
          flex-shrink: 0;
          border-radius: 50%;
          overflow: hidden;
          background: transparent;
        }
        .why-diff-icon img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
        }

        .why-diff-copy {
          position: relative;
          z-index: 1;
          max-width: 224px;
          margin-top: auto;
        }
        .why-diff-copy h3 {
          font-size: 20px;
          line-height: 30px;
          font-weight: 400;
          color: var(--heading);
          margin: 0 0 12px;
        }
        .why-diff-copy p {
          font-size: 14px;
          line-height: 20px;
          color: var(--body);
          margin: 0;
        }

        .why-diff-photo {
          position: absolute;
          right: 28px;
          bottom: 28px;
          width: 140px;
          height: 140px;
          border-radius: 20px;
          overflow: hidden;
          background: #DCE3EC;
          opacity: 0;
          transform: scale(0.92) translateY(8px);
          pointer-events: none;
          z-index: 0;
          transition:
            opacity 0.4s cubic-bezier(0.45, 0, 0.2, 1),
            transform 0.4s cubic-bezier(0.45, 0, 0.2, 1);
        }
        .why-diff-card.is-active .why-diff-photo {
          opacity: 1;
          transform: scale(1) translateY(0);
        }
        .why-diff-photo img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
        }

        @media (max-width: 1100px) and (min-width: 991px) {
          .why-diff-grid.is-desktop .why-diff-card.is-active {
            flex: 1.7 1 0;
          }
          .why-diff-photo {
            width: 120px;
            height: 120px;
          }
        }

        @media (max-width: 990px) {
          .why-diff-card {
            min-height: 240px;
            flex: 1 1 auto;
          }
          .why-diff-title {
            font-size: 36px;
            line-height: 46px;
          }
          .why-diff-photo {
            position: absolute;
            width: 120px;
            height: 120px;
            border-radius: 16px;
            opacity: 1;
            transform: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .why-diff-card,
          .why-diff-photo {
            transition: none !important;
          }
          .why-diff-grid.is-desktop .why-diff-card {
            flex: 1 1 0;
          }
          .why-diff-grid.is-desktop .why-diff-card.is-active {
            flex: 2.1 1 0;
          }
          .why-diff-photo {
            opacity: 0;
            transform: scale(0.92);
          }
          .why-diff-card.is-active .why-diff-photo {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}
