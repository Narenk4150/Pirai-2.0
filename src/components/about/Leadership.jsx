import React from 'react';
import { Link } from 'react-router-dom';
import { ABOUT_ASSETS } from '../../data/aboutAssets';
import { LEADERS, getLeaderInitials } from '../../data/leaders';

const PROFILE_ICON = ABOUT_ASSETS.leaderIcons.profile;
const LINKEDIN_ICON = ABOUT_ASSETS.leaderIcons.linkedin;

export default function Leadership() {
  return (
    <section className="leadership-section" id="leadership">
      <div className="container">
        <div className="leadership-header" data-reveal>
          <div className="section-pill">
            <span className="dot" />
            <span>Leadership</span>
          </div>
          <h2 className="leadership-title">The people leading Pirai.</h2>
          <p className="leadership-sub">
            Meet the team accountable for Pirai’s direction and delivery.
          </p>
        </div>

        <div className="leadership-grid">
          {LEADERS.map((person, index) => {
            const profileTo = `/profile/${person.slug}`;
            const linkedinHref = person.linkedin && person.linkedin !== '#'
              ? person.linkedin
              : person.profileUrl || profileTo;

            return (
              <article
                key={person.slug}
                className="leader-card"
                data-reveal
                data-reveal-delay={0.06 * ((index % 4) + 1)}
                data-reveal-y="22"
              >
                <Link to={profileTo} className="leader-photo" aria-label={`View ${person.name} profile`}>
                  {person.photo ? (
                    <img src={person.photo} alt={person.name} />
                  ) : (
                    <span>{getLeaderInitials(person.name)}</span>
                  )}
                </Link>

                <div className="leader-details">
                  <Link to={profileTo} className="leader-copy">
                    <h3>{person.name}</h3>
                    <p>{person.role}</p>
                  </Link>

                  <div className="leader-socials">
                    <Link
                      to={profileTo}
                      className="social-btn social-btn-profile"
                      aria-label={`View ${person.name} profile`}
                    >
                      <img src={PROFILE_ICON} alt="" width={18} height={18} />
                    </Link>
                    <a
                      href={linkedinHref}
                      className="social-btn social-btn-linkedin"
                      aria-label={`${person.name} on LinkedIn`}
                      target={linkedinHref.startsWith('http') ? '_blank' : undefined}
                      rel={linkedinHref.startsWith('http') ? 'noopener noreferrer' : undefined}
                      onClick={(event) => event.stopPropagation()}
                    >
                      <img src={LINKEDIN_ICON} alt="" width={18} height={18} />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <style>{`
        .leadership-section {
          padding: 100px 0 112px;
          background: #FFFFFF;
        }

        .leadership-header {
          text-align: center;
          margin-bottom: 64px;
        }

        .leadership-section .section-pill {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          height: 24px;
          padding: 0 10px;
          border: 1px solid var(--border);
          border-radius: 12px;
          font-family: 'Poppins', sans-serif;
          font-size: 12px;
          font-weight: 500;
          color: var(--body);
          margin: 0 auto 20px;
        }

        .leadership-section .section-pill .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--primary);
        }

        .leadership-title {
          font-family: 'Poppins', sans-serif;
          font-size: 48px;
          line-height: 60px;
          font-weight: 500;
          color: var(--heading);
          margin: 0 0 12px;
        }

        .leadership-sub {
          font-family: 'Poppins', sans-serif;
          font-size: 16px;
          line-height: 26px;
          color: var(--body);
          margin: 0;
        }

        .leadership-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 32px;
        }

        .leader-card {
          width: calc((100% - 96px) / 4);
          max-width: 286px;
          min-width: 240px;
          background: #EEF0F4;
          border: none;
          border-radius: 28px;
          padding: 12px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          gap: 12px;
          text-decoration: none;
          color: inherit;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .leader-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 28px rgba(15, 23, 42, 0.06);
        }

        .leader-photo {
          display: block;
          width: 100%;
          aspect-ratio: 1 / 1.08;
          min-height: 248px;
          border-radius: 20px;
          background: #E2E8F0;
          overflow: hidden;
          text-decoration: none;
        }

        .leader-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
          transition: transform 0.65s ease;
        }

        .leader-card:hover .leader-photo img {
          transform: scale(1.03);
        }

        .leader-photo span {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Poppins', sans-serif;
          font-size: 42px;
          font-weight: 600;
          color: var(--primary);
          letter-spacing: 1px;
        }

        .leader-details {
          background: #FFFFFF;
          border-radius: 18px;
          padding: 18px 18px 16px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          flex: 1;
        }

        .leader-copy {
          text-decoration: none;
          color: inherit;
        }

        .leader-copy h3 {
          font-family: 'Poppins', sans-serif;
          font-size: 16px;
          font-weight: 600;
          line-height: 24px;
          color: var(--heading);
          margin: 0 0 4px;
        }

        .leader-copy p {
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          line-height: 20px;
          color: var(--body);
          margin: 0;
        }

        .leader-socials {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: auto;
        }

        .social-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #3488FF;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: background-color 0.2s ease, transform 0.2s ease;
        }

        .social-btn img {
          width: 18px;
          height: 18px;
          display: block;
        }

        .social-btn:hover {
          background: #1F6FE0;
          transform: translateY(-1px);
        }

        @media (max-width: 1180px) {
          .leader-card {
            width: calc((100% - 64px) / 3);
            max-width: 300px;
          }
        }

        @media (max-width: 900px) {
          .leadership-section {
            padding: 88px 0 96px;
          }
          .leadership-header {
            margin-bottom: 48px;
          }
          .leadership-title {
            font-size: 40px;
            line-height: 50px;
          }
          .leadership-grid {
            gap: 24px;
          }
          .leader-card {
            width: calc((100% - 24px) / 2);
            max-width: 340px;
            min-width: 0;
          }
        }

        @media (max-width: 640px) {
          .leadership-title {
            font-size: 32px;
            line-height: 40px;
          }
          .leadership-header {
            margin-bottom: 40px;
          }
          .leadership-grid {
            gap: 20px;
          }
          .leader-card {
            width: 100%;
            max-width: 360px;
          }
          .leader-photo {
            min-height: 220px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .leader-card,
          .leader-photo img,
          .social-btn {
            transition: none !important;
          }
          .leader-card:hover,
          .social-btn:hover {
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}
