// src/components/Timeline.jsx
import React from 'react';

export default function Timeline() {
  const jobHistory = [
    {
      id: 1,
      period: "June 2026 - Present",
      role: "Software Development Engineer in Test",
      company: "Superhuman",
      location: "Berlin, Germany",
      details: "Joined the Android and iOS native app teams"
    },
    {
      id: 2,
      period: "August 2022 - May 2026",
      role: "Software Development Engineer in Test",
      company: "Miro",
      location: "Berlin, Germany",
      details: "Led quality and test automation initiatives for Miro’s cross-platform experiences using tools such as WebdriverIO, VS Code, and other modern QA technologies."
    },
    {
      id: 3,
      period: "April 2021 - July 2022",
      role: "Senior QA Engineer",
      company: "Nuri",
      location: "Berlin, Germany",
      details: "Owned end-to-end quality assurance and test automation for Nuri’s products using WebdriverIO, VS Code, and additional QA tooling to support reliable releases."
    },
    {
      id: 4,
      period: "July 2019 - February 2021",
      role: "Sr. Software Development Engineer in Test",
      company: "Tata Consultancy Services",
      location: "Madrid, Spain",
      details: "Worked with a multinational banking and financial services client, building and maintaining automation frameworks in JavaScript/NodeJS with WebDriverIO, Appium, CucumberJS, Jenkins, Jira, Confluence, GitLab, and related tools."
    },
    {
      id: 5,
      period: "November 2017 - June 2019",
      role: "Software Development Engineer in Test",
      company: "Tata Consultancy Services",
      location: "Chennai, India",
      details: "Delivered test automation for a travel technology customer’s travel commerce platform using JavaScript/NodeJS with NightwatchJS, CucumberJS, Azure DevOps, BrowserStack, and supporting tools."
    },
    {
      id: 6,
      period: "September 2013 - October 2017",
      role: "Test Analyst",
      company: "Tata Consultancy Services",
      location: "Chennai, India",
      details: "Tested applications for an American multinational mass media company using Java 7, Selenium WebDriver, JUnit, HP ALM, Rally, Parasoft, SoapUI, SQL Developer, SVN, Putty, and WinSCP focusing on functional and integration testing." 
    },
    {
      id: 7,
      period: "March 2013 - August 2013",
      role: "ILP - Trainee",
      company: "Tata Consultancy Services",
      location: "Chennai, India",
      details: "Completed Initial Learning Program (ILP) training focused on Java testing fundamentals and foundational QA practices for campus recruits."
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
