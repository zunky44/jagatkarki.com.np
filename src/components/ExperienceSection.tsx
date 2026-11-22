import { useState } from 'react';
import { Building2, MapPin, Calendar, Check, ChevronDown, ChevronUp } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export function ExperienceSection() {
  const [expandedRole, setExpandedRole] = useState<string | null>(null);

  return (
    <section id="experience" className="bg-[#F5F7FA] py-20 lg:py-24 border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-[#2563EB] uppercase">
              Professional Experience
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[#102440] sm:text-4xl [text-wrap:balance]">
              Banking Career &amp; Operational Leadership
            </h2>
          </div>
          <p className="max-w-md text-sm text-slate-600">
            Over five years of progressive frontline banking experience spanning customer
            relationship management, branch operations, compliance, and deposit growth.
          </p>
        </div>

        {/* Clean Vertical Timeline */}
        <div className="relative mt-12 space-y-8 before:absolute before:top-6 before:bottom-6 before:left-5 before:hidden before:w-px before:bg-slate-300 md:before:block">
          {EXPERIENCES.map((exp) => {
            const isExpanded = expandedRole === exp.id;
            const listToShow =
              exp.id === 'siddhartha-bank' && !isExpanded
                ? exp.highlights
                : exp.allResponsibilities;

            return (
              <div key={exp.id} className="relative md:pl-14">
                {/* Timeline node */}
                <div
                  className={`absolute left-3 top-7 hidden h-4 w-4 rounded-full border-2 md:block ${
                    exp.current
                      ? 'border-[#2563EB] bg-[#2563EB]'
                      : 'border-[#102440] bg-white'
                  }`}
                  aria-hidden="true"
                />

                <article className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
                  <div className="flex flex-col justify-between gap-4 border-b border-slate-100 pb-5 sm:flex-row sm:items-start">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500">
                        <span>{exp.duration}</span>
                        <span aria-hidden="true">·</span>
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="h-3.5 w-3.5 text-[#2563EB]" aria-hidden="true" />
                          {exp.location}
                        </span>
                      </div>
                      <h3 className="mt-1.5 font-display text-xl font-bold text-[#102440] sm:text-2xl">
                        {exp.role}
                      </h3>
                      <p className="mt-1 inline-flex items-center gap-2 text-sm font-semibold text-[#2563EB]">
                        <Building2 className="h-4 w-4" aria-hidden="true" />
                        {exp.organization}
                      </p>
                    </div>

                    <div className="inline-flex items-center gap-2 font-mono text-xs font-medium text-slate-600 tabular-nums shrink-0">
                      <Calendar className="h-3.5 w-3.5 text-[#C6A56A]" aria-hidden="true" />
                      {exp.period}
                    </div>
                  </div>

                  <p className="mt-5 text-[15px] leading-relaxed text-slate-700">
                    {exp.summary}
                  </p>

                  <ul className="mt-5 grid grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2">
                    {listToShow.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-[#2563EB]"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {exp.id === 'siddhartha-bank' && (
                    <div className="mt-6 border-t border-slate-100 pt-4">
                      <button
                        type="button"
                        onClick={() => setExpandedRole(isExpanded ? null : exp.id)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2563EB] transition-colors hover:text-[#102440] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]"
                      >
                        {isExpanded ? (
                          <>
                            Show Key Responsibilities
                            <ChevronUp className="h-4 w-4" aria-hidden="true" />
                          </>
                        ) : (
                          <>
                            View Complete Responsibility Scope (10 Areas)
                            <ChevronDown className="h-4 w-4" aria-hidden="true" />
                          </>
                        )}
                      </button>
                    </div>
                  )}
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
