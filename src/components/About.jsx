export default function About({ profile }) {
  return (
    <section id="about" className="section">
      <h3>About Me</h3>
      <div className="card">
        <p>{profile.about}</p>
      </div>
    </section>
  );
}
