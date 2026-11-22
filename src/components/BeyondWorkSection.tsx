import { Camera, Cpu, Film, Music, Trophy } from 'lucide-react';
import { PERSONAL_INTERESTS } from '../data/portfolioData';

function renderInterestIcon(icon: (typeof PERSONAL_INTERESTS)[number]['icon'], featured: boolean) {
  const cls = featured
    ? 'h-6 w-6 text-[#60A5FA]'
    : 'h-5 w-5 text-[#2563EB] transition-colors duration-150 group-hover:text-white';
  switch (icon) {
    case 'cpu':
      return <Cpu className={cls} aria-hidden="true" />;
    case 'trophy':
      return <Trophy className={cls} aria-hidden="true" />;
    case 'camera':
      return <Camera className={cls} aria-hidden="true" />;
    case 'film':
      return <Film className={cls} aria-hidden="true" />;
    case 'music':
      return <Music className={cls} aria-hidden="true" />;
  }
}

export function BeyondWorkSection() {
  return (
    <section id="interests" className="bg-white py-16 lg:py-20 border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-[#2563EB] uppercase">
              Personal Interests
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-[#102440] sm:text-3xl [text-wrap:balance]">
              Beyond Work – A Few Things I Love.
            </h2>
          </div>
          <p className="max-w-md text-sm text-slate-600">
            Curiosity extends beyond the office—into technology trends, football strategy,
            mobile photography, cinema, and music.
          </p>
        </div>

        {/* Compact Balanced Bento Grid with Technology Enthusiast prominent */}
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {PERSONAL_INTERESTS.map((interest) => {
            const isPhotography = interest.id === 'mobile-photography';

            return (
              <article
                key={interest.id}
                className={
                  interest.featured
                    ? 'group relative md:col-span-2 lg:col-span-2 flex flex-col justify-between rounded-2xl border border-[#102440] bg-[#102440] p-6 text-white transition-transform duration-150 hover:-translate-y-0.5'
                    : 'group relative col-span-1 flex flex-col justify-between rounded-2xl border border-slate-200 bg-[#F5F7FA] p-5 text-[#102440] transition-all duration-150 hover:-translate-y-0.5 hover:border-[#2563EB]/60 hover:bg-white'
                }
              >
                {/* Minimalist viewfinder corner framing for Mobile Photography */}
                {isPhotography && (
                  <div
                    className="pointer-events-none absolute inset-3 opacity-35 transition-opacity duration-150 group-hover:opacity-80"
                    aria-hidden="true"
                  >
                    <span className="absolute top-0 left-0 h-2.5 w-2.5 border-t border-l border-[#2563EB]" />
                    <span className="absolute top-0 right-0 h-2.5 w-2.5 border-t border-r border-[#2563EB]" />
                    <span className="absolute bottom-0 left-0 h-2.5 w-2.5 border-b border-l border-[#2563EB]" />
                    <span className="absolute bottom-0 right-0 h-2.5 w-2.5 border-b border-r border-[#2563EB]" />
                  </div>
                )}

                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-3">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-lg transition-colors duration-150 ${
                        interest.featured
                          ? 'border border-white/15 bg-[#0B1220]'
                          : 'border border-slate-200 bg-white group-hover:border-[#2563EB] group-hover:bg-[#2563EB]'
                      }`}
                    >
                      {renderInterestIcon(interest.icon, interest.featured)}
                    </div>
                    <span
                      className={`text-[11px] font-medium ${
                        interest.featured ? 'text-[#C6A56A]' : 'text-slate-500'
                      }`}
                    >
                      {interest.subtitle}
                    </span>
                  </div>

                  <h3
                    className={`mt-4 font-display font-bold ${
                      interest.featured
                        ? 'text-xl text-white'
                        : 'text-base text-[#102440] group-hover:text-[#2563EB] transition-colors duration-150'
                    }`}
                  >
                    {interest.title}
                  </h3>

                  <p
                    className={`mt-2 text-sm leading-relaxed ${
                      interest.featured ? 'text-slate-200' : 'text-slate-600'
                    }`}
                  >
                    {interest.description}
                  </p>
                </div>

                <div
                  className={`relative z-10 mt-4 border-t pt-3 font-mono text-[11px] ${
                    interest.featured
                      ? 'border-white/10 text-slate-300'
                      : 'border-slate-200/80 text-slate-500'
                  }`}
                >
                  {interest.focusLine}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
