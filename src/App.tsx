/* THESIS: Reproduce the user-selected MonoCV reference with Dave's own CV.
 * OWN-WORLD: General Sans + Inter Display, #f6f6f6, small white surfaces and solid row outlines.
 * STORY: Read the profile, scan credentials, expand evidence, view projects, make contact.
 * FIRST VIEWPORT: 200px profile at left, 500px text column at right, generous section rhythm.
 * FORM: User-pinned reference; measured in Playwright, no alternate visual direction. */
import { useState } from "react";
import { AnimatePresence, MotionConfig } from "motion/react";
import { Sidebar } from "./components/Sidebar";
import { AboutSection } from "./components/AboutSection";
import { SkillsSection } from "./components/SkillsSection";
import { TechStackSection } from "./components/TechStackSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { PublicationsSection } from "./components/PublicationsSection";
import { EducationSection } from "./components/EducationSection";
import { RecognitionSection, LanguageSkillsSection } from "./components/RecognitionSection";
import { LinksSection } from "./components/LinksSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { ProjectModal } from "./components/ProjectModal";
import { RivePet } from "./components/RivePet";
import { useSmoothScroll } from "./components/useSmoothScroll";
import { MoreAboutPanel } from "./components/MoreAboutPanel";
import type { Project } from "./types";
export default function App() {
  const [project, setProject] = useState<Project | null>(null);
  const [moreAboutOpen, setMoreAboutOpen] = useState(false);
  const scrollToSection = useSmoothScroll();
  const contact = () => scrollToSection('contact');
  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#about">
        Skip to CV
      </a>
      <main className="cv-shell">
        <Sidebar onScrollToContact={contact} />
        <div className="cv-content">
          <AboutSection onMoreAbout={() => setMoreAboutOpen(true)} moreAboutOpen={moreAboutOpen} />
          <ExperienceSection />
          <PublicationsSection />
          <EducationSection />
          <ProjectsSection onSelectProject={setProject} />
          <SkillsSection />
          <TechStackSection />
          <RecognitionSection />
          <LanguageSkillsSection />
          <LinksSection />
          <ContactSection />
        </div>
      </main>
      <Footer />
      <aside className="floating-pet" aria-label="Website pet">
        <RivePet />
      </aside>
      <AnimatePresence>
        {project && <ProjectModal key={project.id} project={project} onClose={() => setProject(null)} />}
        {moreAboutOpen && <MoreAboutPanel key="more-about" onClose={() => setMoreAboutOpen(false)} />}
      </AnimatePresence>
    </MotionConfig>
  );
}
