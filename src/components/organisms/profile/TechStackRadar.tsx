import React from 'react';
import { SectionHeader } from '@/components/molecules/SectionHeader';
import { Card } from '@/components/atoms/Card';
import { SKILL_GROUPS } from '@/infrastructure/data/skills';

export function TechStackRadar() {
  return (
    <section id="pro-stack" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-800/80">
      <SectionHeader
        badgeLabel="Skillset Matrix"
        title="Spesialisasi Teknologi & Alat Rekayasa"
      />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {SKILL_GROUPS.map((group) => (
          <Card key={group.title} className="p-6 rounded-2xl bg-gray-900/60 border border-gray-800">
            <h3 className="text-xs font-bold uppercase tracking-wider text-orange-400 mb-4">
              {group.title}
            </h3>
            <ul className="space-y-2.5 text-xs text-gray-300">
              {group.skills.map((skill) => (
                <li key={skill.name} className="flex justify-between items-center">
                  <span>{skill.name}</span>
                  <span
                    className={
                      skill.level === 'Expert' || skill.level === 'Specialist'
                        ? 'text-orange-400 font-semibold'
                        : skill.level === 'Advanced'
                        ? 'text-orange-400/90 font-medium'
                        : 'text-gray-400'
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
