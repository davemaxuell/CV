import { useState } from "react";
import { SmoothHeight } from "./SmoothHeight";
import { ChevronDown } from "lucide-react";
import { SectionBadge } from "./SectionBadge";
import { skillCategories } from "../data/portfolioData";
export const SkillsSection = () => {
  const [selected, setSelected] = useState<string | null>(null);
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
            <span>{g.shortTitle || g.title}</span>
            <ChevronDown size={14} aria-hidden="true" />
          </button>
        ))}
      </div>
      <SmoothHeight id="skill-detail" hidden={!group}>
        {group && (
            <div className="skill-detail-content">
              <h3>{group.title}</h3>
              <p>{group.description}</p>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
        )}
      </SmoothHeight>
    </section>
  );
};
