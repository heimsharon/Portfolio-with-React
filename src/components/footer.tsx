import React from 'react';
import "../styles/style.css";
import Social from './social';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p>&copy; 2025 Sharon Heim. All rights reserved.</p>
        <Social />
      </div>
    </footer>
  );
};

export default Footer;