import React, { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DemoModal from '../components/DemoModal';
import CTABanner from '../components/CTABanner';
import { getBlogPostById } from '../data/blog';

export default function BlogPostPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const post = getBlogPostById(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) return <Navigate to="/blog" replace />;

  return (
    <div className="app-root blog-post-page">
      <Navbar onRequestDemo={() => setModalOpen(true)} />
      <main>
        <article className="blog-read">
          <div className="container">
            <div className="section-pill">
              <span className="dot" />
              <span>{post.categoryLabel}</span>
            </div>
            <h1>{post.title}</h1>
            <p className="blog-read-lead">{post.excerpt}</p>
            <div className="blog-read-meta">
              <div>
                <strong>{post.author}</strong>
                <span>{post.authorRole}</span>
              </div>
              <div className="meta-right">
                {post.date} · {post.readTime}
              </div>
            </div>
            <div className="blog-read-media">
              <img src={post.image} alt="" />
            </div>
            <div className="blog-read-body">
              {post.body.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
              <Link to="/blog" className="back-link">
                ← Back to Insights
              </Link>
            </div>
          </div>
        </article>
        <CTABanner
          onDiscussChallenge={() => setModalOpen(true)}
          onExploreSolutions={() => navigate('/')}
        />
      </main>
      <Footer />
      <DemoModal isOpen={modalOpen} onClose={() => setModalOpen(false)} selectedSolution={null} />

      <style>{`
        .blog-read { padding:140px 0 40px; background:#fff; }
        .section-pill { display:inline-flex; align-items:center; gap:10px; height:24px; padding:0 10px; border:1px solid var(--border); border-radius:12px; font-size:12px; font-weight:500; color:var(--body); margin-bottom:20px; }
        .section-pill .dot { width:6px; height:6px; border-radius:50%; background:var(--primary); }
        .blog-read h1 { margin:0 0 16px; max-width:860px; font-size:44px; line-height:56px; font-weight:600; color:var(--heading); }
        .blog-read-lead { margin:0 0 28px; max-width:760px; font-size:16px; line-height:26px; color:var(--body); }
        .blog-read-meta { display:flex; justify-content:space-between; gap:20px; padding-bottom:24px; border-bottom:1px solid var(--border); margin-bottom:28px; }
        .blog-read-meta strong { display:block; color:var(--heading); margin-bottom:4px; }
        .blog-read-meta span, .meta-right { color:var(--body); font-size:14px; }
        .blog-read-media { border-radius:28px; overflow:hidden; background:#EEF0F4; aspect-ratio:16/9; margin-bottom:36px; }
        .blog-read-media img { width:100%; height:100%; object-fit:cover; display:block; }
        .blog-read-body { max-width:760px; display:flex; flex-direction:column; gap:18px; }
        .blog-read-body p { margin:0; font-size:16px; line-height:28px; color:var(--body); }
        .back-link { color:var(--primary); font-weight:600; text-decoration:none; margin-top:12px; }
        @media (max-width:768px){ .blog-read h1{font-size:32px; line-height:42px;} .blog-read-meta{flex-direction:column;} }
      `}</style>
    </div>
  );
}
