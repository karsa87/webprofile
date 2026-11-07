import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/atoms/Button';

export function StudioHeader() {
  return (
    <header className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between border-b border-white/[0.08]">
      <Link
        href="/"
        className="flex items-center gap-3.5 group focus-visible:outline-orange-500 rounded-lg p-1"
      >
        <div className="w-9 h-9 rounded-lg bg-orange-600 flex items-center justify-center font-bold text-white text-lg tracking-tight border border-orange-500/50 shadow-sm">
          A
        </div>
        <div>
          <div className="font-extrabold text-base tracking-tight text-white flex items-center gap-2">
            <span>ASRAKIT</span>
            <span className="text-[10px] font-mono uppercase tracking-wider text-orange-400/90 font-semibold px-1.5 py-0.5 rounded bg-orange-500/10 border border-orange-500/20">
              Studio
            </span>
          </div>
          <p className="text-[11px] text-slate-400">Enterprise Applications & Systems</p>
        </div>
      </Link>

      <nav
        aria-label="Navigasi Utama Studio"
        className="hidden md:flex items-center gap-7 text-xs font-medium text-slate-300"
      >
        <a href="#biz-solutions" className="hover:text-orange-400 transition-colors">
          Solusi Bisnis
        </a>
        <a href="#biz-showcase" className="hover:text-orange-400 transition-colors">
          Katalog Sistem
        </a>
        <a href="#biz-comparison" className="hover:text-orange-400 transition-colors">
          Mengapa Asrakit
        </a>
        <Link
          href="/profile"
          className="text-orange-400 hover:text-orange-300 font-semibold transition-colors"
        >
          Profil Founder & CV
        </Link>
      </nav>

      <div className="flex items-center gap-3">
        <Button href="#biz-contact" size="sm" variant="primary">
          Konsultasi Proyek
        </Button>
      </div>
    </header>
  );
}
