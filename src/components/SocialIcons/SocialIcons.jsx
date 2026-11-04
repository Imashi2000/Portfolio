export const GmailIcon = () => (
    <svg viewBox="52 42 88 66" width="24" height="18" aria-hidden="true">
        <path fill="#4285f4" d="M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6" />
        <path fill="#34a853" d="M120 108h14c3.32 0 6-2.69 6-6V59l-20 15" />
        <path fill="#fbbc04" d="M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.200" />
        <path fill="#ea4335" d="M72 74V48l24 18 24-18v26L96 92" />
        <path fill="#c5221f" d="M52 51v8l20 15V48l-5.600-4.200c-5.940-4.450-14.400-.220-14.400 7.200" />
    </svg>
);

export const GitHubIcon = () => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
        <path d="M12 .297c-6.630 0-12 5.373-12 12 0 5.303 3.438 9.800 8.205 11.385.600.113.820-.258.820-.577 0-.285-.010-1.040-.015-2.040-3.338.724-4.042-1.610-4.042-1.610C4.422 18.070 3.633 17.700 3.633 17.700c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.070 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.760-1.605-2.665-.300-5.466-1.332-5.466-5.930 0-1.310.465-2.380 1.235-3.220-.135-.303-.540-1.523.105-3.176 0 0 1.005-.322 3.300 1.230.960-.267 1.980-.399 3-.405 1.020.006 2.040.138 3 .405 2.280-1.552 3.285-1.230 3.285-1.230.645 1.653.240 2.873.120 3.176.765.840 1.230 1.910 1.230 3.220 0 4.610-2.805 5.625-5.475 5.920.420.360.810 1.096.810 2.220 0 1.606-.015 2.896-.015 3.286 0 .315.210.690.825.570C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
);

export const LinkedInIcon = () => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="#2f8fe6" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.900 1.637-1.850 3.370-1.850 3.601 0 4.267 2.370 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.920-2.063 2.063-2.063 1.140 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.200 24 24 23.227 24 22.271V1.729C24 .774 23.200 0 22.222 0h.003z" />
    </svg>
);

const SOCIAL_LINKS = [
    { label: "Email", url: "mailto:imashinethmini88@gmail.com", icon: <GmailIcon /> },
    { label: "GitHub", url: "https://github.com/Imashi2000", icon: <GitHubIcon />, external: true },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/imashi-samarawickrama", icon: <LinkedInIcon />, external: true }
];

const SocialIcons = () =>
{
    return (
        <ul className="social-icons">
            {SOCIAL_LINKS.map((link) => (
                <li key={link.label}>
                    <a
                        href={link.url}
                        aria-label={link.label}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                    >
                        {link.icon}
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default SocialIcons;
