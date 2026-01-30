import React from 'react';
import { content } from '../data/content';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h3>{content.personal.name}</h3>
                        <p>{content.personal.tagline}</p>
                    </div>
                    <div className="footer-social">
                        {content.personal.social.map((item) => (
                            <a key={item.name} href={item.url} aria-label={item.name} className="social-link">
                                <item.icon size={20} />
                            </a>
                        ))}
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} {content.personal.name}. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
