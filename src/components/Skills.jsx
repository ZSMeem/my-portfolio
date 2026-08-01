export default function Skills({ skills }) {
  return (
    <section id="skills" className="section">
      <h3>Skills</h3>
      <div className="skills-groups">
        {skills.map((group) => (
          <div key={group.category} className="card skills-group">
            <h4 className="skills-group-title">{group.category}</h4>
            <div className="skills-list">
              {group.items.map((skill) => (
                <span key={skill} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
