import React from "react";
import './HireMe.css';

const HireMe = ({ onClose }) =>
{
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-btn" onClick={onClose}>
                    &times; {/* Close button (×) */}
                </button>

                <section className="hire-me-section">
                    <h2>Let's Work Together</h2>
                    <p>
                        Are you looking for a passionate and skilled software engineer to bring your project to life?
                        With experience in full-stack development, CI/CD, Docker, and more, I'm ready to help you
                        build scalable and innovative solutions. Let's collaborate and make something great!
                    </p>

                    <ul className="skills-summary">
                        <li>Full-Stack Development</li>
                        <li>Backend: .NET Core, Node.js, MSSQL</li>
                        <li>Frontend: React, Flutter</li>
                        <li>CI/CD with Docker, Kubernetes, Azure Pipelines</li>
                    </ul>

                    <a href="./assets/images/Imashi Samarawickrama-CV.pdf" className="resume-btn" download>
                        Download Resume
                    </a>
                </section>
            </div>
        </div>
    );
};

export default HireMe;
