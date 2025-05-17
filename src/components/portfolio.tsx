// filepath: src/components/portfolio.tsx
// This file contains the Portfolio component, which displays a list of featured projects with links to GitHub and deployed versions.
import React from 'react';
import '../styles/style.css';

// Displays list of featured projects with GitHub and deployed links
const Portfolio: React.FC = () => {
    return (
        <div className="portfolio section">
            <h2>Portfolio</h2>

            {/* Container for all portfolio items */}
            <div className="portfolio_container">
                {/* Weather Dashboard project */}
                <div className="portfolio__item weather-dashboard">
                    <h3>Weather Dashboard</h3>
                    {/* GitHub link */}
                    <a
                        href="https://github.com/heimsharon/Weather-Dashboard-API-Usage"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-link"
                    >
                        <img
                            src="/assets/images/github-mark.png"
                            alt="GitHub Logo"
                            className="github-icon"
                        />
                    </a>
                    {/* Deployed project link */}
                    <a
                        href="https://weather-api-mod-9.onrender.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="deployed-link"
                    >
                        View Deployed Project
                    </a>
                </div>

                {/* Employee Data Tracker project */}
                <div className="portfolio__item employee-tracker">
                    <h3>Employee Data Tracker</h3>
                    {/* GitHub link */}
                    <a
                        href="https://github.com/heimsharon/Employee-Tracker-Database-using-CMS"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-link"
                    >
                        <img
                            src="/assets/images/github-mark-white.png"
                            alt="GitHub Logo"
                            className="github-icon"
                        />
                    </a>
                    {/* Deployed project link (video demo) */}
                    <a
                        href="https://drive.google.com/file/d/1NT2wX6xkN-Jq-wIeR9K-pQviQRZ17PaW/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="deployed-link"
                    >
                        View Deployed Project
                    </a>
                </div>

                {/* Portfolio Early project */}
                <div className="portfolio__item portfolio-early">
                    <h3>Portfolio Early</h3>
                    {/* GitHub link */}
                    <a
                        href="https://github.com/heimsharon/Portfolio-Early"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-link"
                    >
                        <img
                            src="/assets/images/github-mark.png"
                            alt="GitHub Logo"
                            className="github-icon"
                        />
                    </a>
                    {/* Deployed project link */}
                    <a
                        href="https://heimsharon.github.io/Portfolio-Early/#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="deployed-link"
                    >
                        View Deployed Project
                    </a>
                </div>

                {/* Aqua Buddy project */}
                <div className="portfolio__item aqua-buddy">
                    <h3>Aqua Buddy</h3>
                    {/* GitHub link */}
                    <a
                        href="https://github.com/bans-07/Aqua-Buddy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-link"
                    >
                        <img
                            src="/assets/images/github-mark-white.png"
                            alt="GitHub Logo"
                            className="github-icon"
                        />
                    </a>
                    {/* Deployed project link */}
                    <a
                        href="https://bans-07.github.io/Aqua-Buddy/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="deployed-link"
                    >
                        View Deployed Project
                    </a>
                </div>

                {/* HTML SEO project */}
                <div className="portfolio__item seo-optimization">
                    <h3>HTML SEO</h3>
                    {/* GitHub link */}
                    <a
                        href="https://github.com/heimsharon/SEO-HTML"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-link"
                    >
                        <img
                            src="/assets/images/github-mark.png"
                            alt="GitHub Logo"
                            className="github-icon"
                        />
                    </a>
                    {/* Deployed project link */}
                    <a
                        href="https://heimsharon.github.io/SEO-HTML/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="deployed-link"
                    >
                        View Deployed Project
                    </a>
                </div>

                {/* Payroll Tracker project */}
                <div className="portfolio__item payroll-tracker">
                    <h3>Payroll Tracker</h3>
                    {/* GitHub link */}
                    <a
                        href="https://github.com/heimsharon/Payroll-Tracker"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-link"
                    >
                        <img
                            src="/assets/images/github-mark-white.png"
                            alt="GitHub Logo"
                            className="github-icon"
                        />
                    </a>
                    {/* Deployed project link */}
                    <a
                        href="https://heimsharon.github.io/Payroll-Tracker/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="deployed-link"
                    >
                        View Deployed Project
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
