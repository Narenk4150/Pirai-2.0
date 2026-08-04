import React, { useState } from 'react';
import { Code2, Cloud, TrendingUp, ShieldCheck, MapPin } from 'lucide-react';
import Button from './Button';

// CUSTOM GLYPH FOR INTELLIGENT AUTOMATION (SERVICE 01):
// Closed circular ring outline with 2 orbit swirl arrow strokes following the ring's curve (top-left & bottom-right), and a 4-point compass star centered inside.
function OrbitSparkleIcon({ size = 140, color = "#3488FF", className = "" }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 48 48" 
      fill="none" 
      stroke={color} 
      strokeWidth="2.2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      {/* Outer circular ring with orbit arc notches */}
      <circle cx="24" cy="24" r="18" stroke={color} strokeWidth="2.2" strokeDasharray="30 8 28 8" />
      {/* Top-left orbit arrow tip following curve */}
      <path d="M 10 18 L 8 22 L 12 24" stroke={color} strokeWidth="2.2" />
      {/* Bottom-right orbit arrow tip following curve */}
      <path d="M 38 30 L 40 26 L 36 24" stroke={color} strokeWidth="2.2" />
      {/* Centered 4-point compass star */}
      <path d="M 24 14 Q 24 24 14 24 Q 24 24 34 24 Q 24 24 24 14 Z" fill="none" stroke={color} strokeWidth="1.8" />
    </svg>
  );
}

export default function ServicesSection({ onSelectService, onExploreSolutions }) {
  const servicesList = [
    {
      id: '01',
      title: 'Intelligent Automation',
      description: 'Orchestrate enterprise workflows with multi-agent AI systems, document processing engines, and human-in-the-loop validation.',
      icon: OrbitSparkleIcon,
      thumbnail: '/images/hiringjet_tablet.jpg',
      tags: ['WEB DEVELOPMENT', 'DOCUMENT INTELLIGENCE', 'LLM INTEGRATIONS', 'PROCESS AUTOMATION', 'AI AGENTS']
    },
    {
      id: '02',
      title: 'Enterprise Solutions',
      description: 'Decouple legacy monoliths and build modern event-driven enterprise architectures designed for zero-downtime operations.',
      icon: Code2,
      thumbnail: '/images/beacon_monitor.jpg',
      tags: ['BUSINESS APPLICATIONS', 'PLATFORM DEVELOPMENT', 'SYSTEM INTEGRATION', 'MOBILE APPLICATIONS']
    },
    {
      id: '03',
      title: 'Cloud Platforms',
      description: 'Scalable Kubernetes infrastructure, automated Infrastructure-as-Code pipelines, and cost-optimized multi-cloud management.',
      icon: Cloud,
      thumbnail: '/images/insight_kubernetes.png',
      tags: ['CLOUD MODERNIZATION', 'DEVOPS', 'INFRASTRUCTURE AUTOMATION', 'SCALABLE DEPLOYMENTS']
    },
    {
      id: '04',
      title: 'Data & Insights',
      description: 'Unified enterprise data lakes, feature store infrastructure, and real-time streaming analytics pipelines.',
      icon: TrendingUp,
      thumbnail: '/images/bank_lending.jpg',
      tags: ['ANALYTICS', 'FORECASTING', 'OPERATIONAL DASHBOARDS', 'DECISION INTELLIGENCE']
    },
    {
      id: '05',
      title: 'Quality Engineering',
      description: 'Site Reliability Engineering, automated chaos testing, synthetic monitoring, and self-healing infrastructure protocols.',
      icon: ShieldCheck,
      thumbnail: '/images/manufacturing_laptop.jpg',
      tags: ['TEST AUTOMATION', 'AI-ASSISTED QA', 'RELEASE RELIABILITY', 'PERFORMANCE ENGINEERING']
    },
    {
      id: '06',
      title: 'Business Transformation',
      description: 'Strategic technical leadership, architectural governance, tech stack evaluation, and digital organization scaling.',
      icon: MapPin,
      thumbnail: '/images/insight_scaling.png',
      tags: ['STRATEGY & ADVISORY', 'DIGITAL TRANSFORMATION', 'GOVERNANCE', 'EXECUTIVE INSIGHTS']
    }
  ];

  const [activeServiceId, setActiveServiceId] = useState('01');

  const activeService = servicesList.find(s => s.id === activeServiceId) || servicesList[0];
  const ActiveIcon = activeService.icon;

  return (
    <section className="services-section-wrapper" id="solutions">
      <div className="container">
        
        {/* HEADER — PLACED OUTSIDE THE BOX DIRECTLY ON WHITE PAGE */}
        <div className="section-header-row">
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
            <Button size="standard" variant="type2" onClick={onExploreSolutions}>
              Explore Solutions
            </Button>
          </div>
        </div>

        {/* BODY LAYOUT — TWO COLUMNS CONTAINER (~1200px TOTAL WIDTH) */}
        <div className="services-outer-box">
          
          {/* LEFT PANEL: 400px width, 480px height, 32px corner radius, 16px padding on all corners */}
          <div className="services-left-panel">
            {/* Numeral top-left: Poppins medium italic, 20px font size, 36px left padding, 48px top padding */}
            <span className="active-numeral">{activeService.id}</span>
            
            {/* Centered Icon Graphic: 140px width and height, placed 140px from top, center-aligned */}
            <div className="icon-pure-container">
              <div key={activeService.id} className="icon-pure-wrapper">
                <ActiveIcon size={140} color="#3488FF" className="icon-svg-pure" />
              </div>
            </div>

            {/* Bottom Section with White Divider Line and Stretched Full-Width View Details CTA */}
            <div className="left-panel-bottom">
              <div className="divider-line" />
              <div className="btn-wrapper">
                <Button 
                  size="standard" 
                  variant="type1"
                  fullWidth={true}
                  onClick={() => onSelectService && onSelectService(activeService)}
                >
                  View Details
                </Button>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: FIXED HEIGHT 813px, Width 778px, 24px Card Padding, Card BG #EEF0F4, Corner Radius 32px */}
          <div className="services-accordion-column">
            <div className="accordion-inner-stack">
              {servicesList.map((service) => {
                const isActive = service.id === activeServiceId;
                return (
                  <div
                    key={service.id}
                    className={`accordion-row ${isActive ? 'active' : ''}`}
                    onMouseEnter={() => setActiveServiceId(service.id)}
                    onClick={() => setActiveServiceId(service.id)}
                  >
                    {/* Row Left Content (Flush Left up to padding value) */}
                    <div className="row-content-left">
                      <div className="row-title-container">
                        {/* Reserved 10px Circle Space Available All the Time — Fades in on hover */}
                        <span className={`active-circle-dot ${isActive ? 'show' : ''}`} />
                        
                        {/* Title text: Poppins Regular, 32px font size, 32px line height */}
                        <h3 className={`row-title ${isActive ? 'active-title' : ''}`}>
                          {service.title}
                        </h3>
                      </div>

                      {/* Tag Pills (Aligned with starting of the title) */}
                      <div className={`row-tag-pills ${isActive ? 'show' : ''}`}>
                        {service.tags.map((tag, idx) => (
                          <span key={idx} className="accordion-tag-pill">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Row Right Thumbnail Image (Flush Right up to padding value) */}
                    <div className="row-thumbnail-wrapper">
                      <img 
                        src={service.thumbnail} 
                        alt={service.title} 
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
        /* PAGE WRAPPER IS WHITE */
        .services-section-wrapper {
          padding: 80px 0;
          background-color: #FFFFFF;
        }

        /* HEADER ROW — OUTSIDE THE BOX DIRECTLY ON WHITE PAGE */
        .section-header-row {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 40px;
          gap: 32px;
        }

        .header-left {
          max-width: 680px;
        }

        .section-h2-title {
          font-family: 'Poppins', sans-serif;
          font-size: 40px;
          font-weight: 600;
          line-height: 50px;
          color: #0F172A;
          margin-bottom: 16px;
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

        /* BODY CONTAINER — TWO COLUMNS LAYOUT (~1200px TOTAL WIDTH) */
        .services-outer-box {
          max-width: 1200px;
          width: 100%;
          margin: 0 auto;
          display: flex;
          gap: 20px;
          box-sizing: border-box;
          align-items: flex-start;
        }

        /* LEFT PANEL: 400px width, 480px height, 32px corner radius, 16px padding on all corners, stroke white */
        .services-left-panel {
          position: relative;
          width: 400px;
          height: 480px;
          flex-shrink: 0;
          background: #EEF0F4;
          border: 1.5px solid #FFFFFF; /* White stroke */
          border-radius: 32px;         /* 32px corner radius */
          padding: 16px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-shadow: 0 4px 20px rgba(15, 23, 42, 0.02);
          box-sizing: border-box;
        }

        /* ACTIVE NUMERAL: Poppins medium italic, 20px font size, 36px left padding, 48px top padding */
        .active-numeral {
          position: absolute;
          top: 48px;
          left: 36px;
          font-family: 'Poppins', sans-serif;
          font-weight: 500;
          font-style: italic;
          font-size: 20px;
          color: #3488FF;
          line-height: 1;
        }

        /* ICON: 140px width and height, placed 140px from top, center-aligned */
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
        }

        .icon-pure-wrapper {
          width: 140px;
          height: 140px;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeIn 0.3s ease-out forwards;
        }

        .icon-svg-pure {
          color: #3488FF;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.92);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .left-panel-bottom {
          width: 100%;
          margin-top: auto;
        }

        .divider-line {
          width: 100%;
          height: 1.5px;
          background-color: #FFFFFF; /* White stroke divider */
          margin-bottom: 16px;
        }

        .btn-wrapper {
          width: 100%;
        }

        /* RIGHT COLUMN: STRICTLY FIXED HEIGHT 813px, Width 778px, Card BG #EEF0F4, Stroke White, Corner Radius 32px */
        .services-accordion-column {
          width: 778px;
          height: 813px; /* STRICTLY FIXED HEIGHT */
          flex-shrink: 0;
          background: #EEF0F4;
          border: 1.5px solid #FFFFFF; /* White stroke */
          border-radius: 32px;         /* 32px corner radius */
          padding: 24px;              /* 24px distance between card and stroke */
          box-shadow: 0 4px 20px rgba(15, 23, 42, 0.02);
          box-sizing: border-box;
          overflow: hidden;
        }

        /* ACCORDION INNER CONTAINER — Fills 100% of 813px height */
        .accordion-inner-stack {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: transparent;
          border-radius: 24px;
          overflow: hidden;
          border: none;
        }

        /* ACCORDION ROW: Title content aligned flush left to padding, thumbnail image aligned flush right to padding */
        .accordion-row {
          display: flex;
          align-items: center;            /* Vertically centers title content & image */
          justify-content: space-between; /* Autolayout spacing between left content & right image */
          padding: 0 36px;                 /* 36px horizontal padding boundary */
          gap: 24px;
          border-bottom: 1.5px solid #FFFFFF; /* White stroke divider */
          cursor: pointer;
          flex: 1;                        /* Inactive rows flex smoothly */
          min-height: 73px;
          transition: flex 0.35s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.25s ease;
          overflow: hidden;
          box-sizing: border-box;
          background-color: transparent;
          width: 100%;
        }

        .accordion-row:last-child {
          border-bottom: none;
        }

        .accordion-row.active {
          flex: 0 0 160px; /* Active row expands smoothly within fixed 813px container */
          padding: 12px 36px;
          background-color: transparent;
        }

        /* LEFT CONTENT BLOCK: Flush left up to padding value */
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
          gap: 16px; /* 16px spacing between dot and text */
          margin: 0;
          padding: 0;
          transition: transform 0.3s ease;
        }

        .accordion-row.active .row-title-container {
          transform: translateY(0);
        }

        /* 10px Diameter Circle Indicator — Reserved Layout Space */
        .active-circle-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: #3488FF;
          flex-shrink: 0;
          display: inline-block;
          opacity: 0;
          transition: opacity 0.25s ease;
        }

        .active-circle-dot.show {
          opacity: 1;
        }

        /* TITLE: Poppins Regular, 32px font size, 32px line height */
        .row-title {
          font-family: 'Poppins', sans-serif;
          font-weight: 400;
          font-size: 32px;
          line-height: 32px;
          color: #0F172A;
          margin: 0;
          padding: 0;
          transition: color 0.25s ease;
        }

        .row-title.active-title {
          color: #3488FF;
        }

        /* TAG PILLS: Aligned with starting of title (10px dot + 16px gap = 26px margin-left) */
        .row-tag-pills {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 12px;
          margin-left: 26px; /* Aligns precisely with starting of title text */
          flex-wrap: wrap;
          opacity: 0;
          max-height: 0;
          transform: translateY(6px);
          transition: opacity 0.3s ease, transform 0.3s ease, max-height 0.3s ease;
        }

        .row-tag-pills.show {
          opacity: 1;
          max-height: 120px;
          transform: translateY(0);
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

        /* RIGHT THUMBNAIL IMAGE: Flush right up to padding value */
        .row-thumbnail-wrapper {
          width: 216px;
          height: 73px; /* Collapsed state */
          border-radius: 20px;
          overflow: hidden;
          flex-shrink: 0;
          margin-left: auto; /* Pushes thumbnail image flush right to padding */
          box-shadow: 0 2px 8px rgba(15, 23, 42, 0.04);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: height 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .accordion-row.active .row-thumbnail-wrapper {
          height: 136px; /* Expanded state */
        }

        .row-thumbnail-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 20px;
          display: block;
        }

        /* RESPONSIVE BREAKPOINTS */
        @media (max-width: 1100px) {
          .section-header-row {
            flex-direction: column;
            align-items: flex-start;
          }

          .services-outer-box {
            flex-direction: column;
          }

          .services-left-panel {
            width: 100%;
            height: auto;
          }

          .services-accordion-column {
            width: 100%;
            height: auto;
          }
        }
      `}</style>
    </section>
  );
}
