import React, { useEffect, useRef, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DemoModal from '../components/DemoModal';
import CTABanner from '../components/CTABanner';
import EngineeringChallengeCTA from '../components/EngineeringChallengeCTA';
import SolutionDetail from '../components/solutions/SolutionDetail';
import { getSolutionById } from '../data/solutions';
import { scrollToElement } from '../utils/scroll';
import useScrollReveal from '../hooks/useScrollReveal';

gsap.registerPlugin(ScrollTrigger);

export default function SolutionDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const pageRef = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);
  const solution = getSolutionById(slug);

  useScrollReveal(pageRef);

  useEffect(() => {
    const lenis = window.__piraiLenis;
    if (lenis) {
      lenis.start();
      lenis.scrollTo(0, { immediate: true });
      lenis.resize();
    } else {
      window.scrollTo(0, 0);
    }

    const raf = requestAnimationFrame(() => ScrollTrigger.refresh());
    const refreshTimer = window.setTimeout(() => {
      window.__piraiLenis?.resize();
      ScrollTrigger.refresh();
    }, 220);

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(refreshTimer);
    };
  }, [slug]);

  if (!solution) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="app-root solution-detail-page" ref={pageRef}>
      <Navbar onRequestDemo={() => setModalOpen(true)} />

      <main>
        <SolutionDetail
          solution={solution}
          onDiscussChallenge={() => setModalOpen(true)}
          onExploreCapabilities={() => {
            const cases = document.querySelector('.sol-cases');
            const caps = document.querySelector('.sol-capabilities');
            const showcase = document.querySelector('.sol-showcase');
            const target =
              solution.secondaryCtaTarget === 'cases'
                ? cases
                : caps || showcase;
            if (target) scrollToElement(target, { offset: -90 });
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
