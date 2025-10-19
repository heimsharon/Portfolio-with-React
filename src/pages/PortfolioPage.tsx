export default function Portfolio() {
    return (
        <div className="portfolio">
            <h2 className="portfolio__title">Portfolio</h2>

            <div className="portfolio__container">
                {/* Weather Dashboard project */}
                <div className="portfolio__item portfolio__item--weather-dashboard">
                    <h3 className="portfolio__item-title">Weather Dashboard</h3>
                    <a
                        href="https://github.com/heimsharon/Weather-Dashboard-API-Usage"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="portfolio__github-link"
                    >
                        <img
                            src="/assets/images/github-mark.png"
                            alt="GitHub Logo"
                            className="portfolio__github-icon"
                        />
                    </a>
                    <a
                        href="https://weather-api-mod-9.onrender.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="portfolio__deployed-link"
                    >
                        View Deployed Project
                    </a>
                </div>

                {/* Employee Data Tracker project */}
                <div className="portfolio__item portfolio__item--employee-tracker">
                    <h3 className="portfolio__item-title">Employee Data Tracker</h3>
                    <a
                        href="https://github.com/heimsharon/Employee-Tracker-Database-using-CMS"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="portfolio__github-link"
                    >
                        <img
                            src="/assets/images/github-mark-white.png"
                            alt="GitHub Logo"
                            className="portfolio__github-icon"
                        />
                    </a>
                    <a
                        href="https://drive.google.com/file/d/1NT2wX6xkN-Jq-wIeR9K-pQviQRZ17PaW/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="portfolio__deployed-link"
                    >
                        View Demo Video
                    </a>
                </div>

                {/* Portfolio Early project */}
                <div className="portfolio__item portfolio__item--portfolio-early">
                    <h3 className="portfolio__item-title">Portfolio Early</h3>
                    <a
                        href="https://github.com/heimsharon/Portfolio-Early"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="portfolio__github-link"
                    >
                        <img
                            src="/assets/images/github-mark.png"
                            alt="GitHub Logo"
                            className="portfolio__github-icon"
                        />
                    </a>
                    <a
                        href="https://heimsharon.github.io/Portfolio-Early/#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="portfolio__deployed-link"
                    >
                        View Deployed Project
                    </a>
                </div>

                {/* Aqua Buddy project */}
                <div className="portfolio__item portfolio__item--aqua-buddy">
                    <h3 className="portfolio__item-title">Aqua Buddy</h3>
                    <a
                        href="https://github.com/bans-07/Aqua-Buddy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="portfolio__github-link"
                    >
                        <img
                            src="/assets/images/github-mark-white.png"
                            alt="GitHub Logo"
                            className="portfolio__github-icon"
                        />
                    </a>
                    <a
                        href="https://bans-07.github.io/Aqua-Buddy/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="portfolio__deployed-link"
                    >
                        View Deployed Project
                    </a>
                </div>

                {/* HTML SEO project */}
                <div className="portfolio__item portfolio__item--seo-optimization">
                    <h3 className="portfolio__item-title">HTML SEO</h3>
                    <a
                        href="https://github.com/heimsharon/SEO-HTML"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="portfolio__github-link"
                    >
                        <img
                            src="/assets/images/github-mark.png"
                            alt="GitHub Logo"
                            className="portfolio__github-icon"
                        />
                    </a>
                    <a
                        href="https://heimsharon.github.io/SEO-HTML/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="portfolio__deployed-link"
                    >
                        View Deployed Project
                    </a>
                </div>

                {/* Payroll Tracker project */}
                <div className="portfolio__item portfolio__item--payroll-tracker">
                    <h3 className="portfolio__item-title">Payroll Tracker</h3>
                    <a
                        href="https://github.com/heimsharon/Payroll-Tracker"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="portfolio__github-link"
                    >
                        <img
                            src="/assets/images/github-mark-white.png"
                            alt="GitHub Logo"
                            className="portfolio__github-icon"
                        />
                    </a>
                    <a
                        href="https://heimsharon.github.io/Payroll-Tracker/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="portfolio__deployed-link"
                    >
                        View Deployed Project
                    </a>
                </div>
            </div>
        </div>
    );
}
