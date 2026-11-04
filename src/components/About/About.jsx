import './About.css';
import Reveal from '../Reveal/Reveal';
import { FOCUS_AREAS } from '../../utils/data';

const About = () =>
{
    return (
        <section className="section" id="ABOUT">
            <Reveal>
                <p className="section-eyebrow">About</p>
                <h2 className="section-title">Building software that people use</h2>
                <p className="about-text">
                    I&apos;m a software engineer with professional experience in mobile and web development.
                    I enjoy working across the whole product, from requirements and interface to APIs,
                    testing and deployment, and I&apos;m always keen to learn new technologies and deliver
                    high-quality solutions as part of a team.
                </p>
            </Reveal>

            <div className="about-grid">
                {FOCUS_AREAS.map((area, index) => (
                    <Reveal key={area.title} delay={index * 100}>
                        <article className="about-card glass-card">
                            <span className="about-number" aria-hidden="true">0{index + 1}</span>
                            <h3>{area.title}</h3>
                            <p>{area.description}</p>
                        </article>
                    </Reveal>
                ))}
            </div>
        </section>
    );
};

export default About;
