import { GraduationCap, Award, Calendar } from 'lucide-react';
import { CERTIFICATIONS, EDUCATION } from '../data/portfolioData';

export function EducationAndTraining() {
  const featuredDegrees = EDUCATION.filter((e) => e.featured);
  const foundationalDegrees = EDUCATION.filter((e) => !e.featured);

  return (
    <section id="education" className="bg-white py-20 lg:py-24 border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-6">
        {/* Education Heading */}
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-[#2563EB] uppercase">
              Academic Foundation
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[#102440] sm:text-4xl [text-wrap:balance]">
              Business Strategy Meets Information Technology
            </h2>
          </div>
          <p className="max-w-md text-sm text-slate-600">
            Combining postgraduate marketing leadership with an undergraduate degree in
            Information Technology.
          </p>
        </div>

        {/* Featured Degrees: MBA & BSc IT */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {featuredDegrees.map((edu) => (
            <article
              key={edu.id}
              className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-[#F5F7FA] p-7 transition-colors hover:border-[#2563EB]/40"
            >
              <div>
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#102440] text-white">
                    <GraduationCap className="h-5 w-5 text-[#C6A56A]" aria-hidden="true" />
                  </div>
                  <div className="text-right font-mono text-xs text-slate-600 tabular-nums">
                    <span>{edu.date}</span>
                    <span className="mx-2 text-slate-300" aria-hidden="true">
                      /
                    </span>
                    <span className="font-semibold text-[#102440]">{edu.score}</span>
                  </div>
                </div>

                <h3 className="mt-5 font-display text-xl font-bold text-[#102440]">
                  {edu.degree}
                </h3>
                <p className="mt-1 text-sm font-semibold text-[#2563EB]">{edu.field}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{edu.focus}</p>
              </div>

              <div className="mt-6 border-t border-slate-200 pt-4 text-sm">
                <p className="font-semibold text-[#102440]">{edu.institution}</p>
                <p className="text-slate-600">{edu.university}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Foundational Schooling */}
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          {foundationalDegrees.map((edu) => (
            <article
              key={edu.id}
              className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 sm:flex-row sm:items-center sm:gap-6"
            >
              <div>
                <h3 className="font-display text-base font-bold text-[#102440]">
                  {edu.degree}
                </h3>
                <p className="mt-1 text-sm text-slate-700">{edu.institution}</p>
                <p className="text-xs text-slate-500">{edu.university}</p>
              </div>
              <div className="mt-3 shrink-0 font-mono text-xs text-slate-600 tabular-nums sm:mt-0 sm:text-right">
                <div className="font-semibold text-[#102440]">{edu.score}</div>
                <div className="text-slate-500">{edu.date}</div>
              </div>
            </article>
          ))}
        </div>

        {/* Training & Certifications */}
        <div className="mt-16 border-t border-slate-200 pt-14">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold tracking-[0.16em] text-[#2563EB] uppercase">
                Training &amp; Certifications
              </p>
              <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-[#102440]">
                Specialized Banking &amp; Security Training
              </h3>
            </div>
            <p className="text-xs text-slate-500">Verified professional training records</p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
            {CERTIFICATIONS.map((cert) => (
              <article
                key={cert.id}
                className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs text-slate-500">
                    <span className="inline-flex items-center gap-1.5 font-medium text-[#2563EB]">
                      <Award className="h-4 w-4" aria-hidden="true" />
                      Certificate
                    </span>
                    <span className="inline-flex items-center gap-1 font-mono tabular-nums">
                      <Calendar className="h-3.5 w-3.5 text-[#C6A56A]" aria-hidden="true" />
                      {cert.date}
                    </span>
                  </div>

                  <h4 className="mt-3 font-display text-base font-bold leading-snug text-[#102440]">
                    {cert.title}
                  </h4>
                </div>

                <div className="mt-5 border-t border-slate-100 pt-3.5 text-xs">
                  <p className="font-semibold text-slate-800">{cert.issuer}</p>
                  <p className="mt-0.5 text-slate-500">{cert.format}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
