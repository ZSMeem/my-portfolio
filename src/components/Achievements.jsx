export default function Achievements({ achievements }) {
  let imageIndex = 0;

  return (
    <section id="achievements" className="section">
      <h3>Achievements</h3>
      <div className="stack">
        {achievements.map((group) => {
          const reverse = group.image ? imageIndex++ % 2 === 1 : false;
          const cardClass = group.image
            ? `card media-card has-image${reverse ? " reverse" : ""}`
            : "card";

          return (
            <div key={group.category} className={cardClass}>
              {group.image && (
                <img
                  className="media-card-image"
                  src={group.image}
                  alt={group.category}
                  loading="lazy"
                />
              )}

              <div className={group.image ? "media-card-body" : undefined}>
                <h4 className="achievements-group-title">{group.category}</h4>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
