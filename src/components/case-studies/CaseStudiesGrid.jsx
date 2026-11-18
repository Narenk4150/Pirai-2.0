import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Button from '../Button';
import {
  CASE_STUDIES,
  CASE_STUDY_CATEGORIES,
  getCategoryCounts,
} from '../../data/caseStudies';

const PAGE_SIZE = 6;

export default function CaseStudiesGrid() {
  const [activeCategory, setActiveCategory] = useState('All Projects');
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const counts = useMemo(() => getCategoryCounts(), []);

  const filtered = useMemo(() => {
    if (activeCategory === 'All Projects') return CASE_STUDIES;
    return CASE_STUDIES.filter((study) => study.category === activeCategory);
  }, [activeCategory]);

  const visible = filtered.slice(0, visibleCount);

  const handleCategory = (category) => {
    setActiveCategory(category);
    setVisibleCount(PAGE_SIZE);
  };

  return (
    <section className="cs-grid-section">
      <div className="container">
        <div className="section-pill">
          <span className="dot" />
          <span>Case Studies</span>
        </div>
        <h2>
          Explore our <span className="blue-accent">work.</span>
        </h2>

        <div className="cs-filters" role="group" aria-label="Filter case studies">
          {CASE_STUDY_CATEGORIES.map((category) => {
            const isActive = category === activeCategory;
            const count = String(counts[category] ?? 0).padStart(2, '0');
            return (
              <button
                key={category}
                type="button"
                className={`cs-filter ${isActive ? 'active' : ''}`}
                aria-pressed={isActive}
                onClick={() => handleCategory(category)}
              >
                {category} <span>({count})</span>
              </button>
            );
          })}
        </div>

        <p className="cs-count">
          Showing {visible.length} of {filtered.length} case-studies
        </p>

        <div className="cs-grid">
          {visible.map((study) => (
            <article key={study.id} className="cs-card">
              <Link to={`/case-studies/${study.id}`} className="cs-card-media">
                <img src={study.image} alt="" />
              </Link>
              <div className="cs-card-body">
                <div className="cs-card-meta">
                  <span className="cs-client">{study.client}</span>
                  <span className="cs-meta-label">{study.metaLabel || `${study.industry} • ${study.capability}`}</span>
                </div>
                <h3>
                  <Link to={`/case-studies/${study.id}`}>{study.cardTitle || study.title}</Link>
                </h3>
                <p>{study.summary}</p>
                <div className="cs-tags">
                  {study.tags.slice(0, 2).map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <Link to={`/case-studies/${study.id}`} className="cs-card-link">
                  View Case Study <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="cs-empty">
            <h3>No published case studies here yet</h3>
            <p>We’re preparing examples for this solution area.</p>
            <Button variant="type2" size="hero" onClick={() => handleCategory('All Projects')}>
              Show all projects
            </Button>
          </div>
        )}

        {visible.length < filtered.length && (
          <div className="cs-load-more">
            <Button
              variant="type2"
              size="hero"
              onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
            >
              Load More Projects
            </Button>
          </div>
        )}
      </div>

      <style>{`
        .cs-grid-section {
          padding: 40px 0 80px;
          background: #FFFFFF;
        }
        .section-pill {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          height: 24px;
          padding: 0 10px;
          border: 1px solid var(--border);
          border-radius: 12px;
          font-size: 12px;
          font-weight: 500;
          color: var(--body);
          margin-bottom: 20px;
        }
        .section-pill .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--primary);
        }
        .cs-grid-section h2 {
          margin: 0 0 28px;
          font-size: 48px;
          line-height: 58px;
          font-weight: 600;
          color: var(--heading);
        }
        .cs-grid-section .blue-accent {
          color: var(--primary);
        }
        .cs-filters {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 20px;
        }
        .cs-filter {
          border: 1px solid var(--border);
          background: #FFFFFF;
          color: var(--body);
          border-radius: 999px;
          padding: 10px 16px;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          font-family: inherit;
        }
        .cs-filter span {
          opacity: 0.7;
        }
        .cs-filter.active {
          background: var(--primary);
          border-color: var(--primary);
          color: #FFFFFF;
        }
        .cs-filter.active span {
          opacity: 0.85;
        }
        .cs-count {
          margin: 0 0 28px;
          font-size: 14px;
          color: var(--body);
        }
        .cs-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }
        .cs-card {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .cs-card-media {
          display: block;
          border-radius: 20px;
          overflow: hidden;
          background: #EEF0F4;
          aspect-ratio: 4 / 3;
        }
        .cs-card-media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .cs-card-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }
        .cs-client {
          font-size: 13px;
          font-weight: 600;
          color: var(--heading);
        }
        .cs-meta-label {
          font-size: 12px;
          color: var(--body);
          text-align: right;
        }
        .cs-card h3 {
          margin: 0;
          font-size: 20px;
          line-height: 28px;
          font-weight: 600;
        }
        .cs-card h3 a {
          color: var(--heading);
          text-decoration: none;
        }
        .cs-card p {
          margin: 0;
          font-size: 14px;
          line-height: 22px;
          color: var(--body);
        }
        .cs-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .cs-tags span {
          display: inline-flex;
          align-items: center;
          height: 28px;
          padding: 0 10px;
          border-radius: 999px;
          background: #EAF2FF;
          color: var(--primary);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.02em;
        }
        .cs-card-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--primary);
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          margin-top: 4px;
        }
        .cs-load-more,
        .cs-empty {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          margin-top: 40px;
          text-align: center;
        }
        .cs-empty h3 {
          margin: 0;
          color: var(--heading);
        }
        .cs-empty p {
          margin: 0;
          color: var(--body);
        }
        @media (max-width: 1100px) {
          .cs-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 700px) {
          .cs-grid {
            grid-template-columns: 1fr;
          }
          .cs-grid-section h2 {
            font-size: 32px;
            line-height: 40px;
          }
        }
      `}</style>
    </section>
  );
}
