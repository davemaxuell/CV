import React, { useState } from 'react';
import { SectionBadge } from './SectionBadge';
import { experiences } from '../data/portfolioData';
import { ChevronDown } from 'lucide-react';
import { InstitutionLogo } from './InstitutionLogo';

export const ExperienceSection: React.FC = () => {
  // All items open by default
  const [openIds, setOpenIds] = useState<string[]>(() => experiences.map((exp) => exp.id));

  const toggleOpen = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="experience" className="mb-10">
      <SectionBadge label="WORK EXPERIENCE" />

      <div className="space-y-3">
        {experiences.map((exp) => {
          const isOpen = openIds.includes(exp.id);
          return (
            <div
              key={exp.id}
              className="bg-white border border-neutral-200/90 rounded-2xl overflow-hidden shadow-2xs transition-all hover:border-neutral-300"
            >
              {/* Header / Accordion Trigger */}
              <button
                type="button"
                onClick={() => toggleOpen(exp.id)}
                className="w-full text-left p-4 sm:p-5 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 cursor-pointer focus:outline-hidden"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <InstitutionLogo id={exp.id} company={exp.company} className="w-16 h-10" />
                  <div className="min-w-0">
                    <h3 className="text-sm sm:text-base font-bold text-neutral-900 sm:truncate">
                      {exp.company}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-500 font-medium">
                      {exp.role}
                      {exp.department && (
                        <span className="hidden sm:inline text-neutral-400">
                          {' '}
                          • {exp.department}
                        </span>
                      )}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-end gap-2.5 shrink-0">
                  <span className="text-xs sm:text-sm font-medium text-neutral-500 whitespace-nowrap">
                    {exp.period}
                  </span>
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-neutral-400 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-neutral-700' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </button>

              {/* Accordion Content */}
              {isOpen && (
                <div className="px-5 pb-5 pt-1 border-t border-neutral-100 text-xs sm:text-sm text-neutral-600">
                  {exp.department && (
                    <p className="sm:hidden text-xs text-neutral-400 mb-2 font-medium">
                      Department: {exp.department}
                    </p>
                  )}
                  <ul className="space-y-2 mb-3.5 list-disc list-outside pl-4 text-neutral-700">
                    {exp.points.map((pt, i) => (
                      <li key={i} className="leading-relaxed">
                        {pt}
                      </li>
                    ))}
                  </ul>

                  {exp.tools && exp.tools.length > 0 && (
                    <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-neutral-100">
                      <span className="text-[11px] text-neutral-400 uppercase font-semibold mr-1">
                        Tools:
                      </span>
                      {exp.tools.map((tool) => (
                        <span
                          key={tool}
                          className="text-[11px] bg-neutral-100 text-neutral-700 font-medium px-2 py-0.5 rounded-md"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
