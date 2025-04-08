import React from 'react';
import { FaHtml5, FaCss3, FaReact } from 'react-icons/fa';
import { SiNodedotjs, SiJavascript, SiTypescript, SiExpress, SiPostgresql } from 'react-icons/si';
import "../styles/style.css";

const Resume: React.FC = () => {
  return (
    <div className="resume section">
      <h2>Resume</h2>
      <p>
        Download my 
        <a 
          href="https://docs.google.com/document/d/1f4lbETwKA1RQQddepxXzhfaZ-v9Jysc8j33ZMxCNJ1c/edit?usp=sharing" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          resume (PDF)
        </a>.
      </p>
      <div className="skills">
        <FaHtml5 size={70} />
        <FaCss3 size={70} />
        <FaReact size={70} />
        <SiNodedotjs size={70} />
        <SiJavascript size={70} />
        <SiTypescript size={70} />
        <SiExpress size={70} />
        <SiPostgresql size={70} />
        <p>
          The icons above represent some of the tools, technologies, and programming languages I am proficient in as a Software Developer.
          My experience includes building responsive web applications, working with both front-end and back-end technologies, and collaborating in agile development environments.
          I am always eager to learn new tools and frameworks to enhance my skill set and contribute to innovative projects.
        </p>
      </div>
    </div>
  );
};

export default Resume;