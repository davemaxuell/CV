import { ArrowUpRight } from "lucide-react";
import { SectionBadge } from "./SectionBadge";
import { personalInfo } from "../data/portfolioData";
export const LinksSection = () => (
  <section id="links" className="cv-section">
    <SectionBadge label="Links" />
    <div className="link-grid">
      {[
        { label: "GitHub", url: personalInfo.github },
        { label: "Google Scholar", url: personalInfo.scholar },
        { label: "LinkedIn", url: personalInfo.linkedin },
        { label: "Email", url: `mailto:${personalInfo.email}` },
      ].map((l) => (
        <a
          key={l.label}
          href={l.url}
          target={l.url.startsWith("http") ? "_blank" : undefined}
          rel="noreferrer"
        >
          {l.label}
          <ArrowUpRight size={16} />
        </a>
      ))}
    </div>
  </section>
);
