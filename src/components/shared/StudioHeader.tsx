import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/atoms/Button';
import { Badge } from '@/components/atoms/Badge';

export function StudioHeader() {
  return (
    <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between border-b border-gray-800/80">
      <Link href="/" className="flex items-center gap-3 group focus-visible:outline-orange-500 rounded-xl">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center font-bold text-white text-xl shadow-lg shadow-orange-500/20 group-hover:scale-105 transition-transform">
          A
        </div>
        <div>
          <div className="font-extrabold text-lg tracking-tight text-white flex items-center gap-2">
            ASRAKIT
            <Badge variant="brand" size="sm">Software Studio</Badge>
          </div>
          <p className="text-xs text-gray-400">Enterprise Applications & Digital Systems</p>
        </div>
      </Link>

      <nav aria-label="Navigasi Utama Studio" className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
        <a href="#biz-solutions" className="hover:text-orange-400 transition-colors">Solusi Bisnis</a>
        <a href="#biz-showcase" className="hover:text-orange-400 transition-colors">Katalog Sistem</a>
        <a href="#biz-comparison" className="hover:text-orange-400 transition-colors">Mengapa Asrakit</a>
        <Link href="/profile" className="text-orange-400 hover:text-orange-300 font-semibold flex items-center gap-1 transition-colors">
          <span>Profil Founder & CV</span>
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
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
