import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export interface AsrakitLogoProps {
  className?: string;
  showTagline?: boolean;
  href?: string;
}

export function AsrakitLogo({ className, showTagline = true, href = '/' }: AsrakitLogoProps) {
  const content = (
    <div className={cn('inline-flex items-center gap-2.5 group select-none', className)}>
      {/* Geometric Isometric Emblem */}
      <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-[#121B2E] to-[#0A0F1D] border border-white/15 p-1 flex items-center justify-center transition-all duration-300 group-hover:border-orange-500/50 group-hover:shadow-[0_0_16px_-4px_rgba(249,115,22,0.4)]">
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          aria-hidden="true"
        >
          {/* Isometric Structural Facets forming 'A' */}
          <path
            d="M16 3L27 9.5V22.5L16 29L5 22.5V9.5L16 3Z"
            stroke="rgba(255,255,255,0.25)"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M16 7L24 12V20L16 25L8 20V12L16 7Z"
            fill="url(#logo-grad-dark)"
            stroke="url(#logo-grad-orange)"
            strokeWidth="1.5"
          />
          <path
            d="M16 12L20 15V17L16 19.5L12 17V15L16 12Z"
            fill="#F97316"
          />
          <circle cx="16" cy="16" r="2" fill="#FFFFFF" />
          <defs>
            <linearGradient id="logo-grad-orange" x1="8" y1="7" x2="24" y2="25" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FB923C" />
              <stop offset="1" stopColor="#EA580C" />
            </linearGradient>
            <linearGradient id="logo-grad-dark" x1="8" y1="7" x2="24" y2="25" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1E293B" />
              <stop offset="1" stopColor="#0F172A" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1">
          <span className="font-extrabold text-sm tracking-wider text-white font-mono group-hover:text-orange-400 transition-colors">
            ASRAKIT
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
        </div>
        {showTagline && (
          <span className="text-[9px] font-mono tracking-widest text-slate-400 uppercase -mt-0.5">
            Software Studio
          </span>
        )}
      </div>
    </div>
  );

  if (!href) return content;

  return (
    <Link href={href} aria-label="Beranda Asrakit Software Studio">
      {content}
    </Link>
  );
}
