export default function Footer({ profile }) {
  return (
    <footer id="contact" className="footer">
      <div className="footer-inner">
        <h3>Contact</h3>
        <p className="footer-intro">
          Feel free to reach out for collaboration, research, or software
          engineering opportunities.
        </p>

        <div className="footer-contact-list">
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
    </footer>
  );
}
