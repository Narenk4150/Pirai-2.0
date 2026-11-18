import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Briefcase, MapPin, Search } from 'lucide-react';
import Button from '../Button';
import { JOB_OPENINGS } from '../../data/careers';

export default function CareersJobs() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return JOB_OPENINGS;
    return JOB_OPENINGS.filter((job) =>
      [job.title, job.shortTitle, job.department, job.location, job.experience]
        .join(' ')
        .toLowerCase()
        .includes(q)
    );
  }, [query]);

  return (
    <section className="careers-jobs" id="open-positions">
      <div className="container">
        <div className="jobs-header">
          <div className="section-pill">
            <span className="dot" />
            <span>Current Opportunities</span>
          </div>
          <h2>
            Find the opportunity that{' '}
            <span className="blue-accent">moves you forward.</span>
          </h2>
        </div>

        <form
          className="jobs-search"
          onSubmit={(event) => event.preventDefault()}
        >
          <Search size={18} />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search roles, teams, or keywords"
            aria-label="Search open positions"
          />
          <Button variant="type1" size="standard" showArrow={false} type="submit">
            Search
          </Button>
        </form>

        <div className="jobs-list">
          {filtered.map((job) => (
            <article key={job.id} className="job-card">
              <div className="job-copy">
                <h3>{job.shortTitle || job.title}</h3>
                <div className="job-meta">
                  <span><MapPin size={16} /> {job.location}</span>
                  <span><Briefcase size={16} /> {job.experience}</span>
                </div>
              </div>
              <Button
                variant="type2"
                size="hero"
                onClick={() => navigate(`/careers/${job.id}`)}
              >
                Apply Now
              </Button>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="jobs-empty">
            <h3>No matching roles right now</h3>
            <p>Try another keyword, or submit your profile and we’ll stay in touch.</p>
          </div>
        )}
      </div>

      <style>{`
        .careers-jobs {
          padding: 40px 0 80px;
          background: #FFFFFF;
        }
        .jobs-header {
          text-align: center;
          margin-bottom: 28px;
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
        .jobs-header h2 {
          margin: 0;
          font-size: 40px;
          line-height: 50px;
          font-weight: 600;
          color: var(--heading);
        }
        .jobs-header .blue-accent {
          color: var(--primary);
        }
        .jobs-search {
          display: flex;
          align-items: center;
          gap: 12px;
          background: #FFFFFF;
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 10px 12px 10px 18px;
          margin-bottom: 28px;
          color: var(--body);
        }
        .jobs-search input {
          flex: 1;
          border: none;
          outline: none;
          font: inherit;
          font-size: 15px;
          color: var(--heading);
          background: transparent;
        }
        .jobs-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .job-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 24px 28px;
          background: #FFFFFF;
        }
        .job-card h3 {
          margin: 0 0 12px;
          font-size: 20px;
          color: var(--heading);
        }
        .job-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 18px;
          color: var(--body);
          font-size: 14px;
        }
        .job-meta span {
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .jobs-empty {
          text-align: center;
          padding: 40px 0;
          color: var(--body);
        }
        .jobs-empty h3 {
          margin: 0 0 8px;
          color: var(--heading);
        }
        @media (max-width: 768px) {
          .job-card {
            flex-direction: column;
            align-items: flex-start;
          }
          .jobs-header h2 {
            font-size: 30px;
            line-height: 40px;
          }
          .jobs-search {
            flex-wrap: wrap;
          }
        }
      `}</style>
    </section>
  );
}
