'use client';

import React, { useEffect, useCallback } from 'react';
import type { ProjectDetail } from '@/domain/models';
import { Badge } from '@/components/atoms/Badge';

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
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-gray-900 border border-gray-800 max-w-2xl w-full rounded-2xl p-6 sm:p-8 relative shadow-2xl overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Tutup Dialog Detail Proyek"
          className="absolute top-5 right-5 text-gray-400 hover:text-white p-2 rounded-lg hover:bg-gray-800 transition-colors focus-visible:outline-orange-500"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="mb-4">
          <span className="text-xs text-orange-400 font-bold uppercase tracking-wider">
            {project.year}
          </span>
          <h3 id="modal-project-title" className="text-xl sm:text-2xl font-extrabold text-white mt-1">
            {project.title}
          </h3>
          <p className="text-xs text-gray-400 mt-1">{project.subtitle}</p>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <Badge key={tech} variant="brand" size="sm">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="space-y-4 text-xs leading-relaxed text-gray-300 border-t border-gray-800 pt-4">
          <div>
            <h4 className="text-xs font-bold text-orange-400 uppercase tracking-wider mb-1">
              Tantangan Klien / Problem:
            </h4>
            <p className="text-gray-300">{project.problem}</p>
          </div>

          <div>
            <h4 className="text-xs font-bold text-orange-400 uppercase tracking-wider mb-1">
              Solusi Rekayasa Sistem:
            </h4>
            <p className="text-gray-300">{project.solution}</p>
          </div>

          <div className="p-3.5 rounded-xl bg-orange-500/10 border border-orange-500/20">
            <h4 className="text-xs font-bold text-orange-300 uppercase tracking-wider mb-1">
              Dampak Terukur (Outcome):
            </h4>
            <p className="text-white font-medium">{project.impact}</p>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-800 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-gray-800 hover:bg-gray-700 text-xs font-semibold text-white transition-colors focus-visible:outline-orange-500"
          >
            Tutup Preview
          </button>
        </div>
      </div>
    </div>
  );
}
