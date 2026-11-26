import { SectionBadge } from "./SectionBadge";
import { recognitions, languageSkills, certificates } from "../data/portfolioData";
import type { RecognitionItem } from "../types";
const CredentialSection = ({ id, label, items }: { id: string; label: string; items: RecognitionItem[] }) => (
  <section id={id} data-avatar-context={id === 'language-skills' ? 'skills' : 'recognition'} className="cv-section">
    <SectionBadge label={label} />
    <div className="recognition-list">
      {items.map((r) => (
        <article key={r.id} data-avatar-context={`recognition:${r.id}`} className="recognition-row">
          <div className="recognition-heading">
            <h3>{r.title}</h3>
            <span className="dot-leader" />
            <span>{r.year}</span>
          </div>
          <p>
            {r.issuer}
            {r.badge ? ` · ${r.badge}` : ""}
          </p>
          {(r.sourceUrl || r.certificateUrl) && (
            <div className="recognition-links">
              {r.sourceUrl && <a className="recognition-source" href={r.sourceUrl} target="_blank" rel="noopener noreferrer" aria-label={`${r.sourceLabel || 'Official leaderboard'}: ${r.title}`}>{r.sourceLabel || 'Official leaderboard'} ↗</a>}
              {r.certificateUrl && <a className="recognition-source" href={r.certificateUrl} target="_blank" rel="noopener noreferrer" aria-label={`${r.certificateLabel || 'View certificate'}: ${r.title}`}>{r.certificateLabel || 'View certificate'} ↗</a>}
            </div>
          )}
        </article>
      ))}
    </div>
  </section>
);

export const RecognitionSection = () => <CredentialSection id="recognition" label="Recognition" items={recognitions} />;
export const LanguageSkillsSection = () => <CredentialSection id="language-skills" label="Language Skills" items={languageSkills} />;
export const CertificatesSection = () => <CredentialSection id="certificates" label="Course Completion Certificates" items={certificates} />;
