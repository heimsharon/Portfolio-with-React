import React from 'react';
import "../assets/style.css"; 
import { FaGithub } from "react-icons/fa";

const Portfolio: React.FC = () => {
  return (
    <div className="portfolio section">
      <h2>Portfolio</h2>
      <div className="flex-container">
        <div className="flex-item run-buddy">
          <a href="https://github.com/heimsharon/Weather-Dashboard-API-Usage" target="_blank" rel="noopener noreferrer" className="github-link">
          <img src="./assets/images/github-logo.png" alt="GitHub Logo" className="github-icon" />
          </a>
          <h3>Weather Dashboard</h3>
        </div>
        <div className="flex-item led-wall">
          <a href="https://github.com/heimsharon/Employee-Tracker-Database-using-CMS" target="_blank" rel="noopener noreferrer" className="github-link">
            <FaGithub className="github-icon" />
          </a>
          <h3>Employee Data Tracker--Database Usage</h3>
        </div>
        <div className="flex-item react-calc">
          <a href="https://github.com/heimsharon/Employee-Tracker-Database-using-CMS" target="_blank" rel="noopener noreferrer" className="github-link">
            <FaGithub className="github-icon" />
          </a>
          <h3>Vehicle Builder</h3>
        </div>
        <div className="flex-item pastel-puzzles">
          <a href="https://github.com/bans-07/Aqua-Buddy" target="_blank" rel="noopener noreferrer" className="github-link">
            <FaGithub className="github-icon" />
          </a>
          <h3>Aqua Buddy</h3>
        </div>
        <div className="flex-item surf-report">
          <a href="https://github.com/heimsharon/Surf-Report" target="_blank" rel="noopener noreferrer" className="github-link">
            <FaGithub className="github-icon" />
          </a>
          <h3>Surf Report</h3>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;