import { useEffect, useMemo, useState } from 'react';
import {
  Camera,
  ChevronLeft,
  ChevronRight,
  Compass,
  Expand,
  Grid,
  Layers,
  Sun,
  X,
} from 'lucide-react';
import {
  MOBILE_PHOTOS,
  PHOTO_CATEGORIES,
  type MobilePhotoItem,
  type PhotoCategory,
} from '../data/portfolioData';

export function MobilePhotographySection() {
  const [activeCategory, setActiveCategory] = useState<PhotoCategory>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [showGrid, setShowGrid] = useState<boolean>(false);

  const filteredPhotos = useMemo(() => {
    if (activeCategory === 'all') return MOBILE_PHOTOS;
    return MOBILE_PHOTOS.filter((photo) => photo.category === activeCategory);
  }, [activeCategory]);

  const activePhoto: MobilePhotoItem | null =
    lightboxIndex !== null ? filteredPhotos[lightboxIndex] ?? null : null;

  const openPhoto = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showPrev = () => {
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      return (prev - 1 + filteredPhotos.length) % filteredPhotos.length;
    });
  };

  const showNext = () => {
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      return (prev + 1) % filteredPhotos.length;
    });
  };

  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeLightbox();
      } else if (event.key === 'ArrowLeft') {
        setLightboxIndex((prev) => {
          if (prev === null) return null;
          return (prev - 1 + filteredPhotos.length) % filteredPhotos.length;
        });
      } else if (event.key === 'ArrowRight') {
        setLightboxIndex((prev) => {
          if (prev === null) return null;
          return (prev + 1) % filteredPhotos.length;
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredPhotos.length]);

  const getCategoryCount = (catId: PhotoCategory) => {
    if (catId === 'all') return MOBILE_PHOTOS.length;
    return MOBILE_PHOTOS.filter((p) => p.category === catId).length;
  };

  return (
    <section id="photography" className="bg-white py-20 lg:py-24 border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.16em] text-[#2563EB] uppercase">
              Mobile Photography Enthusiast
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[#102440] sm:text-4xl [text-wrap:balance]">
              Framing Light, Peaks &amp; Everyday Moments
            </h2>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-slate-600">
            Personal snapshots taken on my smartphone—capturing misty mountain ridges, quiet
            garden blooms, and golden-hour skies just as they appeared in the moment.
          </p>
        </div>

        {/* Category Filter Tabs & Gallery Toolbar */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-5">
          <div
            role="tablist"
            aria-label="Filter mobile photography gallery"
            className="flex flex-wrap items-center gap-2"
          >
            {PHOTO_CATEGORIES.map((category) => {
              const isActive = activeCategory === category.id;
              const count = getCategoryCount(category.id);
              return (
                <button
                  key={category.id}
                  role="tab"
                  type="button"
                  aria-selected={isActive}
                  onClick={() => {
                    setActiveCategory(category.id);
                    setLightboxIndex(null);
                  }}
                  className={`inline-flex items-center gap-2 rounded-lg border px-3.5 py-2 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'border-[#102440] bg-[#102440] text-white'
                      : 'border-slate-200 bg-[#F5F7FA] text-slate-700 hover:border-[#2563EB]/50 hover:text-[#102440]'
                  }`}
                >
                  <span>{category.label}</span>
                  <span
                    className={`font-mono text-[11px] tabular-nums ${
                      isActive ? 'text-[#C6A56A]' : 'text-slate-500'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          <p className="flex items-center gap-2 text-xs text-slate-500">
            <Camera className="h-3.5 w-3.5 text-[#2563EB]" aria-hidden="true" />
            <span>Click any frame to open high-res viewer &amp; framing notes</span>
          </p>
        </div>

        {/* Responsive 3:4 Portrait Gallery Grid */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {filteredPhotos.map((photo, index) => (
            <button
              key={photo.id}
              type="button"
              onClick={() => openPhoto(index)}
              className="group relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-slate-200 bg-[#0B1220] text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-[#2563EB]/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] cursor-pointer"
            >
              <img
                src={photo.src}
                alt={`${photo.title} — ${photo.caption}`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
              />

              {/* Subtle Viewfinder Corner Brackets */}
              <div className="pointer-events-none absolute inset-3 opacity-70 transition-opacity duration-200 group-hover:opacity-100" aria-hidden="true">
                <span className="absolute top-0 left-0 h-3 w-3 border-t border-l border-white/60 transition-colors group-hover:border-[#C6A56A]" />
                <span className="absolute top-0 right-0 h-3 w-3 border-t border-r border-white/60 transition-colors group-hover:border-[#C6A56A]" />
                <span className="absolute bottom-0 left-0 h-3 w-3 border-b border-l border-white/60 transition-colors group-hover:border-[#C6A56A]" />
                <span className="absolute bottom-0 right-0 h-3 w-3 border-b border-r border-white/60 transition-colors group-hover:border-[#C6A56A]" />
              </div>

              {/* Top Right Expand Cue */}
              <div className="pointer-events-none absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-lg border border-white/20 bg-[#0B1220]/70 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                <Expand className="h-3.5 w-3.5" aria-hidden="true" />
              </div>

              {/* Clean Bottom Gradient Scrim */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0B1220]/95 via-[#0B1220]/60 to-transparent px-4 pt-12 pb-4">
                <p className="font-mono text-[11px] font-medium text-[#C6A56A] tabular-nums">
                  {String(index + 1).padStart(2, '0')} · {photo.categoryLabel}
                </p>
                <h3 className="mt-1 font-display text-sm font-semibold text-white leading-snug">
                  {photo.title}
                </h3>
              </div>
            </button>
          ))}

          {/* Balanced 8th Companion Philosophy Card when showing All Shots */}
          {activeCategory === 'all' && (
            <div className="flex aspect-[3/4] flex-col justify-between rounded-2xl border border-[#1E3A6D]/50 bg-[#0B1220] p-6 text-white">
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-3.5">
                  <span className="font-mono text-[11px] font-medium text-[#C6A56A] uppercase tracking-wider">
                    Lens Notes
                  </span>
                  <Compass className="h-4 w-4 text-[#60A5FA]" aria-hidden="true" />
                </div>

                <h3 className="mt-5 font-display text-lg font-bold leading-snug text-white">
                  Shot on Smartphone. Natural Light Only.
                </h3>

                <p className="mt-3 text-xs leading-relaxed text-slate-300">
                  No studio rig or heavy editing—just stepping outside with a phone in hand to
                  catch clean horizons, morning mist, and everyday color around me.
                </p>
              </div>

              <div className="space-y-4 border-t border-white/10 pt-4">
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <p className="text-[11px] text-slate-400">Aspect</p>
                    <p className="mt-0.5 font-mono font-medium text-white tabular-nums">
                      3:4 Portrait
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-400">Collection</p>
                    <p className="mt-0.5 font-mono font-medium text-white tabular-nums">
                      {MOBILE_PHOTOS.length} Frames
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => openPhoto(0)}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#2563EB] px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-[#1D4ED8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#60A5FA] cursor-pointer"
                >
                  <Expand className="h-3.5 w-3.5" aria-hidden="true" />
                  Launch Gallery Viewer
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Accessible Lightbox Viewer Modal */}
      {activePhoto && lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Viewing photograph: ${activePhoto.title}`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B1220]/95 p-4 sm:p-6"
          onClick={closeLightbox}
        >
          <div
            className="relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-white/15 bg-[#0B1220] text-white"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Lightbox Top Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-5 py-3.5">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-medium text-[#C6A56A] tabular-nums">
                  {String(lightboxIndex + 1).padStart(2, '0')} /{' '}
                  {String(filteredPhotos.length).padStart(2, '0')}
                </span>
                <span className="text-sm font-semibold text-white">{activePhoto.title}</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setShowGrid((prev) => !prev)}
                  aria-pressed={showGrid}
                  className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap ${
                    showGrid
                      ? 'border-[#2563EB] bg-[#2563EB]/25 text-white'
                      : 'border-white/15 bg-white/5 text-slate-300 hover:text-white'
                  }`}
                >
                  <Grid className="h-3.5 w-3.5" aria-hidden="true" />
                  Grid {showGrid ? 'On' : 'Off'}
                </button>

                <button
                  type="button"
                  onClick={closeLightbox}
                  aria-label="Close photo viewer"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-slate-300 transition-colors hover:bg-white/15 hover:text-white cursor-pointer"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* Lightbox Stage + Details Split */}
            <div className="grid min-h-0 flex-1 grid-cols-1 lg:grid-cols-12">
              {/* Image Stage */}
              <div className="relative flex min-h-[320px] items-center justify-center bg-[#060A13] p-4 sm:p-6 lg:col-span-8">
                <div className="relative max-h-[65vh] overflow-hidden rounded-lg">
                  <img
                    src={activePhoto.src}
                    alt={activePhoto.title}
                    className="max-h-[65vh] w-auto max-w-full object-contain"
                  />

                  {/* Optional Rule-of-Thirds Overlay */}
                  {showGrid && (
                    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
                      <div className="absolute inset-y-0 left-1/3 w-px bg-white/30" />
                      <div className="absolute inset-y-0 left-2/3 w-px bg-white/30" />
                      <div className="absolute inset-x-0 top-1/3 h-px bg-white/30" />
                      <div className="absolute inset-x-0 top-2/3 h-px bg-white/30" />
                      <div className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2">
                        <span className="absolute top-0 left-0 h-2 w-2 border-t border-l border-[#C6A56A]" />
                        <span className="absolute top-0 right-0 h-2 w-2 border-t border-r border-[#C6A56A]" />
                        <span className="absolute bottom-0 left-0 h-2 w-2 border-b border-l border-[#C6A56A]" />
                        <span className="absolute bottom-0 right-0 h-2 w-2 border-b border-r border-[#C6A56A]" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Prev / Next Controls */}
                {filteredPhotos.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={showPrev}
                      aria-label="Previous photograph"
                      className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 bg-[#0B1220]/80 text-white transition-colors hover:border-[#2563EB] hover:bg-[#102440] cursor-pointer"
                    >
                      <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      onClick={showNext}
                      aria-label="Next photograph"
                      className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 bg-[#0B1220]/80 text-white transition-colors hover:border-[#2563EB] hover:bg-[#102440] cursor-pointer"
                    >
                      <ChevronRight className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </>
                )}
              </div>

              {/* Photo Details Panel */}
              <div className="flex flex-col justify-between border-t border-white/10 p-6 lg:col-span-4 lg:border-t-0 lg:border-l">
                <div className="space-y-5">
                  <div>
                    <p className="font-mono text-[11px] font-medium text-[#60A5FA] uppercase tracking-wider">
                      {activePhoto.categoryLabel}
                    </p>
                    <h3 className="mt-1.5 font-display text-xl font-bold text-white">
                      {activePhoto.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-300">
                      {activePhoto.caption}
                    </p>
                  </div>

                  <div className="space-y-3 border-t border-white/10 pt-4">
                    <div className="flex items-start gap-3">
                      <Sun className="mt-0.5 h-4 w-4 shrink-0 text-[#C6A56A]" aria-hidden="true" />
                      <div>
                        <p className="text-[11px] font-medium text-slate-400">Natural Light</p>
                        <p className="mt-0.5 text-xs font-medium text-white">
                          {activePhoto.lighting}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Layers
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#60A5FA]"
                        aria-hidden="true"
                      />
                      <div>
                        <p className="text-[11px] font-medium text-slate-400">Framing Focus</p>
                        <p className="mt-0.5 text-xs font-medium text-slate-200">
                          {activePhoto.framingNote}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Keyboard Hint & Strip Navigation */}
                <div className="mt-6 border-t border-white/10 pt-4">
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span>Arrow keys to browse · Esc to close</span>
                    <span className="font-mono text-slate-300 tabular-nums">
                      {lightboxIndex + 1}/{filteredPhotos.length}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
