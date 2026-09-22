import { ArrowUpRight, Mail } from "lucide-react";
import { SectionBadge } from "./SectionBadge";
import { personalInfo } from "../data/portfolioData";
export const LinksSection = () => (
  <section id="links" className="cv-section">
    <SectionBadge label="Links" />
    <div className="link-grid">
      {[
        { label: "GitHub", url: personalInfo.github, icon: "github" },
        { label: "Google Scholar", url: personalInfo.scholar, icon: "googlescholar" },
        { label: "LinkedIn", url: personalInfo.linkedin, icon: "linkedin" },
        { label: "Email", url: `mailto:${personalInfo.email}`, icon: null },
      ].map((l) => (
        <a
          key={l.label}
          href={l.url}
          target={l.url.startsWith("http") ? "_blank" : undefined}
          rel="noreferrer"
        >
          <span className="link-identity">
            {l.icon ? (
              <img className="link-logo" src={`${import.meta.env.BASE_URL}links/${l.icon}.svg`} alt="" width={20} height={20} />
            ) : <Mail className="link-logo" size={20} aria-hidden="true" />}
            <span>{l.label}</span>
          </span>
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      ))}
    </div>
  </section>
);
