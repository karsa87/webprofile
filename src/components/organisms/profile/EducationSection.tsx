import React from 'react';
import { SectionHeader } from '@/components/molecules/SectionHeader';
import { Card } from '@/components/atoms/Card';
import { EDUCATION_DATA } from '@/infrastructure/data/skills';

export function EducationSection() {
  return (
    <section id="pro-education" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-800/80">
      <SectionHeader
        align="left"
        badgeLabel="Latar Belakang Akademis"
        title="Pendidikan Formal"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl">
        {EDUCATION_DATA.map((item) => (
          <Card key={item.id} className="p-6 rounded-2xl bg-gray-900/60 border border-gray-800">
            <span className="text-xs text-orange-400 font-semibold">{item.period}</span>
            <h3 className="text-base font-bold text-white mt-1">{item.degree}</h3>
            <p className="text-xs text-gray-400 mt-1">
              {item.institution} &bull; {item.location}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}
