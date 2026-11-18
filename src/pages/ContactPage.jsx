import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DemoModal from '../components/DemoModal';
import EngineeringChallengeCTA from '../components/EngineeringChallengeCTA';
import Button from '../components/Button';

export default function ContactPage() {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const update = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="app-root contact-page">
      <Navbar onRequestDemo={() => setModalOpen(true)} />
      <main>
        <section className="contact-hero">
          <div className="container contact-grid">
            <div className="contact-copy">
              <h1>Let’s build together</h1>
              <p>
                Have a project in mind or exploring a technology transformation? Reach out directly or send us a message to start the conversation.
              </p>
              <div className="contact-info">
                <div className="contact-row">
                  <div className="icon"><Mail size={18} /></div>
                  <div>
                    <span>Email</span>
                    <a href="mailto:sales@piraiinfo.com">sales@piraiinfo.com</a>
                  </div>
                </div>
                <div className="contact-row">
                  <div className="icon"><Phone size={18} /></div>
                  <div>
                    <span>Mobile</span>
                    <a href="tel:+917397629479">+91 7397 629 479</a>
                  </div>
                </div>
                <div className="contact-row">
                  <div className="icon"><MapPin size={18} /></div>
                  <div>
                    <span>Address</span>
                    <p>6, 32, Kamaraj Rd, Arumugam Nagar, Mahalingapuram, Tamil Nadu 642002</p>
                  </div>
                </div>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <label>
                Full Name
                <input value={form.fullName} onChange={update('fullName')} required />
              </label>
              <label>
                Email
                <input type="email" value={form.email} onChange={update('email')} required />
              </label>
              <label>
                Phone
                <div className="phone-row">
                  <span>+91</span>
                  <input value={form.phone} onChange={update('phone')} required />
                </div>
              </label>
              <label>
                Message
                <textarea rows={5} value={form.message} onChange={update('message')} required />
              </label>
              <Button variant="type2" size="hero" showArrow={false} type="submit">
                Send Message
              </Button>
              {submitted && (
                <p className="form-note">Thanks — we’ll route this to the right team within one business day.</p>
              )}
            </form>
          </div>
        </section>

        <EngineeringChallengeCTA
          onDiscussChallenge={() => setModalOpen(true)}
          onExploreSolutions={() => navigate('/')}
        />
      </main>
      <Footer />
      <DemoModal isOpen={modalOpen} onClose={() => setModalOpen(false)} selectedSolution={null} />

      <style>{`
        .contact-hero { padding:140px 0 40px; background:#fff; }
        .contact-grid { display:grid; grid-template-columns:1fr 1fr; gap:48px; align-items:start; }
        .contact-copy h1 { margin:0 0 16px; font-size:48px; line-height:58px; font-weight:600; color:var(--heading); }
        .contact-copy > p { margin:0 0 32px; color:var(--body); font-size:16px; line-height:26px; max-width:460px; }
        .contact-info { display:flex; flex-direction:column; gap:22px; }
        .contact-row { display:flex; gap:14px; }
        .contact-row .icon { width:40px; height:40px; border-radius:12px; background:#EAF2FF; color:var(--primary); display:inline-flex; align-items:center; justify-content:center; flex-shrink:0; }
        .contact-row span { display:block; font-size:12px; text-transform:uppercase; letter-spacing:.04em; color:var(--body); margin-bottom:4px; }
        .contact-row a, .contact-row p { margin:0; color:var(--heading); font-size:15px; line-height:22px; text-decoration:none; }
        .contact-form { display:flex; flex-direction:column; gap:16px; }
        .contact-form label { display:flex; flex-direction:column; gap:8px; font-size:13px; color:var(--body); }
        .contact-form input, .contact-form textarea { border:1px solid var(--border); border-radius:12px; padding:14px 16px; font:inherit; color:var(--heading); background:#fff; }
        .phone-row { display:flex; gap:10px; align-items:center; }
        .phone-row span { border:1px solid var(--border); border-radius:12px; padding:14px 12px; color:var(--heading); background:#EEF0F4; }
        .phone-row input { flex:1; }
        .form-note { margin:0; color:var(--primary); font-size:14px; }
        @media (max-width:900px){ .contact-grid{grid-template-columns:1fr;} .contact-copy h1{font-size:34px; line-height:44px;} }
      `}</style>
    </div>
  );
}
