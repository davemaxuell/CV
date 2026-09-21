import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import { SectionBadge } from "./SectionBadge";
import { techStackPills } from "../data/portfolioData";
import { Pause, Play } from "lucide-react";
import type { CSSProperties } from "react";
export const TechStackSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [running, setRunning] = useState(false);
  const [paused, setPaused] = useState(false);
  const reduced = useReducedMotion();
  useEffect(() => {
    let visible = false;
    const update = () => setRunning(visible && !document.hidden);
    const observer = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      update();
    });
    observer.observe(ref.current!);
    document.addEventListener("visibilitychange", update);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", update);
    };
  }, []);
  return (
    <section id="tech-stack" className="cv-section">
      <SectionBadge label="Tech stack" />
      <div ref={ref} className={`tech-window ${reduced ? "is-static" : ""}`}
        style={{ '--tech-set-width': `${techStackPills.length * 100}px`, '--tech-duration': `${techStackPills.length * 100 / 30}s` } as CSSProperties}>
        <div
          className="tech-track"
          style={{
            willChange: running && !paused && !reduced ? "transform" : "auto",
            animationPlayState:
              running && !paused && !reduced ? "running" : "paused",
          }}
        >
          {[0, 1, 2].map((copy) => (
            <div className="tech-set" key={copy} aria-hidden={copy > 0}>
              {techStackPills.map((t) => (
                <div
                  className="tech-item"
                  key={t.name}
                  title={`${t.name} · ${t.category}`}
                >
                  <img
                    src={`${import.meta.env.BASE_URL}tech/${t.icon}`}
                    alt=""
                    width="40"
                    height="40"
                    loading="lazy"
                  />
                  <span>{t.name}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
        {!reduced && (
          <button
            className="tech-pause"
            onClick={() => setPaused(!paused)}
            aria-label={
              paused
                ? "Play tech stack animation"
                : "Pause tech stack animation"
            }
          >
            {paused ? <Play size={12} /> : <Pause size={12} />}
          </button>
        )}
      </div>
    </section>
  );
};
