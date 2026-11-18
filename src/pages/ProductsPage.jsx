import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DemoModal from '../components/DemoModal';
import CTABanner from '../components/CTABanner';
import EngineeringChallengeCTA from '../components/EngineeringChallengeCTA';
import Button from '../components/Button';
import { PRODUCTS } from '../data/products';

export default function ProductsPage() {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="app-root products-page">
      <Navbar onRequestDemo={() => setModalOpen(true)} />
      <main>
        <section className="products-hero">
          <div className="container">
            <div className="section-pill">
              <span className="dot" />
              <span>Our Products</span>
            </div>
            <h1>
              Technology Products Built to Solve{' '}
              <span className="accent-italic">Real Business Challenges.</span>
            </h1>
            <p>
              Explore Pirai’s purpose-built digital products that help businesses simplify workflows, improve operational visibility and make smarter decisions.
            </p>
            <div className="products-hero-actions">
              <Button variant="type1" size="hero" onClick={() => setModalOpen(true)}>
                Discuss Your Challenge
              </Button>
              <Button variant="type2" size="hero" onClick={() => navigate('/')}>
                Explore Capabilities
              </Button>
            </div>
            <div className="products-stats">
              <div><strong>7+</strong><span>Products</span></div>
              <div className="line" />
              <div><strong>5+</strong><span>Industries</span></div>
              <div className="line" />
              <div><strong>10wk</strong><span>Avg. pilot to production</span></div>
            </div>
          </div>
        </section>

        <section className="products-list">
          <div className="container">
            <div className="list-header">
              <h2>
                Explore Our <span className="blue-accent">Products</span>
              </h2>
              <p>Discover solutions designed around specific business needs and operational challenges.</p>
            </div>

            <div className="product-rows">
              {PRODUCTS.map((product) => (
                <article key={product.id} className="product-row">
                  <div className="product-row-copy">
                    <div className="product-number">{product.number}</div>
                    <h3>{product.title}</h3>
                    <span className="product-tag">{product.tag}</span>
                    <p>{product.summary}</p>
                    <Button
                      variant="type2"
                      size="hero"
                      onClick={() => navigate(`/products/${product.id}`)}
                    >
                      View Product Details
                    </Button>
                  </div>
                  <div className="product-row-media">
                    <div className="product-placeholder">{product.title}</div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <EngineeringChallengeCTA
          onDiscussChallenge={() => setModalOpen(true)}
          onExploreSolutions={() => navigate('/')}
        />
        <CTABanner
          onDiscussChallenge={() => setModalOpen(true)}
          onExploreSolutions={() => navigate('/')}
        />
      </main>
      <Footer />
      <DemoModal isOpen={modalOpen} onClose={() => setModalOpen(false)} selectedSolution={null} />

      <style>{`
        .products-hero, .products-list { background:#fff; }
        .products-hero { padding:140px 0 48px; }
        .section-pill { display:inline-flex; align-items:center; gap:10px; height:24px; padding:0 10px; border:1px solid var(--border); border-radius:12px; font-size:12px; font-weight:500; color:var(--body); margin-bottom:20px; }
        .section-pill .dot { width:6px; height:6px; border-radius:50%; background:var(--primary); }
        .products-hero h1 { margin:0 0 16px; max-width:820px; font-size:52px; line-height:64px; font-weight:600; color:var(--heading); }
        .products-hero .accent-italic { color:var(--primary); font-style:italic; font-weight:500; }
        .products-hero > .container > p { margin:0 0 28px; max-width:680px; color:var(--body); font-size:16px; line-height:26px; }
        .products-hero-actions { display:flex; flex-wrap:wrap; gap:12px; margin-bottom:36px; }
        .products-stats { display:flex; align-items:stretch; border-top:1px solid var(--border); border-bottom:1px solid var(--border); padding:24px 0; max-width:720px; }
        .products-stats > div:not(.line) { flex:1; text-align:center; }
        .products-stats strong { display:block; font-size:32px; color:var(--heading); margin-bottom:6px; }
        .products-stats span { font-size:12px; letter-spacing:.04em; text-transform:uppercase; color:var(--body); }
        .products-stats .line { width:1px; background:var(--border); }
        .products-list { padding:48px 0 40px; }
        .list-header { text-align:center; margin-bottom:40px; }
        .list-header h2 { margin:0 0 12px; font-size:40px; line-height:50px; font-weight:600; color:var(--heading); }
        .list-header .blue-accent { color:var(--primary); }
        .list-header p { margin:0 auto; max-width:560px; color:var(--body); }
        .product-rows { display:flex; flex-direction:column; gap:28px; }
        .product-row { display:grid; grid-template-columns:1fr 1.1fr; gap:28px; border:1px solid var(--border); border-radius:28px; padding:28px; background:#fff; }
        .product-number { color:var(--primary); font-weight:600; margin-bottom:10px; }
        .product-row h3 { margin:0 0 12px; font-size:32px; color:var(--heading); }
        .product-tag { display:inline-flex; align-items:center; height:28px; padding:0 10px; border-radius:999px; background:#EAF2FF; color:var(--primary); font-size:11px; font-weight:600; margin-bottom:14px; }
        .product-row-copy p { margin:0 0 24px; color:var(--body); font-size:15px; line-height:24px; max-width:460px; }
        .product-row-media { border-radius:20px; overflow:hidden; background:#EEF0F4; min-height:280px; display:flex; align-items:center; justify-content:center; }
        .product-placeholder { font-size:24px; font-weight:600; color:var(--primary); opacity:.7; }
        @media (max-width:900px){
          .products-hero h1{font-size:34px; line-height:44px;}
          .product-row{grid-template-columns:1fr;}
          .products-stats{flex-direction:column; gap:16px; border:none;}
          .products-stats .line{display:none;}
        }
      `}</style>
    </div>
  );
}
