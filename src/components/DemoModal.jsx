import React, { useEffect, useState } from 'react';
import { X, CheckCircle, Mail, Phone, MapPin } from 'lucide-react';
import Button from './Button';

export default function DemoModal({ isOpen, onClose, selectedSolution }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    vertical: selectedSolution?.title || 'AI & Intelligent Automation',
    message: '',
  });

  useEffect(() => {
    if (!isOpen) return undefined;
    setSubmitted(false);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    if (window.__piraiLenis) window.__piraiLenis.stop();

    const onKey = (event) => {
      if (event.key === 'Escape') onClose?.();
    };
    window.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      if (window.__piraiLenis) window.__piraiLenis.start();
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (selectedSolution?.title) {
      setFormData((prev) => ({ ...prev, vertical: selectedSolution.title }));
    }
  }, [selectedSolution]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-overlay" role="dialog" aria-modal="true" aria-label="Contact Us">
      <div className="contact-overlay-inner">
        <button className="contact-overlay-close" onClick={onClose} aria-label="Close contact overlay">
          <X size={22} strokeWidth={2} />
        </button>

        {!submitted ? (
          <div className="contact-overlay-grid">
            <div className="contact-overlay-copy">
              <div className="eyetray-badge">
                <span className="dot" />
                <span>Contact Us</span>
              </div>
              <h2 className="contact-overlay-title">Let’s build together</h2>
              <p className="contact-overlay-body">
                Have a project in mind or exploring a technology transformation? Reach out directly or send us a message to start the conversation.
              </p>

              <div className="contact-overlay-info">
                <div className="contact-overlay-row">
                  <div className="contact-overlay-icon">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="contact-overlay-label">Email</span>
                    <a href="mailto:sales@piraiinfo.com">sales@piraiinfo.com</a>
                  </div>
                </div>
                <div className="contact-overlay-row">
                  <div className="contact-overlay-icon">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="contact-overlay-label">Mobile</span>
                    <a href="tel:+917397629479">+91 7397 629 479</a>
                  </div>
                </div>
                <div className="contact-overlay-row">
                  <div className="contact-overlay-icon">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="contact-overlay-label">Address</span>
                    <p>6, 32, Kamaraj Rd, Arumugam Nagar, Mahalingapuram, Tamil Nadu 642002</p>
                  </div>
                </div>
              </div>
            </div>

            <form className="contact-overlay-form" onSubmit={handleSubmit}>
              <label>
                Full Name *
                <input
                  type="text"
                  required
                  placeholder="Alex Morgan"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </label>

              <label>
                Work Email *
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </label>

              <div className="contact-overlay-form-row">
                <label>
                  Phone
                  <div className="contact-phone-row">
                    <span>+91</span>
                    <input
                      type="tel"
                      placeholder="73976 29479"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </label>

                <label>
                  Company
                  <input
                    type="text"
                    placeholder="Enterprise Corp"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </label>
              </div>

              <label>
                Area of Interest
                <select
                  value={formData.vertical}
                  onChange={(e) => setFormData({ ...formData, vertical: e.target.value })}
                >
                  <option value="AI & Intelligent Automation">AI & Intelligent Automation</option>
                  <option value="Enterprise Engineering">Enterprise Engineering</option>
                  <option value="Cloud & Platform Systems">Cloud & Platform Systems</option>
                  <option value="Data & Intelligence">Data & Intelligence</option>
                  <option value="Quality & Reliability">Quality & Reliability</option>
                  <option value="CTO as Service">CTO as Service</option>
                </select>
              </label>

              <label>
                Message *
                <textarea
                  rows={5}
                  required
                  placeholder="Describe your current engineering goals or AI automation objectives..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </label>

              <Button variant="type1" size="hero" showArrow={false} type="submit" fullWidth>
                Send Message
              </Button>
            </form>
          </div>
        ) : (
          <div className="contact-overlay-success">
            <div className="contact-success-icon">
              <CheckCircle size={56} />
            </div>
            <h3>Message Sent</h3>
            <p>
              Thank you for reaching out. A Pirai solution engineer will get back to you at{' '}
              <strong>{formData.email}</strong> within 1 business day.
            </p>
            <Button variant="type2" size="hero" showArrow={false} onClick={onClose}>
              Close
            </Button>
          </div>
        )}
      </div>

      <style>{`
        .contact-overlay {
          position: fixed;
          inset: 0;
          z-index: 3000;
          background: #FFFFFF;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }

        .contact-overlay-inner {
          position: relative;
          min-height: 100%;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 48px 40px 64px;
          box-sizing: border-box;
        }

        .contact-overlay-close {
          position: absolute;
          top: 28px;
          right: 28px;
          width: 48px;
          height: 48px;
          border-radius: 12px;
          border: none;
          background: #EEF0F4;
          color: #0F172A;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background-color 0.2s ease, color 0.2s ease;
          z-index: 2;
        }

        .contact-overlay-close:hover {
          background: #3488FF;
          color: #FFFFFF;
        }

        .contact-overlay-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: start;
          padding-top: 40px;
        }

        .contact-overlay-copy .eyetray-badge {
          margin-bottom: 20px;
        }

        .contact-overlay-title {
          margin: 0 0 16px;
          font-family: 'Poppins', sans-serif;
          font-size: 48px;
          line-height: 58px;
          font-weight: 600;
          color: #0F172A;
        }

        .contact-overlay-body {
          margin: 0 0 36px;
          max-width: 460px;
          font-family: 'Poppins', sans-serif;
          font-size: 16px;
          line-height: 26px;
          color: #475569;
        }

        .contact-overlay-info {
          display: flex;
          flex-direction: column;
          gap: 22px;
        }

        .contact-overlay-row {
          display: flex;
          gap: 14px;
          align-items: flex-start;
        }

        .contact-overlay-icon {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background: #EAF2FF;
          color: #3488FF;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .contact-overlay-label {
          display: block;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          color: #64748B;
          margin-bottom: 4px;
          font-family: 'Poppins', sans-serif;
        }

        .contact-overlay-row a,
        .contact-overlay-row p {
          margin: 0;
          color: #0F172A;
          font-size: 15px;
          line-height: 22px;
          text-decoration: none;
          font-family: 'Poppins', sans-serif;
        }

        .contact-overlay-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
          background: #F8FAFC;
          border-radius: 24px;
          padding: 32px;
        }

        .contact-overlay-form label {
          display: flex;
          flex-direction: column;
          gap: 8px;
          font-size: 13px;
          font-weight: 500;
          color: #475569;
          font-family: 'Poppins', sans-serif;
        }

        .contact-overlay-form input,
        .contact-overlay-form select,
        .contact-overlay-form textarea {
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          padding: 14px 16px;
          font: inherit;
          color: #0F172A;
          background: #FFFFFF;
          outline: none;
        }

        .contact-overlay-form input:focus,
        .contact-overlay-form select:focus,
        .contact-overlay-form textarea:focus {
          border-color: #3488FF;
        }

        .contact-overlay-form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .contact-phone-row {
          display: flex;
          align-items: center;
          gap: 0;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          background: #FFFFFF;
          overflow: hidden;
        }

        .contact-phone-row span {
          padding: 14px 12px;
          background: #EEF0F4;
          color: #0F172A;
          font-size: 14px;
          font-weight: 500;
          border-right: 1px solid #E2E8F0;
        }

        .contact-phone-row input {
          border: none;
          border-radius: 0;
          flex: 1;
          min-width: 0;
        }

        .contact-overlay-success {
          min-height: 70vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          gap: 16px;
          padding: 80px 20px;
        }

        .contact-success-icon {
          color: #10B981;
          margin-bottom: 8px;
        }

        .contact-overlay-success h3 {
          margin: 0;
          font-size: 32px;
          font-weight: 600;
          color: #0F172A;
          font-family: 'Poppins', sans-serif;
        }

        .contact-overlay-success p {
          margin: 0 0 12px;
          max-width: 480px;
          font-size: 16px;
          line-height: 26px;
          color: #475569;
          font-family: 'Poppins', sans-serif;
        }

        @media (max-width: 900px) {
          .contact-overlay-inner {
            padding: 32px 24px 48px;
          }

          .contact-overlay-grid {
            grid-template-columns: 1fr;
            gap: 36px;
            padding-top: 56px;
          }

          .contact-overlay-title {
            font-size: 36px;
            line-height: 46px;
          }

          .contact-overlay-form-row {
            grid-template-columns: 1fr;
          }

          .contact-overlay-close {
            top: 16px;
            right: 16px;
          }
        }
      `}</style>
    </div>
  );
}
