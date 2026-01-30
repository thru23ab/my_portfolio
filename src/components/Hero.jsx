import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import { content } from '../data/content';
import './Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero-section">
            <div className="hero-content">
                <motion.div
                    className="hero-text"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="hero-greeting">Hello, I'm</span>
                    <h1 className="hero-name">{content.personal.name}</h1>
                    <h2 className="hero-role">{content.personal.role}</h2>
                    <p className="hero-bio">{content.personal.tagline}</p>

                    <div className="hero-actions">
                        <Button variant="primary" href="#projects">View My Work</Button>
                        <Button variant="secondary" href="#contact">Contact Me</Button>
                    </div>
                </motion.div>

                <motion.div
                    className="hero-visual"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="hero-image-placeholder">
                        <div
                            className="hero-circle"
                            style={content.personal.avatar ? { backgroundImage: `url(${content.personal.avatar})` } : {}}
                        ></div>
                    </div>
                </motion.div>
            </div>

            <div className="hero-background-shape"></div>
        </section>
    );
};

export default Hero;
