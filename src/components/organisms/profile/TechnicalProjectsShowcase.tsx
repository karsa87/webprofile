'use client';

import React, { useState } from 'react';
import type { ProjectDetail } from '@/domain/models';
import { SectionHeader } from '@/components/molecules/SectionHeader';
import { ProjectCard } from '@/components/molecules/ProjectCard';
import { ProjectDetailModal } from '@/components/molecules/ProjectDetailModal';
import { trackProjectModalOpen } from '@/lib/analytics';
import { cn } from '@/lib/utils';

export interface TechnicalProjectsShowcaseProps {
  projects: readonly ProjectDetail[];
}

const FILTER_CATEGORIES = [
  { id: 'all', label: 'Semua Proyek' },
  { id: 'enterprise-wms', label: 'WMS & Supply Chain' },
  { id: 'bumn-scale', label: 'BUMN & National Scale' },
  { id: 'pos-retail', label: 'Retail POS' },
  { id: 'high-concurrency', label: 'High Concurrency' },
  { id: 'education', label: 'Fast API (Golang)' },
] as const;

export function TechnicalProjectsShowcase({ projects }: TechnicalProjectsShowcaseProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  const handleSelectProject = (project: ProjectDetail) => {
    setSelectedProject(project);
    trackProjectModalOpen(project.id, project.title);
  };

  return (
    <section id="pro-projects" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b border-white/[0.08]">
      <SectionHeader
        align="left"
        badgeLabel="Studi Kasus Arsitektur"
        title="Portofolio Rekayasa & Optimasi Sistem"
        description="Filter berdasarkan domain sistem atau klik pada proyek untuk membaca tantangan teknis, arsitektur data, dan hasil optimasi performa terukur."
      />

      {/* Interactive Category Filter Bar */}
      <div className="flex flex-wrap items-center gap-2 mb-8" role="tablist" aria-label="Filter kategori portofolio">
        {FILTER_CATEGORIES.map((tab) => {
          const isActive = selectedCategory === tab.id;
          const count = tab.id === 'all'
            ? projects.length
            : projects.filter((p) => p.category === tab.id).length;

          if (count === 0 && tab.id !== 'all') return null;

          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => setSelectedCategory(tab.id)}
              className={cn(
                'px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all flex items-center gap-1.5 min-h-[36px]',
                isActive
                  ? 'bg-orange-500 text-white shadow-sm font-semibold'
                  : 'bg-[#0E1524] text-slate-400 hover:text-white border border-white/10 hover:border-white/20'
              )}
            >
              <span>{tab.label}</span>
              <span
                className={cn(
                  'text-[10px] px-1.5 py-0.2 rounded-full font-bold',
                  isActive ? 'bg-orange-700 text-orange-100' : 'bg-white/5 text-slate-500'
                )}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onSelect={handleSelectProject}
          />
        ))}
      </div>

      {/* Accessible Interactive Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
