import { useState, FormEvent, FocusEvent } from 'react';

export default function Contact() {
    const [formErrors, setFormErrors] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    // Helper function to validate email format
    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Handle blur event for form fields to validate input
    const handleBlur = (
        e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;

        // Set error if field is empty
        setFormErrors((prevErrors) => ({
            ...prevErrors,
            [name]:
                value.trim() === ''
                    ? `${name.charAt(0).toUpperCase() + name.slice(1)} is required`
                    : '',
        }));

        // Additional validation for email format
        if (name === 'email' && value.trim() !== '' && !validateEmail(value)) {
            setFormErrors((prevErrors) => ({
                ...prevErrors,
                email: 'Invalid email address',
            }));
        }
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        // Check if any fields are empty
        if (!formData.name || !formData.email || !formData.message) {
            setError('All fields are required.');
            return;
        }
        setError('');

        const form = e.target as HTMLFormElement;
        const formDataForSubmission = new FormData(form);

        try {
            const response = await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formDataForSubmission as any).toString(),
            });

            if (response.ok) {
                setSuccess(true);
                setFormData({ name: '', email: '', message: '' });
            } else {
                setError('Failed to Send Message. Please Try Again.');
            }
        } catch (error) {
            setError('Network Error. Please Try Again');
        }
    };

    return (
        <div className="contact">
            <div className="contact__container">
                <h2 className="contact__title">Contact Me</h2>
                <div className="contact__content">
                    <p className="contact__description">
                        I'd love to hear from you! Whether you have a question,
                        a project idea, or just want to connect for possible
                        future projects, feel free to reach out using the form
                        below. I'll do my best to get back to you as soon as
                        possible. Let's create something amazing together!
                    </p>
                    <form
                        className="contact__form"
                        onSubmit={handleSubmit}
                        name="contact"
                        method="POST"
                        data-netlify="true"
                        data-netlify-honeypot="bot-field"
                    >
                        <input
                            type="hidden"
                            name="form-name"
                            value="contact"
                        />
                        <p style={{ display: 'none' }}>
                            <label>
                                Don't fill this Out if you are human:
                                <input name="bot-field" />
                            </label>
                        </p>

                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            className="contact__input"
                            value={formData.name}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    name: e.target.value,
                                })
                            }
                            onBlur={handleBlur}
                        />

                        {formErrors.name && (
                            <span className="contact__error">
                                {formErrors.name}
                            </span>
                        )}

                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            className="contact__input"
                            value={formData.email}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    email: e.target.value,
                                })
                            }
                            onBlur={handleBlur}
                        />

                        {formErrors.email && (
                            <span className="contact__error">
                                {formErrors.email}
                            </span>
                        )}

                        <textarea
                            name="message"
                            placeholder="Your Message"
                            className="contact__textarea"
                            value={formData.message}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    message: e.target.value,
                                })
                            }
                            onBlur={handleBlur}
                        ></textarea>

                        {formErrors.message && (
                            <span className="contact__error">
                                {formErrors.message}
                            </span>
                        )}

                        {error && (
                            <p className="contact__error contact__error--general">
                                {error}
                            </p>
                        )}

                        {success && (
                            <p className="contact__success">
                                Message sent successfully!
                            </p>
                        )}

                        <button type="submit" className="contact__button">
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
