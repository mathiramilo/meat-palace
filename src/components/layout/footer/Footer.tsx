// Router
import { Link } from 'react-router-dom';
// Icons
import { ReactComponent as GithubIcon } from 'assets/icons/github.svg';
// Logo
import logoWhite from 'assets/img/logo/logo-white.png';
// Styles
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
                    <Link className="footer-link navbar-link" to='/'> Home </Link>
                    <Link className="footer-link navbar-link" to='/#about-us'> About Us </Link>
                    <Link className="footer-link navbar-link" to='/shop/all'> Shop </Link>
                </nav>

                {/* Footer Developed By */}
                <div className="footer-developed-by">
                    <p>Developed by Mathias Ramilo</p>
                    <a href="https://github.com/mathiramilo"
                       target="_blank" 
                       rel="noreferrer"
                       className="github-btn"
                    >
                        <GithubIcon className="github-icon" />
                    </a>
                </div>
            </div>
        </footer>
    )
}
