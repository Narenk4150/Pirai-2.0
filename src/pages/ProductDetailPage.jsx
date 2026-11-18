import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DemoModal from '../components/DemoModal';
import CTABanner from '../components/CTABanner';
import EngineeringChallengeCTA from '../components/EngineeringChallengeCTA';
import Button from '../components/Button';
import { getProductById } from '../data/products';

export default function ProductDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('challenge');
  const product = getProductById(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!product) return <Navigate to="/products" replace />;

  const sections = [
    { id: 'challenge', label: 'The Challenge' },
    { id: 'overview', label: 'Product Overview' },
    { id: 'how', label: 'How It Works' },
    { id: 'capabilities', label: 'Key Capabilities' },
    { id: 'impact', label: 'Business Impact' },
  ];

  return (
    <div className="app-root product-detail-page">
      <Navbar onRequestDemo={() => setModalOpen(true)} />
      <main>
        <section className="pd-hero">
          <div className="container">
            <div className="section-pill">
              <span className="dot" />
              <span>{product.title}</span>
            </div>
            <h1>
              {product.heroTitle.split(' ').slice(0, -2).join(' ')}{' '}
              <span className="accent-italic">
                {product.heroTitle.split(' ').slice(-2).join(' ')}
              </span>
            </h1>
            <p>{product.lead}</p>
            <div className="pd-hero-actions">
              <Button variant="type1" size="hero" onClick={() => setModalOpen(true)}>
                View Live Demo
              </Button>
              <Button variant="type2" size="hero" onClick={() => setModalOpen(true)}>
                Enquire Now
              </Button>
            </div>
            <div className="pd-hero-media">
              <div className="pd-placeholder">{product.title}</div>
            </div>
          </div>
        </section>

        <section className="pd-intro">
          <div className="container pd-intro-grid">
            <div>
              <h2>Making {product.title} Work for Real Teams</h2>
              <p>{product.overview}</p>
            </div>
            <aside>
              <div className="aside-label">Services</div>
              <ul>
                {product.services.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <section className="pd-body">
          <div className="container pd-body-grid">
            <nav className="pd-contents" aria-label="Product sections">
              <div className="aside-label">Contents</div>
              <ul>
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className={activeSection === section.id ? 'active' : ''}
                      onClick={() => setActiveSection(section.id)}
                    >
                      {section.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="pd-sections">
              <section id="challenge" className="pd-section">
                <div className="eyebrow">THE CHALLENGE</div>
                <h3>Simplifying complex {product.title.toLowerCase()} work</h3>
                <p>{product.challenge}</p>
              </section>

              <section id="overview" className="pd-section">
                <div className="eyebrow">PRODUCT OVERVIEW</div>
                <h3>{product.overviewTitle}</h3>
                <p>{product.overview}</p>
              </section>

              <section id="how" className="pd-section">
                <div className="eyebrow">HOW IT WORKS</div>
                <h3>From selection to generation</h3>
                <div className="steps">
                  {product.steps.map((step, index) => (
                    <div key={step.title} className="step">
                      <span>{String(index + 1).padStart(2, '0')}</span>
                      <div>
                        <h4>{step.title}</h4>
                        <p>{step.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section id="capabilities" className="pd-section">
                <div className="eyebrow">KEY CAPABILITIES</div>
                <h3>Supporting a simplified product experience</h3>
                <ul className="cap-list">
                  {product.capabilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>

              <section id="impact" className="pd-section">
                <div className="eyebrow">BUSINESS IMPACT</div>
                <h3>Simplifying everyday workflows</h3>
                <p>{product.impact}</p>
              </section>
            </div>
          </div>
        </section>

        <EngineeringChallengeCTA
          onDiscussChallenge={() => setModalOpen(true)}
          onExploreSolutions={() => navigate('/')}
        />
        <CTABanner
          onDiscussChallenge={() => setModalOpen(true)}
          onExploreSolutions={() => navigate('/products')}
        />
      </main>
      <Footer />
      <DemoModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedSolution={{ title: product.title }}
      />

      <style>{`
        .pd-hero, .pd-intro, .pd-body { background:#fff; }
        .pd-hero { padding:140px 0 40px; }
        .section-pill { display:inline-flex; align-items:center; gap:10px; height:24px; padding:0 10px; border:1px solid var(--border); border-radius:12px; font-size:12px; font-weight:500; color:var(--body); margin-bottom:20px; }
        .section-pill .dot { width:6px; height:6px; border-radius:50%; background:var(--primary); }
        .pd-hero h1 { margin:0 0 16px; max-width:820px; font-size:48px; line-height:60px; font-weight:600; color:var(--heading); }
        .pd-hero .accent-italic { color:var(--primary); font-style:italic; font-weight:500; }
        .pd-hero > .container > p { margin:0 0 28px; max-width:720px; color:var(--body); font-size:16px; line-height:26px; }
        .pd-hero-actions { display:flex; flex-wrap:wrap; gap:12px; margin-bottom:32px; }
        .pd-hero-media { border-radius:28px; overflow:hidden; background:linear-gradient(160deg,#EEF0F4,#DCE7F8); min-height:360px; display:flex; align-items:center; justify-content:center; }
        .pd-placeholder { font-size:36px; font-weight:700; color:var(--primary); opacity:.75; }
        .pd-intro { padding:48px 0; }
        .pd-intro-grid { display:grid; grid-template-columns:minmax(0,1fr) 240px; gap:48px; }
        .pd-intro h2 { margin:0 0 14px; font-size:34px; line-height:44px; color:var(--heading); }
        .pd-intro p { margin:0; color:var(--body); font-size:16px; line-height:28px; }
        .aside-label { font-size:12px; letter-spacing:.08em; text-transform:uppercase; color:#94A3B8; margin-bottom:14px; }
        .pd-intro aside ul, .pd-contents ul { list-style:none; margin:0; padding:0; display:flex; flex-direction:column; gap:12px; }
        .pd-intro aside li { position:relative; padding-left:16px; color:var(--heading); font-size:15px; }
        .pd-intro aside li::before { content:''; position:absolute; left:0; top:7px; width:8px; height:8px; border-radius:2px; background:var(--primary); }
        .pd-body { padding:24px 0 40px; }
        .pd-body-grid { display:grid; grid-template-columns:220px minmax(0,1fr); gap:48px; align-items:start; }
        .pd-contents { position:sticky; top:110px; }
        .pd-contents a { display:block; padding-left:14px; border-left:2px solid transparent; color:#94A3B8; text-decoration:none; font-size:14px; }
        .pd-contents a.active { border-left-color:var(--primary); color:var(--heading); font-weight:500; }
        .pd-sections { display:flex; flex-direction:column; gap:36px; }
        .pd-section { padding-bottom:36px; border-bottom:1px solid var(--border); }
        .pd-section:last-child { border-bottom:none; }
        .eyebrow { font-size:12px; letter-spacing:.08em; text-transform:uppercase; color:var(--primary); font-weight:600; margin-bottom:12px; }
        .pd-section h3 { margin:0 0 12px; font-size:28px; line-height:36px; color:var(--heading); }
        .pd-section p { margin:0; color:var(--body); font-size:16px; line-height:28px; }
        .steps { display:flex; flex-direction:column; gap:18px; margin-top:8px; }
        .step { display:flex; gap:16px; }
        .step span { color:var(--primary); font-weight:700; }
        .step h4 { margin:0 0 4px; color:var(--heading); }
        .step p { margin:0; color:var(--body); }
        .cap-list { margin:0; padding-left:18px; display:flex; flex-direction:column; gap:10px; color:var(--body); }
        @media (max-width:900px){
          .pd-hero h1{font-size:34px; line-height:44px;}
          .pd-intro-grid, .pd-body-grid{grid-template-columns:1fr;}
          .pd-contents{position:static;}
        }
      `}</style>
    </div>
  );
}
