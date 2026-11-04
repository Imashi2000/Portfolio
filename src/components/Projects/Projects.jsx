import { useState } from "react";
import './Projects.css';
import ProjectCard from "./ProjectCard/ProjectCard";
import Reveal from "../Reveal/Reveal";
import { PROJECTS, PROJECT_FILTERS } from "../../utils/data";

const INITIAL_COUNT = 6;

const matchesFilter = (project, filter) => filter === "all" || project.types.includes(filter);

const Projects = () =>
{
    const [filter, setFilter] = useState("all");
    const [showAll, setShowAll] = useState(false);

    const matching = PROJECTS.filter((project) => matchesFilter(project, filter));
    const visible = showAll ? matching : matching.slice(0, INITIAL_COUNT);

    const selectFilter = (id) =>
    {
        setFilter(id);
        setShowAll(false);
    };

    return (
        <section className="section" id="PROJECT">
            <Reveal>
                <p className="section-eyebrow">Projects</p>
                <h2 className="section-title">Selected work</h2>

                <div className="project-filters" role="group" aria-label="Filter projects by type">
                    {PROJECT_FILTERS.map((item) => (
                        <button
                            key={item.id}
                            className={`project-filter ${filter === item.id ? "active" : ""}`}
                            aria-pressed={filter === item.id}
                            onClick={() => selectFilter(item.id)}
                        >
                            {item.label}
                            <span>{PROJECTS.filter((project) => matchesFilter(project, item.id)).length}</span>
                        </button>
                    ))}
                </div>
            </Reveal>

            <div className="project-grid">
                {visible.map((item, index) => (
                    <Reveal key={item.title} delay={(index % 3) * 80}>
                        <ProjectCard details={item} />
                    </Reveal>
                ))}
            </div>

            {matching.length > INITIAL_COUNT && (
                <div className="project-more">
                    <button className="btn btn-outline" onClick={() => setShowAll(!showAll)}>
                        {showAll ? "Show fewer" : `Show all ${matching.length} projects`}
                    </button>
                </div>
            )}
        </section>
    )
}

export default Projects;
