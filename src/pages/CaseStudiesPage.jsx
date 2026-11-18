import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DemoModal from '../components/DemoModal';
import CTABanner from '../components/CTABanner';
import CaseStudiesHero from '../components/case-studies/CaseStudiesHero';
import CaseStudiesImpact from '../components/case-studies/CaseStudiesImpact';
import CaseStudiesGrid from '../components/case-studies/CaseStudiesGrid';

export default function CaseStudiesPage() {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleNavigate = (target) => {
    if (target === 'casestudies' || target === 'case-studies') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="app-root case-studies-page">
      <Navbar
        onRequestDemo={() => setModalOpen(true)}
        onNavigate={handleNavigate}
      />

      <main>
        <CaseStudiesHero
          onDiscussChallenge={() => setModalOpen(true)}
          onExploreCapabilities={() => navigate('/#solutions')}
        />
        <CaseStudiesImpact />
        <CaseStudiesGrid />
        <CTABanner
          onDiscussChallenge={() => setModalOpen(true)}
          onExploreSolutions={() => navigate('/#solutions')}
        />
      </main>

      <Footer onNavigate={handleNavigate} />

      <DemoModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedSolution={null}
      />
    </div>
  );
}
