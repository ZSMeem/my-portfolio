import { achievements } from "../data/portfolioData";

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <h3>Achievements</h3>
      <div className="card">
        <ul>
          {achievements.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
