import React from 'react';
import { SectionBadge } from './SectionBadge';
import { techStackPills } from '../data/portfolioData';
import { Flame, Cpu, Zap, Link2, Server, Database, Box, Eye } from 'lucide-react';

export const TechStackSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Flame': return <Flame className="w-5 h-5 text-neutral-800" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-neutral-800" />;
      case 'Zap': return <Zap className="w-5 h-5 text-neutral-800" />;
      case 'Link2': return <Link2 className="w-5 h-5 text-neutral-800" />;
      case 'Server': return <Server className="w-5 h-5 text-neutral-800" />;
      case 'Database': return <Database className="w-5 h-5 text-neutral-800" />;
      case 'Box': return <Box className="w-5 h-5 text-neutral-800" />;
      case 'Eye': return <Eye className="w-5 h-5 text-neutral-800" />;
      default: return <Cpu className="w-5 h-5 text-neutral-800" />;
    }
  };

  return (
    <section id="tech-stack" className="mb-10">
      <SectionBadge label="TECH STACK" />
      <div className="flex flex-wrap items-center gap-3">
        {techStackPills.map((tech) => (
          <div
            key={tech.name}
            className="flex items-center gap-2.5 bg-white border border-neutral-200/90 rounded-2xl px-4 py-2.5 shadow-2xs hover:border-neutral-300 transition-all group"
            title={`${tech.name} (${tech.category})`}
          >
            <div className="w-7 h-7 rounded-xl bg-neutral-100 flex items-center justify-center group-hover:bg-neutral-200/80 transition-colors">
              {getIcon(tech.iconName)}
            </div>
            <div>
              <p className="text-xs sm:text-sm font-semibold text-neutral-800 leading-none">{tech.name}</p>
              <p className="text-[10px] text-neutral-400 mt-0.5">{tech.category}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
