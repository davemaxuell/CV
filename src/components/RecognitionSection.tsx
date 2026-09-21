import { SectionBadge } from "./SectionBadge";
import { recognitions } from "../data/portfolioData";
export const RecognitionSection = () => (
  <section id="recognition" className="cv-section">
    <SectionBadge label="Recognition" />
    <div className="recognition-list">
      {recognitions.map((r) => (
        <article key={r.id} className="recognition-row">
          <div className="recognition-heading">
            <h3>{r.title}</h3>
            <span className="dot-leader" />
            <span>{r.year}</span>
          </div>
          <p>
            {r.issuer}
            {r.badge ? ` · ${r.badge}` : ""}
          </p>
        </article>
      ))}
    </div>
  </section>
);
