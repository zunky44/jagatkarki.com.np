import { useState, useEffect } from 'react';
import {
  ArrowRight,
  BrainCircuit,
  Camera,
  ChevronLeft,
  ChevronRight,
  Cpu,
  FileText,
  Film,
  Landmark,
  Layers,
  Lightbulb,
  Server,
  TrendingUp,
  User,
  Workflow,
} from 'lucide-react';
import {
  ASSETS,
  HERO_HIGHLIGHTS,
  IDENTITY,
  TECH_INTERESTS,
} from '../data/portfolioData';

interface HeroSectionProps {
  onOpenCv: () => void;
}

interface FrameFocusItem {
  id: string;
  kicker: string;
  title: string;
  href: string;
  icon:
    | 'cpu'
    | 'camera'
    | 'film'
    | 'brain'
    | 'workflow'
    | 'server'
    | 'layers'
    | 'lightbulb'
    | 'landmark'
    | 'trending';
}

const FRAME_ITEMS: FrameFocusItem[] = [
  {
    id: 'pillar-tech',
    kicker: 'Primary Focus · Tech Enthusiast',
    title: 'Emerging Tech, AI & Digital Innovation',
    href: '#technology',
    icon: 'cpu',
  },
  {
    id: 'pillar-photo',
    kicker: 'Primary Focus · Mobile Photography',
    title: 'Natural Light, Framing & Street Moments',
    href: '#photography',
    icon: 'camera',
  },
  {
    id: 'pillar-movies',
    kicker: 'Primary Focus · Cinema & Music',
    title: 'Watching Great Movies & Listening to Music',
    href: '#movies',
    icon: 'film',
  },
  ...TECH_INTERESTS.slice(0, 5).map((item) => ({
    id: item.id,
    kicker: `Tech Curiosity · ${item.categoryLabel}`,
    title: item.title,
    href: '#technology',
    icon: (item.iconKey === 'sparkles' ? 'cpu' : item.iconKey) as FrameFocusItem['icon'],
  })),
];

function renderFrameIcon(icon: FrameFocusItem['icon']) {
  const cls = 'relative z-10 h-4 w-4 text-[#60A5FA]';
  switch (icon) {
    case 'camera':
      return <Camera className="relative z-10 h-4 w-4 text-[#C6A56A]" aria-hidden="true" />;
    case 'film':
      return <Film className="relative z-10 h-4 w-4 text-[#C6A56A]" aria-hidden="true" />;
    case 'brain':
      return <BrainCircuit className={cls} aria-hidden="true" />;
    case 'workflow':
      return <Workflow className={cls} aria-hidden="true" />;
    case 'server':
      return <Server className={cls} aria-hidden="true" />;
    case 'layers':
      return <Layers className={cls} aria-hidden="true" />;
    case 'lightbulb':
      return <Lightbulb className={cls} aria-hidden="true" />;
    case 'landmark':
      return <Landmark className={cls} aria-hidden="true" />;
    case 'trending':
      return <TrendingUp className={cls} aria-hidden="true" />;
    case 'cpu':
    default:
      return <Cpu className={cls} aria-hidden="true" />;
  }
}

export function HeroSection({ onOpenCv }: HeroSectionProps) {
  const [imgError, setImgError] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const timer = window.setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % FRAME_ITEMS.length);
    }, 3200);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  const activeItem = FRAME_ITEMS[activeIdx];

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[#0B1220] text-white border-b border-white/10"
    >
      {/* Subtle architectural coordinate grid */}
      <div className="pointer-events-none absolute inset-0 tech-grid-bg opacity-60" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-40 right-0 h-[520px] w-[520px] rounded-full bg-[#2563EB]/15 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-6 pt-14 pb-16 lg:pt-20 lg:pb-20">
        {/* Two-Column Split */}
        <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Primary Focus Narrative & Actions */}
          <div className="flex flex-col justify-center lg:col-span-7">
            <p className="text-xs font-semibold tracking-[0.18em] text-[#C6A56A] uppercase">
              HELLO, I&apos;M JAGAT KARKI · {IDENTITY.location}
            </p>

            <h1
              className="mt-4 font-display font-bold tracking-tight text-white leading-[1.12] [text-wrap:balance]"
              style={{ fontSize: 'clamp(2.25rem, 4.1vw, 3.5rem)' }}
            >
              Tech Enthusiast. Mobile Photographer. Movie &amp; Music Lover.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 tracking-[0.01em]">
              Driven by curiosity in emerging technology, capturing everyday light through mobile
              photography, and unwinding with great cinema and music—backed by a steady career in
              banking operations and degrees in Information Technology and Marketing.
            </p>

            <p className="mt-4 text-sm font-medium text-slate-400">
              {IDENTITY.title}
              <span className="mx-2 text-[#C6A56A]" aria-hidden="true">
                ·
              </span>
              {IDENTITY.secondaryTitle}
            </p>

            {/* Three Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href="#technology"
                className="inline-flex items-center gap-2 rounded-lg bg-[#2563EB] px-5 py-3 text-sm font-semibold text-white transition-all duration-150 hover:bg-[#1D4ED8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white whitespace-nowrap shrink-0"
              >
                Explore Tech &amp; Passions
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <a
                href="#career"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-all duration-150 hover:border-white/40 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] whitespace-nowrap shrink-0"
              >
                Banking &amp; Academics
              </a>

              <button
                type="button"
                onClick={onOpenCv}
                className="inline-flex items-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold text-[#C6A56A] transition-colors duration-150 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C6A56A] whitespace-nowrap shrink-0 cursor-pointer"
              >
                <FileText className="h-4 w-4" aria-hidden="true" />
                View My CV
              </button>
            </div>
          </div>

          {/* Right Column: Executive Portrait Presentation with Spinning Circles */}
          <div className="lg:col-span-5 flex">
            <div
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="relative flex w-full flex-col justify-end overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br from-[#102440] via-[#132C52] to-[#1B3F7A] min-h-[440px] lg:min-h-[500px]"
            >
              {/* Spinning geometric SVG orbital circles */}
              <svg
                className="pointer-events-none absolute inset-0 h-full w-full opacity-45"
                viewBox="0 0 400 480"
                fill="none"
                aria-hidden="true"
              >
                <line x1="28" y1="70" x2="372" y2="70" stroke="#60A5FA" strokeWidth="0.5" opacity="0.35" />
                <line x1="340" y1="24" x2="340" y2="456" stroke="#C6A56A" strokeWidth="0.5" opacity="0.25" />

                <g className="animate-orbit-cw" style={{ transformOrigin: '200px 205px' }}>
                  <circle
                    cx="200"
                    cy="205"
                    r="146"
                    stroke="#60A5FA"
                    strokeWidth="1"
                    strokeDasharray="6 8"
                  />
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
                    const rad = (deg * Math.PI) / 180;
                    return (
                      <circle
                        key={deg}
                        cx={200 + 146 * Math.cos(rad)}
                        cy={205 + 146 * Math.sin(rad)}
                        r={deg % 90 === 0 ? 3 : 2}
                        fill={deg % 90 === 0 ? '#60A5FA' : '#93C5FD'}
                      />
                    );
                  })}
                </g>

                <g className="animate-orbit-ccw" style={{ transformOrigin: '200px 205px' }}>
                  <circle
                    cx="200"
                    cy="205"
                    r="192"
                    stroke="#C6A56A"
                    strokeWidth="0.9"
                    strokeDasharray="18 10 4 10"
                    opacity="0.85"
                  />
                  <circle cx="392" cy="205" r="3" fill="#C6A56A" />
                  <circle cx="8" cy="205" r="3" fill="#C6A56A" />
                  <circle cx="200" cy="13" r="2.5" fill="#C6A56A" />
                  <circle cx="200" cy="397" r="2.5" fill="#C6A56A" />
                </g>
              </svg>

              {/* Soft studio spotlight behind portrait */}
              <div
                className="pointer-events-none absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2563EB]/30 blur-3xl"
                aria-hidden="true"
              />

              {/* Portrait image preserving actual face & appearance */}
              <div className="relative z-10 flex flex-1 items-end justify-center pt-8 px-4">
                {!imgError ? (
                  <img
                    src={ASSETS.portrait}
                    alt="Jagat Karki — Tech Enthusiast, Mobile Photographer, and Movie Enthusiast"
                    referrerPolicy="no-referrer"
                    onError={() => setImgError(true)}
                    className="h-[395px] sm:h-[435px] lg:h-[470px] w-auto max-w-full object-contain object-bottom drop-shadow-[0_20px_35px_rgba(0,0,0,0.45)]"
                  />
                ) : (
                  <div className="flex h-[360px] w-full flex-col items-center justify-center gap-3 text-slate-300">
                    <User className="h-16 w-16 text-[#C6A56A]" />
                    <span className="font-display text-lg font-semibold text-white">
                      Jagat Karki
                    </span>
                  </div>
                )}
              </div>

              {/* Bottom contrast scrim inside frame */}
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-36 bg-gradient-to-t from-[#0B1220]/95 via-[#0B1220]/55 to-transparent"
                aria-hidden="true"
              />

              {/* Floating cycling showcase inside the portrait frame */}
              <div className="absolute inset-x-4 bottom-4 z-20 rounded-xl border border-white/15 bg-[#0B1220]/88 p-3.5 backdrop-blur-md shadow-lg">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#102440]">
                      <svg
                        className="pointer-events-none absolute inset-0 h-full w-full animate-orbit-cw"
                        viewBox="0 0 40 40"
                        fill="none"
                        aria-hidden="true"
                      >
                        <circle
                          cx="20"
                          cy="20"
                          r="17"
                          stroke="#60A5FA"
                          strokeWidth="1"
                          strokeDasharray="4 4"
                          opacity="0.7"
                        />
                      </svg>
                      {renderFrameIcon(activeItem.icon)}
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-2 text-[11px] font-medium text-[#C6A56A]">
                        <span className="truncate">{activeItem.kicker}</span>
                        <span className="font-mono text-slate-400 tabular-nums shrink-0">
                          {String(activeIdx + 1).padStart(2, '0')}/
                          {String(FRAME_ITEMS.length).padStart(2, '0')}
                        </span>
                      </div>
                      <a
                        href={activeItem.href}
                        className="mt-0.5 block truncate font-display text-sm font-semibold text-white transition-colors hover:text-[#60A5FA]"
                      >
                        {activeItem.title}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 shrink-0">
                    <button
                      type="button"
                      onClick={() =>
                        setActiveIdx((prev) => (prev - 1 + FRAME_ITEMS.length) % FRAME_ITEMS.length)
                      }
                      aria-label="Previous focus item"
                      className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-white/15 bg-white/5 text-slate-300 transition-colors hover:border-[#2563EB] hover:bg-[#2563EB] hover:text-white cursor-pointer"
                    >
                      <ChevronLeft className="h-3.5 w-3.5" aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveIdx((prev) => (prev + 1) % FRAME_ITEMS.length)}
                      aria-label="Next focus item"
                      className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-white/15 bg-white/5 text-slate-300 transition-colors hover:border-[#2563EB] hover:bg-[#2563EB] hover:text-white cursor-pointer"
                    >
                      <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </button>
                  </div>
                </div>

                <div className="mt-3 grid grid-cols-8 gap-1.5" role="group" aria-label="Select featured focus">
                  {FRAME_ITEMS.map((item, idx) => {
                    const active = idx === activeIdx;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setActiveIdx(idx)}
                        title={item.title}
                        aria-label={`View ${item.title}`}
                        aria-pressed={active}
                        className={`h-1.5 rounded-full transition-colors duration-150 cursor-pointer ${
                          active ? 'bg-[#2563EB]' : 'bg-white/20 hover:bg-white/40'
                        }`}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column Identity Strip below the Split */}
        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/12 bg-white/10 lg:grid-cols-4">
          {HERO_HIGHLIGHTS.map((item) => (
            <div key={item.value} className="bg-[#0F1A2E] px-5 py-4">
              <div className="font-display text-lg font-bold text-white">{item.value}</div>
              <div className="mt-1 text-xs font-medium text-slate-200">{item.label}</div>
              <div className="mt-0.5 text-xs text-slate-400">{item.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
