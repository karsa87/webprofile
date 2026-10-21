import React from 'react';
import type { CareerItem } from '@/domain/models';
import { SectionHeader } from '@/components/molecules/SectionHeader';
import { Badge } from '@/components/atoms/Badge';

export interface CareerTimelineProps {
  careers: readonly CareerItem[];
}

export function CareerTimeline({ careers }: CareerTimelineProps) {
  return (
    <section id="pro-experience" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-800/80">
      <SectionHeader
        align="left"
        badgeLabel="Riwayat Karir Profesional"
        title="Perjalanan Karir & Kontribusi Nyata"
      />

      <div className="space-y-8 relative border-l-2 border-gray-800 pl-6 ml-3 max-w-4xl">
        {careers.map((career) => (
          <div key={career.id} className="relative">
            {/* Timeline Dot Indicator */}
            <div
              className={`absolute -left-[31px] top-1.5 w-3 h-3 rounded-full ring-4 ring-gray-950 ${
                career.isCurrent ? 'bg-orange-500' : 'bg-gray-600'
              }`}
            />

            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
              <h3 className="text-lg font-bold text-white">{career.role}</h3>
              {career.isCurrent ? (
                <Badge variant="brandSolid" size="sm">
                  {career.period}
                </Badge>
              ) : (
                <span className="text-xs font-semibold text-gray-400">{career.period}</span>
              )}
            </div>

            <div className="text-xs font-semibold text-gray-300 mb-3">
              {career.company} • {career.location}
            </div>

            <ul className="space-y-1.5 text-xs text-gray-400 list-disc list-inside leading-relaxed mb-3">
              {career.responsibilities.map((resp, idx) => (
                <li key={idx}>{resp}</li>
              ))}
            </ul>

            {career.metricsHighlight && (
              <Badge variant="tag" size="sm">
                ⚡ {career.metricsHighlight}
              </Badge>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
