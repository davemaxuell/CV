import React from 'react';
import { SectionBadge } from './SectionBadge';
import { publications } from '../data/portfolioData';
import { Trophy, FileText, CheckCircle2 } from 'lucide-react';

export const PublicationsSection: React.FC = () => {
  return (
    <section id="publications" className="mb-10">
      <SectionBadge label="PUBLICATIONS / CONFERENCES" />

      <div className="space-y-4">
        {publications.map((pub) => (
          <div
            key={pub.id}
            className="bg-white border border-neutral-200/90 rounded-2xl p-5 shadow-2xs transition-all hover:border-neutral-300"
          >
            {/* Header with Conference & Author Role */}
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-neutral-900 text-white">
                  {pub.conference.split('(')[0].trim()}
                </span>
                <span className="text-xs font-medium text-neutral-600 bg-neutral-100 px-2 py-0.5 rounded-md">
                  {pub.authorRole}
                </span>
                {pub.award && (
                  <span className="text-xs font-bold text-amber-800 bg-amber-50 border border-amber-200/80 px-2.5 py-0.5 rounded-md flex items-center gap-1">
                    <Trophy className="w-3 h-3 text-amber-600" />
                    {pub.award}
                  </span>
                )}
              </div>
              <span className="text-xs font-semibold text-neutral-400">
                {pub.year}
              </span>
            </div>

            {/* Paper Title */}
            <h3 className="text-sm sm:text-base font-bold text-neutral-900 leading-snug mb-2">
              {pub.title}
            </h3>

            {/* Summary */}
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-3.5">
              {pub.summary}
            </p>

            {/* Key Quantitative Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 p-3 bg-neutral-50/80 rounded-xl border border-neutral-100 mb-3">
              {pub.metrics.map((m, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-semibold truncate">
                    {m.label}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-neutral-900">
                    {m.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              <FileText className="w-3.5 h-3.5 text-neutral-400 mr-1" />
              {pub.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-medium bg-white border border-neutral-200 text-neutral-600 px-2 py-0.5 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
