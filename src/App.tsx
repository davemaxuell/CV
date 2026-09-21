/* THESIS: Reproduce the user-selected MonoCV reference with Dave's own CV.
 * OWN-WORLD: General Sans + Inter Display, #f6f6f6, small white surfaces and dashed rows.
 * STORY: Read the profile, scan credentials, expand evidence, view projects, make contact.
 * FIRST VIEWPORT: 200px profile at left, 500px text column at right, generous section rhythm.
 * FORM: User-pinned reference; measured in Playwright, no alternate visual direction. */
import { useState } from "react";
import { MotionConfig } from "motion/react";
import { Sidebar } from "./components/Sidebar";
import { AboutSection } from "./components/AboutSection";
import { SkillsSection } from "./components/SkillsSection";
import { TechStackSection } from "./components/TechStackSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { PublicationsSection } from "./components/PublicationsSection";
import { EducationSection } from "./components/EducationSection";
import { RecognitionSection } from "./components/RecognitionSection";
import { LinksSection } from "./components/LinksSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { ProjectModal } from "./components/ProjectModal";
import { CVModal } from "./components/CVModal";
import { RivePet } from "./components/RivePet";
import type { Project } from "./types";
export default function App() {
  const [project, setProject] = useState<Project | null>(null);
  const [cvOpen, setCVOpen] = useState(false);
  const contact = () =>
    document
      .getElementById("contact")
      ?.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "instant"
          : "smooth",
      });
  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#about">
        Skip to CV
      </a>
      <main className="cv-shell">
        <Sidebar onOpenCV={() => setCVOpen(true)} onScrollToContact={contact} />
        <div className="cv-content">
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <TechStackSection />
          <ProjectsSection onSelectProject={setProject} />
          <EducationSection />
          <PublicationsSection />
          <RecognitionSection />
          <LinksSection />
          <ContactSection />
          <div className="mobile-pet">
            <RivePet />
          </div>
        </div>
      </main>
      <Footer />
      <ProjectModal project={project} onClose={() => setProject(null)} />
      <CVModal isOpen={cvOpen} onClose={() => setCVOpen(false)} />
    </MotionConfig>
  );
}
