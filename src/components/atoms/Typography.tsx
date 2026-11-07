import React from 'react';
import { cn } from '@/lib/utils';

export function AccentText({ className, children, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span className={cn('text-orange-400 font-semibold', className)} {...props}>
      {children}
    </span>
  );
}

export interface SectionTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3';
}

export function SectionTitle({
  as: Component = 'h2',
  className,
  children,
  ...props
}: SectionTitleProps) {
  return (
    <Component
      className={cn('text-2xl sm:text-3xl font-bold tracking-tight text-slate-100', className)}
      {...props}
    >
      {children}
    </Component>
  );
}
