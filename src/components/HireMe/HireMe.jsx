import { useEffect, useRef } from "react";
import './HireMe.css';
import { RESUME_URL } from '../../utils/data';

const HireMe = ({ onClose }) =>
{
    const closeBtn = useRef();

    useEffect(() =>
    {
        closeBtn.current.focus();
    }, []);

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div
                className="modal-content"
                role="dialog"
                aria-modal="true"
                aria-labelledby="hire-me-title"
                onClick={(e) => e.stopPropagation()}
            >
                <button className="close-btn" ref={closeBtn} onClick={onClose} aria-label="Close">
                    &times;
                </button>

                <h2 id="hire-me-title">Let&apos;s Work Together</h2>
                <p>
                    Looking for a software engineer for your next web system, backend or mobile app?
                    I work across the whole product, from requirements and interface through APIs,
                    testing and deployment.
                </p>

                <ul className="skills-summary">
                    <li>Backend: PHP, CodeIgniter, ASP.NET Core, Node.js</li>
                    <li>Web &amp; Mobile: React, Flutter, Dart</li>
                    <li>Databases: MySQL, MSSQL, MongoDB, Firebase</li>
                    <li>DevOps: Docker, Kubernetes, Helm, Azure DevOps</li>
                </ul>

                <a href="#CONTACT" className="btn btn-primary resume-btn" onClick={onClose}>
                    Get in Touch
                </a>

                {RESUME_URL && (
                    <a href={RESUME_URL} className="btn btn-outline resume-link" download>
                        Download CV
                    </a>
                )}
            </div>
        </div>
    );
};

export default HireMe;
