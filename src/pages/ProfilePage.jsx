import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DemoModal from '../components/DemoModal';
import CTABanner from '../components/CTABanner';
import ProfileHero from '../components/profile/ProfileHero';
import { getLeaderBySlug } from '../data/leaders';

export default function ProfilePage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const leader = getLeaderBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!leader) {
    return <Navigate to="/about" replace />;
  }

  const handleNavigate = (target) => {
    if (target === 'about' || target === 'about-us' || target === 'why-pirai' || target === 'company') {
      navigate('/about');
      return;
    }
    if (target === 'home' || target === 'casestudies' || target === 'solutions' || target === 'products') {
      navigate('/');
      setTimeout(() => {
        if (target === 'home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
        const el = document.getElementById(target);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }
  };

  return (
    <div className="app-root profile-page">
      <Navbar
        onRequestDemo={() => setModalOpen(true)}
        onNavigate={handleNavigate}
      />

      <main>
        <ProfileHero leader={leader} />
        <CTABanner
          onDiscussChallenge={() => setModalOpen(true)}
          onExploreSolutions={() => handleNavigate('solutions')}
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
