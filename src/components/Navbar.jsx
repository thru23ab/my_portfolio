import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { content } from '../data/content';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#" className="nav-logo">
          {content.personal.name.split(' ')[0]}
          <span className="nav-logo-accent">.IT</span>
        </a>

        <div className="nav-desktop">
          {content.navigation.map((item) => (
            <a key={item.name} href={item.href} className="nav-link">
              {item.name}
            </a>
          ))}
          <a href="#contact" className="nav-cta">Get In Touch</a>
        </div>

        <button className="nav-mobile-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isOpen && (
          <div className="nav-mobile-menu">
            {content.navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="nav-mobile-link"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
