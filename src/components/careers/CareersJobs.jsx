import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import Button from '../Button';
import { CAREER_META_ICONS, JOB_OPENINGS } from '../../data/careers';

const FILTERS = [
  { id: 'all', label: 'All Opportunities' },
  { id: 'full-time', label: 'Full-time' },
  { id: 'internship', label: 'Internship' },
];

export default function CareersJobs() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('all');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return JOB_OPENINGS.filter((job) => {
      const type = (job.employmentType || 'full-time').toLowerCase();
      if (filter !== 'all' && type !== filter) return false;
      if (!q) return true;
      return [job.title, job.shortTitle, job.department, job.location, job.experience, job.detailLocation]
        .join(' ')
        .toLowerCase()
        .includes(q);
    });
  }, [query, filter]);

  return (
    <section className="careers-jobs" id="open-positions">
      <div className="container">
        <div className="jobs-header">
          <div className="section-pill">
            <span className="dot" />
            <span>Career Opportunities</span>
          </div>
          <h2>
            <span className="blue-accent">Find the opportunity</span>
            <span className="jobs-title-line">that moves you forward.</span>
          </h2>
        </div>

        <div className="jobs-toolbar">
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
          </form>

          <div className="jobs-filters" role="tablist" aria-label="Opportunity type">
            {FILTERS.map((item) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={filter === item.id}
                className={`jobs-filter${filter === item.id ? ' is-active' : ''}`}
                onClick={() => setFilter(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="jobs-list">
          {filtered.map((job) => (
            <article key={job.id} className="job-row">
              <div className="job-category">{job.department}</div>
              <div className="job-copy">
                <h3>{job.title}</h3>
                <div className="job-meta">
                  <span>
                    <img src={CAREER_META_ICONS.location} alt="" width={16} height={16} />
                    {job.detailLocation || job.location}
                  </span>
                  <span>
                    <img src={CAREER_META_ICONS.experience} alt="" width={16} height={16} />
                    {job.detailExperience || job.experience}
                  </span>
                </div>
              </div>
              <div className="job-action">
                <Button
                  variant="type2"
                  size="hero"
                  onClick={() => navigate(`/careers/${job.id}`)}
                >
                  Apply Now
                </Button>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="jobs-empty">
            <h3>No matching roles right now</h3>
            <p>Try another keyword or filter, or submit your profile and we’ll stay in touch.</p>
          </div>
        )}
      </div>

      <style>{`
        .careers-jobs {
          padding: 40px 0 80px;
          background: #FFFFFF;
        }
        .jobs-header {
          margin-bottom: 28px;
          max-width: 720px;
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
          font-family: 'Poppins', sans-serif;
          font-size: 40px;
          line-height: 50px;
          font-weight: 600;
          color: var(--heading);
        }
        .jobs-header .blue-accent {
          display: block;
          color: var(--primary);
        }
        .jobs-title-line {
          display: block;
        }
        .jobs-toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 8px;
          flex-wrap: wrap;
        }
        .jobs-search {
          flex: 1 1 320px;
          max-width: 520px;
          display: flex;
          align-items: center;
          gap: 12px;
          height: 52px;
          padding: 0 18px;
          border: 1px solid var(--border);
          border-radius: 14px;
          background: #FFFFFF;
          color: var(--muted);
        }
        .jobs-search input {
          flex: 1;
          border: 0;
          outline: none;
          font: inherit;
          font-size: 15px;
          color: var(--heading);
          background: transparent;
        }
        .jobs-filters {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 4px;
          border-radius: 999px;
          background: #F4F6FA;
          border: 1px solid #E8ECF2;
        }
        .jobs-filter {
          appearance: none;
          border: 0;
          background: transparent;
          color: var(--body);
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          font-weight: 500;
          line-height: 1;
          padding: 12px 16px;
          border-radius: 999px;
          cursor: pointer;
          white-space: nowrap;
        }
        .jobs-filter.is-active {
          background: var(--primary);
          color: #FFFFFF;
        }
        .jobs-list {
          display: flex;
          flex-direction: column;
        }
        .job-row {
          display: grid;
          grid-template-columns: 140px minmax(0, 1fr) auto;
          gap: 24px;
          align-items: center;
          padding: 28px 0;
          border-bottom: 1px solid var(--border);
        }
        .job-row:last-child {
          border-bottom: 1px solid var(--border);
        }
        .job-category {
          font-family: 'Poppins', sans-serif;
          font-size: 14px;
          font-weight: 600;
          color: var(--primary);
        }
        .job-copy h3 {
          margin: 0 0 10px;
          font-family: 'Poppins', sans-serif;
          font-size: 20px;
          line-height: 28px;
          font-weight: 600;
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
        .job-meta img {
          width: 16px;
          height: 16px;
          object-fit: contain;
          flex-shrink: 0;
        }
        .job-action {
          justify-self: end;
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
        @media (max-width: 900px) {
          .jobs-header h2 {
            font-size: 30px;
            line-height: 40px;
          }
          .job-row {
            grid-template-columns: 1fr;
            gap: 12px;
            padding: 24px 0;
          }
          .job-action {
            justify-self: start;
          }
          .jobs-filters {
            width: 100%;
            overflow-x: auto;
          }
        }
      `}</style>
    </section>
  );
}
