import React from 'react';
import { SectionBadge } from './SectionBadge';
import { personalInfo } from '../data/portfolioData';
import { Sparkles, Trophy, BookOpen, Layers } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="mb-10">
      <SectionBadge label="ABOUT" />
      <div className="space-y-3.5 text-neutral-700 text-sm sm:text-base leading-relaxed">
        {personalInfo.aboutIntro.map((paragraph, index) => (
          <p key={index} className="text-neutral-700 font-normal">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Highlights Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
        <div className="p-3.5 rounded-2xl bg-white border border-neutral-200/80 shadow-2xs">
          <div className="flex items-center gap-2 text-amber-600 mb-1">
            <Trophy className="w-4 h-4" />
            <span className="text-xs font-semibold uppercase tracking-wider">Awards</span>
          </div>
          <p className="text-lg sm:text-xl font-bold text-neutral-900">2x Excellent</p>
          <p className="text-[11px] text-neutral-500">HCLT & KIISE Awards</p>
        </div>

        <div className="p-3.5 rounded-2xl bg-white border border-neutral-200/80 shadow-2xs">
          <div className="flex items-center gap-2 text-blue-600 mb-1">
            <BookOpen className="w-4 h-4" />
            <span className="text-xs font-semibold uppercase tracking-wider">Papers</span>
          </div>
          <p className="text-lg sm:text-xl font-bold text-neutral-900">4 Papers</p>
          <p className="text-[11px] text-neutral-500">First / Second Author</p>
        </div>

        <div className="p-3.5 rounded-2xl bg-white border border-neutral-200/80 shadow-2xs">
          <div className="flex items-center gap-2 text-emerald-600 mb-1">
            <Sparkles className="w-4 h-4" />
            <span className="text-xs font-semibold uppercase tracking-wider">Academic</span>
          </div>
          <p className="text-lg sm:text-xl font-bold text-neutral-900">4.25 / 4.50</p>
          <p className="text-[11px] text-neutral-500">Undergraduate GPA</p>
        </div>

        <div className="p-3.5 rounded-2xl bg-white border border-neutral-200/80 shadow-2xs">
          <div className="flex items-center gap-1.5 text-violet-600 mb-1">
            <Layers className="w-4 h-4 shrink-0" />
            <span className="text-xs font-semibold uppercase tracking-wider">Work Experience</span>
          </div>
          <p className="text-base sm:text-lg font-bold text-neutral-900">Research & Industry</p>
          <p className="text-[11px] text-neutral-500">Daewoong, TeddySum, UNIST</p>
        </div>
      </div>
    </section>
  );
};
