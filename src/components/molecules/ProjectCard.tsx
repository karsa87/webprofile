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
    <Card className="flex flex-col justify-between p-6 rounded-2xl bg-gray-900/80 border border-gray-800">
      <div>
        <Badge variant="brand" size="sm" className="mb-2">
          {project.categoryTag}
        </Badge>
        <h3 className="text-base font-bold text-white mb-1">
          {project.title}
        </h3>
        <p className="text-xs text-gray-400 leading-relaxed mb-4">
          {project.subtitle}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 rounded text-[10px] bg-gray-800 text-gray-300"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <Button
        type="button"
        variant="cardAction"
        onClick={() => onSelect(project)}
        aria-label={`Lihat detail arsitektur untuk ${project.title}`}
      >
        Detail Solusi & Arsitektur &rarr;
      </Button>
    </Card>
  );
}
