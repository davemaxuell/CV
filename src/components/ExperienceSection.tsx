import { SectionBadge } from "./SectionBadge";
import { ResumeRow } from "./ResumeRow";
import { InstitutionLogo } from "./InstitutionLogo";
import { experiences } from "../data/portfolioData";
export const ExperienceSection = () => (
  <section id="experience" className="cv-section">
    <SectionBadge label="Experience" />
    <div className="resume-list">
      {experiences.map((e) => (
        <ResumeRow
          key={e.id}
          title={e.company}
          subtitle={e.role}
          date={e.period}
          summary={e.highlight}
          icon={
            <InstitutionLogo
              id={e.id}
              company={e.company}
              className="w-full h-full"
            />
          }
        >
          <p>{e.department}</p>
          <ul>
            {e.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          {e.tools && <p className="detail-tools">{e.tools.join(" · ")}</p>}
        </ResumeRow>
      ))}
    </div>
  </section>
);
