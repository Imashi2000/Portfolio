import './Footer.css'
import { NAV_LINKS } from '../../utils/data';
import SocialIcons from '../SocialIcons/SocialIcons';

const Footer = () =>
{
    return (
        <footer className="footer">
            <div className="footer-glow" aria-hidden="true" />

            <div className="footer-content">
                <div className="footer-brand">
                    <a className="footer-name" href="#PROFILE">Imashi Samarawickrama</a>
                    <p>Software engineer building web systems, backend APIs and cross-platform mobile apps.</p>
                    <SocialIcons />
                </div>

                <nav className="footer-nav" aria-label="Footer">
                    <h2>Explore</h2>
                    <ul>
                        {NAV_LINKS.map((link) => (
                            <li key={link.id}><a href={`#${link.id}`}>{link.label}</a></li>
                        ))}
                    </ul>
                </nav>

                <div className="footer-contact">
                    <h2>Get in touch</h2>
                    <a className="footer-email" href="mailto:imashinethmini88@gmail.com">imashinethmini88@gmail.com</a>
                    <p className="footer-status">
                        <span aria-hidden="true" />
                        Open to new opportunities
                    </p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} Imashi Samarawickrama. All rights reserved.</p>
                <a className="footer-top" href="#PROFILE">
                    Back to top
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.200" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M12 19V5M6 11l6-6 6 6" />
                    </svg>
                </a>
            </div>
        </footer>
    )
}

export default Footer;
