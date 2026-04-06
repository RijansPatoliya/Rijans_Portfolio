import React from 'react';
import './About.css';
import { FaTwitter, FaInstagram, FaLinkedin, FaDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';
import myPhoto from "../../assets/myPhoto.jpg";

const About = () => {
  return (
    <section className="portfolio-about-section">
      <div className="portfolio-about-container">
        {/* Left Side: Image with Diagonal Lines */}
        <motion.div
          className="portfolio-image-wrapper"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="portfolio-image-container">
            <img
              src={myPhoto}
              alt="Profile"
              className="portfolio-profile-image"
            />
            {/* Diagonal Lines Overlay */}
            <div className="diagonal-overlay">
              <div className="diagonal-line diagonal-line-1"></div>
              <div className="diagonal-line diagonal-line-2"></div>
              <div className="diagonal-line diagonal-line-3"></div>
              <div className="diagonal-line diagonal-line-4"></div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Content */}
        <motion.div
          className="portfolio-content-wrapper"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="portfolio-subheading">Who Am I?</h2>
         <h1 className="portfolio-heading">
          I'm Rijans Patoliya, full-stack web developer.
</h1>
<p className="portfolio-description">
          Second-year B.Tech student who loves building web applications. I work on both frontend and backend to create apps that are fast and user-friendly. I write clean code and focus on making things better every day. Let's build something awesome together.
</p>

          {/* Details Grid */}
          <div className="portfolio-details-grid">
            <div className="portfolio-detail-item">
              <span className="portfolio-detail-label">Name:</span> Rijans Patoliya
            </div>
            <div className="portfolio-detail-item">
              <span className="portfolio-detail-label">From:</span> Ahemdabad, Gujarat
            </div>
            <div className="portfolio-detail-item">
              <span className="portfolio-detail-label">Email:</span>{' '}
              <a href="mailto:your-email@example.com" className="portfolio-email-link">
                rijans.patoliya.cg@gmail.com
              </a>
            </div>
          </div>

          {/* Download CV and Social Links */}
          <div className="portfolio-actions">
  <a
    href="https://drive.google.com/drive/folders/1zdPuWq96ijZxpByOiUjStc1ZczAsliGM"
    target="_blank"
    rel="noopener noreferrer"
    className="portfolio-download-btn"
  >
    <FaDownload className="portfolio-download-icon" /> SEE MY RESUME
  </a>
  <div className="portfolio-social-links">
    <a href="https://www.linkedin.com/in/rijans-patoliya/" target="_blank" rel="noopener noreferrer">
      <FaLinkedin className="portfolio-social-icon" />
    </a>
  </div>
</div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;
