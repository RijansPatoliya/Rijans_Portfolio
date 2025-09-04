import React, { useState, useEffect, useRef } from 'react';
import { 
  SiJavascript, 
  SiHtml5, 
  SiCss3, 
  SiReact, 
  SiNodedotjs, 
  SiMongodb, 
  SiExpress,
  SiPostgresql,
  SiSocketdotio,
  SiFramer,
  SiGithub,
  SiTypescript,
  SiPython,
  SiVuedotjs
} from 'react-icons/si';
import { FaExternalLinkAlt, FaPlay, FaEye, FaCode } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [hoveredCard, setHoveredCard] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  // Mouse movement tracking for parallax effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const techIcons = {
    JavaScript: SiJavascript,
    HTML5: SiHtml5,
    CSS3: SiCss3,
    React: SiReact,
    'Node.js': SiNodedotjs,
    MongoDB: SiMongodb,
    Express: SiExpress,
    PostgreSQL: SiPostgresql,
    'Socket.io': SiSocketdotio,
    'Framer Motion': SiFramer,
    TypeScript: SiTypescript,
    Python: SiPython,
    'Vue.js': SiVuedotjs,
    'Chart.js': SiJavascript,
    'API Integration': SiJavascript
  };

  const techColors = {
    JavaScript: '#F7DF1E',
    HTML5: '#E34F26',
    CSS3: '#1572B6',
    React: '#61DAFB',
    'Node.js': '#339933',
    MongoDB: '#47A248',
    Express: '#68D391',
    PostgreSQL: '#336791',
    'Socket.io': '#25D366',
    TypeScript: '#3178C6',
    Python: '#3776AB',
    'Vue.js': '#4FC08D',
    'Chart.js': '#FF6384',
    'API Integration': '#ffffff'
  };

  const projectsData = [
    {
      id: 1,
      title: "EventTracker",
      description: "Full-stack event management platform with user authentication, real-time updates, and interactive dashboards. Built with MERN stack and Framer Motion for smooth animations.",
      technologies: ["React", "MongoDB", "Express", "Node.js", "Framer Motion"],
      category: "Fullstack",
      youtubeId: null,
      image: "https://ik.imagekit.io/sbu0mupu9/Screenshot%202025-09-04%20114750.png?updatedAt=1756966964616", // Added image
      demoLink: "https://event-tracker-frontend-l8ve.onrender.com",
      codeLink: "https://github.com/RijansPatoliya/event_tracker"
    },
    
    {
      id: 2,
      title: "Meal Recipe App",
      description: "Responsive meal recipe application with search, filter, and detailed recipe views. Built with React and integrated with a public meals API.",
      technologies: ["React"],
      category: "Frontend",
      youtubeId: null,
      image: "https://ik.imagekit.io/sbu0mupu9/Screenshot%202025-09-04%20112303.png?updatedAt=1756965210798", // Kept existing image
      demoLink: "https://meals-react.onrender.com",
      codeLink: "https://github.com/RijansPatoliya/React-Project/tree/main/Meals"
    },
    {
      id: 3,
      title: "Youtube Clone",
      description: "A simplified YouTube clone built with React, featuring video browsing, search functionality, and responsive design.",
      technologies: ["React"],
      category: "Frontend",
      youtubeId: null,
      image: "https://ik.imagekit.io/sbu0mupu9/Screenshot%202025-09-04%20113602.png?updatedAt=1756967033518", // Added image
      demoLink: "https://react-project-7jxc.onrender.com/",
      codeLink: "https://github.com/RijansPatoliya/React-Project/tree/main/Youtube"
    },
    {
      id: 4,
      title: "Calculator App",
      description: "Full-featured calculator application with advanced mathematical functions, history tracking, and a user-friendly interface.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      category: "Frontend",
      youtubeId: null,
      image: "https://ik.imagekit.io/sbu0mupu9/Screenshot%202025-09-04%20115922.png?updatedAt=1756967383601", // Added image
      demoLink: "https://calculator-react-gq6r.onrender.com",
      codeLink: "https://github.com/RijansPatoliya/React-Project/tree/main/Calculator"
    },
   
  ];

  const filteredProjects = activeTab === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeTab);

  // Intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = parseInt(entry.target.dataset.cardId);
            setVisibleCards(prev => new Set([...prev, cardId]));
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, [filteredProjects]);

  const renderTechIcon = (tech) => {
    const IconComponent = techIcons[tech];
    const color = techColors[tech] || '#ffffff';
    
    return IconComponent ? (
      <IconComponent 
        className="tech-icon" 
        style={{ color, display: 'inline-flex', width: '24px', height: '24px', verticalAlign: 'middle' }}
      />
    ) : null;
  };

  const renderMediaContent = (project) => {
    if (project.youtubeId) {
      return (
        <div className="youtube-container">
          <iframe
            src={`https://www.youtube.com/embed/${project.youtubeId}`}
            title={project.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="youtube-iframe"
          ></iframe>
          <div className="media-overlay"></div>
        </div>
      );
    } else if (project.image) {
      return (
        <div className="image-container">
          <img 
            src={project.image}
            alt={project.title}
            className="media-image"
          />
          <div className="image-overlay">
            <FaExternalLinkAlt className="external-icon" />
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <section className="projects-section" ref={sectionRef}>
      {/* Animated Background */}
      <div className="animated-bg">
        <div 
          className="floating-orb orb-1"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02 + scrollY * 0.1}px)`
          }}
        ></div>
        <div 
          className="floating-orb orb-2"
          style={{
            transform: `translate(${mousePosition.x * -0.03}px, ${mousePosition.y * -0.03 + scrollY * 0.05}px)`
          }}
        ></div>
        <div className="grid-pattern"></div>
      </div>

      <div className="projects-container">

        {/* Tabs */}
        <div className="projects-tabs">
          {['All', 'Frontend', 'Fullstack'].map((tab, index) => (
            <button 
              key={tab}
              className={`tab-button ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="tab-text">{tab}</span>
              <div className="tab-glow"></div>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className={`project-card ${visibleCards.has(project.id) ? 'visible' : ''}`}
              data-card-id={project.id}
              style={{ animationDelay: `${index * 0.15}s` }}
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="card-glow"></div>
              <div className="card-shine"></div>
              
              <div className="card-content">
                <div className="card-left">
                  <div className="content-wrapper">
                    <div className="project-header">
                      <div className="project-number">
                        <span className="number-text">0{index + 1}</span>
                      </div>
                      
                      <h3 className="project-title">
                        <span className="title-text">{project.title}</span>
                      </h3>
                    </div>
                    
                    <p className="project-description">{project.description}</p>
                    
                    <div className="project-footer">
                      <div className="project-buttons">
                        <a href={project.demoLink} className="btn-primary">
                          <FaEye className="btn-icon" />
                          <span>Demo</span>
                        </a>
                        <a href={project.codeLink} className="btn-secondary">
                          <FaCode className="btn-icon" />
                          <span>Code</span>
                        </a>
                      </div>

                      <div className="tech-stack">
                        {project.technologies.map((tech, idx) => (
                          <div 
                            key={idx} 
                            className="tech-item" 
                            title={tech}
                          >
                            {renderTechIcon(tech)}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-right">
                  <div className="media-wrapper">
                    {renderMediaContent(project)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;