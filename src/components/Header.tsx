import { Link } from 'react-router-dom';

export default function Header() {
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
}
