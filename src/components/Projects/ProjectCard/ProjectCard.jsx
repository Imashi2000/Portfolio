import React from "react";
import './ProjectCard.css';

const ProjectCard = ({ details }) =>
{
    return (
        <div className="project-card">
            <h6>{details.title}</h6>

            <div className="project-details">{details.description}</div>

            <ul>
                {details.contribution.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default ProjectCard