import React from "react";
import Slider from "react-slick";
import './ProjectCard.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectCard = ({ details }) =>
{

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000, // Auto-slide every 3 seconds
    };

    return (
        <div className="project-card">
            <div className="project-media">
                <Slider {...settings}>
                    {details.images.map((image, index) => (
                        <img key={index} src={image} alt={`Project ${index}`} className="project-image" />
                    ))}
                </Slider>
            </div>
            <div className="project-info">
                <h6>{details.title}</h6>
                <div className="project-details">{details.description}</div>
                <ul>
                    {details.contribution.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ProjectCard;

