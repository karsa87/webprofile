import React from 'react';
import { cn } from '@/lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  elevated?: boolean;
}

export function Card({ className, elevated = false, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-xl border border-white/[0.08] bg-[#0C121D] text-slate-300 transition-colors duration-150',
        elevated && 'border-white/[0.14] bg-[#0F1624] shadow-sm',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
