// filepath: src/components/social.tsx
// This file contains the Social component, which displays links to social media profiles.
import React from 'react';
import '../styles/style.css';

// Social component displays links to social media profiles
const Social: React.FC = () => {
    return (
        <div className="social__links">
            {/* GitHub profile link */}
            <a
                href="https://github.com/heimsharon"
                target="_blank"
                className="social-icon github"
                rel="noopener noreferrer"
            >
                GitHub
            </a>
            {/* LinkedIn profile link */}
            <a
                href="https://www.linkedin.com/in/sharon-heim/"
                target="_blank"
                className="social-icon linkedin"
                rel="noopener noreferrer"
            >
                LinkedIn
            </a>
            {/* Stack Overflow profile link */}
            <a
                href="https://stackoverflow.com/users/29979284/sharon-heim"
                target="_blank"
                className="social-icon stackoverflow"
                rel="noopener noreferrer"
            >
                Stack Overflow
            </a>
        </div>
    );
};

export default Social;
