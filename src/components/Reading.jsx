import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import { content } from '../data/content';
import './Reading.css';

const Reading = () => {
    return (
        <section id="reading" className="reading-section">
            <div className="section-header">
                <h2 className="section-title">On My Bookshelf</h2>
                <p className="section-subtitle">Ideas I'm exploring and lessons I'm learning</p>
            </div>

            <div className="reading-grid">
                {content.reading.map((book, index) => (
                    <motion.div
                        key={index}
                        className="book-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -5 }}
                    >
                        <div className="book-cover-placeholder">
                            {book.cover ? (
                                <img src={book.cover} alt={book.title} className="book-cover-image" />
                            ) : (
                                <BookOpen size={40} color="white" />
                            )}
                        </div>
                        <div className="book-content">
                            <h3 className="book-title">{book.title}</h3>
                            <p className="book-author">by {book.author}</p>
                            <div className="book-thoughts">
                                <span className="quote-mark">“</span>
                                <p>{book.thoughts}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Reading;
