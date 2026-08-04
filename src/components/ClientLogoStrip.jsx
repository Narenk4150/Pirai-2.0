import React from 'react';

export default function ClientLogoStrip() {
  // All 28 Real Enterprise Client Partner Logos (User-Provided Explicit B/W & Color Image Pairs)
  const clientLogos = [
    {
      id: 'bid-finance',
      name: 'Bid Finance',
      bwSrc: '/images/bid_finance_bw.png',
      colorSrc: '/images/bid_finance_color.png'
    },
    {
      id: 'xtro',
      name: 'Xtro',
      bwSrc: '/images/xtro_bw.png',
      colorSrc: '/images/xtro_color.png'
    },
    {
      id: 'cognis',
      name: 'Cognis',
      bwSrc: '/images/cognis_bw.png',
      colorSrc: '/images/cognis_color.png'
    },
    {
      id: 'atna',
      name: 'ATNA Technologies',
      bwSrc: '/images/atna_bw.png',
      colorSrc: '/images/atna_color.png'
    },
    {
      id: 'xchanging',
      name: 'Xchanging',
      bwSrc: '/images/xchanging_bw.png',
      colorSrc: '/images/xchanging_color.png'
    },
    {
      id: 'hsbc',
      name: 'HSBC',
      bwSrc: '/images/hsbc_bw.png',
      colorSrc: '/images/hsbc_color.png'
    },
    {
      id: 'multiple-portfolio',
      name: 'Multiple Portfolio Company Limited',
      bwSrc: '/images/mp_bw.png',
      colorSrc: '/images/mp_color.png'
    },
    {
      id: 'ivbm',
      name: 'IVBM (OPC) Private Limited',
      bwSrc: '/images/custom_logo_bw1.png',
      colorSrc: '/images/custom_logo_color1.png'
    },
    {
      id: 'cimb',
      name: 'CIMB',
      bwSrc: '/images/cimb_bw.png',
      colorSrc: '/images/cimb_color.png'
    },
    {
      id: 'neewee',
      name: 'Neewee',
      bwSrc: '/images/neewee_bw.png',
      colorSrc: '/images/neewee_color.png'
    },
    {
      id: 'cmb',
      name: 'China Merchants Bank',
      bwSrc: '/images/cmb_bw.png',
      colorSrc: '/images/cmb_color.png'
    },
    {
      id: 'trualt',
      name: 'Trualt Bioenergy',
      bwSrc: '/images/trualt_bw.png',
      colorSrc: '/images/trualt_color.png'
    },
    {
      id: 'checkbook',
      name: 'Checkbook',
      bwSrc: '/images/checkbook_bw.png',
      colorSrc: '/images/checkbook_color.png'
    },
    {
      id: 'avalon',
      name: 'Avalon',
      bwSrc: '/images/avalon_bw.png',
      colorSrc: '/images/avalon_color.png'
    },
    {
      id: 'vio',
      name: 'Vio.com',
      bwSrc: '/images/vio_bw.png',
      colorSrc: '/images/vio_color.png'
    },
    {
      id: 'sansys',
      name: 'SANSYS',
      bwSrc: '/images/sansys_bw.png',
      colorSrc: '/images/sansys_color.png'
    },
    {
      id: 'cadonix',
      name: 'Cadonix',
      bwSrc: '/images/cadonix_bw.png',
      colorSrc: '/images/cadonix_color.png'
    },
    {
      id: 'robotico',
      name: 'Robotico',
      bwSrc: '/images/robotico_bw.png',
      colorSrc: '/images/robotico_color.png'
    },
    {
      id: 'tti',
      name: 'TTI',
      bwSrc: '/images/tti_bw.png',
      colorSrc: '/images/tti_color.png'
    },
    {
      id: 'oxydata',
      name: 'Oxydata',
      bwSrc: '/images/oxydata_bw.png',
      colorSrc: '/images/oxydata_color.png'
    },
    {
      id: 'daemon',
      name: 'Daemon',
      bwSrc: '/images/daemon_bw.png',
      colorSrc: '/images/daemon_color.png'
    },
    {
      id: 'caresoft',
      name: 'Caresoft',
      bwSrc: '/images/caresoft_bw.png',
      colorSrc: '/images/caresoft_color.png'
    },
    {
      id: 'tailjay',
      name: 'Tailjay',
      bwSrc: '/images/tailjay_bw.png',
      colorSrc: '/images/tailjay_color.png'
    },
    {
      id: 'blue-endeavour',
      name: 'Blue Endeavour',
      bwSrc: '/images/blue_endeavour_bw.png',
      colorSrc: '/images/blue_endeavour_color.png'
    },
    {
      id: 'techx-xlns',
      name: 'TechX XLNS',
      bwSrc: '/images/techx_xlns_bw.png',
      colorSrc: '/images/techx_xlns_color.png'
    },
    {
      id: 'twilight',
      name: 'Twilight Systems',
      bwSrc: '/images/twilight_bw.png',
      colorSrc: '/images/twilight_color.png'
    },
    {
      id: 'pratanut',
      name: 'Pratanut',
      bwSrc: '/images/pratanut_bw.png',
      colorSrc: '/images/pratanut_color.png'
    },
    {
      id: 'express-rail',
      name: 'Express Rail Link',
      bwSrc: '/images/express_rail_bw.png',
      colorSrc: '/images/express_rail_color.png'
    }
  ];

  // Duplicate list to form a seamless infinite marquee loop
  const marqueeList = [...clientLogos, ...clientLogos];

  return (
    <section className="client-logo-strip">
      <div className="container logo-strip-container">
        {/* Caption */}
        <div className="strip-caption">
          <span>TRUSTED BY ENTERPRISES ACROSS INDUSTRIES</span>
        </div>

        {/* Continuous Marquee Track */}
        <div className="marquee-wrapper">
          {/* Gradient Edge Masks */}
          <div className="marquee-fade-left" />
          <div className="marquee-fade-right" />

          {/* Marquee Motion Track */}
          <div className="marquee-track">
            {marqueeList.map((logo, index) => (
              <div key={index} className="logo-chip">
                {/* Dedicated B/W Image File at Rest */}
                <img 
                  src={logo.bwSrc} 
                  alt={`${logo.name} B/W`} 
                  className="client-logo-img logo-bw-file" 
                />

                {/* Dedicated Color Image File on Hover */}
                <img 
                  src={logo.colorSrc} 
                  alt={`${logo.name} Color`} 
                  className="client-logo-img logo-color-file" 
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .client-logo-strip {
          padding: 48px 0;
          background: #FFFFFF;
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          overflow: hidden;
        }

        .logo-strip-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 28px;
        }

        .strip-caption {
          font-family: var(--font-family);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 1.5px;
          color: var(--muted);
          text-transform: uppercase;
          text-align: center;
        }

        .marquee-wrapper {
          position: relative;
          width: 100%;
          overflow: hidden;
          padding: 16px 0;
        }

        .marquee-fade-left {
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          width: 120px;
          background: linear-gradient(90deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%);
          z-index: 10;
          pointer-events: none;
        }

        .marquee-fade-right {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          width: 120px;
          background: linear-gradient(270deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%);
          z-index: 10;
          pointer-events: none;
        }

        .marquee-track {
          display: flex;
          align-items: center;
          gap: 56px;
          width: max-content;
          animation: marqueeScroll 45s linear infinite;
          will-change: transform;
        }

        /* Pause marquee movement on hover so logos can be inspected */
        .marquee-wrapper:hover .marquee-track {
          animation-play-state: paused;
        }

        .logo-chip {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 52px;
          padding: 0 16px;
          flex-shrink: 0;
          cursor: pointer;
        }

        .client-logo-img {
          height: 36px;
          width: auto;
          max-width: 220px;
          object-fit: contain;
        }

        /* B/W Image File at Rest */
        .logo-bw-file {
          opacity: 0.85;
          transition: opacity 0.35s ease;
        }

        /* Explicit Color Image File on Hover */
        .logo-color-file {
          position: absolute;
          inset: 0;
          margin: auto;
          opacity: 0;
          transform: scale(0.95);
          transition: opacity 0.35s ease, transform 0.35s ease;
        }

        /* Hover Transition: Fade out B/W file, Fade in Color file */
        .logo-chip:hover .logo-bw-file {
          opacity: 0;
        }

        .logo-chip:hover .logo-color-file {
          opacity: 1;
          transform: scale(1.12);
        }

        @keyframes marqueeScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
