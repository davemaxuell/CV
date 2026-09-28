import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { MessageCircle, MessageCircleOff } from 'lucide-react';
import { usePetDialogue } from './usePetDialogue';

const storageKey = 'cv-pet-thoughts-muted';

export const PetThoughts = ({ active }: { active: boolean }) => {
  const reduced = useReducedMotion();
  const [muted, setMuted] = useState(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return true;
    try { return sessionStorage.getItem(storageKey) === 'true'; } catch { return false; }
  });
  const thought = usePetDialogue(active && !muted);

  useEffect(() => { if (reduced) setMuted(true); }, [reduced]);

  const toggle = () => {
    const next = !muted;
    setMuted(next);
    try { sessionStorage.setItem(storageKey, String(next)); } catch { /* Optional preference. */ }
  };

  return <>
    <span className="sr-only" role="status" aria-live="polite" aria-atomic="true">
      {thought?.keyboard ? `${thought.label ? `${thought.label}: ` : ''}${thought.text}` : ''}
    </span>
    {thought && <motion.div className="pet-thought" key={thought.topic} data-topic={thought.topic}
      aria-label={thought.label ? `Dave on ${thought.label}` : "Dave's thoughts"} aria-live="off"
      initial={{ opacity: 0, y: reduced || thought.keyboard ? 0 : 4 }} animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduced || thought.keyboard ? 0 : 0.18 }}>
      {thought.label && <span className="pet-thought-topic">{thought.label}</span>}
      <p>{thought.text}</p>
    </motion.div>}
    <button className="pet-thought-toggle" type="button" onClick={toggle}
      aria-label={muted ? 'Show pet thoughts' : 'Mute pet thoughts'}
      title={muted ? 'Show thoughts' : 'Mute thoughts'}>
      {muted ? <MessageCircleOff size={16} aria-hidden="true" /> : <MessageCircle size={16} aria-hidden="true" />}
    </button>
  </>;
};
