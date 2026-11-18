import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DemoModal from '../components/DemoModal';
import CTABanner from '../components/CTABanner';

const SECTIONS = [
  {
    id: 'overview',
    title: 'Overview',
    body: 'This Privacy Policy explains how Pirai Infotech collects, uses, and protects information when you visit our website or communicate with us about products and services.',
  },
  {
    id: 'information-we-collect',
    title: 'Information We Collect',
    body: 'We may collect information you provide directly, such as your name, email address, phone number, company details, and message content when you enquire, apply for a role, or request a demo. We may also collect limited technical information such as browser type, device information, and pages visited to improve site performance.',
  },
  {
    id: 'how-we-use',
    title: 'How We Use Information',
    body: 'We use information to respond to enquiries, provide requested services, improve our website and offerings, communicate about relevant products or opportunities, and maintain the security and integrity of our systems.',
  },
  {
    id: 'sharing',
    title: 'Sharing of Information',
    body: 'We do not sell personal information. We may share information with trusted service providers who support hosting, analytics, communications, or recruiting operations, only as needed to perform those services and under appropriate safeguards.',
  },
  {
    id: 'retention',
    title: 'Data Retention',
    body: 'We retain information only as long as needed for the purposes described in this policy, or as required to meet legal, accounting, or operational obligations.',
  },
  {
    id: 'security',
    title: 'Security',
    body: 'We apply administrative and technical measures designed to protect information against unauthorized access, alteration, disclosure, or destruction. No method of transmission or storage is completely secure, and we work continuously to improve our protections.',
  },
  {
    id: 'your-choices',
    title: 'Your Choices',
    body: 'You may request access to, correction of, or deletion of personal information we hold about you, subject to applicable law. You may also opt out of non-essential marketing communications at any time.',
  },
  {
    id: 'contact',
    title: 'Contact',
    body: 'For privacy-related questions, contact us at sales@piraiinfo.com or write to Pirai Infotech, 6, 32, Kamaraj Rd, Arumugam Nagar, Mahalingapuram, Tamil Nadu 642002.',
  },
];

export default function PrivacyPolicyPage() {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [active, setActive] = useState(SECTIONS[0].id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="app-root privacy-page">
      <Navbar onRequestDemo={() => setModalOpen(true)} />
      <main>
        <section className="privacy-hero">
          <div className="container">
            <div className="section-pill">
              <span className="dot" />
              <span>Legal</span>
            </div>
            <h1>Privacy Policy</h1>
            <p>Last updated: November 18, 2026</p>
          </div>
        </section>

        <section className="privacy-body">
          <div className="container privacy-grid">
            <nav className="privacy-nav" aria-label="Privacy sections">
              {SECTIONS.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className={active === section.id ? 'active' : ''}
                  onClick={() => setActive(section.id)}
                >
                  {section.title}
                </a>
              ))}
            </nav>
            <div className="privacy-content">
              {SECTIONS.map((section) => (
                <section key={section.id} id={section.id} className="privacy-section">
                  <h2>{section.title}</h2>
                  <p>{section.body}</p>
                </section>
              ))}
            </div>
          </div>
        </section>

        <CTABanner
          onDiscussChallenge={() => setModalOpen(true)}
          onExploreSolutions={() => navigate('/')}
        />
      </main>
      <Footer />
      <DemoModal isOpen={modalOpen} onClose={() => setModalOpen(false)} selectedSolution={null} />

      <style>{`
        .privacy-hero, .privacy-body { background:#fff; }
        .privacy-hero { padding:140px 0 40px; }
        .section-pill { display:inline-flex; align-items:center; gap:10px; height:24px; padding:0 10px; border:1px solid var(--border); border-radius:12px; font-size:12px; font-weight:500; color:var(--body); margin-bottom:20px; }
        .section-pill .dot { width:6px; height:6px; border-radius:50%; background:var(--primary); }
        .privacy-hero h1 { margin:0 0 10px; font-size:48px; line-height:58px; font-weight:600; color:var(--heading); }
        .privacy-hero p { margin:0; color:var(--body); }
        .privacy-body { padding:24px 0 80px; }
        .privacy-grid { display:grid; grid-template-columns:240px minmax(0,1fr); gap:48px; align-items:start; }
        .privacy-nav { position:sticky; top:110px; display:flex; flex-direction:column; gap:12px; }
        .privacy-nav a { color:#94A3B8; text-decoration:none; font-size:14px; padding-left:12px; border-left:2px solid transparent; }
        .privacy-nav a.active { color:var(--heading); border-left-color:var(--primary); font-weight:500; }
        .privacy-section { padding-bottom:28px; margin-bottom:28px; border-bottom:1px solid var(--border); }
        .privacy-section:last-child { border-bottom:none; }
        .privacy-section h2 { margin:0 0 12px; font-size:24px; color:var(--heading); }
        .privacy-section p { margin:0; color:var(--body); font-size:16px; line-height:28px; }
        @media (max-width:900px){
          .privacy-grid{grid-template-columns:1fr;}
          .privacy-nav{position:static; flex-direction:row; flex-wrap:wrap;}
          .privacy-nav a{border:1px solid var(--border); border-radius:999px; padding:8px 12px;}
          .privacy-hero h1{font-size:34px; line-height:44px;}
        }
      `}</style>
    </div>
  );
}
