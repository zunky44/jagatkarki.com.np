import { useState } from 'react';
import { Film, Headphones, Music, Tv, Check, ChevronRight } from 'lucide-react';
import { CINEMA_PILLARS } from '../data/portfolioData';

export function MovieEnthusiastSection() {
  const [selectedId, setSelectedId] = useState<string>(CINEMA_PILLARS[0].id);

  const activePillar =
    CINEMA_PILLARS.find((p) => p.id === selectedId) ?? CINEMA_PILLARS[0];

  return (
    <section
      id="movies"
      className="relative overflow-hidden bg-[#0B1220] py-20 lg:py-24 text-white border-b border-white/10"
    >
      <div className="pointer-events-none absolute inset-0 tech-grid-bg opacity-35" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.16em] text-[#C6A56A] uppercase">
              Cinema &amp; Music Enthusiast
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl [text-wrap:balance]">
              Loves Watching Great Movies &amp; Listening to Music
            </h2>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-slate-300">
            Not a filmmaker—just someone who genuinely loves kicking back to watch a great
            movie and listening to music every day.
          </p>
        </div>

        {/* 4 Interactive Viewer & Listener Cards */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CINEMA_PILLARS.map((pillar, index) => {
            const isSelected = pillar.id === activePillar.id;
            const isMusic = pillar.type === 'music';
            return (
              <button
                key={pillar.id}
                type="button"
                onClick={() => setSelectedId(pillar.id)}
                aria-pressed={isSelected}
                className={`group flex flex-col justify-between rounded-xl border p-5 text-left transition-all duration-150 cursor-pointer hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] ${
                  isSelected
                    ? 'border-[#C6A56A] bg-[#13294B]'
                    : 'border-white/10 bg-[#101C33] hover:border-white/25 hover:bg-[#132340]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-[#0B1220]">
                      {isMusic ? (
                        <Headphones
                          className={`h-5 w-5 transition-colors ${
                            isSelected ? 'text-[#C6A56A]' : 'text-[#60A5FA]'
                          }`}
                          aria-hidden="true"
                        />
                      ) : (
                        <Film
                          className={`h-5 w-5 transition-colors ${
                            isSelected ? 'text-[#C6A56A]' : 'text-[#60A5FA]'
                          }`}
                          aria-hidden="true"
                        />
                      )}
                    </div>
                    <span className="font-mono text-xs text-slate-400 tabular-nums">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-base font-bold text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-[#C6A56A]">
                    {pillar.subtitle}
                  </p>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-4 flex items-center gap-1 text-xs font-medium text-[#60A5FA] group-hover:text-white transition-colors">
                  <span>{isSelected ? 'Currently viewing' : 'See what I enjoy'}</span>
                  <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Viewer & Listener Mood Panel */}
        <div className="mt-6 rounded-2xl border border-white/12 bg-[#102440]/90 p-6 sm:p-8">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#C6A56A]">
                {activePillar.type === 'music' ? (
                  <Music className="h-4 w-4" aria-hidden="true" />
                ) : (
                  <Tv className="h-4 w-4" aria-hidden="true" />
                )}
                <span>Why I Love It</span>
                <span aria-hidden="true">·</span>
                <span className="font-mono text-slate-300">{activePillar.moodLabel}</span>
              </div>

              <h3 className="mt-2.5 font-display text-2xl font-bold text-white">
                {activePillar.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-200 max-w-2xl">
                {activePillar.description}
              </p>

              <ul className="mt-5 space-y-2.5">
                {activePillar.whatDrawsMe.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-200">
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#C6A56A]"
                      aria-hidden="true"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Viewer / Listener Mood Card */}
            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-xl border border-white/15 bg-[#0B1220]">
                <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5 text-xs text-slate-400">
                  <span>{activePillar.moodLabel}</span>
                  <span className="text-[#C6A56A] font-medium">{activePillar.vibeTag}</span>
                </div>

                <div className="flex aspect-[16/9] flex-col items-center justify-center bg-gradient-to-br from-[#0B1220] via-[#13294B] to-[#0B1220] px-6 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-[#102440]">
                    {activePillar.type === 'music' ? (
                      <Headphones className="h-6 w-6 text-[#C6A56A]" aria-hidden="true" />
                    ) : (
                      <Film className="h-6 w-6 text-[#60A5FA]" aria-hidden="true" />
                    )}
                  </div>
                  <p className="mt-3 font-display text-base font-semibold text-white">
                    {activePillar.subtitle}
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    {activePillar.type === 'music'
                      ? 'Everyday music listening to focus and recharge'
                      : 'Relaxing with engaging cinema for pure enjoyment'}
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-white/10 px-4 py-2.5 text-[11px] text-slate-400">
                  <span>Cinema &amp; Music</span>
                  <span>Watch &amp; Listen Only</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
