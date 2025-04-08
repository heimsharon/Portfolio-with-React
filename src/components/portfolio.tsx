import React from 'react';
import "../assets/style.css";

const Portfolio: React.FC = () => {
  return (
    <div className="portfolio section">
      <h2>Portfolio</h2>
      
      <div className="portfolio_container">
        
        
      <div className="portfolio__item weather-dashboard">
          <h3>Weather Dashboard</h3>
          <a href="https://github.com/heimsharon/Weather-Dashboard-API-Usage" target="_blank" rel="noopener noreferrer" className="github-link">
            <img src="./assets/images/github-mark.png" alt="GitHub Logo" className="github-icon" />
          </a>
          <a href="https://weather-api-mod-9.onrender.com/" target="_blank" rel="noopener noreferrer" className="deployed-link">
            View Deployed Project
          </a>
        </div>
       
        
        <div className="portfolio__item employee-tracker">
          <h3>Employee Data Tracker</h3>
          <a href="https://github.com/heimsharon/Employee-Tracker-Database-using-CMS" target="_blank" rel="noopener noreferrer" className="github-link">
          <img src="./assets/images/github-mark-white.png" alt="GitHub Logo" className="github-icon" />
          </a>
          <a href="https://example-deployed-link.com" target="_blank" rel="noopener noreferrer" className="deployed-link">
            View Deployed Project
          </a>
        </div>
        
        
        <div className="portfolio__item portfolio-early">
          <h3>Portfolio Early</h3>
          <a href="https://github.com/heimsharon/Portfolio-Early" target="_blank" rel="noopener noreferrer" className="github-link">
          <img src="./assets/images/github-mark.png" alt="GitHub Logo" className="github-icon" />
          </a>
          <a href="https://heimsharon.github.io/Portfolio-Early/#" target="_blank" rel="noopener noreferrer" className="deployed-link">
            View Deployed Project
          </a>
        </div>
        
        
        <div className="portfolio__item aqua-buddy">
          <h3>Aqua Buddy</h3>
          <a href="https://github.com/bans-07/Aqua-Buddy" target="_blank" rel="noopener noreferrer" className="github-link">
          <img src="./assets/images/github-mark-white.png" alt="GitHub Logo" className="github-icon" />
          </a>
          <a href="https://bans-07.github.io/Aqua-Buddy/" target="_blank" rel="noopener noreferrer" className="deployed-link">
            View Deployed Project
          </a>
        </div>
       
       
        <div className="portfolio__item seo-optimization">
          <h3>HTML SEO</h3>
          <a href="https://github.com/heimsharon/SEO-HTML" target="_blank" rel="noopener noreferrer" className="github-link">
          <img src="./assets/images/github-mark.png" alt="GitHub Logo" className="github-icon" />
          </a>
          <a href="https://heimsharon.github.io/SEO-HTML/" target="_blank" rel="noopener noreferrer" className="deployed-link">
            View Deployed Project
          </a>
        </div>
        
        
        <div className="portfolio__item unknown-project">
          <h3>unknown</h3>
          <a href="https://github.com/heimsharon/Surf-Report" target="_blank" rel="noopener noreferrer" className="github-link">
          <img src="./assets/images/github-mark-white.png" alt="GitHub Logo" className="github-icon" />
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