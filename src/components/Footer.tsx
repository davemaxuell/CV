import React from 'react';
import { Github, Globe, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-16 pt-8 border-t border-neutral-200/80 text-neutral-500 text-xs flex flex-col sm:flex-row items-center justify-between gap-4 pb-12">
      <div className="flex items-center gap-2">
        <span>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</span>
      </div>

      <div className="flex items-center gap-1.5 text-neutral-400">
        <span>Curated for academic research & software roles</span>
      </div>

      <div className="flex items-center gap-4">
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1 hover:text-neutral-900 transition-colors"
        >
          <Github className="w-3.5 h-3.5" />
          <span>GitHub</span>
        </a>
        <a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1 hover:text-neutral-900 transition-colors"
        >
          <span>LinkedIn</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </footer>
  );
};
