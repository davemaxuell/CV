import { personalInfo } from "../data/portfolioData";
export const Footer = () => (
  <footer className="site-footer">
    <p>
      © {personalInfo.name} {new Date().getFullYear()}. All rights reserved.
    </p>
    <a href={personalInfo.github} target="_blank" rel="noreferrer">
      GitHub ↗
    </a>
  </footer>
);
