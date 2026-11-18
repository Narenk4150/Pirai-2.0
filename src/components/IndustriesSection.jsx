import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { HOMEPAGE_ASSETS } from '../data/homepageAssets';

// GREEN DOUBLE-CHECKMARK ICON FOR CHECKLIST ITEMS
function DoubleCheckIcon({ size = 16, color = "#10B981" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
      <path d="M2 12l5 5L18 6" />
      <path d="M8 12l5 5L22 6" />
    </svg>
  );
}

export default function IndustriesSection({ onSelectIndustry }) {
  // ROW 1: BFSI (358px width) & Healthcare (Fills remaining space)
  const bfsiCard = {
    id: 'bfsi',
    title: 'BFSI',
    icon: HOMEPAGE_ASSETS.industries.BFSI,
    tags: 'Digital banking • Risk Management • Regulatory Compliance',
    outcomes: [
      'Faster regulatory compliance',
      'Improved fraud detection',
      'Better customer experience'
    ]
  };

  const healthcareCard = {
    id: 'healthcare',
    title: 'Healthcare',
    icon: HOMEPAGE_ASSETS.industries.Healthcare,
    tags: 'Clinical Systems • Patient Analytics • Care Coordination • Operational Efficiency',
    outcomes: [
      'Unified patient operations',
      'Faster clinical workflows',
      'Better data accessibility',
      'Improved patient outcomes'
    ]
  };

  // ROW 2: 3 CARDS (Telecom, Retail, Manufacturing)
  const row2Cards = [
    {
      id: 'telecom',
      title: 'Telecom',
      icon: HOMEPAGE_ASSETS.industries.Telecom,
      tags: 'Network Operations • Customer Analytics • Billing Systems • Service Automation',
      outcomes: [
        'Faster incident resolution',
        'Improved network visibility',
        'Reduced operational overhead',
        'Better customer experience'
      ]
    },
    {
      id: 'retail',
      title: 'Retail',
      icon: HOMEPAGE_ASSETS.industries.Retail,
      tags: 'Supply Chain • Demand Forecasting • Customer Intelligence • Omnichannel Commerce',
      outcomes: [
        'Optimized inventory',
        'Higher demand accuracy',
        'Improved customer engagement',
        'Increased revenue'
      ]
    },
    {
      id: 'manufacturing',
      title: 'Manufacturing',
      icon: HOMEPAGE_ASSETS.industries.Manufacturing,
      tags: 'Production Planning • Quality Management • Predictive Maintenance • Supply Chain',
      outcomes: [
        'Faster regulatory compliance',
        'Improved fraud detection',
        'Improved fraud detection',
        'Better customer experience'
      ]
    }
  ];

  const renderCard = (card, customClass = '') => {
    const { id, title, icon, tags, outcomes } = card;
    return (
      <div 
        key={id} 
        className={`bento-card ${customClass}`}
        data-reveal-child
        onClick={() => onSelectIndustry && onSelectIndustry(card)}
      >
        {/* 1. Icon Box: 56x56px light blue (#EAF2FF) rounded-xl, solid #3488FF glyph inside */}
        <div className="bento-icon-box">
          <img src={icon} alt="" width={26} height={26} />
        </div>

        {/* 2. Title: H3, #0F172A, Bold */}
        <h3 className="bento-card-title">{title}</h3>

        {/* 3. Capability Tag Line: Small gray (#94A3B8) text with "•" bullets */}
        <p className="bento-card-tags">{tags}</p>

        {/* 4. Flexible Gap: Pushes outcomes block toward the bottom of the card */}
        <div className="bento-outcomes-block">
          {/* 5. Business Outcomes label: Bold accent blue #3488FF */}
          <div className="outcomes-label">Business Outcomes</div>

          {/* 6. Checklist: Double-checkmark icon in green #10B981, #0F172A text */}
          <div className="outcomes-checklist">
            {outcomes.map((outcome, idx) => (
              <div key={idx} className="checklist-item">
                <DoubleCheckIcon size={16} color="#10B981" />
                <span className="checklist-text">{outcome}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="industries-section-wrapper" id="industries">
      <div className="container">
        
        {/* HEADER — OUTSIDE THE CONTAINER ON WHITE PAGE */}
        <div className="section-header-row" data-reveal>
          <div className="header-left">
            <div className="eyetray-badge">
              <span className="dot" />
              <span>Industry We Serve</span>
            </div>
            <h2 className="section-h2-title">
              Built for Regulated, <br />
              <span className="blue-accent">Operational Industries</span>
            </h2>
            <p className="header-sub-text">
              Deep domain understanding across five enterprise verticals.
            </p>
          </div>

          {/* Top-Right: "View Details" link with small text label to left of separate 40x40 blue chip */}
          <div className="header-right">
            <div className="view-details-link">
              <span className="view-details-text">View Details</span>
              <div className="chip-icon-box">
                <ArrowUpRight size={20} color="#FFFFFF" />
              </div>
            </div>
          </div>
        </div>

        {/* BENTO GRID OUTER CONTAINER: Light gray #EEF0F4, 32px rounded */}
        <div
          className="bento-grid-outer-box"
          data-reveal-stagger="0.1"
          data-reveal-y="24"
          data-reveal-duration="0.55"
        >
          
          {/* ROW 1: BFSI (358px width) & Healthcare (Fills remaining space) */}
          <div className="bento-row bento-row-1">
            {renderCard(bfsiCard, 'card-bfsi')}
            {renderCard(healthcareCard, 'card-healthcare')}
          </div>

          {/* ROW 2: 3 Cards (Equal width ~33.33% each) */}
          <div className="bento-row bento-row-2">
            {row2Cards.map((c) => renderCard(c))}
          </div>

        </div>

      </div>

      <style>{`
        /* PAGE BACKGROUND IS WHITE */
        .industries-section-wrapper {
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

        /* TOP-RIGHT VIEW DETAILS LINK */
        .view-details-link {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          transition: opacity 0.2s ease;
        }

        .view-details-link:hover {
          opacity: 0.88;
        }

        .view-details-text {
          font-family: 'Poppins', sans-serif;
          font-size: 16px;
          font-weight: 500;
          color: #0F172A;
        }

        .chip-icon-box {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background-color: #3488FF;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(52, 136, 255, 0.2);
        }

        /* BENTO GRID OUTER CONTAINER: Light gray #EEF0F4, 32px rounded, 24px padding */
        .bento-grid-outer-box {
          max-width: 1200px;
          width: 100%;
          margin: 0 auto;
          background-color: #EEF0F4;
          border: 1.5px solid #FFFFFF;
          border-radius: 32px;
          padding: 24px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          gap: 20px;
          box-shadow: 0 4px 20px rgba(15, 23, 42, 0.02);
        }

        .bento-row {
          display: grid;
          gap: 20px;
          width: 100%;
        }

        /* ROW 1: BFSI card is 358px width, Healthcare card fills the remaining space (1fr) */
        .bento-row-1 {
          grid-template-columns: 358px 1fr;
        }

        /* ROW 2: 3 Cards (Equal width ~33.33% each) */
        .bento-row-2 {
          grid-template-columns: 1fr 1fr 1fr;
        }

        /* BENTO CARD ANATOMY: White #FFFFFF card, 24px rounded */
        .bento-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 24px;
          padding: 32px 28px;
          display: flex;
          flex-direction: column;
          height: 100%;
          box-sizing: border-box;
          cursor: pointer;
          box-shadow: 0 4px 16px rgba(15, 23, 42, 0.03);
          transition: box-shadow 0.35s cubic-bezier(0.22, 1, 0.36, 1);
        }

        @media (hover: hover) and (pointer: fine) {
          .bento-card:hover {
            box-shadow: 0 10px 28px rgba(15, 23, 42, 0.07);
          }
        }

        .card-bfsi {
          width: 358px;
        }

        .card-healthcare {
          width: 100%;
        }

        /* 1. ICON BOX: 56x56px light blue (#EAF2FF) rounded-xl */
        .bento-icon-box {
          width: 56px;
          height: 56px;
          border-radius: 14px;
          background-color: #EAF2FF;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        /* 2. TITLE: H3, #0F172A, Bold */
        .bento-card-title {
          font-family: 'Poppins', sans-serif;
          font-size: 24px;
          font-weight: 700;
          color: #0F172A;
          margin: 0 0 8px 0;
          line-height: 32px;
        }

        /* 3. CAPABILITY TAG LINE: Small gray (#94A3B8) text with "•" bullets */
        .bento-card-tags {
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          font-weight: 400;
          color: #94A3B8;
          line-height: 20px;
          margin: 0 0 24px 0;
        }

        /* 4. FLEXIBLE GAP: Pushes Outcomes Block to bottom of card */
        .bento-outcomes-block {
          margin-top: auto;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        /* 5. "Business Outcomes" label: Bold accent blue #3488FF */
        .outcomes-label {
          font-family: 'Poppins', sans-serif;
          font-size: 14px;
          font-weight: 700;
          color: #3488FF;
          letter-spacing: 0.2px;
        }

        /* 6. CHECKLIST BELOW IT: Double-checkmark green #10B981, #0F172A text */
        .outcomes-checklist {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .checklist-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }

        .checklist-text {
          font-family: 'Poppins', sans-serif;
          font-size: 14px;
          font-weight: 500;
          color: #0F172A;
          line-height: 20px;
        }

        /* RESPONSIVE BREAKPOINTS */
        @media (max-width: 1024px) {
          .bento-row-1,
          .bento-row-2 {
            grid-template-columns: 1fr;
          }

          .card-bfsi {
            width: 100%;
          }

          .section-header-row {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </section>
  );
}
