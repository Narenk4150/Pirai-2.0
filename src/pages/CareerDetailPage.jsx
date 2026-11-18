import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DemoModal from '../components/DemoModal';
import CareersCTA from '../components/careers/CareersCTA';
import CareerDetail from '../components/careers/CareerDetail';
import { getJobById } from '../data/careers';

export default function CareerDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const job = getJobById(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!job) {
    return <Navigate to="/careers" replace />;
  }

  return (
    <div className="app-root career-detail-page">
      <Navbar onRequestDemo={() => setModalOpen(true)} />

      <main>
        <CareerDetail job={job} onApply={() => setModalOpen(true)} />
        <CareersCTA
          onExplorePositions={() => navigate('/careers#open-positions')}
          onSubmitProfile={() => setModalOpen(true)}
        />
      </main>

      <Footer />

      <DemoModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedSolution={{ title: job.title }}
      />
    </div>
  );
}
