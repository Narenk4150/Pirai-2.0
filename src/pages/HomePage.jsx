import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ClientLogoStrip from '../components/ClientLogoStrip';
import CaseStudiesSection from '../components/CaseStudiesSection';
import ServicesSection from '../components/ServicesSection';
import AIProductsSection from '../components/AIProductsSection';
import IndustriesSection from '../components/IndustriesSection';
import WhyUsSection from '../components/WhyUsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import InsightsSection from '../components/InsightsSection';
import CTABanner from '../components/CTABanner';
import Footer from '../components/Footer';
import DemoModal from '../components/DemoModal';
import { getSolutionIdFromLabel } from '../data/solutions';
import { scrollToElement } from '../utils/scroll';
import useScrollReveal from '../hooks/useScrollReveal';

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const navigate = useNavigate();
  const mainRef = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSolution, setSelectedSolution] = useState(null);

  useScrollReveal(mainRef);

  useEffect(() => {
    if (window.__piraiLenis) {
      window.__piraiLenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
    const t = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(t);
  }, []);

  const handleOpenDemo = (solution = null) => {
    setSelectedSolution(solution);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedSolution(null);
  };

  const handleNavigate = (target) => {
    if (target === 'home') {
      if (window.__piraiLenis) window.__piraiLenis.scrollTo(0);
      else window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    scrollToElement(target, { offset: -90 });
  };

  return (
    <div className="app-root" ref={mainRef}>
      <Navbar onRequestDemo={() => handleOpenDemo()} onNavigate={handleNavigate} />

      <main>
        <Hero
          onDiscussChallenge={() => handleOpenDemo()}
          onExploreSolutions={() => handleNavigate('solutions')}
        />
        <ClientLogoStrip />
        <CaseStudiesSection
          onViewAll={() => navigate('/case-studies')}
          onSelectCaseStudy={(slug) => navigate(`/case-studies/${slug}`)}
        />
        <ServicesSection
          onSelectService={(service) => {
            const solutionId = getSolutionIdFromLabel(service.title);
            if (solutionId) {
              navigate(`/solutions/${solutionId}`);
              return;
            }
            handleOpenDemo({ title: service.title });
          }}
          onExploreSolutions={() => handleNavigate('solutions')}
        />
        <AIProductsSection
          onExploreProducts={() => navigate('/products')}
          onSelectProduct={(product) => navigate(`/products/${product.id}`)}
        />
        <IndustriesSection
          onSelectIndustry={(ind) => handleOpenDemo({ title: ind.name })}
          onViewDetails={() => handleOpenDemo({ title: 'Industry Solutions' })}
        />
        <WhyUsSection onAboutUs={() => navigate('/about')} />
        <TestimonialsSection />
        <InsightsSection
          onNavigate={(target) => {
            if (target === 'insights' || target === 'blog') {
              navigate('/blog');
              return;
            }
            handleNavigate(target);
          }}
          onSelectPost={(slug) => navigate(`/blog/${slug}`)}
        />
        <CTABanner
          onDiscussChallenge={() => handleOpenDemo()}
          onExploreSolutions={() => handleNavigate('solutions')}
        />
      </main>

      <Footer onNavigate={handleNavigate} />

      <DemoModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        selectedSolution={selectedSolution}
      />
    </div>
  );
}
