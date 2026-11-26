import { ArrowUpRight, FileText, Mail } from "lucide-react";
import { SectionBadge } from "./SectionBadge";
import { personalInfo } from "../data/portfolioData";

export const LinksSection = () => (
  <section id="links" data-avatar-context="links" className="cv-section">
    <SectionBadge label="Links" />
    <div className="link-grid">
      {[
        { label: "Paper CV", url: personalInfo.cvUrl, icon: "cv" as const, note: "Google Docs", featured: true },
        { label: "GitHub", url: personalInfo.github, icon: "github" as const },
        { label: "Google Scholar", url: personalInfo.scholar, icon: "googlescholar" as const },
        { label: "LinkedIn", url: personalInfo.linkedin, icon: "linkedin" as const },
        { label: "Email", url: `mailto:${personalInfo.email}`, icon: "mail" as const },
      ].map((l) => (
        <a
          key={l.label}
          className={l.featured ? "link-card--featured" : undefined}
          href={l.url}
          target={l.url.startsWith("http") ? "_blank" : undefined}
          rel={l.url.startsWith("http") ? "noopener noreferrer" : undefined}
          aria-label={l.note ? `${l.label} (${l.note})` : undefined}
        >
          <span className="link-identity">
            {l.icon === "cv" ? (
              <FileText className="link-logo" size={20} aria-hidden="true" />
            ) : l.icon === "mail" ? (
              <Mail className="link-logo" size={20} aria-hidden="true" />
            ) : (
              <img className="link-logo" src={`${import.meta.env.BASE_URL}links/${l.icon}.svg`} alt="" width={20} height={20} />
            )}
            <span>{l.label}</span>
          </span>
          <span className="link-meta">
            {l.note && <span className="link-note">{l.note}</span>}
            <ArrowUpRight size={16} aria-hidden="true" />
          </span>
        </a>
      ))}
    </div>
  </section>
);
