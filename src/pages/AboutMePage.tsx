export default function AboutMe() {
    return (
        <div className='about-me'>

            <img
                src="/assets/images/portphoto.jpg"
                alt="Profile"
                className='about-me__image'
            />
            <div className='about-me__content'>
                <h1>About Me</h1>

                <p>
                    For 24 years, I worked as a paramedic - first as a first responder
                    in 911 and inter-facility systems, and later in a hospital environment,
                    where I was surrounded by increasingly advanced medical technology. That
                    experience gave me a front-row seat to how software and digital
                    systems impact not just emergency care, but also the everyday lives
                    of patients and their families.
                </p>
                <p>
                    Seeing how technology could streamline care, improve outcomes, and support
                    both patients and medical teams is what first sparked my interest in
                    software development. I wanted to move from simply using these tools-
                    to designing and building them.
                </p>
                <p>
                    That curiosity led me to study web development, and I graduated from the
                    Full Stack Web Development Boot Camp at the University of Florida, where I
                    learned to create modern, responsive applications across both front-end and
                    back-end systems
                </p>
                <p> Today, I bring a problem-solving mindset shaped by healthcare experience
                    into technology-focused on building intuitive, efficient, and meaningful
                    digital experiences
                </p>
            </div>
        </div>
    );
}
