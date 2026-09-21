import { useState, type FormEvent } from "react";
import { SectionBadge } from "./SectionBadge";
import { personalInfo } from "../data/portfolioData";
export const ContactSection = () => {
  const [opened, setOpened] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = `CV inquiry from ${data.get("name")}`;
    const body = `${data.get("message")}\n\n${data.get("name")}\n${data.get("email")}`;
    window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  };
  return (
    <section id="contact" className="cv-section">
      <SectionBadge label="Contact me" />
      <form className="contact-form" onSubmit={submit}>
        <label>
          Name
          <input name="name" autoComplete="name" required />
        </label>
        <label>
          Email
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label>
          Message
          <textarea name="message" rows={5} required />
        </label>
        <button className="primary-button" type="submit">
          Open email draft
        </button>
        <p className="form-note" role="status">
          {opened
            ? "Your email app can send the draft. If it did not open, email "
            : "Send your message through your email app, or write to "}
          <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>.
        </p>
      </form>
    </section>
  );
};
