export default function Contact({ profile }) {
  return (
    <section id="contact" className="section">
      <h3>Contact</h3>
      <div className="card">
        <p>
          Feel free to reach out for collaboration, research, or software
          engineering opportunities.
        </p>

        <div className="contact-list">
          <p>
            <strong>Email:</strong> {profile.email}
          </p>
          <p>
            <strong>Phone:</strong> {profile.phone}
          </p>
          <p>
            <strong>LinkedIn:</strong>{" "}
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              linkedin.com/in/zerin-shaima-meem
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
