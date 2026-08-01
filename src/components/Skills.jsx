import { getSkillIcon } from "../lib/skillIcons";

function initials(text) {
  const words = text.split(/[\s/]+/).filter(Boolean);
  if (words.length >= 2) {
    return (words[0][0] + words[1][0]).toUpperCase();
  }
  return text.slice(0, 2).toUpperCase();
}

export default function Skills({ skills }) {
  return (
    <section id="skills" className="section">
      <h3>Skills</h3>
      <div className="skills-groups">
        {skills.map((group) => (
          <div key={group.category} className="card skills-group">
            <h4 className="skills-group-title">{group.category}</h4>
            <div className="skills-list">
              {group.items.map((skill) => {
                const Icon = getSkillIcon(skill);
                return (
                  <span key={skill} className="skill-badge">
                    {Icon ? (
                      <Icon className="skill-icon" aria-hidden="true" />
                    ) : (
                      <span className="skill-icon-fallback" aria-hidden="true">
                        {initials(skill)}
                      </span>
                    )}
                    {skill}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
