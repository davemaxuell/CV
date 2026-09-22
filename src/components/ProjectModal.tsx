import type { Project } from '../types';
import { X } from 'lucide-react';
import { useDialog } from './useDialog';
import { motion, useReducedMotion } from 'motion/react';
import { gentleEase } from './motionSettings';

export const ProjectModal = ({ project, onClose }: { project: Project | null; onClose: () => void }) => {
  const dialogRef = useDialog(!!project, onClose);
  const reduced = useReducedMotion();
  if (!project) return null;
  return (
    <motion.div ref={dialogRef} role="dialog" aria-modal="true" aria-label={project.title}
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: reduced ? 0 : 0.18, ease: gentleEase }}
      className="project-dialog cv-dialog"
      onClick={event => { if (event.target === event.currentTarget) onClose(); }}>
      <div className="project-document">
        <button className="document-close" onClick={onClose} aria-label="Close modal"><X size={18} /></button>
        <p className="document-meta">{project.period}{project.affiliation && ` · ${project.affiliation}`}</p>
        <h2>{project.title}</h2>
        {project.result && <p className="project-result">{project.result}</p>}
        {project.subtitle && <p>{project.subtitle}</p>}
        <p>{project.description}</p>
        {project.highlights.length > 0 && <ul>{project.highlights.map((item) => <li key={item}>{item}</li>)}</ul>}
        <p className="document-tools">{project.tags.join(' · ')}</p>
        {project.leaderboardUrl && <a className="project-link" href={project.leaderboardUrl} target="_blank" rel="noopener noreferrer">Official leaderboard ↗</a>}
      </div>
    </motion.div>
  );
};
