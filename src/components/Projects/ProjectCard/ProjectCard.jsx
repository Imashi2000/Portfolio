import { useState } from 'react';
import './ProjectCard.css';
import ImageViewer from './ImageViewer';

const TYPE_LABELS = { mobile: "Mobile App", web: "Web & Backend", desktop: "Desktop" };

const TYPE_ICONS = {
    mobile: <path d="M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zM11 18h2" />,
    web: <path d="M4 4h16v6H4zM4 14h16v6H4zM8 7h.01M8 17h.01" />,
    desktop: <path d="M3 4h18v12H3zM8 20h8M12 16v4" />
};

const AppleIcon = () => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
        <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
    </svg>
);

const PlayIcon = () => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
        <path d="M4 2.5v19l17-9.5z" />
    </svg>
);

const GlobeIcon = () => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.5 3.8 5.5 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.5-3.8-9S9.500 5.500 12 3z" />
    </svg>
);

const STORE_LINKS = [
    { key: "appStore", label: "App Store", icon: <AppleIcon />, types: ["mobile"] },
    { key: "playStore", label: "Google Play", icon: <PlayIcon />, types: ["mobile"] },
    { key: "website", label: "Website", icon: <GlobeIcon />, types: ["web"] }
];

// Phone screenshots fit three to a card, a wide screenshot fills it. The rest open in the viewer.
const cardImageCount = (images) => (images[0].width > images[0].height ? 1 : 3);

const ProjectCard = ({ details }) =>
{
    const [viewerIndex, setViewerIndex] = useState(null);
    const mainType = details.types[0];
    const cardImages = details.images ? details.images.slice(0, cardImageCount(details.images)) : [];
    const moreImages = details.images ? details.images.length - cardImages.length : 0;
    const publicLinks = STORE_LINKS.filter((link) => details[link.key]);

    // Only visible while developing, to show where each link will appear. Never in the live site.
    const missingLinks = import.meta.env.DEV
        ? STORE_LINKS.filter((link) => link.key in details && !details[link.key])
        : [];

    return (
        <article className={`project-card glass-card project-${mainType}`}>
            <div className="project-thumb">
                {details.images ? (
                    <div className="project-screens">
                        {cardImages.map((image, index) => (
                            <button key={image.src} className={`project-screen ${image.width > image.height ? "project-screen-wide" : ""}`} aria-label={`View ${image.alt}`} onClick={() => setViewerIndex(index)}>
                                <img
                                    src={image.src}
                                    alt=""
                                    width={image.width}
                                    height={image.height}
                                    loading="lazy"
                                />
                            </button>
                        ))}
                    </div>
                ) : details.icon ? (
                    <img className="project-app-icon" src={details.icon} alt={`${details.title} app icon`} width="256" height="256" loading="lazy" />
                ) : (
                    <svg viewBox="0 0 24 24" className="project-icon" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        {TYPE_ICONS[mainType]}
                    </svg>
                )}
                {details.images && details.icon && (
                    <img className="project-badge-icon" src={details.icon} alt="" width="256" height="256" loading="lazy" />
                )}
                {moreImages > 0 && (
                    <button className="project-more-images" onClick={() => setViewerIndex(cardImages.length)}>
                        +{moreImages} more
                    </button>
                )}
                <span className="project-type">{details.types.map((type) => TYPE_LABELS[type]).join(" + ")}</span>
            </div>

            <div className="project-body">
                <p className="project-source">
                    {details.source}{details.client && ` · ${details.client}`}
                </p>
                <h3>{details.title}</h3>
                <p className="project-details">{details.description}</p>

                <ul className="tags">
                    {details.technologies.map((tech) => (
                        <li key={tech}>{tech}</li>
                    ))}
                </ul>

                {(publicLinks.length > 0 || missingLinks.length > 0 || details.links) && (
                    <div className="project-links">
                        {publicLinks.map((link) => (
                            <a key={link.key} className="store-btn" href={details[link.key]} target="_blank" rel="noopener noreferrer">
                                {link.icon}
                                {link.label}
                            </a>
                        ))}
                        {missingLinks.map((link) => (
                            <span key={link.key} className="store-btn store-btn-missing">
                                {link.icon}
                                Add {link.label} link
                            </span>
                        ))}
                        {details.links && details.links.map((link) => (
                            <a key={link.url} className="code-link" href={link.url} target="_blank" rel="noopener noreferrer">
                                {link.label}
                            </a>
                        ))}
                    </div>
                )}
            </div>

            {viewerIndex !== null && (
                <ImageViewer images={details.images} startIndex={viewerIndex} onClose={() => setViewerIndex(null)} />
            )}
        </article>
    )
}

export default ProjectCard;
