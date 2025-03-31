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
          I’m Rijans Patoliya, a Web Developer & passionate about problem-solving.
          </h1>
          <p className="portfolio-description">
          I am Rijans Patoliya, a first-year B.Tech student with a strong passion for web development and technology. I am dedicated to solving real-world problems through coding and have earned accolades for my projects in various hackathons. 
          </p>

          {/* Details Grid */}
          <div className="portfolio-details-grid">
            <div className="portfolio-detail-item">
              <span className="portfolio-detail-label">Name:</span> Rijans Patoliya
            </div>
            <div className="portfolio-detail-item">
              <span className="portfolio-detail-label">Age:</span> 19 Years
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
            <a href="/path-to-your-cv.pdf" download className="portfolio-download-btn">
              <FaDownload className="portfolio-download-icon" /> Download CV
            </a>
            <div className="portfolio-social-links">
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="portfolio-social-icon" />
              </a>
              <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="portfolio-social-icon" />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
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