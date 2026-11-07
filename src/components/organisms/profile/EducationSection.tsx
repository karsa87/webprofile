import React from 'react';
import { SectionHeader } from '@/components/molecules/SectionHeader';
import { EDUCATION_DATA } from '@/infrastructure/data/skills';

export function EducationSection() {
  return (
    <section id="pro-education" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-border-subtle">
      <SectionHeader
        align="left"
        badgeLabel="Latar Belakang Akademis"
        title="Pendidikan Formal"
        description="Fondasi disiplin ilmu komputer dan rekayasa perangkat lunak sejak pendidikan vokasi kejuruan hingga strata satu."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        {EDUCATION_DATA.map((item) => (
          <div
            key={item.id}
            className="p-6 md:p-8 rounded-xl bg-ink-raised border border-border-subtle hover:border-brand-secondary/40 transition-colors duration-150 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="font-mono text-xs font-semibold text-brand-secondary tracking-wider">
                  {item.period}
                </span>
                <span className="text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-ink-sunken border border-border-subtle text-text-muted">
                  {item.location}
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-text-primary tracking-tight">
                {item.degree}
              </h3>
              <p className="text-sm text-text-secondary mt-1.5 font-medium">
                {item.institution}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-border-subtle/60 flex items-center gap-2 text-xs text-text-muted font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-border-accent"></span>
              Akreditasi Nasional Terverifikasi
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
