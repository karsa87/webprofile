'use client';

import React, { useState } from 'react';
import type { ProjectDetail } from '@/domain/models';
import { SectionHeader } from '@/components/molecules/SectionHeader';
import { ProjectCard } from '@/components/molecules/ProjectCard';
import { ProjectDetailModal } from '@/components/molecules/ProjectDetailModal';
import { trackProjectModalOpen } from '@/lib/analytics';

export interface TechnicalProjectsShowcaseProps {
  projects: readonly ProjectDetail[];
}

export function TechnicalProjectsShowcase({ projects }: TechnicalProjectsShowcaseProps) {
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);

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
        description="Klik pada proyek untuk membaca tantangan teknis, arsitektur data, dan hasil optimasi performa terukur."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
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
