import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import { ArrowUpRight, ChevronRight, ChevronLeft } from "lucide-react";
import { SectionBadge } from "./SectionBadge";
import { projects } from "../data/portfolioData";
import type { Project } from "../types";
export const ProjectsSection = ({
  onSelectProject,
}: {
  onSelectProject: (p: Project) => void;
}) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [edges, setEdges] = useState({ start: true, end: false });
  const reduced = useReducedMotion();
  useEffect(() => {
    const track = trackRef.current!;
    let frame = 0;
    const update = () => {
      frame = 0;
      const start = track.scrollLeft < 2;
      const end = track.scrollLeft + track.clientWidth >= track.scrollWidth - 2;
      setEdges(previous => previous.start === start && previous.end === end ? previous : { start, end });
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    const resize = new ResizeObserver(update);
    resize.observe(track);
    track.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => {
      resize.disconnect();
      track.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);
  const scroll = (direction: number) =>
    trackRef.current?.scrollBy({
      left: direction * 240,
      behavior: reduced ? "instant" : "smooth",
    });
  return (
    <section id="projects" className="cv-section">
      <SectionBadge label="Projects" />
      <div className="project-carousel">
        <div id="projects-carousel" ref={trackRef} className="project-track">
          {projects.map((p) => (
            <article className="project-card" key={p.id}>
              <div className="project-copy">
                <p className="project-period">{p.period}</p>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <button
                  className="project-link"
                  onClick={() => onSelectProject(p)}
                >
                  Click to view <ArrowUpRight size={12} />
                </button>
              </div>
            </article>
          ))}
        </div>
        <button
          className="carousel-control previous"
          aria-label="Previous projects"
          disabled={edges.start}
          onClick={() => scroll(-1)}
        >
          <ChevronLeft size={18} />
        </button>
        <button
          className="carousel-control next"
          aria-label="Next projects"
          disabled={edges.end}
          onClick={() => scroll(1)}
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
};
