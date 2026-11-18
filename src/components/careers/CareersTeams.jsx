import React from 'react';
import {
  PenTool,
  MonitorSmartphone,
  Server,
  Bot,
  Cloud,
  Database,
} from 'lucide-react';
import { CAREER_TEAMS } from '../../data/careers';

const ICONS = [PenTool, MonitorSmartphone, Server, Bot, Cloud, Database];

export default function CareersTeams() {
  return (
    <section className="careers-teams">
      <div className="container">
        <div className="teams-header">
          <div className="section-pill">
            <span className="dot" />
            <span>Our Teams</span>
          </div>
          <h2>
            Different skills.{' '}
            <span className="blue-accent">One shared ambition.</span>
          </h2>
        </div>

        <div className="teams-grid">
          {CAREER_TEAMS.map((team, index) => {
            const Icon = ICONS[index] || Server;
            return (
              <article key={team.id} className="team-card">
                <div className="team-icon">
                  <Icon size={22} />
                </div>
                <h3>{team.title}</h3>
                <p>{team.description}</p>
              </article>
            );
          })}
        </div>
      </div>

      <style>{`
        .careers-teams {
          padding: 40px 0 80px;
          background: #FFFFFF;
        }
        .teams-header {
          text-align: center;
          margin-bottom: 36px;
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
        .teams-header h2 {
          margin: 0;
          font-size: 40px;
          line-height: 50px;
          font-weight: 600;
          color: var(--heading);
        }
        .teams-header .blue-accent {
          color: var(--primary);
        }
        .teams-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .team-card {
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 24px;
          background: #FFFFFF;
        }
        .team-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: #EAF2FF;
          color: var(--primary);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }
        .team-card h3 {
          margin: 0 0 8px;
          font-size: 18px;
          color: var(--heading);
        }
        .team-card p {
          margin: 0;
          font-size: 14px;
          line-height: 22px;
          color: var(--body);
        }
        @media (max-width: 900px) {
          .teams-grid {
            grid-template-columns: 1fr;
          }
          .teams-header h2 {
            font-size: 30px;
            line-height: 40px;
          }
        }
      `}</style>
    </section>
  );
}
