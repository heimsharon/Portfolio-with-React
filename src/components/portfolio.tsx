import React from 'react';
import "../assets/style.css";

const Portfolio: React.FC = () => {
  return (
    <div className="portfolio section">
      <h2>Portfolio</h2>
      <div className="flex-container">
        <div className="flex-item run-buddy">
          <h3>Weather Dashboard</h3>
          <a href="https://github.com/heimsharon/Weather-Dashboard-API-Usage" target="_blank" rel="noopener noreferrer" className="github-link">
            <img src="./assets/images/github-logo.png" alt="GitHub Logo" className="github-icon" />
          </a>
          <a href="https://weather-api-mod-9.onrender.com/" target="_blank" rel="noopener noreferrer" className="deployed-link">
            View Deployed Project
          </a>
        </div>
        <div className="flex-item led-wall">
          <h3>Employee Data Tracker</h3>
          <a href="https://github.com/heimsharon/Employee-Tracker-Database-using-CMS" target="_blank" rel="noopener noreferrer" className="github-link">
            <img src="./assets/images/github-logo.png" alt="GitHub Logo" className="github-icon" />
          </a>
          <a href="https://example-deployed-link.com" target="_blank" rel="noopener noreferrer" className="deployed-link">
            View Deployed Project
          </a>
        </div>
        <div className="flex-item react-calc">
          <h3>Vehicle Builder</h3>
          <a href="https://github.com/heimsharon/Employee-Tracker-Database-using-CMS" target="_blank" rel="noopener noreferrer" className="github-link">
            <img src="./assets/images/github-logo.png" alt="GitHub Logo" className="github-icon" />
          </a>
          <a href="https://example-deployed-link.com" target="_blank" rel="noopener noreferrer" className="deployed-link">
            View Deployed Project
          </a>
        </div>
        <div className="flex-item pastel-puzzles">
          <h3>Aqua Buddy</h3>
          <a href="https://github.com/bans-07/Aqua-Buddy" target="_blank" rel="noopener noreferrer" className="github-link">
            <img src="./assets/images/github-logo.png" alt="GitHub Logo" className="github-icon" />
          </a>
          <a href="https://example-deployed-link.com" target="_blank" rel="noopener noreferrer" className="deployed-link">
            View Deployed Project
          </a>
        </div>
        <div className="flex-item surf-report">
          <h3>Surf Report</h3>
          <a href="https://github.com/heimsharon/Surf-Report" target="_blank" rel="noopener noreferrer" className="github-link">
            <img src="./assets/images/github-logo.png" alt="GitHub Logo" className="github-icon" />
          </a>
          <a href="https://example-deployed-link.com" target="_blank" rel="noopener noreferrer" className="deployed-link">
            View Deployed Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;