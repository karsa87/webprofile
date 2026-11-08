import React from 'react';
import { SectionHeader } from '@/components/molecules/SectionHeader';
import { Card } from '@/components/atoms/Card';
import { SKILL_GROUPS } from '@/infrastructure/data/skills';

function getGroupIcon(title: string) {
  if (title.includes('Languages')) {
    return (
      <svg className="w-4 h-4 text-orange-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    );
  }
  if (title.includes('Databases')) {
    return (
      <svg className="w-4 h-4 text-orange-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5V19A9 3 0 0 0 21 19V5" />
        <path d="M3 12A9 3 0 0 0 21 12" />
      </svg>
    );
  }
  if (title.includes('Infrastructure')) {
    return (
      <svg className="w-4 h-4 text-orange-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect width="20" height="8" x="2" y="2" rx="2" />
        <rect width="20" height="8" x="2" y="14" rx="2" />
        <line x1="6" x2="6.01" y1="6" y2="6" />
        <line x1="6" x2="6.01" y1="18" y2="18" />
      </svg>
    );
  }
  return (
    <svg className="w-4 h-4 text-orange-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" x2="22" y1="12" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

export function TechStackRadar() {
  return (
    <section id="pro-stack" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b border-white/[0.08]">
      <SectionHeader
        align="left"
        badgeLabel="Spesialisasi Teknis"
        title="Skillset & Engineering Tools"
        description="Teknologi dan stack backend yang digunakan dalam produksi skala enterprise selama lebih dari satu dekade."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {SKILL_GROUPS.map((group) => (
          <Card key={group.title} className="p-6 rounded-xl bg-[#0C121D] border border-white/[0.08] tactile-hover">
            <div className="flex items-center gap-2 mb-4 pb-2 border-b border-white/10">
              <div className="p-1 rounded bg-orange-500/10 border border-orange-500/20">
                {getGroupIcon(group.title)}
              </div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-orange-400 font-bold">
                {group.title}
              </h3>
            </div>
            <ul className="space-y-3 text-xs text-slate-300">
              {group.skills.map((skill) => (
                <li key={skill.name} className="flex justify-between items-center font-mono">
                  <span className="text-slate-200">{skill.name}</span>
                  <span
                    className={
                      skill.level === 'Expert' || skill.level === 'Specialist'
                        ? 'text-orange-400 font-bold'
                        : skill.level === 'Advanced'
                        ? 'text-slate-300 font-medium'
                        : 'text-slate-500'
                    }
                  >
                    {skill.level}
                  </span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </section>
  );
}
