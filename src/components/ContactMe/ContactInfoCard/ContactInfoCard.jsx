import React from "react";
import './ContactInfoCard.css';

const ContactInfoCard = ({ iconUrl, url, target_text }) =>
{
    return (
        <div className="contact-details-card">
            <div className="icon">
                <img src={iconUrl} />
            </div>
            <a href={url} target={target_text} rel="link">{url}</a>
        </div>
    )
}

export default ContactInfoCard;