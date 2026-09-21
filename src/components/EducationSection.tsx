import React, { useState } from 'react';
import { SectionBadge } from './SectionBadge';
import { educationList } from '../data/portfolioData';
import { ChevronDown, GraduationCap, Languages, Award } from 'lucide-react';
import { InstitutionLogo } from './InstitutionLogo';

export const EducationSection: React.FC = () => {
  // All items open by default
  const [openIds, setOpenIds] = useState<string[]>(() => educationList.map((edu) => edu.id));

  const toggleOpen = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const getEduIcon = (id: string, type: string) => {
    if (id === 'bufs') {
      return <InstitutionLogo id="bufs" company="Busan University of Foreign Studies" className="w-10 h-10" />;
    }
    if (id === 'sun-moon') {
      return <InstitutionLogo id="sun-moon" company="Sun Moon University Korean Language Institute" className="w-10 h-10" />;
    }
    switch (type) {
      case 'university':
        return (
          <div className="w-10 h-10 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-700 shrink-0">
            <GraduationCap className="w-5 h-5" />
          </div>
        );
      case 'language':
        return (
          <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200/80 flex items-center justify-center text-blue-700 shrink-0">
            <Languages className="w-5 h-5" />
          </div>
        );
      case 'scholarship':
        return (
          <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200/80 flex items-center justify-center text-amber-700 shrink-0">
            <Award className="w-5 h-5" />
          </div>
        );
      default:
        return (
          <div className="w-10 h-10 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-700 shrink-0">
            <GraduationCap className="w-5 h-5" />
          </div>
        );
    }
  };

  return (
    <section id="education" className="mb-10">
      <SectionBadge label="EDUCATION" />

      <div className="space-y-3">
        {educationList.map((edu) => {
          const isOpen = openIds.includes(edu.id);
          return (
            <div
              key={edu.id}
              className="bg-white border border-neutral-200/90 rounded-2xl overflow-hidden shadow-2xs transition-all hover:border-neutral-300"
            >
              <button
                type="button"
                onClick={() => toggleOpen(edu.id)}
                className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-hidden"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  {getEduIcon(edu.id, edu.iconType)}
                  <div className="min-w-0">
                    <h3 className="text-sm sm:text-base font-bold text-neutral-900 truncate">
                      {edu.institution}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-500 font-medium">
                      {edu.degree}
                      {edu.gpa && (
                        <span className="text-emerald-700 font-semibold ml-1.5 bg-emerald-50 px-2 py-0.5 rounded-sm text-xs">
                          GPA: {edu.gpa}
                        </span>
                      )}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 shrink-0">
                  <span className="text-xs sm:text-sm font-medium text-neutral-500 whitespace-nowrap">
                    {edu.period}
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

              {isOpen && (
                <div className="px-5 pb-5 pt-1 border-t border-neutral-100 text-xs sm:text-sm text-neutral-600">
                  <ul className="space-y-1.5 list-disc list-outside pl-4 text-neutral-700">
                    {edu.details.map((detail, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
