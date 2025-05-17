// filepath: src/components/contact.tsx
// This file contains the Contact component, which is a form for users to send messages.
import React, { useState } from 'react';
import '../styles/style.css';

// Contact component for the portfolio site
const Contact: React.FC = () => {
    // State for form validation errors
    const [formErrors, setFormErrors] = useState({
        name: '',
        email: '',
        message: '',
    });
    // State for form input values
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    // State for general error message (e.g., if fields are empty)
    const [error, setError] = useState('');
    // State for showing success message after submission
    const [success, setSuccess] = useState(false);

    // Helper function to validate email format
    const validateEmail = (email: string) => {
        // This regex checks for a valid email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // Test the email against the regex and return true if valid
        return emailRegex.test(email);
    };

    // Handle blur event for form fields to validate input
    const handleBlur = (
        e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;

        // Set error if field is empty
        setFormErrors((prevErrors) => ({
            ...prevErrors,
            [name]:
                value.trim() === ''
                    ? `${
                          name.charAt(0).toUpperCase() + name.slice(1)
                      } is required`
                    : '',
        }));

        // Additional validation for email format
        if (name === 'email' && value.trim() !== '' && !validateEmail(value)) {
            // If email is invalid, set error message
            setFormErrors((prevErrors) => ({
                ...prevErrors,
                email: 'Invalid email address',
            }));
        }
    };

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Check if any fields are empty
        if (!formData.name || !formData.email || !formData.message) {
            // If any field is empty, set error message
            setError('All fields are required.');
            return;
        }

        setError('');
        setSuccess(true);
        // Add form submission logic here
        // e.g., send formData to an API endpoint
        // fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })
    };

    return (
        <div className="contact-image">
            <div className="contact section">
                <h2>Contact Me</h2>
                <div className="contact__content">
                    <p>
                        I’d love to hear from you! Whether you have a question,
                        a project idea, or just want to connect for possible
                        future projects, feel free to reach out using the form
                        below. I’ll do my best to get back to you as soon as
                        possible. Let’s create something amazing together!
                    </p>
                    <form className="contact__form" onSubmit={handleSubmit}>
                        {/* Name input */}
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    name: e.target.value,
                                })
                            }
                            onBlur={handleBlur}
                        />
                        {/* Show error for name if any */}
                        {formErrors.name && (
                            <span className="error">{formErrors.name}</span>
                        )}
                        {/* Email input */}
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    email: e.target.value,
                                })
                            }
                            onBlur={handleBlur}
                        />
                        {/* Show error for email if any */}
                        {formErrors.email && (
                            <span className="error">{formErrors.email}</span>
                        )}
                        {/* Message textarea */}
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    message: e.target.value,
                                })
                            }
                            onBlur={handleBlur}
                        ></textarea>
                        {/* Show error for message if any */}
                        {formErrors.message && (
                            <span className="error">{formErrors.message}</span>
                        )}
                        {/* Show general error if any */}
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        {/* Show success message if form submitted */}
                        {success && (
                            <p style={{ color: 'green' }}>
                                Message sent successfully!
                            </p>
                        )}
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
