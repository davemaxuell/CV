import React, { useState } from 'react';
import { X, Printer, Copy, Check, Download } from 'lucide-react';
import { useDialog } from './useDialog';
import {
  personalInfo,
  experiences,
  publications,
  projects,
  educationList,
  skillCategories,
  languageSkills
} from '../data/portfolioData';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const dialogRef = useDialog(isOpen, onClose);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const getMarkdownContent = () => {
    return `# ${personalInfo.name.toUpperCase()}
${personalInfo.location} | ${personalInfo.phone} | ${personalInfo.email}

## TECHNICAL SKILLS
${skillCategories.map(c => `**${c.title}:** ${c.items.join(', ')}`).join('\n\n')}

## WORK EXPERIENCE
${experiences.map(e => `### ${e.company}\n*${e.period}*\n**${e.role}**\n${e.points.map(p => `- ${p}`).join('\n')}`).join('\n\n')}

## PROJECTS
${projects.map(p => `### ${p.title} | ${p.subtitle || ''}\n*${p.period}*\n**${p.affiliation || ''}**\n- ${p.description}\n${p.highlights.map(h => `- ${h}`).join('\n')}`).join('\n\n')}

## PUBLICATIONS / CONFERENCES
${publications.map(pub => `### ${pub.title}\n*${pub.conference}, ${pub.year}*\n**${pub.authorRole}${pub.award ? ` | ${pub.award}` : ''}**\n${pub.summary}`).join('\n\n')}

## EDUCATION
${educationList.map(edu => `### ${edu.institution}\n*${edu.period}*\n${edu.degree}${edu.gpa ? ` (GPA: ${edu.gpa})` : ''}\n${edu.details.map(d => `- ${d}`).join('\n')}`).join('\n\n')}

## LANGUAGE SKILLS
${languageSkills.map(skill => `- **${skill.title}** (${skill.year}) — ${skill.issuer}`).join('\n')}
`;
  };

  const handleCopyMarkdown = async () => {
    try {
      await navigator.clipboard.writeText(getMarkdownContent());
      setCopyError(false);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopyError(true);
    }
  };

  const handleDownloadMarkdown = () => {
    const element = document.createElement('a');
    const file = new Blob([getMarkdownContent()], { type: 'text/markdown' });
    element.href = URL.createObjectURL(file);
    element.download = 'Dave_Maxuell_CV.md';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    URL.revokeObjectURL(element.href);
  };

  return (
    <div ref={dialogRef} role="dialog" aria-modal="true" aria-label="Curriculum Vitae" className="cv-dialog fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/50" onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[92vh] flex flex-col border border-neutral-300 overflow-hidden">
        {/* Modal Top Bar */}
        <div className="px-6 py-4 border-b border-neutral-200 bg-neutral-50 flex items-center justify-between">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-neutral-900">
              Curriculum Vitae — {personalInfo.name}
            </h2>
            <p className="text-xs text-neutral-500">
              {personalInfo.title} · {personalInfo.tagline}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopyMarkdown}
              className="p-2 sm:px-3 sm:py-1.5 rounded-md border border-neutral-200 bg-white hover:bg-neutral-100 text-neutral-700 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Copy Markdown"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="hidden sm:inline">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-neutral-600" />
                  <span className="hidden sm:inline">Copy MD</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handleDownloadMarkdown}
              className="p-2 sm:px-3 sm:py-1.5 rounded-md border border-neutral-200 bg-white hover:bg-neutral-100 text-neutral-700 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Download .md"
            >
              <Download className="w-4 h-4 text-neutral-600" />
              <span className="hidden sm:inline">Export .md</span>
            </button>

            <button
              type="button"
              onClick={handlePrint}
              className="p-2 sm:px-3 sm:py-1.5 rounded-md bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Print / Save PDF"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">Print / PDF</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close CV preview"
              className="w-8 h-8 rounded-full border border-neutral-200 hover:bg-neutral-200/80 flex items-center justify-center text-neutral-600 transition-colors ml-1 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {copyError && <p role="status" className="px-6 py-2 text-sm">Clipboard access failed. Use Export .md to save your CV.</p>}
        {/* Formatted CV Content (Printable) */}
        <div className="p-6 sm:p-10 overflow-y-auto text-neutral-900 space-y-8 print:p-0">
          {/* Header */}
          <div className="text-center border-b border-neutral-200 pb-5">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-950">
              {personalInfo.name.toUpperCase()}
            </h1>
            <p className="text-xs sm:text-sm text-neutral-600 mt-1.5">
              {personalInfo.location} &nbsp;|&nbsp; {personalInfo.phone} &nbsp;|&nbsp;{' '}
              <a href={`mailto:${personalInfo.email}`} className="text-neutral-900 underline">
                {personalInfo.email}
              </a>
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-sm font-bold tracking-wider uppercase border-b border-neutral-900 pb-1 mb-3 text-neutral-950">
              Technical Skills
            </h2>
            <div className="space-y-1.5 text-xs sm:text-sm">
              {skillCategories.map((c) => (
                <p key={c.title} className="leading-relaxed">
                  <strong className="text-neutral-900">{c.title}:</strong>{' '}
                  <span className="text-neutral-700">{c.items.join(', ')}</span>
                </p>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-sm font-bold tracking-wider uppercase border-b border-neutral-900 pb-1 mb-3 text-neutral-950">
              Work Experience
            </h2>
            <div className="space-y-4">
              {experiences.map((exp) => (
                <div key={exp.id} className="text-xs sm:text-sm">
                  <div className="flex flex-wrap justify-between items-baseline font-semibold text-neutral-900">
                    <span className="text-sm">{exp.company}</span>
                    <span className="text-neutral-500 font-normal italic">{exp.period}</span>
                  </div>
                  <div className="font-medium text-neutral-700 mb-1">
                    {exp.role} {exp.department && `| ${exp.department}`}
                  </div>
                  <ul className="list-disc list-outside pl-4 space-y-1 text-neutral-600 leading-relaxed">
                    {exp.points.map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-sm font-bold tracking-wider uppercase border-b border-neutral-900 pb-1 mb-3 text-neutral-950">
              Key Projects
            </h2>
            <div className="space-y-4">
              {projects.map((proj) => (
                <div key={proj.id} className="text-xs sm:text-sm">
                  <div className="flex flex-wrap justify-between items-baseline font-semibold text-neutral-900">
                    <span className="text-sm">
                      {proj.title} {proj.subtitle && `| ${proj.subtitle}`}
                    </span>
                    <span className="text-neutral-500 font-normal italic">{proj.period}</span>
                  </div>
                  {proj.affiliation && (
                    <div className="font-medium text-neutral-700 mb-1">
                      {proj.affiliation}
                    </div>
                  )}
                  <p className="text-neutral-600 mb-1 leading-relaxed">{proj.description}</p>
                  <ul className="list-disc list-outside pl-4 space-y-0.5 text-neutral-600">
                    {proj.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Publications */}
          <div>
            <h2 className="text-sm font-bold tracking-wider uppercase border-b border-neutral-900 pb-1 mb-3 text-neutral-950">
              Publications / Conferences
            </h2>
            <div className="space-y-3">
              {publications.map((pub) => (
                <div key={pub.id} className="text-xs sm:text-sm">
                  <div className="flex flex-wrap justify-between items-baseline font-semibold text-neutral-900">
                    <span className="text-sm leading-snug">{pub.title}</span>
                    <span className="text-neutral-500 font-normal italic">{pub.year}</span>
                  </div>
                  <div className="text-neutral-600 font-medium">
                    <em>{pub.conference}</em> &nbsp;•&nbsp;{' '}
                    <span className="font-semibold text-neutral-800">{pub.authorRole}</span>
                    {pub.award && (
                      <span className="ml-2 font-bold text-amber-700">
                        ({pub.award})
                      </span>
                    )}
                  </div>
                  <p className="text-neutral-600 mt-1 leading-relaxed">{pub.summary}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-bold tracking-wider uppercase border-b border-neutral-900 pb-1 mb-3 text-neutral-950">
              Language Skills
            </h2>
            <div className="space-y-3">
              {languageSkills.map((skill) => (
                <div key={skill.id} className="text-xs sm:text-sm">
                  <div className="flex flex-wrap justify-between items-baseline font-semibold text-neutral-900">
                    <span>{skill.title}</span>
                    <span className="text-neutral-500 font-normal">{skill.year}</span>
                  </div>
                  <p className="text-neutral-600">{skill.issuer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-sm font-bold tracking-wider uppercase border-b border-neutral-900 pb-1 mb-3 text-neutral-950">
              Education & Honors
            </h2>
            <div className="space-y-3">
              {educationList.map((edu) => (
                <div key={edu.id} className="text-xs sm:text-sm">
                  <div className="flex flex-wrap justify-between items-baseline font-semibold text-neutral-900">
                    <span className="text-sm">{edu.institution}</span>
                    <span className="text-neutral-500 font-normal italic">{edu.period}</span>
                  </div>
                  <div className="text-neutral-700 font-medium">
                    {edu.degree} {edu.gpa && `(GPA: ${edu.gpa})`}
                  </div>
                  <ul className="list-disc list-outside pl-4 space-y-0.5 text-neutral-600 mt-0.5">
                    {edu.details.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
