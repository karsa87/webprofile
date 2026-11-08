import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/atoms/Button';
import { AsrakitLogo } from '@/components/atoms/AsrakitLogo';

export function StudioHeader() {
  return (
    <header className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between border-b border-white/[0.08]">
      <AsrakitLogo />

      <nav
        aria-label="Navigasi Utama Studio"
        className="hidden md:flex items-center gap-7 text-xs font-medium text-slate-300"
      >
        <a href="#biz-solutions" className="hover:text-orange-400 transition-colors">
          Solusi Bisnis
        </a>
        <a href="#biz-roi" className="hover:text-orange-400 transition-colors">
          Kalkulator Hemat
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
