import { SectionBadge } from "./SectionBadge";
import { ResumeRow } from "./ResumeRow";
import { publications, personalInfo } from "../data/portfolioData";
export const PublicationsSection = () => (
  <section id="publications" className="cv-section">
    <SectionBadge label="Research / Publications" />
    <p className="section-context">
      {publications.filter(p => p.authorRole === 'First author').length} first-author works listed · {publications.filter(p => p.award).length} Excellent Paper Awards
      {' · '}<a href={personalInfo.scholar} target="_blank" rel="noopener noreferrer">View Google Scholar ↗</a>
    </p>
    <div className="resume-list publication-list">
      {publications.map((p) => (
        <ResumeRow
          key={p.id}
          title={p.title}
          subtitle={`${p.conference} · ${p.authorRole}`}
          date={p.year}
          award={p.award}
          status={p.status}
          summary={p.highlight}
        >
          <p>{p.summary}</p>
          {p.award && <p>{p.award}</p>}
          {p.pages && <p>Pages: {p.pages}</p>}
          <dl className="publication-metrics">
            {p.metrics.map((m) => (
              <div key={m.label}>
                <dt>{m.label}</dt>
                <dd>{m.value}</dd>
              </div>
            ))}
          </dl>
          <p className="detail-tools">{p.tags.join(" · ")}</p>
        </ResumeRow>
      ))}
    </div>
  </section>
);
