import React from 'react';
import { Badge } from '@/components/atoms/Badge';
import { SectionTitle } from '@/components/atoms/Typography';
import { cn } from '@/lib/utils';

export interface SectionHeaderProps {
  badgeLabel: string;
  title: string;
  description?: string;
  align?: 'center' | 'left';
  className?: string;
}

export function SectionHeader({
  badgeLabel,
  title,
  description,
  align = 'center',
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'mb-12 sm:mb-14',
        align === 'center' ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl text-left',
        className
      )}
    >
      <h2 className="text-xs font-bold uppercase tracking-wider text-orange-400 mb-2">
        {badgeLabel}
      </h2>
      <SectionTitle className="mb-3">{title}</SectionTitle>
      {description && (
        <p className="text-sm text-gray-400 leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
