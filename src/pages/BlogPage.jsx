import React, { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DemoModal from '../components/DemoModal';
import CTABanner from '../components/CTABanner';
import {
  BLOG_CATEGORIES,
  BLOG_POSTS,
  getBlogCategoryCounts,
} from '../data/blog';

export default function BlogPage() {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All Insights');
  const counts = useMemo(() => getBlogCategoryCounts(), []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return BLOG_POSTS.filter((post) => {
      const categoryOk =
        activeCategory === 'All Insights' || post.category === activeCategory;
      const queryOk =
        !q ||
        [post.title, post.cardTitle, post.excerpt, post.category]
          .join(' ')
          .toLowerCase()
          .includes(q);
      return categoryOk && queryOk;
    });
  }, [activeCategory, query]);

  return (
    <div className="app-root blog-page">
      <Navbar onRequestDemo={() => setModalOpen(true)} />
      <main>
        <section className="blog-hero">
          <div className="container">
            <div className="section-pill">
              <span className="dot" />
              <span>Insights and Perspectives</span>
            </div>
            <h1>
              Insights that move{' '}
              <span className="accent-italic">technology forward.</span>
            </h1>
            <p>
              Perspectives and practical knowledge on AI, engineering and digital transformation.
            </p>
          </div>
        </section>

        <section className="blog-explore">
          <div className="container">
            <div className="section-pill">
              <span className="dot" />
              <span>Explore Insights</span>
            </div>
            <h2>
              <span className="blue-accent">Explore our</span> latest thinking.
            </h2>

            <form className="blog-search" onSubmit={(e) => e.preventDefault()}>
              <Search size={18} />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search articles by titles or Keyword"
                aria-label="Search articles"
              />
            </form>

            <div className="blog-filters">
              {BLOG_CATEGORIES.map((category) => {
                const active = category === activeCategory;
                const count = String(counts[category] ?? 0).padStart(2, '0');
                return (
                  <button
                    key={category}
                    type="button"
                    className={`blog-filter ${active ? 'active' : ''}`}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category} <span>{count}</span>
                  </button>
                );
              })}
            </div>

            <div className="blog-grid">
              {filtered.map((post) => (
                <article key={post.id} className="blog-card">
                  <Link to={`/blog/${post.id}`} className="blog-card-media">
                    <img src={post.image} alt="" />
                    <span>{post.categoryLabel}</span>
                  </Link>
                  <div className="blog-card-body">
                    <h3>
                      <Link to={`/blog/${post.id}`}>{post.cardTitle || post.title}</Link>
                    </h3>
                    <p>{post.excerpt}</p>
                    <div className="blog-card-meta">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <CTABanner
          onDiscussChallenge={() => setModalOpen(true)}
          onExploreSolutions={() => navigate('/')}
        />
      </main>
      <Footer />
      <DemoModal isOpen={modalOpen} onClose={() => setModalOpen(false)} selectedSolution={null} />

      <style>{`
        .blog-hero, .blog-explore { background:#fff; }
        .blog-hero { padding:140px 0 48px; text-align:center; }
        .blog-hero h1 { margin:0 auto 16px; max-width:780px; font-size:52px; line-height:64px; font-weight:600; color:var(--heading); }
        .blog-hero .accent-italic { color:var(--primary); font-style:italic; font-weight:500; }
        .blog-hero p { margin:0 auto; max-width:620px; color:var(--body); font-size:16px; line-height:26px; }
        .blog-explore { padding:24px 0 80px; }
        .section-pill { display:inline-flex; align-items:center; gap:10px; height:24px; padding:0 10px; border:1px solid var(--border); border-radius:12px; font-size:12px; font-weight:500; color:var(--body); margin-bottom:20px; }
        .section-pill .dot { width:6px; height:6px; border-radius:50%; background:var(--primary); }
        .blog-explore h2 { margin:0 0 24px; font-size:40px; line-height:50px; font-weight:600; color:var(--heading); }
        .blog-explore .blue-accent { color:var(--primary); }
        .blog-search { display:flex; align-items:center; gap:12px; border:1px solid var(--border); border-radius:16px; padding:14px 18px; margin-bottom:20px; color:var(--body); }
        .blog-search input { flex:1; border:none; outline:none; font:inherit; background:transparent; color:var(--heading); }
        .blog-filters { display:flex; flex-wrap:wrap; gap:10px; margin-bottom:32px; }
        .blog-filter { border:1px solid var(--border); background:#fff; color:var(--body); border-radius:999px; padding:10px 16px; font:inherit; font-size:13px; cursor:pointer; }
        .blog-filter.active { background:var(--primary); border-color:var(--primary); color:#fff; }
        .blog-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; }
        .blog-card { display:flex; flex-direction:column; gap:16px; }
        .blog-card-media { position:relative; display:block; border-radius:20px; overflow:hidden; aspect-ratio:16/10; background:#EEF0F4; }
        .blog-card-media img { width:100%; height:100%; object-fit:cover; display:block; }
        .blog-card-media span { position:absolute; top:14px; left:14px; background:rgba(255,255,255,.92); border-radius:999px; padding:6px 10px; font-size:11px; font-weight:600; color:var(--heading); }
        .blog-card h3 { margin:0 0 8px; font-size:20px; line-height:28px; }
        .blog-card h3 a { color:var(--heading); text-decoration:none; }
        .blog-card p { margin:0 0 12px; color:var(--body); font-size:14px; line-height:22px; }
        .blog-card-meta { display:flex; gap:16px; color:var(--body); font-size:13px; }
        @media (max-width:1000px){ .blog-grid{grid-template-columns:1fr 1fr;} .blog-hero h1{font-size:36px; line-height:46px;} }
        @media (max-width:700px){ .blog-grid{grid-template-columns:1fr;} }
      `}</style>
    </div>
  );
}
