import React from 'react';
import { SectionBadge } from './SectionBadge';
import { ArrowUpRight, Github, Linkedin, BookOpen, Mail, Calendar } from 'lucide-react';

export const LinksSection: React.FC = () => {
  const links = [
    {
      title: 'Schedule a Discussion',
      subtitle: 'Research collaboration & roles',
      href: 'mailto:davemaxuell@gmail.com?subject=Meeting%20Request%20-%20Dave%20Maxuell',
      icon: <Calendar className="w-4 h-4 text-neutral-600" />
    },
    {
      title: 'GitHub',
      subtitle: 'Code repositories & RAG pipelines',
      href: 'https://github.com/davemaxuell',
      icon: <Github className="w-4 h-4 text-neutral-600" />
    },
    {
      title: 'LinkedIn',
      subtitle: 'Professional profile & network',
      href: 'https://www.linkedin.com/in/dave-maxuell-b39185224/',
      icon: <Linkedin className="w-4 h-4 text-neutral-600" />
    },
    {
      title: 'Google Scholar',
      subtitle: 'Publications & citations',
      href: 'https://scholar.google.com/citations?user=DpN3XPYAAAAJ&hl=en',
      icon: <BookOpen className="w-4 h-4 text-neutral-600" />
    }
  ];

  return (
    <section id="links" className="mb-10">
      <SectionBadge label="LINKS" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {links.map((link) => (
          <a
            key={link.title}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="p-4 bg-white border border-neutral-200/90 hover:border-neutral-300 rounded-2xl shadow-2xs transition-all hover:translate-y-[-1px] hover:shadow-xs flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-neutral-100 group-hover:bg-neutral-200/70 flex items-center justify-center transition-colors">
                {link.icon}
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-neutral-900 group-hover:text-neutral-950">
                  {link.title}
                </h4>
                <p className="text-[11px] text-neutral-400 font-medium">
                  {link.subtitle}
                </p>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-neutral-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
          </a>
        ))}
      </div>
    </section>
  );
};
