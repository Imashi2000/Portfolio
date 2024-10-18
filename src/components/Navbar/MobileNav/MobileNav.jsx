import React from "react";
import './MobileNav.css'
import HireMe from "../../HireMe/HireMe";



const MobileNav = ({ isOpen, toggleMenu, toggleModal }) =>
{
    {
        return (
            <>
                <div
                    className={`mobile-menu ${isOpen ? "active" : ""}`}
                    onClick={toggleMenu}
                >
                    <div className="mobile-menu-container">
                        <img className="logo" src="./assets/images/logo1.jpg" alt="" />

                        <ul>
                            <li>
                                <a className="menu-item" href="#PROFILE">Home</a>
                            </li>
                            <li>
                                <a className='menu-item' href="#SKILLS">Skills</a>
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

                            <button className="contact-btn" onClick={() => { toggleModal(); toggleMenu(); }}>
                                Hire Me
                            </button>
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}

export default MobileNav;