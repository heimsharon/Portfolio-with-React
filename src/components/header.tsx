// filepath: src/components/header.tsx
// This file contains the Header component, which displays the site title and navigation links.
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/style.css';

// Header component displays the site title and navigation links
const Header: React.FC = () => {
    return (
        <header>
            {/* Site owner's name or site title */}
            <h1>Sharon Heim</h1>
            {/* Navigation bar with links to different sections */}
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
