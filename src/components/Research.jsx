import { useState } from "react";

function ResearchCard({ item, reverse }) {
  const [open, setOpen] = useState(false);

  const dotIndex = item.description.indexOf(". ");
  const summary =
    dotIndex !== -1
      ? item.description.slice(0, dotIndex + 1)
      : item.description;
  const details =
    dotIndex !== -1 ? item.description.slice(dotIndex + 1).trim() : "";

  const cardClass = item.image
    ? `card research-card has-image${reverse ? " reverse" : ""}`
    : "card research-card";

  return (
    <div className={cardClass}>
      {item.image && (
        <img
          className="research-image"
          src={item.image}
          alt={item.title}
          loading="lazy"
        />
      )}

      <div className="research-body">
        <h4>{item.title}</h4>
        <p className="research-summary">{summary}</p>

        {item.tools?.length > 0 && (
          <div className="project-tags">
            {item.tools.map((tool) => (
              <span key={`${item.title}-${tool}`} className="project-tag">
                {tool}
              </span>
            ))}
          </div>
        )}

        {details && (
          <>
            <button
              type="button"
              className="research-toggle"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
            >
              {open ? "Show less" : "Read more"}
              <span className={`research-chevron ${open ? "open" : ""}`}>▾</span>
            </button>

            <div className={`research-drawer ${open ? "open" : ""}`}>
              <p>{details}</p>
            </div>
          </>
        )}

        {item.link && (
          <a
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="research-link"
          >
            View Publication →
          </a>
        )}
      </div>
    </div>
  );
}

export default function Research({ research }) {
  return (
    <section id="research" className="section">
      <h3>Research</h3>
      <div className="stack">
        {research.map((item, index) => (
          <ResearchCard key={item.title} item={item} reverse={index % 2 === 1} />
        ))}
      </div>
    </section>
  );
}
