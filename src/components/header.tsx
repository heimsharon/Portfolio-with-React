import React from 'react';
import { Link } from 'react-router-dom';
import "../assets/style.css";

const Header: React.FC = () => {
  return (
    <header>
      <h1>Sharon Heim</h1>
      <nav>
        <Link to="/about-me">About Me</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/resume">Resume</Link>
      </nav>
    </header>
  );
};

export default Header;