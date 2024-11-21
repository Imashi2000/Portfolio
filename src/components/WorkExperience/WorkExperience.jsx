import React from "react";
import './WorkExperience.css';

export const WorkExperience = () =>
{
    return (

        <section className="work-box" id="WORK">
            <h5 className="work-title">Work Experience</h5>
            <div className="work-container">
                <img src="./assets/images/agrolink.png" alt="" />

                <ul className="work-content">
                    <h5>Creative Software</h5>
                    <h5>Software Engineer Intern</h5>
                    <li className="work-items">
                        <div>
                            <h6>Mini Project</h6>
                            <p>I primarily contributed by: developing the backend of the
                                application using .NET Core, designed a relational database
                                using MSSQL, dockerized the backend services by writing
                                Dockerfiles and Docker Compose files and Helm charts, built
                                and maintained Azure CI/CD pipelines.</p>
                        </div>
                    </li>
                    <li className="work-items">
                        <div>
                            <h6>Agrolink Project</h6>
                            <p>I primarily contributed by: developing the backend of the
                                application using .NET Core, designed a relational database
                                using MSSQL, dockerized the backend services by writing
                                Dockerfiles and Docker Compose files and Helm charts, built
                                and maintained Azure CI/CD pipelines.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}