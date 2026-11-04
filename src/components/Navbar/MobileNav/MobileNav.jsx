import './MobileNav.css'
import { NAV_LINKS } from '../../../utils/data';
import SocialIcons from '../../SocialIcons/SocialIcons';

const NAV_ICONS = {
    ABOUT: <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21a8 8 0 0 1 16 0" />,
    WORK: <path d="M4 8h16v12H4zM9 8V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3M4 13h16" />,
    PROJECT: <path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z" />,
    SKILLS: <path d="M8 8l-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" />,
    EDUCATION: <path d="M2 9l10-5 10 5-10 5zM6 11.500V16c0 1.500 3 3 6 3s6-1.500 6-3v-4.500" />,
    CONTACT: <path d="M4 6h16v12H4zM4 7l8 6 8-6" />
};

const MobileNav = ({ isOpen, toggleMenu, openHireMe, activeId }) =>
{
    // Links and the close button close the menu; other taps inside the panel do nothing
    const handleClick = (e) =>
    {
        if (e.target === e.currentTarget || e.target.closest('.menu-link, .menu-close, .social-icons a')) {
            toggleMenu();
        }
    };

    return (
        <div
            className={`mobile-menu ${isOpen ? "active" : ""}`}
            onClick={handleClick}
        >
            <div className="mobile-menu-container" role="dialog" aria-modal="true" aria-label="Menu">
                <div className="menu-header">
                    <img src="./assets/images/p3.JPG" alt="" width="48" height="48" />
                    <div>
                        <p className="menu-name">Imashi Samarawickrama</p>
                        <p className="menu-role">Software Engineer</p>
                    </div>
                    <button className="menu-close" aria-label="Close menu">
                        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                            <path d="M6 6l12 12M18 6L6 18" />
                        </svg>
                    </button>
                </div>

                <ul className="menu-links">
                    {NAV_LINKS.map((link, index) => (
                        <li key={link.id} style={{ '--item': index }}>
                            <a className={`menu-link ${activeId === link.id ? "active" : ""}`} href={`#${link.id}`}>
                                <span className="menu-link-icon">
                                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.800" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        {NAV_ICONS[link.id]}
                                    </svg>
                                </span>
                                {link.label}
                                <svg className="menu-link-arrow" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M9 6l6 6-6 6" />
                                </svg>
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="menu-footer">
                    <button className="contact-btn" onClick={openHireMe}>
                        Hire Me
                    </button>
                    <SocialIcons />
                </div>
            </div>
        </div>
    )
}

export default MobileNav;
