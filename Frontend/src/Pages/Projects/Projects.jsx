import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import "./Projects.css";

function Projects() {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(false);
  const [hoveredVideo, setHoveredVideo] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    fetchProjects();
  }, [activeCategory]);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        setSelectedVideo(null);
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  const fetchProjects = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://rijans-portfolio-backend.onrender.com/api/projects/allProjects");

      const filteredProjects = response.data.filter(project => {
        if (activeCategory === "All") return true;

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

  const handleVideoClick = (project) => {
    if (project.mediaType === 'video') {
      setSelectedVideo(project);
    }
  };

  // ✅ Updated categories
  const categories = ["All","MERN","React","Static"];

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
                <div
                  className="media-container"
                  onClick={() => handleVideoClick(project)}
                >
                  {project.mediaType === "video" ? (
                    <video
                      className="project-media"
                      autoPlay
                      loop
                      muted
                      playsInline
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

      {selectedVideo && (
        <div className="video-modal-overlay" onClick={() => setSelectedVideo(null)}>
          <div className="video-modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setSelectedVideo(null)}>
              <FaTimes />
            </button>
            <video
              controls
              className="modal-video"
              autoPlay
            >
              <source src={selectedVideo.mediaUrl} type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
