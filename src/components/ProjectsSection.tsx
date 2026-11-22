import { useState, useEffect } from 'react';
import {
  LayoutDashboard,
  LineChart,
  ShieldCheck,
  Trophy,
  ArrowUpRight,
  ChevronRight,
  X,
  CheckCircle2,
  Layers,
} from 'lucide-react';
import { PROJECTS, ProjectCategory, ProjectItem } from '../data/portfolioData';

const PROJECT_FILTERS: { id: ProjectCategory; label: string }[] = [
  { id: 'all', label: 'All Projects' },
  { id: 'personal', label: 'Personal' },
  { id: 'academic', label: 'Academic' },
  { id: 'fintech', label: 'FinTech & Banking' },
];

function renderProjectIcon(iconKey: ProjectItem['iconKey']) {
  const cls = 'h-5 w-5 text-[#2563EB] transition-colors duration-150 group-hover:text-white';
  switch (iconKey) {
    case 'dashboard':
      return <LayoutDashboard className={cls} aria-hidden="true" />;
    case 'chart':
      return <LineChart className={cls} aria-hidden="true" />;
    case 'shield':
      return <ShieldCheck className={cls} aria-hidden="true" />;
    case 'trophy':
      return <Trophy className={cls} aria-hidden="true" />;
  }
}

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');
  const [selectedId, setSelectedId] = useState<string>(PROJECTS[0].id);
  const [modalProject, setModalProject] = useState<ProjectItem | null>(null);

  useEffect(() => {
    if (!modalProject) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setModalProject(null);
    };
    document.addEventListener('keydown', onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [modalProject]);

  const visibleProjects =
    activeFilter === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category.includes(activeFilter));

  const selectedProject =
    visibleProjects.find((p) => p.id === selectedId) ?? visibleProjects[0];

  return (
    <section id="projects" className="bg-[#F5F7FA] py-20 lg:py-24 border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.16em] text-[#2563EB] uppercase">
              Technology Projects
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[#102440] sm:text-4xl [text-wrap:balance]">
              Personal &amp; Academic Technology Initiatives
            </h2>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-slate-600">
            Applied technology concepts, academic capstones, and analytical prototypes bridging
            banking operations, business research, and software design.
          </p>
        </div>

        {/* Interactive Filter Tabs */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-5">
          <div
            role="tablist"
            aria-label="Filter projects by category"
            className="inline-flex flex-wrap items-center gap-1 rounded-lg border border-slate-200 bg-white p-1"
          >
            {PROJECT_FILTERS.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => {
                    setActiveFilter(tab.id);
                    const next =
                      tab.id === 'all'
                        ? PROJECTS
                        : PROJECTS.filter((p) => p.category.includes(tab.id as Exclude<ProjectCategory, 'all'>));
                    if (next.length > 0 && !next.some((p) => p.id === selectedId)) {
                      setSelectedId(next[0].id);
                    }
                  }}
                  className={`rounded-md px-3.5 py-2 text-xs font-medium transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-[#102440] text-white'
                      : 'text-slate-600 hover:bg-white hover:text-[#102440]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <p className="text-xs text-slate-500">
            Select a card to inspect project highlights or open the interactive concept preview
          </p>
        </div>

        {/* Card-Based Project Grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {visibleProjects.map((project) => {
            const isSelected = selectedProject?.id === project.id;
            return (
              <article
                key={project.id}
                onClick={() => setSelectedId(project.id)}
                className={`group flex flex-col justify-between rounded-2xl border p-6 sm:p-7 transition-all duration-150 cursor-pointer hover:-translate-y-0.5 ${
                  isSelected
                    ? 'border-[#2563EB] bg-[#F5F7FA]'
                    : 'border-slate-200 bg-white hover:border-[#2563EB]/60 hover:bg-[#F5F7FA]/60'
                }`}
              >
                <div>
                  {/* Metadata Header (unboxed typographic separation) */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-[#F5F7FA] transition-colors duration-150 group-hover:border-[#2563EB] group-hover:bg-[#2563EB]">
                      {renderProjectIcon(project.iconKey)}
                    </div>
                    <div className="text-right text-xs text-slate-500">
                      <span>{project.context}</span>
                      <span className="mx-1.5 text-slate-300" aria-hidden="true">
                        ·
                      </span>
                      <span className="font-mono font-medium text-[#102440] tabular-nums">
                        {project.year}
                      </span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="mt-5 font-display text-xl font-bold text-[#102440] group-hover:text-[#2563EB] transition-colors duration-150">
                    {project.title}
                  </h3>

                  <p className="mt-2.5 text-sm leading-relaxed text-slate-700">
                    {project.goal}
                  </p>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    <span className="font-semibold text-[#102440]">Role: </span>
                    {project.role}
                  </p>
                </div>

                {/* Technologies & Interactive Footer */}
                <div className="mt-6 border-t border-slate-200 pt-4">
                  <p className="font-mono text-xs text-slate-600">
                    {project.technologies.join(' · ')}
                  </p>

                  <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#2563EB]">
                      <span>{isSelected ? 'Selected below' : 'Inspect highlights'}</span>
                      <ChevronRight
                        className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </span>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedId(project.id);
                        setModalProject(project);
                      }}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3.5 py-1.5 text-xs font-semibold text-[#102440] transition-colors duration-150 hover:border-[#2563EB] hover:bg-[#2563EB] hover:text-white whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      Interactive Demo
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Synchronized Selected Project Spotlight Panel */}
        {selectedProject && (
          <div className="mt-6 rounded-2xl border border-slate-200 bg-[#102440] p-6 sm:p-7 text-white">
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold tracking-wider text-[#C6A56A] uppercase">
                  Project Highlights · {selectedProject.context}
                </p>
                <h3 className="mt-1.5 font-display text-xl font-bold text-white">
                  {selectedProject.title}
                </h3>
                <ul className="mt-4 space-y-2">
                  {selectedProject.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-200">
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#60A5FA]"
                        aria-hidden="true"
                      />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col items-start gap-3 shrink-0 lg:items-end">
                <div className="font-mono text-xs text-slate-300">
                  Stack: {selectedProject.technologies.join(' / ')}
                </div>
                <button
                  type="button"
                  onClick={() => setModalProject(selectedProject)}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#2563EB] px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-[#1D4ED8] whitespace-nowrap shrink-0 cursor-pointer"
                >
                  Open Architecture &amp; Demo
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Interactive Project Preview Modal */}
      {modalProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B1220]/80 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          onClick={(e) => {
            if (e.target === e.currentTarget) setModalProject(null);
          }}
        >
          <div className="flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
            <div className="flex items-start justify-between gap-4 border-b border-slate-200 bg-[#F5F7FA] px-6 py-5">
              <div>
                <p className="text-xs font-medium text-[#2563EB]">
                  {modalProject.context} · {modalProject.year}
                </p>
                <h3
                  id="project-modal-title"
                  className="mt-1 font-display text-xl font-bold text-[#102440]"
                >
                  {modalProject.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setModalProject(null)}
                aria-label="Close project preview"
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition-colors hover:bg-slate-100 hover:text-[#102440] cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="overflow-y-auto p-6 space-y-6">
              <div>
                <h4 className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
                  Goal &amp; Contribution
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  {modalProject.goal}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  <span className="font-semibold text-[#102440]">My Role: </span>
                  {modalProject.role}
                </p>
              </div>

              {/* Concept Metrics Snapshot */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-200 bg-[#F5F7FA] p-4">
                  <p className="text-xs text-slate-500">
                    {modalProject.demoSummary.metricLabel}
                  </p>
                  <p className="mt-1 font-display text-2xl font-bold text-[#102440] tabular-nums">
                    {modalProject.demoSummary.metricValue}
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-[#F5F7FA] p-4">
                  <p className="text-xs text-slate-500">
                    {modalProject.demoSummary.secondaryLabel}
                  </p>
                  <p className="mt-1 font-display text-2xl font-bold text-[#2563EB] tabular-nums">
                    {modalProject.demoSummary.secondaryValue}
                  </p>
                </div>
              </div>

              {/* System Workflow Architecture */}
              <div>
                <h4 className="flex items-center gap-2 text-xs font-semibold tracking-wider text-slate-500 uppercase">
                  <Layers className="h-3.5 w-3.5 text-[#2563EB]" aria-hidden="true" />
                  Core Workflow Architecture
                </h4>
                <ol className="mt-3 space-y-2.5">
                  {modalProject.demoSummary.workflowSteps.map((step, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700"
                    >
                      <span className="font-mono text-xs font-semibold text-[#2563EB] tabular-nums mt-0.5">
                        0{index + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="border-t border-slate-200 pt-4 flex flex-wrap items-center justify-between gap-4">
                <p className="font-mono text-xs text-slate-600">
                  {modalProject.technologies.join(' · ')}
                </p>
                <a
                  href="#contact"
                  onClick={() => setModalProject(null)}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-[#102440] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#2563EB] whitespace-nowrap shrink-0"
                >
                  Discuss This Project
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
