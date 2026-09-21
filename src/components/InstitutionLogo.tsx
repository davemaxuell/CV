import React from 'react';

export interface InstitutionLogoProps {
  id: string;
  company?: string;
  className?: string;
}

type Logo = { file: string; name: string; dark?: boolean };

// Original organization assets; provenance is recorded in public/logos/SOURCES.md.
const bufs: Logo = { file: 'bufs.png', name: 'Busan University of Foreign Studies' };
const sunmoon: Logo = { file: 'sunmoon.png', name: 'Sun Moon University', dark: true };
const logos: Record<string, Logo> = {
  bufs,
  'bufs-present': bufs,
  'unist-intern': { file: 'unist.png', name: 'UNIST' },
  'daewoong-pharma': { file: 'daewoong.svg', name: 'Daewoong Pharmaceutical' },
  'teddysum-bok': { file: 'teddysum.png', name: 'TeddySum' },
  'bufs-bgcf': { file: 'bgcf.png', name: 'Busan Global City Foundation' },
  'oriental-precision': { file: 'oriental.png', name: 'Oriental Precision & Engineering' },
  'sun-moon': sunmoon,
  sunmoon,
};

export const InstitutionLogo: React.FC<InstitutionLogoProps> = ({ id, company, className = 'w-16 h-10' }) => {
  const logo = logos[id];

  if (logo) {
    return (
      <div
        className={`${className} rounded-lg flex items-center justify-center shrink-0 border border-neutral-200 overflow-hidden p-1 ${logo.dark ? 'bg-neutral-800' : 'bg-white'}`}
        title={company || logo.name}
      >
        <img
          src={`${import.meta.env.BASE_URL}logos/${logo.file}`}
          alt={`${logo.name} logo`}
          className="block w-full h-full object-contain"
          decoding="async"
        />
      </div>
    );
  }

  return (
    <div
      className={`${className} rounded-xl bg-neutral-900 text-white flex flex-col items-center justify-center shrink-0 border border-neutral-800 overflow-hidden select-none p-1`}
      title={company || (id === 'teaching-assistant' ? 'Teaching Assistant' : 'Organization')}
    >
      <span className="text-[11px] font-bold leading-none">
        {id === 'teaching-assistant' ? 'TA' : (company?.charAt(0) || '?')}
      </span>
      {id === 'teaching-assistant' && <span className="text-[6px] text-neutral-300 font-semibold mt-0.5">AI &amp; ML</span>}
    </div>
  );
};
