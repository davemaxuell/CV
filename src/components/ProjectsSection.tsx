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
    <section id="projects" data-avatar-context="projects" className="cv-section">
      <SectionBadge label="Projects" />
        <div className="project-grid">
          {projects.map((p) => (
            <article className="project-card" key={p.id} data-avatar-context={`project:${p.id}`}>
              <div className="project-copy">
                <p className="project-period">{p.period}</p>
                <h3>{p.title}</h3>
                {p.result && <p className="project-result">{p.result}</p>}
                <p>{p.description}</p>
                <p className="project-tools">{p.tags.slice(0, 4).join(' · ')}</p>
                {p.liveUrl || p.repositoryUrl || p.modelUrl ? (
                  <div className="project-actions">
                    {p.liveUrl && (
                      <a className="project-link" href={p.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`View project: ${p.title}`}>
                        View project <ArrowUpRight size={12} aria-hidden="true" />
                      </a>
                    )}
                    {p.repositoryUrl && (
                      <a className="project-link project-link--github" href={p.repositoryUrl} target="_blank" rel="noopener noreferrer" aria-label={`View ${p.title} on GitHub`} title="View on GitHub">
                        <img src={`${import.meta.env.BASE_URL}links/github.svg`} alt="" width={18} height={18} />
                      </a>
                    )}
                    {p.modelUrl && (
                      <a className="project-link" href={p.modelUrl} target="_blank" rel="noopener noreferrer" aria-label={`View ${p.title} on Hugging Face`}>
                        View model <ArrowUpRight size={12} aria-hidden="true" />
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
