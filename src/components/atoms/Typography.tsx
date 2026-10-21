import React from 'react';
import { cn } from '@/lib/utils';

export function GradientText({ className, children, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span className={cn('orange-gradient-text', className)} {...props}>
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
      className={cn('text-2xl sm:text-3xl font-extrabold tracking-tight text-white', className)}
      {...props}
    >
      {children}
    </Component>
  );
}
