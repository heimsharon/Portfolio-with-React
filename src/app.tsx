import React from 'react';
import { Routes, Route, Navigate} from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Aboutme from './components/aboutme';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Resume from './components/resume';

const App: React.FC = () => {
  return (
    <>
    
      <Header />
      <a href="/about-me">About Me</a>
      <Routes>
        <Route path="/" element={<Navigate to="/about-me" />} />
        <Route path="/about-me" element={<Aboutme />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
      <Footer />
    
    </>
  );
};

export default App;