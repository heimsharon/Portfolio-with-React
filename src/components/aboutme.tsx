import React from 'react';
import "../assets/style.css";

const AboutMe: React.FC = () => {
  return (
    <div className="about-me">
      <img src="/assets/images/portphoto.jpg" alt="Profile" className="about-me__image" />
      <div className="about-me__content">
        <h1>About Me</h1>
        <p>
          After spending 24 rewarding years as a paramedic, I’ve decided to transition into an exciting new
          career in web development. Currently, I’m enrolled in the Full Stack Web Development program,
          where I’m learning to build both front-end and back-end solutions.
        </p>
        <p>
          My time as a paramedic has given me a unique perspective and skill set: the ability to stay calm
          under pressure, think critically, and solve complex problems quickly. These are qualities I now
          bring to the world of technology, along with a passion for creating efficient, user-friendly
          digital experiences.
        </p>
        <p>
          I’m eager to leverage my skills and experience to contribute to innovative projects and
          collaborate with teams to develop impactful web applications. This career change is a new
          chapter for me, and I’m excited to grow and make a meaningful impact in this field.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;