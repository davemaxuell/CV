import React from 'react';

interface SectionBadgeProps {
  label: string;
}

export const SectionBadge: React.FC<SectionBadgeProps> = ({ label }) => {
  return (
    <div className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-neutral-200/70 text-neutral-700 border border-neutral-300/60 mb-4 select-none">
      {label}
    </div>
  );
};
