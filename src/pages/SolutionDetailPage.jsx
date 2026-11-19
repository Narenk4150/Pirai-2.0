import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DemoModal from '../components/DemoModal';
import CTABanner from '../components/CTABanner';
import EngineeringChallengeCTA from '../components/EngineeringChallengeCTA';
import SolutionDetail from '../components/solutions/SolutionDetail';
import { getSolutionById } from '../data/solutions';

export default function SolutionDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const solution = getSolutionById(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!solution) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="app-root solution-detail-page">
      <Navbar onRequestDemo={() => setModalOpen(true)} />

      <main>
        <SolutionDetail
          solution={solution}
          onDiscussChallenge={() => setModalOpen(true)}
          onExploreCapabilities={() => {
            const cases = document.querySelector('.sol-cases');
            const caps = document.querySelector('.sol-capabilities');
            const target = solution.secondaryCtaTarget === 'cases' ? cases : caps;
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}
        />
        {solution.id !== 'intelligent-automation' && (
          <EngineeringChallengeCTA
            onDiscussChallenge={() => setModalOpen(true)}
            onExploreSolutions={() => navigate('/')}
          />
        )}
        <CTABanner
          onDiscussChallenge={() => setModalOpen(true)}
          onExploreSolutions={() => navigate('/')}
        />
      </main>

      <Footer />

      <DemoModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedSolution={{ title: solution.pill }}
      />
    </div>
  );
}
