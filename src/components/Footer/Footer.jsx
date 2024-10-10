import React from "react";
import './Footer.css'

const Footer = () =>
{
    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#PROFILE">Home</a></li>
                        <li><a href="#SKILLS">Skills</a></li>
                        <li><a href="#WORK">Work Experience</a></li>
                        <li><a href="#PROJECT">Projects</a></li>
                        <li><a href="#CONTACT">Contact Me</a></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h3>Contact</h3>
                    <ul>
                        <li>Email: imashi.samarawickrama@outlook.com</li>
                        <li>Phone: +94 (70) 259 0879</li>
                        <li>Location: Sri Lanka</li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2024 Imashi Samarawickrama. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;