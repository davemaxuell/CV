import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { MapPin, Mail, Phone, Globe, Menu, X } from "lucide-react";
import { personalInfo } from "../data/portfolioData";
import portrait from "../assets/images/dave_portrait_1789965082593.jpg";

export const Sidebar = ({
  onOpenCV,
  onScrollToContact,
}: {
  onOpenCV: () => void;
  onScrollToContact: () => void;
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const reduced = useReducedMotion();
  const contact = (
    <>
      <div className="profile-links">
        <a href={personalInfo.github} target="_blank" rel="noreferrer">
          <Globe />
          github.com/davemaxuell
        </a>
        <a href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, "")}`}>
          <Phone />
          {personalInfo.phone}
        </a>
        <a href={`mailto:${personalInfo.email}`}>
          <Mail />
          {personalInfo.email}
        </a>
      </div>
      <div className="profile-actions">
        <button
          className="secondary-button"
          onClick={() => {
            setMenuOpen(false);
            onOpenCV();
          }}
        >
          Download CV
        </button>
        <button
          className="primary-button"
          onClick={() => {
            setMenuOpen(false);
            onScrollToContact();
          }}
        >
          Contact Me
        </button>
      </div>
    </>
  );
  return (
    <aside className="profile-column">
      <div className="profile-sticky">
        <div className="profile-card">
          <img
            className="profile-photo"
            src={portrait}
            alt="Dave Maxuell"
            width="360"
            height="387"
          />
          <div className="profile-copy">
            <h1>
              Hello I’m
              <br />
              {personalInfo.name}
            </h1>
            <p className="profile-role">{personalInfo.title}</p>
            <p className="profile-tagline">{personalInfo.tagline}</p>
            <p className="availability">
              <span />
              {personalInfo.status}
            </p>
            <p className="profile-location">
              <MapPin />
              {personalInfo.location}
            </p>
          </div>
          <button
            className="profile-menu"
            aria-label={menuOpen ? "Close profile menu" : "Open profile menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-profile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
        <div className="profile-contact">{contact}</div>
        <AnimatePresence initial={false}>
          {menuOpen && (
            <motion.div
              id="mobile-profile-menu"
              className="mobile-profile-contact"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: reduced ? 0 : 0.4 }}
            >
              <div>{contact}</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </aside>
  );
};
