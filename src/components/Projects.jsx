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

            {(project.link || project.repo) && (
              <div className="card-links">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="card-link"
                  >
                    View Publication →
                  </a>
                )}
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="card-link"
                  >
                    View Code →
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
