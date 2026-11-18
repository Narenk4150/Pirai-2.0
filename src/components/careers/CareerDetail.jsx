import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, MapPin } from 'lucide-react';
import Button from '../Button';

export default function CareerDetail({ job, onApply }) {
  return (
    <article className="career-detail">
      <section className="cd-hero">
        <div className="container">
          <div className="cd-department">{job.department}</div>
          <h1>{job.title}</h1>
          <div className="cd-meta">
            <span><MapPin size={16} /> {job.detailLocation || job.location}</span>
            <span><Briefcase size={16} /> {job.detailExperience || job.experience}</span>
          </div>
          <Button variant="type2" size="hero" onClick={onApply}>
            Apply Now
          </Button>
        </div>
      </section>

      <section className="cd-body">
        <div className="container cd-content">
          <div className="cd-block">
            <h2>About the Role</h2>
            <p>{job.about}</p>
          </div>

          <div className="cd-block">
            <h2>Key Responsibilities</h2>
            <ul>
              {job.responsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="cd-block">
            <h2>Required Skills & Qualifications</h2>
            <ul>
              {job.requirements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {job.preferred?.length > 0 && (
            <div className="cd-block">
              <h2>Preferred Qualifications</h2>
              <ul>
                {job.preferred.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="cd-actions">
            <Button variant="type2" size="hero" onClick={onApply}>
              Apply Now
            </Button>
            <Link to="/careers#open-positions" className="cd-other">
              See other Openings
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .cd-hero {
          padding: 140px 0 40px;
          background: #FFFFFF;
          border-bottom: 1px solid var(--border);
        }
        .cd-department {
          color: var(--primary);
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 12px;
        }
        .cd-hero h1 {
          margin: 0 0 18px;
          font-size: 48px;
          line-height: 58px;
          font-weight: 600;
          color: var(--heading);
        }
        .cd-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          margin-bottom: 28px;
          color: var(--body);
          font-size: 15px;
        }
        .cd-meta span {
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .cd-body {
          padding: 48px 0 40px;
          background: #FFFFFF;
        }
        .cd-content {
          max-width: 820px;
        }
        .cd-block {
          margin-bottom: 36px;
        }
        .cd-block h2 {
          margin: 0 0 14px;
          font-size: 24px;
          line-height: 32px;
          font-weight: 600;
          color: var(--heading);
        }
        .cd-block p,
        .cd-block li {
          font-size: 16px;
          line-height: 28px;
          color: var(--body);
        }
        .cd-block p {
          margin: 0;
        }
        .cd-block ul {
          margin: 0;
          padding-left: 20px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .cd-actions {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 20px;
          padding-top: 8px;
        }
        .cd-other {
          color: var(--primary);
          font-size: 15px;
          font-weight: 600;
          text-decoration: none;
        }
        @media (max-width: 768px) {
          .cd-hero h1 {
            font-size: 34px;
            line-height: 44px;
          }
        }
      `}</style>
    </article>
  );
}
