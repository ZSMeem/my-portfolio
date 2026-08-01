export default function Achievements({ achievements }) {
  return (
    <section id="achievements" className="section">
      <h3>Achievements</h3>
      <div className="stack">
        {achievements.map((group) => (
          <div key={group.category} className="card">
            <h4 className="achievements-group-title">{group.category}</h4>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
