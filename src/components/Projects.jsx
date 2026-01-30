import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { content } from '../data/content';
import Carousel from './ui/Carousel';
import Card from './ui/Card';
import './Projects.css';

const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <div className="section-header">
                <h2 className="section-title">Projects I've Worked On</h2>
                <p className="section-subtitle">Real Life Projects I've Worked On</p>
            </div>

            <div className="projects-grid">
                {content.projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Card className="project-card no-padding">
                            <Carousel images={project.images} height="200px" />
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>

                                <div className="project-tech">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="tech-tag">{tech}</span>
                                    ))}
                                </div>

                                <a href={project.link} className="project-link">
                                    View Project <ExternalLink size={16} />
                                </a>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
