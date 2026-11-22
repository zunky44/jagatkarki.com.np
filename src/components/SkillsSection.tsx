import { useState } from 'react';
import {
  Landmark,
  Handshake,
  Headset,
  Wallet,
  Briefcase,
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
  ChevronRight,
} from 'lucide-react';
import { SKILLS, SkillCategory, SkillIconKey } from '../data/portfolioData';

const SKILL_TABS: { id: SkillCategory; label: string }[] = [
  { id: 'all', label: 'All Capabilities (15)' },
  { id: 'banking', label: 'Banking & Finance' },
  { id: 'business', label: 'Business & Digital' },
  { id: 'interpersonal', label: 'Core Strengths' },
];

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

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('all');
  const [selectedSkillName, setSelectedSkillName] = useState<string>(SKILLS[0].name);

  const visibleSkills =
    activeCategory === 'all'
      ? SKILLS
      : SKILLS.filter((skill) => skill.category === activeCategory);

  const selectedSkill =
    visibleSkills.find((s) => s.name === selectedSkillName) ?? visibleSkills[0];

  return (
    <section id="skills" className="bg-[#F5F7FA] py-20 lg:py-24 border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-[#2563EB] uppercase">
              Professional Skills
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[#102440] sm:text-4xl [text-wrap:balance]">
              Core Competencies &amp; Capabilities
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Select any competency card to view how it is applied across banking and technology.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Filter professional skills"
            className="inline-flex flex-wrap items-center gap-1 rounded-lg border border-slate-200 bg-white p-1"
          >
            {SKILL_TABS.map((tab) => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => {
                    setActiveCategory(tab.id);
                    const nextList =
                      tab.id === 'all'
                        ? SKILLS
                        : SKILLS.filter((s) => s.category === tab.id);
                    if (
                      nextList.length > 0 &&
                      !nextList.some((s) => s.name === selectedSkillName)
                    ) {
                      setSelectedSkillName(nextList[0].name);
                    }
                  }}
                  className={`rounded-md px-3.5 py-2 text-xs font-medium transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
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

        {/* Interactive Skill Cards Grid */}
        <div className="mt-10 grid grid-cols-1 gap-3.5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {visibleSkills.map((skill, index) => {
            const isSelected = selectedSkill?.name === skill.name;
            return (
              <button
                key={skill.name}
                type="button"
                onClick={() => setSelectedSkillName(skill.name)}
                aria-pressed={isSelected}
                className={`group flex flex-col justify-between rounded-xl border p-4 text-left transition-all duration-150 cursor-pointer hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] ${
                  isSelected
                    ? 'border-[#2563EB] bg-white ring-1 ring-[#2563EB]/20'
                    : 'border-slate-200 bg-white hover:border-[#2563EB]/50'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-lg border transition-colors duration-150 ${
                        isSelected
                          ? 'border-[#2563EB] bg-[#2563EB]'
                          : 'border-slate-200 bg-[#F5F7FA] group-hover:border-[#2563EB] group-hover:bg-[#2563EB]'
                      }`}
                    >
                      {renderSkillIcon(skill.iconKey, isSelected)}
                    </div>
                    <span className="font-mono text-[11px] font-medium text-slate-400 tabular-nums">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <p className="mt-3.5 font-display text-sm font-semibold leading-snug text-[#102440] group-hover:text-[#2563EB] transition-colors">
                    {skill.name}
                  </p>
                </div>

                <div className="mt-3 flex items-center justify-between text-[11px] font-medium text-slate-500">
                  <span>{skill.categoryLabel}</span>
                  <ChevronRight
                    className={`h-3.5 w-3.5 transition-transform duration-150 ${
                      isSelected
                        ? 'text-[#2563EB] translate-x-0.5'
                        : 'text-slate-400 group-hover:text-[#2563EB] group-hover:translate-x-0.5'
                    }`}
                    aria-hidden="true"
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Competency Context Panel */}
        {selectedSkill && (
          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#102440] text-white">
                  {renderSkillIcon(selectedSkill.iconKey, true)}
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500">
                    <span className="text-[#2563EB]">{selectedSkill.categoryLabel}</span>
                    <span aria-hidden="true">·</span>
                    <span>{selectedSkill.appliedIn}</span>
                  </div>
                  <h3 className="mt-1 font-display text-lg font-bold text-[#102440]">
                    {selectedSkill.name}
                  </h3>
                  <p className="mt-1.5 max-w-3xl text-sm leading-relaxed text-slate-600">
                    {selectedSkill.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
