// src/components/Timeline.jsx
import React from 'react';

export default function Timeline() {
  // 1. Restoring the missing history array data block
  const jobHistory = [
    {
      id: 1,
      period: "2021 - Present",
      role: "Senior Software Development Engineer in Test (SDET)",
      company: "Current Company", // Update with your employer
      location: "Berlin, Germany",
      details: "Orchestrating end-to-end automation infrastructure using JavaScript/TypeScript frameworks (WebDriverIO, NightwatchJS, CucumberJS). Optimizing CI/CD test deployment pipelines."
    },
    {
      id: 2,
      period: "2016 - 2021",
      role: "QA Automation Engineer",
      company: "Previous Tech Enterprise",
      location: "India / Germany",
      details: "Designed and scaled automated test scripts for cross-browser layout compliance, backend APIs, and microservices databases."
    },
    {
      id: 3,
      period: "2013 - 2016",
      role: "Software Test Engineer",
      company: "Early Engineering Corp",
      location: "India",
      details: "Executed rigorous manual and foundational functional test execution patterns across Media, Travel, or Banking applications."
    }
  ];

  return (
    <section className="timeline-section" style={{ marginTop: '4rem' }}>
      <h2>Career Timeline</h2>
      
      {/* 2. Track border tracks our CSS theme variables */}
      <div className="timeline-track" style={{ paddingLeft: '1rem', borderLeft: '2px solid var(--border-color)', marginTop: '2rem' }}>
        {jobHistory.map((job) => (
          <div key={job.id} className="timeline-item" style={{ marginBottom: '2.5rem', position: 'relative' }}>
            
            {/* Timeline node dot */}
            <div style={{ 
              position: 'absolute', 
              left: '-1.45rem', 
              top: '0.25rem', 
              width: '12px', 
              height: '12px', 
              borderRadius: '50%', 
              background: 'var(--accent-blue)',
              border: '4px solid var(--bg-main)' 
            }} />
            
            <span style={{ fontSize: '0.85rem', color: 'var(--accent-blue)', fontWeight: 'bold' }}>{job.period}</span>
            <h3 style={{ margin: '0.2rem 0 0 0', fontSize: '1.25rem', color: 'var(--text-main)' }}>{job.role}</h3>
            <h4 style={{ margin: '0.1rem 0 0.5rem 0', color: 'var(--text-muted)', fontWeight: '500' }}>{job.company} — <em style={{ fontSize: '0.9rem' }}>{job.location}</em></h4>
            <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>{job.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
