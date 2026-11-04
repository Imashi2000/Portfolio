import './Education.css';
import Reveal from '../Reveal/Reveal';
import { ACHIEVEMENTS, CERTIFICATIONS, EDUCATION } from '../../utils/data';

const Education = () =>
{
    return (
        <section className="section" id="EDUCATION">
            <Reveal>
                <p className="section-eyebrow">Education</p>
                <h2 className="section-title">Education &amp; certifications</h2>
            </Reveal>

            <div className="education-grid">
                <Reveal>
                    <article className="education-card glass-card">
                        <div className="education-gpa">
                            <strong>{EDUCATION.gpa}</strong>
                            <span>GPA</span>
                        </div>
                        <h3>{EDUCATION.degree}</h3>
                        <p className="education-school">{EDUCATION.school}</p>
                        <p className="education-meta">{EDUCATION.period} | {EDUCATION.location}</p>
                    </article>
                </Reveal>

                <Reveal delay={100}>
                    <article className="education-card glass-card">
                        <h3>Certifications</h3>
                        <ul className="education-list">
                            {CERTIFICATIONS.map((item) => (
                                <li key={item.title}>
                                    {item.title}
                                    <span>{item.issuer}</span>
                                </li>
                            ))}
                        </ul>
                    </article>
                </Reveal>

                <Reveal delay={200}>
                    <article className="education-card glass-card">
                        <h3>Achievements</h3>
                        <ul className="education-list">
                            {ACHIEVEMENTS.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </article>
                </Reveal>
            </div>
        </section>
    );
};

export default Education;
