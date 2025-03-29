import React from 'react';
import { Link } from 'react-router-dom';
import "../assets/style.css"; 

const Contact: React.FC = () => {
  return (
    <div className="contact-image">
      <div className="contact section">
        <h2>Contact Me</h2>
        <form className="contact__form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <input type="submit" value="Send" />
        </form>
        <Link to="/">Back to Home</Link>
      </div>
    </div>
  );
};

export default Contact;