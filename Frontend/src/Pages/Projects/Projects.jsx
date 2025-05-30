import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import "./Projects.css";

function Projects() {
  const navigate = useNavigate();
  const { category } = useParams(); // Get the category from URL
  const [projects, setProjects] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const categories = ["All", "Fullstack", "Frontend"];

  useEffect(() => {
    // Set active category from URL (if exists)
    if (category) {
      const formattedCategory = category.replace("-", "/").toLowerCase();
      const found = categories.find(cat => cat.toLowerCase() === formattedCategory);
      if (found) setActiveCategory(found);
    } else {
      setActiveCategory("All");
    }
  }, [category]);

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
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const fetchProjects = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://rijans-portfolio-backend.onrender.com/api/projects/allProjects");

      const filtered = response.data.filter(project => {
        if (activeCategory === "All") return true;
        const projectCategory = project.category.toLowerCase().replace("/", "-");
        const selectedCategory = activeCategory.toLowerCase().replace("/", "-");
        return projectCategory === selectedCategory;
      });

      setProjects(filtered);
    } catch (err) {
      console.error("Error fetching projects:", err);
      setProjects([]);
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    const formatted = category.toLowerCase().replace("/", "-");
    navigate(`/project/${formatted}`);
  };

  return (
    <div className="projects-section">
      <div className="category-tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-tab ${activeCategory === cat ? "active" : ""}`}
            onClick={() => handleCategoryChange(cat)}
          >
            {cat}
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
            projects.map(project => (
              <div key={project._id} className="project-card">
                <div
                  className="media-container"
                  onClick={() => {
                    if (project.mediaType === "video") {
                      setSelectedVideo(project);
                    }
                  }}
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
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FaGithub size={18} /> <span>Code</span>
                    </a>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FaExternalLinkAlt size={18} /> <span>Live Demo</span>
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
              <FaTimes className="cancle-button"/>
            </button>
            <video controls className="modal-video" autoPlay>
              <source src={selectedVideo.mediaUrl} type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
