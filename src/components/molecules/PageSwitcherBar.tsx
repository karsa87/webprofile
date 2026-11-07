'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { trackPageSwitch } from '@/lib/analytics';

export function PageSwitcherBar() {
  const pathname = usePathname();
  const isProfile = pathname.startsWith('/profile');

  return (
    <aside
      aria-label="Navigasi Halaman Platform"
      className="sticky top-0 z-50 bg-[#090D14]/95 backdrop-blur-md border-b border-white/[0.08] text-xs py-2 px-4 sm:px-6"
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <span className="font-semibold text-slate-200 tracking-wider text-[11px] uppercase">
            Platform Mode
          </span>
          <span className="text-slate-500 hidden sm:inline">•</span>
          <span className="text-slate-400 hidden sm:inline text-xs">
            {isProfile
              ? 'Mochamad Karsa - Rekam Jejak Principal Engineer'
              : 'Asrakit Studio - Solusi Software Enterprise Kustom'}
          </span>
        </div>

        <nav
          aria-label="Mode Tampilan"
          className="flex items-center p-0.5 rounded-lg bg-[#0E1524] border border-white/10"
        >
          <Link
            href="/"
            onClick={() => {
              if (isProfile) trackPageSwitch('/');
            }}
            className={cn(
              'px-3 py-1.5 rounded-md text-xs font-medium transition-colors flex items-center gap-1.5 min-h-[36px]',
              !isProfile
                ? 'bg-orange-600 text-white font-semibold shadow-sm'
                : 'text-slate-400 hover:text-slate-100'
            )}
          >
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
            <span>Studio & Solusi Bisnis</span>
          </Link>

          <Link
            href="/profile"
            onClick={() => {
              if (!isProfile) trackPageSwitch('/profile');
            }}
            className={cn(
              'px-3 py-1.5 rounded-md text-xs font-medium transition-colors flex items-center gap-1.5 min-h-[36px]',
              isProfile
                ? 'bg-orange-600 text-white font-semibold shadow-sm'
                : 'text-slate-400 hover:text-slate-100'
            )}
          >
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <span>Profil Founder & Arsitektur</span>
          </Link>
        </nav>
      </div>
    </aside>
  );
}
