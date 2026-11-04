import { useEffect, useRef, useState } from 'react'
import './Navbar.css'
import MobileNav from './MobileNav/MobileNav';
import HireMe from '../HireMe/HireMe';
import { NAV_LINKS } from '../../utils/data';

const Navbar = () =>
{
    const [openMenu, setOpenMenu] = useState(false);
    const [isHireMeOpen, setIsHireMeOpen] = useState(false);
    const [activeId, setActiveId] = useState('');
    const progressBar = useRef();

    const toggleMenu = () =>
    {
        setOpenMenu(!openMenu);
    };

    const openHireMe = () =>
    {
        setOpenMenu(false);
        setIsHireMeOpen(true);
    };

    // Stop the page behind the menu or popup from scrolling
    useEffect(() =>
    {
        document.body.style.overflow = openMenu || isHireMeOpen ? 'hidden' : '';

        return () =>
        {
            document.body.style.overflow = '';
        };
    }, [openMenu, isHireMeOpen]);

    useEffect(() =>
    {
        const closeOnEscape = (e) =>
        {
            if (e.key === 'Escape') {
                setOpenMenu(false);
                setIsHireMeOpen(false);
            }
        };

        // The mobile menu must not stay open (and lock scrolling) after resizing to desktop
        const desktop = window.matchMedia('(min-width: 1101px)');
        const closeOnDesktop = (e) =>
        {
            if (e.matches) setOpenMenu(false);
        };

        window.addEventListener('keydown', closeOnEscape);
        desktop.addEventListener('change', closeOnDesktop);

        return () =>
        {
            window.removeEventListener('keydown', closeOnEscape);
            desktop.removeEventListener('change', closeOnDesktop);
        };
    }, []);

    // Highlight the link for the section in the middle of the screen
    useEffect(() =>
    {
        const observer = new IntersectionObserver((entries) =>
        {
            entries.forEach((entry) =>
            {
                if (entry.isIntersecting) setActiveId(entry.target.id);
            });
        }, { rootMargin: '-45% 0px -50% 0px' });

        ['PROFILE', ...NAV_LINKS.map((link) => link.id)].forEach((id) =>
        {
            observer.observe(document.getElementById(id));
        });

        return () => observer.disconnect();
    }, []);

    useEffect(() =>
    {
        const updateProgress = () =>
        {
            const scrollable = document.documentElement.scrollHeight - window.innerHeight;
            progressBar.current.style.transform = `scaleX(${scrollable > 0 ? window.scrollY / scrollable : 0})`;
        };

        updateProgress();
        window.addEventListener('scroll', updateProgress, { passive: true });
        window.addEventListener('resize', updateProgress);

        return () =>
        {
            window.removeEventListener('scroll', updateProgress);
            window.removeEventListener('resize', updateProgress);
        };
    }, []);

    return (
        <>
            <MobileNav
                isOpen={openMenu}
                toggleMenu={toggleMenu}
                openHireMe={openHireMe}
                activeId={activeId}
            />

            <nav className='nav-wrapper' aria-label='Main'>
                <div className='nav-content'>
                    <a className='nav-brand' href='#PROFILE'>
                        Imashi Samarawickrama
                    </a>

                    <ul>
                        {NAV_LINKS.map((link) => (
                            <li key={link.id}>
                                <a className={`menu-item ${activeId === link.id ? 'active' : ''}`} href={`#${link.id}`}>
                                    {link.label}
                                </a>
                            </li>
                        ))}
                        <li>
                            <button className='contact-btn' onClick={openHireMe}>
                                Hire Me
                            </button>
                        </li>
                    </ul>

                    <button
                        className='menu-btn'
                        onClick={toggleMenu}
                        aria-label='Open menu'
                        aria-expanded={openMenu}
                    >
                        <svg viewBox='0 0 24 24' width='26' height='26' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' aria-hidden='true'>
                            <path d='M4 7h16M4 12h16M4 17h16' />
                        </svg>
                    </button>
                </div>
                <span className='scroll-progress' ref={progressBar} aria-hidden='true' />
            </nav>
            {isHireMeOpen && <HireMe onClose={() => setIsHireMeOpen(false)} />}
        </>
    )
}

export default Navbar
