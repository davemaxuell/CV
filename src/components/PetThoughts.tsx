import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { MessageCircle, MessageCircleOff } from 'lucide-react';
import { petThoughts } from '../data/portfolioData';

const storageKey = 'cv-pet-thoughts-muted';

export const PetThoughts = ({ active }: { active: boolean }) => {
  const reduced = useReducedMotion();
  const [muted, setMuted] = useState(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return true;
    try { return sessionStorage.getItem(storageKey) === 'true'; } catch { return false; }
  });
  const [thought, setThought] = useState<string | null>(null);
  const previous = useRef(-1);

  useEffect(() => { if (reduced) setMuted(true); }, [reduced]);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const show = () => {
      // Choose a fresh line without repeating the previous one.
      const hasPrevious = previous.current >= 0;
      let index = Math.floor(Math.random() * (petThoughts.length - (hasPrevious ? 1 : 0)));
      if (hasPrevious && index >= previous.current) index += 1;
      previous.current = index;
      setThought(petThoughts[index]);
      timer = setTimeout(() => {
        setThought(null);
        timer = setTimeout(show, 18000 + Math.random() * 12000);
      }, 7500);
    };
    const sync = () => {
      clearTimeout(timer);
      setThought(null);
      if (active && !muted && !document.hidden) {
        timer = setTimeout(show, 3000 + Math.random() * 1500);
      }
    };
    sync();
    document.addEventListener('visibilitychange', sync);
    return () => {
      clearTimeout(timer);
      document.removeEventListener('visibilitychange', sync);
    };
  }, [active, muted]);

  const toggle = () => {
    const next = !muted;
    setMuted(next);
    try { sessionStorage.setItem(storageKey, String(next)); } catch { /* Optional preference. */ }
  };

  return <>
    <AnimatePresence>
      {thought && <motion.div className="pet-thought" key={thought}
        aria-label="Dave's thoughts" aria-live="off"
        initial={{ opacity: 0, y: reduced ? 0 : 4 }} animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: reduced ? 0 : 2 }} transition={{ duration: reduced ? 0 : 0.18 }}>
        <p>{thought}</p>
      </motion.div>}
    </AnimatePresence>
    <button className="pet-thought-toggle" type="button" onClick={toggle}
      aria-label={muted ? 'Show pet thoughts' : 'Mute pet thoughts'}
      title={muted ? 'Show thoughts' : 'Mute thoughts'}>
      {muted ? <MessageCircleOff size={16} aria-hidden="true" /> : <MessageCircle size={16} aria-hidden="true" />}
    </button>
  </>;
};
