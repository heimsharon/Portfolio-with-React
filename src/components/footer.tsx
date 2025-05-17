// filepath: src/components/footer.tsx
// This file contains the Footer component, which displays copyright and social links.
import React from 'react';
import '../styles/style.css';
import Social from './social';

// Footer component displays copyright and social links
const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer__content">
                {/* Copyright notice */}
                <p>&copy; 2025 Sharon Heim. All rights reserved.</p>
                {/* Social media links component */}
                <Social />
            </div>
        </footer>
    );
};

export default Footer;
