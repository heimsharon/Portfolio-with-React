import Social from './Social';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__content">
                <p>&copy; 2025 Sharon Heim. All rights reserved.</p>
                {/* Social media links component */}
                <Social />
            </div>
        </footer>
    );
}
