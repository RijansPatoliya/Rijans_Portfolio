import React, { useState, useRef } from 'react';
import './Skill.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillsData = [
    { name: 'JavaScript (ES6+)', percentage: 85, description: 'Programming language for building interactive websites and web applications.' },
    { name: 'React.js', percentage: 85, description: 'JavaScript library for building fast, reusable web interfaces.' },
    { name: 'Node.js + Express.js', percentage: 85, description: 'Backend tools for building servers, APIs, and full-stack applications.' },
    { name: 'Next.js', percentage: 80, description: 'React framework for building modern, optimized web applications.' },
    { name: 'MongoDB', percentage: 80, description: 'NoSQL database for storing flexible data in web apps.' },
    { name: 'PostgreSQL + MySQL', percentage: 75, description: 'Relational databases for structured data storage and management.' },
    { name: 'Tailwind CSS', percentage: 80, description: 'CSS framework for quickly styling and designing beautiful websites.' },
    { name: 'Java', percentage: 70, description: 'Programming language for building applications and systems.' },
    { name: 'C++', percentage: 70, description: 'Programming language for system programming and high-performance applications.' },
    { name: 'Git + GitHub', percentage: 85, description: 'Version control tools for managing code and collaborating with teams.' },
    { name: 'Docker', percentage: 70, description: 'Tool for packaging and running applications in containers.' },
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
