import React from 'react';
import { Project } from '../types';
import { X, CheckCircle, Calendar, Tag, Building } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-neutral-200 shadow-2xl relative">
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/90 border border-neutral-200 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 flex items-center justify-center shadow-xs cursor-pointer transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Media Banner */}
        {project.image && (
          <div className="aspect-16/9 w-full bg-neutral-100 overflow-hidden relative">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="p-6 sm:p-7">
          {/* Header */}
          <div className="mb-4">
            <div className="flex flex-wrap items-center gap-2 mb-1.5 text-xs text-neutral-500">
              {project.affiliation && (
                <span className="flex items-center gap-1 font-semibold text-neutral-700 bg-neutral-100 px-2 py-0.5 rounded-md">
                  <Building className="w-3 h-3" />
                  {project.affiliation}
                </span>
              )}
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {project.period}
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-neutral-950">
              {project.title}
            </h2>
            {project.subtitle && (
              <p className="text-sm font-medium text-neutral-600 mt-0.5">
                {project.subtitle}
              </p>
            )}
          </div>

          {/* Description */}
          <div className="text-xs sm:text-sm text-neutral-700 leading-relaxed space-y-3 mb-6">
            <p>{project.description}</p>
          </div>

          {/* Key Engineering Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="mb-6">
              <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2.5">
                Key Contributions & Architecture
              </h3>
              <div className="space-y-2">
                {project.highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-neutral-50 border border-neutral-100 text-xs sm:text-sm text-neutral-700 leading-relaxed"
                  >
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tags */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
              Tech Stack & Methodologies
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium bg-neutral-100 text-neutral-700 px-2.5 py-1 rounded-lg border border-neutral-200/80 flex items-center gap-1"
                >
                  <Tag className="w-3 h-3 text-neutral-400" />
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Close Action */}
          <div className="mt-7 pt-4 border-t border-neutral-100 flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-neutral-900 text-white text-xs sm:text-sm font-semibold hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
