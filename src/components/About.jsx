import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';
import Card from './ui/Card';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="section-header">
                <h2 className="section-title">About Me</h2>
                <p className="section-subtitle">Who I am beyond the resume</p>
            </div>

            <div className="about-content">
                <motion.div
                    className="about-bio"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {content.personal.aboutImage && (
                        <div className="about-image-container">
                            <img src={content.personal.aboutImage} alt="About Me" className="about-image" />
                        </div>
                    )}
                    <div className="about-text-content">
                        <p>{content.personal.bio}</p>
                        <div className="about-details">
                            <div>
                                <span className="detail-label">Location:</span> {content.personal.location}
                            </div>
                            <div>
                                <span className="detail-label">Email:</span> {content.personal.email}
                            </div>
                        </div>
                    </div>
                </motion.div>

                <div className="about-philosophy">
                    <Card className="philosophy-card">
                        <h3>My Approach</h3>
                        <p>
                            I believe in technology as an enabler for human potential. My work involves not just managing timelines,
                            but understanding the 'why' behind every project. I value transparency, empathy, and continuous improvement.
                        </p>
                    </Card>
                    <Card className="philosophy-card">
                        <h3>Social and Curious</h3>
                        <p>
                            I love spending time with my friends and familiy, traveling, doing sports, and learning new skills and hobbies.
                        </p>
                    </Card>
                    <Card className="philosophy-card">
                        <h3>What Drives Me</h3>
                        <p>
                            Seeing a team come together to solve a difficult problem is what gets me out of bed.
                            I'm passionate about building systems that are resilient, scalable, and user-centric.
                        </p>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default About;
