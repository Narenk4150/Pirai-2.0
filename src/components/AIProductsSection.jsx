import React from 'react';
import Button from './Button';
import { HOMEPAGE_ASSETS } from '../data/homepageAssets';

export default function AIProductsSection({ onSelectProduct, onExploreProducts }) {
  const products = [
    {
      id: 'contract-genie',
      title: 'Contract Genie',
      description: 'Legal & Document Intelligence',
      icon: HOMEPAGE_ASSETS.products['Contract Genie'],
    },
    {
      id: 'ai-mrp',
      title: 'AI MRP',
      description: 'Manufacturing & Supply Chain Intelligence',
      icon: HOMEPAGE_ASSETS.products['AI MRP'],
    },
    {
      id: 'sense-guard',
      title: 'Sense Guard',
      description: 'Operations Monitoring & Anomaly Detection',
      icon: HOMEPAGE_ASSETS.products['Sense Guard'],
    }
  ];

  const handleKeyDown = (event, product) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onSelectProduct && onSelectProduct(product);
    }
  };

  return (
    <section className="ai-products-section" id="products">
      <div className="container">
        <div className="ai-products-header" data-reveal>
          <div className="header-text">
            <div className="eyetray-badge">
              <span className="dot" />
              <span>Our AI Products</span>
            </div>
            <h2 className="section-h2">
              <span className="blue-accent">Intelligent products</span>, built from the same engineering discipline.
            </h2>
            <p className="section-body header-body">
              Platforms born from client work, refined into products for the same regulated industries we build for.
            </p>
          </div>

          <div className="header-right">
            <Button variant="type2" size="hero" onClick={onExploreProducts}>
              View All Products
            </Button>
          </div>
        </div>

        <div
          className="products-grid-container"
          data-reveal-stagger="0.1"
          data-reveal-y="28"
          data-reveal-duration="0.6"
          data-reveal-scale="1.02"
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="ai-product-card"
              data-reveal-child
              role="button"
              tabIndex={0}
              onClick={() => onSelectProduct && onSelectProduct(product)}
              onKeyDown={(event) => handleKeyDown(event, product)}
            >
              <span className="product-card-gradient" aria-hidden="true" />

              <h3 className="product-title">{product.title}</h3>
              <p className="product-description">{product.description}</p>

              <div className="product-icon-wrapper">
                <img
                  src={product.icon}
                  alt=""
                  width={72}
                  height={72}
                  draggable={false}
                  data-reveal-img="1.08"
                />
              </div>

              <span className="product-card-cta">
                View Details
                <span className="product-cta-arrow" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M7 17L17 7M17 7H9M17 7V15"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .ai-products-section {
          padding: 80px 0;
          background-color: #FFFFFF;
        }

        .ai-products-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 40px;
          gap: 32px;
        }

        .header-text {
          max-width: 680px;
        }

        .section-h2 {
          font-family: 'Poppins', sans-serif;
          font-size: 40px;
          font-weight: 600;
          line-height: 50px;
          color: #0F172A;
          margin-bottom: 16px;
        }

        .blue-accent {
          color: #3488FF;
        }

        .header-body {
          font-family: 'Poppins', sans-serif;
          font-size: 16px;
          line-height: 26px;
          color: #475569;
          max-width: 600px;
        }

        .products-grid-container {
          display: flex;
          gap: 20px;
          justify-content: space-between;
          max-width: 1200px;
          margin: 0 auto;
        }

        /* PRODUCT CARD — layout unchanged; hover layers added */
        .ai-product-card {
          position: relative;
          width: 386px;
          height: 310px;
          flex-shrink: 0;
          background: #EEF0F4;
          border: none;
          border-radius: 32px;
          padding: 48px 36px;
          box-shadow: 0 4px 20px rgba(15, 23, 42, 0.02);
          box-sizing: border-box;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          overflow: hidden;
          isolation: isolate;
          outline: none;
          transition: box-shadow 0.35s cubic-bezier(0.65, 0, 0.35, 1);
        }

        /* Rising #3488FF → #69A8FF gradient */
        .product-card-gradient {
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: linear-gradient(180deg, #3488FF 0%, #69A8FF 100%);
          transform: scaleY(0);
          transform-origin: bottom center;
          transition: transform 0.55s cubic-bezier(0.65, 0, 0.35, 1);
          z-index: 0;
          pointer-events: none;
          will-change: transform;
        }

        .product-title,
        .product-description,
        .product-icon-wrapper,
        .product-card-cta {
          position: relative;
          z-index: 1;
        }

        .product-title {
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
          font-size: 24px;
          line-height: 32px;
          color: #0F172A;
          margin: 0 0 8px 0;
          padding: 0;
          transition: color 0.3s cubic-bezier(0.65, 0, 0.35, 1);
        }

        .product-description {
          font-family: 'Poppins', sans-serif;
          font-weight: 500;
          font-size: 16px;
          line-height: 24px;
          color: #475569;
          max-width: 300px;
          margin: 0;
          padding: 0;
          transition: color 0.3s cubic-bezier(0.65, 0, 0.35, 1);
        }

        .product-icon-wrapper {
          position: absolute;
          bottom: 82px;
          left: 50%;
          transform: translateX(-50%) translateY(0) scale(1);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.4s cubic-bezier(0.65, 0, 0.35, 1);
          will-change: transform;
        }

        .product-icon-wrapper img {
          display: block;
          width: 72px;
          height: 72px;
          object-fit: contain;
          pointer-events: none;
          user-select: none;
          transition: filter 0.35s cubic-bezier(0.65, 0, 0.35, 1);
        }

        /* View Details as text hyperlink — no box, centered */
        .product-card-cta {
          position: absolute;
          left: 50%;
          bottom: 28px;
          transform: translateX(-50%) translateY(6px);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-family: 'Poppins', sans-serif;
          font-size: 14px;
          font-weight: 500;
          line-height: 20px;
          color: #FFFFFF;
          text-decoration: none;
          background: none;
          border: none;
          padding: 0;
          margin: 0;
          opacity: 0;
          pointer-events: none;
          transition:
            opacity 0.3s cubic-bezier(0.65, 0, 0.35, 1),
            transform 0.3s cubic-bezier(0.65, 0, 0.35, 1),
            color 0.3s cubic-bezier(0.65, 0, 0.35, 1);
        }

        .product-cta-arrow {
          display: inline-flex;
          color: currentColor;
          transition: transform 0.28s cubic-bezier(0.65, 0, 0.35, 1);
        }

        /* Hover / focus / active (touch) — independent per card */
        .ai-product-card:hover,
        .ai-product-card:focus-visible,
        .ai-product-card:active {
          box-shadow: 0 14px 32px rgba(52, 136, 255, 0.28);
        }

        .ai-product-card:hover .product-card-gradient,
        .ai-product-card:focus-visible .product-card-gradient,
        .ai-product-card:active .product-card-gradient {
          transform: scaleY(1);
        }

        .ai-product-card:hover .product-title,
        .ai-product-card:focus-visible .product-title,
        .ai-product-card:active .product-title {
          color: #FFFFFF;
        }

        .ai-product-card:hover .product-description,
        .ai-product-card:focus-visible .product-description,
        .ai-product-card:active .product-description {
          color: rgba(255, 255, 255, 0.88);
        }

        .ai-product-card:hover .product-icon-wrapper,
        .ai-product-card:focus-visible .product-icon-wrapper,
        .ai-product-card:active .product-icon-wrapper {
          transform: translateX(-50%) translateY(-10px) scale(1.06);
        }

        .ai-product-card:hover .product-icon-wrapper img,
        .ai-product-card:focus-visible .product-icon-wrapper img,
        .ai-product-card:active .product-icon-wrapper img {
          filter: brightness(0) invert(1);
        }

        .ai-product-card:hover .product-card-cta,
        .ai-product-card:focus-visible .product-card-cta,
        .ai-product-card:active .product-card-cta {
          opacity: 1;
          transform: translateX(-50%) translateY(0);
          color: #FFFFFF;
          text-decoration: underline;
          text-underline-offset: 3px;
        }

        .ai-product-card:hover .product-cta-arrow,
        .ai-product-card:focus-visible .product-cta-arrow,
        .ai-product-card:active .product-cta-arrow {
          transform: translate(2px, -2px);
        }

        @media (max-width: 1100px) {
          .ai-products-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .products-grid-container {
            flex-direction: column;
            align-items: center;
          }

          .ai-product-card {
            width: 100%;
            max-width: 386px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .product-card-gradient,
          .product-title,
          .product-description,
          .product-icon-wrapper,
          .product-card-cta,
          .product-cta-arrow,
          .ai-product-card {
            transition: none !important;
          }

          .ai-product-card:hover .product-icon-wrapper,
          .ai-product-card:focus-visible .product-icon-wrapper,
          .ai-product-card:active .product-icon-wrapper {
            transform: translateX(-50%);
          }

          .ai-product-card:hover .product-cta-arrow,
          .ai-product-card:focus-visible .product-cta-arrow,
          .ai-product-card:active .product-cta-arrow {
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}
