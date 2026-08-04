import React from 'react';
import Button from './Button';

export default function CaseStudiesSection({ onSelectCaseStudy }) {
  return (
    <section className="case-studies-page-wrapper" id="casestudies">
      <div className="container">
        
        {/* SECTION HEADER ROW — PLACED OUTSIDE THE BOX DIRECTLY ON WHITE PAGE */}
        <div className="section-header-row">
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
            <Button size="standard" variant="type2">
              View all case study
            </Button>
          </div>
        </div>

        {/* GROUPED CARDS SECTION BOX CONTAINER (1200px width, padding 20px on all sides, box bg #EEF0F4) */}
        <div className="selected-work-outer-container">
          
          {/* THREE DISTINCT ROW LAYOUTS STACKED VERTICALLY WITH 20PX SPACING */}
          <div className="rows-vertical-stack">

            {/* ROW 1 — Full-width card (Content LEFT / Image RIGHT, Height 500px, Image 550px x 460px) */}
            <div className="row-card row-1-card">
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
                  <Button size="standard" variant="type2" className="btn-case-study">
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
                />
              </div>
            </div>

            {/* ROW 2 — Full-width card, MIRRORED (Image LEFT 550px x 460px / Content RIGHT) */}
            <div className="row-card row-2-card">
              {/* Left Image Panel (550px width x 460px height) */}
              <div className="inset-image-panel">
                <img 
                  src="/images/beacon_monitor.jpg" 
                  alt="Beacon healthcare monitor software dashboard" 
                  className="panel-mockup-img"
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
                  <Button size="standard" variant="type2" className="btn-case-study">
                    View Case Study
                  </Button>
                </div>
              </div>
            </div>

            {/* ROW 3 — TWO HALF-WIDTH VERTICAL CARDS (HEIGHT 640PX, IMAGE 530PX WIDE x 236PX HEIGHT) */}
            <div className="row-3-grid">
              
              {/* Card A (Left Vertical Card) */}
              <div className="row-card vertical-stack-card">
                <div className="top-image-panel-vertical">
                  <img 
                    src="/images/bank_lending.jpg" 
                    alt="Digital lending dashboard mockup" 
                    className="panel-mockup-img"
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
                    <Button size="standard" variant="type2" className="btn-case-study">
                      View Case Study
                    </Button>
                  </div>
                </div>
              </div>

              {/* Card B (Right Vertical Card) */}
              <div className="row-card vertical-stack-card">
                <div className="top-image-panel-vertical">
                  <img 
                    src="/images/manufacturing_laptop.jpg" 
                    alt="Manufacturing quality laptop mockup" 
                    className="panel-mockup-img"
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
                    <Button size="standard" variant="type2" className="btn-case-study">
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
        /* PAGE BACKGROUND IS WHITE */
        .case-studies-page-wrapper {
          padding: 80px 0;
          background-color: #FFFFFF;
        }

        /* SECTION HEADER ROW — OUTSIDE THE BOX (On white page) */
        .section-header-row {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 40px;
          gap: 32px;
        }

        .header-left {
          max-width: 600px;
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

        /* GROUPED CARDS SECTION CONTAINER (1200px width, padding 20px on all sides, box bg #EEF0F4) */
        .selected-work-outer-container {
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

        /* VERTICAL STACK WITH EXACT 20PX SPACING */
        .rows-vertical-stack {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        /* INNER CARD COMMON SPECIFICATIONS */
        .row-card {
          background-color: #FFFFFF;
          border-radius: 24px;
          border: 1px solid #E2E8F0;
          overflow: hidden;
          box-shadow: 0 6px 20px rgba(15, 23, 42, 0.02);
          transition: transform 0.25s ease-out, border-color 0.25s ease-out;
          box-sizing: border-box;
        }

        .row-card:hover {
          border-color: #CBD5E1;
          transform: translateY(-2px);
        }

        /* ROW 1 & ROW 2 FULL WIDTH CARDS: Height 500px, padding 20px 20px 20px 24px (Left padding: 24px) */
        .row-1-card, .row-2-card {
          display: flex;
          align-items: center;
          height: 500px;
          padding: 20px 20px 20px 24px;
          gap: 20px;
        }

        .card-content-col {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          height: 100%;
        }

        /* INSET IMAGE PANEL FOR ROW 1 & 2: Width 550px, Height 460px, Background #EEF0F4 */
        .inset-image-panel {
          width: 550px;
          height: 460px;
          background-color: #EEF0F4;
          border-radius: 16px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .panel-mockup-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 12px;
          display: block;
        }

        /* CARD CONTENT META HEADER */
        .card-top-meta {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
        }

        .client-logo-blue {
          font-family: 'Poppins', sans-serif;
          font-size: 16px;
          font-weight: 700;
          color: #3488FF;
          letter-spacing: 0.5px;
        }

        .client-logo-dark {
          font-family: 'Poppins', sans-serif;
          font-size: 16px;
          font-weight: 700;
          color: #0F172A;
          letter-spacing: 0.5px;
        }

        .category-label-muted {
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          font-weight: 500;
          color: #64748B;
        }

        .card-h3-title {
          font-family: 'Poppins', sans-serif;
          font-size: 24px;
          font-weight: 600;
          line-height: 34px;
          color: #0F172A;
          margin-bottom: 10px;
        }

        .card-body-paragraph {
          font-family: 'Poppins', sans-serif;
          font-size: 15px;
          line-height: 24px;
          color: #475569;
          margin-bottom: 16px;
        }

        /* TAG PILLS */
        .tag-pills-row {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }

        .tag-pill-blue {
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

        .card-btn-wrapper {
          margin-top: auto;
        }

        .btn-case-study {
          min-width: 170px !important;
        }

        /* ROW 3 (TWO HALF-WIDTH CARDS SIDE BY SIDE WITH 20PX SPACING, HEIGHT 640PX) */
        .row-3-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        /* VERTICAL STACK CARDS: HEIGHT 640PX, PADDING 24PX */
        .vertical-stack-card {
          display: flex;
          flex-direction: column;
          height: 640px; /* Height of last two vertical cards is 640px */
          padding: 20px;
          align-items: center;
        }

        /* TOP IMAGE PANEL FOR VERTICAL CARDS: WIDTH 530PX, HEIGHT 236PX */
        .top-image-panel-vertical {
          width: 530px;
          height: 236px;
          max-width: 100%;
          background-color: #EEF0F4;
          border-radius: 16px;
          overflow: hidden;
          flex-shrink: 0;
        }

        .vertical-card-body {
          padding-top: 24px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          flex: 1;
        }

        /* RESPONSIVE BREAKPOINTS */
        @media (max-width: 1100px) {
          .section-header-row {
            flex-direction: column;
            align-items: flex-start;
          }

          .row-1-card, .row-2-card {
            height: auto;
            flex-direction: column;
            padding: 24px;
          }

          .row-2-card {
            flex-direction: column-reverse;
          }

          .inset-image-panel, .top-image-panel-vertical {
            width: 100%;
            height: 300px;
          }

          .row-3-grid {
            grid-template-columns: 1fr;
          }

          .vertical-stack-card {
            height: auto;
          }
        }
      `}</style>
    </section>
  );
}
