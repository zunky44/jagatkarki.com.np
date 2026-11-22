import { useState } from 'react';
import {
  BrainCircuit,
  Cpu,
  Workflow,
  Server,
  Layers,
  Lightbulb,
  Landmark,
  TrendingUp,
  ChevronRight,
} from 'lucide-react';
import { TECH_INTERESTS, TechCategory, TechInterest } from '../data/portfolioData';

const FILTERS: { id: TechCategory; label: string }[] = [
  { id: 'all', label: 'All Topics' },
  { id: 'intelligence', label: 'Intelligence & Innovation' },
  { id: 'finance', label: 'Digital Finance & Trends' },
  { id: 'systems', label: 'IT & Digital Systems' },
];

function renderTechIcon(iconKey: TechInterest['iconKey']) {
  const iconClass = 'h-5 w-5 text-[#60A5FA]';
  switch (iconKey) {
    case 'brain':
      return <BrainCircuit className={iconClass} />;
    case 'sparkles':
      return <Cpu className={iconClass} />;
    case 'workflow':
      return <Workflow className={iconClass} />;
    case 'server':
      return <Server className={iconClass} />;
    case 'layers':
      return <Layers className={iconClass} />;
    case 'lightbulb':
      return <Lightbulb className={iconClass} />;
    case 'landmark':
      return <Landmark className={iconClass} />;
    case 'trending':
      return <TrendingUp className={iconClass} />;
  }
}

export function TechnologySection() {
  const [activeFilter, setActiveFilter] = useState<TechCategory>('all');
  const [selectedId, setSelectedId] = useState<string>(TECH_INTERESTS[0].id);

  const visibleInterests =
    activeFilter === 'all'
      ? TECH_INTERESTS
      : TECH_INTERESTS.filter((item) => item.category === activeFilter);

  const selectedTopic =
    visibleInterests.find((item) => item.id === selectedId) ?? visibleInterests[0];

  return (
    <section
      id="technology"
      className="relative overflow-hidden bg-[#0B1220] py-20 lg:py-24 text-white border-b border-white/10"
    >
      <div className="pointer-events-none absolute inset-0 tech-grid-bg opacity-45" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.16em] text-[#C6A56A] uppercase">
              Technology — Areas of Interest &amp; Curiosity
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl [text-wrap:balance]">
              Technology Is More Than an Interest. It&apos;s a Passion.
            </h2>
            <p className="mt-2 text-lg font-medium text-[#60A5FA]">
              Always Curious. Always Exploring. Always Learning.
            </p>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-slate-300">
            With an academic background in Information Technology, I have always been fascinated
            by the evolving world of technology—exploring new digital tools, emerging
            innovations, and how technology transforms businesses and society.
          </p>
        </div>

        {/* Interactive Filter Tabs */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
          <div
            role="tablist"
            aria-label="Filter technology interest areas"
            className="inline-flex flex-wrap items-center gap-1 rounded-lg bg-[#102440] p-1 border border-white/10"
          >
            {FILTERS.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => {
                    setActiveFilter(tab.id);
                    const nextList =
                      tab.id === 'all'
                        ? TECH_INTERESTS
                        : TECH_INTERESTS.filter((i) => i.category === tab.id);
                    if (nextList.length > 0 && !nextList.some((i) => i.id === selectedId)) {
                      setSelectedId(nextList[0].id);
                    }
                  }}
                  className={`rounded-md px-3.5 py-2 text-xs font-medium transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-[#2563EB] text-white'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <p className="text-xs text-slate-400">
            Select any card to read my perspective · Focus areas of continuous exploration
          </p>
        </div>

        {/* 8 Interactive Technology Cards Grid */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {visibleInterests.map((item) => {
            const isSelected = selectedTopic?.id === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedId(item.id)}
                className={`group flex flex-col justify-between rounded-xl border p-5 text-left transition-all duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] ${
                  isSelected
                    ? 'border-[#2563EB] bg-[#13294B]'
                    : 'border-white/10 bg-[#101C33] hover:border-white/25 hover:bg-[#132340]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-[#0B1220]">
                      {renderTechIcon(item.iconKey)}
                    </div>
                    <span className="text-[11px] font-medium text-slate-400">
                      {item.categoryLabel}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-base font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    {item.summary}
                  </p>
                </div>

                <div className="mt-4 flex items-center gap-1 text-xs font-medium text-[#60A5FA] group-hover:text-white transition-colors">
                  <span>{isSelected ? 'Viewing perspective' : 'Explore perspective'}</span>
                  <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Topic Perspective Panel */}
        {selectedTopic && (
          <div className="mt-6 rounded-xl border border-[#2563EB]/40 bg-[#102440]/90 p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#2563EB]/40 bg-[#0B1220]">
                  {renderTechIcon(selectedTopic.iconKey)}
                </div>
                <div>
                  <p className="text-xs font-medium text-[#C6A56A]">
                    Why This Interests Me · {selectedTopic.categoryLabel}
                  </p>
                  <h3 className="mt-1 font-display text-lg font-semibold text-white">
                    {selectedTopic.title}
                  </h3>
                  <p className="mt-1.5 max-w-3xl text-sm leading-relaxed text-slate-200">
                    {selectedTopic.perspective}
                  </p>
                </div>
              </div>
              <div className="shrink-0 text-xs text-slate-400 md:text-right">
                Area of Curiosity &amp; Learning
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
