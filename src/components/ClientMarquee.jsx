import React from 'react';
import { Activity, Shield, Cpu, Globe, Database, Building2, Smartphone } from 'lucide-react';

export default function ClientMarquee() {
  const clients = [
    { name: 'HealthCare Global', icon: Activity, tag: 'HEALTHCARE' },
    { name: 'InsurTech Alliance', icon: Shield, tag: 'INSURANCE' },
    { name: 'CloudScale Corp', icon: Cpu, tag: 'CLOUD SYSTEMS' },
    { name: 'Apex Operations', icon: Globe, tag: 'LOGISTICS' },
    { name: 'DataSphere Tech', icon: Database, tag: 'ANALYTICS' },
    { name: 'OmniDigital Retail', icon: Building2, tag: 'ENTERPRISE' },
    { name: 'FinTech Elevate', icon: Smartphone, tag: 'BANKING' },
  ];

  const duplicatedClients = [...clients, ...clients, ...clients];

  return (
    <section className="client-marquee-section">
      <div className="container marquee-header">
        <span className="marquee-caption">TRUSTED BY LEADING ENTERPRISES WORLDWIDE</span>
      </div>

      <div className="marquee-container">
        <div className="marquee-track">
          {duplicatedClients.map((client, index) => {
            const IconComponent = client.icon;
            return (
              <div key={index} className="client-card">
                <div className="client-icon-box">
                  <IconComponent size={20} />
                </div>
                <div className="client-info">
                  <span className="client-name">{client.name}</span>
                  <span className="tag-pill">{client.tag}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .client-marquee-section {
          padding: 48px 0;
          background: #FFFFFF;
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          overflow: hidden;
        }

        .marquee-header {
          text-align: center;
          margin-bottom: 24px;
        }

        .marquee-caption {
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 1px;
          color: var(--muted);
          text-transform: uppercase;
        }

        .marquee-container {
          position: relative;
          width: 100%;
          overflow: hidden;
        }

        .marquee-track {
          display: flex;
          align-items: center;
          gap: 24px;
          width: max-content;
          animation: marqueeScroll 30s linear infinite;
        }

        .client-card {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 20px;
          background: var(--surface-alt);
          border: 1px solid var(--border);
          border-radius: 16px;
        }

        .client-icon-box {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: #FFFFFF;
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .client-info {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .client-name {
          font-size: 14px;
          font-weight: 600;
          color: var(--heading);
          white-space: nowrap;
        }

        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </section>
  );
}
