import React from 'react';
import type { CareerItem } from '@/domain/models';
import { SectionHeader } from '@/components/molecules/SectionHeader';
import { Badge } from '@/components/atoms/Badge';

export interface CareerTimelineProps {
  careers: readonly CareerItem[];
}

export function CareerTimeline({ careers }: CareerTimelineProps) {
  return (
    <section id="pro-experience" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b border-white/[0.08]">
      <SectionHeader
        align="left"
        badgeLabel="Kronologi Karir"
        title="Rekam Jejak & Kontribusi Nyata"
        description="Perjalanan rekayasa sistem enterprise berskala nasional, berfokus pada keandalan infrastruktur backend dan efisiensi database."
      />

      <div className="space-y-8 relative border-l border-white/[0.12] pl-6 ml-2 sm:ml-4 max-w-4xl">
        {careers.map((career) => (
          <div key={career.id} className="relative">
            {/* Timeline Dot Indicator */}
            <div
              className={`absolute -left-[31px] top-4 w-2.5 h-2.5 rounded-full ${
                career.isCurrent ? 'bg-orange-500 ring-4 ring-[#090D14]' : 'bg-slate-500 ring-4 ring-[#090D14]'
              }`}
            />

            <div className="p-5 sm:p-6 rounded-xl border border-white/[0.08] bg-[#0C121D] tactile-hover">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1.5">
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {career.role}
                </h3>
                <span className="font-mono text-xs text-orange-400 font-semibold px-2 py-0.5 rounded bg-orange-500/10 border border-orange-500/20">
                  {career.period}
                </span>
              </div>

              <div className="text-xs font-mono text-slate-400 mb-3.5 flex items-center gap-2">
                <strong className="text-slate-200">{career.company}</strong>
                <span>&bull;</span>
                <span>{career.location}</span>
              </div>

              <ul className="space-y-2 text-xs text-slate-300 leading-relaxed mb-4">
                {career.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-orange-400/80 shrink-0 mt-0.5 font-mono">•</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>

              {career.metricsHighlight && (
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#0A0F18] border border-white/10 text-[11px] font-mono text-slate-300">
                  <span className="text-orange-400 font-bold">METRIK TERUJI:</span>
                  <span>{career.metricsHighlight}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
