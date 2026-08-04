import React from 'react';
import { FileText, BarChart3, ShieldCheck } from 'lucide-react';
import Button from './Button';

export default function AIProductsSection({ onSelectProduct, onExploreProducts }) {
  const products = [
    {
      id: 'contract-genie',
      title: 'Contract Genie',
      description: 'Legal & Document Intelligence',
      icon: FileText
    },
    {
      id: 'ai-mrp',
      title: 'AI MRP',
      description: 'Manufacturing & Supply Chain Intelligence',
      icon: BarChart3
    },
    {
      id: 'sense-guard',
      title: 'Sense Guard',
      description: 'Operations Monitoring & Anomaly Detection',
      icon: ShieldCheck
    }
  ];

  return (
    <section className="ai-products-section" id="products">
      <div className="container">
        
        {/* Top Header Row — Section Header Outside Box */}
        <div className="ai-products-header">
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
            <Button variant="type2" size="standard" onClick={onExploreProducts}>
              View All Products
            </Button>
          </div>
        </div>

        {/* 3-Column Container of Product Cards */}
        <div className="products-grid-container">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <div 
                key={product.id} 
                className="ai-product-card"
                onClick={() => onSelectProduct && onSelectProduct(product)}
              >
                {/* Heading: SemiBold 24px */}
                <h3 className="product-title">{product.title}</h3>
                
                {/* Sub: Medium 16px (8px distance from heading) */}
                <p className="product-description">{product.description}</p>

                {/* Icon Placed 82px from the Bottom & Center-Aligned (No container box) */}
                <div className="product-icon-wrapper">
                  <Icon size={48} color="#3488FF" strokeWidth={1.8} />
                </div>
              </div>
            );
          })}
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

        /* Font color of "Intelligent products" set to primary accent blue #3488FF */
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

        /* 3 CARDS GRID CONTAINER (~1200px width total) */
        .products-grid-container {
          display: flex;
          gap: 20px;
          justify-content: space-between;
          max-width: 1200px;
          margin: 0 auto;
        }

        /* PRODUCT CARD: Width 386px, Height 310px, Padding 48px top/bottom, 36px left/right */
        .ai-product-card {
          position: relative;
          width: 386px;
          height: 310px;
          flex-shrink: 0;
          background: #EEF0F4;
          border: 1.5px solid #FFFFFF;
          border-radius: 32px;
          padding: 48px 36px;
          box-shadow: 0 4px 20px rgba(15, 23, 42, 0.02);
          box-sizing: border-box;
          cursor: pointer;
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        .ai-product-card:hover {
          transform: translateY(-4px);
          border-color: #3488FF;
          box-shadow: 0 12px 30px rgba(52, 136, 255, 0.08);
        }

        /* HEADING: SemiBold 24px */
        .product-title {
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
          font-size: 24px;
          line-height: 32px;
          color: #0F172A;
          margin: 0 0 8px 0; /* Exactly 8px distance to sub */
          padding: 0;
        }

        /* SUB: Medium 16px */
        .product-description {
          font-family: 'Poppins', sans-serif;
          font-weight: 500;
          font-size: 16px;
          line-height: 24px;
          color: #475569;
          max-width: 300px;
          margin: 0;
          padding: 0;
        }

        /* ICON: PLACED EXACTLY 82PX FROM THE BOTTOM & CENTER-ALIGNED (NO CONTAINER BOX) */
        .product-icon-wrapper {
          position: absolute;
          bottom: 82px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          justify-content: center;
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
      `}</style>
    </section>
  );
}
