// src/components/Contact.jsx
import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'; 

export default function Contact() {
  return (
    <section className="contact-section" style={{ marginTop: '4rem' }}>
      <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        
        <div>
          <h2>Get in Touch</h2>
          <p style={{ color: 'var(--text-muted)', margin: '1rem 0 2rem 0' }}>
            I am always open to discussing advanced automation architectures, open-source tool contributions, or senior engineering roles in Germany and remote teams.
          </p>
          <a 
            href="mailto:your-email@example.com"
            title="Send an Email"
            style={{
              display: 'inline-flex', 
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0.75rem 1.5rem',
              background: 'var(--accent-blue)',
              color: 'var(--bg-main)',
              textDecoration: 'none',
              fontWeight: 'bold',
              borderRadius: '6px'
            }}
          >
            <FaEnvelope size={18} />
          </a>
        </div>

        <div>
          <h2>Social Networks</h2>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
            <a 
              href="https://github.com/spnraju" 
              target="_blank" 
              rel="noreferrer"
              title="Connect on GitHub"
              style={{
                flex: 1,
                display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.25rem',
                background: 'var(--bg-card)', color: 'var(--text-main)', textDecoration: 'none',
                borderRadius: '6px', border: '1px solid var(--border-color)', transition: 'border-color 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--accent-blue)'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
            >
              <FaGithub size={24} color="var(--accent-blue)" />
            </a>
            
            <a 
              href="https://www.linkedin.com/in/spnraju/" 
              target="_blank" 
              rel="noreferrer"
              title="Connect on LinkedIn"
              style={{
                flex: 1,
                display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.25rem',
                background: 'var(--bg-card)', color: 'var(--text-main)', textDecoration: 'none',
                borderRadius: '6px', border: '1px solid var(--border-color)', transition: 'border-color 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--accent-blue)'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
            >
              <FaLinkedin size={24} color="var(--accent-blue)" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
