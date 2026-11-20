import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DemoModal from '../components/DemoModal';
import CTABanner from '../components/CTABanner';
import CareersHero from '../components/careers/CareersHero';
import CareersWhy from '../components/careers/CareersWhy';
import CareersCulture from '../components/careers/CareersCulture';
import CareersGrowth from '../components/careers/CareersGrowth';
import CareersTeams from '../components/careers/CareersTeams';
import CareersJobs from '../components/careers/CareersJobs';
import CareersCTA from '../components/careers/CareersCTA';

export default function CareersPage() {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (window.__piraiLenis) {
      window.__piraiLenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
    if (window.location.hash) {
      const el = document.querySelector(window.location.hash);
      if (el) {
        setTimeout(() => {
          if (window.__piraiLenis) window.__piraiLenis.scrollTo(el, { offset: -90 });
          else el.scrollIntoView({ behavior: 'smooth' });
        }, 50);
      }
    }
  }, []);

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (window.__piraiLenis) window.__piraiLenis.scrollTo(el, { offset: -90 });
    else el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app-root careers-page">
      <Navbar onRequestDemo={() => setModalOpen(true)} />

      <main>
        <CareersHero
          onExploreOpportunities={() => scrollToId('open-positions')}
          onLifeAtPirai={() => scrollToId('life-at-pirai')}
        />
        <CareersWhy />
        <CareersCulture />
        <CareersGrowth />
        <CareersTeams />
        <CareersJobs />
        <CareersCTA
          onExplorePositions={() => scrollToId('open-positions')}
          onSubmitProfile={() => setModalOpen(true)}
        />
        <CTABanner
          onDiscussChallenge={() => setModalOpen(true)}
          onExploreSolutions={() => {
            window.location.href = '/#solutions';
          }}
        />
      </main>

      <Footer />

      <DemoModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedSolution={null}
      />
    </div>
  );
}
