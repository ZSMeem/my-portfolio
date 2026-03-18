import { experience } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <h3>Experience</h3>
      <div className="stack">
        {experience.map((item) => (
          <div key={item.role} className="card">
            <div className="card-header">
              <div>
                <h4>{item.role}</h4>
                <p>{item.org}</p>
              </div>
              <span>{item.time}</span>
            </div>

            <ul>
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
