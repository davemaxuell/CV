import { SectionBadge } from "./SectionBadge";
import { personalInfo, educationList } from "../data/portfolioData";
export const AboutSection = () => (
  <section id="about" data-avatar-context="about" className="cv-section">
    <SectionBadge label="About" />
    <div className="about-copy">
      {personalInfo.aboutIntro.map((p) => (
        <p key={p}>{p}</p>
      ))}
    </div>
    <p data-avatar-context="education:bufs" className="academic-context">
      {educationList[0].degree} · BUFS · GPA {educationList[0].gpa}
      {educationList[0].expectedGraduation && ` · Expected graduation: ${educationList[0].expectedGraduation}`}
    </p>
    <nav className="cv-navigation" aria-label="CV sections">
      <a href="#experience" data-avatar-context="experience">Experience</a>
      <a href="#publications" data-avatar-context="publications">Research</a>
      <a href="#education" data-avatar-context="education">Education</a>
      <a href="#projects" data-avatar-context="projects">Projects</a>
    </nav>
  </section>
);
