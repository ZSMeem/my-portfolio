export default function Projects({ projects }) {
  return (
    <section id="projects" className="section">
      <h3>Selected Projects</h3>
      <div className="grid-two">
        {projects.map((project) => (
          <div key={project.title} className="card">
            <h4>{project.title}</h4>
            <p>{project.description}</p>
            {project.tools?.length > 0 && (
              <div className="project-tags">
                {project.tools.map((tool) => (
                  <span key={`${project.title}-${tool}`} className="project-tag">
                    {tool}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
