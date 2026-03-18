import { profile } from "../data/portfolioData";

export default function About() {
  return (
    <section id="about" className="section">
      <h3>About Me</h3>
      <div className="card">
        <p>{profile.about}</p>
      </div>
    </section>
  );
}
