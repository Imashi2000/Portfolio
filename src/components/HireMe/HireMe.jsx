import React from "react";

export const HireMe = () =>
{
    return (

        <section className="hire-me-section" id="HIRE">
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
                <li>AI and Image Processing</li>
            </ul>

            <a href="./assets/Imashi_Samarawickrama_CV.pdf" className="resume-btn" download>
                Download My Resume
            </a>

            <button className="contact-me-btn" onClick={() => window.location.href = "#CONTACT"}>
                Get in Touch
            </button>
        </section>
    )
}

export default HireMe;