import React from 'react';
import { cn } from '@/lib/utils';

export interface MetricCounterProps {
  value: string;
  label: string;
  context?: string;
  className?: string;
}

export function MetricCounter({ value, label, context, className }: MetricCounterProps) {
  return (
    <div
      className={cn(
        'p-5 rounded-lg border border-white/[0.08] bg-[#0C121D] transition-colors hover:border-white/20',
        className
      )}
    >
      <div className="text-2xl sm:text-3xl font-extrabold text-slate-100 font-mono tracking-tight">
        {value}
      </div>
      <div className="text-xs font-semibold text-orange-400/90 mt-1 uppercase tracking-wider">
        {label}
      </div>
      {context && (
        <p className="text-[11px] text-slate-500 mt-1 leading-snug">
          {context}
        </p>
      )}
    </div>
  );
}
