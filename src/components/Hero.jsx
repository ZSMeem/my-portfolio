import { profile } from "../data/portfolioData";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <p className="section-label">Portfolio</p>
        <h2>{profile.name}</h2>
        <p className="hero-title">{profile.title}</p>
        <p className="hero-summary">{profile.summary}</p>

        <div className="hero-buttons">
          <a href="#contact" className="btn btn-dark">
            Contact Me
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="btn btn-light"
          >
            GitHub
          </a>
        </div>
      </div>

      <div className="info-card">
        <div className="avatar">ZM</div>
        <p>
          <strong>Location:</strong> {profile.location}
        </p>
        <p>
          <strong>Phone:</strong> {profile.phone}
        </p>
        <p>
          <strong>Email:</strong> {profile.email}
        </p>
        <p>
          <strong>LinkedIn:</strong>{" "}
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            View Profile
          </a>
        </p>
        <p>
          <strong>GitHub:</strong>{" "}
          <a href={profile.github} target="_blank" rel="noreferrer">
            View Projects
          </a>
        </p>
      </div>
    </section>
  );
}
