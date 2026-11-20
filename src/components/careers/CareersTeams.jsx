import React from 'react';
import { CAREER_TEAMS } from '../../data/careers';

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
            Different skills.
            <span className="blue-accent teams-title-line">One shared ambition.</span>
          </h2>
          <p>
            From product design to intelligent automation — every capability area at Pirai works toward the same outcome.
          </p>
        </div>

        <div className="teams-grid">
          {CAREER_TEAMS.map((team) => (
            <article key={team.id} className="team-card">
              <div className="team-icon">
                <img src={team.icon} alt="" width={28} height={28} />
              </div>
              <h3>{team.title}</h3>
              <p>{team.description}</p>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .careers-teams {
          padding: 40px 0 80px;
          background: #FFFFFF;
        }
        .teams-header {
          text-align: center;
          margin-bottom: 40px;
          max-width: 720px;
          margin-left: auto;
          margin-right: auto;
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
          margin: 0 0 14px;
          font-family: 'Poppins', sans-serif;
          font-size: 40px;
          line-height: 50px;
          font-weight: 600;
          color: var(--heading);
        }
        .teams-title-line {
          display: block;
        }
        .teams-header .blue-accent {
          color: var(--primary);
        }
        .teams-header p {
          margin: 0 auto;
          max-width: 560px;
          font-size: 16px;
          line-height: 26px;
          color: var(--body);
        }
        .teams-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
          align-items: stretch;
        }
        .team-card {
          background: #F4F6FA;
          border: none;
          border-radius: 20px;
          padding: 28px 26px;
          min-height: 200px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          box-sizing: border-box;
        }
        .team-icon {
          width: 44px;
          height: 44px;
          display: inline-flex;
          align-items: center;
          justify-content: flex-start;
          margin-bottom: 18px;
        }
        .team-icon img {
          width: 28px;
          height: 28px;
          object-fit: contain;
          display: block;
        }
        .team-card h3 {
          margin: 0 0 10px;
          font-family: 'Poppins', sans-serif;
          font-size: 18px;
          line-height: 26px;
          font-weight: 600;
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
          .team-card {
            min-height: 0;
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
