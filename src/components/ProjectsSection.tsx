import { ArrowUpRight } from "lucide-react";
import { SectionBadge } from "./SectionBadge";
import { projects } from "../data/portfolioData";
import type { Project } from "../types";
export const ProjectsSection = ({
  onSelectProject,
}: {
  onSelectProject: (p: Project) => void;
}) => {
  return (
    <section id="projects" className="cv-section">
      <SectionBadge label="Projects" />
        <div className="project-grid">
          {projects.map((p) => (
            <article className="project-card" key={p.id}>
              <div className="project-copy">
                <p className="project-period">{p.period}</p>
                <h3>{p.title}</h3>
                {p.result && <p className="project-result">{p.result}</p>}
                <p>{p.description}</p>
                <p className="project-tools">{p.tags.slice(0, 4).join(' · ')}</p>
                {p.liveUrl || p.repositoryUrl ? (
                  <div className="project-actions">
                    <a className="project-link" href={p.liveUrl || p.repositoryUrl} target="_blank" rel="noopener noreferrer" aria-label={`${p.liveUrl ? 'View project' : 'View on GitHub'}: ${p.title}`}>
                      {p.liveUrl ? 'View project' : 'View on GitHub'} <ArrowUpRight size={12} />
                    </a>
                    {p.liveUrl && p.repositoryUrl && (
                      <a className="project-link" href={p.repositoryUrl} target="_blank" rel="noopener noreferrer" aria-label={`GitHub: ${p.title}`}>
                        GitHub <ArrowUpRight size={12} />
                      </a>
                    )}
                  </div>
                ) : <div className="project-actions"><button
                  className="project-link"
                  onClick={() => onSelectProject(p)}
                  aria-label={`Read details: ${p.title}`}
                >
                  Read details <ArrowUpRight size={12} />
                </button>
                  {p.leaderboardUrl && <a className="project-link" href={p.leaderboardUrl} target="_blank" rel="noopener noreferrer" aria-label={`Official leaderboard: ${p.title}`}>
                    Leaderboard <ArrowUpRight size={12} />
                  </a>}
                </div>}
              </div>
            </article>
          ))}
        </div>
    </section>
  );
};
