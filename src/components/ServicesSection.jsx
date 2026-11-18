import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Button from './Button';
import { HOMEPAGE_ASSETS } from '../data/homepageAssets';

const SERVICES_LIST = [
  {
    id: '01',
    title: 'Intelligent Automation',
    description: 'Orchestrate enterprise workflows with multi-agent AI systems, document processing engines, and human-in-the-loop validation.',
    icon: HOMEPAGE_ASSETS.services['Intelligent Automation'].icon,
    thumbnail: HOMEPAGE_ASSETS.services['Intelligent Automation'].image,
    tags: ['WEB DEVELOPMENT', 'DOCUMENT INTELLIGENCE', 'LLM INTEGRATIONS', 'PROCESS AUTOMATION', 'AI AGENTS']
  },
  {
    id: '02',
    title: 'Enterprise Solutions',
    description: 'Decouple legacy monoliths and build modern event-driven enterprise architectures designed for zero-downtime operations.',
    icon: HOMEPAGE_ASSETS.services['Enterprise Solutions'].icon,
    thumbnail: HOMEPAGE_ASSETS.services['Enterprise Solutions'].image,
    tags: ['BUSINESS APPLICATIONS', 'PLATFORM DEVELOPMENT', 'SYSTEM INTEGRATION', 'MOBILE APPLICATIONS']
  },
  {
    id: '03',
    title: 'Cloud Platforms',
    description: 'Scalable Kubernetes infrastructure, automated Infrastructure-as-Code pipelines, and cost-optimized multi-cloud management.',
    icon: HOMEPAGE_ASSETS.services['Cloud Platforms'].icon,
    thumbnail: HOMEPAGE_ASSETS.services['Cloud Platforms'].image,
    tags: ['CLOUD MODERNIZATION', 'DEVOPS', 'INFRASTRUCTURE AUTOMATION', 'SCALABLE DEPLOYMENTS']
  },
  {
    id: '04',
    title: 'Data & Intelligence',
    description: 'Unified enterprise data lakes, feature store infrastructure, and real-time streaming analytics pipelines.',
    icon: HOMEPAGE_ASSETS.services['Data & Insights'].icon,
    thumbnail: HOMEPAGE_ASSETS.services['Data & Insights'].image,
    tags: ['ANALYTICS', 'FORECASTING', 'OPERATIONAL DASHBOARDS', 'DECISION INTELLIGENCE']
  },
  {
    id: '05',
    title: 'Quality Engineering',
    description: 'Site Reliability Engineering, automated chaos testing, synthetic monitoring, and self-healing infrastructure protocols.',
    icon: HOMEPAGE_ASSETS.services['Quality Engineering'].icon,
    thumbnail: HOMEPAGE_ASSETS.services['Quality Engineering'].image,
    tags: ['TEST AUTOMATION', 'AI-ASSISTED QA', 'RELEASE RELIABILITY', 'PERFORMANCE ENGINEERING']
  },
  {
    id: '06',
    title: 'CTO as a Service',
    description: 'Strategic technical leadership, architectural governance, tech stack evaluation, and digital organization scaling.',
    icon: HOMEPAGE_ASSETS.services['CTO as a Service'].icon,
    thumbnail: HOMEPAGE_ASSETS.services['CTO as a Service'].image,
    tags: ['STRATEGY & ADVISORY', 'DIGITAL TRANSFORMATION', 'GOVERNANCE', 'EXECUTIVE INSIGHTS']
  }
];

export default function ServicesSection({ onSelectService, onExploreSolutions }) {
  const [activeServiceId, setActiveServiceId] = useState('01');
  const [canHover, setCanHover] = useState(true);
  const [iconQueue, setIconQueue] = useState([SERVICES_LIST[0]]);
  const [iconSlide, setIconSlide] = useState(0);
  const [iconInstant, setIconInstant] = useState(false);
  const iconResettingRef = useRef(false);
  const iconQueueRef = useRef(iconQueue);
  const iconSlideRef = useRef(iconSlide);
  iconQueueRef.current = iconQueue;
  iconSlideRef.current = iconSlide;

  const activeService = SERVICES_LIST.find((s) => s.id === activeServiceId) || SERVICES_LIST[0];
  const activeIndex = Math.max(
    0,
    SERVICES_LIST.findIndex((s) => s.id === activeServiceId)
  );

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    const update = () => setCanHover(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  // Keep a right-to-left icon queue: outgoing exits left, incoming enters from right
  useEffect(() => {
    setIconQueue((prev) => {
      const last = prev[prev.length - 1];
      if (last?.id === activeService.id) return prev;
      return [...prev, activeService];
    });
  }, [activeService]);

  useLayoutEffect(() => {
    if (iconQueue.length <= 1) {
      setIconSlide(0);
      return;
    }
    setIconInstant(false);
    const frame = requestAnimationFrame(() => {
      setIconSlide(iconQueue.length - 1);
    });
    return () => cancelAnimationFrame(frame);
  }, [iconQueue]);

  useLayoutEffect(() => {
    if (!iconInstant) return;
    const frame = requestAnimationFrame(() => setIconInstant(false));
    return () => cancelAnimationFrame(frame);
  }, [iconInstant]);

  const handleIconTrackTransitionEnd = (event) => {
    if (event.propertyName !== 'transform') return;
    const queue = iconQueueRef.current;
    if (queue.length <= 1 || iconResettingRef.current) return;
    // Ignore mid-chain transition ends while more slides are still queued
    if (iconSlideRef.current !== queue.length - 1) return;

    iconResettingRef.current = true;
    const last = queue[queue.length - 1];
    setIconInstant(true);
    setIconQueue([last]);
    setIconSlide(0);
    requestAnimationFrame(() => {
      iconResettingRef.current = false;
    });
  };

  const activateService = (id) => {
    if (id !== activeServiceId) setActiveServiceId(id);
  };

  const handleRowKeyDown = (event, id) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      activateService(id);
    }
  };

  return (
    <section className="services-section-wrapper" id="solutions">
      <div className="container">
        <div className="section-header-row" data-reveal>
          <div className="header-left">
            <div className="eyetray-badge">
              <span className="dot" />
              <span>Our Services</span>
            </div>
            <h2 className="section-h2-title">
              End-to-end engineering, not a <br />
              <span className="blue-accent">slide deck of capabilities.</span>
            </h2>
            <p className="header-sub-text">
              We take ownership of complex systems — from first architecture decision through the team that runs it after we leave.
            </p>
          </div>

          <div className="header-right">
            <Button size="hero" variant="type2" onClick={onExploreSolutions}>
              Explore Solutions
            </Button>
          </div>
        </div>

        <div className="services-outer-box" data-reveal data-reveal-y="28" data-reveal-duration="0.65">
          {/* LEFT PANEL — mirrors active service; hover does not change selection */}
          <div className="services-left-panel">
            <div className="numeral-viewport" aria-live="polite" aria-atomic="true">
              <div
                className="numeral-track"
                style={{ transform: `translate3d(0, -${activeIndex * 20}px, 0)` }}
              >
                {SERVICES_LIST.map((service) => (
                  <span key={service.id} className="numeral-item">
                    {service.id}
                  </span>
                ))}
              </div>
            </div>

            <div className="icon-pure-container" aria-hidden="true">
              <div className="icon-hover-layer">
                <div className="icon-carousel-viewport">
                  <div
                    className={`icon-carousel-track${iconInstant ? ' is-instant' : ''}`}
                    style={{ transform: `translate3d(-${iconSlide * 140}px, 0, 0)` }}
                    onTransitionEnd={handleIconTrackTransitionEnd}
                  >
                    {iconQueue.map((service, index) => (
                      <div
                        key={`${service.id}-${index}`}
                        className="icon-carousel-slide"
                      >
                        <img
                          src={service.icon}
                          alt=""
                          className="icon-svg-pure"
                          width={140}
                          height={140}
                          draggable={false}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="left-panel-bottom">
              <div className="divider-line" />
              <div className="btn-wrapper">
                <Button
                  size="hero"
                  variant="type1"
                  fullWidth={true}
                  onClick={() => onSelectService && onSelectService(activeService)}
                >
                  View Details
                </Button>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL — drives shared active-service state */}
          <div
            className="services-accordion-column"
            role="listbox"
            aria-label="Our services"
            aria-activedescendant={`service-row-${activeServiceId}`}
          >
            <div className="accordion-inner-stack">
              {SERVICES_LIST.map((service) => {
                const isActive = service.id === activeServiceId;
                return (
                  <div
                    key={service.id}
                    id={`service-row-${service.id}`}
                    role="option"
                    aria-selected={isActive}
                    tabIndex={0}
                    className={`accordion-row ${isActive ? 'active' : ''}`}
                    onMouseEnter={() => {
                      if (canHover) activateService(service.id);
                    }}
                    onFocus={() => activateService(service.id)}
                    onClick={() => activateService(service.id)}
                    onKeyDown={(event) => handleRowKeyDown(event, service.id)}
                  >
                    <div className="row-content-left">
                      <div className="row-title-container">
                        <span className={`active-circle-dot ${isActive ? 'show' : ''}`} />
                        <h3 className={`row-title ${isActive ? 'active-title' : ''}`}>
                          {service.title}
                        </h3>
                      </div>

                      <div className={`row-tag-pills ${isActive ? 'show' : ''}`}>
                        {service.tags.map((tag, idx) => (
                          <span key={idx} className="accordion-tag-pill">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="row-thumbnail-wrapper">
                      <img
                        src={service.thumbnail}
                        alt=""
                        className="row-thumbnail-img"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .services-section-wrapper {
          padding: 80px 0;
          background-color: #FFFFFF;
        }

        .section-header-row {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 40px;
          gap: 32px;
        }

        .header-left {
          max-width: 748px;
        }

        .section-h2-title {
          font-family: 'Poppins', sans-serif;
          font-size: 40px;
          font-weight: 600;
          line-height: 50px;
          color: #0F172A;
          margin-bottom: 12px;
        }

        .blue-accent {
          color: #3488FF;
        }

        .header-sub-text {
          font-family: 'Poppins', sans-serif;
          font-size: 16px;
          line-height: 26px;
          color: #475569;
          max-width: 600px;
        }

        .services-outer-box {
          max-width: 1200px;
          width: 100%;
          margin: 0 auto;
          display: flex;
          gap: 24px;
          box-sizing: border-box;
          align-items: flex-start;
        }

        .services-left-panel {
          position: sticky;
          top: 120px;
          align-self: flex-start;
          width: 400px;
          height: 480px;
          flex-shrink: 0;
          background: #EEF0F4;
          border: 1.5px solid #FFFFFF;
          border-radius: 32px;
          padding: 16px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-shadow: 0 4px 20px rgba(15, 23, 42, 0.02);
          box-sizing: border-box;
          overflow: hidden;
          z-index: 2;
        }

        /* Vertical scrolling counter for service numbers */
        .numeral-viewport {
          position: absolute;
          top: 48px;
          left: 36px;
          width: 28px;
          height: 20px;
          overflow: hidden;
          z-index: 2;
        }

        .numeral-track {
          display: flex;
          flex-direction: column;
          transition: transform 0.42s cubic-bezier(0.65, 0, 0.35, 1);
          will-change: transform;
        }

        .numeral-item {
          flex: 0 0 20px;
          height: 20px;
          display: flex;
          align-items: center;
          font-family: 'Poppins', sans-serif;
          font-weight: 500;
          font-style: italic;
          font-size: 20px;
          line-height: 20px;
          color: #3488FF;
          user-select: none;
        }

        .icon-pure-container {
          position: absolute;
          top: 140px;
          left: 50%;
          transform: translateX(-50%);
          width: 140px;
          height: 140px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          z-index: 1;
        }

        .icon-hover-layer {
          width: 140px;
          height: 140px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Horizontal RTL icon carousel */
        .icon-carousel-viewport {
          width: 140px;
          height: 140px;
          overflow: hidden;
          position: relative;
        }

        .icon-carousel-track {
          display: flex;
          flex-direction: row;
          align-items: center;
          height: 140px;
          transition: transform 0.42s cubic-bezier(0.65, 0, 0.35, 1);
          will-change: transform;
        }

        .icon-carousel-track.is-instant {
          transition: none;
        }

        .icon-carousel-slide {
          flex: 0 0 140px;
          width: 140px;
          height: 140px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .icon-svg-pure {
          color: #3488FF;
          width: 140px;
          height: 140px;
          object-fit: contain;
          display: block;
          pointer-events: none;
          user-select: none;
        }

        .left-panel-bottom {
          width: 100%;
          margin-top: auto;
        }

        .divider-line {
          width: 100%;
          height: 1.5px;
          background-color: #FFFFFF;
          margin-bottom: 12px;
        }

        .btn-wrapper {
          width: 100%;
        }

        .btn-wrapper .figma-btn-master.size-hero {
          width: 100%;
          padding-left: 20px;
          padding-right: 52px;
          padding-bottom: 14px;
          justify-content: flex-start;
          align-items: flex-end;
        }

        .btn-wrapper .figma-btn-master .button-text-mask {
          margin-right: 0;
        }

        .services-accordion-column {
          width: 778px;
          flex: 1 1 auto;
          min-width: 0;
          background: #EEF0F4;
          border: 1.5px solid #FFFFFF;
          border-radius: 32px;
          padding: 24px;
          box-shadow: 0 4px 20px rgba(15, 23, 42, 0.02);
          box-sizing: border-box;
          overflow: visible;
        }

        .accordion-inner-stack {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          background: transparent;
          border-radius: 24px;
          overflow: visible;
          border: none;
        }

        .accordion-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 36px;
          gap: 24px;
          border-bottom: 1.5px solid #FFFFFF;
          cursor: pointer;
          flex: 0 0 auto;
          height: 121px;
          min-height: 121px;
          transition:
            height 0.45s cubic-bezier(0.22, 1, 0.36, 1),
            min-height 0.45s cubic-bezier(0.22, 1, 0.36, 1),
            padding 0.45s cubic-bezier(0.22, 1, 0.36, 1),
            background-color 0.3s ease;
          overflow: hidden;
          box-sizing: border-box;
          background-color: transparent;
          width: 100%;
          outline: none;
        }

        .accordion-row:focus-visible {
          background-color: rgba(52, 136, 255, 0.04);
        }

        .accordion-row:last-child {
          border-bottom: none;
        }

        .accordion-row.active {
          height: 160px;
          min-height: 160px;
          padding: 12px 36px;
          background-color: transparent;
        }

        .row-content-left {
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex: 1;
          min-width: 0;
          margin-left: 0;
          padding-left: 0;
        }

        .row-title-container {
          display: flex;
          align-items: center;
          gap: 16px;
          margin: 0;
          padding: 0;
        }

        .active-circle-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: #3488FF;
          flex-shrink: 0;
          display: inline-block;
          opacity: 0;
          transform: scale(0.6);
          transition:
            opacity 0.3s cubic-bezier(0.22, 1, 0.36, 1),
            transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .active-circle-dot.show {
          opacity: 1;
          transform: scale(1);
        }

        .row-title {
          font-family: 'Poppins', sans-serif;
          font-weight: 400;
          font-size: 32px;
          line-height: 32px;
          color: #0F172A;
          margin: 0;
          padding: 0;
          transition: color 0.3s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .row-title.active-title {
          color: #3488FF;
        }

        .row-tag-pills {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 0;
          margin-left: 26px;
          flex-wrap: wrap;
          opacity: 0;
          max-height: 0;
          transform: translateY(8px);
          pointer-events: none;
          transition:
            opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1),
            transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
            max-height 0.45s cubic-bezier(0.22, 1, 0.36, 1),
            margin-top 0.45s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .row-tag-pills.show {
          opacity: 1;
          max-height: 120px;
          margin-top: 12px;
          transform: translateY(0);
          pointer-events: auto;
        }

        .accordion-tag-pill {
          background-color: #FFFFFF;
          border: 1px solid #3488FF;
          color: #3488FF;
          font-family: 'Poppins', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          padding: 4px 12px;
          border-radius: 9999px;
          box-shadow: 0 1px 3px rgba(52, 136, 255, 0.04);
        }

        .row-thumbnail-wrapper {
          width: 216px;
          height: 73px;
          border-radius: 20px;
          overflow: hidden;
          flex-shrink: 0;
          margin-left: auto;
          box-shadow: 0 2px 8px rgba(15, 23, 42, 0.04);
          display: flex;
          align-items: center;
          justify-content: center;
          transition:
            height 0.45s cubic-bezier(0.22, 1, 0.36, 1),
            transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 0.4s cubic-bezier(0.22, 1, 0.36, 1);
          transform: scale(1);
          transform-origin: center right;
        }

        .accordion-row.active .row-thumbnail-wrapper {
          height: 136px;
          transform: scale(1.02);
          box-shadow: 0 6px 18px rgba(15, 23, 42, 0.08);
        }

        .row-thumbnail-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 20px;
          display: block;
          transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .accordion-row.active .row-thumbnail-img {
          transform: scale(1.03);
        }

        @media (max-width: 1100px) {
          .section-header-row {
            flex-direction: column;
            align-items: flex-start;
          }

          .services-outer-box {
            flex-direction: column;
          }

          .services-left-panel {
            position: relative;
            top: auto;
            width: 100%;
            height: auto;
            min-height: 420px;
          }

          .services-accordion-column {
            width: 100%;
          }

          .accordion-row {
            height: auto;
            min-height: 88px;
            padding: 16px 24px;
          }

          .accordion-row.active {
            height: auto;
            min-height: 160px;
          }

          .row-title {
            font-size: 24px;
            line-height: 28px;
          }
        }

        @media (max-width: 640px) {
          .section-h2-title {
            font-size: 28px;
            line-height: 36px;
          }

          .accordion-row,
          .accordion-row.active {
            padding: 14px 16px;
            gap: 12px;
          }

          .row-thumbnail-wrapper {
            width: 120px;
            height: 56px;
          }

          .accordion-row.active .row-thumbnail-wrapper {
            height: 88px;
          }

          .row-title {
            font-size: 18px;
            line-height: 24px;
          }

          .row-tag-pills {
            margin-left: 0;
          }

          .active-circle-dot {
            width: 8px;
            height: 8px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .numeral-track,
          .icon-carousel-track {
            transition: none !important;
          }

          .accordion-row.active .row-thumbnail-wrapper,
          .accordion-row.active .row-thumbnail-img {
            transform: none !important;
          }

          .accordion-row,
          .active-circle-dot,
          .row-title,
          .row-tag-pills,
          .row-thumbnail-wrapper,
          .row-thumbnail-img {
            transition: none !important;
          }

          .row-tag-pills {
            transform: none;
          }

          .row-tag-pills.show {
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}
