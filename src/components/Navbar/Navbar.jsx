import React from 'react'
import './Navbar.css'
import MobileNav from './MobileNav/MobileNav';
import { useState } from 'react';
import HireMe from '../HireMe/HireMe';

const Navbar = () =>
{
    const [openMenu, setOpenMenu] = useState(false);
    const [isHireMeOpen, setIsHireMeOpen] = useState(false);

    const toggleMenu = () =>
    {
        setOpenMenu(!openMenu);
        if (isHireMeOpen) {
            setIsHireMeOpen(false); // Close modal if it’s open
        }
    };

    const toggleModal = () =>
    {
        setIsHireMeOpen(!isHireMeOpen);
    };

    return (
        <>
            <MobileNav 
                isOpen={openMenu} 
                toggleMenu={toggleMenu} 
                toggleModal={toggleModal} 
            />

            <nav className='nav-wrapper'>
                <div className='nav-content'>
                    <div className='moto-text'>
                        Crafting Code, Building Futures
                    </div>

                    <ul>
                        <li>
                            <a className='menu-item' href='#PROFILE' >Home</a>
                        </li>
                        <li>
                            <a className='menu-item' href='#SKILLS'>Skills</a>
                        </li>
                        <li>
                            <a className='menu-item' href='#WORK'>Work Experience</a>
                        </li>
                        <li>
                            <a className='menu-item' href='#PROJECT'>Project</a>
                        </li>
                        <li>
                            <a className='menu-item' href="#CONTACT">Contact Me</a>
                        </li>

                        <button className="contact-btn" onClick={toggleModal}>
                            Hire Me
                        </button>
                    </ul>

                    <button className='menu-btn' onClick={toggleMenu}>
                        <span
                            className="material-symbols-outlined"
                            style={{ fontSize: "1.8rem" }}
                        >
                            {openMenu ? "close" : "menu"}
                        </span>

                    </button>
                </div>
            </nav>
            {isHireMeOpen && <HireMe onClose={toggleModal} />}
        </>
    )
}

export default Navbar