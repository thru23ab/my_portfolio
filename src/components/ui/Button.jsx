import React from 'react';
import { motion } from 'framer-motion';
import './Button.css';

const Button = ({ children, variant = "primary", onClick, href, className = "" }) => {
  const baseClass = "btn";
  const variantClass = `btn-${variant}`;

  const Component = href ? motion.a : motion.button;
  const props = href ? { href } : { onClick };

  return (
    <Component
      className={`${baseClass} ${variantClass} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Button;
