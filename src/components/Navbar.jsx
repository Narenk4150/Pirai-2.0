import React, { useState, useRef, useEffect } from 'react';
import { Plus, Minus, ArrowUpRight, X, Menu } from 'lucide-react';
import Button from './Button';

export default function Navbar({ onRequestDemo, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // Default closed, user can click or hover
  const navRef = useRef(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLinkClick = (target) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(target);
    }
  };

  // Rule 2: Click to toggle open/close dropdown
  const handleNavClick = (id, hasDropdown, target) => {
    if (hasDropdown) {
      setActiveDropdown(prev => prev === id ? null : id);
    } else {
      handleLinkClick(target);
    }
  };

  // Rule 3: If moved to next dropdown, switch to that. Rule 4: If moved to non-dropdown text, close dropdown.
  const handleNavMouseEnter = (id, hasDropdown) => {
    if (hasDropdown) {
      setActiveDropdown(id);
    } else {
      setActiveDropdown(null); // Close dropdown when hovering over Company or Case study
    }
  };

  const megaMenuData = {
    solutions: {
      col1: {
        header: 'CAPABILITIES ↗',
        items: [
          'AI Automation',
          'Enterprise Solutions',
          'Cloud Platforms',
          'CAPABILITIES',
          'Services',
          'Data & Insights',
          'Quality Engineering'
        ]
      },
      col2: {
        header: 'INDUSTRIES ↗',
        items: [
          'BFSI',
          'Healthcare',
          'Telecom',
          'Retail',
          'Manufacturing'
        ]
      },
      valProp: "Pirai Builds Intelligent Products And Automation Platforms That Drive Digital Transformation Across Highly Regulated, Operational Industries."
    },
    products: {
      col1: {
        header: 'INTELLIGENT PRODUCTS ↗',
        items: [
          'Contract Genie',
          'AI MRP',
          'Sense Guard',
          'Document Intelligence',
          'Supply Chain AI',
          'Operations Monitor',
          'Quality Suite'
        ]
      },
      col2: {
        header: 'OPERATIONAL AI ↗',
        items: [
          'Legal & Compliance',
          'Predictive Maintenance',
          'Automated Underwriting',
          'Risk Analytics',
          'Quality Inspection'
        ]
      },
      valProp: "Deploy Production Ready AI Tools Engineered To Automate Complex Enterprise Workflows Safely And At Scale."
    }
  };

  const navLinks = [
    { id: 'solutions', label: 'Solutions', hasDropdown: true, target: 'solutions' },
    { id: 'products', label: 'Products', hasDropdown: true, target: 'products' },
    { id: 'company', label: 'Company', hasDropdown: false, target: 'why-pirai' },
    { id: 'casestudies', label: 'Case study', hasDropdown: false, target: 'casestudies' },
  ];

  return (
    <header className="custom-glass-navbar-header mega-menu-glass-panel-header" ref={navRef}>
      <div className="container navbar-container">
        
        {/* Logo (Left): Solid Blue Typography Logo reading "Pirai" */}
        <div className="brand-logo" onClick={() => handleLinkClick('home')}>
          <span className="logo-blue-text">Pirai</span>
        </div>

        {/* Center Nav Links: Solutions –, Products +, Company +, Case study + */}
        <nav className="desktop-center-nav">
          {navLinks.map((item) => {
            const isOpen = activeDropdown === item.id;
            return (
              <div 
                key={item.id} 
                className="nav-item-wrapper"
                onMouseEnter={() => handleNavMouseEnter(item.id, item.hasDropdown)}
              >
                <button
                  className={`custom-glass-nav-link ${isOpen ? 'active' : ''}`}
                  onClick={() => handleNavClick(item.id, item.hasDropdown, item.target)}
                >
                  <span>{item.label}</span>
                  {item.hasDropdown && (
                    <span className="indicator-symbol">
                      {isOpen ? '–' : '+'}
                    </span>
                  )}
                </button>
              </div>
            );
          })}
        </nav>

        {/* Right CTA Button ("Enquire Now" with GSAP text swap-slide scroll animation, 48px height) */}
        <div className="nav-actions">
          <Button variant="type3" size="standard" showArrow={false} onClick={onRequestDemo}>
            Enquire Now
          </Button>

          {/* Mobile Toggle */}
          <button 
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} color="#0F172A" /> : <Menu size={24} color="#0F172A" />}
          </button>
        </div>

      </div>

      {/* FULL PAGE MEGA DROPDOWN PANEL */}
      {activeDropdown && (activeDropdown === 'solutions' || activeDropdown === 'products') && (
        <div className="full-page-glass-mega-panel mega-menu-glass-panel">
          {/* Ambient Organic Gradient Mesh Glow Blobs */}
          <div className="ambient-dispersion-blob blob-left" />
          <div className="ambient-dispersion-blob blob-right" />
          <div className="ambient-dispersion-blob blob-center" />

          {/* If cursor goes below the content part, close the dropdown */}
          <div 
            className="mega-content-container"
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <div className="mega-4col-grid">
              
              {/* Column 1: CAPABILITIES / INTELLIGENT PRODUCTS */}
              <div className="mega-col">
                <div className="col-label-row" onClick={() => handleLinkClick(activeDropdown)}>
                  <span>{megaMenuData[activeDropdown].col1.header}</span>
                </div>
                <div className="col-links-stack">
                  {megaMenuData[activeDropdown].col1.items.map((name, idx) => (
                    <div 
                      key={idx} 
                      className={`mega-link-item ${name === 'CAPABILITIES' ? 'sub-category-header' : ''}`}
                      onClick={() => handleLinkClick(activeDropdown)}
                    >
                      {name}
                    </div>
                  ))}
                </div>
              </div>

              {/* Column 2: INDUSTRIES / OPERATIONAL AI */}
              <div className="mega-col">
                <div className="col-label-row" onClick={() => handleLinkClick(activeDropdown)}>
                  <span>{megaMenuData[activeDropdown].col2.header}</span>
                </div>
                <div className="col-links-stack">
                  {megaMenuData[activeDropdown].col2.items.map((name, idx) => (
                    <div 
                      key={idx} 
                      className="mega-link-item"
                      onClick={() => handleLinkClick('industries')}
                    >
                      {name}
                    </div>
                  ))}
                </div>
              </div>

              {/* Column 3: SPOTLIGHT Card */}
              <div className="mega-col spotlight-col">
                <div className="col-label-row">
                  <span>SPOTLIGHT</span>
                  <span className="arrow-icon">↗</span>
                </div>
                <div className="spotlight-card-wrapper" onClick={() => handleLinkClick('insights')}>
                  <h4 className="spotlight-title">From POC To Production: Scaling AI</h4>
                  <p className="spotlight-desc">
                    How We Take Enterprise AI Concepts And Transition Them Into High-Performance Operational Infrastructure.
                  </p>
                  <div className="spotlight-img-box">
                    <img 
                      src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80" 
                      alt="Architectural Concrete AI" 
                      className="spotlight-img"
                    />
                  </div>
                  <div className="spotlight-footer">
                    Engineering Perspectives • 5 Min Read
                  </div>
                </div>
              </div>

              {/* Column 4: Context Panel / Brand Value Statement (Vertical Border Separated) */}
              <div className="mega-col val-prop-col">
                <div className="val-prop-wrapper">
                  <p className="val-prop-text">
                    {megaMenuData[activeDropdown].valProp}
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Transparent bottom boundary area outside content grid that closes dropdown on hover */}
          <div 
            className="mega-panel-bottom-dismiss-zone"
            onMouseEnter={() => setActiveDropdown(null)}
          />
        </div>
      )}

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <div className="mobile-link" onClick={() => handleLinkClick('solutions')}>Solutions</div>
          <div className="mobile-link" onClick={() => handleLinkClick('products')}>Products</div>
          <div className="mobile-link" onClick={() => handleLinkClick('why-pirai')}>Company</div>
          <div className="mobile-link" onClick={() => handleLinkClick('casestudies')}>Case study</div>
          <Button 
            variant="type3" 
            size="standard" 
            showArrow={false}
            style={{ width: '100%', marginTop: '12px' }}
            onClick={() => { setMobileMenuOpen(false); onRequestDemo(); }}
          >
            Enquire Now
          </Button>
        </div>
      )}

      <style>{`
        /* EXACT USER SPECIFIED .mega-menu-glass-panel STYLING RULES */
        .mega-menu-glass-panel {
          background: rgba(255, 255, 255, 0.95) !important;
          backdrop-filter: blur(50px) saturate(210%) !important;
          -webkit-backdrop-filter: blur(50px) saturate(210%) !important;
          border-radius: 0 0 24px 24px;
          border: 1px solid rgba(255, 255, 255, 0.8) !important;
          box-shadow: 
            inset 0 1px 1px 0 rgba(255, 255, 255, 1),
            0 20px 40px -10px rgba(0, 0, 0, 0.12),
            0 32px 64px -16px rgba(15, 23, 42, 0.18) !important;
          color: #0f172a !important;
        }

        .mega-menu-glass-panel-header {
          background: rgba(255, 255, 255, 0.92) !important;
          backdrop-filter: blur(40px) saturate(200%) !important;
          -webkit-backdrop-filter: blur(40px) saturate(200%) !important;
          border-bottom: 1px solid rgba(255, 255, 255, 0.8) !important;
          box-shadow: 0 4px 20px rgba(15, 23, 42, 0.04) !important;
        }

        /* HEADER BAR */
        .custom-glass-navbar-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          height: 80px;
          display: flex;
          align-items: center;
        }

        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 0 48px;
          max-width: 1440px;
          margin: 0 auto;
        }

        .brand-logo {
          cursor: pointer;
          display: flex;
          align-items: center;
        }

        .logo-blue-text {
          font-family: 'Poppins', sans-serif;
          font-size: 32px;
          font-weight: 700;
          color: #3488FF;
          letter-spacing: -0.5px;
        }

        .desktop-center-nav {
          display: flex;
          align-items: center;
          gap: 36px;
        }

        .nav-item-wrapper {
          position: relative;
          height: 80px;
          display: flex;
          align-items: center;
        }

        .custom-glass-nav-link {
          font-family: 'Poppins', sans-serif;
          font-size: 15px;
          font-weight: 500;
          color: #1E293B;
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 10px;
          border-radius: 6px;
          transition: color 0.2s ease;
        }

        .custom-glass-nav-link:hover, .custom-glass-nav-link.active {
          color: #3488FF;
        }

        .indicator-symbol {
          font-size: 15px;
          font-weight: 400;
          color: #64748B;
        }

        .custom-glass-nav-link:hover .indicator-symbol, .custom-glass-nav-link.active .indicator-symbol {
          color: #3488FF;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        /* FULL PAGE MEGA DROPDOWN PANEL */
        .full-page-glass-mega-panel {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          height: calc(100vh - 80px);       /* Full page viewport height */
          min-height: calc(100vh - 80px);   /* Full page dropdown overlay */
          overflow-y: auto;
          animation: fullPageGlassSlideDown 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          display: flex;
          flex-direction: column;
          align-items: center;               /* Horizontally centered */
          justify-content: flex-start;        /* Aligned to Top-Center */
        }

        @keyframes fullPageGlassSlideDown {
          from {
            opacity: 0;
            transform: translateY(-12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* AMBIENT BLOBS */
        .ambient-dispersion-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.45;
          pointer-events: none;
          z-index: 0;
        }

        .blob-left {
          width: 500px;
          height: 500px;
          top: -80px;
          left: -80px;
          background: radial-gradient(circle, rgba(52, 136, 255, 0.3) 0%, rgba(52, 136, 255, 0) 70%);
        }

        .blob-right {
          width: 550px;
          height: 550px;
          bottom: -100px;
          right: -100px;
          background: radial-gradient(circle, rgba(147, 51, 234, 0.22) 0%, rgba(52, 136, 255, 0) 70%);
        }

        .blob-center {
          width: 400px;
          height: 400px;
          top: 20%;
          left: 45%;
          background: radial-gradient(circle, rgba(52, 136, 255, 0.15) 0%, rgba(52, 136, 255, 0) 70%);
        }

        /* CONTENT CONTAINER: ALIGNED TO TOP-CENTER */
        .mega-content-container {
          position: relative;
          z-index: 1;
          max-width: 1440px;
          width: 100%;
          margin: 0 auto;
          padding: 32px 48px 48px 48px;       /* Aligned to Top-Center with 32px top padding */
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          align-items: center;               /* Horizontally centered */
          justify-content: flex-start;        /* Top aligned */
        }

        /* BOTTOM DISMISS ZONE: CLOSES DROPDOWN WHEN CURSOR MOVES BELOW CONTENT GRID */
        .mega-panel-bottom-dismiss-zone {
          position: relative;
          z-index: 1;
          width: 100%;
          flex-grow: 1;
          min-height: 100px;
          cursor: default;
        }

        /* 4-COLUMN GRID LAYOUT */
        .mega-4col-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 48px;
          width: 100%;
          align-items: flex-start;            /* Top aligned columns */
        }

        .mega-col {
          grid-column: span 3;
        }

        .col-label-row {
          font-family: 'Poppins', sans-serif;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 1.2px;
          color: #94A3B8;
          text-transform: uppercase;
          margin-bottom: 24px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: color 0.2s ease;
        }

        .col-label-row:hover {
          color: #3488FF;
        }

        .arrow-icon {
          font-size: 14px;
          color: #94A3B8;
        }

        .col-links-stack {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .mega-link-item {
          font-family: 'Poppins', sans-serif;
          font-size: 16px;
          font-weight: 600;
          color: #0F172A;
          cursor: pointer;
          transition: color 0.2s ease, transform 0.2s ease;
        }

        .mega-link-item:hover {
          color: #3488FF;
          transform: translateX(6px);
        }

        .mega-link-item.sub-category-header {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 1.2px;
          color: #94A3B8;
          text-transform: uppercase;
          margin-top: 16px;
          margin-bottom: 4px;
          pointer-events: none;
        }

        .spotlight-card-wrapper {
          cursor: pointer;
          display: flex;
          flex-direction: column;
        }

        .spotlight-title {
          font-family: 'Poppins', sans-serif;
          font-size: 18px;
          font-weight: 700;
          color: #0F172A;
          margin: 0 0 10px 0;
          line-height: 26px;
        }

        .spotlight-desc {
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          line-height: 20px;
          color: #64748B;
          margin: 0 0 16px 0;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .spotlight-img-box {
          width: 100%;
          height: 160px;
          overflow: hidden;
          border-radius: 14px;
          margin-bottom: 14px;
          box-shadow: 0 6px 20px rgba(15, 23, 42, 0.08);
        }

        .spotlight-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .spotlight-card-wrapper:hover .spotlight-img {
          transform: scale(1.04);
        }

        .spotlight-footer {
          font-family: 'Poppins', sans-serif;
          font-size: 12px;
          font-weight: 500;
          color: #94A3B8;
        }

        .val-prop-col {
          border-left: 1px solid rgba(15, 23, 42, 0.1);
          padding-left: 44px;
          display: flex;
          align-items: flex-start;
        }

        .val-prop-text {
          font-family: 'Poppins', sans-serif;
          font-size: 15px;
          line-height: 26px;
          font-weight: 400;
          color: #475569;
          margin: 0;
        }

        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
        }

        .mobile-drawer {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: #FFFFFF;
          padding: 24px;
          box-shadow: 0 20px 40px rgba(15, 23, 42, 0.1);
          display: flex;
          flex-direction: column;
          gap: 16px;
          border-bottom: 1px solid #E2E8F0;
        }

        .mobile-link {
          font-size: 16px;
          font-weight: 600;
          color: #0F172A;
          padding: 8px 0;
          cursor: pointer;
        }

        .w-full {
          width: 100%;
        }

        @media (max-width: 1024px) {
          .desktop-center-nav {
            display: none;
          }
          .mobile-toggle {
            display: block;
          }
          .nav-actions .figma-btn-master {
            display: none;
          }
          .mega-4col-grid {
            grid-template-columns: 1fr;
          }
          .val-prop-col {
            border-left: none;
            padding-left: 0;
            border-top: 1px solid rgba(15, 23, 42, 0.1);
            padding-top: 24px;
          }
          .full-page-glass-mega-panel {
            height: auto;
            min-height: auto;
          }
        }
      `}</style>
    </header>
  );
}
