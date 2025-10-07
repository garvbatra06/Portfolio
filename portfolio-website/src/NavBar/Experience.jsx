import React from 'react'
import './Button.css'

const Experience = () => {
  return (
    <div className="experience-section">
  <div className="experience-card">
    <h3>Web Development Intern – CyberSapient</h3>
    <p className="exp-date">June 2025 – September 2025</p>
    <ul>
      <li>Working on dashboards using React + Tailwind</li>
      <li>Collaborating with design & backend API teams</li>
      <li>Hands-on Git workflows and production pushes</li>
    </ul>
  </div>

  <div className="experience-card">
    <h3>Tech Head – JBS, JIIT</h3>
    <p className="exp-date">Feb 2025 – Present</p>
    <ul>
      <li>Built internal tools and rebranded club website</li>
      <li>Managed volunteers & tech operations for events</li>
    </ul>
  </div>

  <div className="experience-card">
    <h3>Participant – BitBox 3.0 Hackathon</h3>
    <p className="exp-date">Apr 2025</p>
    <ul>
      <li>Participated in BitBox 3.0 with big dreams, small time, and lots of bugs 🐞</li>
      <li>Tried building a freelancing platform using Firebase & vanilla JS — the idea clicked, the code didn’t (yet)</li>
      <li>Learned a lot about real-time DBs, team coordination under pressure, and where our assumptions fell apart</li>
    </ul>
  </div>
</div>
  )
}

export default Experience
