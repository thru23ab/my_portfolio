import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';
import './Skills.css';

const Skills = () => {
    return (
        <section id="skills" className="skills-section">
            <div className="section-header">
                <h2 className="section-title">My Toolkit</h2>
                <p className="section-subtitle">Competencies and core strengths</p>
            </div>

            <div className="skills-container">
                <motion.div
                    className="skills-category"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h3>Technical Skills</h3>
                    <div className="skills-list">
                        {content.skills.technical.map((skill, index) => (
                            <div key={index} className="skill-item">
                                <span className="skill-check">✓</span>
                                <span className="skill-name">{skill}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    className="skills-category"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h3>Soft Skills & Leadership</h3>
                    <div className="skills-list">
                        {content.skills.soft.map((skill, index) => (
                            <div key={index} className="skill-item">
                                <span className="skill-check">✓</span>
                                <span className="skill-name">{skill}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
