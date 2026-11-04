import './ContactInfoCard.css';

const ContactInfoCard = ({ icon, url, text, external }) =>
{
    return (
        <div className="contact-details-card glass-card">
            <div className="icon">
                {icon}
            </div>
            <a
                href={url}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
            >
                {text}
            </a>
        </div>
    )
}

export default ContactInfoCard;
