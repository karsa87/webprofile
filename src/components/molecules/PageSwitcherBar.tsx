'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/atoms/Badge';

export function PageSwitcherBar() {
  const pathname = usePathname();
  const isProfile = pathname.startsWith('/profile');

  return (
    <aside aria-label="Navigasi Halaman" className="bg-gray-950/90 border-b border-gray-800/90 text-xs py-2 px-4 sticky top-0 z-50 glass-nav">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Badge variant="brandSolid" size="sm">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
            Navigasi Halaman
          </Badge>
          <span className="text-gray-400 hidden sm:inline">Pilih halaman yang ingin dilihat:</span>
        </div>

        <nav aria-label="Tampilan Mode" className="flex items-center gap-1.5 bg-gray-900 p-1 rounded-xl border border-gray-800">
          <Link
            href="/"
            className={cn(
              'px-3.5 py-1.5 rounded-lg text-xs transition-all flex items-center gap-1.5 focus-visible:outline-orange-500',
              !isProfile
                ? 'font-bold bg-orange-500 text-white shadow-md shadow-orange-500/25'
                : 'font-medium text-gray-400 hover:text-white'
            )}
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <span>Halaman Utama (Asrakit Studio & Bisnis)</span>
          </Link>

          <Link
            href="/profile"
            className={cn(
              'px-3.5 py-1.5 rounded-lg text-xs transition-all flex items-center gap-1.5 focus-visible:outline-orange-500',
              isProfile
                ? 'font-bold bg-orange-500 text-white shadow-md shadow-orange-500/25'
                : 'font-medium text-gray-400 hover:text-white'
            )}
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span>Profil Founder & Portofolio Teknis (Karsa)</span>
          </Link>
        </nav>
      </div>
    </aside>
  );
}
