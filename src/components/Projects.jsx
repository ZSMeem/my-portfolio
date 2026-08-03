import { useState } from "react";

function ProjectCard({ project, reverse }) {
  const [imageFailed, setImageFailed] = useState(false);
  const showImage = project.image && !imageFailed;
  const cardClass = showImage
    ? `card media-card has-image${reverse ? " reverse" : ""}`
    : "card media-card";

  return (
    <div className={cardClass}>
      {showImage && (
        <img
          className="media-card-image"
          src={project.image}
          alt={project.title}
          loading="lazy"
          onError={() => setImageFailed(true)}
        />
      )}

      <div className="media-card-body">
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
    </div>
  );
}

function ProjectList({ projects }) {
  return (
    <div className="stack">
      {projects.map((project, index) => (
        <ProjectCard key={project.title} project={project} reverse={index % 2 === 1} />
      ))}
    </div>
  );
}

const TABS = [
  { key: "development", label: "Development Projects" },
  { key: "ai", label: "AI Projects" },
];

export default function Projects({ developmentProjects, aiProjects }) {
  const [activeTab, setActiveTab] = useState("development");
  const activeProjects =
    activeTab === "development" ? developmentProjects : aiProjects;

  return (
    <section id="projects" className="section">
      <h3>Selected Projects</h3>

      <div className="projects-tabs" role="tablist">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            type="button"
            role="tab"
            aria-selected={activeTab === tab.key}
            className={`projects-tab${activeTab === tab.key ? " active" : ""}`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeProjects?.length > 0 && <ProjectList projects={activeProjects} />}
    </section>
  );
}
