'use client';

import React, { useEffect, useCallback } from 'react';
import type { ProjectDetail } from '@/domain/models';
import { Badge } from '@/components/atoms/Badge';
import { Button } from '@/components/atoms/Button';

export interface ProjectDetailModalProps {
  project: ProjectDetail | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectDetailModal({
  project,
  isOpen,
  onClose,
}: ProjectDetailModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-[#0C121D] border border-white/20 max-w-2xl w-full rounded-xl p-6 sm:p-8 relative shadow-2xl overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Tutup Dialog Detail Proyek"
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors focus-visible:outline-orange-500"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="brand" size="sm">{project.categoryTag}</Badge>
            <span className="text-xs font-mono text-orange-400 font-semibold">{project.year}</span>
          </div>
          <h3 id="modal-project-title" className="text-xl sm:text-2xl font-bold text-white">
            {project.title}
          </h3>
          <p className="text-xs text-slate-400 mt-1">{project.subtitle}</p>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tech.map((tech) => (
            <Badge key={tech} variant="mono" size="sm">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="space-y-4 text-xs leading-relaxed text-slate-300 border-t border-white/10 pt-5">
          <div className="p-3.5 rounded-lg bg-[#090D14] border border-white/5">
            <h4 className="text-[11px] font-mono font-bold text-orange-400 uppercase tracking-wider mb-1">
              Tantangan Rekayasa & Kebutuhan Klien
            </h4>
            <p className="text-slate-300">{project.problem}</p>
          </div>

          <div className="p-3.5 rounded-lg bg-[#090D14] border border-white/5">
            <h4 className="text-[11px] font-mono font-bold text-orange-400 uppercase tracking-wider mb-1">
              Arsitektur & Solusi Sistem
            </h4>
            <p className="text-slate-300">{project.solution}</p>
          </div>

          <div className="p-3.5 rounded-lg bg-orange-500/10 border border-orange-500/20">
            <h4 className="text-[11px] font-mono font-bold text-orange-400 uppercase tracking-wider mb-1">
              Dampak Kuantitatif Terukur (Measurable Outcome)
            </h4>
            <p className="text-white font-medium">{project.impact}</p>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
          <Button
            type="button"
            variant="secondary"
            size="sm"
            onClick={onClose}
          >
            Tutup Dialog
          </Button>
        </div>
      </div>
    </div>
  );
}
