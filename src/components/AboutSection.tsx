import { useState } from 'react';
import { Camera, Cpu, Film, Briefcase, User } from 'lucide-react';
import { ABOUT_PARAGRAPHS, ASSETS, IDENTITY } from '../data/portfolioData';

export function AboutSection() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="bg-white py-20 lg:py-24 border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Portrait & Primary Pillars Summary */}
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-[#F5F7FA]">
              <div className="relative flex items-end justify-center bg-gradient-to-b from-[#E8EEF6] to-[#D9E3F0] pt-8 px-6">
                {!imgError ? (
                  <img
                    src={ASSETS.portrait}
                    alt="Portrait of Jagat Karki"
                    referrerPolicy="no-referrer"
                    onError={() => setImgError(true)}
                    className="h-72 w-auto object-contain object-bottom"
                  />
                ) : (
                  <div className="flex h-64 w-full flex-col items-center justify-center gap-2 text-[#102440]">
                    <User className="h-12 w-12" />
                    <span className="font-semibold">Jagat Karki</span>
                  </div>
                )}
              </div>

              <div className="divide-y divide-slate-200 bg-white px-6 py-2">
                <div className="flex items-start gap-3 py-3.5">
                  <Cpu className="mt-0.5 h-4 w-4 shrink-0 text-[#2563EB]" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-medium text-slate-500">Primary Focus</p>
                    <p className="text-sm font-semibold text-[#102440]">
                      Tech Enthusiast · AI, FinTech &amp; Digital Systems
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 py-3.5">
                  <Camera className="mt-0.5 h-4 w-4 shrink-0 text-[#2563EB]" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-medium text-slate-500">Visual Lens</p>
                    <p className="text-sm font-semibold text-[#102440]">
                      Mobile Photography · Light &amp; Street Framing
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 py-3.5">
                  <Film className="mt-0.5 h-4 w-4 shrink-0 text-[#2563EB]" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-medium text-slate-500">Downtime</p>
                    <p className="text-sm font-semibold text-[#102440]">
                      Cinema &amp; Music · Watching Movies &amp; Playlists
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 py-3.5">
                  <Briefcase className="mt-0.5 h-4 w-4 shrink-0 text-[#C6A56A]" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-medium text-slate-500">Professional Foundation</p>
                    <p className="text-sm font-semibold text-[#102440]">
                      Banking Operations · MBA (Marketing) · BSc IT
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Personal Narrative */}
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold tracking-[0.16em] text-[#2563EB] uppercase">
              About Me — Perspective &amp; Curiosity
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[#102440] sm:text-4xl [text-wrap:balance]">
              {IDENTITY.tagline}
            </h2>

            <div className="mt-7 space-y-5 text-[15px] leading-[1.75] text-slate-700 max-w-[65ch]">
              {ABOUT_PARAGRAPHS.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-9 grid grid-cols-1 gap-4 border-t border-slate-200 pt-7 sm:grid-cols-3">
              <div>
                <p className="font-display text-base font-semibold text-[#102440]">
                  Tech Curiosity
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  Exploring AI, emerging tools, and practical digital systems every day.
                </p>
              </div>
              <div>
                <p className="font-display text-base font-semibold text-[#102440]">
                  Visual Eye
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  Finding quiet framing and natural light through mobile photography.
                </p>
              </div>
              <div>
                <p className="font-display text-base font-semibold text-[#102440]">
                  Cinema &amp; Music
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  Unwinding by watching compelling movies and listening to favorite playlists.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
