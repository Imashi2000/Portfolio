import './WorkExperience.css';
import Reveal from '../Reveal/Reveal';
import { PROJECTS, WORK } from "../../utils/data";

export const WorkExperience = () =>
{
    return (
        <section className="section" id="WORK">
            <Reveal>
                <p className="section-eyebrow">Experience</p>
                <h2 className="section-title">Where I&apos;ve worked</h2>
            </Reveal>

            <div className="timeline">
                {WORK.map((job) => (
                    <Reveal key={job.company} className="timeline-item">
                        <span className="timeline-dot" aria-hidden="true" />

                        <article className="work-card glass-card">
                            <div className="work-header">
                                <div>
                                    <h3>{job.role}</h3>
                                    <p className="work-company">{job.company}</p>
                                </div>
                                <p className="work-meta">{job.period}<br />{job.location}</p>
                            </div>

                            <ul className="work-highlights">
                                {job.highlights.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>

                            <h4>Projects here</h4>
                            <ul className="tags">
                                {PROJECTS.filter((project) => project.source === job.company).map((project) => (
                                    <li key={project.title}>{project.title}</li>
                                ))}
                            </ul>
                        </article>
                    </Reveal>
                ))}
            </div>
        </section>
    )
}
