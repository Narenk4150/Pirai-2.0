import React from 'react';
import { Clock, Calendar } from 'lucide-react';
import Button from './Button';

export default function InsightsSection({ onNavigate }) {
  const featuredArticle = {
    title: "From POC to Production: Scaling AI in Enterprise Operations",
    excerpt: "Key considerations for moving AI initiatives from pilot to production-grade systems",
    date: "May 15, 2026",
    readTime: "8 min read",
    category: "AI IMPLEMENTATION",
    image: "/images/featured_insight.png"
  };

  const smallArticles = [
    {
      title: "Kubernetes at Enterprise Scale",
      date: "Jun 28, 2026",
      readTime: "4 min read",
      category: "CLOUD ENGINEERING",
      image: "/images/insight_kubernetes.png"
    },
    {
      title: "Modernizing Legacy Systems",
      date: "Jun 20, 2026",
      readTime: "6 min read",
      category: "AI IMPLEMENTATION",
      image: "/images/insight_legacy.png"
    },
    {
      title: "ROI of AI Automation",
      date: "Jun 19, 2026",
      readTime: "10 min read",
      category: "AUTOMATION STRATEGY",
      image: "/images/insight_roi.png"
    },
    {
      title: "Production: Scaling AI Web Apps",
      date: "Jun 06, 2026",
      readTime: "9 min read",
      category: "ENTERPRISE ARCHITECTURE",
      image: "/images/insight_scaling.png"
    }
  ];

  return (
    <section className="insights-section" id="insights">
      <div className="container">
        {/* Top Header Row */}
        <div className="insights-header">
          <div className="header-text">
            <div className="eyetray-badge">
              <span className="dot" />
              <span>Insights</span>
            </div>
            <h2 className="section-h2">
              Engineering Perspectives
            </h2>
            <p className="section-body header-body">
              Deep domain understanding across five enterprise verticals.
            </p>
          </div>

          <Button variant="secondary" onClick={() => onNavigate && onNavigate('insights')}>
            View all
          </Button>
        </div>

        {/* Main Insights Layout */}
        <div className="insights-two-col-layout">
          {/* Left Large Featured Card */}
          <div className="featured-card">
            <div className="featured-image-box">
              <img src={featuredArticle.image} alt={featuredArticle.title} className="featured-img" />
              <span className="tag-pill category-tag-overlay">{featuredArticle.category}</span>
            </div>

            <div className="featured-info">
              <h3 className="featured-title">{featuredArticle.title}</h3>
              <p className="section-body featured-body-text">{featuredArticle.excerpt}</p>

              <div className="article-meta-row">
                <span className="meta-item">
                  <Calendar size={13} />
                  {featuredArticle.date}
                </span>
                <span className="meta-bullet">•</span>
                <span className="meta-item">
                  <Clock size={13} />
                  {featuredArticle.readTime}
                </span>
              </div>
            </div>
          </div>

          {/* Right 2x2 Grid */}
          <div className="small-cards-grid">
            {smallArticles.map((article, idx) => (
              <div key={idx} className="small-card">
                <div className="small-card-img-box">
                  <img src={article.image} alt={article.title} className="small-img" />
                  <span className="tag-pill small-tag-overlay">{article.category}</span>
                </div>

                <div className="small-card-info">
                  <h4 className="small-card-title">{article.title}</h4>
                  
                  <div className="article-meta-row">
                    <span className="meta-item">{article.date}</span>
                    <span className="meta-bullet">•</span>
                    <span className="meta-item">{article.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .insights-section {
          padding: 100px 0;
          background: #FFFFFF;
          border-top: 1px solid var(--border);
        }

        .insights-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 48px;
          gap: 32px;
        }

        .header-text {
          max-width: 680px;
        }

        .header-body {
          margin-top: 12px;
        }

        .insights-two-col-layout {
          display: grid;
          grid-template-columns: 420px 1fr;
          gap: 28px;
          align-items: stretch;
        }

        .featured-card {
          background: var(--surface-alt);
          border: 1px solid var(--border);
          border-radius: 24px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          transition: border-color 0.2s ease, transform 0.2s ease;
        }

        .featured-card:hover {
          border-color: var(--primary);
          transform: translateY(-2px);
        }

        .featured-image-box {
          position: relative;
          height: 280px;
          border-radius: 16px;
          overflow: hidden;
          margin-bottom: 20px;
        }

        .featured-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .category-tag-overlay {
          position: absolute;
          top: 12px;
          left: 12px;
        }

        .featured-info {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .featured-title {
          font-size: 20px;
          font-weight: 600;
          color: var(--heading);
          line-height: 1.35;
        }

        .featured-body-text {
          font-size: 14px;
          color: var(--body);
          line-height: 1.55;
        }

        .article-meta-row {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          color: var(--muted);
          margin-top: 4px;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .meta-bullet {
          color: var(--muted);
        }

        .small-cards-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .small-card {
          background: var(--surface-alt);
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          transition: border-color 0.2s ease, transform 0.2s ease;
        }

        .small-card:hover {
          border-color: var(--primary);
          transform: translateY(-2px);
        }

        .small-card-img-box {
          position: relative;
          height: 140px;
          border-radius: 12px;
          overflow: hidden;
        }

        .small-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .small-tag-overlay {
          position: absolute;
          bottom: 8px;
          left: 8px;
        }

        .small-card-info {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .small-card-title {
          font-size: 15px;
          font-weight: 600;
          color: var(--heading);
          line-height: 1.35;
        }

        @media (max-width: 900px) {
          .insights-header {
            flex-direction: column;
            align-items: flex-start;
          }
          .insights-two-col-layout {
            grid-template-columns: 1fr;
          }
          .small-cards-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
