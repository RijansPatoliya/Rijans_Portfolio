import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt, FaPlay } from "react-icons/fa";
import "./Projects.css";

function Projects() {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(false);
  const [hoveredVideo, setHoveredVideo] = useState(null);

  useEffect(() => {
    fetchProjects();
  }, [activeCategory]);

  const fetchProjects = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:3000/api/projects/allProjects");
      
      // Filter projects based on active category
      const filteredProjects = response.data.filter(project => {
        if (activeCategory === "All") return true;
        
        // Normalize category comparison
        const projectCategory = project.category.toLowerCase().replace("/", "-");
        const selectedCategory = activeCategory.toLowerCase().replace("/", "-");
        
        return projectCategory === selectedCategory;
      });
      
      setProjects(filteredProjects);
    } catch (error) {
      console.error("Error fetching projects:", error);
      setProjects([]);
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    const formattedCategory = category.toLowerCase().replace("/", "-");
    navigate(`/project/${formattedCategory}`);
  };

  const categories = ["All", "MERN", "HTML/CSS", "Figma"];

  return (
    <div className="projects-section">
    
      <div className="category-tabs">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-tab ${activeCategory === category ? 'active' : ''}`}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading amazing projects...</p>
        </div>
      ) : (
        <div className="projects-grid">
          {projects.length > 0 ? (
            projects.map((project) => (
              <div 
                key={project._id} 
                className="project-card"
                onMouseEnter={() => project.mediaType === 'video' && setHoveredVideo(project._id)}
                onMouseLeave={() => setHoveredVideo(null)}
              >
                <div className="media-container">
                {project.mediaType === "video" ? (
  <video 
    className="project-media"
    controls
    loop={hoveredVideo === project._id}
    muted
    onPlay={(e) => e.target.nextSibling.style.opacity = "0"} // Hide overlay on play
    onPause={(e) => e.target.nextSibling.style.opacity = "1"} // Show overlay on pause
  >
    <source src={project.mediaUrl} type="video/mp4" />
  </video>
) : (
  <img
    src={project.mediaUrl}
    alt={project.title}
    className="project-media"
  />
)}
{project.mediaType === "video" && (
  <div className="video-overlay">
    <FaPlay className="play-icon" />
  </div>
)}
                </div>

                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="tech-stack">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    <a href={project.codeUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                      <FaGithub size={20} />
                      <span>Code</span>
                    </a>
                    <a href={project.liveUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt size={20} />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="no-projects">
              <p>No projects found in this category.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Projects;