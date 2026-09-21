import { useId, useState, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { panelTransition } from './motionSettings';

export const ResumeRow = ({
  title,
  subtitle,
  date,
  icon,
  award,
  children,
}: {
  title: string;
  subtitle: string;
  date: string;
  icon?: ReactNode;
  award?: string;
  children: ReactNode;
}) => {
  const [open, setOpen] = useState(false);
  const id = useId();
  const reduced = useReducedMotion();
  return (
    <article className={`resume-row ${open ? "is-open" : ""}`}>
      <button
        className="resume-trigger"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen(!open)}
      >
        {icon && <span className="resume-logo">{icon}</span>}
        <span className="resume-heading">
          <span className="resume-title">{title}</span>
          <span className="resume-subtitle">{subtitle}</span>
          {award && <span className="resume-award">{award}</span>}
        </span>
        <span className="resume-date">{date}</span>
        <ChevronDown className="resume-chevron" size={14} aria-hidden="true" />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={id}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={
              reduced
                ? { duration: 0 }
                : panelTransition
            }
            className="resume-panel"
          >
            <div className="resume-details">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
};
