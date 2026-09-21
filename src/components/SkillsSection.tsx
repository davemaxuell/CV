import React, { useState } from 'react';
import { SectionBadge } from './SectionBadge';
import { skillCategories } from '../data/portfolioData';
import {
  Eye,
  Search,
  Bot,
  Flame,
  Cpu,
  Database,
  Code2,
  Languages,
  ChevronDown,
  Layers,
  Sparkles
} from 'lucide-react';

export const SkillsSection: React.FC = () => {
  // Keep track of which groupings are expanded. By default, all 8 are open/expanded.
  // When an icon/grouping is clicked, the user can collapse it as desired.
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    skillCategories.forEach((c) => {
      const key = c.id || c.title;
      initial[key] = true;
    });
    return initial;
  });

  const toggleGroup = (id: string) => {
    setExpandedGroups((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const expandAll = () => {
    const allExpanded: Record<string, boolean> = {};
    skillCategories.forEach((c) => {
      const key = c.id || c.title;
      allExpanded[key] = true;
    });
    setExpandedGroups(allExpanded);
  };

  const collapseAll = () => {
    const allCollapsed: Record<string, boolean> = {};
    skillCategories.forEach((c) => {
      const key = c.id || c.title;
      allCollapsed[key] = false;
    });
    setExpandedGroups(allCollapsed);
  };

  const getCategoryIcon = (iconName?: string) => {
    switch (iconName) {
      case 'Eye':
        return <Eye className="w-4 h-4 text-sky-600" />;
      case 'Search':
        return <Search className="w-4 h-4 text-emerald-600" />;
      case 'Bot':
        return <Bot className="w-4 h-4 text-violet-600" />;
      case 'Flame':
        return <Flame className="w-4 h-4 text-amber-600" />;
      case 'Cpu':
        return <Cpu className="w-4 h-4 text-indigo-600" />;
      case 'Database':
        return <Database className="w-4 h-4 text-teal-600" />;
      case 'Code2':
        return <Code2 className="w-4 h-4 text-blue-600" />;
      case 'Languages':
        return <Languages className="w-4 h-4 text-rose-600" />;
      default:
        return <Layers className="w-4 h-4 text-neutral-600" />;
    }
  };

  const getCategoryTheme = (iconName?: string) => {
    switch (iconName) {
      case 'Eye':
        return {
          bg: 'bg-sky-50',
          border: 'border-sky-100',
          accent: 'text-sky-700',
          badgeBg: 'bg-sky-100 text-sky-800'
        };
      case 'Search':
        return {
          bg: 'bg-emerald-50',
          border: 'border-emerald-100',
          accent: 'text-emerald-700',
          badgeBg: 'bg-emerald-100 text-emerald-800'
        };
      case 'Bot':
        return {
          bg: 'bg-violet-50',
          border: 'border-violet-100',
          accent: 'text-violet-700',
          badgeBg: 'bg-violet-100 text-violet-800'
        };
      case 'Flame':
        return {
          bg: 'bg-amber-50',
          border: 'border-amber-100',
          accent: 'text-amber-700',
          badgeBg: 'bg-amber-100 text-amber-800'
        };
      case 'Cpu':
        return {
          bg: 'bg-indigo-50',
          border: 'border-indigo-100',
          accent: 'text-indigo-700',
          badgeBg: 'bg-indigo-100 text-indigo-800'
        };
      case 'Database':
        return {
          bg: 'bg-teal-50',
          border: 'border-teal-100',
          accent: 'text-teal-700',
          badgeBg: 'bg-teal-100 text-teal-800'
        };
      case 'Code2':
        return {
          bg: 'bg-blue-50',
          border: 'border-blue-100',
          accent: 'text-blue-700',
          badgeBg: 'bg-blue-100 text-blue-800'
        };
      case 'Languages':
        return {
          bg: 'bg-rose-50',
          border: 'border-rose-100',
          accent: 'text-rose-700',
          badgeBg: 'bg-rose-100 text-rose-800'
        };
      default:
        return {
          bg: 'bg-neutral-50',
          border: 'border-neutral-200',
          accent: 'text-neutral-700',
          badgeBg: 'bg-neutral-100 text-neutral-800'
        };
    }
  };

  return (
    <section id="skills" className="mb-10">
      <div className="flex items-center justify-between gap-2 mb-2">
        <SectionBadge label="SKILLS & SPECIALIZATIONS" />

        <div className="flex items-center gap-2 text-xs">
          <button
            type="button"
            onClick={expandAll}
            className="text-[11px] font-semibold text-neutral-500 hover:text-neutral-900 transition-colors cursor-pointer"
          >
            Expand All
          </button>
          <span className="text-neutral-300">|</span>
          <button
            type="button"
            onClick={collapseAll}
            className="text-[11px] font-semibold text-neutral-500 hover:text-neutral-900 transition-colors cursor-pointer"
          >
            Collapse All
          </button>
        </div>
      </div>

      <p className="text-xs sm:text-sm text-neutral-500 mb-4 font-medium">
        Explore 8 core domains. Click any category card to collapse or expand its verified skills.
      </p>

      {/* Big 8 Groupings Accordion Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {skillCategories.map((group) => {
          const groupId = group.id || group.title;
          const isExpanded = !!expandedGroups[groupId];
          const theme = getCategoryTheme(group.iconName);

          return (
            <div
              key={groupId}
              className={`bg-white border rounded-2xl transition-all duration-200 overflow-hidden shadow-2xs ${
                isExpanded ? 'border-neutral-300 shadow-xs' : 'border-neutral-200/90 hover:border-neutral-300'
              }`}
            >
              {/* Clickable Header Button */}
              <button
                type="button"
                onClick={() => toggleGroup(groupId)}
                className="w-full p-4 flex items-center justify-between text-left cursor-pointer select-none transition-colors hover:bg-neutral-50/60"
                aria-expanded={isExpanded}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border transition-transform ${
                      theme.bg
                    } ${theme.border} ${isExpanded ? 'scale-105' : 'group-hover:scale-102'}`}
                  >
                    {getCategoryIcon(group.iconName)}
                  </div>

                  <div className="min-w-0 pr-2">
                    <div className="flex items-center gap-1.5">
                      <h3 className="text-xs sm:text-sm font-bold text-neutral-900 truncate">
                        {group.title}
                      </h3>
                      <span className={`text-[10px] font-semibold px-1.5 py-0.2 rounded-md ${theme.badgeBg}`}>
                        {group.items.length}
                      </span>
                    </div>
                    {group.description && (
                      <p className="text-[11px] text-neutral-500 font-medium truncate mt-0.5">
                        {group.description}
                      </p>
                    )}
                  </div>
                </div>

                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center text-neutral-400 shrink-0 transition-transform duration-200 ${
                    isExpanded ? 'rotate-180 text-neutral-800 bg-neutral-100' : 'bg-neutral-50'
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {/* Collapsible Skills Pill Content */}
              {isExpanded && (
                <div className="px-4 pb-4 pt-1 border-t border-neutral-100/90 bg-neutral-50/30">
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1 bg-white border border-neutral-200/90 text-neutral-800 text-[11px] sm:text-xs font-medium px-2.5 py-1 rounded-lg shadow-2xs hover:border-neutral-300 hover:bg-neutral-50/80 transition-colors"
                      >
                        <Sparkles className="w-2.5 h-2.5 text-neutral-400" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
