import { motion, useReducedMotion } from 'motion/react';
import { X } from 'lucide-react';
import { useDialog } from './useDialog';
import { gentleEase } from './motionSettings';
import { personalInfo, moreAboutMe } from '../data/portfolioData';

export const MoreAboutPanel = ({ onClose }: { onClose: () => void }) => {
  const ref = useDialog(true, onClose);
  const reduced = useReducedMotion();
  return (
    <motion.div ref={ref} className="more-about-overlay cv-dialog"
      role="dialog" aria-modal="true" aria-labelledby="more-about-title"
      id="more-about-panel"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: reduced ? 0 : 0.2 }}
      onClick={event => { if (event.target === event.currentTarget) onClose(); }}>
      <motion.div className="more-about-sheet"
        initial={{ x: reduced ? 0 : 40 }} animate={{ x: 0 }} exit={{ x: reduced ? 0 : 40 }}
        transition={{ duration: reduced ? 0 : 0.28, ease: gentleEase }}>
        <header className="more-about-header">
          <h2 id="more-about-title">More about me</h2>
          <button onClick={onClose} aria-label="Close more about me"><X size={20} aria-hidden="true" /></button>
        </header>
        <div className="more-about-body" data-lenis-prevent>
          <p className="more-about-intro">{moreAboutMe.intro}</p>
          {moreAboutMe.sections.map(section => (
            <section key={section.title}>
              <h3>{section.title}</h3>
              <p>{section.text}</p>
            </section>
          ))}
          <a className="more-about-contact" href={`mailto:${personalInfo.email}`}>Talk research with me ↗</a>
        </div>
      </motion.div>
    </motion.div>
  );
};
