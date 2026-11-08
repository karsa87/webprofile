import React from 'react';
import type { ProjectDetail } from '@/domain/models';
import { Badge } from '@/components/atoms/Badge';
import { Card } from '@/components/atoms/Card';
import { Button } from '@/components/atoms/Button';

export interface ProjectCardProps {
  project: ProjectDetail;
  onSelect: (project: ProjectDetail) => void;
}

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <Card className="flex flex-col justify-between p-6 rounded-xl bg-[#0C121D] border border-white/[0.08] tactile-hover">
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <Badge variant="brand" size="sm">
            {project.categoryTag}
          </Badge>
          <span className="text-[11px] font-mono text-slate-400">
            {project.year}
          </span>
        </div>

        <h3 className="text-base font-bold text-white mb-1.5 leading-snug">
          {project.title}
        </h3>
        <p className="text-xs text-slate-400 leading-relaxed mb-5">
          {project.subtitle}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#111A29] text-slate-300 border border-white/[0.06]"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <Button
        type="button"
        variant="secondary"
        size="sm"
        className="w-full gap-2"
        onClick={() => onSelect(project)}
        aria-label={`Buka rincian arsitektur untuk ${project.title}`}
      >
        <svg className="w-3.5 h-3.5 text-orange-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M2 12h20" />
          <path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6" />
          <path d="m12 2 4 4-4 4" />
        </svg>
        <span>Detail Solusi & Arsitektur</span>
      </Button>
    </Card>
  );
}
