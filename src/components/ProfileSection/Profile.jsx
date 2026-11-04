import { useEffect, useState } from 'react'
import './Profile.css'
import { PROJECTS, RESUME_URL, ROLES, TECH_STRIP } from '../../utils/data';

const STATS = [
    { value: '2+', label: 'Years of experience' },
    { value: PROJECTS.length, label: 'Projects' },
    { value: 5, label: 'Client countries' }
];

const Profile = () =>
{
    const [roleIndex, setRoleIndex] = useState(0);

    useEffect(() =>
    {
        const timer = setInterval(() =>
        {
            setRoleIndex((index) => (index + 1) % ROLES.length);
        }, 2800);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className='profile-section' id='PROFILE'>
            <div className='profile-container'>
                <div className='profile-content'>
                    <p className='profile-status'>
                        <span className='status-dot' aria-hidden='true' />
                        Open to new opportunities
                    </p>

                    <h1 className='gradient-text'>Imashi Samarawickrama</h1>

                    <p className='profile-role'>
                        <span className='sr-only'>{ROLES[0]}</span>
                        <span key={roleIndex} className='role-text' aria-hidden='true'>{ROLES[roleIndex]}</span>
                    </p>

                    <p className='profile-summary'>
                        I build web systems, backend APIs and cross-platform mobile apps for clients
                        including Japan's Niterra, and across the UAE, India, Ethiopia and Saudi Arabia.
                    </p>

                    <div className='profile-actions'>
                        <a className='btn btn-primary' href='#PROJECT'>View Projects</a>
                        <a className='btn btn-outline' href='#CONTACT'>Contact Me</a>
                        {RESUME_URL && (
                            <a className='btn btn-outline' href={RESUME_URL} download>Download CV</a>
                        )}
                    </div>

                    <dl className='profile-stats'>
                        {STATS.map((stat) => (
                            <div key={stat.label}>
                                <dd>{stat.value}</dd>
                                <dt>{stat.label}</dt>
                            </div>
                        ))}
                    </dl>
                </div>

                <div className='profile-img'>
                    <div className='photo-ring'>
                        <img src='./assets/images/p3.JPG' alt='Imashi Samarawickrama' />
                    </div>
                    <span className='floating-chip chip-one' aria-hidden='true'>Web & APIs</span>
                    <span className='floating-chip chip-two' aria-hidden='true'>Mobile</span>
                    <span className='floating-chip chip-three' aria-hidden='true'>DevOps</span>
                </div>
            </div>

            <div className='tech-strip' aria-hidden='true'>
                <div className='tech-strip-track'>
                    {[...TECH_STRIP, ...TECH_STRIP].map((tech, index) => (
                        <span key={index}>{tech}</span>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Profile
