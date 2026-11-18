import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DemoModal from '../components/DemoModal';
import CTABanner from '../components/CTABanner';
import CaseStudyDetail from '../components/case-studies/CaseStudyDetail';
import { getCaseStudyById } from '../data/caseStudies';

export default function CaseStudyDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const study = getCaseStudyById(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!study) {
    return <Navigate to="/case-studies" replace />;
  }

  return (
    <div className="app-root case-study-detail-page">
      <Navbar onRequestDemo={() => setModalOpen(true)} />

      <main>
        <CaseStudyDetail study={study} />
        <CTABanner
          onDiscussChallenge={() => setModalOpen(true)}
          onExploreSolutions={() => navigate('/')}
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
