import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { SectionBadge } from "./SectionBadge";
import { skillCategories } from "../data/portfolioData";
export const SkillsSection = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const reduced = useReducedMotion();
  const group = skillCategories.find((g) => g.title === selected);
  return (
    <section id="skills" className="cv-section">
      <SectionBadge label="Skills" />
      <div className="skill-chips">
        {skillCategories.map((g) => (
          <button
            key={g.title}
            className="skill-chip"
            aria-expanded={selected === g.title}
            aria-controls="skill-detail"
            onClick={() => setSelected(selected === g.title ? null : g.title)}
          >
            {g.shortTitle || g.title}
          </button>
        ))}
      </div>
      <AnimatePresence initial={false}>
        {group && (
          <motion.div
            id="skill-detail"
            className="skill-detail"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: reduced ? 0 : 0.3 }}
          >
            <div>
              <h3>{group.title}</h3>
              <p>{group.description}</p>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
