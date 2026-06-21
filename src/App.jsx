// src/App.jsx
import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router';
import { useTheme } from './context/ThemeContext.jsx';
import Navbar from './components/Navbar.jsx';
import ProfilePhoto from './components/ProfilePhoto.jsx';
import Expertise from './components/Expertise.jsx';
import Timeline from './components/Timeline.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';

// 1. The Global Application Layout Frame
function BaseLayout() {
  const { theme } = useTheme();

  return (
    <div className={`theme-${theme}`} style={{ background: 'var(--bg-main)', minHeight: '100vh', transition: 'background-color 0.3s' }}>
      <div className="portfolio-container">
        <Navbar />
        
        {/* Dynamic Multi-Page Header Block featuring your clean components */}
        <header className="responsive-hero" style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          gap: '2rem',
          borderBottom: '1px solid var(--border-color)', 
          paddingBottom: '2.5rem', 
          marginBottom: '3rem'
        }}>
          {/* Left Block: Professional Profile Data Text */}
          <div style={{ flex: '2', minWidth: '300px' }}>
            <h1 style={{ margin: '0 0 0.5rem 0', color: 'var(--text-main)' }}>Padmanabha Raju Sagi</h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--accent-blue)', fontWeight: '600', margin: '0 0 1rem 0' }}>
              Senior Software Development Engineer in Test (SDET)
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', maxWidth: '650px', margin: 0 }}>
              Specialized in scaling ultra-fast, robust JavaScript automation suites. I design and scale framework pipelines that protect product quality and accelerate team engineering delivery.
            </p>
          </div>

          {/* Right Block: Standalone Photo Component */}
          <ProfilePhoto />
        </header>

        {/* 2. The active matching page routes inject precisely right here */}
        <main style={{ color: 'var(--text-main)' }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

// 3. Default Root Page View Container Component
function HomePage() {
  return (
    <>
      <Expertise />
    </>
  );
}

// 4. Main Export Orchestrator containing your route schema mapping
export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <BaseLayout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/timeline", element: <Timeline /> },
        { path: "/projects", element: <Projects /> },
        { path: "/contact", element: <Contact /> }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}
