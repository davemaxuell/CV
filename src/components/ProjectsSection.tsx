import React, { useState } from 'react';
import { SectionBadge } from './SectionBadge';
import { projects } from '../data/portfolioData';
import { Project } from '../types';
import { ArrowUpRight, ChevronRight, ChevronLeft, Layers } from 'lucide-react';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollLeft = () => {
    const el = document.getElementById('projects-carousel');
    if (el) {
      el.scrollBy({ left: -320, behavior: 'smooth' });
      setScrollPosition(el.scrollLeft - 320);
    }
  };

  const scrollRight = () => {
    const el = document.getElementById('projects-carousel');
    if (el) {
      el.scrollBy({ left: 320, behavior: 'smooth' });
      setScrollPosition(el.scrollLeft + 320);
    }
  };

  return (
    <section id="projects" className="mb-10 relative">
      <div className="flex items-center justify-between">
        <SectionBadge label="PROJECTS" />
        <div className="flex items-center gap-1.5 mb-4">
          <button
            type="button"
            onClick={scrollLeft}
            aria-label="Scroll projects left"
            className="w-7 h-7 rounded-full bg-white border border-neutral-200 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 flex items-center justify-center transition-colors shadow-2xs cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={scrollRight}
            aria-label="Scroll projects right"
            className="w-7 h-7 rounded-full bg-white border border-neutral-200 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 flex items-center justify-center transition-colors shadow-2xs cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Projects Carousel matching the reference image layout */}
      <div
        id="projects-carousel"
        className="flex gap-4 overflow-x-auto pb-4 pt-1 snap-x scrollbar-none -mx-2 px-2"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className="w-[280px] sm:w-[320px] shrink-0 snap-start bg-white border border-neutral-200/90 rounded-2xl overflow-hidden shadow-2xs flex flex-col transition-all hover:border-neutral-300 hover:shadow-xs group"
          >
            {/* Visual Thumbnail */}
            <div className="aspect-16/10 w-full overflow-hidden bg-neutral-100 relative border-b border-neutral-100">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-linear-to-br from-neutral-50 to-neutral-200 text-neutral-400 p-4 text-center">
                  <Layers className="w-8 h-8 mb-2 opacity-50 text-neutral-500" />
                  <span className="text-xs font-semibold text-neutral-600 tracking-tight">
                    {project.subtitle || project.title}
                  </span>
                </div>
              )}
              {project.affiliation && (
                <div className="absolute top-2.5 left-2.5 bg-white/90 backdrop-blur-xs text-[10px] font-semibold text-neutral-700 px-2.5 py-0.5 rounded-md border border-neutral-200/70 shadow-2xs truncate max-w-[240px]">
                  {project.affiliation.split('|')[0]}
                </div>
              )}
            </div>

            {/* Card Content */}
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-baseline justify-between gap-2 mb-1">
                  <h3 className="text-sm sm:text-base font-bold text-neutral-900 leading-snug group-hover:text-neutral-950">
                    {project.title}
                  </h3>
                  <span className="text-[11px] font-medium text-neutral-400 shrink-0">
                    {project.period}
                  </span>
                </div>

                <p className="text-xs text-neutral-500 font-medium mb-2.5 line-clamp-1">
                  {project.subtitle}
                </p>

                <p className="text-xs text-neutral-600 line-clamp-3 leading-relaxed mb-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-medium bg-neutral-100 text-neutral-600 px-2 py-0.5 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-[10px] font-medium bg-neutral-50 text-neutral-400 px-1.5 py-0.5 rounded-md">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={() => onSelectProject(project)}
                className="w-full pt-2.5 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold text-neutral-800 hover:text-neutral-950 transition-colors cursor-pointer group/link"
              >
                <span>{project.linkText || 'Click to view'}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover/link:text-neutral-900 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
