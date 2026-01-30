import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';
import Card from './ui/Card';
import Carousel from './ui/Carousel';
import './Interests.css';

const Interests = () => {
    return (
        <section id="interests" className="interests-section">
            <div className="section-header">
                <h2 className="section-title">Beyond the Office</h2>
                <p className="section-subtitle">What keeps me balanced and inspired</p>
            </div>

            <div className="interests-grid">
                {content.interests.map((interest, index) => {
                    // Support both array format and single image format
                    const images = interest.images || (interest.image ? [interest.image] : []);

                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="interest-card no-padding">
                                {images.length > 0 && (
                                    <div className="interest-image-container">
                                        <Carousel images={images} height="180px" />
                                        <div className="interest-overlay">
                                            <interest.icon size={32} />
                                        </div>
                                    </div>
                                )}
                                <div className="interest-content">
                                    <h3 className="interest-title">{interest.title}</h3>
                                    <p className="interest-description">{interest.description}</p>
                                </div>
                            </Card>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default Interests;
