import { useState, useEffect } from 'react';
import { X, Download, FileText, Eye } from 'lucide-react';
import {
  ASSETS,
  CERTIFICATIONS,
  EDUCATION,
  EXPERIENCES,
  IDENTITY,
  SKILLS,
} from '../data/portfolioData';

interface CvModalProps {
  open: boolean;
  onClose: () => void;
}

export function CvModal({ open, onClose }: CvModalProps) {
  const [viewMode, setViewMode] = useState<'summary' | 'pdf'>('summary');

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B1220]/80 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
        {/* Modal Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 bg-[#F5F7FA] px-6 py-4">
          <div>
            <h2 id="cv-modal-title" className="font-display text-lg font-bold text-[#102440]">
              Curriculum Vitae — {IDENTITY.name}
            </h2>
            <p className="text-xs text-slate-600">{IDENTITY.title}</p>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="inline-flex rounded-lg border border-slate-200 bg-white p-0.5">
              <button
                type="button"
                onClick={() => setViewMode('summary')}
                className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap cursor-pointer ${
                  viewMode === 'summary'
                    ? 'bg-[#102440] text-white'
                    : 'text-slate-600 hover:text-[#102440]'
                }`}
              >
                <FileText className="h-3.5 w-3.5" aria-hidden="true" />
                Executive View
              </button>
              <button
                type="button"
                onClick={() => setViewMode('pdf')}
                className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap cursor-pointer ${
                  viewMode === 'pdf'
                    ? 'bg-[#102440] text-white'
                    : 'text-slate-600 hover:text-[#102440]'
                }`}
              >
                <Eye className="h-3.5 w-3.5" aria-hidden="true" />
                Original PDF
              </button>
            </div>

            <a
              href={ASSETS.cvPdf}
              download="Jagat_Karki_CV.pdf"
              className="inline-flex items-center gap-1.5 rounded-lg bg-[#2563EB] px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#1D4ED8] whitespace-nowrap shrink-0"
            >
              <Download className="h-3.5 w-3.5" aria-hidden="true" />
              Download PDF
            </a>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close CV preview"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition-colors hover:bg-slate-100 hover:text-[#102440] cursor-pointer"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8">
          {viewMode === 'summary' ? (
            <div className="space-y-8 text-slate-800">
              {/* Header block */}
              <div className="border-b border-slate-200 pb-6">
                <h3 className="font-display text-2xl font-bold text-[#102440]">
                  {IDENTITY.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-[#2563EB]">{IDENTITY.title}</p>
                <p className="mt-2 text-xs text-slate-600">
                  {IDENTITY.location} · {IDENTITY.email} · {IDENTITY.phones.join(' / ')}
                </p>
              </div>

              {/* Experience */}
              <div>
                <h4 className="text-xs font-semibold tracking-wider text-[#2563EB] uppercase">
                  Work Experience
                </h4>
                <div className="mt-4 space-y-6">
                  {EXPERIENCES.map((exp) => (
                    <div key={exp.id}>
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <p className="font-display text-base font-bold text-[#102440]">
                          {exp.role} — {exp.organization} ({exp.location})
                        </p>
                        <span className="font-mono text-xs text-slate-500 tabular-nums">
                          {exp.period}
                        </span>
                      </div>
                      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
                        {exp.allResponsibilities.map((r, i) => (
                          <li key={i}>{r}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div>
                <h4 className="text-xs font-semibold tracking-wider text-[#2563EB] uppercase">
                  Education
                </h4>
                <div className="mt-4 space-y-3">
                  {EDUCATION.map((edu) => (
                    <div
                      key={edu.id}
                      className="flex flex-wrap items-baseline justify-between gap-2 border-b border-slate-100 pb-2.5"
                    >
                      <div>
                        <p className="text-sm font-bold text-[#102440]">{edu.degree}</p>
                        <p className="text-xs text-slate-600">
                          {edu.institution} · {edu.university}
                        </p>
                      </div>
                      <div className="font-mono text-xs text-slate-600 tabular-nums">
                        {edu.date} · {edu.score}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Training */}
              <div>
                <h4 className="text-xs font-semibold tracking-wider text-[#2563EB] uppercase">
                  Training &amp; Certifications
                </h4>
                <div className="mt-3 space-y-2.5">
                  {CERTIFICATIONS.map((c) => (
                    <div key={c.id} className="flex flex-wrap justify-between gap-2 text-sm">
                      <div>
                        <span className="font-semibold text-[#102440]">{c.title}</span>
                        <span className="text-slate-600"> — {c.issuer}</span>
                      </div>
                      <span className="font-mono text-xs text-slate-500 tabular-nums">
                        {c.date}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills & Languages */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <h4 className="text-xs font-semibold tracking-wider text-[#2563EB] uppercase">
                    Skills
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700">
                    {SKILLS.map((s) => s.name).join(' · ')}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold tracking-wider text-[#2563EB] uppercase">
                    Languages
                  </h4>
                  <ul className="mt-2 space-y-1 text-sm text-slate-700">
                    {IDENTITY.languages.map((lang) => (
                      <li key={lang.name}>
                        <span className="font-semibold text-[#102440]">{lang.name}:</span>{' '}
                        {lang.proficiency}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <div className="h-[68vh] w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
              <iframe
                src={ASSETS.cvPdf}
                title="Jagat Karki Curriculum Vitae PDF"
                className="h-full w-full"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
