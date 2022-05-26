import React from 'react';
// Import icons
import { ReactComponent as GithubIcon } from '../../../assets/icons/github.svg';
// Import logo
import logoWhite from '../../../assets/img/logo/logo-white.png';
// Import css
import './Footer.css';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">

                {/* Footer Header */}
                <header className="footer-header">
                    <div className="fh-line"></div>
                    <div className="fh-logo">
                        <img src={logoWhite} alt="Meat Palace Logo" />
                    </div>
                    <div className="fh-line"></div>
                </header>

                {/* Footer Legend */}
                <p className="footer-legend">
                    “At Meat Palace we have the best imported cuts as well as local ones to fully satisfy our customers, which is our main objective. We also have the best cheeses, sausages and breads to accompany a perfect barbecue.”
                </p>

                {/* Footer Navigation */}
                <nav className="footer-nav">
                    <a className="footer-link navbar-link" href="#"> Home </a>
                    <a className="footer-link navbar-link" href="#"> About Us </a>
                    <a className="footer-link navbar-link" href="#"> Shop </a>
                </nav>

                {/* Footer Developed By */}
                <div className="footer-developed-by">
                    <p>Developed by Mathias Ramilo</p>
                    <a href="https://github.com/mathiramilo"
                       target="_blank" 
                       className="github-btn"
                    >
                        <GithubIcon className="github-icon" />
                    </a>
                </div>
            </div>
        </footer>
    )
}
