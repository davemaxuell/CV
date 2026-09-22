import { SectionBadge } from "./SectionBadge";
import { recognitions, languageSkills } from "../data/portfolioData";
import type { RecognitionItem } from "../types";
const CredentialSection = ({ id, label, items }: { id: string; label: string; items: RecognitionItem[] }) => (
  <section id={id} className="cv-section">
    <SectionBadge label={label} />
    <div className="recognition-list">
      {items.map((r) => (
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
          {r.sourceUrl && <a className="recognition-source" href={r.sourceUrl} target="_blank" rel="noopener noreferrer" aria-label={`Official leaderboard: ${r.title}`}>Official leaderboard ↗</a>}
        </article>
      ))}
    </div>
  </section>
);

export const RecognitionSection = () => <CredentialSection id="recognition" label="Recognition" items={recognitions} />;
export const LanguageSkillsSection = () => <CredentialSection id="language-skills" label="Language Skills" items={languageSkills} />;
