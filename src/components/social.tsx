import React from 'react';
import "../styles/style.css";

const Social: React.FC = () => {
  return (
    <div className="social__links">
      <a href="https://github.com/heimsharon" target="_blank" className="social-icon github" rel="noopener noreferrer">
        GitHub
      </a>
      <a href="https://www.linkedin.com/in/sharon-heim/" target="_blank" className="social-icon linkedin" rel="noopener noreferrer">
        LinkedIn
      </a>
      <a href="https://stackoverflow.com/users/29979284/sharon-heim" target="_blank" className="social-icon stackoverflow" rel="noopener noreferrer">
        Stack Overflow
      </a>
    </div>
  );
};

export default Social;