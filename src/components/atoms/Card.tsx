import React from 'react';
import { cn } from '@/lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  interactive?: boolean;
}

export function Card({ className, interactive = true, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-gray-800 bg-gray-900/60 p-6',
        interactive && 'card-hover',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
