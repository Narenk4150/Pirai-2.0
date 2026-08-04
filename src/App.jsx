import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ClientLogoStrip from './components/ClientLogoStrip';
import CaseStudiesSection from './components/CaseStudiesSection';
import ServicesSection from './components/ServicesSection';
import AIProductsSection from './components/AIProductsSection';
import IndustriesSection from './components/IndustriesSection';
import WhyUsSection from './components/WhyUsSection';
import TestimonialsSection from './components/TestimonialsSection';
import InsightsSection from './components/InsightsSection';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';
import DemoModal from './components/DemoModal';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSolution, setSelectedSolution] = useState(null);

  const handleOpenDemo = (solution = null) => {
    setSelectedSolution(solution);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedSolution(null);
  };

  const handleNavigate = (target) => {
    const el = document.getElementById(target);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="app-root">
      <Navbar onRequestDemo={() => handleOpenDemo()} onNavigate={handleNavigate} />
      
      <main>
        {/* 1. Hero Section */}
        <Hero 
          onDiscussChallenge={() => handleOpenDemo()} 
          onExploreSolutions={() => handleNavigate('solutions')} 
        />
        
        {/* 2. Trust Section (Client Logo Strip) */}
        <ClientLogoStrip />
        
        {/* 3. Case Studies Section (Immediately after Trust Section) */}
        <CaseStudiesSection 
          onSelectCaseStudy={(cs) => handleOpenDemo({ title: cs.title })}
        />

        {/* 4. Services Section */}
        <ServicesSection 
          onSelectService={(service) => handleOpenDemo({ title: service.title })}
          onExploreSolutions={() => handleNavigate('solutions')}
        />

        {/* 5. AI Products Section */}
        <AIProductsSection 
          onSelectProduct={(product) => handleOpenDemo({ title: product.title })}
        />

        {/* 6. Industries Section */}
        <IndustriesSection 
          onSelectIndustry={(ind) => handleOpenDemo({ title: ind.name })}
        />
        
        {/* 7. Why Pirai Proof Section */}
        <WhyUsSection />
        
        {/* 8. Client Voices / Testimonials Section */}
        <TestimonialsSection />
        
        {/* 9. Insights / Blog Section */}
        <InsightsSection onNavigate={handleNavigate} />
        
        {/* 10. Closing CTA Banner */}
        <CTABanner 
          onDiscussChallenge={() => handleOpenDemo()} 
          onExploreSolutions={() => handleNavigate('solutions')} 
        />
      </main>

      {/* 11. Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Consultation Modal */}
      <DemoModal 
        isOpen={modalOpen} 
        onClose={handleCloseModal} 
        selectedSolution={selectedSolution} 
      />
    </div>
  );
}
