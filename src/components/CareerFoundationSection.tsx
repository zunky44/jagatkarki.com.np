import { useState } from 'react';
import {
  Award,
  Briefcase,
  Building2,
  Calendar,
  Check,
  ChevronDown,
  ChevronUp,
  FileText,
  GraduationCap,
  MapPin,
  Trophy,
  Landmark,
  Handshake,
  Headset,
  Wallet,
  Megaphone,
  FileSpreadsheet,
  Monitor,
  Brain,
  MessageSquare,
  Wrench,
  Clock,
  Users,
  RefreshCw,
  UserCheck,
} from 'lucide-react';
import {
  CERTIFICATIONS,
  EDUCATION,
  EXPERIENCES,
  SKILLS,
  SkillIconKey,
} from '../data/portfolioData';

type CareerTab = 'experience' | 'education' | 'skills';

interface CareerFoundationSectionProps {
  onOpenCv: () => void;
}

function renderSkillIcon(iconKey: SkillIconKey, isSelected: boolean) {
  const cls = `h-4 w-4 transition-colors duration-150 ${
    isSelected ? 'text-white' : 'text-[#2563EB] group-hover:text-white'
  }`;

  switch (iconKey) {
    case 'landmark':
      return <Landmark className={cls} aria-hidden="true" />;
    case 'handshake':
      return <Handshake className={cls} aria-hidden="true" />;
    case 'headset':
      return <Headset className={cls} aria-hidden="true" />;
    case 'wallet':
      return <Wallet className={cls} aria-hidden="true" />;
    case 'briefcase':
      return <Briefcase className={cls} aria-hidden="true" />;
    case 'megaphone':
      return <Megaphone className={cls} aria-hidden="true" />;
    case 'file-spreadsheet':
      return <FileSpreadsheet className={cls} aria-hidden="true" />;
    case 'monitor':
      return <Monitor className={cls} aria-hidden="true" />;
    case 'brain':
      return <Brain className={cls} aria-hidden="true" />;
    case 'message-square':
      return <MessageSquare className={cls} aria-hidden="true" />;
    case 'wrench':
      return <Wrench className={cls} aria-hidden="true" />;
    case 'clock':
      return <Clock className={cls} aria-hidden="true" />;
    case 'users':
      return <Users className={cls} aria-hidden="true" />;
    case 'refresh':
      return <RefreshCw className={cls} aria-hidden="true" />;
    case 'user-check':
      return <UserCheck className={cls} aria-hidden="true" />;
  }
}

export function CareerFoundationSection({ onOpenCv }: CareerFoundationSectionProps) {
  const [activeTab, setActiveTab] = useState<CareerTab>('experience');
  const [expandedRole, setExpandedRole] = useState<string | null>(null);
  const [selectedSkillName, setSelectedSkillName] = useState<string>(SKILLS[0].name);

  const selectedSkill =
    SKILLS.find((s) => s.name === selectedSkillName) ?? SKILLS[0];

  return (
    <section id="career" className="bg-[#F5F7FA] py-16 lg:py-20 border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-6">
        {/* Compact Section Header */}
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-slate-500 uppercase">
              Professional &amp; Academic Foundation
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-[#102440] sm:text-3xl [text-wrap:balance]">
              Banking Career, Education &amp; Core Competencies
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-600">
              Alongside my primary creative and technology interests, I bring 5+ years of
              banking operations experience and degrees in Information Technology and Business
              Administration.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenCv}
            className="inline-flex items-center gap-2 self-start rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-xs font-semibold text-[#102440] transition-colors hover:border-[#2563EB] hover:text-[#2563EB] whitespace-nowrap shrink-0 cursor-pointer lg:self-auto"
          >
            <FileText className="h-4 w-4 text-[#2563EB]" aria-hidden="true" />
            View Full CV
          </button>
        </div>

        {/* Unified Secondary Tabs */}
        <div className="mt-8 border-b border-slate-200 pb-4">
          <div
            role="tablist"
            aria-label="Career and academic background sections"
            className="inline-flex flex-wrap items-center gap-1 rounded-lg border border-slate-200 bg-white p-1"
          >
            {(
              [
                { id: 'experience', label: 'Banking Experience (2)' },
                { id: 'education', label: 'Education & Training' },
                { id: 'skills', label: 'Core Competencies (15)' },
              ] as { id: CareerTab; label: string }[]
            ).map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-md px-4 py-2 text-xs font-semibold transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-[#102440] text-white'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-[#102440]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab 1: Banking Experience */}
        {activeTab === 'experience' && (
          <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-2">
            {EXPERIENCES.map((exp) => {
              const isExpanded = expandedRole === exp.id;
              const items =
                exp.id === 'siddhartha-bank' && !isExpanded
                  ? exp.highlights.slice(0, 4)
                  : exp.allResponsibilities;

              return (
                <article
                  key={exp.id}
                  className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6"
                >
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4">
                      <div>
                        <p className="text-xs font-medium text-slate-500">
                          {exp.duration} ·{' '}
                          <span className="inline-flex items-center gap-1">
                            <MapPin className="h-3 w-3 text-[#2563EB]" aria-hidden="true" />
                            {exp.location}
                          </span>
                        </p>
                        <h3 className="mt-1 font-display text-lg font-bold text-[#102440]">
                          {exp.role}
                        </h3>
                        <p className="mt-0.5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#2563EB]">
                          <Building2 className="h-3.5 w-3.5" aria-hidden="true" />
                          {exp.organization}
                        </p>
                      </div>
                      <span className="inline-flex items-center gap-1.5 font-mono text-xs text-slate-600 tabular-nums">
                        <Calendar className="h-3.5 w-3.5 text-[#C6A56A]" aria-hidden="true" />
                        {exp.period}
                      </span>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-slate-600">{exp.summary}</p>

                    <ul className="mt-4 space-y-2">
                      {items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <Check
                            className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#2563EB]"
                            aria-hidden="true"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {exp.id === 'siddhartha-bank' && (
                    <div className="mt-5 border-t border-slate-100 pt-3">
                      <button
                        type="button"
                        onClick={() => setExpandedRole(isExpanded ? null : exp.id)}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[#2563EB] hover:text-[#102440] cursor-pointer"
                      >
                        {isExpanded ? (
                          <>
                            Show Key Summary
                            <ChevronUp className="h-3.5 w-3.5" aria-hidden="true" />
                          </>
                        ) : (
                          <>
                            View All 10 Responsibilities
                            <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
                          </>
                        )}
                      </button>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        )}

        {/* Tab 2: Education & Certifications */}
        {activeTab === 'education' && (
          <div className="mt-6 space-y-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {EDUCATION.map((edu) => (
                <article
                  key={edu.id}
                  className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#102440] text-white">
                        <GraduationCap className="h-4 w-4 text-[#C6A56A]" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-display text-base font-bold text-[#102440]">
                          {edu.degree}
                        </h3>
                        <p className="text-xs font-medium text-[#2563EB]">{edu.field}</p>
                        <p className="mt-1 text-xs text-slate-600">
                          {edu.institution} · {edu.university}
                        </p>
                      </div>
                    </div>
                    <div className="text-right font-mono text-xs text-slate-600 tabular-nums shrink-0">
                      <div className="font-semibold text-[#102440]">{edu.score}</div>
                      <div className="text-slate-400">{edu.date}</div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {CERTIFICATIONS.map((cert) => (
                <article
                  key={cert.id}
                  className="rounded-xl border border-slate-200 bg-white p-5"
                >
                  <div className="flex items-center justify-between gap-2 text-xs text-slate-500">
                    <span className="inline-flex items-center gap-1 font-medium text-[#2563EB]">
                      <Award className="h-3.5 w-3.5" aria-hidden="true" />
                      Certification
                    </span>
                    <span className="font-mono tabular-nums">{cert.date}</span>
                  </div>
                  <h4 className="mt-2 font-display text-sm font-bold text-[#102440]">
                    {cert.title}
                  </h4>
                  <p className="mt-2 text-xs text-slate-600">
                    {cert.issuer} · {cert.format}
                  </p>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Core Competencies with Icons */}
        {activeTab === 'skills' && (
          <div className="mt-6 space-y-5">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
              {SKILLS.map((skill) => {
                const isSelected = selectedSkill.name === skill.name;
                return (
                  <button
                    key={skill.name}
                    type="button"
                    onClick={() => setSelectedSkillName(skill.name)}
                    aria-pressed={isSelected}
                    className={`group flex items-center gap-3 rounded-xl border p-3.5 text-left transition-all duration-150 cursor-pointer hover:-translate-y-0.5 ${
                      isSelected
                        ? 'border-[#2563EB] bg-white ring-1 ring-[#2563EB]/20'
                        : 'border-slate-200 bg-white hover:border-[#2563EB]/50'
                    }`}
                  >
                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition-colors ${
                        isSelected
                          ? 'border-[#2563EB] bg-[#2563EB]'
                          : 'border-slate-200 bg-[#F5F7FA] group-hover:border-[#2563EB] group-hover:bg-[#2563EB]'
                      }`}
                    >
                      {renderSkillIcon(skill.iconKey, isSelected)}
                    </div>
                    <span className="font-display text-xs font-semibold leading-snug text-[#102440]">
                      {skill.name}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-medium text-[#2563EB]">
                {selectedSkill.categoryLabel} · {selectedSkill.appliedIn}
              </p>
              <h3 className="mt-1 font-display text-base font-bold text-[#102440]">
                {selectedSkill.name}
              </h3>
              <p className="mt-1 text-sm text-slate-600">{selectedSkill.description}</p>
            </div>
          </div>
        )}

        {/* Compact Companion Interests Strip (FPL & Languages) */}
        <div className="mt-10 grid grid-cols-1 gap-4 border-t border-slate-200 pt-8 md:grid-cols-2">
          <div className="flex items-start gap-3.5 rounded-xl border border-slate-200 bg-white p-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-[#F5F7FA]">
              <Trophy className="h-4 w-4 text-[#2563EB]" aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-display text-sm font-bold text-[#102440]">
                FPL Enthusiast · Football &amp; Strategy
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-slate-600">
                Following Fantasy Premier League tactics, weekly matchday strategy, and football
                analytics every season.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 rounded-xl border border-slate-200 bg-white p-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-[#F5F7FA]">
              <MessageSquare className="h-4 w-4 text-[#2563EB]" aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-display text-sm font-bold text-[#102440]">
                Languages · Nepali, English &amp; Hindi
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-slate-600">
                Native proficiency in Nepali with fluent reading and strong working
                communication in English and Hindi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
