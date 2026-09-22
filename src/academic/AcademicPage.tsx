/* THESIS: Let reviewers read Dave's academic record directly in a personal research page.
 * OWN-WORLD: White canvas, Roboto, quiet orange links, date columns, unboxed bibliography.
 * STORY: Meet an undergraduate researcher, inspect preparation and evidence, open papers or make contact.
 * FIRST VIEWPORT: Compact navigation, bold name, biography at left and a 250px portrait at right; education follows.
 * FORM: User-pinned https://hoyeonchang.github.io/; measured reference screenshots are the approved direction. */
import { useState, type ReactNode } from 'react';
import { Menu, X } from 'lucide-react';
import { personalInfo, educationList, experiences, publications, projects, recognitions, languageSkills, skillCategories, techStackPills } from '../data/portfolioData';
import type { Experience } from '../types';
import { InstitutionLogo } from '../components/InstitutionLogo';
import { useSmoothScroll } from '../components/useSmoothScroll';
import portrait from '../assets/images/dave-profile.jpg';

const cvUrl = 'https://docs.google.com/document/d/1UeQordLd55N3Tvdrse-tNfqrjUSfOBhcgXU6Df60-9c/edit?tab=t.0';
const portfolioUrl = 'https://dave-maxuell-cv.vercel.app/';
const academicIds = ['bufs-present', 'unist-intern', 'bufs-bgcf', 'teaching-assistant'];
const chronologicalPublications = [...publications].sort((a, b) => Number(b.year) - Number(a.year));
const external = { target: '_blank', rel: 'noopener noreferrer' } as const;

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return <section id={id} className="academic-section" aria-labelledby={`${id}-heading`}>
    <h2 id={`${id}-heading`}>{title}</h2>{children}
  </section>;
}

function DatedEntry({ date, children }: { date: string; children: ReactNode }) {
  return <article className="academic-entry"><div className="academic-date">{date}</div><div className="academic-entry-body">{children}</div></article>;
}

function ExperienceEntries({ items }: { items: Experience[] }) {
  return <div className="academic-entries">{items.map(item => <DatedEntry key={item.id} date={item.period}>
    <h3>{item.role}</h3>
    <p className="academic-organization"><InstitutionLogo id={item.id} company={item.company} className="academic-logo" />
      <span>{item.company}{item.id === 'teaching-assistant' && ' · BUFS'}</span>
    </p>
    {item.highlight && <p>{item.highlight}</p>}
    <details className="academic-details"><summary>Work details</summary>
      {item.department && <p>{item.department}</p>}
      <ul>{item.points.map(point => <li key={point}>{point}</li>)}</ul>
      {item.tools && <p className="academic-muted">{item.tools.join(' · ')}</p>}
    </details>
  </DatedEntry>)}</div>;
}

export default function AcademicPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  useSmoothScroll();
  const socialLinks = [
    { name: 'Google Scholar', href: personalInfo.scholar, icon: 'googlescholar.svg' },
    { name: 'GitHub', href: personalInfo.github, icon: 'github.svg' },
    { name: 'LinkedIn', href: personalInfo.linkedin, icon: 'linkedin.svg' },
  ];
  return <>
    <a className="academic-skip" href="#about">Skip to content</a>
    <header className="academic-nav">
      <div className="academic-nav-inner">
        <nav className="academic-socials" aria-label="Profiles and CV">
          {socialLinks.map(link => <a key={link.name} href={link.href} {...external} aria-label={link.name} title={link.name}>
            <img src={`/links/${link.icon}`} alt="" width="18" height="18" />
          </a>)}
          <a href={cvUrl} {...external}>View CV</a>
        </nav>
        <button className="academic-menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="academic-navigation" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}>{menuOpen ? <X size={22} /> : <Menu size={22} />}</button>
        <nav id="academic-navigation" className={`academic-navigation ${menuOpen ? 'is-open' : ''}`} aria-label="Sections" onKeyDown={event => { if (event.key === 'Escape') { setMenuOpen(false); document.querySelector<HTMLButtonElement>('.academic-menu-toggle')?.focus(); } }}>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#publications" onClick={() => setMenuOpen(false)}>Publications</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href={portfolioUrl} {...external}>Portfolio ↗</a>
        </nav>
      </div>
    </header>

    <main className="academic-main">
      <section id="about" className="academic-intro" aria-labelledby="academic-name">
        <h1 id="academic-name">{personalInfo.name}</h1>
        <p className="academic-subtitle">Undergraduate student · AI research</p>
        <figure className="academic-portrait"><img src={portrait} alt="Dave Maxuell" width="960" height="1280" fetchPriority="high" /></figure>
        <p className="academic-email">Email: <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a></p>
        <div className="academic-bio">
          <p>I'm an undergraduate student at <a href="#education">Busan University of Foreign Studies</a> in Busan, South Korea, expecting to graduate in February 2027. Alongside my research at BUFS, I'm currently a research intern at UNIST's Interactive Multimodal Machine Learning Lab.</p>
          <p>My work focuses on <strong>LLMs, NLP, VLMs, and RAG</strong>. I learn through projects, paying close attention to the workflow, the training pipeline, and how reward methods shape model behavior. My research has received <a href="#publications">Excellent Paper Awards at HCLT and KIISE</a>.</p>
          <p>I want to pursue AI research more deeply through graduate study. I'm especially curious about foundation models and model architecture, vision-language-action and navigation (VLA/VLN), reinforcement learning, and post-training.</p>
        </div>
        <p className="academic-availability">{personalInfo.status} · <a href={`mailto:${personalInfo.email}`}>Get in touch</a></p>
      </section>

      <Section id="education" title="Education">
        <div className="academic-entries">{educationList.map(item => <DatedEntry key={item.id} date={item.period}>
          <h3>{item.degree}</h3>
          <p className="academic-organization"><InstitutionLogo id={item.id} company={item.institution} className="academic-logo" /><span>{item.institution}</span></p>
          {(item.gpa || item.expectedGraduation) && <p>{item.gpa && `GPA: ${item.gpa}`}{item.gpa && item.expectedGraduation && ' · '}{item.expectedGraduation && `Expected graduation: ${item.expectedGraduation}`}</p>}
          <details className="academic-details"><summary>Program details</summary><ul>{item.details.map(detail => <li key={detail}>{detail}</li>)}</ul></details>
        </DatedEntry>)}</div>
      </Section>

      <Section id="research-experience" title="Research & Teaching">
        <ExperienceEntries items={experiences.filter(item => academicIds.includes(item.id))} />
      </Section>

      <Section id="publications" title="Publications">
        <p className="academic-section-note">{publications.filter(item => item.authorRole === 'First author').length} first-author works listed · <a href={personalInfo.scholar} {...external}>Google Scholar ↗</a></p>
        <div className="academic-publications">{chronologicalPublications.map(paper => <article key={paper.id} className="academic-publication">
          <h3>{paper.paperUrl ? <a href={paper.paperUrl} {...external}>{paper.title}</a> : paper.title}</h3>
          <p className="academic-author">Dave Maxuell · {paper.authorRole}</p>
          <p className="academic-venue">{paper.conference}</p>
          {paper.status && <p className="academic-result">{paper.status}</p>}
          {paper.award && <p className="academic-result">{paper.award.replace(' 🏆', '')}</p>}
          {paper.highlight && <p className="academic-publication-summary">{paper.highlight}</p>}
          {paper.paperUrl && <div className="academic-links"><a href={paper.paperUrl} {...external} aria-label={`View paper on Google Scholar: ${paper.title}`}>Paper on Google Scholar ↗</a></div>}
          <details className="academic-details"><summary>Abstract & results</summary>
            <p>{paper.summary}</p>
            {paper.pages && <p>Pages: {paper.pages}</p>}
            <dl className="academic-metrics">{paper.metrics.map(metric => <div key={metric.label}><dt>{metric.label}</dt><dd>{metric.value}</dd></div>)}</dl>
            <p className="academic-muted">{paper.tags.join(' · ')}</p>
          </details>
        </article>)}</div>
      </Section>

      <Section id="industry-experience" title="Industry Experience">
        <ExperienceEntries items={experiences.filter(item => !academicIds.includes(item.id))} />
      </Section>

      <Section id="projects" title="Projects">
        <div className="academic-entries">{projects.map(project => <DatedEntry key={project.id} date={project.period}>
          <h3>{project.title}</h3>
          {project.result && <p className="academic-result">{project.result}</p>}
          <p>{project.description}</p>
          <div className="academic-links">
            {project.liveUrl && <a href={project.liveUrl} {...external} aria-label={`View project: ${project.title}`}>Live project ↗</a>}
            {project.repositoryUrl && <a href={project.repositoryUrl} {...external} aria-label={`GitHub: ${project.title}`}>GitHub ↗</a>}
            {project.leaderboardUrl && <a href={project.leaderboardUrl} {...external} aria-label={`Official leaderboard: ${project.title}`}>Official leaderboard ↗</a>}
          </div>
          <details className="academic-details"><summary>Project details</summary>
            {project.subtitle && <p>{project.subtitle}</p>}
            {project.affiliation && <p>{project.affiliation}</p>}
            {project.highlights.length > 0 && <ul>{project.highlights.map(highlight => <li key={highlight}>{highlight}</li>)}</ul>}
            <p className="academic-muted">{project.tags.join(' · ')}</p>
          </details>
        </DatedEntry>)}</div>
      </Section>

      <Section id="recognition" title="Awards & Recognition">
        <div className="academic-entries">{recognitions.map(item => <DatedEntry key={item.id} date={item.year}>
          <h3>{item.title}</h3><p>{item.issuer}</p>
          {item.badge && <p className="academic-result">{item.badge}</p>}
          {item.sourceUrl && <a href={item.sourceUrl} {...external}>Official leaderboard ↗</a>}
        </DatedEntry>)}</div>
      </Section>

      <Section id="skills" title="Technical Skills">
        <div className="academic-tech-stack">{techStackPills.map(tech => <span key={tech.name}><img src={`/tech/${tech.icon}`} alt="" width="24" height="24" loading="lazy" />{tech.name}</span>)}</div>
        <div className="academic-skills">{skillCategories.filter(skill => skill.id !== 'human-languages').map(skill => <details key={skill.id} className="academic-details"><summary>{skill.title}</summary><p>{skill.items.join(' · ')}</p></details>)}</div>
      </Section>

      <Section id="languages" title="Languages">
        <div className="academic-entries">
          <DatedEntry date="Indonesian"><p>Native proficiency</p></DatedEntry>
          {languageSkills.map(language => <DatedEntry key={language.id} date={language.year}><h3>{language.title}</h3><p>{language.issuer}{language.badge && ` · ${language.badge}`}</p></DatedEntry>)}
        </div>
      </Section>

      <footer className="academic-footer" id="contact">
        <p>{personalInfo.name} · {personalInfo.location}</p>
        <p><a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a><span aria-hidden="true"> · </span><a href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`}>{personalInfo.phone}</a></p>
        <p><a href={cvUrl} {...external}>View CV ↗</a><span aria-hidden="true"> · </span><a href={portfolioUrl} {...external}>Interactive portfolio ↗</a></p>
      </footer>
    </main>
  </>;
}
