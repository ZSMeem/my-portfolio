function ProjectList({ projects }) {
  return (
    <div className="stack">
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
  );
}

export default function Projects({ developmentProjects, aiProjects }) {
  return (
    <section id="projects" className="section">
      <h3>Selected Projects</h3>

      {developmentProjects?.length > 0 && (
        <div className="projects-group">
          <h4 className="projects-group-title">Development Projects</h4>
          <ProjectList projects={developmentProjects} />
        </div>
      )}

      {aiProjects?.length > 0 && (
        <div className="projects-group">
          <h4 className="projects-group-title">AI Projects</h4>
          <ProjectList projects={aiProjects} />
        </div>
      )}
    </section>
  );
}
