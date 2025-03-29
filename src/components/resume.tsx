import React from 'react';
import { FaHtml5, FaCss3, FaReact } from 'react-icons/fa';
import { SiNodedotjs, SiJavascript, SiTypescript, SiExpress, SiPostgresql } from 'react-icons/si';
import "../assets/style.css";

const Resume: React.FC = () => {
  return (
    <div className="resume section">
      <h2>Resume</h2>
      <p>Download my <a href="/resume.html" target="_blank" rel="noopener noreferrer">resume</a>.</p>
      <div className="skills">
        <FaHtml5 /> <FaCss3 /> <FaReact />
        <SiNodedotjs /> <SiJavascript /> <SiTypescript />
        <SiExpress /> <SiPostgresql />
      </div>
    </div>
  );
};

export default Resume;