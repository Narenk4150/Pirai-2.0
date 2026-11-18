import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DemoModal from '../components/DemoModal';
import TestimonialsSection from '../components/TestimonialsSection';
import CTABanner from '../components/CTABanner';
import AboutHero from '../components/about/AboutHero';
import OurStory from '../components/about/OurStory';
import Milestones from '../components/about/Milestones';
import WhyDifferent from '../components/about/WhyDifferent';
import OurValues from '../components/about/OurValues';
import Leadership from '../components/about/Leadership';
import AboutFAQ from '../components/about/AboutFAQ';
import useScrollReveal from '../hooks/useScrollReveal';
import { scrollToElement } from '../utils/scroll';

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const navigate = useNavigate();
  const mainRef = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);

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

  const handleNavigate = (target) => {
    if (target === 'home' || target === 'casestudies' || target === 'solutions' || target === 'products') {
      navigate('/');
      setTimeout(() => {
        if (target === 'home') {
          if (window.__piraiLenis) window.__piraiLenis.scrollTo(0);
          else window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
        scrollToElement(target, { offset: -90 });
      }, 80);
      return;
    }
    if (target === 'about' || target === 'about-us' || target === 'why-pirai' || target === 'company') {
      if (window.__piraiLenis) window.__piraiLenis.scrollTo(0);
      else window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="app-root about-page" ref={mainRef}>
      <Navbar
        onRequestDemo={() => setModalOpen(true)}
        onNavigate={handleNavigate}
      />

      <main>
        <AboutHero
          onDiscussChallenge={() => setModalOpen(true)}
          onSeeWork={() => handleNavigate('casestudies')}
        />
        <OurStory />
        <Milestones />
        <WhyDifferent />
        <OurValues />
        <Leadership />
        <TestimonialsSection />
        <AboutFAQ />
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
