// Social component displays links to social media profiles
export default function Social() {
    return (
        <div className="social__links">
            {/* GitHub profile link */}
            <a
                href="https://github.com/heimsharon"
                target="_blank"
                className="social__link social__link--github"
                rel="noopener noreferrer"
            >
                GitHub
            </a>
            {/* LinkedIn profile link */}
            <a
                href="https://www.linkedin.com/in/sharon-heim/"
                target="_blank"
                className="social__link social__link--linkedin"
                rel="noopener noreferrer"
            >
                LinkedIn
            </a>
            {/* Stack Overflow profile link */}
            <a
                href="https://stackoverflow.com/users/29979284/sharon-heim"
                target="_blank"
                className="social__link social__link--stackoverflow"
                rel="noopener noreferrer"
            >
                Stack Overflow
            </a>
        </div>
    );
}
