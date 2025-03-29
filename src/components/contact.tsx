import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../assets/style.css"; 

const Contact: React.FC = () => {
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: value.trim() === '' ? `${name.charAt(0).toUpperCase() + name.slice(1)} is required` : '',
    }));

    if (name === 'email' && value.trim() !== '' && !validateEmail(value)) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        email: 'Invalid email address',
      }));
    }
  };

  return (
    <div className="contact-image">
      <div className="contact section">
        <h2>Contact Me</h2>
        <div className="contact__content">
          <p>If you have any questions or other inquiries, feel free to reach out!</p>
          <form className="contact__form">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              onBlur={handleBlur}
            />
            {formErrors.name && <span className="error">{formErrors.name}</span>}
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              onBlur={handleBlur}
            />
            {formErrors.email && <span className="error">{formErrors.email}</span>}
            <textarea
              name="message"
              placeholder="Your Message"
              onBlur={handleBlur}
            ></textarea>
            {formErrors.message && <span className="error">{formErrors.message}</span>}
            <input type="submit" value="Send" />
          </form>
        </div>
        
      </div>
    </div>
  );
};

export default Contact;