import React from 'react';
import { MapPin, Mail, Phone, Globe, ExternalLink, Download, Send, GraduationCap, Award, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface SidebarProps {
  onOpenCV: () => void;
  onScrollToContact: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ onOpenCV, onScrollToContact }) => {
  return (
    <aside className="w-full lg:w-[320px] xl:w-[340px] shrink-0">
      <div className="sticky top-8 bg-white border border-neutral-200/90 rounded-3xl p-6 sm:p-7 shadow-xs">
        {/* Profile Image */}
        <div className="relative mb-6 group">
          <div className="aspect-3/4 w-full overflow-hidden rounded-2xl bg-neutral-100 border border-neutral-200/80 shadow-inner">
            <img
              src="/src/assets/images/dave_portrait_1789965082593.jpg"
              alt="Dave Maxuell"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-103"
            />
          </div>
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs border border-neutral-200 text-neutral-800 text-[11px] font-medium px-2.5 py-1 rounded-full shadow-xs flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-amber-500" />
            <span>AI Researcher</span>
          </div>
        </div>

        {/* Name & Role */}
        <div className="mb-5">
          <p className="text-neutral-500 text-base font-normal tracking-tight">Hello I&apos;m</p>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 mt-0.5">
            Dave <span className="font-extrabold text-neutral-950">Maxuell</span>
          </h1>
          <p className="text-sm font-medium text-neutral-600 mt-1.5 leading-snug">
            {personalInfo.title}
          </p>
          <p className="text-xs text-neutral-400 mt-0.5">
            {personalInfo.tagline}
          </p>
        </div>

        {/* Status Pill */}
        <div className="mb-5">
          <div className="inline-flex items-center gap-2 bg-emerald-50/80 border border-emerald-200/80 text-emerald-800 text-xs font-medium px-3 py-1.5 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{personalInfo.status}</span>
          </div>
        </div>

        {/* Location & Quick Meta */}
        <div className="space-y-2.5 text-xs text-neutral-600 pb-5 mb-5 border-b border-neutral-100">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
            <span>{personalInfo.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <GraduationCap className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
            <span>BUFS (Robotics, CS, Finance) • GPA 4.25</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            <span className="text-neutral-700 font-medium">HCLT & KIISE Excellent Paper Awardee</span>
          </div>
        </div>

        {/* Contact Links */}
        <div className="space-y-2.5 text-xs mb-6">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between text-neutral-600 hover:text-neutral-900 transition-colors group p-1.5 -mx-1.5 rounded-lg hover:bg-neutral-50"
          >
            <div className="flex items-center gap-2.5">
              <Globe className="w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-700" />
              <span className="font-medium">github.com/davemaxuell</span>
            </div>
            <ExternalLink className="w-3 h-3 text-neutral-400 group-hover:text-neutral-700" />
          </a>

          <a
            href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`}
            className="flex items-center justify-between text-neutral-600 hover:text-neutral-900 transition-colors group p-1.5 -mx-1.5 rounded-lg hover:bg-neutral-50"
          >
            <div className="flex items-center gap-2.5">
              <Phone className="w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-700" />
              <span>{personalInfo.phone}</span>
            </div>
          </a>

          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center justify-between text-neutral-600 hover:text-neutral-900 transition-colors group p-1.5 -mx-1.5 rounded-lg hover:bg-neutral-50"
          >
            <div className="flex items-center gap-2.5">
              <Mail className="w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-700" />
              <span className="truncate max-w-[200px]">{personalInfo.email}</span>
            </div>
          </a>
        </div>

        {/* Language Chips */}
        <div className="mb-6 pt-4 border-t border-neutral-100">
          <p className="text-[11px] uppercase tracking-wider text-neutral-400 font-semibold mb-2">
            Language Fluency
          </p>
          <div className="flex flex-wrap gap-1.5">
            <span className="text-[11px] bg-neutral-100 text-neutral-700 px-2 py-0.5 rounded-md font-medium">
              Korean (TOPIK 6, 263pts)
            </span>
            <span className="text-[11px] bg-neutral-100 text-neutral-700 px-2 py-0.5 rounded-md font-medium">
              English (TOEIC 955 / IELTS 7.5)
            </span>
            <span className="text-[11px] bg-neutral-100 text-neutral-700 px-2 py-0.5 rounded-md font-medium">
              Indonesian (Native)
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2.5 pt-2">
          <button
            type="button"
            id="download-cv-btn"
            onClick={onOpenCV}
            className="w-full py-2.5 px-4 bg-white border border-neutral-300 hover:border-neutral-400 text-neutral-800 text-sm font-semibold rounded-xl transition-all shadow-xs hover:bg-neutral-50 active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
          >
            <Download className="w-4 h-4 text-neutral-600" />
            <span>Download CV</span>
          </button>

          <button
            type="button"
            id="contact-me-btn"
            onClick={onScrollToContact}
            className="w-full py-2.5 px-4 bg-neutral-900 hover:bg-neutral-800 text-white text-sm font-semibold rounded-xl transition-all shadow-sm active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
          >
            <Send className="w-4 h-4 text-white/90" />
            <span>Contact Me</span>
          </button>
        </div>
      </div>
    </aside>
  );
};
