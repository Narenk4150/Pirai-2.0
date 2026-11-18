import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { getSolutionIdFromLabel } from '../data/solutions';

const PAGE_ROUTES = {
  home: '/',
  about: '/about',
  'about-us': '/about',
  company: '/about',
  casestudies: '/case-studies',
  'case-studies': '/case-studies',
  careers: '/careers',
  blog: '/blog',
  insights: '/blog',
  contact: '/contact',
  products: '/products',
  privacy: '/privacy',
};

export default function Footer({ onNavigate }) {
  const navigate = useNavigate();

  const handleNavigate = (target) => {
    if (PAGE_ROUTES[target]) {
      navigate(PAGE_ROUTES[target]);
      onNavigate?.(target);
      return;
    }
    const solutionId = getSolutionIdFromLabel(target);
    if (solutionId) {
      navigate(`/solutions/${solutionId}`);
      onNavigate?.(target);
      return;
    }
    if (target === 'solutions') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(target);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 80);
      onNavigate?.(target);
      return;
    }
    onNavigate?.(target);
  };

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-card" data-reveal data-reveal-y="24" data-reveal-duration="0.55">
          {/* Top Row: Pirai logo + tagline + 4 social icons aligned right */}
          <div className="footer-top-row">
            <div className="brand-col">
              <div className="footer-logo" onClick={() => handleNavigate('home')} style={{ cursor: 'pointer' }}>
                <img
                  src="/images/Homepage/pirai-logo.png"
                  alt="Pirai"
                  className="footer-logo-img"
                />
              </div>
              <p className="section-body brand-description">
                Easily adapt to changes and scale your operations with our flexible infrastructure, designed to support your business growth.
              </p>
            </div>

            <div className="social-icons-right">
              <a
                href="https://www.facebook.com/piraiinfotech2017"
                className="social-link"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a
                href="https://www.linkedin.com/company/pirai-infotech/"
                className="social-link"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a
                href="https://www.instagram.com/piraiinfotech/"
                className="social-link"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a
                href="https://twitter.com/InfotechPirai"
                className="social-link"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
              </a>
              <a
                href="https://www.youtube.com/@piraiinfotech3807"
                className="social-link"
                aria-label="YouTube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.75 15.5v-7l6.5 3.5-6.5 3.5z"/></svg>
              </a>
            </div>
          </div>

          <div className="divider" />

          {/* 3-Column Row */}
          <div className="footer-three-cols">
            {/* Column 1: Contact (with icon per row) */}
            <div className="contact-col">
              <div className="contact-item">
                <div className="contact-icon-box"><Mail size={18} /></div>
                <div>
                  <div className="contact-label">EMAIL</div>
                  <a href="mailto:sales@piraiinfo.com" className="contact-value">sales@piraiinfo.com</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon-box"><Phone size={18} /></div>
                <div>
                  <div className="contact-label">MOBILE</div>
                  <a href="tel:+917397629479" className="contact-value">+91 7397 629 479</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon-box"><MapPin size={18} /></div>
                <div>
                  <div className="contact-label">ADDRESS</div>
                  <div className="contact-value address">
                    6, 32, Kamaraj Rd, Arumugam Nagar, Mahalingapuram, Tamil Nadu 642002
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2: Solution */}
            <div className="sitemap-col">
              <div className="col-title">Solution</div>
              <ul className="col-links">
                <li><span onClick={() => handleNavigate('AI & Intelligent Automation')}>AI & Intelligent Automation</span></li>
                <li><span onClick={() => handleNavigate('Enterprise Engineering')}>Enterprise Engineering</span></li>
                <li><span onClick={() => handleNavigate('Cloud & Platform Systems')}>Cloud & Platform Systems</span></li>
                <li><span onClick={() => handleNavigate('solutions')}>Data & Intelligence</span></li>
                <li><span onClick={() => handleNavigate('solutions')}>Quality & Reliability</span></li>
                <li><span onClick={() => handleNavigate('solutions')}>CTO as Service</span></li>
              </ul>
            </div>

            {/* Column 3: Company */}
            <div className="sitemap-col">
              <div className="col-title">Company</div>
              <ul className="col-links">
                <li><span onClick={() => handleNavigate('casestudies')}>Case Studies</span></li>
                <li><span onClick={() => handleNavigate('blog')}>Insights</span></li>
                <li><span onClick={() => handleNavigate('about')}>About Us</span></li>
                <li><span onClick={() => handleNavigate('careers')}>Careers</span></li>
                <li><span onClick={() => handleNavigate('contact')}>Contact</span></li>
              </ul>
            </div>
          </div>

          <div className="divider" />

          {/* Bottom Row */}
          <div className="footer-bottom-row">
            <div className="copyright-text">
              © 2026 Pirai. All rights reserved.
            </div>

            <div className="legal-links">
              <a href="/privacy" onClick={(e) => { e.preventDefault(); handleNavigate('privacy'); }}>Privacy Policy</a>
              <span className="legal-bullet">•</span>
              <a href="#">Terms of Service</a>
              <span className="legal-bullet">•</span>
              <a href="#">Security</a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .footer-section {
          padding-bottom: 80px;
          background: #FFFFFF;
        }

        .footer-card {
          background: #FFFFFF;
          border: 1px solid var(--border);
          border-radius: 28px;
          padding: 48px;
          display: flex;
          flex-direction: column;
          gap: 36px;
        }

        .footer-top-row {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 40px;
          flex-wrap: wrap;
        }

        .brand-col {
          max-width: 480px;
        }

        .footer-logo {
          margin-bottom: 14px;
          display: flex;
          align-items: center;
        }

        .footer-logo-img {
          height: 28px;
          width: auto;
          display: block;
        }

        .brand-description {
          font-size: 15px;
          color: var(--body);
          line-height: 1.6;
        }

        .social-icons-right {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .social-link {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: var(--surface-alt);
          border: 1px solid var(--border);
          color: var(--heading);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .social-link:hover {
          background: var(--primary);
          color: #FFFFFF;
          border-color: var(--primary);
        }

        /* 3-Column Row */
        .footer-three-cols {
          display: grid;
          grid-template-columns: 1.2fr 1fr 1fr;
          gap: 48px;
        }

        .contact-col {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }

        .contact-icon-box {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: var(--surface-alt);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .contact-label {
          font-size: 11px;
          color: var(--muted);
          font-weight: 600;
          letter-spacing: 0.5px;
        }

        .contact-value {
          font-size: 14px;
          color: var(--heading);
          font-weight: 500;
        }

        .contact-value.address {
          line-height: 1.5;
        }

        .sitemap-col {
          display: flex;
          flex-direction: column;
        }

        .col-title {
          font-size: 16px;
          font-weight: 600;
          color: var(--primary);
          margin-bottom: 18px;
        }

        .col-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .col-links span {
          font-size: 14px;
          color: var(--body);
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .col-links span:hover {
          color: var(--primary);
        }

        .footer-bottom-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 14px;
          color: var(--muted);
          flex-wrap: wrap;
          gap: 16px;
        }

        .legal-links {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .legal-links a {
          color: var(--muted);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .legal-links a:hover {
          color: var(--heading);
        }

        .legal-bullet {
          color: var(--muted);
        }

        @media (max-width: 900px) {
          .footer-three-cols {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .footer-top-row {
            flex-direction: column;
            align-items: flex-start;
          }
          .footer-bottom-row {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </footer>
  );
}
