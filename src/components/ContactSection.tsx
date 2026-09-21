import React, { useState } from 'react';
import { SectionBadge } from './SectionBadge';
import { Send, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate swift form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    }, 600);
  };

  return (
    <section id="contact" className="mb-12">
      <SectionBadge label="CONTACT ME" />

      <div className="bg-white border border-neutral-200/90 rounded-3xl p-6 sm:p-7 shadow-2xs">
        {submitted ? (
          <div className="py-8 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-neutral-900">Message Received!</h3>
            <p className="text-xs sm:text-sm text-neutral-600 max-w-sm mx-auto">
              Thank you for reaching out. I will get back to you promptly at your email.
            </p>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="text-xs font-semibold text-neutral-800 underline underline-offset-4 cursor-pointer mt-2 inline-block"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-semibold text-neutral-700 mb-1.5"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your full name"
                className="w-full px-4 py-2.5 rounded-xl bg-neutral-50/70 border border-neutral-200 text-neutral-900 text-xs sm:text-sm placeholder:text-neutral-400 focus:bg-white focus:outline-hidden focus:border-neutral-800 transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xs font-semibold text-neutral-700 mb-1.5"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your.email@example.com"
                className="w-full px-4 py-2.5 rounded-xl bg-neutral-50/70 border border-neutral-200 text-neutral-900 text-xs sm:text-sm placeholder:text-neutral-400 focus:bg-white focus:outline-hidden focus:border-neutral-800 transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-xs font-semibold text-neutral-700 mb-1.5"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Discuss research opportunities, conference work, or project inquiries..."
                className="w-full px-4 py-2.5 rounded-xl bg-neutral-50/70 border border-neutral-200 text-neutral-900 text-xs sm:text-sm placeholder:text-neutral-400 focus:bg-white focus:outline-hidden focus:border-neutral-800 transition-colors resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              id="contact-submit-btn"
              disabled={isSubmitting}
              className="w-full py-3 px-5 rounded-xl bg-neutral-900 hover:bg-neutral-800 active:scale-[0.99] text-white text-xs sm:text-sm font-semibold transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {isSubmitting ? (
                <span>Sending...</span>
              ) : (
                <>
                  <Send className="w-4 h-4 text-white/90" />
                  <span>Submit</span>
                </>
              )}
            </button>

            <p className="text-[11px] text-center text-neutral-400 pt-1">
              Direct inquiries can also be sent to{' '}
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-neutral-700 hover:underline font-medium"
              >
                {personalInfo.email}
              </a>
            </p>
          </form>
        )}
      </div>
    </section>
  );
};
