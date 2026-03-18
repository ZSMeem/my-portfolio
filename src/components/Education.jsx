import { education } from "../data/portfolioData";

export default function Education() {
  return (
    <section id="education" className="section">
      <h3>Education</h3>
      <div className="grid-two">
        {education.map((item) => (
          <div key={item.degree} className="card">
            <h4>{item.degree}</h4>
            <p>{item.school}</p>
            <p className="muted">{item.time}</p>
            {item.extra && <p>{item.extra}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
