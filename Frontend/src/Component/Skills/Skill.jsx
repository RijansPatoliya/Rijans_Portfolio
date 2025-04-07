import React, { useState, useRef } from 'react';
import './Skill.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillsData = [
    { name: 'Node.js + Express.js ', percentage: 85, description: 'Backend runtime environment and framework used to build scalable RESTful APIs and full-stack applications.' },
    { name: 'JavaScript', percentage: 85, description: 'A versatile programming language used for building interactive web applications and dynamic user interfaces.' },
    { name: 'React', percentage: 80, description: 'A JavaScript library for building user interfaces, particularly single-page applications with reusable components.' },
    { name: 'C++', percentage: 70, description: 'A powerful, high-performance programming language used for system programming, game development,and more.' },
    { name: 'MongoDB', percentage: 75, description: 'A NoSQL database used to store flexible, JSON-like data for modern web applications.' },
    { name: 'Tailwind', percentage: 75, description: 'A utility-first CSS framework for rapidly building custom designs without writing much CSS.' },
    { name: 'Firebase Authentication', percentage: 75, description: 'Secure and easy-to-integrate user authentication system for login, signup, and user management.' },
    { name: 'Cloudinary', percentage: 70, description: 'Cloud-based image and video management service used for uploading, storing, transforming, and delivering media.' },
    { name: 'Git & GitHub', percentage: 85, description: 'Version control and collaboration platform used for efficient project management and deployment.' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null);

  // Card width (400px) + gap (20px) = 420px per card
  const cardWidthWithGap = 420;

  const handleNext = () => {
    if (currentIndex < skillsData.length - 3) { // Scroll till the last 3 cards are visible
      setCurrentIndex(currentIndex + 1);
      scrollRef.current.scrollTo({
        left: (currentIndex + 1) * cardWidthWithGap, // Scroll by 1 card
        behavior: 'smooth',
      });
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      scrollRef.current.scrollTo({
        left: (currentIndex - 1) * cardWidthWithGap, // Scroll by 1 card
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="skills-section">
      <div className="skills-container">
        <motion.h2
          className="skills-heading"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Talent
        </motion.h2>
        <motion.h1
          className="skills-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Professional Skills
        </motion.h1>

        {/* Scrollable Skills Cards */}
        <div className="skills-scroll-wrapper">
          <motion.button
            className="skill-scroll-btn skill-scroll-btn-left"
            onClick={handlePrev}
            disabled={currentIndex === 0}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaChevronLeft />
          </motion.button>

          <div className="skills-cards" ref={scrollRef}>
            {skillsData.map((skill, index) => (
              <motion.div
                key={index}
                className="skill-card"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="skill-name">{skill.name}</h3>
                <div className="skill-percentage">{skill.percentage}%</div>
                <p className="skill-description">{skill.description}</p>
                <div className="skill-progress-bar">
                  <motion.div
                    className="skill-progress-fill"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.percentage}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.button
            className="skill-scroll-btn skill-scroll-btn-right"
            onClick={handleNext}
            disabled={currentIndex >= skillsData.length - 3} // Stop when last 3 cards are visible
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaChevronRight />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Skills;