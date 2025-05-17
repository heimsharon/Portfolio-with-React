// filepath: src/api.tsx
// This file contains the main App component that sets up routing and layout for the portfolio site.
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Aboutme from './components/aboutme';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Resume from './components/resume';

// Main App component that sets up routing and layout
const App: React.FC = () => {
    return (
        <>
            {/* Header with site title and navigation */}
            <Header />
            {/* Define application routes */}
            <Routes>
                {/* Redirect root path to About Me section */}
                <Route path="/" element={<Navigate to="/about-me" />} />
                {/* About Me page */}
                <Route path="/about-me" element={<Aboutme />} />
                {/* Portfolio page */}
                <Route path="/portfolio" element={<Portfolio />} />
                {/* Contact page */}
                <Route path="/contact" element={<Contact />} />
                {/* Resume page */}
                <Route path="/resume" element={<Resume />} />
                {/* Fallback for undefined routes */}
                <Route path="*" element={<h1>404 - Page Not Found</h1>} />
            </Routes>
            {/* Footer with copyright and social links */}
            <Footer />
        </>
    );
};

export default App;
