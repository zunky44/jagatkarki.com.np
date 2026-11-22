import { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Tech', href: '#technology' },
  { label: 'Projects', href: '#projects' },
  { label: 'Photography', href: '#photography' },
  { label: 'Movies', href: '#movies' },
  { label: 'Career', href: '#career' },
];

const TRACKED_SECTION_IDS = [
  'top',
  'about',
  'technology',
  'projects',
  'photography',
  'movies',
  'career',
  'contact',
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('top');

  const updateScrollState = useCallback(() => {
    const currentScrollY = window.scrollY;
    setScrolled(currentScrollY > 24);

    const viewportBottom = window.innerHeight + currentScrollY;
    const docHeight = document.documentElement.scrollHeight;
    if (viewportBottom >= docHeight - 24) {
      setActiveSection('contact');
      return;
    }

    // Offset clears sticky 64px header + 80px scroll-padding-top so anchored sections trigger immediately
    const triggerLine = currentScrollY + 128;
    let currentId = 'top';

    for (const id of TRACKED_SECTION_IDS) {
      const element = document.getElementById(id);
      if (!element) continue;
      const sectionTop = element.getBoundingClientRect().top + currentScrollY;
      if (sectionTop <= triggerLine) {
        currentId = id;
      }
    }

    setActiveSection(currentId);
  }, []);

  useEffect(() => {
    let frameId: number | null = null;

    const handleScrollOrResize = () => {
      if (frameId !== null) return;
      frameId = window.requestAnimationFrame(() => {
        updateScrollState();
        frameId = null;
      });
    };

    updateScrollState();
    window.addEventListener('scroll', handleScrollOrResize, { passive: true });
    window.addEventListener('resize', handleScrollOrResize, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScrollOrResize);
      window.removeEventListener('resize', handleScrollOrResize);
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, [updateScrollState]);

  const handleLinkClick = (href: string) => {
    const targetId = href.replace('#', '');
    if (targetId) {
      setActiveSection(targetId);
    }
    setMobileOpen(false);
  };

  const isContactActive = activeSection === 'contact';

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-200 ${
        scrolled
          ? 'bg-[#0B1220]/95 backdrop-blur-md border-b border-white/10'
          : 'bg-[#0B1220] border-b border-white/10'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-8 px-6">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#top"
          onClick={() => handleLinkClick('#top')}
          className="font-display text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2563EB]"
        >
          Jagat Karki
        </a>

        {/* Zone 2: 5 concise single-line navigation links */}
        <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((item) => {
            const sectionId = item.href.slice(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={() => handleLinkClick(item.href)}
                aria-current={isActive ? 'location' : undefined}
                className={`relative py-1 text-sm font-medium transition-colors duration-150 whitespace-nowrap shrink-0 after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:bg-[#C6A56A] after:transition-all after:duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2563EB] ${
                  isActive
                    ? 'text-white after:w-full'
                    : 'text-slate-300 hover:text-white after:w-0 hover:after:w-full'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary CTA button (+ mobile toggle on small screens) */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#contact"
            onClick={() => handleLinkClick('#contact')}
            aria-current={isContactActive ? 'location' : undefined}
            className={`hidden sm:inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium text-white transition-all duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
              isContactActive
                ? 'bg-[#1D4ED8] ring-2 ring-[#C6A56A] ring-offset-2 ring-offset-[#0B1220]'
                : 'bg-[#2563EB] hover:bg-[#1D4ED8]'
            }`}
          >
            Let&apos;s Connect
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-slate-200 transition-colors hover:bg-white/10 md:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-[#0B1220] px-6 py-4 md:hidden">
          <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
            {NAV_LINKS.map((item) => {
              const sectionId = item.href.slice(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => handleLinkClick(item.href)}
                  aria-current={isActive ? 'location' : undefined}
                  className={`rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                    isActive
                      ? 'border-l-2 border-[#C6A56A] bg-[#102440] text-white'
                      : 'text-slate-200 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <a
              href="#contact"
              onClick={() => handleLinkClick('#contact')}
              aria-current={isContactActive ? 'location' : undefined}
              className={`mt-2 inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-medium text-white transition-all ${
                isContactActive
                  ? 'bg-[#1D4ED8] ring-2 ring-[#C6A56A] ring-offset-2 ring-offset-[#0B1220]'
                  : 'bg-[#2563EB] hover:bg-[#1D4ED8]'
              }`}
            >
              Let&apos;s Connect
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
