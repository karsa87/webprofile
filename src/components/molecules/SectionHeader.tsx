import React from 'react';
import { SectionTitle } from '@/components/atoms/Typography';
import { cn } from '@/lib/utils';

export interface SectionHeaderProps {
  badgeLabel?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeader({
  badgeLabel,
  title,
  description,
  align = 'left',
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'mb-8 sm:mb-12',
        align === 'center' ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl text-left',
        className
      )}
    >
      {badgeLabel && (
        <div className="text-[11px] font-mono uppercase tracking-widest text-orange-400 mb-2 font-semibold">
          {badgeLabel}
        </div>
      )}
      <SectionTitle className="mb-3">{title}</SectionTitle>
      {description && (
        <p className="text-sm text-slate-400 leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
