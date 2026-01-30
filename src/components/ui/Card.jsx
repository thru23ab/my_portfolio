import React from 'react';
import { motion } from 'framer-motion';
import './Card.css';

const Card = ({ children, className = "" }) => {
  return (
    <motion.div
      className={`card ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
    >
      {children}
    </motion.div>
  );
};

export default Card;
