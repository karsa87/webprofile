import React from 'react';
import { cn } from '@/lib/utils';

export interface MetricCounterProps {
  value: string;
  label: string;
  className?: string;
}

export function MetricCounter({ value, label, className }: MetricCounterProps) {
  return (
    <div
      className={cn(
        'p-4 rounded-xl bg-gray-900/40 border border-gray-800 transition-colors hover:border-gray-700',
        className
      )}
    >
      <div className="text-2xl font-bold text-orange-400 font-mono tracking-tight">{value}</div>
      <p className="text-xs text-gray-400 mt-0.5">{label}</p>
    </div>
  );
}
