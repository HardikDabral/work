import React from 'react';
import { ArrowUp } from 'lucide-react';
import './style/Footer.css';
import apple from './style/images/apple.svg'
import facebook from './style/images/facebook.svg';
import google from './style/images/google.svg';
import insta from './style/images/instagram.svg';
const Footer = () => {
    const footerNav = [
        {
            title: "START A BUSINESS",
            links: ["Features", "Solutions", "Integrations", "Enterprise", "Solutions"]
        },
        {
            title: "GOVERNMENT REGISTRATION",
            links: ["Partners", "Community", "Developers", "App", "Blog"]
        },
        {
            title: "COMPLIANCE & TAX",
            links: ["Channels", "Scale", "Watch the Demo", "Our Competition"]
        },
        {
            title: "BIS & CDSCO",
            links: ["About Us", "News", "Leadership", "Media Kit"]
        }
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer">
            <div className="max-w-7xl mx-auto px-4">
                <div className="footer-content">
                    {/* Top section with tagline and social icons */}
                    {/* Navigation Links */}
                    <nav className="footer-nav">
                    <div className="mb-12">
                        <p className="footer-tagline">
                            Design outstanding interfaces with advanced Figma features in a matter of minutes.
                        </p>
                        <div className="social-icons">
                            <a href="#" aria-label="Facebook">
                                <img src={facebook} alt="Facebook logo" className="social-icon-img" />
                            </a>
                            <a href="#" aria-label="Google">
                                <img src={google} alt="Google logo" className="social-icon-img" />
                            </a>
                            <a href="#" aria-label="Apple">
                                <img src={apple} alt="Apple logo" className="social-icon-img" />
                            </a>
                            <a href="#" aria-label="Instagram">
                                <img src={insta} alt="Instagram logo" className="social-icon-img" />
                            </a>
                        </div>

                    </div>
                        {footerNav.map((section, index) => (
                            <div key={index} className="footer-nav-section">
                                <h3 className="footer-nav-title">{section.title}</h3>
                                <ul>
                                    {section.links.map((link, linkIndex) => (
                                        <li key={linkIndex}>
                                            <a href="#" className="footer-nav-link">
                                                {link}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </nav>

                    {/* Bottom section with copyright and scroll to top */}
                    <div className="footer-bottom">
                        
                        <button
                            onClick={scrollToTop}
                            className="scroll-to-top"
                            aria-label="Scroll to top"
                        >
                            <ArrowUp size={16} />
                        </button>
                        <p className="copyright">
                            © 2024 Registerkaro. All Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;