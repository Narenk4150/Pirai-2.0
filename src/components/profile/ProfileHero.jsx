import React from 'react';
import { UserRound } from 'lucide-react';
import { getLeaderInitials } from '../../data/leaders';

function LinkedInIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.06-2.065 2.064 2.064 0 112.06 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function ProfileHero({ leader }) {
  const initials = getLeaderInitials(leader.name);

  return (
    <section className="profile-hero">
      <div className="container">
        <div className="profile-intro">
          <div className="section-pill">
            <span className="dot" />
            <span>Member Details</span>
          </div>
          <h1>{leader.name}</h1>
          <p className="profile-role">{leader.role}</p>
          {leader.quote && <p className="profile-quote">{leader.quote}</p>}
        </div>

        <div className="profile-card">
          <aside className="profile-card-aside">
            <div className="profile-photo">
              {leader.photo ? (
                <img src={leader.photo} alt={leader.name} />
              ) : (
                <span>{initials}</span>
              )}
            </div>
            <div className="profile-aside-meta">
              <h2>{leader.name}</h2>
              <p>{leader.role}</p>
              <div className="profile-socials">
                <span className="profile-social" aria-hidden="true">
                  <UserRound size={18} />
                </span>
                <a
                  className="profile-social"
                  href={leader.linkedin || '#'}
                  aria-label={`${leader.name} on LinkedIn`}
                >
                  <LinkedInIcon size={16} />
                </a>
              </div>
            </div>
          </aside>

          <div className="profile-card-body">
            <div className="profile-card-heading">
              <h2>{leader.name}</h2>
              <p>{leader.role}</p>
            </div>
            <div className="profile-divider" />
            <div className="profile-bio">
              {leader.bio.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .profile-hero {
          padding: 140px 0 40px;
          background: #FFFFFF;
        }
        .profile-intro {
          text-align: center;
          max-width: 820px;
          margin: 0 auto 48px;
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
          margin-bottom: 24px;
        }
        .section-pill .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--primary);
        }
        .profile-intro h1 {
          margin: 0 0 8px;
          font-size: 56px;
          line-height: 68px;
          font-weight: 600;
          color: var(--heading);
        }
        .profile-role {
          margin: 0 0 20px;
          font-size: 20px;
          line-height: 30px;
          font-weight: 500;
          color: var(--heading);
        }
        .profile-quote {
          margin: 0;
          font-size: 18px;
          line-height: 30px;
          font-style: italic;
          color: var(--body);
        }
        .profile-card {
          display: grid;
          grid-template-columns: 300px 1fr;
          gap: 48px;
          background: var(--primary);
          border-radius: 40px;
          padding: 40px;
          color: #FFFFFF;
        }
        .profile-card-aside {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 20px;
        }
        .profile-photo {
          width: 100%;
          aspect-ratio: 1;
          border-radius: 24px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.16);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .profile-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .profile-photo span {
          font-size: 56px;
          font-weight: 600;
          letter-spacing: 1px;
        }
        .profile-aside-meta h2 {
          margin: 0 0 4px;
          font-size: 22px;
          font-weight: 600;
        }
        .profile-aside-meta p {
          margin: 0 0 16px;
          font-size: 14px;
          opacity: 0.92;
        }
        .profile-socials {
          display: flex;
          justify-content: center;
          gap: 12px;
        }
        .profile-social {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.45);
          background: rgba(255, 255, 255, 0.12);
          color: #FFFFFF;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
        }
        .profile-card-body {
          display: flex;
          flex-direction: column;
          gap: 24px;
          padding-top: 8px;
        }
        .profile-card-heading h2 {
          margin: 0 0 6px;
          font-size: 40px;
          line-height: 48px;
          font-weight: 600;
        }
        .profile-card-heading p {
          margin: 0;
          font-size: 18px;
          opacity: 0.95;
        }
        .profile-divider {
          height: 1px;
          background: rgba(255, 255, 255, 0.35);
        }
        .profile-bio {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .profile-bio p {
          margin: 0;
          font-size: 16px;
          line-height: 28px;
          color: rgba(255, 255, 255, 0.96);
        }
        @media (max-width: 900px) {
          .profile-card {
            grid-template-columns: 1fr;
            gap: 32px;
            padding: 28px;
            border-radius: 28px;
          }
          .profile-photo {
            max-width: 280px;
          }
          .profile-intro h1 {
            font-size: 40px;
            line-height: 50px;
          }
          .profile-card-heading h2 {
            font-size: 28px;
            line-height: 36px;
          }
        }
      `}</style>
    </section>
  );
}
