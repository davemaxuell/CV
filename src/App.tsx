import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { TechStackSection } from './components/TechStackSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { PublicationsSection } from './components/PublicationsSection';
import { EducationSection } from './components/EducationSection';
import { RecognitionSection } from './components/RecognitionSection';
import { LinksSection } from './components/LinksSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { CVModal } from './components/CVModal';
import { DeployGuideModal } from './components/DeployGuideModal';
import { Project } from './types';
import { Github, Globe } from 'lucide-react';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isCVOpen, setIsCVOpen] = useState(false);
  const [isDeployGuideOpen, setIsDeployGuideOpen] = useState(false);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f7f8] text-neutral-900 font-sans selection:bg-neutral-900 selection:text-white antialiased">
      {/* Container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Left Column: Sticky Sidebar Profile Card */}
          <Sidebar
            onOpenCV={() => setIsCVOpen(true)}
            onScrollToContact={scrollToContact}
          />

          {/* Right Column: Main Content Sections Feed */}
          <div className="w-full min-w-0 flex-1">
            <AboutSection />
            <SkillsSection />
            <TechStackSection />
            <ExperienceSection />
            <ProjectsSection onSelectProject={(p) => setSelectedProject(p)} />
            <PublicationsSection />
            <EducationSection />
            <RecognitionSection />
            <LinksSection />
            <ContactSection />
            <Footer />
          </div>
        </div>
      </main>

      {/* Floating Bottom Pill matching Reference Image */}
      <div className="fixed bottom-4 right-4 z-40 flex items-center gap-2">
        <button
          type="button"
          onClick={() => setIsDeployGuideOpen(true)}
          className="bg-neutral-900/90 hover:bg-neutral-900 backdrop-blur-md text-white text-xs font-semibold px-3.5 py-2 rounded-full shadow-lg hover:shadow-xl border border-neutral-700/50 flex items-center gap-2 transition-all hover:scale-103 cursor-pointer"
        >
          <Github className="w-3.5 h-3.5" />
          <span>GitHub & Vercel 배포</span>
        </button>
      </div>

      {/* Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <CVModal
        isOpen={isCVOpen}
        onClose={() => setIsCVOpen(false)}
      />

      <DeployGuideModal
        isOpen={isDeployGuideOpen}
        onClose={() => setIsDeployGuideOpen(false)}
      />
    </div>
  );
}
