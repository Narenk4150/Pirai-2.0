import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import Button from './Button';

// CUSTOM SVG ICONS FOR HOVER REVEAL STATE (WITHOUT CONTAINER BOX)
function CodeSquareIcon({ size = 96, color = "#3488FF" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="6" width="36" height="36" rx="10" stroke={color} strokeWidth="2.2" />
      <path d="M18 17L11 24L18 31" stroke={color} strokeWidth="2.5" />
      <path d="M30 17L37 24L30 31" stroke={color} strokeWidth="2.5" />
    </svg>
  );
}

function AiChipIcon({ size = 96, color = "#3488FF" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="10" y="10" width="28" height="28" rx="8" stroke={color} strokeWidth="2.2" />
      {/* Top & Bottom Pins */}
      <line x1="16" y1="4" x2="16" y2="10" />
      <line x1="24" y1="4" x2="24" y2="10" />
      <line x1="32" y1="4" x2="32" y2="10" />
      <line x1="16" y1="38" x2="16" y2="44" />
      <line x1="24" y1="38" x2="24" y2="44" />
      <line x1="32" y1="38" x2="32" y2="44" />
      {/* Left & Right Pins */}
      <line x1="4" y1="16" x2="12" y2="16" />
      <line x1="4" y1="28" x2="12" y2="28" />
      <line x1="4" y1="32" x2="10" y2="32" />
      <line x1="38" y1="16" x2="44" y2="16" />
      <line x1="38" y1="24" x2="44" y2="24" />
      <line x1="38" y1="32" x2="44" y2="32" />
      {/* AI Text Centered */}
      <text x="24" y="29" fill={color} fontSize="14" fontWeight="700" textAnchor="middle" stroke="none" fontFamily="Poppins, sans-serif">AI</text>
    </svg>
  );
}

function HandshakeIcon({ size = 96, color = "#3488FF" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 22L18 14C19.5 12.5 22 12.5 23.5 14L28 18.5" />
      <path d="M38 22L30 14C28.5 12.5 26 12.5 24.5 14L20 18.5" />
      <path d="M14 26L20 32C21.5 33.5 24 33.5 25.5 32L34 23.5" />
      <path d="M34 26L28 32C26.5 33.5 24 33.5 22.5 32L14 23.5" />
    </svg>
  );
}

// WHY PIRAI CARD COMPONENT: Removed box around the icon in hover state
function WhyPiraiCard({ number, label, caption, Icon }) {
  const cardRef = useRef(null);
  const numberRef = useRef(null);
  const hoverGroupRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!cardRef.current || !numberRef.current || !hoverGroupRef.current) return;

      const card = cardRef.current;
      const numberEl = numberRef.current;
      const hoverGroupEl = hoverGroupRef.current;

      const tl = gsap.timeline({ paused: true });

      // Hover displacement logic:
      // Card 01: 130
      // Card 02: 105
      // Card 03: 105
      let hoverDisplacement = 115;
      if (number === '01') hoverDisplacement = 130;
      if (number === '02') hoverDisplacement = 105;
      if (number === '03') hoverDisplacement = 105;

      // Numeral glides right on hover WITHOUT fading (opacity stays 1)
      tl.to(numberEl, { 
        xPercent: hoverDisplacement, 
        opacity: 1, 
        duration: 0.5, 
        ease: "power3.out" 
      }, 0);

      // Explicitly set xPercent -50 and yPercent -50 in GSAP so centering is 100% maintained
      gsap.set(hoverGroupEl, { xPercent: -50, yPercent: -50 });

      // Hover group (width 144px) slides up into middle of card (y: 32 -> y: 0)
      tl.fromTo(hoverGroupEl,
        { opacity: 0, y: 32, xPercent: -50, yPercent: -50 },
        { opacity: 1, y: 0, xPercent: -50, yPercent: -50, duration: 0.45, ease: "power2.out" },
        0.1
      );

      // Card border highlight
      tl.to(card, {
        borderColor: '#3488FF',
        boxShadow: '0 12px 30px rgba(52, 136, 255, 0.08)',
        duration: 0.45,
        ease: "power3.out"
      }, 0);

      const onEnter = () => tl.play();
      const onLeave = () => tl.reverse();

      card.addEventListener("mouseenter", onEnter);
      card.addEventListener("mouseleave", onLeave);
      card.addEventListener("focus", onEnter);
      card.addEventListener("blur", onLeave);
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={cardRef} className="why-pirai-card">
      {/* 1. REST STATE: Massive 316px Numeral (Card 01 at -35%, Cards 02 & 03 at -30%) */}
      <div 
        ref={numberRef} 
        className={`card-massive-numeral ${number !== '01' ? 'numeral-23-offset' : ''}`}
      >
        {number}
      </div>

      {/* 2. HOVER REVEAL GROUP: Positioned dead-center in middle of card vertically & horizontally (No white box around icon) */}
      <div ref={hoverGroupRef} className="card-hover-group">
        {/* Direct Icon (No white background box) */}
        <div className="icon-wrapper">
          <Icon size={96} color="#3488FF" />
        </div>
        {/* SemiBold 16 Caption (Width 144px, 16px spacing below icon) */}
        <p className="hover-caption-semibold">{caption}</p>
      </div>

      {/* 3. PINNED BOTTOM LABEL: Placed 18px from bottom & centered */}
      <div className="card-bottom-label">{label}</div>
    </div>
  );
}

export default function WhyUsSection({ onAboutUs }) {
  const cardsData = [
    {
      number: '01',
      label: 'ENGINEERED',
      caption: 'Secure. Scalable. Enterprise-ready.',
      Icon: CodeSquareIcon
    },
    {
      number: '02',
      label: 'INTELLIGENT',
      caption: 'AI-powered operations with measurable impact.',
      Icon: AiChipIcon
    },
    {
      number: '03',
      label: 'TRUSTED',
      caption: 'Long-term partnerships built on outcomes.',
      Icon: HandshakeIcon
    }
  ];

  return (
    <section className="why-us-section-wrapper" id="why-pirai">
      <div className="container">
        
        {/* HEADER — OUTSIDE THE BOX ON WHITE PAGE */}
        <div className="section-header-row">
          <div className="header-left">
            <div className="eyetray-badge">
              <span className="dot" />
              <span>Why Pirai</span>
            </div>
            <h2 className="section-h2-title">
              Engineering Excellence Meets <br />
              <span className="blue-accent">Operational Intelligence</span>
            </h2>
            <p className="header-sub-text">
              Deep domain understanding across five enterprise verticals.
            </p>
          </div>

          <div className="header-right">
            <Button variant="type3" size="standard" onClick={onAboutUs}>
              About Us
            </Button>
          </div>
        </div>

        {/* 3-CARD GRID: Light gray (#EEF0F4) cards, 386px * 500px */}
        <div className="why-pirai-grid-container">
          {cardsData.map((card) => (
            <WhyPiraiCard 
              key={card.number}
              number={card.number}
              label={card.label}
              caption={card.caption}
              Icon={card.Icon}
            />
          ))}
        </div>

      </div>

      <style>{`
        /* PAGE WRAPPER IS WHITE */
        .why-us-section-wrapper {
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

        /* 3-CARD GRID CONTAINER */
        .why-pirai-grid-container {
          display: flex;
          justify-content: center;
          gap: 20px;
          max-width: 1200px;
          margin: 0 auto;
        }

        /* LIGHT GRAY (#EEF0F4) CARD CONTAINER: Width 386px * Height 500px */
        .why-pirai-card {
          position: relative;
          width: 386px;
          height: 500px;                     /* Exact height 500px */
          background: #EEF0F4;
          border: 1.5px solid #FFFFFF;
          border-radius: 32px;
          padding: 0;
          box-shadow: 0 4px 20px rgba(15, 23, 42, 0.02);
          box-sizing: border-box;
          overflow: hidden;
          cursor: pointer;
          transition: border-color 0.45s ease, box-shadow 0.45s ease;
          flex: 0 0 386px;
        }

        /* MASSIVE 316PX NUMERAL BASE STYLE (Card 01 at -35%) */
        .card-massive-numeral {
          position: absolute;
          top: 40px;                         /* Placed 40px from top line */
          left: 0;
          transform: translateX(-35%);       /* Card 01 rest position */
          font-family: 'Poppins', sans-serif;
          font-size: 316px;                  /* Height 316px */
          font-weight: 800;
          line-height: 1;
          color: #3488FF;
          letter-spacing: -8px;
          font-variant-numeric: tabular-nums;
          font-feature-settings: "tnum";
          user-select: none;
          pointer-events: none;
          will-change: transform;
          z-index: 1;
          white-space: nowrap;
          opacity: 1;
        }

        /* CARDS 02 & 03 OFFSET (-30%) */
        .numeral-23-offset {
          transform: translateX(-30%);
        }

        /* HOVER REVEAL GROUP: Positioned dead-center in middle of card vertically & horizontally */
        .card-hover-group {
          position: absolute;
          top: 50%;                          /* Middle of card vertically */
          left: 50%;                         /* Middle of card horizontally */
          transform: translate(-50%, -50%);  /* Middle anchor point */
          width: 144px;                      /* Width of content is 144px */
          display: flex;
          flex-direction: column;
          align-items: center;              /* Center-aligned */
          justify-content: center;           /* Center-aligned */
          text-align: center;               /* Center-aligned */
          pointer-events: none;
          z-index: 3;
          opacity: 0;
          will-change: transform, opacity;
        }

        /* DIRECT ICON WRAPPER (NO WHITE BOX AROUND ICON) */
        .icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;               /* Spacing between icon and text is 16px */
        }

        /* CAPTION: SemiBold 16px, width 144px */
        .hover-caption-semibold {
          font-family: 'Poppins', sans-serif;
          font-size: 16px;                   /* Content is SemiBold 16 */
          font-weight: 600;                  /* SemiBold 16 */
          color: #0F172A;
          line-height: 24px;
          margin: 0;
          width: 144px;                      /* Width of content is 144px */
          text-align: center;
        }

        /* PINNED LABEL AT BOTTOM: 18px from bottom */
        .card-bottom-label {
          position: absolute;
          bottom: 18px;                      /* Content / Label placed 18px from bottom */
          left: 50%;
          transform: translateX(-50%);       /* Centered */
          font-family: 'Poppins', sans-serif;
          font-size: 18px;
          font-weight: 700;
          color: #0F172A;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          white-space: nowrap;
          z-index: 4;
          pointer-events: none;
        }

        /* RESPONSIVE BREAKPOINTS */
        @media (max-width: 1024px) {
          .why-pirai-grid-container {
            flex-direction: column;
            align-items: center;
          }
          .why-pirai-card {
            width: 100%;
            max-width: 386px;
            height: 440px;
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
