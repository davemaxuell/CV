import { Award } from "lucide-react";
import { SectionBadge } from "./SectionBadge";
import { ResumeRow } from "./ResumeRow";
import { InstitutionLogo } from "./InstitutionLogo";
import { educationList } from "../data/portfolioData";
export const EducationSection = () => (
  <section id="education" className="cv-section">
    <SectionBadge label="Education" />
    <div className="resume-list">
      {educationList.map((e) => (
        <ResumeRow
          key={e.id}
          title={e.institution}
          subtitle={e.degree}
          date={e.period}
          summary={[e.gpa && `GPA: ${e.gpa}`, e.expectedGraduation && `Expected graduation: ${e.expectedGraduation}`].filter(Boolean).join(' · ') || undefined}
          icon={
            e.iconType === "scholarship" ? (
              <Award size={28} />
            ) : (
              <InstitutionLogo
                id={e.id}
                company={e.institution}
                className="w-full h-full"
              />
            )
          }
        >
          <ul>
            {e.details.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          {e.gpa && <p>GPA: {e.gpa}</p>}
        </ResumeRow>
      ))}
    </div>
  </section>
);
