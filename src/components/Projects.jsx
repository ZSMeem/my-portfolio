import { projects } from "../data/portfolioData";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h3>Selected Projects</h3>
      <div className="grid-two">
        {projects.map((project) => (
          <div key={project.title} className="card">
            <h4>{project.title}</h4>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
