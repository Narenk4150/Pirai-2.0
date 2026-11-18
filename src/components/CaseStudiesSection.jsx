import React from 'react';
import Button from './Button';

export default function CaseStudiesSection({ onSelectCaseStudy, onViewAll }) {
  return (
    <section className="case-studies-page-wrapper" id="casestudies">
      <div className="container">
        
        {/* SECTION HEADER ROW — PLACED OUTSIDE THE BOX DIRECTLY ON WHITE PAGE */}
        <div className="section-header-row" data-reveal>
          <div className="header-left">
            {/* Eyebrow pill */}
            <div className="eyetray-badge">
              <span className="dot" />
              <span>Selected work</span>
            </div>

            {/* H2 title with 2nd line blue emphasis */}
            <h2 className="section-h2-title">
              Systems built to be used, <br />
              <span className="blue-accent">not just launched.</span>
            </h2>

            {/* Body text */}
            <p className="header-sub-text">
              A sample of engagements across regulated industries — each one designed around the team that has to run it every day.
            </p>
          </div>

          {/* Button top-right */}
          <div className="header-right">
            <Button size="hero" variant="type2" onClick={onViewAll}>
              View all case study
            </Button>
          </div>
        </div>

        {/* GROUPED CARDS SECTION BOX CONTAINER (1200px width, padding 20px on all sides, box bg #EEF0F4) */}
        <div className="selected-work-outer-container">
          
          {/* THREE DISTINCT ROW LAYOUTS STACKED VERTICALLY WITH 20PX SPACING */}
          <div className="rows-vertical-stack">

            {/* ROW 1 — Full-width card (Content LEFT / Image RIGHT, Height 500px, Image 550px x 460px) */}
            <div className="row-card row-1-card" data-reveal data-reveal-y="32" data-reveal-duration="0.6">
              {/* Left Content Column (Left padding 24px, top/right/bottom 20px) */}
              <div className="card-content-col">
                <div className="card-top-meta">
                  <span className="client-logo-blue">HIRINGJET</span>
                  <span className="category-label-muted">Insurance • Operations</span>
                </div>

                <h3 className="card-h3-title">
                  Claims workflow rebuild, 10-week delivery
                </h3>

                <p className="card-body-paragraph">
                  Pirai embedded with a regional insurer's ops group and rebuilt their claims workflow end to end. Adoption was immediate — the system was designed around how adjusters actually work, not how the org chart is drawn.
                </p>

                <div className="tag-pills-row">
                  <span className="tag-pill-blue">WORKFLOW AUTOMATION</span>
                  <span className="tag-pill-blue">UX RESEARCH</span>
                </div>

                <div className="card-btn-wrapper">
                  <Button
                    size="hero"
                    variant="type2"
                    className="btn-case-study"
                    onClick={() => onSelectCaseStudy?.('hiringjet')}
                  >
                    View Case Study
                  </Button>
                </div>
              </div>

              {/* Right Image Panel (550px width x 460px height, background #EEF0F4) */}
              <div className="inset-image-panel">
                <img 
                  src="/images/hiringjet_tablet.jpg" 
                  alt="Claims workflow tablet mockup" 
                  className="panel-mockup-img"
                  data-reveal-img="1.05"
                />
              </div>
            </div>

            {/* ROW 2 — Full-width card, MIRRORED (Image LEFT 550px x 460px / Content RIGHT) */}
            <div className="row-card row-2-card" data-reveal data-reveal-y="32" data-reveal-duration="0.6" data-reveal-delay="0.06">
              {/* Left Image Panel (550px width x 460px height) */}
              <div className="inset-image-panel">
                <img 
                  src="/images/beacon_monitor.jpg" 
                  alt="Beacon healthcare monitor software dashboard" 
                  className="panel-mockup-img"
                  data-reveal-img="1.05"
                />
              </div>

              {/* Right Content Column */}
              <div className="card-content-col">
                <div className="card-top-meta">
                  <span className="client-logo-dark">LOGO</span>
                  <span className="category-label-muted">Healthcare • Operations Intelligence</span>
                </div>

                <h3 className="card-h3-title">
                  Beacon: unified ops visibility for care teams
                </h3>

                <p className="card-body-paragraph">
                  A healthcare operations platform giving hospital ops teams one operational view across systems that previously never talked to each other — cutting handoff time between departments.
                </p>

                <div className="tag-pills-row">
                  <span className="tag-pill-blue">PRODUCT STRATEGY</span>
                  <span className="tag-pill-blue">FULL-STACK BUILD</span>
                </div>

                <div className="card-btn-wrapper">
                  <Button
                    size="hero"
                    variant="type2"
                    className="btn-case-study"
                    onClick={() => onSelectCaseStudy?.('beacon')}
                  >
                    View Case Study
                  </Button>
                </div>
              </div>
            </div>

            {/* ROW 3 — TWO HALF-WIDTH VERTICAL CARDS (HEIGHT 640PX, IMAGE 530PX WIDE x 236PX HEIGHT) */}
            <div className="row-3-grid" data-reveal-stagger="0.1" data-reveal-y="28" data-reveal-duration="0.6">
              
              {/* Card A (Left Vertical Card) */}
              <div className="row-card vertical-stack-card" data-reveal-child>
                <div className="top-image-panel-vertical">
                  <img 
                    src="/images/bank_lending.jpg" 
                    alt="Digital lending dashboard mockup" 
                    className="panel-mockup-img"
                    data-reveal-img="1.05"
                  />
                </div>

                <div className="vertical-card-body">
                  <div className="card-top-meta">
                    <span className="client-logo-dark">LOGO</span>
                    <span className="category-label-muted">Healthcare • Operations Intelligence</span>
                  </div>

                  <h3 className="card-h3-title">
                    Digital lending pilot for Urban Cooperative Banks
                  </h3>

                  <div className="tag-pills-row">
                    <span className="tag-pill-blue">AI INTEGRATION</span>
                    <span className="tag-pill-blue">WEB APP</span>
                  </div>

                  <div className="card-btn-wrapper">
                    <Button
                      size="hero"
                      variant="type2"
                      className="btn-case-study"
                      onClick={() => onSelectCaseStudy?.('urban-cooperative-banks')}
                    >
                      View Case Study
                    </Button>
                  </div>
                </div>
              </div>

              {/* Card B (Right Vertical Card) */}
              <div className="row-card vertical-stack-card" data-reveal-child>
                <div className="top-image-panel-vertical">
                  <img 
                    src="/images/manufacturing_laptop.jpg" 
                    alt="Manufacturing quality laptop mockup" 
                    className="panel-mockup-img"
                    data-reveal-img="1.05"
                  />
                </div>

                <div className="vertical-card-body">
                  <div className="card-top-meta">
                    <span className="client-logo-dark">LOGO</span>
                    <span className="category-label-muted">Manufacturing • Quality Systems</span>
                  </div>

                  <h3 className="card-h3-title">
                    Predictive quality checks on the production line
                  </h3>

                  <div className="tag-pills-row">
                    <span className="tag-pill-blue">AI INTEGRATION</span>
                    <span className="tag-pill-blue">PLANT ROLLOUT</span>
                  </div>

                  <div className="card-btn-wrapper">
                    <Button
                      size="hero"
                      variant="type2"
                      className="btn-case-study"
                      onClick={() => onSelectCaseStudy?.('predictive-quality')}
                    >
                      View Case Study
                    </Button>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

      <style>{`
        .case-studies-page-wrapper {
          padding: 80px 0;
          background-color: #FFFFFF;
        }

        .case-studies-page-wrapper .section-header-row {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 40px;
          gap: 32px;
        }

        .case-studies-page-wrapper .header-left {
          max-width: 657px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
        }

        .case-studies-page-wrapper .section-h2-title {
          font-family: 'Poppins', sans-serif;
          font-size: 40px;
          font-weight: 600;
          line-height: 50px;
          color: #0F172A;
          margin: 0;
        }

        .case-studies-page-wrapper .blue-accent {
          color: #3488FF;
        }

        .case-studies-page-wrapper .header-sub-text {
          font-family: 'Poppins', sans-serif;
          font-size: 16px;
          line-height: 26px;
          color: #475569;
          max-width: 657px;
          margin: 0;
        }

        .case-studies-page-wrapper .header-right {
          flex-shrink: 0;
          display: flex;
          align-items: flex-end;
        }

        .case-studies-page-wrapper .selected-work-outer-container {
          max-width: 1200px;
          width: 100%;
          margin: 0 auto;
          background: #EEF0F4;
          border: 1px solid #E2E8F0;
          border-radius: 32px;
          padding: 20px;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.03);
          box-sizing: border-box;
        }

        .case-studies-page-wrapper .rows-vertical-stack {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .case-studies-page-wrapper .row-card {
          background-color: #FFFFFF;
          border-radius: 24px;
          border: 1px solid #E2E8F0;
          overflow: hidden;
          box-shadow: 0 6px 20px rgba(15, 23, 42, 0.02);
          box-sizing: border-box;
          transition: box-shadow 0.35s cubic-bezier(0.22, 1, 0.36, 1);
        }

        @media (hover: hover) and (pointer: fine) {
          .case-studies-page-wrapper .row-card:hover {
            box-shadow: 0 10px 28px rgba(15, 23, 42, 0.06);
          }
        }

        .case-studies-page-wrapper .row-1-card {
          display: flex;
          align-items: stretch;
          height: 500px;
          padding: 20px 20px 20px 24px;
          gap: 20px;
        }

        .case-studies-page-wrapper .row-2-card {
          display: flex;
          align-items: stretch;
          height: 500px;
          padding: 20px 24px 20px 20px;
          gap: 20px;
        }

        .case-studies-page-wrapper .card-content-col {
          flex: 1;
          min-width: 0;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          align-self: stretch;
          min-height: 0;
          background: transparent;
          padding: 0;
          gap: 0;
        }

        .case-studies-page-wrapper .inset-image-panel {
          width: 550px;
          height: 460px;
          background-color: #EEF0F4;
          border-radius: 16px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          align-self: center;
        }

        .case-studies-page-wrapper .panel-mockup-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 12px;
          display: block;
          transform-origin: center center;
          will-change: transform;
        }

        .case-studies-page-wrapper .card-top-meta {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
        }

        .case-studies-page-wrapper .client-logo-blue {
          font-family: 'Poppins', sans-serif;
          font-size: 16px;
          font-weight: 700;
          color: #3488FF;
          letter-spacing: 0.5px;
        }

        .case-studies-page-wrapper .client-logo-dark {
          font-family: 'Poppins', sans-serif;
          font-size: 16px;
          font-weight: 700;
          color: #0F172A;
          letter-spacing: 0.5px;
        }

        .case-studies-page-wrapper .category-label-muted {
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          font-weight: 500;
          color: #64748B;
        }

        .case-studies-page-wrapper .card-h3-title {
          font-family: 'Poppins', sans-serif;
          font-size: 24px;
          font-weight: 600;
          line-height: 34px;
          color: #0F172A;
          margin: 0 0 12px;
        }

        .case-studies-page-wrapper .card-body-paragraph {
          font-family: 'Poppins', sans-serif;
          font-size: 16px;
          line-height: 26px;
          color: #475569;
          margin: 0 0 16px;
        }

        .case-studies-page-wrapper .tag-pills-row {
          display: flex;
          align-items: center;
          gap: 8px;
          margin: 0;
          flex-wrap: wrap;
        }

        .case-studies-page-wrapper .tag-pill-blue {
          background-color: #EAF2FF;
          color: #3488FF;
          font-family: 'Poppins', sans-serif;
          font-size: 11px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          padding: 6px 14px;
          border-radius: 9999px;
        }

        .case-studies-page-wrapper .card-btn-wrapper {
          margin-top: auto;
          width: auto;
          padding-top: 24px;
        }

        .case-studies-page-wrapper .btn-case-study {
          width: auto;
          min-width: 220px;
        }

        .case-studies-page-wrapper .row-3-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .case-studies-page-wrapper .vertical-stack-card {
          display: flex;
          flex-direction: column;
          height: 640px;
          padding: 20px;
          align-items: stretch;
        }

        .case-studies-page-wrapper .top-image-panel-vertical {
          width: 100%;
          height: 236px;
          background-color: #EEF0F4;
          border-radius: 16px;
          overflow: hidden;
          flex-shrink: 0;
        }

        .case-studies-page-wrapper .vertical-card-body {
          padding-top: 24px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          flex: 1;
          min-height: 0;
        }

        @media (max-width: 1100px) {
          .case-studies-page-wrapper .section-header-row {
            flex-direction: column;
            align-items: flex-start;
          }

          .case-studies-page-wrapper .row-1-card,
          .case-studies-page-wrapper .row-2-card {
            height: auto;
            flex-direction: column;
            padding: 24px;
          }

          .case-studies-page-wrapper .row-2-card {
            flex-direction: column-reverse;
          }

          .case-studies-page-wrapper .inset-image-panel,
          .case-studies-page-wrapper .top-image-panel-vertical {
            width: 100%;
            height: 300px;
          }

          .case-studies-page-wrapper .row-3-grid {
            grid-template-columns: 1fr;
          }

          .case-studies-page-wrapper .vertical-stack-card {
            height: auto;
          }
        }
      `}</style>
    </section>
  );
}
