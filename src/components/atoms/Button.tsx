import React from 'react';
import Link from 'next/link';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-xl text-xs font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]',
  {
    variants: {
      variant: {
        primary:
          'bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/25',
        secondary:
          'bg-gray-900/90 hover:bg-gray-800 text-gray-200 border border-gray-700',
        outline:
          'bg-gray-800 hover:bg-gray-700 text-gray-200 border border-gray-700',
        ghost:
          'bg-transparent hover:text-orange-400 text-gray-300',
        cardAction:
          'w-full py-2.5 rounded-xl bg-gray-800 hover:bg-orange-500 hover:text-white text-xs font-semibold text-gray-200 transition-colors',
      },
      size: {
        sm: 'px-3 py-1.5 text-xs',
        md: 'px-4 py-2.5 text-xs sm:text-sm',
        lg: 'px-7 py-3.5 text-sm sm:text-base',
        icon: 'p-2 rounded-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
  isExternal?: boolean;
  download?: boolean | string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, href, isExternal, download, children, ...props }, ref) => {
    if (href) {
      if (isExternal || download) {
        return (
          <a
            href={href}
            target={isExternal && !download ? "_blank" : undefined}
            rel={isExternal && !download ? "noopener noreferrer" : undefined}
            download={download}
            className={cn(buttonVariants({ variant, size, className }))}
          >
            {children}
          </a>
        );
      }
      return (
        <Link
          href={href}
          className={cn(buttonVariants({ variant, size, className }))}
        >
          {children}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
