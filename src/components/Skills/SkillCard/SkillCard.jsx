import './SkillCard.css'

const SkillCard = ({ title, iconUrl, skills }) =>
{
    return (
        <article className="skills-card glass-card">
            <div className="skills-card-header">
                <div className="skill-icon">
                    <img src={iconUrl} alt="" />
                </div>
                <h3>{title}</h3>
            </div>

            <ul className="tags">
                {skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                ))}
            </ul>
        </article>
    );
};

export default SkillCard;
