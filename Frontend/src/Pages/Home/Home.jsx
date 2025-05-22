import React from 'react';
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import './Home.css';
import SVG from "../../Component/Svg_photo/Svg_photo"
import About from '../../Component/About/About';
import Skill from '../../Component/Skills/Skill';

const Home = () => {
  const roles = ["Web Developer", "Problem Solver", "Tech Innovator"];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const firstRowLogos = [
    { src: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-1024.png", name: "React" },
    { src: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/187_Js_logo_logos-1024.png", name: "JavaScript" },
    { src: "https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg", name: "Tailwind" },
    { src: "https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/404/c_logo-128.png", name: "C++" }
  ];
  
  const secondRowLogos = [
    { src: "https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-html-5-512.png", name: "HTML5" },
    { src: "https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-css-3-512.png", name: "CSS3" },
    { src: "https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/404/c_logo-128.png", name: "C++" },
    { src: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/233_Node_Js_logo-128.png", name: "Node.js" }
  ];
  
  const thirdRowLogos = [
    { src: "https://icon.icepanel.io/Technology/svg/C.svg", name: "C" },
    { src: "https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-128.png", name: "Firebase" },
    { src: "https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_github-128.png", name: "GitHub" },
    { src: "https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/3000/figma-logo-128.png", name: "Figma" }
  ];

  const renderLogos = (logos, times = 4) => {
    const items = [];
    for (let i = 0; i < times; i++) {
      logos.forEach((logo, index) => {
        items.push(
          <div className="marquee-item" key={`${logo.name}-${i}-${index}`}>
            <img src={logo.src} alt={logo.name} className="logo-img" />
            <span>{logo.name}</span>
          </div>
        );
      });
    }
    return items;
  };

  return (
    <>
      <div className="banner-component">
        <div className="banner-left-content">
          <h1>
            Hi! I'm {" "}
            <span className="gradient-text">Rijans</span>
          </h1>
          <div className="typewriter-container">
            <div className="static-text">I'm a</div>
            <motion.div
              key={currentRole}
              initial={{ opacity: 0, x: -30, filter: "blur(8px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: 30, filter: "blur(8px)" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="dynamic-text"
            >
              {roles[currentRole]}
            </motion.div>
          </div>
          <p className="description">
            A Passionate MERN Stack Developer, Building Seamless and Engaging Web Experiences with Innovation and Precision.
          </p>
        </div>

        <div className="banner-Right-content">
          <SVG />
        </div>
      </div>

      <div className="marquee">
        <div className="marquee-container">
          <div className="marquee-ltr">
            <div className="marquee-content">
              {renderLogos(firstRowLogos)}
            </div>
          </div>
        </div>
        
        <div className="marquee-container">
          <div className="marquee-rtl">
            <div className="marquee-content">
              {renderLogos(secondRowLogos)}
            </div>
          </div>
        </div>
        
        <div className="marquee-container">
          <div className="marquee-ltr">
            <div className="marquee-content">
              {renderLogos(thirdRowLogos)}
            </div>
          </div>
        </div>
      </div>

      <About />
      <Skill />

      <div className="touch-container">
        <div className="touch-heading">
          <h1>GET IN TOUCH</h1>
        </div>

        <div className="social-links">
          <h2>Social-links</h2>
          <div className="link">
            <div className="link-title">
              Linkdin:
            </div>
            <div className="link-url">
              <a href="https://www.linkedin.com/in/rijans-patoliya/" target='_blank'>Rijans Patoliya</a>
            </div>
          </div>
          <div className="link">
            <div className="link-title">
              GitHub:
            </div>
            <div className="link-url">
              <a href="https://github.com/RijansPatoliya" target='_blank'>Rijans Patoliya</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;