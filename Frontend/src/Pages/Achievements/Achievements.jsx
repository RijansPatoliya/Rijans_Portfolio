import React from 'react';
import { BsTrophyFill } from "react-icons/bs";
import './Achievements.css';

const achievementsData = [
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg",
    title: "Azure Data Explorer In-A-Day",
    description: "A fully managed, high-performance, big data analytics platform that makes it easy to analyze high volumes of data in near real time.",
    hasCertification: true
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg",
    title: "From Data to Insights with Google Cloud Platform Specialization",
    description: "Derive insights through data analysis and visualization using the Google Cloud Platform.",
    hasCertification: true
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    title: "Front-End Web Development with React",
    description: "Javascript based front-end application development, and in particular the React library.",
    hasCertification: true
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg",
    title: "Front-End Web UI Frameworks and Tools: Bootstrap 4",
    description: "An overview of client-side web UI frameworks, in particular Bootstrap 4.",
    hasCertification: true
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
    title: "Advanced JavaScript Concepts",
    description: "Deep dive into JavaScript including prototypal inheritance, closures, and asynchronous patterns.",
    hasCertification: true
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
    title: "TypeScript for Professional Developers",
    description: "Building scalable applications with TypeScript's static typing and advanced features.",
    hasCertification: true
  }
];

const AchievementCard = ({ logo, title, description, hasCertification }) => (
  <div className="achievement-card">
    <div className="achievement-logo-container">
      <img src={logo} alt={`${title} logo`} className="achievement-logo" />
    </div>
    <h3 className="achievement-card-title">{title}</h3>
    <p className="achievement-card-description">{description}</p>
    {hasCertification && (
      <div className="certification-badge">
        <img
          alt="🏆"
          src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f3c6.png"
          className="trophy-icon"
              />
        Certification
      </div>
    )}
  </div>
);

const Achievements = () => {
  return (
    <div className="min-h-screen" style={{ background: ' #0a0a0a' }}>
      <section className="achievements-section" id="achievements">
        <div className="achievements-container">
          <div className="achievements-header">
            <h2 className="achievements-title">
              Achievements & Certifications
              <img
                alt="🏆"
                src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f3c6.png"
                className="trophy-image"
              />
            </h2>
            <p className="achievements-subtitle">
              A showcase of my achievements, certifications, and proud moments!
            </p>
          </div>
          <div className="achievements-grid">
            {achievementsData.map((item, index) => (
              <AchievementCard key={index} {...item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Achievements;