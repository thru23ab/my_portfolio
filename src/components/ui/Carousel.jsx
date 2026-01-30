import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Carousel.css';

const Carousel = ({ images, height = "300px", className = "" }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    if (!images || images.length === 0) return null;

    const navTo = (index) => {
        setCurrentIndex(index);
    };

    const next = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prev = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className={`carousel-container ${className}`} style={{ height }}>
            <div className="carousel-slide">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={currentIndex}
                        src={images[currentIndex]}
                        alt={`Slide ${currentIndex + 1}`}
                        className="carousel-image"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    />
                </AnimatePresence>
            </div>

            {images.length > 1 && (
                <>
                    <button className="carousel-btn prev" onClick={(e) => { e.stopPropagation(); prev(); }}>
                        <ChevronLeft size={24} />
                    </button>
                    <button className="carousel-btn next" onClick={(e) => { e.stopPropagation(); next(); }}>
                        <ChevronRight size={24} />
                    </button>

                    <div className="carousel-dots">
                        {images.map((_, idx) => (
                            <button
                                key={idx}
                                className={`carousel-dot ${idx === currentIndex ? 'active' : ''}`}
                                onClick={(e) => { e.stopPropagation(); navTo(idx); }}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default Carousel;
