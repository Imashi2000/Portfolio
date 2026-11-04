import './Skills.css'
import { SKILLS } from "../../utils/data.js";
import SkillCard from "./SkillCard/SkillCard.jsx";
import Reveal from "../Reveal/Reveal";

const Skills = () =>
{
    return (
        <section className="section" id="SKILLS">
            <Reveal>
                <p className="section-eyebrow">Skills</p>
                <h2 className="section-title">What I work with</h2>
            </Reveal>

            <div className="skills">
                {SKILLS.map((item, index) => (
                    <Reveal key={item.title} delay={(index % 3) * 80}>
                        <SkillCard
                            iconUrl={item.icon}
                            title={item.title}
                            skills={item.skills}
                        />
                    </Reveal>
                ))}
            </div>
        </section>
    )
}

export default Skills
