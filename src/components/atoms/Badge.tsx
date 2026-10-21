import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

export const badgeVariants = cva(
  'inline-flex items-center gap-1.5 rounded-full text-xs font-medium transition-colors select-none',
  {
    variants: {
      variant: {
        brand:
          'bg-orange-500/10 text-orange-400 border border-orange-500/20',
        brandSolid:
          'bg-orange-500/15 text-orange-400 font-semibold border border-orange-500/30',
        neutral:
          'bg-gray-800 text-gray-300 border border-gray-700/60',
        success:
          'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
        blue:
          'bg-blue-500/10 text-blue-400 border border-blue-500/20',
        purple:
          'bg-purple-500/10 text-purple-400 border border-purple-500/20',
        tag:
          'rounded px-2 py-0.5 text-[10px] sm:text-[11px] bg-gray-800 text-gray-300',
      },
      size: {
        sm: 'px-2 py-0.5 text-[10px]',
        md: 'px-2.5 py-1 text-xs',
        lg: 'px-3.5 py-1.5 text-xs',
      },
    },
    defaultVariants: {
      variant: 'brand',
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
