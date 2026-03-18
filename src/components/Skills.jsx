import { skills } from "../data/portfolioData";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h3>Skills</h3>
      <div className="skills-list">
        {skills.map((skill) => (
          <span key={skill} className="skill-badge">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
