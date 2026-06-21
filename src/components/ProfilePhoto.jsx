// src/components/ProfilePhoto.jsx
import React from 'react';

export default function ProfilePhoto() {
  return (
    <div style={{ 
      flex: '1', 
      display: 'flex', 
      justifyContent: 'center', 
      minWidth: '200px',
      position: 'relative'
    }}>
      {/* Live System Availability Beacon Dot */}
      <div style={{ 
        position: 'absolute', 
        top: '12px', 
        right: '12px', 
        width: '14px', 
        height: '14px', 
        background: '#10b981', 
        borderRadius: '50%', 
        border: '3px solid var(--bg-card)',
        boxShadow: '0 0 12px #10b981',
        zIndex: 2 
      }} title="Available for roles in Berlin / Remote" />

      {/* The Live GitHub Avatar Image Asset */}
      <img 
        src="https://avatars1.githubusercontent.com/u/33729221?v=4" 
        alt="Padmanabha Raju Sagi Profile Photo"
        style={{
          width: '140px', 
          height: '140px', 
          borderRadius: '50%', 
          objectFit: 'cover', 
          border: '4px solid var(--accent-blue)', 
          background: 'var(--bg-card)',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3)'
        }}
      />
    </div>
  );
}
