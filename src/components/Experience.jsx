import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { content } from '../data/content';
import Card from './ui/Card';
import './Experience.css';

const Experience = () => {
    return (
        <section id="experience" className="experience-section">
            <div className="section-header">
                <h2 className="section-title">Professional Journey</h2>
                <p className="section-subtitle">My career path and key milestones</p>
            </div>

            <div className="experience-timeline">
                {content.experience.map((exp, index) => (
                    <motion.div
                        key={index}
                        className="experience-item"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <div className="timeline-marker">
                            <div className="timeline-dot">
                                <Briefcase size={16} color="white" />
                            </div>
                            <div className="timeline-line"></div>
                        </div>

                        <div className="experience-content">
                            <Card className="experience-card">
                                <div className="exp-header">
                                    <div className="exp-title-group">
                                        {exp.logo && <img src={exp.logo} alt={`${exp.company} logo`} className="exp-logo" />}
                                        <div>
                                            <h3 className="exp-role">{exp.role}</h3>
                                            <h4 className="exp-company">{exp.company}</h4>
                                        </div>
                                    </div>
                                    <span className="exp-period">{exp.period}</span>
                                </div>

                                <p className="exp-description">{exp.description}</p>

                                <ul className="exp-achievements">
                                    {exp.achievements.map((achievement, i) => (
                                        <li key={i}>{achievement}</li>
                                    ))}
                                </ul>
                            </Card>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
