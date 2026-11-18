import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DemoModal from '../components/DemoModal';
import EngineeringChallengeCTA from '../components/EngineeringChallengeCTA';
import Button from '../components/Button';

export default function NotFoundPage() {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="app-root not-found-page">
      <Navbar onRequestDemo={() => setModalOpen(true)} />
      <main>
        <section className="nf-hero">
          <div className="container">
            <div className="nf-label">Page Not Found</div>
            <div className="nf-code" aria-hidden="true">
              <span>4</span>
              <span className="zero">0</span>
              <span>4</span>
            </div>
            <h1>Oops! Something is not right.</h1>
            <p className="accent-italic">Let’s get back on track.</p>
            <div className="nf-actions">
              <Button variant="type1" size="hero" onClick={() => navigate('/')}>
                Back to Homepage
              </Button>
              <Button variant="type2" size="hero" onClick={() => navigate('/')}>
                Explore Capabilities
              </Button>
            </div>
          </div>
        </section>

        <EngineeringChallengeCTA
          onDiscussChallenge={() => setModalOpen(true)}
          onExploreSolutions={() => navigate('/')}
        />
      </main>
      <Footer />
      <DemoModal isOpen={modalOpen} onClose={() => setModalOpen(false)} selectedSolution={null} />

      <style>{`
        .nf-hero { padding:140px 0 64px; background:#fff; text-align:center; }
        .nf-label { color:var(--primary); font-size:14px; font-weight:600; margin-bottom:18px; }
        .nf-code { display:flex; justify-content:center; gap:8px; font-size:120px; line-height:1; font-weight:700; margin-bottom:18px; }
        .nf-code span { color:var(--primary); }
        .nf-code .zero { color:#0F172A; }
        .nf-hero h1 { margin:0 0 10px; font-size:40px; line-height:50px; font-weight:600; color:var(--heading); }
        .nf-hero .accent-italic { margin:0 0 28px; color:var(--primary); font-style:italic; font-size:20px; }
        .nf-actions { display:flex; justify-content:center; flex-wrap:wrap; gap:12px; }
        @media (max-width:768px){
          .nf-code{font-size:84px;}
          .nf-hero h1{font-size:30px; line-height:40px;}
        }
      `}</style>
    </div>
  );
}
