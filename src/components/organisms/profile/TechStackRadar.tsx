import React from 'react';
import { SectionHeader } from '@/components/molecules/SectionHeader';
import { Card } from '@/components/atoms/Card';
import { SKILL_GROUPS } from '@/infrastructure/data/skills';

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
          <Card key={group.title} className="p-6 rounded-xl bg-[#0C121D] border border-white/[0.08]">
            <h3 className="text-xs font-mono uppercase tracking-wider text-orange-400 font-bold mb-4 pb-2 border-b border-white/10">
              {group.title}
            </h3>
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
