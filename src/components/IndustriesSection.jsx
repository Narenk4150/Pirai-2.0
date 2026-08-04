import React from 'react';
import { ArrowUpRight } from 'lucide-react';

// GREEN DOUBLE-CHECKMARK ICON FOR CHECKLIST ITEMS
function DoubleCheckIcon({ size = 16, color = "#10B981" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
      <path d="M2 12l5 5L18 6" />
      <path d="M8 12l5 5L22 6" />
    </svg>
  );
}

// SOLID/FILLED ICONS FOR THE 5 ENTERPRISE VERTICALS
function BankIcon({ size = 26, color = "#3488FF" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M12 2L2 7v2h20V7L12 2zm-8 8v8h3v-8H4zm6 0v8h4v-8h-4zm7 0v8h3v-8h-3zM2 20v2h20v-2H2z"/>
    </svg>
  );
}

function HeartHandIcon({ size = 26, color = "#3488FF" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35zM11 7h2v2h2v2h-2v2h-2v-2H9V9h2V7z"/>
    </svg>
  );
}

function AntennaIcon({ size = 26, color = "#3488FF" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M12 3a9 9 0 0 0-9 9h2a7 7 0 0 1 14 0h2a9 9 0 0 0-9-9zm0 4a5 5 0 0 0-5 5h2a3 3 0 0 1 6 0h2a5 5 0 0 0-5-5zm-1 7h2v7h-2v-7z"/>
    </svg>
  );
}

function StoreIcon({ size = 26, color = "#3488FF" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4L3 12v2h1v6h12v-6h4zm-10 6H6v-4h5v4z"/>
    </svg>
  );
}

function FactoryIcon({ size = 26, color = "#3488FF" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M22 22H2V10l7 3V10l7 3V4h6v18zM12 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
    </svg>
  );
}

export default function IndustriesSection({ onSelectIndustry }) {
  // ROW 1: BFSI (358px width) & Healthcare (Fills remaining space)
  const bfsiCard = {
    id: 'bfsi',
    title: 'BFSI',
    Icon: BankIcon,
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
    Icon: HeartHandIcon,
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
      Icon: AntennaIcon,
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
      Icon: StoreIcon,
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
      Icon: FactoryIcon,
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
    const { id, title, Icon, tags, outcomes } = card;
    return (
      <div 
        key={id} 
        className={`bento-card ${customClass}`}
        onClick={() => onSelectIndustry && onSelectIndustry(card)}
      >
        {/* 1. Icon Box: 56x56px light blue (#EAF2FF) rounded-xl, solid #3488FF glyph inside */}
        <div className="bento-icon-box">
          <Icon size={26} color="#3488FF" />
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
        <div className="section-header-row">
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
        <div className="bento-grid-outer-box">
          
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
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
          box-shadow: 0 4px 16px rgba(15, 23, 42, 0.03);
        }

        .card-bfsi {
          width: 358px;
        }

        .card-healthcare {
          width: 100%;
        }

        .bento-card:hover {
          transform: translateY(-4px);
          border-color: #3488FF;
          box-shadow: 0 12px 30px rgba(52, 136, 255, 0.08);
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
