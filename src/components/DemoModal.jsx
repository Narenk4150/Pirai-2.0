import React, { useState } from 'react';
import { X, CheckCircle, ArrowUpRight } from 'lucide-react';

export default function DemoModal({ isOpen, onClose, selectedSolution }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    vertical: selectedSolution?.title || 'AI & Intelligent Automation',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close Modal">
          <X size={20} />
        </button>

        {!submitted ? (
          <div>
            <div className="modal-header">
              <div className="eyetray-badge">
                <span className="dot" />
                <span>PIRAI CONSULTATION</span>
              </div>
              <h3 className="modal-title">Discuss Your Challenge</h3>
              <p className="section-body modal-subtitle">
                Tell us about your project requirements and our engineering team will route you within 1 business day.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="modal-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="modal-name">Full Name *</label>
                  <input 
                    id="modal-name"
                    type="text" 
                    required 
                    placeholder="Alex Morgan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="modal-email">Work Email *</label>
                  <input 
                    id="modal-email"
                    type="email" 
                    required 
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="modal-company">Company Name</label>
                  <input 
                    id="modal-company"
                    type="text" 
                    placeholder="Enterprise Corp"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="modal-vertical">Area of Interest</label>
                  <select 
                    id="modal-vertical"
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
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="modal-message">Project Description / Challenge</label>
                <textarea 
                  id="modal-message"
                  rows={3} 
                  placeholder="Describe your current engineering goals or AI automation objectives..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              {/* Type 3 Button: "Submit Request" */}
              <button type="submit" className="btn-base btn-type-3 modal-submit-btn">
                <span>Submit Request</span>
                <div className="btn-icon-chip">
                  <ArrowUpRight size={18} />
                </div>
              </button>
            </form>
          </div>
        ) : (
          <div className="modal-success-state">
            <div className="success-icon-wrapper">
              <CheckCircle size={48} />
            </div>
            <h3>Request Submitted!</h3>
            <p className="section-body">Thank you for reaching out. A Pirai solution engineer will get back to you at <strong>{formData.email}</strong> within 1 business day.</p>
            {/* Type 3 Button: "Close Window" */}
            <button className="btn-base btn-type-3" onClick={onClose} style={{ marginTop: '20px', width: '100%' }}>
              <span>Close Window</span>
              <div className="btn-icon-chip">
                <ArrowUpRight size={18} />
              </div>
            </button>
          </div>
        )}
      </div>

      <style>{`
        .modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 2000;
          background: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .modal-content {
          position: relative;
          background: #FFFFFF;
          border-radius: 24px;
          padding: 40px;
          max-width: 620px;
          width: 100%;
          box-shadow: 0 24px 60px rgba(15, 23, 42, 0.2);
          border: 1px solid var(--border);
        }

        .modal-close-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: var(--surface-alt);
          color: var(--heading);
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          cursor: pointer;
        }

        .modal-header {
          margin-bottom: 20px;
        }

        .modal-title {
          font-size: 26px;
          font-weight: 600;
          color: var(--heading);
          margin-bottom: 6px;
        }

        .modal-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-group label {
          font-size: 13px;
          font-weight: 600;
          color: var(--heading);
        }

        .form-group input, .form-group select, .form-group textarea {
          padding: 12px 14px;
          border-radius: 10px;
          border: 1px solid var(--border);
          font-family: inherit;
          font-size: 14px;
          color: var(--heading);
          background: var(--surface-alt);
          outline: none;
        }

        .form-group input:focus, .form-group select:focus, .form-group textarea:focus {
          border-color: var(--primary);
          background: #FFFFFF;
        }

        .modal-submit-btn {
          width: 100%;
          margin-top: 8px;
        }

        .modal-success-state {
          text-align: center;
          padding: 20px 10px;
        }

        .success-icon-wrapper {
          color: #10B981;
          margin-bottom: 16px;
        }

        @media (max-width: 600px) {
          .form-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
