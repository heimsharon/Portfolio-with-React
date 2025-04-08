import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/style.css";

const Contact: React.FC = () => {
  const [ formErrors, setFormErrors ] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [ name ]: value.trim() === '' ? `${name.charAt(0).toUpperCase() + name.slice(1)} is required` : '',
    }));

    if (name === 'email' && value.trim() !== '' && !validateEmail(value)) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        email: 'Invalid email address',
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError('All fields are required.');
      return;
    }
    setError('');
    setSuccess(true);
    // Add form submission logic here
  };

  return (
    <div className="contact-image">
      <div className="contact section">
        <h2>Contact Me</h2>
        <div className="contact__content">
          <p>
            I’d love to hear from you! Whether you have a question, a project idea, or just want to connect for possible future projects, feel free to reach out using the form below.
            I’ll do my best to get back to you as soon as possible. Let’s create something amazing together!
          </p>
          <form className="contact__form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              onBlur={handleBlur}
            />
            {formErrors.name && <span className="error">{formErrors.name}</span>}
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              onBlur={handleBlur}
            />
            {formErrors.email && <span className="error">{formErrors.email}</span>}
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              onBlur={handleBlur}
            ></textarea>
            {formErrors.message && <span className="error">{formErrors.message}</span>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>Message sent successfully!</p>}
            <button type="submit">Send</button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;