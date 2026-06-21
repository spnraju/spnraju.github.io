// src/components/Projects.jsx
import { useState, useEffect } from 'react';

const LOCAL_MOCK_REPOS = [
  {
    id: 101,
    name: "vscode-webdriverio-snippets",
    language: "JavaScript",
    stargazers_count: 2,
    html_url: "https://github.com",
    description: "Comprehensive code snippets extension for the WebDriverIO testing framework."
  },
  {
    id: 102,
    name: "vscode-nightwatchjs-snippets",
    language: "JavaScript",
    stargazers_count: 1,
    html_url: "https://github.com",
    description: "Ultimate boilerplate snippets extension for the NightwatchJS test engine."
  },
  {
    id: 103,
    name: "spnraju.github.io",
    language: "TypeScript",
    stargazers_count: 2,
    html_url: "https://github.com",
    description: "Personal senior engineer portfolio rebuilt with React 19 and Rspack."
  }
];

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    const timer = setTimeout(() => {
      setRepos(LOCAL_MOCK_REPOS);
      setLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const filteredRepos = activeFilter === 'All'
    ? repos
    : repos.filter(repo => repo.language === activeFilter);

  const languages = ['All', ...new Set(repos.map(repo => repo.language).filter(Boolean))];

  if (loading) return <p style={{ color: 'var(--accent-blue)' }}>Simulating database stream connection...</p>;

  return (
    <section className="projects-section" style={{ marginTop: '3rem' }}>
      <h2>My Projects & Frameworks ({filteredRepos.length})</h2>
      
      {/* Filter Buttons */}
      <div className="filter-buttons" style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
        {languages.map((lang) => (
          <button 
            key={lang}
            onClick={() => setActiveFilter(lang)}
            style={{
              padding: '0.5rem 1rem',
              background: activeFilter === lang ? 'var(--accent-blue)' : 'var(--bg-card)',
              color: activeFilter === lang ? 'var(--bg-main)' : 'var(--text-main)',
              border: '1px solid var(--border-color)',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            {lang}
          </button>
        ))}
      </div>

      {/* Grid Block */}
      <div className="skills-grid">
        {filteredRepos.map((repo) => (
          <div key={repo.id} className="skill-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.75rem', background: 'var(--border-color)', color: 'var(--text-main)', padding: '0.2rem 0.5rem', borderRadius: '4px', fontWeight: 'bold' }}>
                {repo.language}
              </span>
              <span style={{ fontSize: '0.85rem', color: '#eab308' }}>
                ⭐ {repo.stargazers_count}
              </span>
            </div>
            <h3 style={{ marginTop: '0.8rem' }}>
              <a href={repo.html_url} target="_blank" rel="noreferrer" style={{ color: 'var(--accent-blue)', textDecoration: 'none' }}>
                {repo.name}
              </a>
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0.5rem 0 0 0' }}>
              {repo.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
