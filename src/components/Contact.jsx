import React, { useState } from 'react';
import { Mail, MapPin, Download } from 'lucide-react';
import Button from './ui/Button';
import Card from './ui/Card';
import { content } from '../data/content';
import './Contact.css';

const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Create mailto link with form data
        const subject = encodeURIComponent(`Website Contact from ${formState.name}`);
        const body = encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`);
        window.location.href = `mailto:${content.personal.email}?subject=${subject}&body=${body}`;

        setTimeout(() => {
            setIsSubmitting(false);
            setFormState({ name: '', email: '', message: '' });
        }, 1000);
    };

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="contact-section">
            <div className="section-header">
                <h2 className="section-title">Let's Connect</h2>
                <p className="section-subtitle">Open to opportunities and interesting conversations</p>
            </div>

            <div className="contact-container">
                <div className="contact-info">
                    <h3>Get In Touch</h3>
                    <p className="contact-message">
                        I'm always interested in new opportunities, collaborations, or just chatting about technology and project management.
                        Feel free to reach out using the form or connect on social media.
                    </p>

                    <div className="contact-details">
                        <div className="contact-detail-item">
                            <div className="icon-box"><Mail size={20} /></div>
                            <span>{content.personal.email}</span>
                        </div>
                        <div className="contact-detail-item">
                            <div className="icon-box"><MapPin size={20} /></div>
                            <span>{content.personal.location}</span>
                        </div>
                    </div>

                    <div className="resume-download">
                        <Button variant="outline" href="/Resume.pdf" download>
                            <Download size={18} style={{ marginRight: '8px' }} /> Download CV
                        </Button>
                    </div>
                </div>

                <div className="contact-form-wrapper">
                    <Card>
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formState.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your Name"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formState.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="your.email@example.com"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formState.message}
                                    onChange={handleChange}
                                    required
                                    placeholder="How can I help you?"
                                    rows="4"
                                ></textarea>
                            </div>
                            <Button type="submit" variant="primary" disabled={isSubmitting} className="submit-btn">
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </Button>
                        </form>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default Contact;
