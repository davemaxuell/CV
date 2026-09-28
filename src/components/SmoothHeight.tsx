import { useLayoutEffect, useRef, useState, type ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { panelTransition } from './motionSettings';

// Explicit measurements also animate between two different open content sizes.
export const SmoothHeight = ({ children, id, hidden }: { children: ReactNode; id: string; hidden: boolean }) => {
  const content = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const reduced = useReducedMotion();
  useLayoutEffect(() => {
    const node = content.current!;
    const measure = () => setHeight(node.getBoundingClientRect().height);
    const observer = new ResizeObserver(measure);
    observer.observe(node);
    measure();
    return () => observer.disconnect();
  }, []);
  return (
    <motion.div id={id} className="skill-detail" aria-hidden={hidden}
      animate={{ height }} initial={false}
      transition={reduced ? { duration: 0 } : panelTransition}>
      <div ref={content}>{children}</div>
    </motion.div>
  );
};
