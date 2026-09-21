import { SectionBadge } from "./SectionBadge";
import { personalInfo } from "../data/portfolioData";
export const AboutSection = () => (
  <section id="about" className="cv-section">
    <SectionBadge label="About" />
    <div className="about-copy">
      {personalInfo.aboutIntro.map((p) => (
        <p key={p}>{p}</p>
      ))}
    </div>
  </section>
);
