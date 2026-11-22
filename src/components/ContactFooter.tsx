import { useState, FormEvent } from 'react';
import {
  Mail,
  MapPin,
  Phone,
  Copy,
  Check,
  ExternalLink,
  FileText,
  Send,
} from 'lucide-react';
import { IDENTITY } from '../data/portfolioData';

interface ContactFooterProps {
  onOpenCv: () => void;
}

export function ContactFooter({ onOpenCv }: ContactFooterProps) {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [topic, setTopic] = useState('Technology & Digital Innovation');
  const [message, setMessage] = useState('');
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(IDENTITY.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setStatusMessage(`Email: ${IDENTITY.email}`);
    }
  };

  const handleComposeSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      setStatusMessage('Please enter your name and a brief message before sending.');
      return;
    }

    const subject = encodeURIComponent(`[Portfolio] ${topic} — from ${name.trim()}`);
    const body = encodeURIComponent(
      `Hello Jagat,\n\n${message.trim()}\n\nBest regards,\n${name.trim()}${
        senderEmail.trim() ? `\nEmail: ${senderEmail.trim()}` : ''
      }`
    );

    window.location.href = `mailto:${IDENTITY.email}?subject=${subject}&body=${body}`;
    setStatusMessage(
      `Opening your email client to send this message directly to ${IDENTITY.email}.`
    );
  };

  return (
    <footer id="contact" className="bg-[#0B1220] text-white">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Direct Details */}
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold tracking-[0.16em] text-[#C6A56A] uppercase">
              Let&apos;s Connect
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl [text-wrap:balance]">
              Open to Meaningful Conversations &amp; Opportunities.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              Whether exchanging notes on emerging technology, mobile photography, cinema, or
              banking and career collaboration, I welcome thoughtful conversations.
            </p>

            <div className="mt-8 space-y-4 border-t border-white/10 pt-7">
              <div className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-[#101C33] px-4 py-3.5">
                <div className="flex items-center gap-3 min-w-0">
                  <Mail className="h-4 w-4 shrink-0 text-[#60A5FA]" aria-hidden="true" />
                  <div className="min-w-0">
                    <p className="text-[11px] text-slate-400">Email</p>
                    <a
                      href={`mailto:${IDENTITY.email}`}
                      className="block truncate text-sm font-medium text-white hover:text-[#60A5FA] transition-colors"
                    >
                      {IDENTITY.email}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 rounded-md border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200 transition-colors hover:bg-white/10 whitespace-nowrap shrink-0 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-[#60A5FA]" aria-hidden="true" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                      Copy
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#101C33] px-4 py-3.5">
                <Phone className="h-4 w-4 shrink-0 text-[#C6A56A]" aria-hidden="true" />
                <div>
                  <p className="text-[11px] text-slate-400">Phone</p>
                  <p className="font-mono text-sm text-white tabular-nums">
                    {IDENTITY.phones.join(' · ')}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#101C33] px-4 py-3.5">
                <MapPin className="h-4 w-4 shrink-0 text-[#C6A56A]" aria-hidden="true" />
                <div>
                  <p className="text-[11px] text-slate-400">Location</p>
                  <p className="text-sm text-white">{IDENTITY.location}</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-7">
              <p className="text-xs font-medium text-slate-400">Professional Profiles</p>
              <div className="mt-3 flex flex-wrap gap-3">
                {IDENTITY.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-3.5 py-2 text-xs font-medium text-slate-200 transition-colors hover:border-[#2563EB] hover:text-white whitespace-nowrap shrink-0"
                  >
                    {social.label}
                    <ExternalLink className="h-3 w-3 text-slate-400" aria-hidden="true" />
                  </a>
                ))}
                <button
                  type="button"
                  onClick={onOpenCv}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-[#C6A56A]/50 bg-[#C6A56A]/10 px-3.5 py-2 text-xs font-medium text-[#C6A56A] transition-colors hover:bg-[#C6A56A]/20 whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <FileText className="h-3.5 w-3.5" aria-hidden="true" />
                  View Full CV
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Message Composer */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleComposeSubmit}
              className="rounded-2xl border border-white/12 bg-[#101C33] p-6 sm:p-8"
            >
              <h3 className="font-display text-xl font-bold text-white">Send a Message</h3>
              <p className="mt-1.5 text-sm text-slate-300">
                Draft your note below to prepare an email directly to{' '}
                <span className="text-white font-medium">{IDENTITY.email}</span>.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-medium text-slate-300">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full name"
                    className="mt-1.5 w-full rounded-lg border border-white/15 bg-[#0B1220] px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-[#2563EB] focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-medium text-slate-300">
                    Your Email (Optional)
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="mt-1.5 w-full rounded-lg border border-white/15 bg-[#0B1220] px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-[#2563EB] focus:outline-none"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="contact-topic" className="block text-xs font-medium text-slate-300">
                  Conversation Topic
                </label>
                <select
                  id="contact-topic"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="mt-1.5 w-full rounded-lg border border-white/15 bg-[#0B1220] px-3.5 py-2.5 text-sm text-white focus:border-[#2563EB] focus:outline-none"
                >
                  <option value="Technology & Digital Innovation">
                    Technology &amp; Digital Innovation
                  </option>
                  <option value="Mobile Photography & Visuals">
                    Mobile Photography &amp; Visuals
                  </option>
                  <option value="Cinema & Film Discussion">
                    Cinema &amp; Film Discussion
                  </option>
                  <option value="Banking & Career Opportunity">
                    Banking &amp; Career Opportunity
                  </option>
                  <option value="General Inquiry">General Inquiry</option>
                </select>
              </div>

              <div className="mt-4">
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-medium text-slate-300"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your message..."
                  className="mt-1.5 w-full rounded-lg border border-white/15 bg-[#0B1220] px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-[#2563EB] focus:outline-none"
                />
              </div>

              {statusMessage && (
                <p
                  role="status"
                  className="mt-4 rounded-lg border border-[#2563EB]/40 bg-[#2563EB]/10 px-4 py-2.5 text-xs text-slate-200"
                >
                  {statusMessage}
                </p>
              )}

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs text-slate-400">
                  {IDENTITY.altHeadline}
                </span>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#2563EB] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1D4ED8] whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <Send className="h-4 w-4" aria-hidden="true" />
                  Compose Email
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Quiet Copyright Footer */}
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-slate-400 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Jagat Karki · Gauradaha, Jhapa, Nepal</p>
          <div className="flex flex-wrap items-center gap-6">
            <a href="#technology" className="hover:text-white transition-colors">
              Tech
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              Projects
            </a>
            <a href="#photography" className="hover:text-white transition-colors">
              Photography
            </a>
            <a href="#movies" className="hover:text-white transition-colors">
              Movies
            </a>
            <a href="#career" className="hover:text-white transition-colors">
              Career
            </a>
            <button
              type="button"
              onClick={onOpenCv}
              className="hover:text-white transition-colors cursor-pointer"
            >
              View CV
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
