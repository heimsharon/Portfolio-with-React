import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './pages/AboutMePage';
import Portfolio from './pages/PortfolioPage';
import Contact from './pages/ContactPage';
import Resume from './pages/ResumePage';
import './styles/index.css';


export default function App() {
    return (
        <>

            <Header />

            <Routes>

                <Route path="/" element={<Navigate to="/about-me" />} />
                <Route path="/about-me" element={<AboutMe />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/resume" element={<Resume />} />
                {/* Fallback for undefined routes */}
                <Route path="*" element={<h1>404 - Page Not Found</h1>} />
            </Routes>

            <Footer />
        </>
    );
}
