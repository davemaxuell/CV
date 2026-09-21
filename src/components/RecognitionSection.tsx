import React from 'react';
import { SectionBadge } from './SectionBadge';
import { recognitions } from '../data/portfolioData';

export const RecognitionSection: React.FC = () => {
  return (
    <section id="recognition" className="mb-10">
      <SectionBadge label="RECOGNITION" />

      <div className="space-y-4 bg-white border border-neutral-200/90 rounded-2xl p-5 sm:p-6 shadow-2xs">
        {recognitions.map((item) => (
          <div key={item.id} className="group">
            <div className="flex items-baseline gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 self-center"></span>
              <span className="text-xs sm:text-sm font-bold text-neutral-900 group-hover:text-neutral-950 transition-colors">
                {item.title}
              </span>
              <div className="grow border-b border-dotted border-neutral-300 mx-1 self-center"></div>
              <span className="text-xs font-semibold text-neutral-500 shrink-0 font-mono">
                {item.year}
              </span>
            </div>
            <div className="pl-3.5 flex items-center justify-between mt-0.5">
              <span className="text-xs text-neutral-500 font-medium">
                {item.issuer}
              </span>
              {item.badge && (
                <span className="text-[10px] text-neutral-400 bg-neutral-100 px-1.5 py-0.5 rounded-sm">
                  {item.badge}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
