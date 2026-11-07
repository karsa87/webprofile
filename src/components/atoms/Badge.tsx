import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

export const badgeVariants = cva(
  'inline-flex items-center gap-1.5 rounded text-xs font-medium tracking-tight select-none border',
  {
    variants: {
      variant: {
        brand:
          'bg-orange-500/10 text-orange-400 border-orange-500/25',
        neutral:
          'bg-white/[0.04] text-slate-300 border-white/10',
        subtle:
          'bg-slate-900 text-slate-400 border-white/[0.06]',
        success:
          'bg-emerald-500/10 text-emerald-400 border-emerald-500/25',
        mono:
          'font-mono text-[11px] bg-[#0E1524] text-slate-300 border-white/10 px-2 py-0.5',
      },
      size: {
        sm: 'px-2 py-0.5 text-[11px]',
        md: 'px-2.5 py-1 text-xs',
      },
    },
    defaultVariants: {
      variant: 'neutral',
      size: 'md',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, size, children, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, size, className }))} {...props}>
      {children}
    </span>
  );
}
