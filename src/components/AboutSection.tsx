import { SectionBadge } from "./SectionBadge";
import { personalInfo, educationList } from "../data/portfolioData";
export const AboutSection = ({ onMoreAbout, moreAboutOpen }: { onMoreAbout: () => void; moreAboutOpen: boolean }) => (
  <section id="about" className="cv-section">
    <SectionBadge label="About" />
    <div className="about-copy">
      {personalInfo.aboutIntro.map((p) => (
        <p key={p}>{p}</p>
      ))}
    </div>
    <p className="academic-context">
      {educationList[0].degree} · BUFS · GPA {educationList[0].gpa}
      {educationList[0].expectedGraduation && ` · Expected graduation: ${educationList[0].expectedGraduation}`}
    </p>
    <div className="about-navigation">
    <nav className="cv-navigation" aria-label="CV sections">
      <a href="#experience">Experience</a>
      <a href="#publications">Research</a>
      <a href="#education">Education</a>
      <a href="#projects">Projects</a>
    </nav>
    <button className="more-about-trigger" onClick={onMoreAbout} aria-haspopup="dialog" aria-expanded={moreAboutOpen} aria-controls={moreAboutOpen ? 'more-about-panel' : undefined}>
      More About Me <span aria-hidden="true">→</span>
    </button>
    </div>
  </section>
);
